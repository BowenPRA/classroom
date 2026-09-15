// content/games/G03_which-is/widgets.jsx
// Which Is…? — a standing-up game for Year 1. One adjective, two pictures, and
// the class walks to the side of the room it thinks is right. Wrong side sits
// down. Last child standing wins.
//
// Why a game and not slides: the deck cannot put the right picture on a random
// side every round, keep a countdown the room can hear, and hold the answer
// back until everybody has moved. That is all this does.
//
// Four stages, each with its own short lesson in front of it — one clap (er),
// three claps (more), two claps (ier or more), then everything. Each stage is
// played down to ONE winner and then everybody stands up for the next lesson;
// see STAGES in rounds.js for why.
//
// The screen's left is the class's left: the children face the screen, so the
// picture on the left belongs to the left-hand wall.
import { useState, useEffect, useRef, useCallback } from 'react'
import {
  ArrowLeft, ArrowRight, BookOpen, Check, Eye, Gamepad2, Play, RotateCcw,
  Timer, Trophy, Volume2, VolumeX, X,
} from 'lucide-react'

import { STAGES, ITEMS, ADJECTIVES, promptEn, promptVn, sentenceEn, sentenceVn, splitForm } from './rounds.js'
import { IMAGES } from './images.js'

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

const T = {
  brand: ['Which is…?', 'Cái nào…?'],
  subtitle: ['Year 1 · er or more?', 'Lớp 1 · er hay more?'],
  stages: ['Start from', 'Bắt đầu từ'],
  questions: ['questions', 'câu hỏi'],
  timer: ['Timer', 'Đồng hồ'],
  off: ['Off', 'Tắt'],
  startLesson: ['Start with the lesson', 'Bắt đầu với bài học'],
  skipLesson: ['Skip to the game', 'Vào chơi luôn'],
  setup: ['Setup', 'Cài đặt'],
  lesson: ['Lesson', 'Bài học'],
  back: ['Back', 'Quay lại'],
  next: ['Next', 'Tiếp'],
  play: ['Stand up! Play', 'Đứng lên! Chơi nào'],
  round: ['Round', 'Vòng'],
  reveal: ['Show the answer', 'Hiện đáp án'],
  nextRound: ['Next round', 'Vòng tiếp theo'],
  stay: ['Stay standing!', 'Đứng yên!'],
  sitDown: ['Sit down', 'Ngồi xuống'],
  stop: ['Stop!', 'Dừng lại!'],
  winnerBtn: ['We have a winner', 'Có người thắng rồi'],
  winner: ['We have a winner!', 'Chúng ta có người thắng!'],
  nextStage: ['Next lesson', 'Bài học tiếp theo'],
  again: ['Play this stage again', 'Chơi lại vòng này'],
  soundOn: ['Sound on', 'Bật tiếng'],
  soundOff: ['Sound off', 'Tắt tiếng'],
  clap: ['clap', 'tiếng vỗ'],
  claps: ['claps', 'tiếng vỗ'],
}
const t = (lang, key) => T[key][lang === 'vn' ? 1 : 0]

const TIMER_CHOICES = [5, 10, 15, 20, null]
const ORANGE = '#ea580c'

// Lesson type follows the smaller of the width and the height, so the same
// page fills a projector and still fits a 768px-tall window.
const LESSON_WORD = 'text-[clamp(1.6rem,min(3.6vw,6.5vh),5rem)]'
const LESSON_TITLE = 'text-[clamp(1.6rem,min(3.4vw,6vh),4.4rem)]'

// ── Sound ───────────────────────────────────────────────────────────────────
// Three short beeps for 3-2-1 and a long one for "stop", so children walking
// across the room hear the end without watching the number. Synthesised, so
// there is no file to load and nothing to credit.
function useBeeper(muted) {
  const ctxRef = useRef(null)
  return useCallback((freq, ms) => {
    if (muted) return
    try {
      if (!ctxRef.current) ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
      const ctx = ctxRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.frequency.value = freq
      osc.type = 'square'
      gain.gain.setValueAtTime(0.12, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + ms / 1000)
      osc.connect(gain).connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + ms / 1000)
    } catch {
      // No audio in this browser. The number on screen still counts down.
    }
  }, [muted])
}

