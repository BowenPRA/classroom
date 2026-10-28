// src/remote/DeckRemote.jsx
// Mr Bowen's phone remote for the slide decks, at #/remote/<room>: scan the QR
// on a deck's "Phone remote" panel and the phone drives whatever deck that
// laptop has open. Built for one hand while walking round the room: the main
// controls sit at the bottom where a thumb reaches, swiping left or right
// anywhere above them turns the slide, and every press buzzes.
//
// The laptop owns the deck; this end only asks (src/lib/useDeckRemote.js
// answers). The phone has its own copy of the site, so slide titles, answer
// boxes and the teacher plan are read here and never travel: the wire carries
// a deck id, a slide number and a few flags. To spare The Current's realtime
// allowance the phone says hello every 10 seconds only while its screen is on
// and in use: it goes quiet when the screen locks, and pauses itself after 20
// minutes without a tap.
//
// For the teacher only, so English only.
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ChevronLeft, ChevronRight, Shuffle, EyeOff, Eye, Timer, ListOrdered, Loader2,
  X, WifiOff, MonitorUp, RotateCw, Pause, Smartphone, Maximize2, Minimize2,
} from 'lucide-react'
import { getLesson } from '../../content/registry.js'
import { openBus } from '../lib/remote/bus.js'
import { cleanRoomCode } from '../lib/remote/room.js'
import { planNotes } from './planNotes.js'

const HELLO_MS = 10 * 1000
const LAPTOP_GONE_MS = 25 * 1000
const PAUSE_AFTER_MS = 20 * 60 * 1000
const TIMER_MINUTES = [1, 2, 3, 5]
// One id per page load: the laptop counts phones by it.
const ME = `phone-${Math.random().toString(36).slice(2, 8)}`

// Slide text is written for KaTeX and markdown-lite; the phone shows it plain.
const plain = (s) => String(s || '')
  .replace(/\*\*/g, '')
  .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1/$2')
  .replace(/\\times/g, '×').replace(/\\div/g, '÷').replace(/\\cdot/g, '·')
  .replace(/\^\\circ|\\circ/g, '°').replace(/\\le\b/g, '≤').replace(/\\ge\b/g, '≥')
  .replace(/\\[a-zA-Z]+/g, '').replace(/[{}$]/g, '')
  .replace(/[ \t]+/g, ' ')
  .trim()

const slideTitle = (slide, i) =>
  plain(slide?.title) || plain(slide?.eyebrow) || plain(slide?.text) || (slide?.layout === 'game' ? 'Game' : `Slide ${i + 1}`)

const clock = (secs) => `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`

const buzz = () => { try { navigator.vibrate?.(12) } catch { /* not on this phone */ } }

export default function DeckRemote() {
  const { room: param } = useParams()
  const room = cleanRoomCode(param)
  useEffect(() => {
    const before = document.title
    document.title = room.length === 4 ? `Remote ${room}` : 'Phone remote'
    // A sideways swipe turns the slide; it must never be taken as the
    // browser's swipe-to-go-back, which would leave the remote mid-lesson.
    const root = document.documentElement
    const overscroll = root.style.overscrollBehaviorX
    root.style.overscrollBehaviorX = 'none'
    return () => {
      document.title = before
      root.style.overscrollBehaviorX = overscroll
    }
  }, [room])
  if (room.length !== 4) return <RoomEntry />
  return <RemoteRoom key={room} room={room} />
}

function Shell({ children, className = '' }) {
  return (
    <div className={`app-screen flex flex-col bg-[#0b1120] text-slate-100 font-sans select-none ${className}`} style={{ touchAction: 'manipulation' }}>
      {children}
    </div>
  )
}

