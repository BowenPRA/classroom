// content/games/G01_word-wall/remote.jsx
// Word Wall on Mr Bowen's phone: the deck's phone remote draws this while the
// game is on the projector (src/remote/DeckRemote.jsx, through the slide's
// `remote`). The laptop keeps the wall (widgets.jsx); this screen draws the
// state it sends and asks it for things.
//
// The tiles sit in the same order as on the projector, with their words always
// showing, so a child can call "cat, hat, bat and mat" and he taps them where
// he stands. Answers lists the four groups, for a hint, on the phone only.
//
// For the teacher only, so English only.
import { useState } from 'react'
import {
  Heart, Infinity as InfinityIcon, Shuffle, Eraser, Eye, EyeOff, KeyRound, CircleCheck,
  ArrowLeft, PartyPopper, RotateCcw, RotateCw, Star, CircleX, Check,
} from 'lucide-react'
import { Sheet } from '../../../src/lib/remote/Sheet.jsx'
import { GamePanel, MainButton, SideButton, ConfirmButton, Label } from '../../../src/remote/GamePanel.jsx'
import { LEVELS, BANDS } from './levels.js'
import { PICS } from './images.js'
import { MAX_MISTAKES, asItem, hasPictures } from './rules.js'

// The solved rows' colours, in the order the groups are found, as on the projector.
const TONES = [
  'bg-amber-500/20 border-amber-500/70 text-amber-100',
  'bg-emerald-500/20 border-emerald-500/70 text-emerald-100',
  'bg-sky-500/20 border-sky-500/70 text-sky-100',
  'bg-pink-500/20 border-pink-500/70 text-pink-100',
]

