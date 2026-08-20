// content/freshman-math/U01_4/widgets.jsx
// ONE widget, configured four ways. It exists for the one thing a static slide
// cannot do: hold the curve on screen while a single number changes, so the
// class watches the SAME parabola move instead of comparing two pictures.
//
// This is the exception to "no sliders" in CLAUDE.md, and it is deliberate:
// here the dragging IS the learning. Every other beat in the deck — the tables,
// the plotting, the comparison, the sign trap — is a plain slide or a drawn
// diagram, and the sliders arrive only after the class has already plotted the
// same curve by hand on paper.
//
// The four uses, in teaching order:
//   ParabolaK      k only.        y = x² + k          up and down
//   ParabolaA      a only.        y = ax²             narrow, wide, flipped
//   ParabolaH      h only.        y = (x − h)²        the sign trap, live
//   ParabolaFull   a, h and k.    y = a(x − h)² + k   the whole form
//
// RULES THIS WIDGET KEEPS TO:
//  · y = x² stays on screen in ghost grey at all times, so "moved" and
//    "narrower" are statements about something visible rather than remembered;
//  · the equation is printed as it would be written on the board, with the sign
//    folded in — a of −1.5 prints "y = −1.5x²", h of 3 prints "(x − 3)";
//  · the vertex is always dotted and always labelled with its coordinates,
//    because reading (h, k) off the picture is the skill being built;
//  · equal scale on both axes (40 px per unit each way). A squashed y-axis
//    would make the a-slider a lie, and the a-slider is the point;
//  · nothing else moves. No zoom, no drag, no second curve to fiddle with.
//
// The course is flagged bilingual:false in content/courses.js, so this widget
// takes no `lang` prop and has no …Vn twins.
import { useState } from 'react'

const INK = '#2b2b2b'
const KEY = '#c25e12'
const GRID = '#dbe3e8'
const GHOST = '#b6c0cb'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'

// The plot window. 40 px per unit in BOTH directions; see the note above.
const W = 880
const H = 540
const U = 40
const OX = 440
const OY = 320
const XMIN = -11
const XMAX = 11
const YMIN = -5.5
const YMAX = 8

const X = (x) => OX + x * U
const Y = (y) => OY - y * U

const AXIS_X = [-10, -8, -6, -4, -2, 2, 4, 6, 8, 10]
const AXIS_Y = [-4, -2, 2, 4, 6]

/** Sampled path for y = f(x), broken wherever it leaves the window. */
function pathFor(f) {
  let d = ''
  let pen = false
  for (let i = 0; i <= 600; i++) {
    const x = XMIN + (i / 600) * (XMAX - XMIN)
    const y = f(x)
    if (!Number.isFinite(y) || y < YMIN || y > YMAX) { pen = false; continue }
    d += `${pen ? 'L' : 'M'}${X(x).toFixed(1)},${Y(y).toFixed(1)} `
    pen = true
  }
  return d.trim()
}

/** 1.5 → "1.5", 2 → "2", −1 → "1" (the sign is handled by the caller). */
const num = (v) => String(Math.abs(Math.round(v * 100) / 100))
const signed = (v) => (v < 0 ? `−${num(v)}` : num(v))

/** The equation as it would be written on the board. */
function equationOf(a, h, k) {
  const lead = a === 1 ? '' : a === -1 ? '−' : signed(a)
  const body = h === 0 ? 'x²' : `(x ${h > 0 ? '−' : '+'} ${num(h)})²`
  const tail = k === 0 ? '' : k > 0 ? ` + ${num(k)}` : ` − ${num(k)}`
  return `y = ${lead}${body}${tail}`
}

function Slider({ label, tone, value, min, max, step, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-24 shrink-0 font-black text-lg tabular-nums rounded-lg px-2 py-1 text-center text-white"
        style={{ backgroundColor: tone }}>
        {label} = {signed(value)}
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 h-2 cursor-pointer"
        style={{ accentColor: tone }}
      />
    </div>
  )
}

