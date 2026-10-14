// content/y7-science/U03_4/widgets.jsx
// Widgets for 3.4 Tides. English and French only (the deck sets
// meta.vietnamese: false), so every string goes through t(lang, en, fr).
// Each one does a thing a still slide cannot:
//
//   CausewayClip  The road to Holy Island (Lindisfarne), England, as the tide
//                 comes in over it — a CC BY 3.0 time-lapse from Commons,
//                 cropped and saved in the unit as a silent loop, so it plays
//                 on school wifi or none. 23 s; the file does not record how
//                 many hours it covers, so nothing on the slide claims a span.
//
//   TideTurn      The book's p.99 figure, MOVING: the Earth (seen from above
//                 the North Pole) turns anticlockwise under the two bulges of
//                 water, and the harbour's depth is drawn as a graph as it
//                 goes. "+6 hours" moves one quarter-turn at a time, so the
//                 class says "high" or "low" BEFORE each press; "Play 24 hours"
//                 runs the whole day. It is the Activity's Part 2 done at the
//                 front, and it is what links the two-bulge picture to the
//                 real tide graph on slide 5. The Moon stays still here, as in
//                 the book's model; slide 23 deals with the Moon moving on.
//
// TideTurn's stage is one wide SVG with a white plate, so its text scales with
// the panel and reads on a light or dark slide; only the buttons are HTML.
// audit:svg never reads this file — its text was sized by hand against the
// French strings (the longer ones) and measured in the page.
import { useState, useEffect, useRef } from 'react'
import { Plus, Play, RotateCcw } from 'lucide-react'
import { tr } from '../../../src/lib/lang.js'
import causeway from './images/holyisland.webm'

const t = (lang, en, fr) => tr(lang, en, null, fr)

const INK = '#2b2b2b'
const KEY = '#c25e12'
const MUTED = '#5b6770'
const RULE = '#cfd8dc'
const SEA = '#4f8fbf'
const SEA_D = '#a9d2ef'
const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

function Btn({ onClick, disabled, tone = 'teal', icon: Icon, children }) {
  const tones = {
    teal: 'bg-[#0087a8] border-[#00697f]',
    orange: 'bg-[#c25e12] border-[#a04a0e]',
    slate: 'bg-slate-500 border-slate-700',
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-xl font-black uppercase tracking-wide text-white border-b-4 active:border-b-0 active:translate-y-1 transition-all px-4 py-2 text-sm lg:px-6 lg:py-2.5 lg:text-base disabled:opacity-35 disabled:pointer-events-none ${tones[tone]}`}
    >
      {Icon && <Icon className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={3} />}
      {children}
    </button>
  )
}

/* ============================================================= *
 * THE CAUSEWAY — a silent loop
 * ============================================================= */
// No Stage and no extra frame: `showcase` already wraps the media in a padded
// panel. The frame is sized from the HEIGHT it is given and centred.
export function CausewayClip({ lang = 'en' }) {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <div className="h-full max-w-full rounded-xl overflow-hidden bg-black" style={{ aspectRatio: '960 / 640' }}>
        <video
          className="w-full h-full object-contain"
          src={causeway}
          controls
          playsInline
          preload="metadata"
          autoPlay
          muted
          loop
          aria-label={t(lang, 'Time-lapse: the tide comes in over the road to Holy Island, England', 'Accéléré : la marée monte sur la route de Holy Island, en Angleterre')}
        />
      </div>
    </div>
  )
}

/* ============================================================= *
 * TIDE TURN — one day, two high tides
 * ============================================================= */
const EX = 230 // Earth centre
const EY = 236
const ER = 110 // Earth radius
const OA = 150 // ocean oval, along the Earth–Moon line
const OB = 118 // ocean oval, across it
const MX = 470 // Moon
// Graph: 0–24 h across, 0–6 m up.
const GX0 = 640
const GX1 = 1080
const GY0 = 380
const PXM = 40
const gx = (h) => GX0 + (h * (GX1 - GX0)) / 24
const gy = (m) => GY0 - m * PXM

// The ocean oval's radius at an angle from the Earth–Moon line, and the depth
// it gives at the coast: 5 m facing the Moon or facing away, 1 m side-on.
const ovalR = (a) => (OA * OB) / Math.sqrt((OB * Math.cos(a)) ** 2 + (OA * Math.sin(a)) ** 2)
const depthAt = (h) => {
  const a = (h / 24) * 2 * Math.PI // the harbour starts facing the Moon
  return 1 + ((ovalR(a) - OB) / (OA - OB)) * 4
}

// The anticlockwise arrow over the Earth: an arc at radius 140 from 30° above
// the Moon side round to the top-left, and a head pointing on round the circle.
const onCircle = (r, a) => [EX + r * Math.cos(a), EY + r * Math.sin(a)]
const SPIN_ARC = (() => {
  const [x1, y1] = onCircle(140, -0.5)
  const [x2, y2] = onCircle(140, -1.85)
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A 140 140 0 0 0 ${x2.toFixed(1)} ${y2.toFixed(1)}`
})()
const SPIN_HEAD = (() => {
  const [tx, ty] = onCircle(140, -2.12) // tip, further round
  const [bx, by] = onCircle(140, -1.85) // middle of the base
  const nx = Math.cos(-1.85), ny = Math.sin(-1.85) // outward normal at the base
  return `M ${tx.toFixed(1)} ${ty.toFixed(1)} L ${(bx + 11 * nx).toFixed(1)} ${(by + 11 * ny).toFixed(1)} L ${(bx - 11 * nx).toFixed(1)} ${(by - 11 * ny).toFixed(1)} Z`
})()

