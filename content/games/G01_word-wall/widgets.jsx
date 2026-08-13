// content/games/G01_word-wall/widgets.jsx
// Word Wall — sixteen tiles, four hidden groups of four. Pick four, check, and
// the group locks in with the connection spelled out underneath.
//
// Why a game and not a slide: the class cannot *guess wrong* on a slide. The
// whole teaching value is the wrong guess — the moment a child puts SQUARE with
// the shapes and finds out it belongs with the rhymes. So the only interactive
// parts are the ones that carry that: choose, check, and the four hearts that
// make choosing cost something. There is nothing else to fiddle with.
//
// Three things are built for a Kindergarten / Year 1 room specifically:
//   · picture tiles, so a level can be played with no reading at all
//   · a "show the words" switch, so the same board is sorted first and READ
//     second — the teacher decides when the words appear
//   · the hint line stays on screen, because a five-year-old cannot hold
//     "sort by the first sound" in their head for a whole game
//
// The board is laid out in flex rows that divide whatever height the slide
// gives them, so it fills a projector without ever growing a scrollbar: as each
// group is solved a grid row is replaced by a solved row of about the same
// height.
import { useState, useEffect, useRef, useCallback, createElement } from 'react'
import {
  Images, BookOpenText, Ear, Apple, Hand, Smile, Shapes, Music, School,
  Wand2, Trees, Cat, Link as LinkIcon, Gamepad2, Heart, Shuffle, Eraser,
  ArrowLeft, Lightbulb, Eye, EyeOff, Infinity as InfinityIcon, PartyPopper,
  RotateCcw, CircleCheck, CircleX, Star,
  CookingPot, Carrot, Sprout, Sigma, Dna, Puzzle, Languages,
} from 'lucide-react'

import { LEVELS, BANDS } from './levels.js'
import { PICS } from './images.js'

const ICONS = {
  Images, BookOpenText, Ear, Apple, Hand, Smile, Shapes, Music, School,
  Wand2, Trees, Cat, Link: LinkIcon,
  CookingPot, Carrot, Sprout, Sigma, Dna, Puzzle, Languages,
}

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

// Bilingual interface strings, kept in one place so nothing ships English-only.
const T = {
  brand: ['Word Wall', 'Bức Tường Từ'],
  choose: ['Choose a puzzle', 'Chọn một trò chơi'],
  hearts: ['Hearts', 'Tim'],
  check: ['Check', 'Kiểm tra'],
  checkCount: ['Pick 4 tiles', 'Chọn 4 ô'],
  shuffle: ['Mix up', 'Trộn ô'],
  clear: ['Clear', 'Bỏ chọn'],
  levels: ['Puzzles', 'Trò chơi'],
  showWords: ['Show the words', 'Hiện chữ'],
  hideWords: ['Hide the words', 'Ẩn chữ'],
  oneAway: ['So close — three of those go together!', 'Sát rồi — ba ô đó cùng nhóm đấy!'],
  notQuite: ['Not this time. Try another four.', 'Chưa đúng. Thử bốn ô khác nhé.'],
  wonTitle: ['You did it!', 'Em làm được rồi!'],
  wonBody: ['All four groups found. Read them out together.', 'Đã tìm đủ bốn nhóm. Cả lớp cùng đọc to nhé.'],
  lostTitle: ['Out of hearts', 'Hết tim rồi'],
  lostBody: ['That was a tricky one. What would you like to do?', 'Bài này khó thật. Em muốn làm gì tiếp?'],
  keepGoing: ['Keep playing (no hearts)', 'Chơi tiếp (không cần tim)'],
  playAgain: ['Start this puzzle again', 'Chơi lại từ đầu'],
  showAnswers: ['Show me the answers', 'Cho em xem đáp án'],
  lookAtBoard: ['Look at the board', 'Xem lại bảng'],
  infinite: ['No more hearts needed — play on!', 'Không cần tim nữa — chơi tiếp thôi!'],
  back: ['Puzzles', 'Trò chơi'],
}
const t = (lang, key) => T[key][lang === 'vn' ? 1 : 0]

