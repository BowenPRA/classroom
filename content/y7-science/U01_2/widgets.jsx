import { useState } from 'react'
import mossCells from './images/moss-cells.jpg'
import cheekCells from './images/cheek-cells.jpg'
import onionCells from './images/onion-cells.jpg'
import bloodCells from './images/blood-cells.jpg'

// Cambridge palette, matching the deck's note cards and diagrams.
const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'

const t = (lang, en, vn) => (lang === 'vn' ? vn : en)

/* ============================================================= *
 * WIDGET 1 — HOW MANY CELLS ARE IN MR BOWEN?
 *
 * Same shape as the 1.1 soda-can calculator, on purpose: the class
 * already knows how to use it. One line of the calculation per
 * press, numbers big enough to read from the back of the room,
 * nothing revealed early and nothing to fiddle with. The teacher
 * presses "Next step" as the class works each line out on paper.
 * ============================================================= */
const COUNT_STEPS = [
  {
    label: 'Step 1 — the estimate', labelVn: 'Bước 1 — con số ước tính',
    big: '100 000 000 000 000',
    lines: [
      { en: 'Cells in one person', vn: 'Số tế bào trong một người', value: '100 trillion', valueVn: '100 nghìn tỉ' },
    ],
    note: 'Nobody has ever counted them. This is the best estimate scientists have.',
    noteVn: 'Chưa ai từng đếm hết. Đây là con số ước tính tốt nhất của các nhà khoa học.',
  },
  {
    label: 'Step 2 — start counting', labelVn: 'Bước 2 — bắt đầu đếm',
    sum: '1 cell every second',
    sumVn: 'mỗi giây 1 tế bào',
    lines: [
      { en: 'Seconds of counting', vn: 'Số giây phải đếm', value: '100 000 000 000 000' },
    ],
    note: 'One cell per second, no sleeping, no stopping.',
    noteVn: 'Mỗi giây một tế bào, không ngủ, không nghỉ.',
  },
  {
    label: 'Step 3 — seconds into years', labelVn: 'Bước 3 — đổi giây ra năm',
    sum: '÷ 60 ÷ 60 ÷ 24 ÷ 365',
    lines: [
      { en: 'Time to finish counting', vn: 'Thời gian đếm xong', value: '3 170 000 years', valueVn: '3 170 000 năm' },
    ],
    note: 'About 3.17 million years.',
    noteVn: 'Khoảng 3,17 triệu năm.',
  },
  {
    label: 'Step 4 — is that a long time?', labelVn: 'Bước 4 — như vậy có lâu không?',
    lines: [
      { en: 'Counting your cells', vn: 'Đếm số tế bào của em', value: '3 170 000 years', valueVn: '3 170 000 năm' },
      { en: 'All of written history', vn: 'Toàn bộ lịch sử chữ viết', value: '5 000 years', valueVn: '5 000 năm' },
    ],
    note: 'People have only been writing things down for about 5000 years. Start counting at the very first word ever written, and today you would not even be close.',
    noteVn: 'Con người mới ghi chép được khoảng 5000 năm. Nếu bắt đầu đếm từ chữ viết đầu tiên của loài người, đến hôm nay em vẫn còn xa mới xong.',
  },
]