const shuffle = (list) => {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Small pieces ────────────────────────────────────────────────────────────

function Form({ form, className = '' }) {
  return (
    <span className={className}>
      {splitForm(form).map((part, i) => (
        <span key={i} style={part.hi ? { color: ORANGE } : undefined}>{part.t}</span>
      ))}
    </span>
  )
}

// A word cut into claps, with one dot per clap under it.
function Claps({ syl, big }) {
  return (
    <span className="inline-flex flex-col items-center">
      <span className={`font-black tracking-tight text-slate-800 dark:text-slate-100 leading-tight ${LESSON_WORD}`}>
        {syl.join('·')}
      </span>
      <span className="flex gap-1.5 sm:gap-2 mt-2">
        {syl.map((_, i) => (
          <span key={i} className={`rounded-full bg-[#1cb0f6] ${big ? 'w-[clamp(0.8rem,1.2vw,1.3rem)] h-[clamp(0.8rem,1.2vw,1.3rem)]' : 'w-3 h-3 sm:w-4 sm:h-4'}`} />
        ))}
      </span>
    </span>
  )
}

function Chip({ stage, lang, big }) {
  return (
    <span
      className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-2.5 py-1 text-white font-black ${big ? 'text-[clamp(0.9rem,1.3vw,1.3rem)]' : 'text-xs sm:text-sm'}`}
      style={{ backgroundColor: stage.colour }}
    >
      {pick(lang, stage.name, stage.nameVn)}
      <span className="rounded-md bg-white/25 px-1.5">{stage.rule}</span>
    </span>
  )
}

const headerBtn = 'shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-[10px] sm:text-xs active:border-b-2 active:translate-y-0.5 transition-all'

// ── Setup ───────────────────────────────────────────────────────────────────

function Setup({ lang, stageIndex, setStageIndex, timer, setTimer, onLesson, onPlay }) {
  return (
    <div className="h-full min-h-0 overflow-y-auto custom-scrollbar px-4 sm:px-6 py-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex items-baseline gap-3 mb-5">
          <span className="self-center w-9 h-9 rounded-xl bg-[#f59e0b] text-white flex items-center justify-center shadow-sm shrink-0">
            <Gamepad2 className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">{t(lang, 'brand')}</h1>
          <p className="font-bold text-slate-400 dark:text-slate-500 text-sm hidden sm:block">{t(lang, 'subtitle')}</p>
        </div>

        <h2 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-1.5">{t(lang, 'stages')}</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {STAGES.map((stage, i) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setStageIndex(i)}
              className={`text-left rounded-2xl bg-white dark:bg-slate-900 border-2 border-b-[6px] p-3 flex items-center gap-3 transition-all active:border-b-2 active:translate-y-[4px] ${
                i === stageIndex ? 'border-slate-800 dark:border-slate-200' : 'border-slate-200 dark:border-slate-700'
              }`}
            >
              <span className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ backgroundColor: stage.colour }}>
                {i + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-black text-base leading-tight text-slate-800 dark:text-slate-100">
                  {pick(lang, stage.name, stage.nameVn)} <span style={{ color: stage.colour }}>→ {stage.rule}</span>
                </span>
                <span className="block font-bold text-xs text-slate-400 dark:text-slate-500">
                  {stage.questions.length} {t(lang, 'questions')}
                </span>
              </span>
              {i === stageIndex && (
                <span className="shrink-0 w-6 h-6 rounded-lg bg-[#58cc02] text-white flex items-center justify-center">
                  <Check className="w-4 h-4" strokeWidth={3.5} />
                </span>
              )}
            </button>
          ))}
        </div>

        <h2 className="mt-5 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-1.5">{t(lang, 'timer')}</h2>
        <div className="flex flex-wrap gap-2">
          {TIMER_CHOICES.map((choice) => (
            <button
              key={String(choice)}
              type="button"
              onClick={() => setTimer(choice)}
              className={`flex items-center gap-1.5 rounded-xl border-2 border-b-4 px-4 py-2 font-black text-sm transition-all active:border-b-2 active:translate-y-0.5 ${
                choice === timer
                  ? 'border-[#f59e0b] bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-200'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300'
              }`}
            >
              <Timer className="w-4 h-4" strokeWidth={3} />
              {choice === null ? t(lang, 'off') : `${choice}s`}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={onLesson}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-sm sm:text-base active:border-b-0 active:translate-y-1 transition-all"
          >
            <BookOpen className="w-5 h-5" strokeWidth={3} />{t(lang, 'startLesson')}
          </button>
          <button
            type="button"
            onClick={onPlay}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-sm sm:text-base active:border-b-0 active:translate-y-1 transition-all"
          >
            <Play className="w-5 h-5" strokeWidth={3} />{t(lang, 'skipLesson')}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Lesson ──────────────────────────────────────────────────────────────────

function Lesson({ lang, big, stage, page, pageIndex, pageCount, onBack, onNext, onSetup }) {
  const last = pageIndex === pageCount - 1
  return (
    <div className="h-full min-h-0 flex flex-col gap-2 p-3 sm:p-4 lg:p-5">
      <header className="shrink-0 flex items-center gap-2 sm:gap-3">
        <button type="button" onClick={onSetup} className={headerBtn}>
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          <span className="hidden sm:inline">{t(lang, 'setup')}</span>
        </button>
        <Chip stage={stage} lang={lang} big={big} />
        <span className="flex-1" />
        <span className={`shrink-0 font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ${big ? 'text-[clamp(0.8rem,1.1vw,1.1rem)]' : 'text-[10px] sm:text-xs'}`}>
          {t(lang, 'lesson')} {pageIndex + 1}/{pageCount}
        </span>
      </header>

      <h2 className={`shrink-0 mt-1 text-center font-black tracking-tight text-slate-800 dark:text-slate-100 ${LESSON_TITLE}`}>
        {pick(lang, page.title, page.titleVn)}
      </h2>

      {/* m-auto rather than justify-center: a centred column that grows past
          its box clips the top where no scrollbar reaches. Four rows go two
          across, so a page never runs taller than a 768px window. */}
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar flex">
        <div
          className="m-auto grid items-center justify-items-center gap-x-[clamp(2rem,6vw,7rem)] gap-y-[clamp(0.75rem,3vh,2.5rem)]"
          style={{ gridTemplateColumns: `repeat(${(page.rows?.length ?? 0) > 3 ? 2 : 1}, auto)` }}
        >
        {page.rows?.map((row, i) => (
          // items-start, and everything to the right of the word set on the
          // word's own line box, so the two words share a baseline and the
          // dots hang below without pushing either out of line.
          <div key={i} className={`flex items-start gap-[0.5em] font-black tracking-tight leading-tight ${LESSON_WORD}`}>
            <Claps syl={row.syl} big={big} />
            {row.to && (
              <>
                <ArrowRight className="shrink-0 w-[0.7em] h-[1.25em] text-slate-300 dark:text-slate-600" strokeWidth={3} />
                <Form form={row.to} className="text-slate-800 dark:text-slate-100" />
              </>
            )}
            {!row.to && (
              <span className="h-[2.778em] flex items-center text-[0.45em] text-[#1cb0f6]">
                {row.syl.length} {t(lang, row.syl.length === 1 ? 'clap' : 'claps')}
              </span>
            )}
          </div>
        ))}

        {page.never?.map((row, i) => (
          <div key={i} className={`flex items-center gap-[clamp(1rem,3vw,3rem)] font-black tracking-tight ${LESSON_WORD}`}>
            <span className="flex items-center gap-2 text-rose-500 line-through decoration-[6px]">
              <X className="w-[0.8em] h-[0.8em] shrink-0 no-underline" strokeWidth={4} />{row.wrong}
            </span>
            <span className="flex items-center gap-2 text-[#3d8c00] dark:text-emerald-300">
              <Check className="w-[0.8em] h-[0.8em] shrink-0" strokeWidth={4} />{row.right}
            </span>
          </div>
        ))}
        </div>
      </div>

      {page.say && (
        <p className={`shrink-0 text-center font-bold text-slate-600 dark:text-slate-300 ${big ? 'text-[clamp(1.3rem,2.2vw,2.3rem)]' : 'text-xl sm:text-2xl'}`}>
          {page.say.en.split(page.say.hi).map((part, i, all) => (
            <span key={i}>{part}{i < all.length - 1 && <span className="font-black" style={{ color: ORANGE }}>{page.say.hi}</span>}</span>
          ))}
          {lang === 'vn' && <span className="block text-[0.7em] text-slate-400 dark:text-slate-500">{page.say.vn}</span>}
        </p>
      )}

      <div className="shrink-0 flex items-center gap-2.5 mt-1">
        <button
          type="button"
          onClick={onBack}
          disabled={pageIndex === 0}
          className={`${headerBtn} py-3 disabled:opacity-40`}
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />{t(lang, 'back')}
        </button>
        <span className="flex-1 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === pageIndex ? 'bg-slate-700 dark:bg-slate-200' : 'bg-slate-300 dark:bg-slate-700'}`} />
          ))}
        </span>
        <button
          type="button"
          onClick={onNext}
          className={`shrink-0 flex items-center gap-2 px-5 rounded-2xl border-b-4 text-white font-black uppercase tracking-widest active:border-b-0 active:translate-y-1 transition-all ${
            last ? 'bg-[#58cc02] border-[#46a302]' : 'bg-[#1cb0f6] border-[#1899d6]'
          } ${big ? 'py-4 text-[clamp(1rem,1.6vw,1.6rem)]' : 'py-3 text-sm sm:text-base'}`}
        >
          {last ? <><Play className="w-5 h-5" strokeWidth={3} />{t(lang, 'play')}</> : <>{t(lang, 'next')}<ArrowRight className="w-5 h-5" strokeWidth={3} /></>}
        </button>
      </div>
    </div>
  )
}

