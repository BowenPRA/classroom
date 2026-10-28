// src/guess-who/Remote.jsx
// Mr Bowen's remote, at #/guess-who/remote/<room>: on his phone (scan the QR on
// the board) or in a second window on the laptop. It shows the secret person
// and sends the board what he says. The board keeps the game; this end only
// asks, and draws the copy of the game the board sends back.
//
// Built for one hand at a busy booth, like the decks' remote, in three bands:
// what to know pinned at the top (the phase, or in play the secret person,
// the questions asked, the prize and the faces up, and any alert); what has
// happened in the middle (the answers so far, each tap-to-fix); and what to do
// next pinned at the bottom, always in the same place (Deal, Start, YES / NO,
// Next player). It keeps the screen on, goes quiet when the screen locks, and
// installs to the home screen (src/lib/remote/phone.js). It also keeps today's
// booth tally (tally.js).
//
// For the teacher only, so English only.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  Dices, Check, X, Loader2, LogOut, Users, Plus, Minus, RotateCcw, Eye, MessageCircleQuestion, MoreHorizontal,
  WifiOff, TriangleAlert, Hourglass, ChevronRight, Trash2, Ghost as GhostIcon,
} from 'lucide-react'
import { Face, Prize, Lantern } from './art.jsx'
import SignIn from './SignIn.jsx'
import { useSchool } from './useSchool.js'
import { useTally } from './tally.js'
import { openBus } from '../lib/remote/bus.js'
import { cleanRoomCode } from '../lib/remote/room.js'
import { usePresence, useWakeLock, useRemoteAppTags, lastRoom, rememberRoom, buzz } from '../lib/remote/phone.js'
import { Sheet, Paused } from '../lib/remote/Sheet.jsx'
import { signOut } from './school.js'
import { BOARD_SIZE, MIN_BOARD, MONSTERS, cleanSteps, prizeFor, randomOf } from './game.js'

