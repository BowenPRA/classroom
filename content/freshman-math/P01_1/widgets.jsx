// content/freshman-math/U01_1/widgets.jsx
// One widget, on purpose.
//
// Everything else in this deck is a definition, a diagram or a question, and
// those belong on a static slide where they can be copied. What a static slide
// CANNOT do is hold back a four-line calculation while the class does it on
// paper — reveal it all and the work is spoiled, hide it all and it is
// unusable. So the fly's flight is a stepper, teacher-paced, one line per
// press, with a Back button and nothing else to fiddle with.
//
// The order of the steps is the argument of the lesson, not just arithmetic:
//   1. across the floor      → the 9-12-15 triangle
//   2. up to the far corner  → the 15-8-17 triangle
//   3. BOTH AT ONCE          → √(12² + 9² + 8²) = 17, the same answer
// Step 3 is the point. It is styled green, because "you did not need the 15 at
// all" is the moment the three-dimensional formula stops being something to
// memorise. Steps 2 and 3 must be on screen TOGETHER for that comparison to
// land, which is why there are only three of them and why the list scrolls
// itself — a fourth step (the time) pushed step 1 off the top on a projector,
// and dividing 17 by 3.4 never needed pacing anyway. It lives on the slide's
// write-note instead.
//
// The course is flagged bilingual:false, so this widget takes no `lang` prop.
import { useState, useRef, useEffect } from 'react'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const GREEN = '#4a8b23'
const KEY = '#c25e12'

const Stage = ({ children }) => (
  <div className="flex-1 min-h-[210px] w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] border-2 border-slate-200 dark:border-slate-700 shadow-inner relative flex flex-col p-3 sm:p-4 overflow-hidden">
    {children}
  </div>
)

const Controls = ({ children }) => (
  <div className="w-full bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 mt-2 flex-shrink-0">
    {children}
  </div>
)

const STEPS = [
  {
    tag: '1 · across the floor',
    tone: KEY,
    work: '√(12² + 9²) = √225',
    result: '15 ft',
    note: 'A 9-12-15 triangle. The fly is not flying this.',
  },
  {
    tag: '2 · up to the far corner',
    tone: PURPLE,
    work: '√(15² + 8²) = √289',
    result: '17 ft',
    note: 'The floor diagonal is now a LEG of the second triangle.',
  },
  {
    tag: '3 · both at once',
    tone: GREEN,
    work: '√(12² + 9² + 8²) = √289',
    result: '17 ft',
    note: 'Same answer — and the 15 never appeared.',
  },
]

export const FlyPathWidget = () => {
  const [step, setStep] = useState(0) // 0 = nothing shown yet
  const done = step >= STEPS.length

  // Keep the newest line in view. Step 3 is the payoff of the whole widget and
  // it must never be the one hiding below the fold on a projector.
  const listRef = useRef(null)
  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [step])

  const nextLabel = step === 0 ? 'Work out the floor'
    : step === 1 ? 'Now go up'
      : step === 2 ? 'Try it in one step'
        : 'Same answer, less work'

  return (
    <div className="w-full h-full flex flex-col select-none">
      <Stage>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">The fly’s flight</span>
          <span className="font-mono font-black text-xs text-slate-400 tabular-nums">{Math.min(step, STEPS.length)}/{STEPS.length}</span>
        </div>

        <div className="rounded-xl border-2 px-3 py-1.5 mb-1.5 shrink-0 text-center" style={{ borderColor: TEAL, backgroundColor: `${TEAL}0f` }}>
          <p className="font-black text-slate-800 dark:text-slate-100 leading-snug text-[13px] sm:text-sm lg:text-base">
            12 ft × 9 ft × 8 ft — corner to opposite ceiling corner
          </p>
        </div>

        <div ref={listRef} className="flex-1 min-h-0 overflow-y-auto custom-scrollbar space-y-1.5">
          {STEPS.slice(0, step).map((s) => (
            <div
              key={s.tag}
              className="rounded-xl border-2 px-3 py-1 animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ borderColor: s.tone, backgroundColor: `${s.tone}0f` }}>
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: s.tone }}>{s.tag}</span>
                <span className="font-mono font-black text-xl sm:text-2xl tabular-nums shrink-0" style={{ color: s.tone }}>{s.result}</span>
              </div>
              <p className="font-mono font-bold text-[13px] sm:text-sm text-slate-800 dark:text-slate-100">{s.work}</p>
              <p className="text-[11px] font-bold text-slate-600 dark:text-slate-300 leading-tight">{s.note}</p>
            </div>
          ))}

          {step === 0 && (
            <p className="text-sm sm:text-base font-bold text-slate-500 dark:text-slate-400 text-center px-4 py-6 leading-relaxed">
              Everyone works out the floor diagonal first — on paper, before the button.
            </p>
          )}
        </div>
      </Stage>

      <Controls>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-3 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest border-2 border-slate-200 dark:border-slate-600 text-slate-500 disabled:opacity-30 active:scale-95">
            Back
          </button>
          <button
            onClick={() => setStep(Math.min(STEPS.length, step + 1))}
            disabled={done}
            className="flex-1 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest text-white border-2 disabled:opacity-40 active:scale-95 transition-all"
            style={{ backgroundColor: done ? GREEN : TEAL, borderColor: done ? GREEN : TEAL }}>
            {nextLabel}
          </button>
        </div>
      </Controls>
    </div>
  )
}