// What the projector's message after a check said, by its kind.
const TOASTS = {
  warn: { icon: Star, text: 'So close: three of those go together.', look: 'border-amber-300/40 bg-amber-400/10 text-amber-100' },
  bad: { icon: CircleX, text: 'Not this time.', look: 'border-rose-400/40 bg-rose-500/10 text-rose-100' },
  good: { icon: InfinityIcon, text: 'No more hearts needed. Play on!', look: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-100' },
}

const itemAt = (level, id) => {
  const [g, i] = String(id).split('-').map(Number)
  const raw = level.groups[g]?.items[i]
  return raw === undefined ? null : asItem(raw)
}

export default function WordWallRemote({ state, act, tools }) {
  if (state.l === null || state.l === undefined) return <MenuScreen act={act} tools={tools} />
  const level = LEVELS[state.l]
  if (!level) return <OlderCopy tools={tools} />
  return <WallScreen state={state} level={level} act={act} tools={tools} />
}

function OlderCopy({ tools }) {
  return (
    <GamePanel tools={tools}>
      <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-6 text-center">
        <RotateCw className="w-9 h-9 mx-auto text-[#1cb0f6]" strokeWidth={2.5} />
        <div className="mt-3 text-lg font-black">This phone has an older copy of the site</div>
        <p className="mt-2 font-bold text-slate-400">The laptop has a puzzle this phone does not know yet.</p>
        <button onClick={() => window.location.reload()} className="mt-4 w-full rounded-2xl bg-[#1cb0f6] border-b-4 border-[#1899d6] py-3 font-black uppercase tracking-widest">Reload</button>
      </div>
    </GamePanel>
  )
}

// ── The puzzles ─────────────────────────────────────────────────────────────

function MenuScreen({ act, tools }) {
  return (
    <GamePanel
      top={(
        <div>
          <h1 className="text-[1.35rem] font-black leading-tight tracking-tight">Word Wall</h1>
          <div className="mt-0.5 text-sm font-bold text-slate-400">Choose a puzzle. It opens on the projector.</div>
        </div>
      )}
      tools={tools}
    >
      <div className="space-y-4 pb-1">
        {Object.entries(BANDS).map(([band, meta]) => (
          <section key={band}>
            <Label className="mb-1.5">{meta.label}</Label>
            <div className="space-y-1.5">
              {LEVELS.map((level, i) => ({ level, i })).filter(({ level }) => level.band === band).map(({ level, i }) => (
                <button
                  key={level.id}
                  data-level={level.id}
                  onClick={() => act({ do: 'start', i })}
                  className="w-full flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-white/10 px-3 py-3 text-left active:bg-white/10"
                >
                  <span className="min-w-0 flex-1 font-black leading-snug">{level.title}</span>
                  {hasPictures(level) && (
                    <span className="shrink-0 rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-slate-400">pics</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </GamePanel>
  )
}

// ── The wall ────────────────────────────────────────────────────────────────

function WallScreen({ state, level, act, tools }) {
  const [answersOpen, setAnswersOpen] = useState(false)
  const selected = state.sel || []
  const solved = state.sv || []
  const tiles = (state.ti || []).map((id) => ({ id, item: itemAt(level, id) })).filter((x) => x.item)
  const pictures = hasPictures(level)
  const toast = TOASTS[state.ts]
  const ready = selected.length === 4

  let actions
  if (state.o === 'won') {
    actions = (
      <>
        <OutcomeLine icon={PartyPopper} title="You did it!" text="All four groups found." />
        <SideButton icon={ArrowLeft} onClick={() => act({ do: 'menu' })}>Puzzles</SideButton>
        <MainButton tone="green" icon={Eye} onClick={() => act({ do: 'look' })}>Look at the board</MainButton>
      </>
    )
  } else if (state.o === 'lost') {
    actions = (
      <>
        <OutcomeLine icon={Heart} title="Out of hearts" text="Play on with no hearts, start again, or show the answers." />
        <div className="grid grid-cols-2 gap-2">
          <SideButton icon={RotateCcw} onClick={() => act({ do: 'again' })}>Start again</SideButton>
          <SideButton icon={KeyRound} onClick={() => act({ do: 'answers' })}>Show answers</SideButton>
        </div>
        <MainButton tone="green" icon={InfinityIcon} onClick={() => act({ do: 'on' })}>Keep playing</MainButton>
      </>
    )
  } else if (!tiles.length) {
    // Every group found, and the class is reading the rows.
    actions = (
      <>
        {pictures && (
          <SideButton icon={state.w ? EyeOff : Eye} on={Boolean(state.w)} onClick={() => act({ do: 'words' })}>Words</SideButton>
        )}
        <MainButton icon={ArrowLeft} onClick={() => act({ do: 'menu' })}>Another puzzle</MainButton>
      </>
    )
  } else {
    actions = (
      <>
        <div className={`grid gap-2 ${pictures ? 'grid-cols-4' : 'grid-cols-3'}`}>
          <SideButton stacked icon={Shuffle} onClick={() => act({ do: 'shuffle' })}>Mix</SideButton>
          <SideButton stacked icon={Eraser} disabled={!selected.length} onClick={() => act({ do: 'clear' })}>Clear</SideButton>
          {pictures && (
            <SideButton stacked icon={state.w ? EyeOff : Eye} on={Boolean(state.w)} onClick={() => act({ do: 'words' })}>Words</SideButton>
          )}
          <SideButton stacked icon={KeyRound} onClick={() => setAnswersOpen(true)}>Answers</SideButton>
        </div>
        <MainButton tone="green" icon={CircleCheck} disabled={!ready} onClick={() => act({ do: 'check' })}>
          {ready ? 'Check' : `Pick 4 tiles · ${selected.length} of 4`}
        </MainButton>
      </>
    )
  }

  return (
    <>
      <GamePanel
        top={(
          <>
            <div className="flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <h1 className="text-[1.3rem] font-black leading-tight tracking-tight truncate">{level.title}</h1>
                <p className="mt-0.5 text-sm font-bold text-amber-300 leading-snug line-clamp-2">{level.hint}</p>
              </div>
              <Hearts mistakes={state.m || 0} infinite={Boolean(state.inf)} />
            </div>
            {toast && (
              <div className={`rounded-2xl border px-3 py-2 flex items-center gap-2 text-sm font-black ${toast.look}`}>
                <toast.icon className="w-4 h-4 shrink-0" strokeWidth={2.75} />
                {toast.text}
              </div>
            )}
          </>
        )}
        tools={tools}
        actions={actions}
      >
        <div className="space-y-2">
          {solved.map((gi, order) => {
            const group = level.groups[gi]
            if (!group) return null
            return (
              <div key={gi} className={`rounded-xl border border-l-[6px] px-3 py-2 ${TONES[order % TONES.length]}`}>
                <div className="text-sm font-black uppercase tracking-wide leading-tight">{group.name}</div>
                <div className="text-xs font-bold leading-snug opacity-90">{group.items.map((raw) => asItem(raw).word).join(' · ')}</div>
              </div>
            )
          })}
          {tiles.length > 0 && (
            <div className="grid grid-cols-4 gap-1.5">
              {tiles.map(({ id, item }) => {
                const on = selected.includes(id)
                return (
                  <button
                    key={id}
                    data-tile={id}
                    aria-pressed={on}
                    onClick={() => act({ do: 'tile', id })}
                    className={`min-w-0 rounded-xl border flex flex-col items-center justify-center gap-0.5 px-1 py-1.5 transition-all active:scale-95 ${item.img ? 'h-[4.5rem]' : 'h-14'} ${
                      on ? 'bg-[#1cb0f6] border-[#1899d6] text-white' : 'bg-white/[0.07] border-white/15 text-slate-100'
                    }`}
                  >
                    {item.img && <img src={PICS[item.img]} alt="" draggable={false} className="min-h-0 flex-1 w-full object-contain" />}
                    <span className={`w-full text-center font-black uppercase leading-tight [overflow-wrap:anywhere] ${item.word.length > 8 ? 'text-[10px]' : 'text-xs'}`}>
                      {item.word}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
          {/* Rarely wanted mid-wall, so it sits below the board, not in the thumb zone. */}
          {!state.o && tiles.length > 0 && (
            <div className="pt-2 grid">
              <ConfirmButton icon={ArrowLeft} onConfirm={() => act({ do: 'menu' })}>Another puzzle</ConfirmButton>
            </div>
          )}
        </div>
      </GamePanel>
      {answersOpen && <AnswersSheet level={level} solved={solved} onClose={() => setAnswersOpen(false)} />}
    </>
  )
}

function Hearts({ mistakes, infinite }) {
  if (infinite) return <InfinityIcon className="shrink-0 mt-1 w-6 h-6 text-amber-300" strokeWidth={3} aria-label="No hearts needed" />
  const left = MAX_MISTAKES - mistakes
  return (
    <div className="shrink-0 mt-1 flex gap-0.5" aria-label={`${left} hearts left`}>
      {Array.from({ length: MAX_MISTAKES }, (_, i) => (
        <Heart key={i} className={`w-5 h-5 ${i < left ? 'text-rose-500 fill-rose-500' : 'text-slate-600'}`} strokeWidth={2.5} />
      ))}
    </div>
  )
}

function OutcomeLine({ icon: Icon, title, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.06] border border-white/10 px-3 py-2.5">
      <Icon className="w-6 h-6 shrink-0 text-amber-300" strokeWidth={2.5} />
      <div className="min-w-0">
        <div className="font-black leading-tight">{title}</div>
        <div className="text-xs font-bold text-slate-400 leading-snug">{text}</div>
      </div>
    </div>
  )
}

/** The four groups, for a hint. On the phone only: the projector never sees this. */
function AnswersSheet({ level, solved, onClose }) {
  return (
    <Sheet title="Answers · only on your phone" onClose={onClose}>
      <div className="space-y-2 px-1 pb-2">
        {level.groups.map((group, gi) => {
          const found = solved.includes(gi)
          return (
            <div key={gi} className={`rounded-2xl border p-3 ${found ? 'bg-white/[0.03] border-white/5 opacity-60' : 'bg-white/[0.06] border-white/10'}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="min-w-0 font-black uppercase tracking-wide leading-tight">{group.name}</span>
                {found && (
                  <span className="shrink-0 flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-[#7ee03b]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3.5} />Found
                  </span>
                )}
              </div>
              <div className="mt-1 font-bold text-slate-200 leading-snug">{group.items.map((raw) => asItem(raw).word).join(' · ')}</div>
              {group.note && <div className="mt-1 text-sm text-slate-400 leading-snug">{group.note}</div>}
            </div>
          )
        })}
      </div>
    </Sheet>
  )
}
