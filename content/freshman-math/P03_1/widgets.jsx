// content/freshman-math/P03_1/widgets.jsx
// One widget, and it lives in the SOLUTIONS half of the deck.
//
// Everything in the project half is a task, a question or a diagram, and those
// belong on a static slide a student can work from. What a static slide cannot
// do is narrow a search in front of a class: circle A leaves a whole ring of
// Hoi An, circle B cuts it to two places two and a half kilometres apart, and
// circle C throws one of those away. Flipping between four pictures loses that,
// because the eye spends each transition re-finding the map instead of watching
// the answer close in. So it is one map and a stepper, teacher-paced, with a
// Back button and nothing else to fiddle with.
//
// THE NUMBERS ARE THE MAP'S, NOT INVENTED. images/hoi-an-map.png is rendered at
// 0.2 px per metre, so 200 px = 1 km exactly, and every centre and radius below
// is read straight off that:
//
//   A  Japanese Bridge        (209.4, 643.0)   2.7 km -> r = 540
//   B  Tra Que Herb Village   (423.7,  77.0)   1.5 km -> r = 300
//   C  Cua Dai Beach         (1070.6, 179.8)   2.3 km -> r = 460
//
// The two places circles A and B cross are (625.6, 298.9) and (125.5, 109.6) --
// 2674 m apart on the ground, and BOTH are on the map. That second point is not
// decoration: it is the whole reason the treasure task downstairs hands the
// Early Years class two tape measures and three clues rather than two of each.
//
// REGION is the exact set of points consistent with all three readings once you
// admit that "2.7 km" means anything from 2.65 to 2.75. It was computed by
// sampling the plane on a 1.5 m grid and taking the convex hull, not sketched:
// 111 m by 143 m, which is the honest answer to "where is he" and the number
// the privacy slide turns on.
//
// The course is bilingual:false, so this widget takes no `lang` prop.
import { useState } from 'react'

import mapImg from './images/hoi-an-map.png'

const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'
const KEY = '#c25e12'

const W = 1280
const H = 720

const A = { cx: 209.4, cy: 643.0, r: 540, tone: RED, name: 'A · 2.7 km' }
const B = { cx: 423.7, cy: 77.0, r: 300, tone: BLUE, name: 'B · 1.5 km' }
const C = { cx: 1070.6, cy: 179.8, r: 460, tone: GREEN, name: 'C · 2.3 km' }

const HIT = { x: 625.6, y: 298.9 }     // the crossing that survives
const MISS = { x: 125.5, y: 109.6 }    // the crossing circle C throws away
const REGION = 'M 615.1 295.4 L 615.4 296.6 L 616.9 302.3 L 617.5 304.4 L 617.8 305.0 L 618.4 305.9 L 623.8 312.5 L 624.4 313.1 L 625.6 312.2 L 630.4 308.0 L 633.7 305.0 L 637.3 301.4 L 637.3 301.1 L 635.8 295.7 L 634.9 294.5 L 628.9 287.3 L 627.1 285.2 L 626.5 284.6 L 626.2 284.6 L 617.2 293.0 L 615.1 295.1 Z'

const STEPS = [
  { label: 'Swing the first arc', note: 'A · 2.7 km from the Japanese Bridge. Every point on that ring is a possible answer.' },
  { label: 'Now the second', note: 'B · 1.5 km from Tra Que. Two crossings — and they are 2.7 km apart.' },
  { label: 'And the third', note: 'C · 2.3 km from Cua Dai Beach. One crossing survives.' },
  { label: 'Who is there?', note: 'A coffee shop on the road out to the beach. He never told anybody where he was.' },
  { label: 'How sure are we?', note: '"2.7 km" means 2.65 to 2.75. All three readings together leave a patch about 130 m across.' },
]

