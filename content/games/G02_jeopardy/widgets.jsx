// content/games/G02_jeopardy/widgets.jsx
// Jeopardy — a revision quiz for the front of the room. Six categories, five
// clues each, teams on the board and a running score.
//
// Why a game and not a slide: the deck can already *ask* a question. What it
// cannot do is let a room of teams choose which question to take, hold the
// answer back until the class has argued, and keep score honestly across
// thirty of them. That is the whole widget — choose, wait, reveal, award.
// There is nothing else to fiddle with: no sliders, no sound, no wagering.
//
// Four decisions worth knowing about:
//   · The teacher reveals. The answer never appears on a timer, because the
//     value of the pause is the class arguing in English while it is hidden.
//   · The COUNTDOWN, unlike the answer, starts on its own the moment a clue
//     opens, and the music runs with it. One press instead of two, and the
//     room hears that it is on the clock without anyone watching the number.
//     A teacher who wants the thinking time back stops it with one tap, or
//     turns the whole thing off in Setup before the game starts.
//   · Points can go to more than one team, or to nobody. Both happen in a real
//     room, and a game that cannot record "nobody got it" gets fudged — and
//     any score can be corrected by hand afterwards, because a scoreboard that
//     cannot be fixed gets abandoned the first time the teacher mis-taps.
//   · The board cells are Jeopardy navy and gold in BOTH themes. That is a
//     fixed-colour surface on purpose, so every colour on it is written out
//     explicitly rather than inherited from the theme — the trap that turned
//     bold text white-on-white in dark mode.
//
// The board is a grid whose rows divide whatever height the slide gives it, so
// it fills a projector without ever growing a scrollbar.
import { useState, useEffect, useRef, useCallback, createElement } from 'react'
import {
  Calculator, FlaskConical, Trophy, Gamepad2, ArrowLeft, Plus, X,
  Play, Pause, Eye, Check, Timer, Flag, RotateCcw, Crown, Users, Sparkles,
  Music, Volume2, VolumeX, Pencil,
} from 'lucide-react'

import { BOARDS } from './boards.js'

// Thinking music. Six free tracks — lofi first, because that is what the room
// responds to — with licences and sources in audio/CREDITS.json.
//
// What is NOT here, and cannot be: the television show's countdown cue. It is
// still in copyright, and so is a re-recorded "free version" of it, which is a
// cover of a protected tune rather than a way round it. Lift Motif is the
// honest substitute — forty-four seconds of waiting music, an original
// composition, doing the job the cue does in the room rather than repeating
// the tune it does it with.
//
// Vite fingerprints these like any other asset, so they are imported rather
// than written as paths.
import studyAndRelax from './audio/study-and-relax.ogg'
import lofi from './audio/lofi.mp3'
import liftMotif from './audio/lift-motif.ogg'
import bossBattle from './audio/boss-battle.opus'
import timeAttack from './audio/time-attack.ogg'
import phonk from './audio/phonk.opus'

const ICONS = { Calculator, FlaskConical, Trophy, Sparkles }

// The clue countdown, and the music that runs with it.
const TIMER_SECONDS = 30
// Loud enough to be heard over a room of Year 7s arguing, quiet enough that
// the teacher does not have to raise their voice to read the clue again.
const MUSIC_VOLUME = 0.35

const TRACKS = [
  // The descriptor line has about twenty characters before it truncates at
  // three cards across. The longer advice — which track suits which row of the
  // board — lives in the teacher plan, where there is room to say it properly.
  { id: 'study-and-relax', src: studyAndRelax, name: 'Study And Relax', nameVn: 'Study And Relax', by: 'lofi · warped tape', byVn: 'lofi · băng cũ' },
  { id: 'lofi', src: lofi, name: 'Lofi', nameVn: 'Lofi', by: 'lofi · straight up', byVn: 'lofi · thuần chất' },
  { id: 'lift-motif', src: liftMotif, name: 'Lift Motif', nameVn: 'Lift Motif', by: 'the thinking one', byVn: 'nhạc để suy nghĩ' },
  { id: 'boss-battle', src: bossBattle, name: 'Boss Battle', nameVn: 'Boss Battle', by: '8-bit · heavy', byVn: '8-bit · nặng đô' },
  { id: 'time-attack', src: timeAttack, name: 'Time Attack', nameVn: 'Time Attack', by: 'chiptune · 40s', byVn: 'chiptune · 40 giây' },
  { id: 'phonk', src: phonk, name: 'Current', nameVn: 'Current', by: 'phonk · their music', byVn: 'phonk · gu các em' },
]

// Fade rather than cut. A clip that stops dead sounds like something broke,
// and the teacher is usually still talking over the last second of it.
function fadeOutAndStop(audio, ms = 450) {
  const step = 40
  const drop = audio.volume / Math.max(1, ms / step)
  const id = setInterval(() => {
    audio.volume = Math.max(0, audio.volume - drop)
    if (audio.volume <= 0.001) {
      clearInterval(id)
      audio.pause()
    }
  }, step)
}

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

