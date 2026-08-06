// content/y7-math/U01_2/widgets.jsx
// Interactive tools for 1.2 Multiplying & Dividing Integers.
//
// Both are the 1.1 widgets with new content, on purpose: the class already
// knows how to read them, so no lesson time is spent explaining an interface.
// Each takes the deck's `lang` so its own text is bilingual like the slide
// around it. Colours are the Cambridge tokens used by the notes and diagrams.
//
// Deliberately NO new widget. The sign rules are something students copy into
// a notebook, not something to click.
import { useState, useEffect, useRef } from 'react'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

// Shared shells so every widget on the projector has the same silhouette.
const Stage = ({ children, className = '' }) => (
  <div className={`flex-1 min-h-[210px] w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] border-2 border-slate-200 dark:border-slate-700 shadow-inner relative flex flex-col p-3 sm:p-4 overflow-hidden ${className}`}>
    {children}
  </div>
)

const Controls = ({ children }) => (
  <div className="w-full bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 mt-2 flex-shrink-0">
    {children}
  </div>
)

/* ============================================================= *
 * WIDGET 1 — THE PAIRS GAME
 *
 * Two minutes to find as many pairs of integers as you can that
 * multiply to −24. The reveal is not just a list: there are
 * exactly EIGHT, and seeing why there are exactly eight is the
 * real answer to "how can you be sure you have them all?" — you
 * list every factor pair of 24, then give each one its two
 * possible sign arrangements.
 * ============================================================= */
const START_SECONDS = 120

const PAIRS = [
  { calc: '1 × -24', a: 'one negative' },
  { calc: '-1 × 24', a: 'one negative' },
  { calc: '2 × -12', a: 'one negative' },
  { calc: '-2 × 12', a: 'one negative' },
  { calc: '3 × -8', a: 'one negative' },
  { calc: '-3 × 8', a: 'one negative' },
  { calc: '4 × -6', a: 'one negative' },
  { calc: '-4 × 6', a: 'one negative' },
]