// Four group colours, handed out in board order. Every pair is legible on light
// and on dark — the solved rows sit on whatever the deck's theme is.
const TONES = [
  {
    row: 'bg-[#fef3c7] dark:bg-amber-500/20 border-[#f59e0b] dark:border-amber-500/70',
    name: 'text-[#92400e] dark:text-amber-200',
    body: 'text-[#78350f] dark:text-amber-100/90',
  },
  {
    row: 'bg-[#dcfce7] dark:bg-emerald-500/20 border-[#22c55e] dark:border-emerald-500/70',
    name: 'text-[#166534] dark:text-emerald-200',
    body: 'text-[#14532d] dark:text-emerald-100/90',
  },
  {
    row: 'bg-[#dbeafe] dark:bg-sky-500/20 border-[#3b82f6] dark:border-sky-500/70',
    name: 'text-[#1e40af] dark:text-sky-200',
    body: 'text-[#1e3a8a] dark:text-sky-100/90',
  },
  {
    row: 'bg-[#fce7f3] dark:bg-pink-500/20 border-[#ec4899] dark:border-pink-500/70',
    name: 'text-[#9d174d] dark:text-pink-200',
    body: 'text-[#831843] dark:text-pink-100/90',
  },
]

const MAX_MISTAKES = 4

const shuffled = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Flatten a level into 16 tiles, each remembering which group it came from.
const buildTiles = (level) =>
  shuffled(level.groups.flatMap((g, gi) =>
    g.items.map((raw, ii) => {
      const item = typeof raw === 'string' ? { word: raw } : raw
      return { ...item, group: gi, id: `${gi}-${ii}` }
    })))

// ── Menu ────────────────────────────────────────────────────────────────────

// Each band gets its own accent so the teacher finds the right shelf at a
// glance: amber for the youngest, sky for the middle years, violet for Year 7.
const BAND_ACCENT = {
  early: { card: 'hover:border-[#f59e0b] dark:hover:border-amber-500', chip: 'bg-amber-100 dark:bg-amber-500/20 text-[#b45309] dark:text-amber-300' },
  words: { card: 'hover:border-[#1cb0f6] dark:hover:border-sky-500', chip: 'bg-sky-100 dark:bg-sky-500/20 text-[#0369a1] dark:text-sky-300' },
  y7: { card: 'hover:border-[#8b5cf6] dark:hover:border-violet-500', chip: 'bg-violet-100 dark:bg-violet-500/20 text-[#6d28d9] dark:text-violet-300' },
}

