// content/y5-math/U05_L3/table.jsx
// ONE COLD MORNING — the temperature table with its answers revealed one press
// at a time (slide 18; flow step 8, a model predicted per press).
//
// The class works a to d on whiteboards first. Then, before each press, they
// say the answer; the press lights up the row (or rows) that question uses and
// shows the number sentence with the answer in a sentence frame ("The new
// temperature is … °C."). Back goes one step; nothing shows before its press.
//
// Made-up numbers, labelled on the stage. English only; one white-plate SVG
// (840×600, sized for a split's media panel) and the house Btn.
import { useState } from 'react'
import { ChevronRight, Undo2, RotateCcw } from 'lucide-react'
import { Btn } from '../../y7-science/U03_models/ui.jsx'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"
const INK = '#2b2b2b'
const MUTED = '#5b6770'
const RED = '#c8102e'
const TEAL = '#0087a8'
const GREEN = '#4a8b23'
const LIT = '#fde68a'

const ROWS = [
  ['Hội An', 19],
  ['Hà Nội', 11],
  ['Sa Pa', -2],
  ['Seoul (Korea)', -7],
  ['Harbin (China)', -21],
  ['Đà Lạt', 9],
]
const num = (n) => (n < 0 ? `−${-n}` : String(n))

// [letter, rows it uses, number sentence, the answer in its sentence frame]
const STEPS = [
  ['a', [3], '−7 + 10 = 3', 'The new temperature is 3 °C.'],
  ['b', [2], '−2 − 4 = −6', 'The new temperature is −6 °C.'],
  ['c', [0, 3], '7 + 19 = 26', 'The difference is 26 °C.'],
  ['d', [4], '−21 is the lowest.', 'Harbin is the coldest.'],
]

const X0 = 110
const X1 = 480 // the column line
const X2 = 730
const Y0 = 70 // top of the header row
const RH = 58

export function TableReveal({ isDisplayMode = false }) {
  const [k, setK] = useState(0) // 0 = nothing shown; k = steps a..k shown, the last one lit
  const big = isDisplayMode
  const step = k > 0 ? STEPS[k - 1] : null
  const lit = step ? step[1] : []
  const label = k < STEPS.length ? `Show ${STEPS[k][0]}` : 'Done'

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 840 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="840" height="600" rx="14" fill="#ffffff" />
          <text x="420" y="44" fontFamily={FONT} fontSize="28" fontWeight="700" fill={MUTED} textAnchor="middle">6 a.m., one morning in January (made up)</text>
          <rect x={X0} y={Y0} width={X2 - X0} height={RH} fill={TEAL} />
          <text x={(X0 + X1) / 2} y={Y0 + 40} fontFamily={FONT} fontSize="30" fontWeight="800" fill="#ffffff" textAnchor="middle">Place</text>
          <text x={(X1 + X2) / 2} y={Y0 + 40} fontFamily={FONT} fontSize="30" fontWeight="800" fill="#ffffff" textAnchor="middle">Temperature</text>
          {ROWS.map(([place, t], i) => {
            const y = Y0 + RH * (i + 1)
            const on = lit.includes(i)
            return (
              <g key={place}>
                <rect x={X0} y={y} width={X2 - X0} height={RH} fill={on ? LIT : i % 2 ? '#ffffff' : '#e3eef9'} stroke={on ? INK : '#b8c4d0'} strokeWidth={on ? 4 : 2} />
                <line x1={X1} y1={y} x2={X1} y2={y + RH} stroke="#b8c4d0" strokeWidth="2" />
                <text x={X0 + 24} y={y + 40} fontFamily={FONT} fontSize="30" fontWeight="800" fill={INK}>{place}</text>
                <text x={(X1 + X2) / 2} y={y + 40} fontFamily={FONT} fontSize="30" fontWeight="800" fill={t < 0 ? RED : INK} textAnchor="middle">{`${num(t)} °C`}</text>
              </g>
            )
          })}
          {/* the answer, one step at a time */}
          <rect x="40" y="494" width="760" height="96" rx="14" fill={step ? '#eef6e8' : '#f4f6f8'} stroke={step ? GREEN : '#d5dbe1'} strokeWidth="3" />
          {step ? (
            <g>
              <text x="70" y="534" fontFamily={FONT} fontSize="30" fontWeight="900" fill={GREEN}>{`${step[0]}   ${step[2]}`}</text>
              <text x="70" y="574" fontFamily={FONT} fontSize="28" fontWeight="800" fill={INK}>{step[3]}</text>
            </g>
          ) : (
            <text x="420" y="552" fontFamily={FONT} fontSize="28" fontWeight="800" fill={MUTED} textAnchor="middle">Say the answer. Then press.</text>
          )}
        </svg>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn big={big} tone="slate" icon={Undo2} disabled={k === 0} onClick={() => setK((v) => Math.max(0, v - 1))}>Back</Btn>
        <Btn big={big} tone="orange" icon={ChevronRight} disabled={k === STEPS.length} onClick={() => setK((v) => Math.min(STEPS.length, v + 1))}>{label}</Btn>
        <Btn big={big} tone="teal" icon={RotateCcw} disabled={k === 0} onClick={() => setK(0)}>Start again</Btn>
      </div>
    </div>
  )
}