// ── A picture card ──────────────────────────────────────────────────────────

function Card({ lang, big, itemKey, side, result }) {
  const item = ITEMS[itemKey]
  const Arrow = side === 'left' ? ArrowLeft : ArrowRight
  return (
    <div
      className={`relative min-h-0 flex rounded-[1.75rem] border-4 bg-white dark:bg-slate-900 p-2 sm:p-3 transition-all duration-300 ${
        result === 'win'
          ? 'border-[#58cc02] ring-8 ring-[#58cc02]/30'
          : 'border-slate-200 dark:border-slate-700'
      }`}
    >
      {/* Only the picture dims on a wrong answer, not the badge on top of it —
          a grey "Sit down" is one nobody reads. */}
      <div className={`flex-1 min-w-0 min-h-0 flex flex-col transition-all duration-300 ${result === 'lose' ? 'opacity-35 grayscale' : ''}`}>
        <Arrow
          className={`absolute top-3 ${side === 'left' ? 'left-3' : 'right-3'} z-10 text-slate-300 dark:text-slate-600 ${big ? 'w-[clamp(2rem,3vw,3.5rem)] h-[clamp(2rem,3vw,3.5rem)]' : 'w-8 h-8 sm:w-10 sm:h-10'}`}
          strokeWidth={3}
        />
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <img src={IMAGES[itemKey]} alt={item.word} className="max-h-full max-w-full object-contain rounded-2xl" />
        </div>
        <p className={`shrink-0 text-center font-black tracking-tight text-slate-800 dark:text-slate-100 leading-tight mt-1 ${big ? 'text-[clamp(2rem,3.6vw,3.8rem)]' : 'text-3xl sm:text-4xl'}`}>
          {item.word}
          {lang === 'vn' && <span className="ml-2 text-[0.55em] font-bold text-slate-400 dark:text-slate-500">{item.vn}</span>}
        </p>
      </div>
      {result && (
        <span
          className={`absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 whitespace-nowrap rounded-2xl px-4 py-2 text-white font-black uppercase tracking-wide shadow-lg animate-in zoom-in-75 duration-200 ${
            result === 'win' ? 'bg-[#58cc02]' : 'bg-rose-500'
          } ${big ? 'text-[clamp(1.1rem,1.8vw,1.9rem)]' : 'text-base sm:text-xl'}`}
        >
          {result === 'win' ? <Check className="w-6 h-6" strokeWidth={4} /> : <X className="w-6 h-6" strokeWidth={4} />}
          {t(lang, result === 'win' ? 'stay' : 'sitDown')}
        </span>
      )}
    </div>
  )
}