// Simple continents for the turning Earth (unit circle coordinates).
const LAND = [
  'M -0.18 -0.2 C 0.05 -0.38 0.3 -0.22 0.22 0.02 C 0.16 0.22 -0.08 0.3 -0.22 0.14 C -0.34 0.02 -0.3 -0.1 -0.18 -0.2 Z',
  'M 0.38 -0.62 C 0.58 -0.6 0.78 -0.36 0.72 -0.12 C 0.6 -0.02 0.46 -0.2 0.38 -0.36 C 0.32 -0.48 0.3 -0.58 0.38 -0.62 Z',
  'M -0.7 -0.42 C -0.52 -0.62 -0.3 -0.68 -0.22 -0.52 C -0.3 -0.42 -0.5 -0.3 -0.62 -0.18 C -0.72 -0.22 -0.76 -0.34 -0.7 -0.42 Z',
  'M -0.4 0.5 C -0.2 0.42 0.04 0.52 0.1 0.7 C -0.06 0.8 -0.3 0.78 -0.44 0.66 C -0.5 0.6 -0.48 0.54 -0.4 0.5 Z',
  'M 0.62 -0.1 C 0.78 -0.06 0.86 0.1 0.8 0.3 C 0.7 0.36 0.6 0.2 0.62 -0.1 Z',
]

function status(h, lang) {
  const q = Math.round(h * 1000) / 1000
  if (Math.abs(q % 12) < 1e-6) return { text: t(lang, 'high tide', 'marée haute (high tide)'), colour: KEY }
  if (Math.abs((q % 12) - 6) < 1e-6) return { text: t(lang, 'low tide', 'marée basse (low tide)'), colour: KEY }
  return (q % 12) < 6
    ? { text: t(lang, 'the tide goes out', 'la mer descend (goes out)'), colour: MUTED }
    : { text: t(lang, 'the tide comes in', 'la mer monte (comes in)'), colour: MUTED }
}