export const PairsGameWidget = ({ lang = 'en' }) => {
  const [seconds, setSeconds] = useState(START_SECONDS)
  const [running, setRunning] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current)
            setRunning(false)
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [running])

  const mm = String(Math.floor(seconds / 60))
  const ss = String(seconds % 60).padStart(2, '0')
  const done = seconds === 0
  const low = seconds > 0 && seconds <= 15
  const reset = () => { clearInterval(intervalRef.current); setRunning(false); setSeconds(START_SECONDS) }

  return (
    <div className="w-full h-full flex flex-col select-none">
      <Stage className={revealed ? '' : 'items-center justify-center'}>
        {!revealed ? (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
              {done ? pick(lang, 'Time is up', 'Hết giờ') : pick(lang, 'Hunting time', 'Thời gian đi săn')}
            </div>
            <div
              className={`font-mono font-black tabular-nums leading-none ${low && !done ? 'animate-pulse' : ''}`}
              style={{ fontSize: 'clamp(3.5rem, 12vw, 6rem)', color: done ? RED : low ? ORANGE : TEAL }}>
              {mm}:{ss}
            </div>
            <div className="mt-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 max-w-[17rem]">
              {pick(lang, 'How many pairs with a product of −24 can your team find?', 'Đội em tìm được bao nhiêu cặp có tích bằng −24?')}
            </div>
          </div>
        ) : (
          <div className="w-full h-full overflow-y-auto custom-scrollbar">
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-center mb-1.5" style={{ color: TEAL }}>
              {pick(lang, 'There are exactly eight', 'Có đúng tám cặp')}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {PAIRS.map((p) => (
                <div key={p.calc} className="bg-slate-50 dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700 px-2 py-1.5 shadow-sm text-center">
                  <span className="font-mono font-black text-[15px] sm:text-base" style={{ color: ORANGE }}>{p.calc}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 leading-snug text-center">
              {pick(lang,
                '24 has four factor pairs — 1 and 24, 2 and 12, 3 and 8, 4 and 6. Each one can take its negative sign two ways. Four twos are eight, and that is how you can be sure you have them all.',
                '24 có bốn cặp thừa số — 1 và 24, 2 và 12, 3 và 8, 4 và 6. Mỗi cặp có hai cách đặt dấu âm. Bốn nhân hai là tám, và đó là cách em chắc chắn đã tìm đủ.')}
            </p>
          </div>
        )}
      </Stage>

      <Controls>
        <div className="flex items-center gap-2">
          <button
            onClick={() => (done ? reset() : setRunning((r) => !r))}
            className="flex-1 py-2 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest text-white border-2 active:scale-95 transition-all"
            style={{ backgroundColor: running ? ORANGE : TEAL, borderColor: running ? ORANGE : TEAL }}>
            {done ? pick(lang, 'Reset timer', 'Đặt lại đồng hồ')
              : running ? pick(lang, 'Pause', 'Tạm dừng')
                : pick(lang, 'Start 2:00', 'Bắt đầu 2:00')}
          </button>
          <button
            onClick={reset}
            className="px-3 py-2 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-widest bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-500 active:scale-95">
            {pick(lang, 'Reset', 'Đặt lại')}
          </button>
          <button
            onClick={() => setRevealed((v) => !v)}
            className="flex-1 py-2 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest text-white border-2 active:scale-95 transition-all"
            style={{ backgroundColor: PURPLE, borderColor: PURPLE }}>
            {revealed ? pick(lang, 'Back to the timer', 'Quay lại đồng hồ') : pick(lang, 'Show all eight', 'Hiện cả tám cặp')}
          </button>
        </div>
      </Controls>
    </div>
  )
}

/* ============================================================= *
 * WIDGET 2 — SAY IT, THEN WRITE IT
 *
 * The same four-step drill as 1.1, with 1.2 sentences: read the
 * English, find the words that carry the maths, write the
 * calculation, and only then the answer. Nothing here comes from
 * the workbook exercise, because that exercise is the homework.
 * ============================================================= */
const DRILL = [
  {
    prompt: 'Multiply -7 by 4.',
    promptVn: 'Multiply -7 by 4.',
    signal: '“multiply … by” — you start at the first number, so -7 comes first.',
    signalVn: '“multiply … by” (nhân … với) — em bắt đầu ở số thứ nhất, nên -7 đứng trước.',
    calc: '-7 × 4',
    calcVn: '-7 × 4',
    answer: '-28',
  },
  {
    prompt: 'Find the product of -5 and -6.',
    promptVn: 'Find the product of -5 and -6.',
    signal: '“product” always means multiply. Two negatives, so the answer is positive.',
    signalVn: '“product” (tích) luôn có nghĩa là nhân. Hai số âm, nên đáp án là số dương.',
    calc: '-5 × -6',
    calcVn: '-5 × -6',
    answer: '30',
  },
  {
    prompt: 'Divide -36 by 9.',
    promptVn: 'Divide -36 by 9.',
    signal: '“divide … by” — the number after “divide” is the one being cut up.',
    signalVn: '“divide … by” (chia … cho) — số đứng sau “divide” là số bị chia.',
    calc: '-36 ÷ 9',
    calcVn: '-36 ÷ 9',
    answer: '-4',
  },
  {
    prompt: 'Share a debt of 30 dollars equally between 5 friends.',
    promptVn: 'Share a debt of 30 dollars equally between 5 friends.',
    signal: '“share equally between” means divide. A debt is negative, so start at -30.',
    signalVn: '“share equally between” (chia đều cho) nghĩa là chia. Nợ là số âm, nên bắt đầu từ -30.',
    calc: '-30 ÷ 5',
    calcVn: '-30 ÷ 5',
    answer: '-6',
  },
  {
    prompt: 'What is 8 times -3?',
    promptVn: 'What is 8 times -3?',
    signal: '“times” is the everyday word for multiply. Different signs, so negative.',
    signalVn: '“times” là từ thông dụng của phép nhân. Hai dấu khác nhau, nên kết quả âm.',
    calc: '8 × -3',
    calcVn: '8 × -3',
    answer: '-24',
  },
  {
    reverse: true,
    prompt: '-48 ÷ -6',
    promptVn: '-48 ÷ -6',
    signal: 'Say it out loud in English, two different ways.',
    signalVn: 'Hãy đọc to bằng tiếng Anh, theo hai cách khác nhau.',
    calc: '“negative forty-eight divided by negative six” · “how many negative sixes are there in negative forty-eight?”',
    calcVn: '“negative forty-eight divided by negative six” · “how many negative sixes are there in negative forty-eight?”',
    answer: '8',
  },
]

export const TranslateWidget = ({ lang = 'en' }) => {
  const [i, setI] = useState(0)
  const [step, setStep] = useState(0) // 0 prompt · 1 signal · 2 calculation · 3 answer
  const item = DRILL[i]
  const last = i === DRILL.length - 1

  const go = (n) => { setI(n); setStep(0) }

  const nextLabel = step === 0 ? pick(lang, 'Which words matter?', 'Từ nào quan trọng?')
    : step === 1 ? (item.reverse ? pick(lang, 'Show the English', 'Hiện câu tiếng Anh') : pick(lang, 'Write the calculation', 'Viết phép tính'))
      : step === 2 ? pick(lang, 'Show the answer', 'Hiện đáp án')
        : pick(lang, 'Next sentence', 'Câu tiếp theo')

  return (
    <div className="w-full h-full flex flex-col select-none">
      <Stage>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            {item.reverse ? pick(lang, 'Maths → English', 'Toán → Tiếng Anh') : pick(lang, 'English → Maths', 'Tiếng Anh → Toán')}
          </span>
          <span className="font-mono font-black text-xs text-slate-400 tabular-nums">{i + 1}/{DRILL.length}</span>
        </div>

        <div className="rounded-xl border-2 px-3 py-2.5 mb-2 shrink-0" style={{ borderColor: TEAL, backgroundColor: `${TEAL}0f` }}>
          <p className={`font-black text-slate-800 dark:text-slate-100 leading-snug ${item.reverse ? 'font-mono text-3xl text-center' : 'text-base sm:text-lg lg:text-xl'}`}>
            {pick(lang, item.prompt, item.promptVn)}
          </p>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar space-y-2">
          {step >= 1 && (
            <div className="rounded-xl px-3 py-2 animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ backgroundColor: `${ORANGE}14` }}>
              <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: ORANGE }}>{pick(lang, 'Signal words', 'Từ khoá')}</div>
              <div className="font-bold text-[15px] sm:text-base lg:text-lg text-slate-700 dark:text-slate-200">{pick(lang, item.signal, item.signalVn)}</div>
            </div>
          )}
          {step >= 2 && (
            <div className="rounded-xl px-3 py-2 animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ backgroundColor: `${PURPLE}12` }}>
              <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: PURPLE }}>
                {item.reverse ? pick(lang, 'Say it like this', 'Nói như thế này') : pick(lang, 'The calculation', 'Phép tính')}
              </div>
              <div className={`font-black text-slate-800 dark:text-slate-100 ${item.reverse ? 'text-[15px] sm:text-base leading-snug' : 'font-mono text-2xl'}`}>
                {pick(lang, item.calc, item.calcVn)}
              </div>
            </div>
          )}
          {step >= 3 && (
            <div className="rounded-xl px-3 py-2 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-300 border-2" style={{ borderColor: GREEN, backgroundColor: `${GREEN}12` }}>
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: GREEN }}>{pick(lang, 'Answer', 'Đáp án')}</span>
              <span className="font-mono font-black text-2xl" style={{ color: GREEN }}>{item.answer}</span>
            </div>
          )}
        </div>
      </Stage>

      <Controls>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(Math.max(0, i - 1))}
            disabled={i === 0}
            className="px-3 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest border-2 border-slate-200 dark:border-slate-600 text-slate-500 disabled:opacity-30 active:scale-95">
            {pick(lang, 'Back', 'Lùi')}
          </button>
          <button
            onClick={() => (step < 3 ? setStep(step + 1) : !last && go(i + 1))}
            disabled={step === 3 && last}
            className="flex-1 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest text-white border-2 disabled:opacity-40 active:scale-95 transition-all"
            style={{ backgroundColor: step === 3 ? PURPLE : TEAL, borderColor: step === 3 ? PURPLE : TEAL }}>
            {step === 3 && last ? pick(lang, 'That is all of them', 'Hết rồi') : nextLabel}
          </button>
        </div>
      </Controls>
    </div>
  )
}