// Bilingual interface strings, kept in one place so nothing ships English-only.
const T = {
  brand: ['Jeopardy', 'Jeopardy'],
  chooseBoard: ['Choose a board', 'Chọn bảng chơi'],
  teams: ['Teams', 'Các đội'],
  team: ['Team', 'Đội'],
  addTeam: ['Add a team', 'Thêm một đội'],
  start: ['Start the game', 'Bắt đầu chơi'],
  setup: ['Setup', 'Cài đặt'],
  finish: ['Finish', 'Kết thúc'],
  left: ['clues left', 'câu còn lại'],
  reveal: ['Show the answer', 'Hiện đáp án'],
  answer: ['Answer', 'Đáp án'],
  close: ['Close', 'Đóng'],
  whoGotIt: ['Who answered correctly?', 'Đội nào trả lời đúng?'],
  award: ['Award', 'Cộng'],
  points: ['points', 'điểm'],
  noPoints: ['Nobody — no points', 'Không đội nào — không cộng điểm'],
  startTimer: ['Start 30 seconds', 'Bấm giờ 30 giây'],
  stopTimer: ['Stop the timer', 'Dừng đồng hồ'],
  timeUp: ['Time is up!', 'Hết giờ rồi!'],
  music: ['Thinking music', 'Nhạc suy nghĩ'],
  soundOff: ['Sound off', 'Tắt tiếng'],
  soundOn: ['Sound on', 'Bật tiếng'],
  autoTimer: ['The timer starts by itself', 'Đồng hồ tự chạy khi mở câu hỏi'],
  editScores: ['Edit scores', 'Sửa điểm'],
  done: ['Done', 'Xong'],
  finalTitle: ['Final scores', 'Điểm chung cuộc'],
  winner: ['Winner', 'Đội thắng'],
  tie: ['It is a tie!', 'Hoà nhau rồi!'],
  sameBoard: ['Play this board again', 'Chơi lại bảng này'],
  otherBoard: ['Choose another board', 'Chọn bảng khác'],
  minTeams: ['Two teams at least', 'Cần ít nhất hai đội'],
}
const t = (lang, key) => T[key][lang === 'vn' ? 1 : 0]

// Six team colours, legible as a bar or a dot on light and on dark. Handed out
// in team order, so a team keeps its colour from the scoreboard to the award
// buttons to the final table.
const TEAM_COLOURS = ['#1cb0f6', '#58cc02', '#ff9600', '#ec4899', '#8b5cf6', '#14b8a6']

const VALUES = [100, 200, 300, 400, 500]

const cellKey = (c, r) => `${c}-${r}`

// ── Confetti ────────────────────────────────────────────────────────────────
// Squares of paper thrown once, on a canvas sized to the widget so nothing
// escapes the slide.
function useConfetti(canvasRef) {
  return useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const box = canvas.getBoundingClientRect()
    canvas.width = box.width
    canvas.height = box.height
    const ctx = canvas.getContext('2d')
    const colours = ['#ffc800', '#58cc02', '#1cb0f6', '#ec4899', '#8b5cf6']
    const bits = Array.from({ length: 150 }, () => ({
      x: canvas.width / 2,
      y: canvas.height * 0.5,
      vx: (Math.random() - 0.5) * 24,
      vy: -Math.random() * 22 - 5,
      size: Math.random() * 9 + 5,
      colour: colours[Math.floor(Math.random() * colours.length)],
      rot: Math.random() * 360,
      spin: (Math.random() - 0.5) * 12,
    }))

    let frame
    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      bits.forEach((b) => {
        b.x += b.vx; b.y += b.vy; b.vy += 0.55; b.vx *= 0.98; b.rot += b.spin
        if (b.y < canvas.height + 30) alive = true
        ctx.save()
        ctx.translate(b.x, b.y)
        ctx.rotate((b.rot * Math.PI) / 180)
        ctx.fillStyle = b.colour
        ctx.fillRect(-b.size / 2, -b.size / 2, b.size, b.size * 0.7)
        ctx.restore()
      })
      if (alive) frame = requestAnimationFrame(step)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    step()
    return () => cancelAnimationFrame(frame)
  }, [canvasRef])
}

// ── Setup ───────────────────────────────────────────────────────────────────

function BoardCard({ board, lang, selected, onPick }) {
  return (
    <button
      type="button"
      onClick={onPick}
      className={`w-full text-left rounded-2xl bg-white dark:bg-slate-900 border-2 border-b-[6px] p-3 flex items-start gap-3 transition-all active:border-b-2 active:translate-y-[4px] ${
        selected
          ? 'border-slate-800 dark:border-slate-200'
          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
      }`}
    >
      <span
        className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-white shadow-sm"
        style={{ backgroundColor: board.accent }}
      >
        {createElement(ICONS[board.icon] || Gamepad2, { className: 'w-5 h-5', strokeWidth: 2.5 })}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-black text-sm sm:text-base leading-tight tracking-tight text-slate-800 dark:text-slate-100">
          {pick(lang, board.title, board.titleVn)}
        </span>
        <span className="block font-bold text-[11px] sm:text-xs leading-snug text-slate-400 dark:text-slate-500">
          {pick(lang, board.subtitle, board.subtitleVn)}
        </span>
      </span>
      {selected && (
        <span className="shrink-0 w-6 h-6 rounded-lg bg-[#58cc02] text-white flex items-center justify-center">
          <Check className="w-4 h-4" strokeWidth={3.5} />
        </span>
      )}
    </button>
  )
}