export function TideTurn({ lang = 'en' }) {
  const [h, setH] = useState(0)
  const [running, setRunning] = useState(false)
  const raf = useRef(0)

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  // Move from `from` to `to` hours in `secs` seconds of real time.
  const go = (from, to, secs) => {
    cancelAnimationFrame(raf.current)
    const t0 = performance.now()
    const tick = (now) => {
      const k = Math.min(1, (now - t0) / (secs * 1000))
      const next = from + (to - from) * k
      setH(next)
      if (k < 1) raf.current = requestAnimationFrame(tick)
      else { setH(to); setRunning(false) }
    }
    setRunning(true)
    raf.current = requestAnimationFrame(tick)
  }
  const step = () => go(h, Math.min(24, Math.round(h / 6) * 6 + 6), 1.6)
  const play = () => (h >= 24 ? go(0, 24, 8) : go(h, 24, (8 * (24 - h)) / 24))
  const reset = () => { cancelAnimationFrame(raf.current); setRunning(false); setH(0) }

  const pts = []
  for (let s = 0; s <= h + 1e-9; s += 0.25) pts.push(`${gx(s).toFixed(1)},${gy(depthAt(s)).toFixed(1)}`)
  pts.push(`${gx(h).toFixed(1)},${gy(depthAt(h)).toFixed(1)}`)
  const st = status(h, lang)
  const hours = Math.round(h)
  const hoursText = t(lang, `${hours} ${hours === 1 ? 'hour' : 'hours'}`, `${hours} ${hours <= 1 ? 'heure' : 'heures'}`)

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1120 440" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1120" height="440" rx="14" fill="#ffffff" />
          <defs>
            <clipPath id="u34-turn-earth"><circle cx={EX} cy={EY} r={ER} /></clipPath>
          </defs>

          {/* ── The Earth, the water and the Moon ── */}
          <text x="28" y="40" fontFamily={FONT} fontSize="20" fill={MUTED}>{t(lang, 'The Earth from above the North Pole', 'La Terre vue du dessus du pôle Nord')}</text>
          <ellipse cx={EX} cy={EY} rx={OA} ry={OB} fill={SEA_D} stroke={SEA} strokeWidth="3" />
          <g transform={`rotate(${(-15 * h).toFixed(2)} ${EX} ${EY})`}>
            <circle cx={EX} cy={EY} r={ER} fill="#cfe5f5" />
            <g clipPath="url(#u34-turn-earth)">
              <g transform={`translate(${EX} ${EY}) scale(${ER})`}>
                {LAND.map((d, i) => <path key={i} d={d} fill="#bfe0ad" stroke="#4a8b23" strokeWidth="2" vectorEffect="non-scaling-stroke" />)}
              </g>
            </g>
            <circle cx={EX} cy={EY} r={ER} fill="none" stroke={SEA} strokeWidth="3" />
            <circle cx={EX + ER} cy={EY} r="12" fill="#c8102e" stroke="#ffffff" strokeWidth="3" />
          </g>
          <circle cx={EX} cy={EY} r="4" fill={INK} />
          {/* the way it turns: anticlockwise */}
          <path d={SPIN_ARC} fill="none" stroke={MUTED} strokeWidth="4" strokeLinecap="round" />
          <path d={SPIN_HEAD} fill={MUTED} />

          <circle cx={MX} cy={EY} r="28" fill="#cfd2d6" stroke={INK} strokeWidth="2.5" />
          <text x={MX} y={EY + 62} fontFamily={FONT} fontSize="22" fontWeight="bold" fill={INK} textAnchor="middle">{t(lang, 'Moon', 'Lune')}</text>

          <circle cx="40" cy="404" r="10" fill="#c8102e" stroke="#ffffff" strokeWidth="3" />
          <text x="58" y="411" fontFamily={FONT} fontSize="22" fontWeight="bold" fill={INK}>{t(lang, 'a harbour', 'un port')}</text>

          {/* ── The read-out ── */}
          <text x={GX0} y="58" fontFamily={FONT} fontSize="34" fontWeight="bold" fill={INK}>{hoursText}</text>
          <text x={GX0} y="98" fontFamily={FONT} fontSize="28" fontWeight="bold" fill={st.colour}>{st.text}</text>

          {/* ── The graph: depth at the harbour ── */}
          {[0, 6, 12, 18, 24].map((x) => (
            <g key={x}>
              <line x1={gx(x)} y1={GY0} x2={gx(x)} y2={GY0 + 8} stroke={INK} strokeWidth="2" />
              <text x={gx(x)} y={GY0 + 32} fontFamily={FONT} fontSize="20" fill={MUTED} textAnchor="middle">{x} h</text>
            </g>
          ))}
          <line x1={GX0} y1={gy(5)} x2={GX1} y2={gy(5)} stroke={RULE} strokeWidth="2" strokeDasharray="8 7" />
          <line x1={GX0} y1={gy(1)} x2={GX1} y2={gy(1)} stroke={RULE} strokeWidth="2" strokeDasharray="8 7" />
          <text x={GX0 - 10} y={gy(5) + 7} fontFamily={FONT} fontSize="20" fontWeight="bold" fill={KEY} textAnchor="end">{t(lang, 'high', 'haute')}</text>
          <text x={GX0 - 10} y={gy(1) + 7} fontFamily={FONT} fontSize="20" fontWeight="bold" fill={KEY} textAnchor="end">{t(lang, 'low', 'basse')}</text>
          <line x1={GX0} y1={GY0} x2={GX1} y2={GY0} stroke={INK} strokeWidth="2.5" />
          <line x1={GX0} y1={GY0} x2={GX0} y2={gy(6)} stroke={INK} strokeWidth="2.5" />
          <text x={GX1} y={gy(6) - 6} fontFamily={FONT} fontSize="18" fill={MUTED} textAnchor="end">{t(lang, 'depth at the harbour', 'profondeur au port')}</text>
          <polyline points={pts.join(' ')} fill="none" stroke={SEA} strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx={gx(h)} cy={gy(depthAt(h))} r="9" fill="#c8102e" stroke="#ffffff" strokeWidth="3" />
        </svg>
      </div>

      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn tone="orange" icon={Plus} disabled={running || h >= 24} onClick={step}>{t(lang, '6 hours', '6 heures')}</Btn>
        <Btn tone="teal" icon={Play} disabled={running} onClick={play}>{t(lang, 'Play 24 hours', 'Jouer 24 heures')}</Btn>
        <Btn tone="slate" icon={RotateCcw} disabled={running || h === 0} onClick={reset}>{t(lang, 'Reset', 'Remettre')}</Btn>
      </div>
    </div>
  )
}