const Dot = ({ x, y, tone, label, anchor = 'start', dx = 22, dy = -16, struck = false }) => (
  <g>
    <circle cx={x} cy={y} r="11" fill={tone} stroke="#ffffff" strokeWidth="4" />
    {struck && (
      <>
        <line x1={x - 15} y1={y - 15} x2={x + 15} y2={y + 15} stroke={tone} strokeWidth="5" />
        <line x1={x - 15} y1={y + 15} x2={x + 15} y2={y - 15} stroke={tone} strokeWidth="5" />
      </>
    )}
    <text
      x={x + dx} y={y + dy} textAnchor={anchor} fontSize="30" fontWeight="800" fill={tone}
      stroke="#ffffff" strokeWidth="7" paintOrder="stroke"
      fontFamily="system-ui, Segoe UI, sans-serif">{label}</text>
  </g>
)

export const HoiAnFixWidget = () => {
  const [step, setStep] = useState(0)
  const done = step >= STEPS.length
  const shown = (n) => step >= n

  return (
    <div className="w-full h-full flex flex-col select-none gap-2">
      <div className="flex-1 min-h-0 relative">
        <img src={mapImg} alt="Street map of Hoi An" className="absolute inset-0 w-full h-full object-contain" draggable={false} />
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full">
          {/* The arcs are bigger than the map, and the SVG viewport is the whole
              panel while the picture is letterboxed inside it — so without this
              clip the arcs sweep out over the white margins beside the map and
              hang in mid-air. Clip everything to the map's own rectangle. */}
          <defs>
            <clipPath id="hoian-frame"><rect x="0" y="0" width={W} height={H} /></clipPath>
          </defs>
          <g clipPath="url(#hoian-frame)">
          {[A, B, C].map((c, i) => shown(i + 1) && (
            <g key={c.name}>
              <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke={c.tone} strokeWidth="5"
                strokeDasharray="14 9" opacity="0.9" />
              <line x1={c.cx} y1={c.cy} x2={HIT.x} y2={HIT.y} stroke={c.tone} strokeWidth="2" opacity="0.45" />
            </g>
          ))}

          {shown(2) && !shown(3) && (
            <>
              <Dot x={HIT.x} y={HIT.y} tone={PURPLE} label="here?" />
              <Dot x={MISS.x} y={MISS.y} tone={PURPLE} label="or here?" />
            </>
          )}

          {shown(3) && <Dot x={MISS.x} y={MISS.y} tone="#94a3b8" label="not this one" />}

          {shown(4) && (
            <g>
              <circle cx={HIT.x} cy={HIT.y} r="26" fill="none" stroke={KEY} strokeWidth="5" />
              <circle cx={HIT.x} cy={HIT.y} r="9" fill={KEY} stroke="#ffffff" strokeWidth="3" />
              <text x={HIT.x + 40} y={HIT.y - 26} fontSize="34" fontWeight="900" fill={KEY}
                stroke="#ffffff" strokeWidth="8" paintOrder="stroke"
                fontFamily="system-ui, Segoe UI, sans-serif">Classic Coffee</text>
            </g>
          )}

          {shown(5) && (
            <g>
              <path d={REGION} fill={KEY} fillOpacity="0.85" stroke={KEY} strokeWidth="3" />
              <circle cx="626" cy="299" r="64" fill="none" stroke={KEY} strokeWidth="3" strokeDasharray="8 7" />
              <line x1="626" y1="363" x2="700" y2="470" stroke={KEY} strokeWidth="2.5" />
              <text x="708" y="478" fontSize="30" fontWeight="800" fill={KEY}
                stroke="#ffffff" strokeWidth="7" paintOrder="stroke"
                fontFamily="system-ui, Segoe UI, sans-serif">about 130 m across</text>
            </g>
          )}
          </g>
        </svg>
      </div>

      <div className="shrink-0 rounded-xl border-2 px-3 py-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600">
        <p className="font-bold text-[13px] sm:text-sm text-slate-700 dark:text-slate-200 leading-snug min-h-[2.4em]">
          {step === 0 ? 'Three readings, and nothing marked on the map yet. Where is he?' : STEPS[step - 1].note}
        </p>
      </div>

      <div className="shrink-0 flex items-center gap-2">
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
          style={{ backgroundColor: done ? GREEN : KEY, borderColor: done ? GREEN : KEY }}>
          {done ? 'That is the whole method' : STEPS[step].label}
        </button>
      </div>
    </div>
  )
}