// A team name the teacher has not typed stays an empty string, and the default
// is only ever a placeholder. That way "Team 3" becomes "Đội 3" when the deck
// is switched to Vietnamese, instead of freezing an English name into state.
function Setup({
  lang, boardIndex, setBoardIndex, names, setNames, onStart,
  trackIndex, setTrackIndex, autoTimer, setAutoTimer,
}) {
  const rename = (i, value) => setNames(names.map((n, j) => (j === i ? value : n)))
  const remove = (i) => setNames(names.filter((_, j) => j !== i))
  const add = () => setNames([...names, ''])

  // Tapping a track picks it AND plays it, so the choice can be made by ear at
  // the desk before the class arrives rather than discovered in front of them.
  // Tapping the one that is already playing stops it.
  const previewRef = useRef(null)
  const [previewing, setPreviewing] = useState(null)

  const stopPreview = () => {
    if (previewRef.current) fadeOutAndStop(previewRef.current, 250)
    previewRef.current = null
    setPreviewing(null)
  }

  const pickTrack = (i) => {
    const wasPlaying = previewing === i
    stopPreview()
    setTrackIndex(i)
    if (wasPlaying) return
    const audio = new Audio(TRACKS[i].src)
    audio.volume = MUSIC_VOLUME
    audio.play().catch(() => {})
    previewRef.current = audio
    setPreviewing(i)
  }

  // Leaving Setup — by starting the game or by any other route — takes the
  // preview with it. Music playing under the board that the countdown did not
  // start would be a bug the teacher cannot explain to the room.
  useEffect(() => () => {
    if (previewRef.current) fadeOutAndStop(previewRef.current, 250)
  }, [])

  return (
    <div className="h-full min-h-0 overflow-y-auto custom-scrollbar px-4 sm:px-6 py-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="self-center w-9 h-9 rounded-xl bg-[#f59e0b] text-white flex items-center justify-center shadow-sm shrink-0">
            <Gamepad2 className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">
            {t(lang, 'brand')}
          </h1>
          <p className="font-bold text-slate-400 dark:text-slate-500 text-sm hidden sm:block">
            {t(lang, 'chooseBoard')}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-1.5">
              {t(lang, 'chooseBoard')}
            </h2>
            <div className="grid gap-2">
              {BOARDS.map((board, i) => (
                <BoardCard
                  key={board.id}
                  board={board}
                  lang={lang}
                  selected={i === boardIndex}
                  onPick={() => setBoardIndex(i)}
                />
              ))}
            </div>

            {/* The music, and whether the countdown runs at all. Both live
                here rather than on the board, because they are decisions made
                once before the game and never mid-clue. */}
            <h2 className="mt-4 text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-1.5">
              {t(lang, 'music')}
            </h2>
            {/* Three across, so five tracks are two rows and not three. Two
                rows is what keeps Setup inside the frame at 1440×900 — the
                fifth track is exactly what pushed it over. */}
            <div className="grid gap-1.5 grid-cols-2 sm:grid-cols-3">
              {TRACKS.map((track, i) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => pickTrack(i)}
                  className={`text-left rounded-xl border-2 border-b-4 px-2.5 py-1.5 transition-all active:border-b-2 active:translate-y-0.5 ${
                    i === trackIndex
                      ? 'border-[#f59e0b] bg-amber-50 dark:bg-amber-500/15'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {previewing === i
                      ? <Pause className="w-3.5 h-3.5 shrink-0 text-[#f59e0b]" strokeWidth={3} />
                      : <Music className={`w-3.5 h-3.5 shrink-0 ${i === trackIndex ? 'text-[#f59e0b]' : 'text-slate-300 dark:text-slate-600'}`} strokeWidth={3} />}
                    <span className="min-w-0 truncate font-black text-[11px] sm:text-xs text-slate-800 dark:text-slate-100">
                      {pick(lang, track.name, track.nameVn)}
                    </span>
                  </span>
                  <span className="block pl-5 truncate font-bold text-[10px] text-slate-400 dark:text-slate-500">
                    {pick(lang, track.by, track.byVn)}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setAutoTimer(!autoTimer)}
              className="mt-2 w-full flex items-center gap-2 rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-2 active:border-b-2 active:translate-y-0.5 transition-all"
            >
              <span
                className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center ${
                  autoTimer ? 'bg-[#58cc02] border-[#46a302] text-white' : 'border-slate-300 dark:border-slate-600'
                }`}
              >
                {autoTimer && <Check className="w-3.5 h-3.5" strokeWidth={4} />}
              </span>
              <span className="min-w-0 flex-1 text-left truncate font-black text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">
                {t(lang, 'autoTimer')}
              </span>
              <Timer className="w-4 h-4 shrink-0 text-slate-300 dark:text-slate-600" strokeWidth={3} />
            </button>
          </section>

          <section>
            <h2 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-1.5">
              {t(lang, 'teams')}
            </h2>
            <div className="grid gap-2">
              {names.map((name, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className="w-3 h-9 shrink-0 rounded-full"
                    style={{ backgroundColor: TEAM_COLOURS[i % TEAM_COLOURS.length] }}
                  />
                  <input
                    type="text"
                    value={name}
                    placeholder={`${t(lang, 'team')} ${i + 1}`}
                    onChange={(e) => rename(i, e.target.value)}
                    className="flex-1 min-w-0 px-3 py-2 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-black text-sm focus:outline-none focus:border-[#1cb0f6]"
                  />
                  {names.length > 2 && (
                    <button
                      type="button"
                      onClick={() => remove(i)}
                      className="shrink-0 w-9 h-9 rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 hover:text-[#ff4b4b] flex items-center justify-center active:border-b-2 active:translate-y-0.5 transition-all"
                    >
                      <X className="w-4 h-4" strokeWidth={3} />
                    </button>
                  )}
                </div>
              ))}
              {names.length < 6 && (
                <button
                  type="button"
                  onClick={add}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-b-4 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest text-[11px] hover:text-[#1cb0f6] active:border-b-2 active:translate-y-0.5 transition-all"
                >
                  <Plus className="w-4 h-4" strokeWidth={3} />
                  {t(lang, 'addTeam')}
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={onStart}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-sm sm:text-base active:border-b-0 active:translate-y-1 transition-all"
            >
              <Play className="w-5 h-5" strokeWidth={3} />
              {t(lang, 'start')}
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

// ── Scoreboard ──────────────────────────────────────────────────────────────

// `teams` here is the labelled list: a team the teacher never named carries an
// empty name and is labelled from the current language at render time, so an
// unnamed team reads "Đội 2" the moment the deck is switched to Vietnamese.
function Scoreboard({ teams, big, flash }) {
  return (
    <div className="shrink-0 grid gap-1.5 sm:gap-2" style={{ gridTemplateColumns: `repeat(${teams.length}, minmax(0, 1fr))` }}>
      {teams.map((team, i) => (
        <div
          key={i}
          className={`rounded-xl border-2 border-l-[6px] bg-white dark:bg-slate-900 px-2 sm:px-3 py-1.5 flex items-center justify-between gap-2 transition-transform duration-300 ${
            flash === i ? 'scale-105' : ''
          }`}
          style={{ borderColor: TEAM_COLOURS[i % TEAM_COLOURS.length] }}
        >
          <span className={`min-w-0 truncate font-black tracking-tight text-slate-700 dark:text-slate-200 ${big ? 'text-[clamp(0.9rem,1.3vw,1.35rem)]' : 'text-[11px] sm:text-sm'}`}>
            {team.label}
          </span>
          <span
            className={`shrink-0 font-black tabular-nums ${big ? 'text-[clamp(1.1rem,1.8vw,1.9rem)]' : 'text-sm sm:text-lg'}`}
            style={{ color: TEAM_COLOURS[i % TEAM_COLOURS.length] }}
          >
            {team.score}
          </span>
        </div>
      ))}
    </div>
  )
}

// ── The game ────────────────────────────────────────────────────────────────

export function JeopardyGame({ lang = 'en', isDisplayMode = false }) {
  const [screen, setScreen] = useState('setup') // 'setup' | 'board' | 'final'
  const [boardIndex, setBoardIndex] = useState(0)
  const [names, setNames] = useState(['', '', ''])
  const [teams, setTeams] = useState([])
  const [used, setUsed] = useState([])
  const [open, setOpen] = useState(null) // { c, r, clue, category }
  const [revealed, setRevealed] = useState(false)
  const [picked, setPicked] = useState([]) // team indexes awarded this clue
  const [flash, setFlash] = useState(null)
  const [seconds, setSeconds] = useState(null) // null = timer not running
  const [autoTimer, setAutoTimer] = useState(true) // the countdown starts itself
  const [trackIndex, setTrackIndex] = useState(0)
  const [muted, setMuted] = useState(false)
  const [editing, setEditing] = useState(false) // the score editor is open
  const canvasRef = useRef(null)
  const throwConfetti = useConfetti(canvasRef)

  const board = BOARDS[boardIndex]
  const big = isDisplayMode
  const total = board.categories.length * VALUES.length
  // Display list: an unnamed team is labelled in whatever language the deck is
  // showing, so nothing on the board is ever English-only.
  const named = teams.map((team, i) => ({
    ...team,
    label: team.name || `${t(lang, 'team')} ${i + 1}`,
    colour: TEAM_COLOURS[i % TEAM_COLOURS.length],
  }))

  // The clue timer. It only ever runs while a clue is open, and it starts by
  // itself — one press to open a clue instead of two. It is still the
  // teacher's pace to set: tapping the countdown stops it, and the Setup
  // checkbox turns the automatic start off for a lesson where the thinking
  // time matters more than the pressure.
  useEffect(() => {
    if (seconds === null || seconds <= 0) return undefined
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => clearTimeout(id)
  }, [seconds])

  // The music follows the countdown exactly: it starts when the clock starts
  // and fades when the clock stops, so the sound in the room always means
  // "you are on the clock" and never has to be explained.
  //
  // `running` is a boolean and not `seconds`, or this would tear the audio
  // down and build it again on every tick.
  const running = seconds !== null && seconds > 0
  useEffect(() => {
    const track = TRACKS[trackIndex]
    if (!running || muted || !track?.src) return undefined
    const audio = new Audio(track.src)
    audio.volume = MUSIC_VOLUME
    // A browser that refuses to autoplay simply stays quiet; the game does not
    // depend on it, and there is nothing useful to say to the class about it.
    audio.play().catch(() => {})
    return () => fadeOutAndStop(audio)
  }, [running, trackIndex, muted])

  const closeClue = useCallback(() => {
    setOpen(null)
    setRevealed(false)
    setPicked([])
    setSeconds(null)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeClue() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeClue])

  const startGame = () => {
    if (names.length < 2) return
    setTeams(names.map((name) => ({ name: name.trim(), score: 0 })))
    setUsed([])
    closeClue()
    setScreen('board')
  }

  const openClue = (c, r) => {
    if (used.includes(cellKey(c, r))) return
    setOpen({ c, r, category: board.categories[c], clue: board.categories[c].clues[r] })
    setRevealed(false)
    setPicked([])
    setSeconds(autoTimer ? TIMER_SECONDS : null)
  }

  // Correcting the scoreboard by hand. Points awarded to the wrong team, a
  // clue the class talked you into after the event, a team that arrived late —
  // all of it happens, and a scoreboard that cannot be fixed stops being used.
  const adjustScore = (i, delta) => {
    setTeams((cur) => cur.map((team, j) => (j === i ? { ...team, score: team.score + delta } : team)))
  }

  const setScore = (i, value) => {
    const score = Number.parseInt(value, 10)
    setTeams((cur) => cur.map((team, j) => (j === i ? { ...team, score: Number.isNaN(score) ? 0 : score } : team)))
  }

  const togglePick = (i) => {
    setPicked((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]))
  }

  const confirm = () => {
    const value = open.clue.value
    if (picked.length) {
      setTeams((cur) => cur.map((team, i) => (picked.includes(i) ? { ...team, score: team.score + value } : team)))
      setFlash(picked[0])
      setTimeout(() => setFlash(null), 400)
    }
    const nextUsed = [...used, cellKey(open.c, open.r)]
    setUsed(nextUsed)
    closeClue()
    if (nextUsed.length === total) {
      setScreen('final')
      setTimeout(throwConfetti, 120)
    }
  }

  const finishNow = () => {
    closeClue()
    setScreen('final')
    setTimeout(throwConfetti, 120)
  }

  const replay = () => {
    setTeams(teams.map((team) => ({ ...team, score: 0 })))
    setUsed([])
    closeClue()
    setScreen('board')
  }

  // ── Setup screen ──────────────────────────────────────────────────────────
  if (screen === 'setup') {
    return (
      <Setup
        lang={lang}
        boardIndex={boardIndex}
        setBoardIndex={setBoardIndex}
        names={names}
        setNames={setNames}
        onStart={startGame}
        trackIndex={trackIndex}
        setTrackIndex={setTrackIndex}
        autoTimer={autoTimer}
        setAutoTimer={setAutoTimer}
      />
    )
  }

  // ── Final scores ──────────────────────────────────────────────────────────
  if (screen === 'final') {
    const ranked = [...named].sort((a, b) => b.score - a.score)
    // A board abandoned before anyone scored has no winner — crowning all six
    // teams on nought points reads as a bug, not as a tie.
    const top = ranked[0]?.score ?? 0
    const winners = top > 0 ? ranked.filter((team) => team.score === top) : []

    return (
      <div className="relative h-full min-h-0 flex flex-col items-center justify-center p-4 sm:p-6">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />
        <div className="relative z-20 w-full max-w-2xl">
          <div className="text-center mb-5">
            <span className="inline-flex w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-500/20 text-amber-500 items-center justify-center mb-3">
              <Trophy className="w-9 h-9" strokeWidth={2.5} />
            </span>
            <h2 className={`font-black tracking-tight text-slate-800 dark:text-slate-100 ${big ? 'text-[clamp(2rem,3.4vw,3.4rem)]' : 'text-2xl sm:text-4xl'}`}>
              {t(lang, 'finalTitle')}
            </h2>
            <p className={`font-black text-amber-600 dark:text-amber-300 ${big ? 'text-[clamp(1.1rem,1.8vw,1.9rem)]' : 'text-base sm:text-xl'}`}>
              {winners.length === 0
                ? ' '
                : winners.length > 1
                  ? t(lang, 'tie')
                  : `${t(lang, 'winner')}: ${winners[0].label}`}
            </p>
          </div>

          <div className="grid gap-2 mb-6">
            {ranked.map((team, place) => (
              <div
                key={`${team.label}-${place}`}
                className="rounded-2xl border-2 border-l-[8px] bg-white dark:bg-slate-900 px-4 py-3 flex items-center gap-3"
                style={{ borderColor: team.colour }}
              >
                <span className="w-7 shrink-0 font-black text-slate-300 dark:text-slate-600 text-lg tabular-nums">
                  {place + 1}
                </span>
                {top > 0 && team.score === top && <Crown className="w-5 h-5 shrink-0 text-amber-500" strokeWidth={2.5} />}
                <span className={`flex-1 min-w-0 truncate font-black tracking-tight text-slate-800 dark:text-slate-100 ${big ? 'text-[clamp(1.1rem,1.7vw,1.8rem)]' : 'text-base sm:text-xl'}`}>
                  {team.label}
                </span>
                <span
                  className={`shrink-0 font-black tabular-nums ${big ? 'text-[clamp(1.4rem,2.3vw,2.4rem)]' : 'text-xl sm:text-2xl'}`}
                  style={{ color: team.colour }}
                >
                  {team.score}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={replay}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-xs sm:text-sm active:border-b-0 active:translate-y-1 transition-all"
            >
              <RotateCcw className="w-5 h-5" strokeWidth={2.5} />{t(lang, 'sameBoard')}
            </button>
            <button
              type="button"
              onClick={() => setScreen('setup')}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-xs sm:text-sm active:border-b-0 active:translate-y-1 transition-all"
            >
              <Users className="w-5 h-5" strokeWidth={2.5} />{t(lang, 'otherBoard')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── The board ─────────────────────────────────────────────────────────────
  return (
    <div className="relative h-full min-h-0 flex flex-col gap-2 sm:gap-2.5 p-3 sm:p-4 lg:p-5">
      <header className="shrink-0 flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setScreen('setup')}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-[10px] sm:text-xs active:border-b-2 active:translate-y-0.5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          <span className="hidden sm:inline">{t(lang, 'setup')}</span>
        </button>

        <div className="min-w-0 flex-1">
          <h2 className={`font-black tracking-tight text-slate-800 dark:text-slate-100 leading-tight truncate ${big ? 'text-[clamp(1.2rem,2vw,2rem)]' : 'text-base sm:text-xl'}`}>
            {pick(lang, board.title, board.titleVn)}
          </h2>
          <p className={`font-bold text-slate-400 dark:text-slate-500 leading-tight truncate ${big ? 'text-[clamp(0.85rem,1.2vw,1.2rem)]' : 'text-[10px] sm:text-xs'}`}>
            {total - used.length} {t(lang, 'left')}
          </p>
        </div>

        {/* Sound off is here rather than in Setup because it is the control a
            teacher reaches for mid-game — the class next door, a fire drill,
            a clue that needs reading three times. */}
        <button
          type="button"
          onClick={() => setMuted(!muted)}
          title={t(lang, muted ? 'soundOn' : 'soundOff')}
          aria-label={t(lang, muted ? 'soundOn' : 'soundOff')}
          className={`shrink-0 w-9 h-9 rounded-xl border-2 border-b-4 flex items-center justify-center active:border-b-2 active:translate-y-0.5 transition-all ${
            muted
              ? 'border-rose-300 dark:border-rose-800 bg-rose-50 dark:bg-rose-950 text-rose-500 dark:text-rose-300'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300'
          }`}
        >
          {muted ? <VolumeX className="w-4 h-4" strokeWidth={3} /> : <Volume2 className="w-4 h-4" strokeWidth={3} />}
        </button>

        <button
          type="button"
          onClick={() => setEditing(true)}
          title={t(lang, 'editScores')}
          className="shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-[10px] sm:text-xs active:border-b-2 active:translate-y-0.5 transition-all"
        >
          <Pencil className="w-4 h-4" strokeWidth={3} />
          <span className="hidden lg:inline">{t(lang, 'editScores')}</span>
        </button>

        <button
          type="button"
          onClick={finishNow}
          className="shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-b-4 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-200 font-black uppercase tracking-widest text-[10px] sm:text-xs active:border-b-2 active:translate-y-0.5 transition-all"
        >
          <Flag className="w-4 h-4" strokeWidth={3} />
          <span className="hidden sm:inline">{t(lang, 'finish')}</span>
        </button>
      </header>

      <Scoreboard teams={named} big={big} flash={flash} />

      {/* The board itself: one header row plus five clue rows, dividing the
          remaining height between them so it never scrolls. */}
      <div
        className="flex-1 min-h-0 grid gap-1.5 sm:gap-2"
        style={{
          gridTemplateColumns: `repeat(${board.categories.length}, minmax(0, 1fr))`,
          gridTemplateRows: `auto repeat(${VALUES.length}, minmax(0, 1fr))`,
        }}
      >
        {board.categories.map((category, c) => (
          <div
            key={`cat-${c}`}
            className="rounded-lg sm:rounded-xl bg-[#0a1e6b] px-1.5 py-2 flex items-center justify-center text-center"
          >
            <span className={`font-black uppercase tracking-wide leading-tight text-[#ffd34d] break-words ${big ? 'text-[clamp(0.7rem,1.05vw,1.15rem)]' : 'text-[9px] sm:text-[11px] lg:text-xs'}`}>
              {pick(lang, category.name, category.nameVn)}
            </span>
          </div>
        ))}

        {VALUES.map((value, r) =>
          board.categories.map((category, c) => {
            const spent = used.includes(cellKey(c, r))
            return (
              <button
                key={cellKey(c, r)}
                type="button"
                onClick={() => openClue(c, r)}
                disabled={spent}
                className={`rounded-lg sm:rounded-xl border-2 flex items-center justify-center transition-all ${
                  spent
                    ? 'bg-slate-200/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-800 cursor-not-allowed'
                    : 'bg-[#0e3fa8] border-[#0a2f80] border-b-[5px] hover:bg-[#1350c8] active:border-b-2 active:translate-y-[3px]'
                }`}
              >
                {spent ? (
                  <Check className="w-5 h-5 text-slate-400 dark:text-slate-600" strokeWidth={3} />
                ) : (
                  <span className={`font-black tabular-nums text-[#ffc800] ${big ? 'text-[clamp(1.4rem,2.6vw,3rem)]' : 'text-lg sm:text-2xl lg:text-3xl'}`}>
                    {value}
                  </span>
                )}
              </button>
            )
          }),
        )}
      </div>

      {/* One clue, over the board */}
      {open && (
        // The clue fills the slide rather than floating in the middle of it: a
        // centred card that grows with its content is exactly the thing that
        // ends up 70px taller than a 1366×768 window with the answer showing.
        // Here the question takes whatever height is left over, so revealing
        // the answer shrinks the question block instead of pushing the award
        // buttons off the bottom.
        <div className="absolute inset-0 z-50 flex bg-slate-900/70 backdrop-blur-sm p-2 sm:p-4 lg:p-5 animate-in fade-in duration-200">
          <div className="w-full h-full max-w-5xl mx-auto flex flex-col rounded-[1.5rem] bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-2xl p-3 sm:p-5 lg:p-6 animate-in zoom-in-95 duration-200">
            <div className="shrink-0 flex items-center gap-3 mb-2 sm:mb-3">
              <span className={`min-w-0 flex-1 truncate font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 ${big ? 'text-[clamp(0.85rem,1.2vw,1.25rem)]' : 'text-[10px] sm:text-xs'}`}>
                {pick(lang, open.category.name, open.category.nameVn)}
              </span>
              <span
                className={`shrink-0 font-black tabular-nums text-[#0e3fa8] dark:text-[#ffc800] ${big ? 'text-[clamp(1.3rem,2.2vw,2.3rem)]' : 'text-lg sm:text-2xl'}`}
              >
                {open.clue.value}
              </span>
              {/* The timer lives in the header, not in a row of its own: a
                  strip that exists only to hold one small button costs about
                  fifty pixels, and in a 768px-tall window that is the
                  difference between the question fitting and not. */}
              {/* One control, three states: not running (press to start),
                  running (press to stop — which also fades the music), and
                  finished (press to run it again). */}
              {seconds === null || seconds <= 0 ? (
                <button
                  type="button"
                  onClick={() => setSeconds(TIMER_SECONDS)}
                  title={t(lang, 'startTimer')}
                  className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border-2 font-black uppercase tracking-widest text-[10px] transition-colors ${
                    seconds === null
                      ? 'border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:text-[#1cb0f6]'
                      : 'border-rose-400 bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-300'
                  }`}
                >
                  <Timer className="w-4 h-4" strokeWidth={3} />
                  <span className="hidden sm:inline">
                    {seconds === null ? t(lang, 'startTimer') : t(lang, 'timeUp')}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSeconds(null)}
                  title={t(lang, 'stopTimer')}
                  aria-label={t(lang, 'stopTimer')}
                  className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border-2 font-black tabular-nums transition-colors ${
                    seconds > 5
                      ? 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      : 'border-rose-400 bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-300'
                  } ${big ? 'text-[clamp(1rem,1.4vw,1.5rem)]' : 'text-sm sm:text-base'}`}
                >
                  <Pause className="w-4 h-4" strokeWidth={3} />
                  {`${seconds}s`}
                </button>
              )}
              <button
                type="button"
                onClick={closeClue}
                className="shrink-0 w-8 h-8 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-[#ff4b4b] flex items-center justify-center transition-colors"
                aria-label={t(lang, 'close')}
              >
                <X className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>

            <div className="flex-1 min-h-[2.5rem] flex items-center overflow-y-auto custom-scrollbar">
              <p className={`w-full font-black tracking-tight leading-snug text-slate-800 dark:text-slate-100 ${big ? 'text-[clamp(1.5rem,2.8vw,3rem)]' : 'text-lg sm:text-2xl'}`}>
                {pick(lang, open.clue.q, open.clue.qVn)}
              </p>
            </div>

            {/* The answer, and who gets the points */}
            {!revealed ? (
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className={`shrink-0 mt-3 w-full flex items-center justify-center gap-2 rounded-2xl bg-[#1cb0f6] border-b-4 border-[#1899d6] text-white font-black uppercase tracking-widest active:border-b-0 active:translate-y-1 transition-all ${
                  big ? 'py-4 text-[clamp(1rem,1.6vw,1.6rem)]' : 'py-3 text-xs sm:text-base'
                }`}
              >
                <Eye className="w-5 h-5" strokeWidth={2.5} />
                {t(lang, 'reveal')}
              </button>
            ) : (
              <>
                <div className="shrink-0 mt-3 rounded-2xl border-2 border-l-[7px] border-[#58cc02] bg-[#f0fdf4] dark:bg-emerald-500/15 px-4 py-2.5 sm:px-5 sm:py-3 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4 text-[#3d8c00] dark:text-emerald-300" strokeWidth={2.5} />
                    <span className="font-black uppercase tracking-[0.18em] text-[10px] text-[#3d8c00] dark:text-emerald-300">
                      {t(lang, 'answer')}
                    </span>
                  </div>
                  <p className={`font-bold leading-snug text-[#14532d] dark:text-emerald-100 ${big ? 'text-[clamp(1.15rem,1.9vw,2rem)]' : 'text-base sm:text-lg'}`}>
                    {pick(lang, open.clue.a, open.clue.aVn)}
                  </p>
                </div>

                <p className="shrink-0 mt-2.5 mb-1.5 font-black uppercase tracking-[0.18em] text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">
                  {t(lang, 'whoGotIt')}
                </p>
                <div className="shrink-0 grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))' }}>
                  {named.map((team, i) => {
                    const on = picked.includes(i)
                    const colour = team.colour
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => togglePick(i)}
                        className={`rounded-xl border-2 border-b-4 px-3 py-2 font-black tracking-tight truncate transition-all active:border-b-2 active:translate-y-0.5 ${
                          on ? 'text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        } ${big ? 'text-[clamp(0.95rem,1.4vw,1.45rem)]' : 'text-xs sm:text-base'}`}
                        style={{
                          borderColor: colour,
                          backgroundColor: on ? colour : undefined,
                        }}
                      >
                        {on ? '✓ ' : ''}{team.label}
                      </button>
                    )
                  })}
                </div>

                <button
                  type="button"
                  onClick={confirm}
                  className={`shrink-0 mt-3 w-full flex items-center justify-center gap-2 rounded-2xl border-b-4 font-black uppercase tracking-widest active:border-b-0 active:translate-y-1 transition-all ${
                    picked.length
                      ? 'bg-[#58cc02] border-[#46a302] text-white'
                      : 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                  } ${big ? 'py-4 text-[clamp(1rem,1.6vw,1.6rem)]' : 'py-3 text-xs sm:text-base'}`}
                >
                  <Check className="w-5 h-5" strokeWidth={3} />
                  {picked.length
                    ? `${t(lang, 'award')} ${open.clue.value} ${t(lang, 'points')}`
                    : t(lang, 'noPoints')}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* The score editor. Above the clue layer, because the correction a
          teacher needs to make is usually the one they just noticed while a
          clue was open. Steps of 100 and 500 match the values on the board,
          and the box takes a typed number for anything else. */}
      {editing && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-3 sm:p-5 animate-in fade-in duration-200">
          <div className="w-full max-w-3xl max-h-full overflow-y-auto custom-scrollbar rounded-[1.5rem] bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-2xl p-4 sm:p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 shrink-0 rounded-xl bg-[#1cb0f6] text-white flex items-center justify-center">
                <Pencil className="w-4 h-4" strokeWidth={3} />
              </span>
              <h3 className="min-w-0 flex-1 font-black tracking-tight text-slate-800 dark:text-slate-100 text-lg sm:text-2xl">
                {t(lang, 'editScores')}
              </h3>
              <button
                type="button"
                onClick={() => setEditing(false)}
                aria-label={t(lang, 'close')}
                className="shrink-0 w-8 h-8 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-[#ff4b4b] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>

            <div className="grid gap-2">
              {named.map((team, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center gap-2 rounded-xl border-2 border-l-[6px] bg-white dark:bg-slate-900 px-2.5 py-2"
                  style={{ borderColor: team.colour }}
                >
                  <span className="min-w-0 flex-1 truncate font-black tracking-tight text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                    {team.label}
                  </span>
                  {[-500, -100].map((delta) => (
                    <button
                      key={delta}
                      type="button"
                      onClick={() => adjustScore(i, delta)}
                      className="shrink-0 px-2.5 py-1.5 rounded-lg border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black tabular-nums text-xs sm:text-sm active:border-b-2 active:translate-y-0.5 transition-all"
                    >
                      −{Math.abs(delta)}
                    </button>
                  ))}
                  <input
                    type="number"
                    step="100"
                    value={teams[i].score}
                    onChange={(e) => setScore(i, e.target.value)}
                    className="shrink-0 w-24 px-2 py-1.5 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-center font-black tabular-nums text-sm sm:text-base focus:outline-none focus:border-[#1cb0f6]"
                    style={{ color: team.colour }}
                  />
                  {[100, 500].map((delta) => (
                    <button
                      key={delta}
                      type="button"
                      onClick={() => adjustScore(i, delta)}
                      className="shrink-0 px-2.5 py-1.5 rounded-lg border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black tabular-nums text-xs sm:text-sm active:border-b-2 active:translate-y-0.5 transition-all"
                    >
                      +{delta}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setEditing(false)}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-xs sm:text-base active:border-b-0 active:translate-y-1 transition-all"
            >
              <Check className="w-5 h-5" strokeWidth={3} />
              {t(lang, 'done')}
            </button>
          </div>
        </div>
      )}

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-40" />
    </div>
  )
}