function LevelCard({ level, lang, onPick }) {
  const picture = level.groups.some((g) => g.items.some((i) => typeof i !== 'string' && i.img))
  const accent = BAND_ACCENT[level.band] || BAND_ACCENT.early
  return (
    <button
      onClick={onPick}
      className={`w-full text-left rounded-xl bg-white dark:bg-slate-900 border-2 border-b-[5px] border-slate-200 dark:border-slate-700 active:border-b-2 active:translate-y-[3px] transition-all p-2 flex items-center gap-2.5 ${accent.card}`}
    >
      <span className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center ${accent.chip}`}>
        {createElement(ICONS[level.icon] || Gamepad2, { className: 'w-[18px] h-[18px]', strokeWidth: 2.5 })}
      </span>
      <span className="flex-1 min-w-0 font-black text-sm leading-tight tracking-tight text-slate-800 dark:text-slate-100">
        {pick(lang, level.title, level.titleVn)}
      </span>
      {picture && (
        <span className="shrink-0 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase tracking-widest">
          {pick(lang, 'pics', 'tranh')}
        </span>
      )}
    </button>
  )
}

function Menu({ lang, onPick }) {
  return (
    // One column per band, side by side, so the Year 7 shelf is visible without
    // scrolling. Stacked in a single list all twenty-one cards run ~220px past
    // the bottom of the slide and Year 7 is invisible on a projector.
    <div className="h-full min-h-0 overflow-y-auto custom-scrollbar px-4 sm:px-6 py-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="self-center w-9 h-9 rounded-xl bg-[#f59e0b] text-white flex items-center justify-center shadow-sm shrink-0">
            <Gamepad2 className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100">
            {t(lang, 'brand')}
          </h1>
          <p className="font-bold text-slate-400 dark:text-slate-500 text-sm hidden sm:block">{t(lang, 'choose')}</p>
        </div>

        {/* Four column-widths, not three: the Year 1–4 shelf holds eleven walls
            and in a single column it alone is taller than the slide, so it gets
            a double-width section and splits into two. */}
        <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(BANDS).map(([band, meta]) => {
            const levels = LEVELS.map((level, i) => ({ level, i })).filter(({ level }) => level.band === band)
            const wide = levels.length > 8
            return (
              <section key={band} className={wide ? 'lg:col-span-2' : ''}>
                <h2 className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500 mb-1.5">
                  {pick(lang, meta.label, meta.labelVn)}
                </h2>
                <div className={`grid gap-1.5 ${wide ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                  {levels.map(({ level, i }) => (
                    <LevelCard key={level.id} level={level} lang={lang} onPick={() => onPick(i)} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ── Board pieces ────────────────────────────────────────────────────────────

// A word tile has to fit its word. MITOCHONDRIA is twice the length of CAT and
// will not wrap (it is one word), so the size comes off the character count
// rather than one clamp for everything — otherwise the long Year 7 science
// words are simply sliced off at the tile edge.
const WORD_SIZE = [
  { max: 5, cls: 'text-[clamp(0.9rem,1.9vw,1.6rem)]', big: 'text-[clamp(1.2rem,2.2vw,2.2rem)]' },
  { max: 8, cls: 'text-[clamp(0.8rem,1.6vw,1.35rem)]', big: 'text-[clamp(1.05rem,1.9vw,1.9rem)]' },
  { max: 11, cls: 'text-[clamp(0.65rem,1.25vw,1.05rem)]', big: 'text-[clamp(0.85rem,1.5vw,1.5rem)]' },
  { max: Infinity, cls: 'text-[clamp(0.55rem,1.05vw,0.9rem)]', big: 'text-[clamp(0.7rem,1.25vw,1.25rem)]' },
]
const wordSize = (word, big) => {
  const tier = WORD_SIZE.find((t) => word.length <= t.max)
  return big ? tier.big : tier.cls
}

function Tile({ tile, selected, wrong, showWords, big, onClick }) {
  const label = tile.word
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative min-w-0 min-h-0 rounded-xl sm:rounded-2xl border-2 flex flex-col items-center justify-center overflow-hidden transition-colors duration-150 ${
        wrong ? 'animate-[wall-shake_0.45s_ease-in-out]' : ''
      } ${
        selected
          ? 'bg-[#1cb0f6] border-[#1899d6] border-b-2 translate-y-[3px] text-white'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 border-b-[5px] hover:bg-slate-50 dark:hover:bg-slate-700 active:border-b-2 active:translate-y-[3px] text-slate-800 dark:text-slate-100'
      }`}
    >
      {tile.img ? (
        <>
          {/* object-contain, not cover: the photos run from 0.75 to 2.1 aspect
              and a cover crop takes the cat's head off. */}
          <img
            src={PICS[tile.img]}
            alt={label}
            draggable={false}
            className="flex-1 min-h-0 w-full object-contain p-1 select-none"
          />
          {showWords && (
            <span className={`shrink-0 w-full px-1 pb-1 font-black uppercase tracking-wide truncate ${big ? 'text-[clamp(0.9rem,1.3vw,1.35rem)]' : 'text-[11px] sm:text-sm'}`}>
              {label}
            </span>
          )}
        </>
      ) : (
        <span className={`w-full px-1.5 font-black uppercase tracking-wide leading-tight break-words ${wordSize(label, big)}`}>
          {label}
        </span>
      )}
    </button>
  )
}

function SolvedRow({ group, tone, lang, big }) {
  const words = group.items
    .map((raw) => {
      const item = typeof raw === 'string' ? { word: raw } : raw
      return lang === 'vn' && item.vn ? `${item.word} (${item.vn})` : item.word
    })
    .join('  ·  ')

  return (
    <div className={`shrink-0 rounded-xl sm:rounded-2xl border-2 border-l-[7px] px-3 sm:px-4 py-2 sm:py-2.5 text-center animate-in fade-in zoom-in-95 duration-300 ${tone.row}`}>
      <div className={`font-black uppercase tracking-wide leading-tight ${tone.name} ${big ? 'text-[clamp(1rem,1.6vw,1.6rem)]' : 'text-sm sm:text-base'}`}>
        {pick(lang, group.name, group.nameVn)}
      </div>
      <div className={`font-bold leading-tight ${tone.body} ${big ? 'text-[clamp(0.85rem,1.3vw,1.3rem)]' : 'text-[11px] sm:text-sm'}`}>
        {words}
      </div>
      <div className={`font-semibold italic leading-snug opacity-80 ${tone.body} ${big ? 'text-[clamp(0.8rem,1.1vw,1.15rem)]' : 'text-[11px] sm:text-xs'}`}>
        {pick(lang, group.note, group.noteVn)}
      </div>
    </div>
  )
}

function ToolButton({ onClick, icon, label, active, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-xl border-2 border-b-4 font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all active:border-b-2 active:translate-y-0.5 disabled:opacity-40 disabled:pointer-events-none ${
        active
          ? 'bg-amber-100 dark:bg-amber-500/20 border-amber-400 dark:border-amber-600 text-[#b45309] dark:text-amber-200'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6]'
      }`}
    >
      {createElement(icon, { className: 'w-4 h-4', strokeWidth: 2.5 })}
      <span className="hidden md:inline">{label}</span>
    </button>
  )
}

// ── Confetti ────────────────────────────────────────────────────────────────
// Squares of paper, thrown once from the middle of the board. Drawn on a canvas
// sized to the widget so it never escapes the slide.
function useConfetti(canvasRef) {
  return useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const box = canvas.getBoundingClientRect()
    canvas.width = box.width
    canvas.height = box.height
    const ctx = canvas.getContext('2d')
    const colours = ['#fbbf24', '#22c55e', '#38bdf8', '#ec4899', '#a855f7']
    const bits = Array.from({ length: 140 }, () => ({
      x: canvas.width / 2,
      y: canvas.height * 0.55,
      vx: (Math.random() - 0.5) * 22,
      vy: -Math.random() * 22 - 4,
      size: Math.random() * 8 + 5,
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

// ── The game ────────────────────────────────────────────────────────────────

export function WordWallGame({ lang = 'en', isDisplayMode = false }) {
  const [levelIndex, setLevelIndex] = useState(null)
  const [tiles, setTiles] = useState([])
  const [selected, setSelected] = useState([])
  const [solved, setSolved] = useState([])
  const [mistakes, setMistakes] = useState(0)
  const [wrongIds, setWrongIds] = useState([])
  const [toast, setToast] = useState(null)
  const [outcome, setOutcome] = useState(null) // 'won' | 'lost' | null
  const [infinite, setInfinite] = useState(false)
  const [showWords, setShowWords] = useState(false)
  const canvasRef = useRef(null)
  const toastTimer = useRef(null)
  const throwConfetti = useConfetti(canvasRef)

  const level = levelIndex === null ? null : LEVELS[levelIndex]
  const hasPictures = !!level?.groups.some((g) => g.items.some((i) => typeof i !== 'string' && i.img))
  const big = isDisplayMode

  useEffect(() => () => clearTimeout(toastTimer.current), [])

  const flash = (message, kind) => {
    clearTimeout(toastTimer.current)
    setToast({ message, kind })
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }

  const start = (index) => {
    setLevelIndex(index)
    setTiles(buildTiles(LEVELS[index]))
    setSelected([])
    setSolved([])
    setMistakes(0)
    setWrongIds([])
    setOutcome(null)
    setInfinite(false)
    setShowWords(false)
    setToast(null)
  }

  const toggle = (id) => {
    if (outcome === 'won') return
    setSelected((cur) => {
      if (cur.includes(id)) return cur.filter((x) => x !== id)
      return cur.length < 4 ? [...cur, id] : cur
    })
  }

  const check = () => {
    if (selected.length !== 4) return
    const chosen = tiles.filter((x) => selected.includes(x.id))
    const first = chosen[0].group
    if (chosen.every((x) => x.group === first)) {
      setSolved((cur) => [...cur, first])
      setTiles((cur) => cur.filter((x) => !selected.includes(x.id)))
      setSelected([])
      if (solved.length === 3) {
        setOutcome('won')
        throwConfetti()
      }
      return
    }

    const counts = {}
    chosen.forEach((x) => { counts[x.group] = (counts[x.group] || 0) + 1 })
    const oneAway = Object.values(counts).some((n) => n === 3)
    flash(t(lang, oneAway ? 'oneAway' : 'notQuite'), oneAway ? 'warn' : 'bad')

    setWrongIds(selected)
    setTimeout(() => setWrongIds([]), 500)

    if (!infinite) {
      const next = mistakes + 1
      setMistakes(next)
      if (next >= MAX_MISTAKES) setTimeout(() => setOutcome('lost'), 700)
    }
  }

  const revealRest = () => {
    setOutcome(null)
    setSolved(level.groups.map((_, i) => i))
    setTiles([])
    setSelected([])
  }

  const playOn = () => {
    setOutcome(null)
    setInfinite(true)
    setMistakes(0)
    flash(t(lang, 'infinite'), 'good')
  }

  if (level === null) return <Menu lang={lang} onPick={start} />

  const gridRows = Math.max(1, 4 - solved.length)
  const ready = selected.length === 4

  return (
    <div className="relative h-full min-h-0 flex flex-col gap-2 sm:gap-3 p-3 sm:p-4 lg:p-5">
      {/* Header: who we are, how to sort, and what it costs to be wrong */}
      <header className="shrink-0 flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setLevelIndex(null)}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-[10px] sm:text-xs active:border-b-2 active:translate-y-0.5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={3} />
          <span className="hidden sm:inline">{t(lang, 'back')}</span>
        </button>

        <div className="min-w-0 flex-1">
          <h2 className={`font-black tracking-tight text-slate-800 dark:text-slate-100 leading-tight truncate ${big ? 'text-[clamp(1.3rem,2.2vw,2.2rem)]' : 'text-base sm:text-xl lg:text-2xl'}`}>
            {pick(lang, level.title, level.titleVn)}
          </h2>
          <p className={`flex items-center gap-1.5 font-bold text-[#b45309] dark:text-amber-300 leading-tight truncate ${big ? 'text-[clamp(0.9rem,1.4vw,1.4rem)]' : 'text-[11px] sm:text-sm'}`}>
            <Lightbulb className="w-4 h-4 shrink-0" strokeWidth={2.5} />
            {pick(lang, level.hint, level.hintVn)}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700">
          {infinite ? (
            <InfinityIcon className="w-5 h-5 text-amber-500" strokeWidth={3} />
          ) : (
            Array.from({ length: MAX_MISTAKES }, (_, i) => (
              <Heart
                key={i}
                className={`transition-all duration-300 ${big ? 'w-6 h-6' : 'w-4 h-4 sm:w-5 sm:h-5'} ${
                  i < MAX_MISTAKES - mistakes
                    ? 'text-rose-500 fill-rose-500'
                    : 'text-slate-300 dark:text-slate-600 scale-75'
                }`}
                strokeWidth={2.5}
              />
            ))
          )}
        </div>
      </header>

      {/* Board. Solved rows and grid rows always add up to four, so pinning the
          whole board to a fixed aspect keeps the tiles roughly 1.4:1 whatever
          height the slide has — a full-width board on a 1440px window makes
          each tile a 2.3:1 letterbox and the photographs come out postage-stamp
          sized. max-w-full lets it fall back to full width when the slide is
          wider than it is tall. */}
      <div className="flex-1 min-h-0 flex justify-center">
        <div className="h-full max-w-full aspect-[1.4/1] flex flex-col justify-center gap-2 sm:gap-2.5">
          {solved.map((gi, order) => (
            <SolvedRow key={gi} group={level.groups[gi]} tone={TONES[order % TONES.length]} lang={lang} big={big} />
          ))}
          {tiles.length > 0 && (
            <div
              className="flex-1 min-h-0 grid grid-cols-4 gap-2 sm:gap-2.5"
              style={{ gridTemplateRows: `repeat(${gridRows}, minmax(0, 1fr))` }}
            >
              {tiles.map((tile) => (
                <Tile
                  key={tile.id}
                  tile={tile}
                  selected={selected.includes(tile.id)}
                  wrong={wrongIds.includes(tile.id)}
                  showWords={showWords}
                  big={big}
                  onClick={() => toggle(tile.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <footer className="shrink-0 flex items-center gap-2 sm:gap-3">
        <ToolButton onClick={() => setTiles(shuffled(tiles))} icon={Shuffle} label={t(lang, 'shuffle')} disabled={!tiles.length} />
        <ToolButton onClick={() => setSelected([])} icon={Eraser} label={t(lang, 'clear')} disabled={!selected.length} />
        {hasPictures && (
          <ToolButton
            onClick={() => setShowWords((v) => !v)}
            icon={showWords ? EyeOff : Eye}
            label={t(lang, showWords ? 'hideWords' : 'showWords')}
            active={showWords}
          />
        )}
        <button
          type="button"
          onClick={check}
          disabled={!ready}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest transition-all border-b-4 active:border-b-0 active:translate-y-1 ${
            big ? 'py-3 text-[clamp(0.95rem,1.5vw,1.5rem)]' : 'py-2.5 sm:py-3 text-xs sm:text-base'
          } ${
            ready
              ? 'bg-[#58cc02] border-[#46a302] text-white hover:bg-[#61d904]'
              : 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 pointer-events-none'
          }`}
        >
          <CircleCheck className={big ? 'w-6 h-6' : 'w-4 h-4 sm:w-5 sm:h-5'} strokeWidth={2.5} />
          {ready ? t(lang, 'check') : t(lang, 'checkCount')}
        </button>
      </footer>

      {/* Feedback. It sits above the controls rather than over the header: the
          hint line has to stay readable exactly when a guess has gone wrong. */}
      {toast && (
        <div
          className={`absolute bottom-[4.5rem] sm:bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 px-5 py-3 rounded-2xl border-2 shadow-lg font-black animate-in fade-in slide-in-from-bottom-2 duration-200 ${
            big ? 'text-[clamp(1rem,1.5vw,1.5rem)]' : 'text-sm sm:text-base'
          } ${
            toast.kind === 'warn'
              ? 'bg-amber-50 dark:bg-amber-950 border-amber-400 text-amber-700 dark:text-amber-200'
              : toast.kind === 'good'
                ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-400 text-emerald-700 dark:text-emerald-200'
                : 'bg-rose-50 dark:bg-rose-950 border-rose-400 text-rose-700 dark:text-rose-200'
          }`}
        >
          {createElement(toast.kind === 'warn' ? Star : toast.kind === 'good' ? InfinityIcon : CircleX, {
            className: 'w-5 h-5 shrink-0', strokeWidth: 2.5,
          })}
          {toast.message}
        </div>
      )}

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-40" />

      {/* End of game */}
      {outcome && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-[2rem] bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-center animate-in zoom-in-95 duration-300">
            <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${outcome === 'won' ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-500/20 text-rose-500 dark:text-rose-300'}`}>
              {createElement(outcome === 'won' ? PartyPopper : Heart, { className: 'w-9 h-9', strokeWidth: 2.5 })}
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-800 dark:text-slate-100 mb-1.5">
              {t(lang, outcome === 'won' ? 'wonTitle' : 'lostTitle')}
            </h3>
            <p className="font-bold text-slate-500 dark:text-slate-400 mb-6">
              {t(lang, outcome === 'won' ? 'wonBody' : 'lostBody')}
            </p>

            <div className="flex flex-col gap-2.5">
              {outcome === 'won' ? (
                <>
                  <button type="button" onClick={() => setOutcome(null)} className="py-3 rounded-xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-sm active:border-b-0 active:translate-y-1 transition-all">
                    {t(lang, 'lookAtBoard')}
                  </button>
                  <button type="button" onClick={() => setLevelIndex(null)} className="py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-sm active:border-b-0 active:translate-y-1 transition-all">
                    {t(lang, 'levels')}
                  </button>
                </>
              ) : (
                <>
                  <button type="button" onClick={playOn} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#58cc02] border-b-4 border-[#46a302] text-white font-black uppercase tracking-widest text-sm active:border-b-0 active:translate-y-1 transition-all">
                    <InfinityIcon className="w-5 h-5" strokeWidth={2.5} />{t(lang, 'keepGoing')}
                  </button>
                  <button type="button" onClick={() => start(levelIndex)} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-b-4 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-sm active:border-b-0 active:translate-y-1 transition-all">
                    <RotateCcw className="w-5 h-5" strokeWidth={2.5} />{t(lang, 'playAgain')}
                  </button>
                  <button type="button" onClick={revealRest} className="py-2.5 rounded-xl text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 font-black uppercase tracking-widest text-xs transition-colors">
                    {t(lang, 'showAnswers')}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