export const CellCountWidget = ({ lang = 'en' }) => {
  const [step, setStep] = useState(0)
  const cur = COUNT_STEPS[step]
  const last = step === COUNT_STEPS.length - 1

  return (
    <div className="w-full h-full flex flex-col select-none">
      <div className="flex-1 min-h-[220px] w-full bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-inner flex flex-col p-4 sm:p-6 overflow-y-auto custom-scrollbar">
        <div className="text-xs sm:text-sm font-black uppercase tracking-[0.15em] mb-4" style={{ color: TEAL }}>
          {t(lang, cur.label, cur.labelVn)}
        </div>

        {cur.big && (
          <div className="font-mono font-black text-center rounded-xl py-3 px-2 mb-4 text-base sm:text-2xl break-all leading-tight"
            style={{ color: PURPLE, backgroundColor: `${PURPLE}12` }}>
            {cur.big}
          </div>
        )}

        {cur.sum && (
          <div className="font-mono font-black text-center rounded-xl py-2.5 px-3 mb-4 text-lg sm:text-2xl"
            style={{ color: ORANGE, backgroundColor: `${ORANGE}12` }}>
            {t(lang, cur.sum, cur.sumVn || cur.sum)}
          </div>
        )}

        <div className="space-y-2.5">
          {cur.lines.map((line, i) => (
            <div key={i} className="flex items-baseline justify-between gap-3 border-b-2 border-dashed border-slate-200 dark:border-slate-700 pb-2">
              <span className="font-bold text-slate-600 dark:text-slate-300 text-sm sm:text-base">{t(lang, line.en, line.vn)}</span>
              <span className="font-mono font-black text-base sm:text-2xl tabular-nums text-right" style={{ color: PURPLE }}>
                {t(lang, line.value, line.valueVn || line.value)}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[13px] sm:text-base font-semibold text-slate-500 dark:text-slate-400 leading-snug">
          {t(lang, cur.note, cur.noteVn)}
        </p>
      </div>

      <div className="w-full flex items-center gap-2 mt-2 flex-shrink-0">
        <button
          onClick={() => setStep((n) => Math.max(0, n - 1))}
          disabled={step === 0}
          className="px-4 py-3 rounded-xl font-black text-sm uppercase tracking-widest border-2 border-slate-200 dark:border-slate-700 text-slate-500 disabled:opacity-30 active:scale-95 transition-all">
          {t(lang, 'Back', 'Quay lại')}
        </button>
        <button
          onClick={() => setStep((n) => Math.min(COUNT_STEPS.length - 1, n + 1))}
          disabled={last}
          className="flex-1 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest text-white disabled:opacity-40 active:scale-95 transition-all"
          style={{ backgroundColor: last ? GREEN : TEAL }}>
          {last ? t(lang, 'That is the whole calculation', 'Đó là toàn bộ phép tính') : t(lang, 'Next step', 'Bước tiếp theo')}
        </button>
        <span className="w-14 text-center font-mono font-black text-slate-400 tabular-nums">{step + 1}/{COUNT_STEPS.length}</span>
      </div>
    </div>
  )
}

/* ============================================================= *
 * WIDGET 2 — PLANT OR ANIMAL?
 *
 * Learner's Book page 15, Question 1, run as a class vote. One
 * real photograph at a time, two big buttons, then the verdict
 * and — the part that matters — the REASON. The photograph never
 * leaves the screen, so the class can point at the evidence while
 * they argue about it.
 *
 * Photo 3 is the trap: onion cells are a plant with no
 * chloroplasts at all, because an onion bulb grows underground.
 * "Green means plant" is a rule that breaks; "has a wall" is not.
 * ============================================================= */
const SPECIMENS = [
  {
    image: mossCells,
    name: 'Photograph A — a moss leaf', nameVn: 'Ảnh A — lá rêu',
    answer: 'plant',
    why: 'Straight walls in a brick pattern, and every cell is stuffed with green **chloroplasts**. Both are plant-only.',
    whyVn: 'Những vách thẳng xếp như gạch, và mỗi tế bào chứa đầy **lục lạp** xanh. Cả hai đều chỉ có ở thực vật.',
  },
  {
    image: cheekCells,
    name: 'Photograph B — from someone’s mouth', nameVn: 'Ảnh B — lấy từ miệng một người',
    answer: 'animal',
    why: 'Soft, shapeless and not a single straight edge — so there is no **cell wall**. The small dark dot in each one is its nucleus.',
    whyVn: 'Mềm, không có hình dạng cố định và không hề có cạnh thẳng — vậy là không có **thành tế bào**. Chấm sẫm nhỏ trong mỗi tế bào là nhân.',
  },
  {
    image: onionCells,
    name: 'Photograph C — careful with this one', nameVn: 'Ảnh C — cẩn thận với ảnh này',
    answer: 'plant',
    why: 'No green at all — and still a plant. Look for the long **straight walls** stacked like bricks. An onion bulb grows underground in the dark, so it has no chloroplasts.',
    whyVn: 'Không hề có màu xanh — mà vẫn là thực vật. Hãy nhìn những **thành tế bào thẳng** xếp như gạch. Củ hành mọc dưới đất trong bóng tối nên không có lục lạp.',
  },
  {
    image: bloodCells,
    name: 'Photograph D — human blood', nameVn: 'Ảnh D — máu người',
    answer: 'animal',
    why: 'Round, separate and free to move past each other. Nothing stiff is holding them in a shape, so there is no **cell wall**.',
    whyVn: 'Tròn, tách rời và trượt qua nhau được. Không có gì cứng giữ hình dạng cho chúng, nên không có **thành tế bào**.',
  },
]

/** Split on **bold** so a key word inside a reason can be emphasised. */
const withBold = (text, colour) =>
  text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} style={{ color: colour }}>{part.slice(2, -2)}</strong>
      : <span key={i}>{part}</span>,
  )

export const PlantOrAnimalWidget = ({ lang = 'en' }) => {
  const [i, setI] = useState(0)
  const [choice, setChoice] = useState(null)
  const cur = SPECIMENS[i]
  const answered = choice !== null
  const right = choice === cur.answer
  const verdictColour = !answered ? TEAL : right ? GREEN : RED
  const last = i === SPECIMENS.length - 1

  const go = (n) => { setI(n); setChoice(null) }

  return (
    <div className="w-full h-full flex flex-col select-none">
      <div className="flex-1 min-h-[240px] w-full bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-inner flex flex-col p-3 sm:p-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-black text-xs sm:text-sm uppercase tracking-[0.12em]" style={{ color: TEAL }}>
            {t(lang, cur.name, cur.nameVn)}
          </span>
          <span className="ml-auto font-mono font-black text-slate-400 text-xs tabular-nums">{i + 1}/{SPECIMENS.length}</span>
        </div>

        {/* The photograph never leaves the screen — the class needs to keep
            pointing at it while they justify the answer. */}
        <div className="flex-1 min-h-0 rounded-xl overflow-hidden border-2 transition-colors duration-300"
          style={{ borderColor: verdictColour }}>
          <img src={cur.image} alt={cur.name} className="w-full h-full object-cover" draggable={false} />
        </div>

        {!answered ? (
          <div className="grid grid-cols-2 gap-2 mt-2.5 flex-shrink-0">
            {[['plant', GREEN, t(lang, 'Plant cell', 'Tế bào thực vật')],
              ['animal', '#c2185b', t(lang, 'Animal cell', 'Tế bào động vật')]].map(([key, colour, label]) => (
              <button key={key} onClick={() => setChoice(key)}
                className="py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest text-white border-b-4 border-black/25 active:border-b-0 active:translate-y-1 transition-all"
                style={{ backgroundColor: colour }}>
                {label}
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-2.5 rounded-xl border-2 p-2.5 sm:p-3 flex-shrink-0 animate-in fade-in"
            style={{ borderColor: verdictColour, backgroundColor: `${verdictColour}0f` }}>
            <div className="font-black text-sm sm:text-base mb-1" style={{ color: verdictColour }}>
              {right
                ? t(lang, `Yes — ${cur.answer === 'plant' ? 'a plant' : 'an animal'} cell.`, `Đúng — tế bào ${cur.answer === 'plant' ? 'thực vật' : 'động vật'}.`)
                : t(lang, `No — it is ${cur.answer === 'plant' ? 'a plant' : 'an animal'} cell.`, `Chưa đúng — đây là tế bào ${cur.answer === 'plant' ? 'thực vật' : 'động vật'}.`)}
            </div>
            <p className="text-[13px] sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">
              {withBold(t(lang, cur.why, cur.whyVn), verdictColour)}
            </p>
          </div>
        )}
      </div>

      <div className="w-full flex items-center gap-2 mt-2 flex-shrink-0">
        <button
          onClick={() => go(Math.max(0, i - 1))}
          disabled={i === 0}
          className="px-4 py-3 rounded-xl font-black text-sm uppercase tracking-widest border-2 border-slate-200 dark:border-slate-700 text-slate-500 disabled:opacity-30 active:scale-95 transition-all">
          {t(lang, 'Back', 'Quay lại')}
        </button>
        <button
          onClick={() => go(Math.min(SPECIMENS.length - 1, i + 1))}
          disabled={last}
          className="flex-1 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest text-white disabled:opacity-40 active:scale-95 transition-all"
          style={{ backgroundColor: last ? GREEN : TEAL }}>
          {last ? t(lang, 'That is all four', 'Hết cả bốn ảnh') : t(lang, 'Next photograph', 'Ảnh tiếp theo')}
        </button>
      </div>
    </div>
  )
}