function ParabolaLab({ show, tone, aStart = 1, hStart = 0, kStart = 0 }) {
  const [a, setA] = useState(aStart)
  const [h, setH] = useState(hStart)
  const [k, setK] = useState(kStart)

  const f = (x) => a * (x - h) * (x - h) + k
  const moved = a !== 1 || h !== 0 || k !== 0

  return (
    <div className="w-full h-full flex flex-col select-none gap-3">
      <div className="flex-1 min-h-0">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
          <rect x="0" y="0" width={W} height={H} rx="14" fill="#ffffff" />
          <rect x="0.75" y="0.75" width={W - 1.5} height={H - 1.5} rx="13" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />

          {Array.from({ length: XMAX - XMIN + 1 }, (_, i) => XMIN + i).map((x) => (
            <line key={`v${x}`} x1={X(x)} y1={0} x2={X(x)} y2={H} stroke={GRID} strokeWidth="1" />
          ))}
          {Array.from({ length: 14 }, (_, i) => -5 + i).map((y) => (
            <line key={`hz${y}`} x1={0} y1={Y(y)} x2={W} y2={Y(y)} stroke={GRID} strokeWidth="1" />
          ))}
          <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} stroke={INK} strokeWidth="2.2" />
          <line x1={X(0)} y1={0} x2={X(0)} y2={H} stroke={INK} strokeWidth="2.2" />

          {AXIS_X.map((x) => (
            <text
              key={`tx${x}`}
              x={X(x)}
              y={Y(0) + 22}
              textAnchor="middle"
              fontSize="17"
              fill={INK}
              fontFamily="Inter, Segoe UI, system-ui, sans-serif">
              {x < 0 ? `−${-x}` : x}
            </text>
          ))}
          {AXIS_Y.map((y) => (
            <text
              key={`ty${y}`}
              x={X(0) - 10}
              y={Y(y) + 6}
              textAnchor="end"
              fontSize="17"
              fill={INK}
              fontFamily="Inter, Segoe UI, system-ui, sans-serif">
              {y < 0 ? `−${-y}` : y}
            </text>
          ))}

          {/* y = x², always there to be compared against */}
          <path d={pathFor((x) => x * x)} fill="none" stroke={GHOST} strokeWidth="3" strokeDasharray="9 7" strokeLinecap="round" />
          <path d={pathFor(f)} fill="none" stroke={tone} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />

          <circle cx={X(h)} cy={Y(k)} r="9" fill={tone} stroke="#ffffff" strokeWidth="3" />
          <text
            x={X(h) + 16}
            y={Y(k) + (a < 0 ? 30 : -14)}
            fontSize="21"
            fontWeight="800"
            fill={tone}
            stroke="#ffffff"
            strokeWidth="5"
            paintOrder="stroke"
            fontFamily="Inter, Segoe UI, system-ui, sans-serif">
            ({signed(h)}, {signed(k)})
          </text>
        </svg>
      </div>

      <div className="shrink-0 flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="flex-1 font-black text-2xl tabular-nums" style={{ color: tone }}>
            {equationOf(a, h, k)}
          </span>
          <button
            onClick={() => { setA(aStart); setH(hStart); setK(kStart) }}
            disabled={!moved}
            className="shrink-0 px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest text-white border-2 border-slate-400 bg-slate-400 disabled:opacity-40 active:scale-95 transition-all">
            Reset
          </button>
        </div>
        {show.includes('a') && <Slider label="a" tone={BLUE} value={a} min={-2} max={2} step={0.25} onChange={setA} />}
        {show.includes('h') && <Slider label="h" tone={GREEN} value={h} min={-5} max={5} step={0.5} onChange={setH} />}
        {show.includes('k') && <Slider label="k" tone={PURPLE} value={k} min={-4} max={6} step={0.5} onChange={setK} />}
      </div>
    </div>
  )
}

export const ParabolaK = () => <ParabolaLab show="k" tone={PURPLE} />
export const ParabolaA = () => <ParabolaLab show="a" tone={BLUE} />
export const ParabolaH = () => <ParabolaLab show="h" tone={GREEN} />
export const ParabolaFull = () => <ParabolaLab show="ahk" tone={KEY} />