// ── The game ────────────────────────────────────────────────────────────────

export function WhichIsGame({ lang = 'en', isDisplayMode = false }) {
  const [screen, setScreen] = useState('setup') // 'setup' | 'lesson' | 'round' | 'winner'
  const [stageIndex, setStageIndex] = useState(0)
  const [pageIndex, setPageIndex] = useState(0)
  const [timer, setTimer] = useState(10)
  const [queue, setQueue] = useState([])
  const [round, setRound] = useState(0)
  const [current, setCurrent] = useState(null) // { question, winLeft }
  const [revealed, setRevealed] = useState(false)
  const [seconds, setSeconds] = useState(null)
  const [muted, setMuted] = useState(false)
  const beep = useBeeper(muted)
  const big = isDisplayMode

  const stage = STAGES[stageIndex]
  const page = stage.lesson[pageIndex]

  // Preload the stage's pictures, so a new round is never a blank card while
  // the school wifi catches up.
  useEffect(() => {
    stage.questions.forEach((question) => {
      [question.win, question.lose].forEach((key) => { Object.assign(new Image(), { src: IMAGES[key] }) })
    })
  }, [stage])

  // One question off the shuffled queue; when it runs dry, shuffle the stage
  // again. The side is random every time.
  const deal = (index, fromQueue, roundNo) => {
    const [question, ...rest] = fromQueue.length ? fromQueue : shuffle(STAGES[index].questions)
    setQueue(rest)
    setCurrent({ question, winLeft: Math.random() < 0.5 })
    setRevealed(false)
    setRound(roundNo)
    setSeconds(timer)
  }

  const nextRound = () => deal(stageIndex, queue, round + 1)

  // A fresh stage: a fresh shuffle, round 1, everybody standing.
  const startStage = (index = stageIndex) => {
    setStageIndex(index)
    setScreen('round')
    deal(index, [], 1)
  }

  const openLesson = (index = stageIndex) => {
    setStageIndex(index)
    setPageIndex(0)
    setSeconds(null)
    setScreen('lesson')
  }

  // The countdown.
  useEffect(() => {
    if (screen !== 'round' || seconds === null || seconds <= 0) return undefined
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds, screen])

  useEffect(() => {
    if (screen !== 'round' || seconds === null) return
    if (seconds === 0) beep(440, 700)
    else if (seconds <= 3) beep(880, 120)
  }, [seconds, screen, beep])

  const reveal = () => {
    setRevealed(true)
    setSeconds(null)
  }

  const lessonNext = () => {
    if (pageIndex < stage.lesson.length - 1) setPageIndex(pageIndex + 1)
    else startStage()
  }

  // Space or Enter moves things on: next lesson page, reveal, next round. The
  // default is cancelled so a button still focused from the last click is not
  // pressed as well.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== ' ' && e.key !== 'Enter') return
      if (screen !== 'lesson' && screen !== 'round') return
      e.preventDefault()
      if (screen === 'lesson') lessonNext()
      else if (revealed) nextRound()
      else reveal()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  if (screen === 'setup') {
    return (
      <Setup
        lang={lang}
        stageIndex={stageIndex}
        setStageIndex={setStageIndex}
        timer={timer}
        setTimer={setTimer}
        onLesson={() => openLesson()}
        onPlay={() => startStage()}
      />
    )
  }

  if (screen === 'lesson') {
    return (
      <Lesson
        lang={lang}
        big={big}
        stage={stage}
        page={page}
        pageIndex={pageIndex}
        pageCount={stage.lesson.length}
        onBack={() => setPageIndex(Math.max(0, pageIndex - 1))}
        onNext={lessonNext}
        onSetup={() => setScreen('setup')}
      />
    )
  }

  if (screen === 'winner') {
    const hasNext = stageIndex < STAGES.length - 1
    return (
      <div className="h-full min-h-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
        <span className="inline-flex w-24 h-24 rounded-3xl bg-amber-100 dark:bg-amber-500/20 text-amber-500 items-center justify-center mb-4">
          <Trophy className="w-14 h-14" strokeWidth={2.5} />
        </span>
        <h2 className={`font-black tracking-tight text-slate-800 dark:text-slate-100 ${big ? 'text-[clamp(2.5rem,5vw,5rem)]' : 'text-4xl sm:text-6xl'}`}>
          {t(lang, 'winner')}
        </h2>
        <div className="mt-3"><Chip stage={stage} lang={lang} big={big} /></div>
        <div className="mt-8 w-full max-w-2xl flex flex-col sm:flex-row gap-2.5">
          {hasNext && (
            <button
              type="button"
              onClick={() => openLesson(stageIndex + 1)}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-sm sm:text-base active:border-b-0 active:translate-y-1 transition-all"
            >
              <BookOpen className="w-5 h-5" strokeWidth={3} />
              {t(lang, 'nextStage')}: {pick(lang, STAGES[stageIndex + 1].name, STAGES[stageIndex + 1].nameVn)}
            </button>
          )}
          <button
            type="button"
            onClick={() => startStage()}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-sm sm:text-base active:border-b-0 active:translate-y-1 transition-all"
          >
            <RotateCcw className="w-5 h-5" strokeWidth={3} />{t(lang, 'again')}
          </button>
        </div>
        <button type="button" onClick={() => setScreen('setup')} className={`${headerBtn} mt-3`}>
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />{t(lang, 'setup')}
        </button>
      </div>
    )
  }

  // ── A round ───────────────────────────────────────────────────────────────
  const { question, winLeft } = current
  const adjective = ADJECTIVES[question.adj]
  const left = winLeft ? question.win : question.lose
  const right = winLeft ? question.lose : question.win
  const resultFor = (key) => (revealed ? (key === question.win ? 'win' : 'lose') : null)
  const prompt = promptEn(question)

  return (
    <div className="h-full min-h-0 flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 lg:p-5">
      <header className="shrink-0 flex items-center gap-2 sm:gap-3">
        <button type="button" onClick={() => setScreen('setup')} className={headerBtn}>
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          <span className="hidden sm:inline">{t(lang, 'setup')}</span>
        </button>
        <Chip stage={stage} lang={lang} big={big} />
        <span className={`min-w-0 flex-1 truncate font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ${big ? 'text-[clamp(0.8rem,1.1vw,1.1rem)]' : 'text-[10px] sm:text-xs'}`}>
          {t(lang, 'round')} {round}
        </span>
        <button type="button" onClick={() => openLesson()} className={headerBtn}>
          <BookOpen className="w-4 h-4" strokeWidth={3} />
          <span className="hidden lg:inline">{t(lang, 'lesson')}</span>
        </button>
        <button
          type="button"
          onClick={() => setMuted(!muted)}
          title={t(lang, muted ? 'soundOn' : 'soundOff')}
          aria-label={t(lang, muted ? 'soundOn' : 'soundOff')}
          className={`${headerBtn} ${muted ? 'text-rose-500 dark:text-rose-300' : ''}`}
        >
          {muted ? <VolumeX className="w-4 h-4" strokeWidth={3} /> : <Volume2 className="w-4 h-4" strokeWidth={3} />}
        </button>
        <button
          type="button"
          onClick={() => { setSeconds(null); setScreen('winner') }}
          className="shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-b-4 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-200 font-black uppercase tracking-widest text-[10px] sm:text-xs active:border-b-2 active:translate-y-0.5 transition-all"
        >
          <Trophy className="w-4 h-4" strokeWidth={3} />
          <span className="hidden sm:inline">{t(lang, 'winnerBtn')}</span>
        </button>
      </header>

      {/* The question, and the countdown beside it. */}
      <div className="shrink-0 flex items-center justify-center gap-4 sm:gap-6">
        <div className="min-w-0 text-center">
          <h2 className={`font-black tracking-tight leading-tight text-slate-800 dark:text-slate-100 ${big ? 'text-[clamp(2.4rem,5vw,5.2rem)]' : 'text-4xl sm:text-6xl'}`}>
            {prompt.split(question.adj).map((part, i, all) => (
              <span key={i}>{part}{i < all.length - 1 && <span style={{ color: ORANGE }}>{question.adj}</span>}</span>
            ))}
          </h2>
          {lang === 'vn' && (
            <p className={`font-bold text-slate-400 dark:text-slate-500 ${big ? 'text-[clamp(1.1rem,1.8vw,1.8rem)]' : 'text-base sm:text-xl'}`}>
              {promptVn(question)}
            </p>
          )}
        </div>
        {/* Kept in the layout after the reveal, only hidden, so the question
            does not jump sideways at the moment the room is reading it. */}
        {timer !== null && (
          <button
            type="button"
            tabIndex={revealed ? -1 : 0}
            onClick={() => setSeconds(seconds === null || seconds === 0 ? timer : null)}
            className={`shrink-0 rounded-full border-[6px] flex items-center justify-center font-black tabular-nums transition-colors ${revealed ? 'invisible' : ''} ${
              seconds === 0
                ? 'border-rose-500 bg-rose-500 text-white animate-pulse'
                : seconds !== null && seconds <= 3
                  ? 'border-rose-500 text-rose-600 dark:text-rose-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
            } ${big ? 'w-[clamp(5rem,8vw,8.5rem)] h-[clamp(5rem,8vw,8.5rem)] text-[clamp(1.6rem,3vw,3.2rem)]' : 'w-20 h-20 sm:w-24 sm:h-24 text-3xl sm:text-4xl'}`}
          >
            {seconds === null ? <Timer className="w-1/2 h-1/2" strokeWidth={2.5} /> : seconds === 0 ? <span className="text-[0.55em]">{t(lang, 'stop')}</span> : seconds}
          </button>
        )}
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-2 gap-3 sm:gap-5" style={{ gridTemplateRows: 'minmax(0, 1fr)' }}>
        <Card lang={lang} big={big} itemKey={left} side="left" result={resultFor(left)} />
        <Card lang={lang} big={big} itemKey={right} side="right" result={resultFor(right)} />
      </div>

      {!revealed ? (
        <button
          type="button"
          onClick={reveal}
          className={`shrink-0 w-full flex items-center justify-center gap-2 rounded-2xl bg-[#1cb0f6] border-b-4 border-[#1899d6] text-white font-black uppercase tracking-widest active:border-b-0 active:translate-y-1 transition-all ${
            big ? 'py-4 text-[clamp(1rem,1.6vw,1.6rem)]' : 'py-3 text-sm sm:text-base'
          }`}
        >
          <Eye className="w-5 h-5" strokeWidth={2.5} />{t(lang, 'reveal')}
        </button>
      ) : (
        <div className="shrink-0 flex flex-col sm:flex-row items-stretch gap-2.5 animate-in fade-in duration-200">
          <div className="flex-1 min-w-0 rounded-2xl border-2 border-l-[7px] border-[#58cc02] bg-[#f0fdf4] dark:bg-emerald-500/15 px-4 py-2 flex flex-wrap items-center gap-x-5 gap-y-1">
            <p className={`font-bold leading-snug text-[#14532d] dark:text-emerald-100 ${big ? 'text-[clamp(1.3rem,2.3vw,2.4rem)]' : 'text-lg sm:text-2xl'}`}>
              {sentenceEn(question).split(question.adj).map((part, i, all) => (
                <span key={i}>{part}{i < all.length - 1 && <span className="font-black" style={{ color: ORANGE }}>{question.adj}</span>}</span>
              ))}
              {lang === 'vn' && <span className="block text-[0.7em] text-emerald-800/70 dark:text-emerald-200/70">{sentenceVn(question)}</span>}
            </p>
            {/* The rule, once more, on every reveal: the plain word in claps,
                and what it became. */}
            <span className={`shrink-0 flex items-center gap-2 font-black text-slate-500 dark:text-slate-300 ${big ? 'text-[clamp(1rem,1.6vw,1.6rem)]' : 'text-sm sm:text-lg'}`}>
              {adjective.syl.join('·')}
              <span className="flex gap-1">
                {adjective.syl.map((_, i) => <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#1cb0f6]" />)}
              </span>
              <ArrowRight className="w-4 h-4" strokeWidth={3} />
              <Form form={adjective.form} className="text-slate-700 dark:text-slate-100" />
            </span>
          </div>
          <button
            type="button"
            onClick={nextRound}
            className={`shrink-0 flex items-center justify-center gap-2 px-6 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest active:border-b-0 active:translate-y-1 transition-all ${
              big ? 'py-4 text-[clamp(1rem,1.6vw,1.6rem)]' : 'py-3 text-sm sm:text-base'
            }`}
          >
            {t(lang, 'nextRound')}<ArrowRight className="w-5 h-5" strokeWidth={3} />
          </button>
        </div>
      )}
    </div>
  )
}