// The same budget as the decks' remote: a hello every 10 seconds while the
// screen is on, answered by the board with the whole game.
const HELLO_MS = 10 * 1000
const BOARD_GONE_MS = 25 * 1000
// The last room joined, so the home-screen app opens straight into it.
const LAST_ROOM_KEY = 'classroom:guess-who:remote-room'
// One id per page load. The board only listens to ids starting "remote".
const ME = `remote-${Math.random().toString(36).slice(2, 8)}`
const PHASES = [['lobby', 'Deal'], ['pick', 'Secret'], ['play', 'Play'], ['reveal', 'Reveal']]
const SHEET_LOOK = 'gw-ph-sheet'

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`

export default function Remote() {
  useRemoteAppTags({ dir: 'guess-who', title: 'Guess Who', theme: '#0d0418' })
  const { room: param } = useParams()
  const room = cleanRoomCode(param)
  useEffect(() => {
    const before = document.title
    document.title = room.length === 4 ? `Guess Who ${room}` : 'Guess Who remote'
    return () => { document.title = before }
  }, [room])
  if (room.length !== 4) return <RoomEntry />
  return <RemoteRoom key={room} room={room} />
}

function RoomEntry() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [code, setCode] = useState('')
  const [saved] = useState(() => cleanRoomCode(lastRoom(LAST_ROOM_KEY)))
  const go = (e) => {
    e.preventDefault()
    const c = cleanRoomCode(code)
    if (c.length === 4) navigate(`/guess-who/remote/${c}`)
  }
  // The home-screen app starts here: straight back into the last room, unless
  // Mr Bowen asked for another code (?code=new).
  if (saved.length === 4 && params.get('code') !== 'new') return <Navigate to={`/guess-who/remote/${saved}`} replace />
  return (
    <div className="gw-phone">
      <div className="gw-ph-app justify-center px-4">
        <form onSubmit={go} className="gw-panel p-5 space-y-3">
          <div className="gw-kicker">Guess Who remote</div>
          <div className="font-bold text-white/90">Type the room code from the board.</div>
          <input
            className="gw-input gw-code-input"
            value={code}
            onChange={(e) => setCode(cleanRoomCode(e.target.value))}
            placeholder="ABCD"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
          />
          <button className="gw-btn gw-btn-orange w-full justify-center gw-ph-big" type="submit">Join</button>
        </form>
      </div>
    </div>
  )
}

function RemoteRoom({ room }) {
  const [host, setHost] = useState(null) // the board's last state, plus `at`, when it came
  const [net, setNet] = useState('connecting')
  const [sheet, setSheet] = useState(null) // 'menu' | 'faces' | 'end' | { fix: i } | null
  const [editingFaces, setEditingFaces] = useState(false)
  const [chosen, setChosen] = useState(null) // { game, id }: the face tapped while choosing the secret
  const [answeredAt, setAnsweredAt] = useState(null)
  const busRef = useRef(null)
  const mainRef = useRef(null)
  const navigate = useNavigate()
  const { visible, idle, active, now, poke } = usePresence()
  const wake = useWakeLock(active)
  const { add: countGame, ...tally } = useTally()

  useEffect(() => { rememberRoom(LAST_ROOM_KEY, room) }, [room])

  // Connected only while the screen is on and in use. Closing on a lock and
  // opening afresh on unlock is also how a dropped connection recovers.
  useEffect(() => {
    if (!active) return undefined
    // `let`: the status callback below fires later and needs the bus it belongs to.
    let bus
    bus = openBus(`guess-who-${room}`, ME, (msg) => {
      if (msg.from !== 'board' || msg.type !== 'state' || !msg.game) return
      setHost({
        game: msg.game,
        ready: msg.ready,
        count: msg.count,
        pool: Array.isArray(msg.pool) ? msg.pool : [],
        guessing: Boolean(msg.guessing),
        considering: msg.considering ?? null,
        at: Date.now(),
      })
    }, (status) => {
      setNet(status)
      if (status === 'live') bus?.send('hello')
    })
    busRef.current = bus
    bus.send('hello')
    // The hello doubles as a heartbeat: the board answers each one with the
    // whole game, which also says it is still there.
    const beat = setInterval(() => bus.send('hello'), HELLO_MS)
    return () => {
      clearInterval(beat)
      bus.close()
      busRef.current = null
    }
  }, [active, room])

  const send = (type, body) => {
    buzz(20)
    busRef.current?.send(type, body)
  }

  const game = host?.game
  const phase = game?.phase
  const school = useSchool(Boolean(game) && game.source !== 'monsters')
  const people = game?.source === 'monsters' ? MONSTERS : school.students
  const byId = useMemo(() => new Map((people || []).map((p) => [p.id, p])), [people])
  const boardLive = Boolean(host) && now - host.at < BOARD_GONE_MS

  const playing = phase === 'play'
  const asked = game?.log.length || 0
  const pending = playing ? game.pending : null
  const facesUp = game ? game.cards.filter((id) => !game.down.includes(id)).length : 0
  const secretDown = playing && game.down.includes(game.secret)
  const guessing = playing && host.guessing

  // Count each finished game once in today's tally.
  useEffect(() => {
    if (game?.phase !== 'reveal') return
    const won = game.guess !== null && game.guess === game.secret
    countGame({ id: game.id || `${room}-${game.game}`, won, prize: won ? prizeFor(game.log.length, game.steps) : 0 })
  }, [game, room, countGame])

  // Buzzes worth looking up from the crowd for.
  useEffect(() => { if (pending) buzz([60, 40, 60]) }, [pending])
  useEffect(() => { if (secretDown) buzz([140, 70, 140]) }, [secretDown])
  useEffect(() => { if (guessing) buzz([40, 30, 40, 30, 40]) }, [guessing])

  // The newest answer stays in view, just above the question.
  useEffect(() => {
    if (playing && mainRef.current) mainRef.current.scrollTop = mainRef.current.scrollHeight
  }, [playing, asked])

  // One press, one answer: YES and NO wait for the board to count it, so a
  // double tap in the noise of a carnival cannot cost the player a Riverbuck.
  const waiting = answeredAt !== null && answeredAt === asked
  useEffect(() => {
    if (answeredAt === null) return undefined
    const t = setTimeout(() => setAnsweredAt(null), 2500)
    return () => clearTimeout(t)
  }, [answeredAt])
  const answer = (a) => {
    if (waiting) return
    send('answer', { answer: a })
    if (a !== 'again') setAnsweredAt(asked)
  }

  let status
  if (boardLive) status = { tone: 'ok', text: `Board connected · ${room}` }
  else if (net === 'offline') status = { tone: 'warn', icon: WifiOff, text: 'No internet' }
  else if (host) status = { tone: 'warn', icon: TriangleAlert, text: 'Board not answering' }
  else status = { tone: 'wait', icon: Loader2, spin: true, text: net === 'live' ? `Looking for ${room}…` : 'Connecting…' }

  // What each phase puts in the three bands.
  let head = null
  let main = null
  let foot = null
  let bottom = false
  const needsSignIn = game && game.source !== 'monsters' && school.session === null
  const chosenId = chosen && game && chosen.game === game.game && game.cards.includes(chosen.id) ? chosen.id : null

  if (!host) {
    main = (
      <div className="gw-panel gw-ph-notice">
        <Loader2 className="w-8 h-8 mx-auto animate-spin text-orange-300" />
        <div className="gw-ph-ptitle">Looking for board {room}…</div>
        <div className="gw-ph-pline">Open Guess Who on the laptop. The code is on its start screen.</div>
        <button className="gw-link mt-2" onClick={() => navigate('/guess-who/remote?code=new')}>Use a different code</button>
      </div>
    )
  } else if (needsSignIn) {
    main = <SignIn compact purpose="Sign in to see the secret student" />
  } else if (phase === 'lobby') {
    head = <Steps phase="lobby" />
    main = (
      <>
        <BoardPanel host={host} />
        <TallyPanel tally={tally} />
        <div className="gw-panel gw-ph-panel">
          <div className="gw-kicker">Riverbucks</div>
          <div className="gw-ph-pline is-white">3 for {game.steps[0]} questions · 2 for {game.steps[1]} · 1 for {game.steps[2]}</div>
          <div className="gw-ph-pline">Change them in the ••• menu.</div>
        </div>
      </>
    )
    foot = (
      <button className="gw-btn gw-btn-orange gw-ph-big" disabled={!host.ready} onClick={() => send('deal')}>
        Deal the cards
      </button>
    )
  } else if (phase === 'pick' && editingFaces) {
    head = <Steps phase="pick" />
    main = <FacesEditor key={game.game} game={game} pool={host.pool} byId={byId} send={send} />
    foot = (
      <button className="gw-btn gw-btn-orange gw-ph-big" onClick={() => setEditingFaces(false)}>
        <Check className="w-6 h-6" strokeWidth={3} />
        Done
      </button>
    )
  } else if (phase === 'pick') {
    const person = byId.get(chosenId)
    head = <Steps phase="pick" />
    main = (
      <div className="gw-mini-grid">
        {game.cards.map((id) => (
          <button key={id} className={`gw-mini ${chosenId === id ? 'is-chosen' : ''}`} onClick={() => setChosen({ game: game.game, id })}>
            <Face person={byId.get(id)} />
            <span className="gw-mini-name">{byId.get(id)?.name}</span>
          </button>
        ))}
      </div>
    )
    const random = () => send('pick', { id: randomOf(game.cards) })
    foot = (
      <>
        {chosenId ? (
          <button className="gw-btn gw-btn-gold gw-ph-big" onClick={() => send('pick', { id: chosenId })}>
            <span className="truncate">Start with {person?.name || 'this one'}</span>
          </button>
        ) : (
          <button className="gw-btn gw-btn-gold gw-ph-big" onClick={random}>
            <Dices className="w-6 h-6" strokeWidth={2.5} />
            Random secret
          </button>
        )}
        <div className="gw-ph-row">
          {chosenId && (
            <button className="gw-btn gw-btn-ghost gw-ph-small" onClick={random}>
              <Dices className="w-5 h-5" strokeWidth={2.5} />
              Random
            </button>
          )}
          <button className={`gw-btn gw-btn-ghost gw-ph-small ${chosenId ? '' : 'col-span-2'}`} onClick={() => setEditingFaces(true)}>
            <Users className="w-5 h-5" strokeWidth={2.5} />
            Change the faces
          </button>
        </div>
      </>
    )
  } else if (playing) {
    const secret = byId.get(game.secret)
    const prize = prizeFor(asked, game.steps)
    bottom = true
    head = (
      <>
        <div className="gw-ph-secret">
          <div className="gw-ph-secret-face"><Face person={secret} /></div>
          <div className="min-w-0">
            <div className="gw-kicker">The secret</div>
            <div className="gw-ph-secret-name">{secret?.name || '…'}</div>
            {(secret?.level || secret?.gender || secret?.age != null) && (
              <div className="gw-ph-chips">
                {secret.level && <span className="gw-chip">{secret.level}</span>}
                {secret.gender && <span className="gw-chip">{secret.gender}</span>}
                {secret.age != null && <span className="gw-chip">Age {secret.age}</span>}
              </div>
            )}
          </div>
        </div>
        <div className="gw-ph-strip">
          <div className="gw-ph-cell"><b>{asked}</b><span>Asked</span></div>
          <div className={`gw-ph-cell is-prize ${prize ? '' : 'is-none'}`}>
            <b><Prize n={prize} /></b>
            <span>{prize ? 'Right guess wins' : 'No Riverbucks left'}</span>
          </div>
          <button className="gw-ph-cell is-tap" onClick={() => setSheet('faces')} aria-label="See the faces">
            <b>{facesUp}</b>
            <span>Faces up</span>
            <ChevronRight className="gw-ph-cell-more" strokeWidth={3} />
          </button>
        </div>
        {secretDown && <Alert tone="rose" icon={TriangleAlert}>They flipped down the secret!</Alert>}
        {!secretDown && facesUp === 1 && !guessing && <Alert tone="gold" icon={Hourglass}>One face left: expect a guess.</Alert>}
        {!boardLive && <Alert tone="rose" icon={WifiOff}>The board stopped answering. Is Guess Who still open on the laptop?</Alert>}
      </>
    )
    main = (
      <>
        {asked > 0 ? (
          <ol className="gw-ph-log">
            {game.log.map((e, i) => (
              <li key={i}>
                <button className={`gw-ph-entry is-${e.a}`} onClick={() => setSheet({ fix: i })}>
                  <span className="gw-ph-entry-n">{i + 1}</span>
                  <span className={`gw-ph-entry-q ${e.q ? '' : 'is-spoken'}`}>{e.q || 'Asked out loud'}</span>
                  <span className="gw-ph-entry-a">{e.a === 'yes' ? 'YES' : 'NO'}</span>
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <p className="gw-ph-hint">Their answers will show here.</p>
        )}
        {asked > 0 && <p className="gw-ph-hint">Tap an answer to change it.</p>}
      </>
    )
    foot = (
      <>
        <Hero game={game} guessing={guessing} considering={host.considering} byId={byId} />
        <div className="grid grid-cols-2 gap-2.5">
          <button className="gw-answer is-yes" disabled={waiting || guessing} onClick={() => answer('yes')}>
            <Check className="w-9 h-9" strokeWidth={3.5} />
            YES
          </button>
          <button className="gw-answer is-no" disabled={waiting || guessing} onClick={() => answer('no')}>
            <X className="w-9 h-9" strokeWidth={3.5} />
            NO
          </button>
        </div>
        <div className="gw-ph-row">
          <button className="gw-btn gw-btn-ghost gw-ph-small" disabled={!pending || guessing} onClick={() => answer('again')}>
            <MessageCircleQuestion className="w-5 h-5" strokeWidth={2.5} />
            Try again
          </button>
          <button className="gw-btn gw-btn-ghost gw-ph-small" onClick={() => setSheet('end')}>
            End game…
          </button>
        </div>
      </>
    )
  } else if (phase === 'reveal') {
    head = <Steps phase="reveal" />
    main = (
      <>
        <Result game={game} byId={byId} />
        <TallyPanel tally={tally} />
      </>
    )
    foot = (
      <button className="gw-btn gw-btn-orange gw-ph-big" onClick={() => send('deal')}>
        Next player
      </button>
    )
  }

  const fix = sheet?.fix
  const fixEntry = playing && Number.isInteger(fix) ? game.log[fix] : null

  return (
    <div className="gw-phone" onPointerDown={poke} data-wake={wake}>
      <div className="gw-ph-app">
        <header className="gw-ph-head">
          <div className="gw-ph-top">
            <span className={`gw-ph-net is-${status.tone}`}>
              {status.icon ? <status.icon className={`w-4 h-4 ${status.spin ? 'animate-spin' : ''}`} strokeWidth={3} /> : <i />}
              {status.text}
            </span>
            <button className="gw-ph-menu" onClick={() => setSheet('menu')} aria-label="Menu">
              <MoreHorizontal className="w-5 h-5" strokeWidth={3} />
            </button>
          </div>
          {school.error && game && game.source !== 'monsters' && <Alert tone="rose" icon={TriangleAlert}>{school.error}</Alert>}
          {head}
        </header>

        <main ref={mainRef} className={`gw-ph-main ${bottom ? 'is-bottom' : ''}`}>
          {main}
        </main>

        {foot && <footer className="gw-ph-foot">{foot}</footer>}
      </div>

      {sheet === 'menu' && (
        <MenuSheet
          game={game}
          tally={tally}
          wake={wake}
          signedIn={Boolean(school.session)}
          send={send}
          onNewCode={() => navigate('/guess-who/remote?code=new')}
          onClose={() => setSheet(null)}
        />
      )}
      {sheet === 'faces' && playing && <FacesSheet game={game} byId={byId} facesUp={facesUp} onClose={() => setSheet(null)} />}
      {sheet === 'end' && playing && (
        <Sheet title="End this game?" onClose={() => setSheet(null)} className={SHEET_LOOK}>
          <div className="space-y-2.5 px-2 pb-2">
            <button className="gw-ph-option" onClick={() => { setSheet(null); send('giveUp') }}>
              <Eye className="w-6 h-6 shrink-0" strokeWidth={2.5} />
              <span><b>Show the answer</b><small>The board shows the secret. No Riverbucks.</small></span>
            </button>
            <button className="gw-ph-option" onClick={() => { setSheet(null); send('deal') }}>
              <RotateCcw className="w-6 h-6 shrink-0" strokeWidth={2.5} />
              <span><b>Deal a new board</b><small>Starts again straight away, with no reveal.</small></span>
            </button>
          </div>
        </Sheet>
      )}
      {fixEntry && (
        <FixSheet
          n={fix + 1}
          entry={fixEntry}
          onClose={() => setSheet(null)}
          onFix={(to) => { setSheet(null); send('fix', { i: fix, q: fixEntry.q, a: fixEntry.a, to }) }}
        />
      )}

      {visible && idle && <Paused onResume={poke} className="bg-[#0d0418]/95" />}
    </div>
  )
}

/** Deal → Secret → Play → Reveal, with this phase lit. */
function Steps({ phase }) {
  const at = PHASES.findIndex(([p]) => p === phase)
  return (
    <ol className="gw-ph-steps">
      {PHASES.map(([p, label], k) => (
        <li key={p} className={k < at ? 'is-done' : k === at ? 'is-now' : ''}>
          {k < at && <Check className="w-3.5 h-3.5" strokeWidth={3.5} />}
          {label}
        </li>
      ))}
    </ol>
  )
}

function Alert({ tone, icon: Icon, children }) {
  return (
    <div className={`gw-ph-alert is-${tone}`} role="status">
      <Icon className="w-5 h-5 shrink-0" strokeWidth={2.5} />
      <span>{children}</span>
    </div>
  )
}

/** What the board is about to deal from. */
function BoardPanel({ host }) {
  const { source } = host.game
  const title = source === 'monsters' ? 'Monsters · 24' : `${source === 'class' ? 'My class' : 'Whole school'} · ${plural(host.count, 'student')}`
  let line
  if (!host.ready) line = 'Still loading its faces.'
  else if (source === 'monsters') line = 'No sign-in needed.'
  else line = host.count > BOARD_SIZE ? `Each game deals ${BOARD_SIZE} at random.` : 'All of them go on the board.'
  return (
    <div className="gw-panel gw-ph-panel">
      <div className="gw-kicker">The board</div>
      <div className="gw-ph-ptitle">
        {source === 'monsters' && <GhostIcon className="w-5 h-5 inline -mt-1 mr-1.5" strokeWidth={2.5} />}
        {title}
      </div>
      <div className="gw-ph-pline">{line}</div>
    </div>
  )
}

function TallyPanel({ tally }) {
  return (
    <div className="gw-panel gw-ph-panel">
      <div className="gw-kicker">Today at the booth</div>
      <TallyNumbers tally={tally} />
    </div>
  )
}

function TallyNumbers({ tally }) {
  return (
    <div className="gw-ph-tally">
      <div><b>{tally.games}</b><span>Games</span></div>
      <div><b>{tally.winners}</b><span>Winners</span></div>
      <div><b className="is-gold"><Lantern className="gw-ph-tally-lantern" />{tally.paid}</b><span>Paid out</span></div>
    </div>
  )
}

/** The question waiting for an answer, or the final guess, or a quiet wait. */
function Hero({ game, guessing, considering, byId }) {
  if (guessing) {
    const person = byId.get(considering)
    return (
      <div className="gw-ph-hero is-guess" aria-live="assertive">
        <div className="gw-kicker">Final guess…</div>
        {considering ? (
          <div className="gw-ph-guess">
            <div className="gw-ph-guess-face"><Face person={person} /></div>
            <div className="min-w-0">
              <div className="gw-ph-hq">Is it {person?.name || '…'}?</div>
              <div className="gw-ph-pline">They’re deciding on the board.</div>
            </div>
          </div>
        ) : (
          <div className="gw-ph-hq is-small">They’re choosing a face on the board.</div>
        )}
      </div>
    )
  }
  if (game.pending) {
    return (
      <div key={game.pending} className="gw-ph-hero is-new" aria-live="assertive">
        <div className="gw-kicker">Question {game.log.length + 1}</div>
        <div className="gw-ph-hq">“{game.pending}”</div>
      </div>
    )
  }
  return (
    <div className="gw-ph-hero is-idle">
      <div className="gw-ph-hq is-small">Waiting for a typed question. They can ask out loud too.</div>
    </div>
  )
}

function Result({ game, byId }) {
  const secret = byId.get(game.secret)
  const guess = byId.get(game.guess)
  const won = game.guess !== null && game.guess === game.secret
  const ended = game.guess === null
  const prize = won ? prizeFor(game.log.length, game.steps) : 0
  return (
    <div className={`gw-ph-result ${won ? 'is-win' : 'is-lose'}`}>
      <div className="gw-ph-verdict">{won ? 'They got it!' : ended ? 'Game ended' : 'Wrong guess'}</div>
      {won && (prize ? (
        <div className="gw-ph-pay">
          Pay <Prize n={prize} className="gw-ph-pay-prize" /> Riverbuck{prize === 1 ? '' : 's'}
        </div>
      ) : (
        <div className="gw-ph-pay is-none">Too many questions: no Riverbucks</div>
      ))}
      <div className="gw-ph-pair">
        {!won && !ended && (
          <figure className="is-wrong">
            <div className="gw-ph-pair-face"><Face person={guess} /></div>
            <figcaption>They said {guess?.name}</figcaption>
          </figure>
        )}
        <figure className={won ? 'is-win' : 'is-answer'}>
          <div className="gw-ph-pair-face"><Face person={secret} /></div>
          <figcaption>{won ? secret?.name : `It was ${secret?.name || '…'}`}</figcaption>
        </figure>
      </div>
      <div className="gw-ph-pline">In {plural(game.log.length, 'question')}.</div>
    </div>
  )
}

/** Change one answer, or take the question out. The board says so under its log. */
function FixSheet({ n, entry, onFix, onClose }) {
  return (
    <Sheet title={`Question ${n}`} onClose={onClose} className={SHEET_LOOK}>
      <div className="space-y-3 px-2 pb-2">
        <div className={`gw-ph-fixq ${entry.q ? '' : 'is-spoken'}`}>{entry.q ? `“${entry.q}”` : 'Asked out loud'}</div>
        <div className="grid grid-cols-2 gap-2.5">
          {['yes', 'no'].map((a) => (
            <button key={a} className={`gw-ph-seg is-${a} ${entry.a === a ? 'is-now' : ''}`} onClick={() => (entry.a === a ? onClose() : onFix(a))}>
              {a === 'yes' ? <Check className="w-6 h-6" strokeWidth={3.5} /> : <X className="w-6 h-6" strokeWidth={3.5} />}
              {a.toUpperCase()}
              {entry.a === a && <small>now</small>}
            </button>
          ))}
        </div>
        <button className="gw-ph-danger" onClick={() => onFix(null)}>
          <Trash2 className="w-5 h-5" strokeWidth={2.5} />
          Take this question out
        </button>
      </div>
    </Sheet>
  )
}

/** Every face on the board: the ones flipped down dimmed, the secret ringed. */
function FacesSheet({ game, byId, facesUp, onClose }) {
  return (
    <Sheet title={`${plural(facesUp, 'face')} up`} onClose={onClose} className={SHEET_LOOK}>
      <div className="gw-mini-grid is-small px-1 pb-2">
        {game.cards.map((id) => (
          <span key={id} className={`gw-mini ${game.down.includes(id) ? 'is-down' : ''} ${id === game.secret ? 'is-secret' : ''}`}>
            <Face person={byId.get(id)} />
            <span className="gw-mini-name">{byId.get(id)?.name}</span>
          </span>
        ))}
      </div>
    </Sheet>
  )
}

function MenuSheet({ game, tally, wake, signedIn, send, onNewCode, onClose }) {
  const playing = game?.phase === 'play'
  return (
    <Sheet title="Guess Who remote" onClose={onClose} className={SHEET_LOOK}>
      <div className="space-y-3 px-2 pb-2">
        {game && (
          <section className="gw-panel gw-ph-panel">
            <div className="gw-kicker">Riverbucks steps</div>
            {playing ? (
              <div className="gw-ph-pline">3 for {game.steps[0]} questions · 2 for {game.steps[1]} · 1 for {game.steps[2]}. Change them between games.</div>
            ) : (
              <StepsEditor key={game.steps.join('-')} steps={game.steps} send={send} />
            )}
          </section>
        )}
        <section className="gw-panel gw-ph-panel">
          <div className="gw-kicker">Today at the booth</div>
          <TallyNumbers tally={tally} />
          <button
            className="gw-link mt-3"
            disabled={!tally.games}
            onClick={() => { if (window.confirm('Start today’s tally again from zero?')) tally.reset() }}
          >
            <RotateCcw className="w-4 h-4" strokeWidth={2.5} />
            Start the tally again
          </button>
        </section>
        {wake === 'unsupported' && <p className="gw-ph-hint">This browser cannot keep the screen on: tap now and then.</p>}
        <div className="flex flex-wrap justify-between gap-3 px-1">
          <button className="gw-link" onClick={onNewCode}>Use a different room code</button>
          {signedIn && (
            <button className="gw-link" onClick={() => signOut()}>
              <LogOut className="w-4 h-4" strokeWidth={2.5} />
              Sign out of this phone
            </button>
          )}
        </div>
      </div>
    </Sheet>
  )
}

/**
 * Before the secret is chosen: take faces off the board or put others on. Each
 * change goes to the board at once, so the room sees it happen. The list here
 * is the truth while editing, so quick taps never fight a reply in flight.
 */
function FacesEditor({ game, pool, byId, send }) {
  const [cards, setCards] = useState(game.cards)
  const change = (next) => {
    setCards(next)
    send('setCards', { cards: next })
  }
  const nameOf = (id) => byId.get(id)?.name || ''
  const off = pool.filter((id) => !cards.includes(id)).sort((a, b) => nameOf(a).localeCompare(nameOf(b)))
  const full = cards.length >= BOARD_SIZE
  const fewest = cards.length <= MIN_BOARD
  return (
    <div className="space-y-3">
      <div className="px-1">
        <div className="gw-ph-ptitle">Change the faces</div>
        <div className="gw-ph-pline">{cards.length} on the board · {MIN_BOARD} to {BOARD_SIZE}</div>
      </div>

      <div className="gw-kicker px-1">On the board · tap to take off</div>
      <div className="gw-mini-grid">
        {cards.map((id) => (
          <button key={id} className="gw-mini" disabled={fewest} onClick={() => change(cards.filter((x) => x !== id))}>
            <Face person={byId.get(id)} />
            <span className="gw-mini-badge is-off"><Minus className="w-3.5 h-3.5" strokeWidth={3.5} /></span>
            <span className="gw-mini-name">{nameOf(id)}</span>
          </button>
        ))}
      </div>

      {off.length > 0 && (
        <>
          <div className="gw-kicker px-1">{full ? 'Not on the board · take one off to add' : 'Not on the board · tap to add'}</div>
          <div className="gw-mini-grid">
            {off.map((id) => (
              <button key={id} className="gw-mini is-spare" disabled={full} onClick={() => change([...cards, id])}>
                <Face person={byId.get(id)} />
                <span className="gw-mini-badge is-on"><Plus className="w-3.5 h-3.5" strokeWidth={3.5} /></span>
                <span className="gw-mini-name">{nameOf(id)}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {pool.length > BOARD_SIZE && (
        <button className="gw-btn gw-btn-ghost w-full justify-center" onClick={() => send('deal')}>
          <Dices className="w-5 h-5" strokeWidth={2.5} />
          Deal a new {BOARD_SIZE} at random
        </button>
      )}
    </div>
  )
}

/** The three Riverbucks steps. Saved by the board, so they hold for every game until changed. */
function StepsEditor({ steps, send }) {
  const [draft, setDraft] = useState(steps)
  const clean = cleanSteps(draft)
  const changed = clean && clean.join() !== steps.join()
  return (
    <div className="space-y-2 mt-2">
      {[3, 2, 1].map((value, k) => (
        <label key={value} className="gw-ph-steprow">
          <Prize n={value} />
          <span>up to</span>
          <input
            className="gw-input"
            type="number"
            inputMode="numeric"
            min="1"
            max="30"
            value={draft[k]}
            onChange={(e) => setDraft(draft.map((n, j) => (j === k ? e.target.value : n)))}
            aria-label={`Most questions for ${plural(value, 'Riverbuck')}`}
          />
          <span>questions</span>
        </label>
      ))}
      {!clean && <p className="text-sm font-bold text-rose-300">Each number must be bigger than the one above it.</p>}
      <button className="gw-btn gw-btn-orange w-full justify-center" disabled={!changed} onClick={() => send('steps', { steps: clean })}>
        Save steps
      </button>
    </div>
  )
}
