// content/games/G04_around-the-world/widgets.jsx
// Around the World — one question at a time, big on the TV, from the maths
// question bank (content/banks/y7-math). A student stands behind a seated one;
// whoever says the answer first moves on round the room.
//
// Why a game and not slides: the deck cannot pick a random question from the
// units the teacher chose, never repeat one until all of them have been asked,
// and hold the answer back until the pair has answered. That is all this does.
// No timer, no scores, no sound: the race between two students is the game, and
// the room keeps track of who is travelling.
//
// One key does everything: Space, Enter, the right arrow or a clicker's
// PageDown shows the answer, then the next question. The left arrow (PageUp)
// hides the answer again, then steps back a question.
//
// The question is sized to fit whatever the slide gives it (a 1366×768
// projector or a desk window), so a 200-character word problem in Vietnamese
// never scrolls and "Simplify 8s − s." fills the screen. The answer's space is
// kept while it is hidden, so the question does not jump at the moment the
// class is reading it.
import { useState, useEffect, useLayoutEffect, useReducer, useRef } from 'react'
import { ArrowLeft, ArrowRight, Check, Eye, Globe, Play, Shuffle } from 'lucide-react'

import { UNITS, QUESTIONS } from '../../banks/y7-math/bank.js'

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

const T = {
  brand: ['Around the World', 'Vòng quanh thế giới'],
  subtitle: ['Year 7 Maths · one question at a time', 'Toán lớp 7 · từng câu một'],
  choose: ['Which units?', 'Chọn bài nào?'],
  unit: ['Unit', 'Chương'],
  all: ['All', 'Tất cả'],
  none: ['None', 'Bỏ chọn'],
  selected: ['questions', 'câu hỏi'],
  start: ['Start', 'Bắt đầu'],
  pickOne: ['Choose at least one unit', 'Hãy chọn ít nhất một bài'],
  setup: ['Units', 'Chọn bài'],
  reveal: ['Show the answer', 'Hiện đáp án'],
  next: ['Next question', 'Câu tiếp theo'],
  back: ['Back', 'Quay lại'],
  reshuffled: ['All asked · shuffled again', 'Đã hỏi hết · xáo lại'],
  keys: ['Space: answer, then next · ←: back', 'Space: đáp án, rồi câu tiếp · ←: quay lại'],
}
const t = (lang, key) => T[key][lang === 'vn' ? 1 : 0]

const FORWARD = new Set([' ', 'Enter', 'ArrowRight', 'ArrowDown', 'PageDown'])
const BACKWARD = new Set(['ArrowLeft', 'ArrowUp', 'PageUp'])
const GROUPS = ['1', '2', '3'].map((n) => ({ n, units: UNITS.filter((u) => u.unit.startsWith(`${n}.`)) }))
const STORE = 'around-the-world-units-v1'

const shuffle = (list) => {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function loadUnits() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || 'null')
    if (Array.isArray(saved)) return saved.filter((u) => UNITS.some((x) => x.unit === u))
  } catch {
    // No storage in this browser: start with nothing chosen.
  }
  return []
}

function saveUnits(units) {
  try { localStorage.setItem(STORE, JSON.stringify(units)) } catch { /* not kept, and that is fine */ }
}