function RoomEntry() {
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const go = (e) => {
    e.preventDefault()
    const c = cleanRoomCode(code)
    if (c.length === 4) navigate(`/remote/${c}`)
  }
  return (
    <Shell className="items-center justify-center px-5">
      <form onSubmit={go} className="w-full max-w-sm rounded-3xl bg-white/5 border border-white/10 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Smartphone className="w-7 h-7 text-[#1cb0f6]" strokeWidth={2.5} />
          <div className="text-xl font-black">Phone remote</div>
        </div>
        <p className="font-bold text-slate-300">Type the room code from the deck’s Phone remote panel.</p>
        <input
          className="w-full rounded-2xl bg-slate-900 border-2 border-white/15 focus:border-[#1cb0f6] outline-none px-4 py-3 text-center text-4xl font-black tracking-[0.3em] uppercase"
          value={code}
          onChange={(e) => setCode(cleanRoomCode(e.target.value))}
          placeholder="ABCD"
          autoCapitalize="characters"
          autoComplete="off"
          spellCheck={false}
        />
        <button type="submit" className="w-full rounded-2xl bg-[#1cb0f6] border-b-4 border-[#1899d6] py-3.5 font-black uppercase tracking-widest active:border-b-0 active:translate-y-1 transition-all">
          Join
        </button>
      </form>
    </Shell>
  )
}

/** Keep the screen on while `active`. Returns 'on', 'off' or 'unsupported'. */
function useWakeLock(active) {
  const supported = typeof navigator !== 'undefined' && 'wakeLock' in navigator
  const [held, setHeld] = useState(false)
  useEffect(() => {
    if (!active || !supported) return undefined
    let lock = null
    let dead = false
    // The browser lets go by itself when the page is hidden; `active` turns
    // false then and true again on return, which asks again.
    navigator.wakeLock.request('screen').then((l) => {
      if (dead) { l.release().catch(() => {}); return }
      lock = l
      setHeld(true)
      l.addEventListener('release', () => { if (!dead) setHeld(false) })
    }).catch(() => { if (!dead) setHeld(false) })
    return () => {
      dead = true
      lock?.release().catch(() => {})
    }
  }, [active, supported])
  if (!supported) return 'unsupported'
  return held && active ? 'on' : 'off'
}

function RemoteRoom({ room }) {
  const [host, setHost] = useState(null) // the laptop's last state, plus `at`, when it came
  const [net, setNet] = useState('connecting')
  const [visible, setVisible] = useState(() => document.visibilityState !== 'hidden')
  const [now, setNow] = useState(() => Date.now())
  const [lastTap, setLastTap] = useState(() => Date.now())
  const [sheet, setSheet] = useState(null) // 'slides' | 'timer' | null
  const busRef = useRef(null)
  const touch = useRef(null)

  // Twenty minutes without a tap pauses the remote: a phone left on the desk
  // with its screen held on would otherwise say hello all afternoon.
  const idle = now - lastTap > PAUSE_AFTER_MS
  const active = visible && !idle
  const wake = useWakeLock(active)

  useEffect(() => {
    const onVisibility = () => {
      const shown = document.visibilityState !== 'hidden'
      setVisible(shown)
      // Unlocking the phone is a tap: it must reconnect, not wake up paused.
      if (shown) {
        setLastTap(Date.now())
        setNow(Date.now())
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    // iOS can bring a page back from its cache without a visibility change.
    window.addEventListener('pageshow', onVisibility)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pageshow', onVisibility)
    }
  }, [])

  // Connected only while the screen is on and in use. Closing on a lock and
  // opening afresh on unlock is also how a dropped connection recovers.
  useEffect(() => {
    if (!active) return undefined
    // `let`: the status callback below fires later and needs the bus it belongs to.
    let bus
    bus = openBus(`deck-${room}`, ME, (msg) => {
      if (msg.from !== 'deck' || msg.type !== 'state' || typeof msg.deck !== 'string') return
      setHost({ ...msg, at: Date.now() })
    }, (status) => {
      setNet(status)
      if (status === 'live') bus?.send('hello')
    })
    busRef.current = bus
    bus.send('hello')
    // The hello doubles as a heartbeat: the laptop answers each one with the
    // whole state, which also says it is still there.
    const beat = setInterval(() => bus.send('hello'), HELLO_MS)
    const tick = setInterval(() => setNow(Date.now()), 1000)
    return () => {
      clearInterval(beat)
      clearInterval(tick)
      bus.close()
      busRef.current = null
    }
  }, [active, room])

  const [course, slug] = (host?.deck || '').split('/')
  const lesson = useMemo(() => (course && slug ? getLesson(course, slug) : null), [course, slug])
  const notes = useMemo(() => planNotes(lesson?.plan), [lesson])

  const laptopLive = Boolean(host) && now - host.at < LAPTOP_GONE_MS
  const ready = laptopLive && Boolean(lesson)
  const i = host?.i ?? 0
  const n = host?.n ?? 0

  const send = (type, body = {}) => {
    if (!host) return
    buzz()
    busRef.current?.send(type, { deck: host.deck, ...body })
  }
  const next = () => { if (ready && i < n - 1) send('next') }
  const prev = () => { if (ready && i > 0) send('prev') }

  const onTouchStart = (e) => {
    const t = e.touches[0]
    touch.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    const start = touch.current
    touch.current = null
    if (!start) return
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    if (Math.abs(dx) > 60 && Math.abs(dx) > 1.5 * Math.abs(dy)) {
      if (dx < 0) next()
      else prev()
    }
  }

  let status
  if (net === 'offline') status = { tone: 'warn', icon: WifiOff, text: 'No internet' }
  // Just unlocked: presses made now are held until the channel is back.
  else if (net !== 'live' && host) status = { tone: 'wait', spin: true, text: 'Reconnecting…' }
  else if (laptopLive) status = { tone: 'ok', text: `Connected · ${room}` }
  else if (host) status = { tone: 'warn', text: 'Laptop not answering' }
  else status = { tone: 'wait', spin: true, text: net === 'live' ? `Looking for ${room}…` : 'Connecting…' }

  const slides = lesson?.slides || []
  const slide = slides[i]
  const timerLeft = host?.tl != null ? Math.max(0, Math.ceil((host.at + host.tl - now) / 1000)) : null

  let body
  if (!host) {
    body = (
      <Notice icon={Loader2} spin title={`Looking for the laptop (room ${room})`}>
        On the laptop, open a deck and press <b>Phone remote</b>. The panel shows this room code.
      </Notice>
    )
  } else if (!lesson) {
    body = (
      <Notice icon={RotateCw} title="This phone has an older copy of the site">
        The laptop has a deck this phone does not know yet.
        <button onClick={() => window.location.reload()} className="mt-4 w-full rounded-2xl bg-[#1cb0f6] border-b-4 border-[#1899d6] py-3 font-black uppercase tracking-widest">Reload</button>
      </Notice>
    )
  } else {
    const here = notes.get(i + 1)
    body = (
      <div className="space-y-4 pb-4">
        <div className="text-xs font-bold text-slate-500 truncate">{lesson.unit} · {plain(lesson.title)}</div>

        <section key={i} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
            <span className="rounded-lg bg-white/10 px-2 py-1 tabular-nums text-slate-200">{i + 1} / {n}</span>
            {slide?.eyebrow && slide?.title && <span className="text-sky-300 truncate normal-case tracking-normal font-bold text-sm">{plain(slide.eyebrow)}</span>}
          </div>
          <h1 className="mt-2 text-[1.7rem] font-black leading-tight tracking-tight">{slideTitle(slide, i)}</h1>
          <div className="mt-1 text-sm font-bold text-slate-400">
            {i < n - 1 ? <>Up next: <span className="text-slate-200">{slideTitle(slides[i + 1], i + 1)}</span></> : 'Last slide'}
          </div>
        </section>

        {!laptopLive && (
          <Banner tone="warn" icon={WifiOff}>The laptop stopped answering. Is the deck still open, with Phone remote on?</Banner>
        )}
        {laptopLive && host.blank && (
          <Banner tone="warn" icon={EyeOff} action={{ label: 'Show slide', onClick: () => send('blank', { on: false }) }}>
            The screen is blank.
          </Banner>
        )}
        {laptopLive && !host.proj && (
          <Banner tone="info" icon={MonitorUp} action={{ label: 'Full screen', onClick: () => send('proj', { on: true }) }}>
            The projector shows the toolbars.
          </Banner>
        )}
        {laptopLive && host.proj && host.fill === false && (
          <Banner tone="info" icon={MonitorUp}>
            The browser’s bars still show. Press <b>F11</b> on the laptop once.
          </Banner>
        )}

        {host.pick && <PickCard pick={host.pick} />}

        {host.rv !== null && host.rv !== undefined && (
          <Card>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">Answer box</div>
                <div className="font-bold truncate">{plain(slide?.reveal?.label) || 'Reveal the answer'}</div>
              </div>
              <button
                disabled={!ready}
                onClick={() => send('reveal', { open: !host.rv })}
                className={`shrink-0 rounded-xl px-5 py-3 font-black uppercase tracking-widest text-sm transition-all active:scale-95 disabled:opacity-40 ${host.rv ? 'bg-white/10 border border-white/20 text-slate-100' : 'bg-[#8b5cf6] border-b-4 border-[#6d3fd8] text-white'}`}
              >
                {host.rv ? 'Close' : 'Open'}
              </button>
            </div>
            {slide?.reveal?.answer && (
              <div className="mt-3 pt-3 border-t border-white/10 text-sm text-slate-300 whitespace-pre-line leading-relaxed">{plain(slide.reveal.answer)}</div>
            )}
          </Card>
        )}

        {Array.isArray(host.btns) && host.btns.length > 0 && (
          <Card>
            <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2.5">On this slide</div>
            <div className="grid grid-cols-2 gap-2">
              {host.btns.map(([k, label, off]) => (
                <button
                  key={k}
                  disabled={!ready || Boolean(off)}
                  onClick={() => send('btn', { k })}
                  className="min-h-[3.25rem] rounded-xl bg-[#0087a8] border-b-4 border-[#00697f] px-3 py-2 font-black text-sm uppercase tracking-wide leading-tight active:border-b-0 active:translate-y-1 transition-all disabled:opacity-30"
                >
                  {label}
                </button>
              ))}
            </div>
          </Card>
        )}

        {here && (here.plan.length > 0 || here.answers.length > 0) && (
          <Card>
            {here.plan.map((p, k) => (
              <div key={`p${k}`} className={k ? 'mt-3' : ''}>
                <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">Plan · {p.when}</div>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-200">{p.text}</p>
              </div>
            ))}
            {here.answers.map((a, k) => (
              <div key={`a${k}`} className={here.plan.length || k ? 'mt-3 pt-3 border-t border-white/10' : ''}>
                <div className="text-[11px] font-black uppercase tracking-widest text-amber-300/90">Answer{a.label ? ` · ${a.label}` : ''}</div>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-200">{a.text}</p>
              </div>
            ))}
          </Card>
        )}
      </div>
    )
  }

  const statusTone = { ok: 'text-[#7ee03b]', warn: 'text-amber-300', wait: 'text-slate-400' }[status.tone]
  const StatusIcon = status.icon || (status.spin ? Loader2 : null)

  return (
    <Shell>
      {/* data-wake: whether the screen is held on ('on' / 'off' / 'unsupported'), for checks. */}
      <div onPointerDown={() => setLastTap(Date.now())} data-wake={wake} className="flex-1 min-h-0 flex flex-col">
        <header className="shrink-0 px-4 pt-[max(env(safe-area-inset-top),0.75rem)] pb-2 flex items-center justify-between gap-3">
          <span className={`flex items-center gap-2 text-sm font-black ${statusTone}`}>
            {StatusIcon
              ? <StatusIcon className={`w-4 h-4 ${status.spin ? 'animate-spin' : ''}`} strokeWidth={3} />
              : <span className="w-2.5 h-2.5 rounded-full bg-[#58cc02] shadow-[0_0_0_4px_rgba(88,204,2,0.2)]" />}
            {status.text}
          </span>
          {ready && (
            <div className="flex items-center gap-2">
              {/* Full screen on the projector: on (blue) or off. */}
              <button
                onClick={() => send('proj', { on: !host.proj })}
                aria-label={host.proj ? 'Leave full screen' : 'Full screen'}
                className={`p-2 rounded-xl border ${host.proj ? 'bg-[#1cb0f6] border-[#1cb0f6] text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}
              >
                {host.proj ? <Minimize2 className="w-4 h-4" strokeWidth={3} /> : <Maximize2 className="w-4 h-4" strokeWidth={3} />}
              </button>
              {host.langs?.length > 1 && <LangSwitch langs={host.langs} lang={host.lang} onPick={(l) => send('lang', { l })} />}
            </div>
          )}
        </header>

        {/* pan-y: the browser scrolls this area up and down, and leaves sideways swipes to us. */}
        <main
          className="flex-1 min-h-0 overflow-y-auto px-4 pt-2"
          style={{ touchAction: 'pan-y', overscrollBehaviorX: 'none' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {body}
        </main>

        <footer className="shrink-0 px-4 pt-3 pb-[max(env(safe-area-inset-bottom),0.9rem)] border-t border-white/10 bg-[#0b1120] space-y-3">
          <div className="grid grid-cols-4 gap-2">
            <Tool icon={Shuffle} label={host?.names === 0 ? 'No list' : 'Pick'} disabled={!ready || host.names === 0} onClick={() => send('pick')} />
            <Tool
              icon={host?.blank ? Eye : EyeOff}
              label={host?.blank ? 'Show' : 'Blank'}
              on={Boolean(host?.blank)}
              disabled={!ready}
              onClick={() => send('blank', { on: !host.blank })}
            />
            <Tool icon={Timer} label={timerLeft !== null ? clock(timerLeft) : 'Timer'} on={timerLeft !== null} disabled={!ready} onClick={() => setSheet('timer')} />
            <Tool icon={ListOrdered} label="Slides" disabled={!ready} onClick={() => setSheet('slides')} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={prev}
              disabled={!ready || i === 0}
              className="h-24 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center gap-1 font-black uppercase tracking-widest text-slate-200 active:bg-white/15 active:scale-[0.98] transition-all disabled:opacity-30"
            >
              <ChevronLeft className="w-7 h-7" strokeWidth={3} />
              Back
            </button>
            <button
              onClick={next}
              disabled={!ready || i >= n - 1}
              className="col-span-2 h-24 rounded-2xl bg-[#1cb0f6] border-b-[6px] border-[#1899d6] flex items-center justify-center gap-1 text-xl font-black uppercase tracking-widest text-white active:border-b-0 active:translate-y-1 transition-all disabled:opacity-30 disabled:border-b-0"
            >
              Next
              <ChevronRight className="w-8 h-8" strokeWidth={3} />
            </button>
          </div>
          {wake === 'unsupported' && (
            <p className="text-center text-[11px] font-bold text-slate-500">This browser cannot keep the screen on: tap now and then.</p>
          )}
        </footer>
      </div>

      {sheet === 'slides' && ready && (
        <SlidesSheet slides={slides} current={i} onClose={() => setSheet(null)} onGo={(k) => { send('go', { i: k }); setSheet(null) }} />
      )}
      {sheet === 'timer' && ready && (
        <TimerSheet
          running={timerLeft !== null}
          onClose={() => setSheet(null)}
          onSet={(mins) => { send('timer', { s: mins * 60 }); setSheet(null) }}
        />
      )}

      {visible && idle && (
        <div className="fixed inset-0 z-50 bg-[#0b1120]/95 flex flex-col items-center justify-center gap-4 px-8 text-center" onClick={() => { setLastTap(Date.now()); setNow(Date.now()) }}>
          <Pause className="w-12 h-12 text-slate-400" strokeWidth={2.5} />
          <div className="text-2xl font-black">Paused</div>
          <p className="font-bold text-slate-400">Twenty minutes without a tap, so the remote stopped to save data. Tap to carry on.</p>
        </div>
      )}
    </Shell>
  )
}

function LangSwitch({ langs, lang, onPick }) {
  return (
    <div className="flex rounded-xl bg-white/5 border border-white/10 p-0.5">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => onPick(l)}
          className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest ${lang === l ? 'bg-[#1cb0f6] text-white' : 'text-slate-400'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

function Card({ children }) {
  return <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">{children}</div>
}

function Notice({ icon: Icon, spin = false, title, children }) {
  return (
    <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-6 text-center">
      <Icon className={`w-9 h-9 mx-auto text-[#1cb0f6] ${spin ? 'animate-spin' : ''}`} strokeWidth={2.5} />
      <div className="mt-3 text-lg font-black">{title}</div>
      <div className="mt-2 font-bold text-slate-400">{children}</div>
    </div>
  )
}

function Banner({ tone, icon: Icon, action, children }) {
  const tones = {
    warn: 'bg-amber-400/10 border-amber-300/30 text-amber-100',
    info: 'bg-sky-400/10 border-sky-300/25 text-sky-100',
  }
  return (
    <div className={`rounded-2xl border px-4 py-3 flex items-center gap-3 ${tones[tone]}`}>
      <Icon className="w-5 h-5 shrink-0" strokeWidth={2.5} />
      <div className="flex-1 text-sm font-bold leading-snug">{children}</div>
      {action && (
        <button onClick={action.onClick} className={`shrink-0 rounded-xl px-3 py-2 text-xs font-black uppercase tracking-widest active:scale-95 ${tone === 'warn' ? 'bg-amber-300 text-slate-950' : 'bg-[#1cb0f6] text-white'}`}>
          {action.label}
        </button>
      )}
    </div>
  )
}

function PickCard({ pick }) {
  return (
    <Card>
      <div className="flex items-baseline justify-between gap-3">
        <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">Picked</div>
        <div className="text-xs font-black text-slate-400 tabular-nums">
          {pick.reset ? 'New round' : `${pick.left} left this round`}
        </div>
      </div>
      <div key={pick.c} className="mt-1 text-3xl font-black tracking-tight break-words animate-in zoom-in-95 fade-in duration-300">{pick.name}</div>
    </Card>
  )
}

function Tool({ icon: Icon, label, onClick, disabled = false, on = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-16 rounded-2xl border flex flex-col items-center justify-center gap-1 text-[11px] font-black uppercase tracking-widest tabular-nums transition-all active:scale-95 disabled:opacity-30 ${on ? 'bg-amber-300 border-amber-200 text-slate-950' : 'bg-white/5 border-white/15 text-slate-200 active:bg-white/15'}`}
    >
      <Icon className="w-5 h-5" strokeWidth={2.5} />
      {label}
    </button>
  )
}

function Sheet({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-40 bg-black/60 flex flex-col justify-end animate-in fade-in duration-200" onClick={onClose}>
      <div
        className="max-h-[85dvh] flex flex-col rounded-t-3xl bg-slate-900 border-t border-white/10 animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="shrink-0 flex items-center justify-between px-5 pt-4 pb-3">
          <div className="text-lg font-black">{title}</div>
          <button onClick={onClose} className="p-2 rounded-xl bg-white/10 active:bg-white/20" aria-label="Close">
            <X className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>
        <div className="overflow-y-auto px-3 pb-[max(env(safe-area-inset-bottom),1rem)]">{children}</div>
      </div>
    </div>
  )
}

function SlidesSheet({ slides, current, onGo, onClose }) {
  const currentRef = useRef(null)
  useEffect(() => { currentRef.current?.scrollIntoView({ block: 'center' }) }, [])
  return (
    <Sheet title="Go to slide" onClose={onClose}>
      <ol className="space-y-1">
        {slides.map((s, k) => (
          <li key={k}>
            <button
              ref={k === current ? currentRef : null}
              onClick={() => onGo(k)}
              className={`w-full flex items-center gap-3 rounded-2xl px-3 py-3 text-left active:bg-white/10 ${k === current ? 'bg-[#1cb0f6]/15 border border-[#1cb0f6]/40' : 'border border-transparent'}`}
            >
              <span className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black tabular-nums ${k === current ? 'bg-[#1cb0f6] text-white' : 'bg-white/10 text-slate-300'}`}>{k + 1}</span>
              <span className="min-w-0">
                <span className="block font-black leading-snug truncate">{slideTitle(s, k)}</span>
                {s.eyebrow && s.title && <span className="block text-xs font-bold text-slate-400 truncate">{plain(s.eyebrow)}</span>}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </Sheet>
  )
}

function TimerSheet({ running, onSet, onClose }) {
  return (
    <Sheet title="Timer on the projector" onClose={onClose}>
      <div className="grid grid-cols-2 gap-3 px-2 pb-2">
        {TIMER_MINUTES.map((m) => (
          <button
            key={m}
            onClick={() => onSet(m)}
            className="h-20 rounded-2xl bg-white/5 border border-white/15 text-2xl font-black active:bg-white/15 active:scale-[0.98] transition-all"
          >
            {m} min
          </button>
        ))}
        {running && (
          <button
            onClick={() => onSet(0)}
            className="col-span-2 h-14 rounded-2xl bg-rose-500/15 border border-rose-400/40 text-rose-200 font-black uppercase tracking-widest active:scale-[0.98] transition-all"
          >
            Stop the timer
          </button>
        )}
      </div>
    </Sheet>
  )
}