// Plain bank text, made safe for very large type. Superscript digits are drawn
// as real <sup>, because at this size a fallback font draws ⁴ nearly full size
// and 10⁴ reads as 104. A space inside a number (60 000) becomes a no-break
// space, and so do the spaces round = × ÷ + − < >, so neither a number nor an
// equation ever splits across two lines: 6.1 × 10ⁿ = 61 000 stays whole.
const NBSP = '\u00a0'
const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', 'ⁿ': 'n' }
function BankText({ text }) {
  const glued = text
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NBSP}`)
    .replace(/ ([=×÷+−<>]) /g, `${NBSP}$1${NBSP}`)
  const parts = glued.split(/([⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ]+)/)
  return parts.map((part, i) => (i % 2
    ? <sup key={i} className="text-[0.6em] leading-none">{[...part].map((c) => SUP[c]).join('')}</sup>
    : part))
}

const headerBtn = 'shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-[10px] sm:text-xs active:border-b-2 active:translate-y-0.5 transition-all'

// ── Setup ───────────────────────────────────────────────────────────────────

function Setup({ lang, picked, setPicked, onStart }) {
  const count = QUESTIONS.filter((q) => picked.includes(q.unit)).length
  const toggle = (unit) => setPicked(picked.includes(unit) ? picked.filter((u) => u !== unit) : [...picked, unit])
  const toggleGroup = (units) => {
    const ids = units.map((u) => u.unit)
    const allIn = ids.every((u) => picked.includes(u))
    setPicked(allIn ? picked.filter((u) => !ids.includes(u)) : [...new Set([...picked, ...ids])])
  }
  return (
    <div className="h-full min-h-0 overflow-y-auto custom-scrollbar px-4 sm:px-6 py-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="self-center w-9 h-9 rounded-xl bg-[#1cb0f6] text-white flex items-center justify-center shadow-sm shrink-0">
            <Globe className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">{t(lang, 'brand')}</h1>
          <p className="font-bold text-slate-400 dark:text-slate-500 text-sm hidden sm:block">{t(lang, 'subtitle')}</p>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h2 className="flex-1 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{t(lang, 'choose')}</h2>
          <button type="button" onClick={() => setPicked(UNITS.map((u) => u.unit))} className={headerBtn}>{t(lang, 'all')}</button>
          <button type="button" onClick={() => setPicked([])} className={headerBtn}>{t(lang, 'none')}</button>
        </div>

        <div className="grid gap-3">
          {GROUPS.map((group) => (
            <div key={group.n} className="grid gap-1.5">
              <button
                type="button"
                onClick={() => toggleGroup(group.units)}
                className="justify-self-start text-sm font-black text-slate-500 dark:text-slate-400 hover:text-[#1cb0f6]"
              >
                {t(lang, 'unit')} {group.n}
              </button>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {group.units.map((u) => {
                  const on = picked.includes(u.unit)
                  const n = QUESTIONS.filter((q) => q.unit === u.unit).length
                  return (
                    <button
                      key={u.unit}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(u.unit)}
                      className={`text-left rounded-2xl bg-white dark:bg-slate-900 border-2 border-b-[5px] px-3 py-2.5 flex items-center gap-3 transition-all active:border-b-2 active:translate-y-[3px] ${
                        on ? 'border-[#1cb0f6] bg-sky-50 dark:bg-sky-500/10' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span className={`w-11 h-9 shrink-0 rounded-xl flex items-center justify-center font-black text-sm tabular-nums ${on ? 'bg-[#1cb0f6] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300'}`}>
                        {u.unit}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-black text-sm leading-tight text-slate-800 dark:text-slate-100">{pick(lang, u.title, u.titleVn)}</span>
                        <span className="block font-bold text-xs text-slate-400 dark:text-slate-500 tabular-nums">{n} {t(lang, 'selected')}</span>
                      </span>
                      {on && (
                        <span className="shrink-0 w-6 h-6 rounded-lg bg-[#58cc02] text-white flex items-center justify-center">
                          <Check className="w-4 h-4" strokeWidth={3.5} />
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Stuck to the bottom, so Start is never below the fold on a short
            window. */}
        <div className="sticky bottom-0 -mb-4 pt-4 pb-4 bg-white dark:bg-slate-900">
          <button
            type="button"
            onClick={onStart}
            disabled={!count}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-sm sm:text-base active:border-b-0 active:translate-y-1 transition-all disabled:bg-slate-200 disabled:border-slate-300 disabled:text-slate-400 dark:disabled:bg-slate-800 dark:disabled:border-slate-700 dark:disabled:text-slate-500"
          >
            <Play className="w-5 h-5" strokeWidth={3} />
            {count ? `${t(lang, 'start')} · ${count} ${t(lang, 'selected')}` : t(lang, 'pickOne')}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── The question ────────────────────────────────────────────────────────────

// Sizes the whole stage (question, answer, reason) as one block of type.
// Sizes come from a fixed ladder below one ceiling, so most questions land on
// exactly the same size and the next question does not jump: only a long word
// problem steps down a rung. Everything inside is set in em, so one number
// scales it all. The block stays hidden until it is sized, then fades in, so
// the class never sees a resize.
function useFitText(boxRef, contentRef, signature, big) {
  useLayoutEffect(() => {
    const box = boxRef.current
    const content = contentRef.current
    if (!box || !content) return undefined
    const fit = () => {
      const W = box.clientWidth
      const H = box.clientHeight - 12 // a little air above the button
      if (!W || !H) return
      const fits = (px) => {
        content.style.fontSize = `${px}px`
        return content.scrollHeight <= H && content.scrollWidth <= W
      }
      // The ceiling keeps a three-word question from turning into a poster;
      // the floor is the smallest size the back row can still read.
      const floor = big ? 22 : 14
      const ceiling = Math.max(floor, Math.floor(Math.min(W / (big ? 15 : 18), H / 6)))
      let px = ceiling
      while (px > floor && !fits(px)) px = Math.max(floor, Math.floor(px * 0.88))
      const ok = fits(px)
      content.dataset.px = String(px)
      content.dataset.fit = ok ? 'ok' : 'overflow'
      content.style.visibility = 'visible'
    }
    content.style.visibility = 'hidden'
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(box)
    document.fonts?.ready.then(fit)
    return () => observer.disconnect()
  }, [boxRef, contentRef, signature, big])
}

function Stage({ lang, big, question, revealed }) {
  const boxRef = useRef(null)
  const contentRef = useRef(null)
  useFitText(boxRef, contentRef, `${question.id}|${lang}`, big)
  const why = pick(lang, question.why, question.whyVn)
  return (
    <div ref={boxRef} className="flex-1 min-h-0 overflow-hidden flex items-center justify-center">
      <div ref={contentRef} key={`${question.id}|${lang}`} data-qid={question.id} className="w-full flex flex-col items-center gap-[0.45em] text-center antialiased animate-in fade-in duration-300">
        <p lang={lang === 'vn' ? 'vi' : 'en'} className="font-bold tracking-tight leading-[1.18] text-slate-800 dark:text-slate-100 text-balance">
          <BankText text={pick(lang, question.q, question.qVn)} />
        </p>
        {/* Hidden, not removed, until the reveal: the space is kept so the
            question stays exactly where the class is reading it. */}
        <div
          aria-hidden={!revealed}
          className={`max-w-full flex flex-col items-center gap-[0.25em] ${revealed ? 'animate-in fade-in duration-200' : 'invisible'}`}
        >
          <p className="text-[0.82em] font-black leading-[1.15] rounded-[0.35em] border-[0.06em] border-[#58cc02] bg-[#f0fdf4] dark:bg-emerald-500/15 text-[#2b7a0b] dark:text-emerald-200 px-[0.45em] py-[0.12em]">
            <BankText text={pick(lang, question.a, question.aVn)} />
          </p>
          {why && (
            <p className="text-[0.46em] font-bold leading-snug text-slate-500 dark:text-slate-400 max-w-[38em] text-balance">
              <BankText text={why} />
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ── The game ────────────────────────────────────────────────────────────────

const START = { screen: 'setup', order: [], pos: 0, revealed: false, lap: 1 }

// Every question in the chosen units comes up once before any comes up again.
// A new lap is a fresh shuffle that never opens on the question that just
// closed the last one.
function play(state, action) {
  switch (action.type) {
    case 'start':
      return { screen: 'play', order: action.order, pos: 0, revealed: false, lap: 1 }
    case 'setup':
      return { ...state, screen: 'setup' }
    case 'forward': {
      if (!state.revealed) return { ...state, revealed: true }
      if (state.pos < state.order.length - 1) return { ...state, pos: state.pos + 1, revealed: false }
      const fresh = [...action.fresh]
      if (fresh.length > 1 && fresh[0] === state.order[state.order.length - 1]) [fresh[0], fresh[1]] = [fresh[1], fresh[0]]
      return { ...state, order: fresh, pos: 0, revealed: false, lap: state.lap + 1 }
    }
    case 'backward':
      if (state.revealed) return { ...state, revealed: false }
      if (state.pos > 0) return { ...state, pos: state.pos - 1, revealed: true }
      return state
    default:
      return state
  }
}

export function AroundTheWorldGame({ lang = 'en', isDisplayMode = false }) {
  const [picked, setPickedState] = useState(loadUnits)
  const [game, dispatch] = useReducer(play, START)
  const { screen, order, pos, revealed, lap } = game
  const big = isDisplayMode

  const setPicked = (units) => { setPickedState(units); saveUnits(units) }

  // The shuffles happen here, in the event, and travel in the action, so the
  // reducer stays pure. Every press carries a fresh shuffle; only the press
  // that ends a lap uses it.
  const pool = () => QUESTIONS.filter((q) => picked.includes(q.unit)).map((q) => q.id)
  const start = () => { const ids = pool(); if (ids.length) dispatch({ type: 'start', order: shuffle(ids) }) }
  const forward = () => dispatch({ type: 'forward', fresh: shuffle(pool()) })
  const backward = () => dispatch({ type: 'backward' })

  // The deck hands the keyboard to a game slide, so the arrows and Enter are
  // ours. F (full screen), R (random student) and Esc stay the deck's. The
  // default is cancelled so a button still focused from a click is not
  // pressed a second time. Two presses faster than a render still count as
  // two, because the reducer always works on the latest state.
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (screen === 'setup') {
        if (e.key === 'Enter' || e.key === 'PageDown') { e.preventDefault(); start() }
        return
      }
      if (FORWARD.has(e.key)) { e.preventDefault(); forward() }
      else if (BACKWARD.has(e.key)) { e.preventDefault(); backward() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  if (screen === 'setup') {
    return <Setup lang={lang} picked={picked} setPicked={setPicked} onStart={start} />
  }

  const question = QUESTIONS.find((q) => q.id === order[pos])
  const unit = UNITS.find((u) => u.unit === question.unit)
  const small = big ? 'text-[clamp(0.85rem,1.2vw,1.25rem)]' : 'text-[10px] sm:text-xs'

  return (
    <div className="h-full min-h-0 flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 lg:p-6">
      {/* The deck's floating controls cover the top right in full screen until
          they idle out, so everything here sits on the left. */}
      <header className={`shrink-0 flex items-center gap-2 sm:gap-3 min-w-0 ${big ? 'pr-48' : ''}`}>
        <button type="button" onClick={() => dispatch({ type: 'setup' })} className={headerBtn}>
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          <span className="hidden sm:inline">{t(lang, 'setup')}</span>
        </button>
        <span className={`shrink-0 rounded-lg bg-[#1cb0f6] text-white font-black tabular-nums px-2 py-1 ${small}`}>{unit.unit}</span>
        <span className={`min-w-0 truncate font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ${small}`}>
          {pick(lang, unit.title, unit.titleVn)}
        </span>
        <span className={`shrink-0 font-black tabular-nums text-slate-400 dark:text-slate-500 ${small}`}>
          {pos + 1} / {order.length}
        </span>
        {lap > 1 && pos === 0 && (
          <span className={`shrink-0 hidden sm:flex items-center gap-1 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-200 font-black px-2 py-1 ${small}`}>
            <Shuffle className="w-3.5 h-3.5" strokeWidth={3} />{t(lang, 'reshuffled')}
          </span>
        )}
      </header>

      <Stage lang={lang} big={big} question={question} revealed={revealed} />

      <footer className="shrink-0 flex items-stretch gap-2.5">
        <button
          type="button"
          onClick={backward}
          disabled={!revealed && pos === 0}
          aria-label={t(lang, 'back')}
          className={`shrink-0 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-300 active:border-b-0 active:translate-y-1 transition-all disabled:opacity-40 ${big ? 'px-6' : 'px-4'}`}
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={3} />
        </button>
        <button
          type="button"
          onClick={forward}
          className={`flex-1 flex items-center justify-center gap-2 rounded-2xl border-b-4 text-white font-black uppercase tracking-widest active:border-b-0 active:translate-y-1 transition-all ${
            revealed ? 'bg-[#58cc02] border-[#46a302]' : 'bg-[#1cb0f6] border-[#1899d6]'
          } ${big ? 'py-4 text-[clamp(1rem,1.6vw,1.6rem)]' : 'py-3 text-sm sm:text-base'}`}
        >
          {revealed
            ? <>{t(lang, 'next')}<ArrowRight className="w-5 h-5" strokeWidth={3} /></>
            : <><Eye className="w-5 h-5" strokeWidth={2.5} />{t(lang, 'reveal')}</>}
        </button>
      </footer>
      {!big && (
        <p className="shrink-0 -mt-1 text-center text-[10px] font-bold text-slate-400 dark:text-slate-500 hidden sm:block">{t(lang, 'keys')}</p>
      )}
    </div>
  )
}
