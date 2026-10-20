// content/y7-science/U03_models/dating.jsx
// Models of TIME: half-life, from Mr Bowen's coffee to Mr Bowen himself.
//
//   CoffeeClock   Mr Bowen's 7 a.m. coffee: 100 mg of caffeine, half gone
//                 every 5 hours. One press = 5 hours. The mug empties by half
//                 each time and the graph grows a point. The class says the
//                 next number before it is pressed. HALF-LIFE, met on
//                 something they drink, before anything radioactive.
//
//   CarbonClock   The story. Alive, Mr Bowen's carbon-14 breaks down and is
//                 topped up from his food and drink, so it stays at 100%.
//                 Then one morning he misses his coffee, does not survive, and
//                 is frozen in a glacier. The top-ups stop; his carbon-14
//                 keeps breaking down — half every 5 700 years. The model
//                 shows 144 of his carbon-14 atoms (each with its own random
//                 moment to break down), the graph, and the year. "Be the
//                 scientist" hands the class real samples to date from the
//                 graph: Ötzi, the Lascaux charcoal, a mammoth, a dinosaur.
//
//   CoinDecay     The class ARE the atoms: everyone stands, everyone flips a
//                 coin each round, tails sits down. Mr Bowen enters how many
//                 are left; the graph puts the class beside the prediction,
//                 and beside 1 000 and 1 000 000 computer atoms — random for
//                 one, predictable for a crowd.
import { useState, useRef, useEffect, useMemo } from 'react'
import { Plus, Minus, Undo2, RotateCcw, Play, Pause, Coffee, Snowflake, Search, Eye, ChevronRight, Shuffle, Users, Coins } from 'lucide-react'
import { tr } from '../../../src/lib/lang.js'
import { mulberry32, fmt } from './data.js'
import { Btn } from './ui.jsx'

const t = (lang, en, fr) => tr(lang, en, null, fr)
const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"
const INK = '#2b2b2b', KEY = '#c25e12', MUTED = '#5b6770', RULE = '#d5dbe1', TEAL = '#0087a8', BLUE = '#1a5fa8'
const C14 = '#e07a1f', N14 = '#7f9bb8'

/* ============================================================= *
 * 1 · MR BOWEN'S COFFEE
 * ============================================================= */
const DOSE = 100 // mg in a cup of coffee
const HALF_H = 5 // hours, a typical adult
const TIMES = [
  ['7:00 a.m.', '7 h 00'], ['12:00 noon', '12 h 00'], ['5:00 p.m.', '17 h 00'],
  ['10:00 p.m.', '22 h 00'], ['3:00 a.m.', '3 h 00'], ['8:00 a.m.', '8 h 00'],
]
const NOTES = [
  ['Coffee time!', 'L’heure du café !'],
  ['Lunch', 'Le déjeuner'],
  ['Home time', 'Fin des cours'],
  ['Bedtime — still keeping him awake', 'Au lit — ça le tient encore éveillé'],
  ['Middle of the night', 'Au milieu de la nuit'],
  ['Next morning: time for another coffee', 'Le lendemain : l’heure d’un autre café'],
]
const mg = (k) => DOSE / 2 ** k
const cgx = (h) => 690 + (h / 25) * 760
const cgy = (m) => 410 - (m / 100) * 320
const COFFEE_CURVE = (() => {
  const pts = []
  for (let h = 0; h <= 25.01; h += 0.25) pts.push(`${cgx(h).toFixed(1)},${cgy(DOSE * 0.5 ** (h / HALF_H)).toFixed(1)}`)
  return pts.join(' ')
})()
const mgText = (v) => (v >= 10 ? fmt(v, v % 1 ? 1 : 0) : v.toFixed(v >= 1 ? 2 : 2).replace(/0$/, ''))

export function CoffeeClock({ lang = 'en' }) {
  const [k, setK] = useState(0)
  const L = (p) => (lang === 'fr' ? p[1] : p[0])
  const level = mg(k) / DOSE
  const gx = cgx, gy = cgy

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1500 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1500" height="500" rx="16" fill="#ffffff" />
          {/* time and amount */}
          <text x="40" y="70" fontFamily={FONT} fontSize="30" fontWeight="700" fill={MUTED}>{t(lang, 'Time', 'Heure')}</text>
          <text x="40" y="130" fontFamily={FONT} fontSize="58" fontWeight="900" fill={INK}>{L(TIMES[k])}</text>
          <text x="40" y="170" fontFamily={FONT} fontSize="24" fill={MUTED}>{L(NOTES[k])}</text>
          <text x="40" y="250" fontFamily={FONT} fontSize="30" fontWeight="700" fill={MUTED}>{t(lang, 'Caffeine in Mr Bowen', 'Caféine dans M. Bowen')}</text>
          <text x="40" y="330" fontFamily={FONT} fontSize="84" fontWeight="900" fill={KEY}>{mgText(mg(k))} mg</text>
          {k > 0 && (
            <text x="40" y="380" fontFamily={FONT} fontSize="26" fontWeight="700" fill={INK}>
              {t(lang, `= 100 mg halved ${k} ${k === 1 ? 'time' : 'times'}`, `= 100 mg divisé par 2, ${k} fois`)}
            </text>
          )}

          {/* the mug */}
          <g transform="translate(470 175) scale(0.82)">
            <path d="M 0 0 L 12 200 Q 14 220 34 220 L 136 220 Q 156 220 158 200 L 170 0 Z" fill="#f4efe9" stroke={INK} strokeWidth="4" />
            <clipPath id="mug-in"><path d="M 6 6 L 17 198 Q 19 214 34 214 L 136 214 Q 151 214 153 198 L 164 6 Z" /></clipPath>
            <g clipPath="url(#mug-in)">
              <rect x="0" y="0" width="170" height="220" fill="#6b3d1f"
                style={{ transform: `scaleY(${level})`, transformOrigin: '0px 216px', transition: 'transform 0.9s cubic-bezier(.4,0,.2,1)' }} />
            </g>
            <path d="M 166 50 q 50 0 46 55 q -4 50 -54 50" fill="none" stroke={INK} strokeWidth="10" strokeLinecap="round" />
            {k === 0 && [30, 75, 120].map((x, i) => (
              <path key={i} d={`M ${x} -14 q -12 -18 0 -36 q 12 -18 0 -36`} fill="none" stroke="#aab4be" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            ))}
          </g>

          {/* the graph */}
          <line x1={gx(0)} y1={gy(0)} x2={gx(25)} y2={gy(0)} stroke={INK} strokeWidth="2.5" />
          <line x1={gx(0)} y1={gy(0)} x2={gx(0)} y2={gy(105)} stroke={INK} strokeWidth="2.5" />
          {[0, 25, 50, 75, 100].map((m) => (
            <g key={m}>
              <line x1={gx(0) - 6} y1={gy(m)} x2={gx(25)} y2={gy(m)} stroke={m ? '#eef1f4' : INK} strokeWidth="1.5" />
              <text x={gx(0) - 12} y={gy(m) + 7} fontFamily={FONT} fontSize="20" fill={MUTED} textAnchor="end">{m}</text>
            </g>
          ))}
          {[0, 5, 10, 15, 20, 25].map((h) => (
            <g key={h}>
              <line x1={gx(h)} y1={gy(0)} x2={gx(h)} y2={gy(0) + 7} stroke={INK} strokeWidth="2" />
              <text x={gx(h)} y={gy(0) + 32} fontFamily={FONT} fontSize="20" fill={MUTED} textAnchor="middle">{h} h</text>
            </g>
          ))}
          <text x={gx(0) - 50} y={gy(105) - 14} fontFamily={FONT} fontSize="20" fontWeight="700" fill={MUTED}>{t(lang, 'mg of caffeine', 'mg de caféine')}</text>
          <text x={gx(25)} y={gy(0) + 64} fontFamily={FONT} fontSize="20" fontWeight="700" fill={MUTED} textAnchor="end">{t(lang, 'hours after the coffee', 'heures après le café')}</text>
          {k >= 2 && <polyline points={COFFEE_CURVE} fill="none" stroke={KEY} strokeWidth="2.5" strokeDasharray="7 7" opacity="0.55" />}
          {Array.from({ length: k + 1 }, (_, i) => (
            <g key={i}>
              <line x1={gx(i * HALF_H)} y1={gy(0)} x2={gx(i * HALF_H)} y2={gy(mg(i))} stroke={KEY} strokeWidth="2" strokeDasharray="4 5" opacity="0.5" />
              <circle cx={gx(i * HALF_H)} cy={gy(mg(i))} r={i === k ? 11 : 8} fill={KEY} stroke="#ffffff" strokeWidth="3" />
              <text x={gx(i * HALF_H) + 14} y={gy(mg(i)) - 12} fontFamily={FONT} fontSize="21" fontWeight="800" fill={KEY}>{mgText(mg(i))}</text>
            </g>
          ))}
          {k >= 1 && (
            <g>
              <rect x={gx(12)} y="88" width="380" height="54" rx="12" fill="#fdf1e3" stroke={KEY} strokeWidth="2" />
              <text x={gx(12) + 190} y="124" fontFamily={FONT} fontSize="25" fontWeight="900" fill={KEY} textAnchor="middle">
                {t(lang, 'Half gone every 5 hours', 'La moitié part toutes les 5 h')}
              </text>
            </g>
          )}
        </svg>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn tone="slate" icon={Undo2} disabled={k === 0} onClick={() => setK((v) => Math.max(0, v - 1))}>{t(lang, 'Back', 'Retour')}</Btn>
        <Btn tone="orange" icon={ChevronRight} disabled={k === TIMES.length - 1} onClick={() => setK((v) => Math.min(TIMES.length - 1, v + 1))}>{t(lang, '5 hours later', '5 heures plus tard')}</Btn>
        <Btn tone="teal" icon={RotateCcw} disabled={k === 0} onClick={() => setK(0)}>{t(lang, 'Start again', 'Recommencer')}</Btn>
      </div>
    </div>
  )
}

/* ============================================================= *
 * 2 · MR BOWEN'S CARBON CLOCK
 * ============================================================= */
const HALF = 5700 // years: carbon-14's half-life
const N_ATOMS = 144
const T_MAX = 40_000
const YEARS_PER_SEC = 1425 // one half-life every 4 seconds
const NOW_YEAR = 2026

// Real samples for "Be the scientist". `pct` is the carbon-14 left compared
// with a living thing; the age follows from it. Ötzi: radiocarbon age about
// 5 300 years; Lascaux's charcoal about 17 000; mammoths on the mainland died
// out about 10 000 years ago.
const SAMPLES = [
  { pct: 50, en: 'A wooden bowl', fr: 'Un bol en bois', icon: 'bowl' },
  { pct: 52.5, en: 'Ötzi the Iceman (found in 1991)', fr: 'Ötzi, l’homme des glaces (trouvé en 1991)', icon: 'otzi' },
  { pct: 25, en: 'Mr Bowen, found in the ice', fr: 'M. Bowen, retrouvé dans la glace', icon: 'bowen' },
  { pct: 12.5, en: 'Charcoal from the Lascaux cave paintings', fr: 'Du charbon des peintures de Lascaux', icon: 'cave' },
  { pct: 30, en: 'A woolly mammoth tooth', fr: 'Une dent de mammouth laineux', icon: 'mammoth' },
  { pct: 0, en: 'A dinosaur bone', fr: 'Un os de dinosaure', icon: 'dino' },
]
const G = { x0: 1000, x1: 1560, y0: 560, y1: 110 }
const gx = (y) => G.x0 + (y / T_MAX) * (G.x1 - G.x0)
const gy = (p) => G.y0 - (p / 100) * (G.y0 - G.y1)
const C14_CURVE = (() => {
  const pts = []
  for (let y = 0; y <= T_MAX; y += 250) pts.push(`${gx(y).toFixed(1)},${gy(100 * 0.5 ** (y / HALF)).toFixed(1)}`)
  return pts.join(' ')
})()
const ageOf = (pct) => (pct <= 0 ? Infinity : (HALF * Math.log(100 / pct)) / Math.log(2))
const roundAge = (y) => Math.round(y / 100) * 100

function makeAtoms(seed) {
  const rnd = mulberry32(seed)
  return Array.from({ length: N_ATOMS }, (_, i) => ({
    // each atom's own random moment to break down (an exponential wait)
    life: (-HALF / Math.LN2) * Math.log(1 - rnd()),
    col: i % 12, row: Math.floor(i / 12),
    alivePeriod: 4 + rnd() * 9, alivePhase: rnd() * 13,
  }))
}

function MrBowen({ x, y, frozen, scale = 1 }) {
  // A friendly cartoon: glasses, a tie, a mug. Frozen: eyes shut, frosty.
  const skin = frozen ? '#cfe0ec' : '#f2c9a5'
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-46" y="70" width="92" height="120" rx="26" fill={frozen ? '#9db8cf' : '#1a5fa8'} />
      <path d="M 0 74 l -9 14 9 58 9 -58 z" fill={frozen ? '#c8d8e6' : '#c25e12'} />
      <rect x="-46" y="180" width="38" height="88" rx="14" fill={frozen ? '#7b93a8' : '#2b3a4a'} />
      <rect x="8" y="180" width="38" height="88" rx="14" fill={frozen ? '#7b93a8' : '#2b3a4a'} />
      <circle cx="0" cy="30" r="42" fill={skin} stroke={INK} strokeWidth="3" />
      <path d="M -42 22 q 4 -46 44 -46 q 40 0 42 44 q -18 -22 -44 -20 q -26 -2 -42 22 z" fill={frozen ? '#a9bfd1' : '#4a3426'} />
      <circle cx="-15" cy="30" r="11" fill="none" stroke={INK} strokeWidth="3" />
      <circle cx="15" cy="30" r="11" fill="none" stroke={INK} strokeWidth="3" />
      <line x1="-4" y1="30" x2="4" y2="30" stroke={INK} strokeWidth="3" />
      {frozen ? (
        <>
          <path d="M -21 31 q 6 4 12 0 M 9 31 q 6 4 12 0" stroke={INK} strokeWidth="2.5" fill="none" />
          <path d="M -9 54 q 9 -5 18 0" stroke={INK} strokeWidth="3" fill="none" />
        </>
      ) : (
        <>
          <circle cx="-15" cy="31" r="3.5" fill={INK} />
          <circle cx="15" cy="31" r="3.5" fill={INK} />
          <path d="M -12 52 q 12 10 24 0" stroke={INK} strokeWidth="3" fill="none" />
        </>
      )}
    </g>
  )
}

function SampleIcon({ kind, x, y }) {
  const s = { stroke: INK, strokeWidth: 2.5 }
  switch (kind) {
    case 'bowl': return <g transform={`translate(${x} ${y})`}><path d="M -26 -6 h 52 q -4 28 -26 28 q -22 0 -26 -28 z" fill="#b5835a" {...s} /><path d="M -14 4 q 14 6 28 0" fill="none" stroke="#7a5233" strokeWidth="2" /></g>
    case 'otzi': return <g transform={`translate(${x} ${y})`}><rect x="-28" y="-20" width="56" height="40" rx="10" fill="#cfe7f5" {...s} /><circle cx="0" cy="-4" r="9" fill="#b89a7e" /><rect x="-6" y="4" width="12" height="12" rx="3" fill="#8b6b4f" /></g>
    case 'bowen': return <g transform={`translate(${x} ${y})`}><rect x="-28" y="-20" width="56" height="40" rx="10" fill="#d7ecf8" {...s} /><circle cx="0" cy="-4" r="9" fill="#cfe0ec" stroke={INK} strokeWidth="1.5" /><circle cx="-4" cy="-4" r="3" fill="none" stroke={INK} strokeWidth="1.2" /><circle cx="4" cy="-4" r="3" fill="none" stroke={INK} strokeWidth="1.2" /><rect x="-7" y="5" width="14" height="11" rx="3" fill="#9db8cf" /></g>
    case 'cave': return <g transform={`translate(${x} ${y})`}><path d="M -28 18 q 0 -40 28 -40 q 28 0 28 40 z" fill="#e9d3b4" {...s} /><path d="M -14 4 q 6 -10 16 -6 q 6 -6 10 2 l -4 10 h -18 z" fill="#7a3e1c" /></g>
    case 'mammoth': return <g transform={`translate(${x} ${y})`}><path d="M -18 16 q -8 -30 14 -36 q 26 -4 28 22 q 0 14 -10 14 z" fill="#efe6d6" {...s} /><path d="M -10 -6 v 14 M 0 -10 v 18 M 10 -8 v 16" stroke="#b9ad98" strokeWidth="2" /></g>
    case 'dino': return <g transform={`translate(${x} ${y})`}><path d="M -26 6 q 10 -10 26 -6 q 16 -10 26 0 q -10 8 -26 4 q -14 10 -26 2 z" fill="#efe6d6" {...s} /><circle cx="-24" cy="4" r="6" fill="#efe6d6" {...s} /><circle cx="24" cy="2" r="6" fill="#efe6d6" {...s} /></g>
    default: return null
  }
}

export function CarbonClock({ lang = 'en', isDisplayMode = false }) {
  const [phase, setPhase] = useState('alive') // 'alive' | 'dead' | 'mystery'
  const [years, setYears] = useState(0) // years since he died
  const [playing, setPlaying] = useState(false)
  const [stopEach, setStopEach] = useState(true)
  const [seed, setSeed] = useState(7)
  const [aliveClock, setAliveClock] = useState(0)
  const [mystery, setMystery] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const atoms = useMemo(() => makeAtoms(seed), [seed])
  const raf = useRef(0)
  const state = useRef({ years: 0, playing: false, stopEach: true, phase: 'alive', alive: 0 })
  useEffect(() => { Object.assign(state.current, { years, playing, stopEach, phase }) })

  // one loop: the life animation while alive, the clock once he has died
  useEffect(() => {
    let last = performance.now()
    const tick = (now) => {
      raf.current = requestAnimationFrame(tick)
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const S = state.current
      if (S.phase === 'alive') {
        S.alive += dt
        setAliveClock(S.alive)
      } else if (S.phase === 'dead' && S.playing) {
        let y = S.years + YEARS_PER_SEC * dt
        const nextStop = (Math.floor(S.years / HALF + 1e-9) + 1) * HALF
        if (S.stopEach && y >= nextStop && S.years < nextStop) { y = nextStop; S.playing = false; setPlaying(false) }
        if (y >= T_MAX) { y = T_MAX; S.playing = false; setPlaying(false) }
        S.years = y
        setYears(y)
      }
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  const L = (p) => (lang === 'fr' ? p[1] : p[0])
  const dead = phase !== 'alive'
  const isMystery = phase === 'mystery'
  const sample = SAMPLES[mystery]

  // atom states
  const decayed = (a) => phase === 'dead' && a.life <= years
  const flicker = (a) => {
    if (phase !== 'alive') return 0
    const local = (aliveClock + a.alivePhase) % a.alivePeriod
    return local < 0.7 ? 1 - local / 0.7 : 0 // 1 = just broke down and replaced
  }
  const left = phase === 'dead' ? atoms.filter((a) => a.life > years).length : N_ATOMS
  const livePct = (left / N_ATOMS) * 100
  const theory = 100 * 0.5 ** (years / HALF)

  // the sample measured at each half-life passed so far
  const measured = []
  if (phase === 'dead') {
    for (let k = 0; k * HALF <= years + 1e-6; k++) {
      measured.push({ y: k * HALF, p: (atoms.filter((a) => a.life > k * HALF).length / N_ATOMS) * 100 })
    }
  }

  const start = () => { setPhase('dead'); setYears(0); state.current.years = 0; setPlaying(true) }
  const reset = () => { setPhase('alive'); setYears(0); setPlaying(false); setRevealed(false); setSeed((s) => s + 1) }
  const newMystery = (i) => { setPhase('mystery'); setPlaying(false); setMystery(i); setRevealed(false) }

  const big = isDisplayMode
  const atomR = 15
  const ax = (a) => 560 + a.col * 34
  const ay = (a) => 190 + a.row * 34
  const mAge = ageOf(sample.pct)

  return (
    <div className="w-full h-full flex flex-col gap-2 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1600 640" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1600" height="640" rx="16" fill="#ffffff" />

          {/* ── left: the scene ── */}
          {!isMystery && (
            <g>
              <text x="40" y="58" fontFamily={FONT} fontSize="28" fontWeight="900" fill={dead ? BLUE : '#4a8b23'}>
                {dead ? t(lang, 'DEAD: no more top-ups', 'MORT : plus de recharge') : t(lang, 'ALIVE: eating, drinking, breathing', 'VIVANT : il mange, boit, respire')}
              </text>
              {dead ? (
                <g>
                  {/* the glacier */}
                  <rect x="70" y="120" width="360" height="430" rx="34" fill="#dff1fb" stroke="#8fc1df" strokeWidth="4" />
                  <path d="M 90 150 l 60 -14 M 360 520 l 50 -22 M 100 480 l 30 30" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
                  <MrBowen x={250} y={190} frozen scale={1.05} />
                  <rect x="70" y="120" width="360" height="430" rx="34" fill="#cbe8f8" opacity="0.35" />
                  {/* the empty cup */}
                  <g transform="translate(372 515)">
                    <path d="M -22 -26 h 44 l -5 32 q -1 6 -7 6 h -20 q -6 0 -7 -6 z" fill="#ffffff" stroke={INK} strokeWidth="3" />
                    <text x="0" y="-36" fontFamily={FONT} fontSize="18" fontWeight="800" fill={KEY} textAnchor="middle">0 mg</text>
                  </g>
                  <text x="250" y="590" fontFamily={FONT} fontSize="22" fill={MUTED} textAnchor="middle">{t(lang, 'Frozen in a glacier', 'Pris dans un glacier')}</text>
                </g>
              ) : (
                <g>
                  <MrBowen x={250} y={200} />
                  {/* food and drink coming in */}
                  <g transform="translate(110 470)">
                    <path d="M -22 -26 h 44 l -5 32 q -1 6 -7 6 h -20 q -6 0 -7 -6 z" fill="#ffffff" stroke={INK} strokeWidth="3" />
                    <rect x="-18" y="-22" width="36" height="10" fill="#6b3d1f" />
                    <path d="M 22 -16 q 14 0 12 12 q -2 10 -14 10" fill="none" stroke={INK} strokeWidth="3" />
                  </g>
                  <g transform="translate(390 470)">
                    <circle r="26" fill="#f5e6c8" stroke={INK} strokeWidth="3" />
                    <circle cx="-8" cy="-6" r="7" fill="#7cb342" /><circle cx="8" cy="4" r="8" fill="#e5733a" />
                  </g>
                  <text x="250" y="560" fontFamily={FONT} fontSize="22" fill={MUTED} textAnchor="middle">{t(lang, 'Food and drink bring in new carbon-14', 'La nourriture et les boissons apportent du carbone 14')}</text>
                  <path d="M 140 450 q 60 -40 90 -110" fill="none" stroke={C14} strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arr)" />
                  <path d="M 360 450 q -50 -40 -80 -110" fill="none" stroke={C14} strokeWidth="3" strokeDasharray="6 6" markerEnd="url(#arr)" />
                </g>
              )}
              <defs>
                <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={C14} />
                </marker>
              </defs>
            </g>
          )}

          {/* ── middle: his carbon-14 atoms ── */}
          {!isMystery && (
            <g>
              <text x="560" y="58" fontFamily={FONT} fontSize="24" fontWeight="900" fill={INK}>{t(lang, 'Some of his carbon-14 atoms', 'Quelques-uns de ses atomes de carbone 14')}</text>
              <text x="560" y="90" fontFamily={FONT} fontSize="19" fill={MUTED}>{t(lang, 'zoomed in a LOT', 'TRÈS agrandis')}</text>
              {atoms.map((a, i) => {
                const gone = decayed(a)
                const f = flicker(a)
                const x = ax(a), y = ay(a)
                if (gone) {
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r={atomR - 2} fill="#eef3f8" stroke={N14} strokeWidth="2" strokeDasharray="3 3" />
                      <text x={x} y={y + 6} fontFamily={FONT} fontSize="15" fontWeight="800" fill={N14} textAnchor="middle">N</text>
                    </g>
                  )
                }
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r={atomR} fill={f > 0.5 ? N14 : C14} opacity={f > 0 && f <= 0.5 ? 0.4 + f : 1} />
                    {f > 0 && <circle cx={x} cy={y} r={atomR + 6 * f} fill="none" stroke="#4a8b23" strokeWidth="3" opacity={f} />}
                  </g>
                )
              })}
              <g>
                <circle cx="557" cy="598" r="10" fill={C14} />
                <text x="574" y="605" fontFamily={FONT} fontSize="18" fill={INK}>{t(lang, 'carbon-14', 'carbone 14')}</text>
                <circle cx="557" cy="626" r="10" fill="#eef3f8" stroke={N14} strokeWidth="2" strokeDasharray="3 3" />
                <text x="574" y="633" fontFamily={FONT} fontSize="18" fill={INK}>{t(lang, 'broken down: now nitrogen', 'désintégré : devenu azote')}</text>
              </g>
            </g>
          )}

          {/* ── mystery: the sample ── */}
          {isMystery && (
            <g>
              <text x="40" y="58" fontFamily={FONT} fontSize="28" fontWeight="900" fill={TEAL}>{t(lang, 'BE THE SCIENTIST', 'À TOI D’ÊTRE SCIENTIFIQUE')}</text>
              {SAMPLES.map((sm, i) => {
                const on = i === mystery
                const y = 92 + i * 84
                return (
                  <g key={i} onClick={() => newMystery(i)} style={{ cursor: 'pointer' }}>
                    <rect x="36" y={y} width="900" height="72" rx="14" fill={on ? '#e2f2f6' : '#f7fafc'} stroke={on ? TEAL : RULE} strokeWidth={on ? 3 : 2} />
                    <SampleIcon kind={sm.icon} x={84} y={y + 36} />
                    <text x="136" y={y + 45} fontFamily={FONT} fontSize="25" fontWeight={on ? 900 : 700} fill={INK}>{L([sm.en, sm.fr])}</text>
                    <text x="910" y={y + 45} fontFamily={FONT} fontSize="25" fontWeight="900" fill={C14} textAnchor="end">
                      {fmt(sm.pct, sm.pct % 1 ? 1 : 0)}% {t(lang, 'left', 'restant')}
                    </text>
                  </g>
                )
              })}
            </g>
          )}

          {/* ── right: the graph ── */}
          <g>
            <text x={G.x0 - 60} y="58" fontFamily={FONT} fontSize="24" fontWeight="900" fill={INK}>{t(lang, 'Carbon-14 left', 'Carbone 14 restant')}</text>
            <text x={G.x0 - 60} y="86" fontFamily={FONT} fontSize="18" fill={MUTED}>{t(lang, 'compared with a living person', 'comparé à une personne vivante')}</text>
            {[0, 12.5, 25, 50, 75, 100].map((p) => (
              <g key={p}>
                <line x1={G.x0} y1={gy(p)} x2={G.x1} y2={gy(p)} stroke={p === 0 ? INK : '#edf0f3'} strokeWidth={p === 0 ? 2.5 : 1.5} />
                <text x={G.x0 - 10} y={gy(p) + 6} fontFamily={FONT} fontSize="17" fill={MUTED} textAnchor="end">{p}%</text>
              </g>
            ))}
            <line x1={G.x0} y1={G.y0} x2={G.x0} y2={G.y1 - 10} stroke={INK} strokeWidth="2.5" />
            {[1, 2, 3, 4, 5, 6, 7].map((k) => (
              <g key={k}>
                <line x1={gx(k * HALF)} y1={G.y0} x2={gx(k * HALF)} y2={G.y1} stroke="#edf0f3" strokeWidth="1.5" />
                <line x1={gx(k * HALF)} y1={G.y0} x2={gx(k * HALF)} y2={G.y0 + 7} stroke={INK} strokeWidth="2" />
                <text x={gx(k * HALF)} y={G.y0 + 26} fontFamily={FONT} fontSize="15" fill={MUTED} textAnchor="middle">{fmt(k * HALF)}</text>
              </g>
            ))}
            <text x={G.x0} y={G.y0 + 26} fontFamily={FONT} fontSize="15" fill={MUTED} textAnchor="middle">0</text>
            <text x={G.x1} y={G.y0 + 56} fontFamily={FONT} fontSize="18" fontWeight="700" fill={MUTED} textAnchor="end">{t(lang, 'years since death', 'années depuis la mort')}</text>
            <polyline points={C14_CURVE} fill="none" stroke={C14} strokeWidth="3" opacity={dead ? 0.85 : 0.3} strokeDasharray={isMystery ? '0' : '8 6'} />
            <text x={gx(HALF) + 8} y={gy(50) - 10} fontFamily={FONT} fontSize="16" fontWeight="800" fill={KEY}>{t(lang, '1 half-life', '1 demi-vie')}</text>
            {phase === 'dead' && measured.map((m, i) => (
              <circle key={i} cx={gx(m.y)} cy={gy(m.p)} r="8" fill={BLUE} stroke="#ffffff" strokeWidth="2.5" />
            ))}
            {phase === 'dead' && (
              <g>
                <line x1={gx(years)} y1={G.y0} x2={gx(years)} y2={gy(livePct)} stroke={BLUE} strokeWidth="2" strokeDasharray="4 4" />
                <circle cx={gx(years)} cy={gy(livePct)} r="11" fill={C14} stroke="#ffffff" strokeWidth="3" />
              </g>
            )}
            {isMystery && (
              <g>
                <line x1={G.x0} y1={gy(sample.pct)} x2={revealed && Number.isFinite(mAge) ? gx(Math.min(mAge, T_MAX)) : G.x1} y2={gy(sample.pct)} stroke={TEAL} strokeWidth="3" strokeDasharray="10 6" />
                {revealed && Number.isFinite(mAge) && (
                  <g>
                    <line x1={gx(mAge)} y1={gy(sample.pct)} x2={gx(mAge)} y2={G.y0} stroke={TEAL} strokeWidth="3" strokeDasharray="10 6" />
                    <circle cx={gx(mAge)} cy={gy(sample.pct)} r="10" fill={TEAL} stroke="#ffffff" strokeWidth="3" />
                  </g>
                )}
              </g>
            )}
          </g>

          {/* ── the read-out under the graph ── */}
          {phase === 'dead' && (
            <g>
              <rect x={G.x0 - 60} y="596" width={G.x1 - G.x0 + 60} height="40" rx="10" fill="#fdf1e3" />
              <text x={G.x0 - 46} y="623" fontFamily={FONT} fontSize="21" fontWeight="800" fill={INK}>
                {t(lang, `${fmt(Math.round(years))} years · year ${fmt(NOW_YEAR + Math.round(years))}`, `${fmt(Math.round(years))} ans · année ${fmt(NOW_YEAR + Math.round(years))}`)}
              </text>
              <text x={G.x1 - 10} y="623" fontFamily={FONT} fontSize="21" fontWeight="900" fill={C14} textAnchor="end">
                {left} / {N_ATOMS} = {Math.round(livePct)}%
                {years > 0 ? ` (${t(lang, 'expected', 'prévu')} ${Math.round(theory)}%)` : ''}
              </text>
            </g>
          )}
          {phase === 'alive' && (
            <g>
              <rect x={G.x0 - 60} y="596" width={G.x1 - G.x0 + 60} height="40" rx="10" fill="#eef6e6" />
              <text x={(G.x0 + G.x1) / 2 - 30} y="623" fontFamily={FONT} fontSize="20" fontWeight="800" fill="#3d731c" textAnchor="middle">
                {t(lang, 'Each atom that breaks down is replaced. It stays at 100%.', 'Chaque atome désintégré est remplacé. Ça reste à 100 %.')}
              </text>
            </g>
          )}
          {isMystery && (
            <g>
              <rect x={G.x0 - 60} y="596" width={G.x1 - G.x0 + 60} height="40" rx="10" fill={revealed ? '#e2f2f6' : '#f7fafc'} />
              <text x={(G.x0 + G.x1) / 2 - 30} y="623" fontFamily={FONT} fontSize="21" fontWeight="900" fill={revealed ? TEAL : MUTED} textAnchor="middle">
                {!revealed
                  ? t(lang, 'Read the graph: how old is it?', 'Lis le graphique : quel âge a-t-il ?')
                  : Number.isFinite(mAge)
                    ? t(lang, `About ${fmt(roundAge(mAge))} years old`, `Environ ${fmt(roundAge(mAge))} ans`)
                    : t(lang, 'Too old! No carbon-14 left to measure.', 'Trop vieux ! Plus de carbone 14 à mesurer.')}
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="shrink-0 flex items-center justify-center gap-2.5 flex-wrap">
        {phase === 'alive' && (
          <Btn big={big} tone="orange" icon={Coffee} onClick={start}>{t(lang, 'Mr Bowen misses his coffee', 'M. Bowen rate son café')}</Btn>
        )}
        {phase === 'dead' && (
          <>
            <Btn big={big} tone="orange" icon={playing ? Pause : Play} disabled={years >= T_MAX} onClick={() => setPlaying((p) => !p)}>
              {playing ? t(lang, 'Pause', 'Pause') : years > 0 ? t(lang, 'Keep going', 'Continuer') : t(lang, 'Start the clock', 'Lancer l’horloge')}
            </Btn>
            <label className={`inline-flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300 ${big ? 'text-lg' : 'text-sm'}`}>
              <input type="checkbox" checked={stopEach} onChange={(e) => setStopEach(e.target.checked)} className="w-5 h-5 accent-[#c25e12]" />
              {t(lang, 'Stop at each half-life', 'S’arrêter à chaque demi-vie')}
            </label>
          </>
        )}
        {isMystery && (
          <>
            <Btn big={big} tone="teal" icon={Eye} disabled={revealed} onClick={() => setRevealed(true)}>{t(lang, 'Check the age', 'Vérifier l’âge')}</Btn>
            <Btn big={big} tone="blue" icon={Shuffle} onClick={() => newMystery((mystery + 1) % SAMPLES.length)}>{t(lang, 'Next sample', 'Échantillon suivant')}</Btn>
          </>
        )}
        {!isMystery && (
          <Btn big={big} tone="blue" icon={Search} onClick={() => newMystery(0)}>{t(lang, 'Be the scientist', 'À toi, scientifique')}</Btn>
        )}
        <Btn big={big} tone="slate" icon={RotateCcw} onClick={reset}>{t(lang, 'Back to the start', 'Revenir au début')}</Btn>
        {phase === 'alive' && <span className={`inline-flex items-center gap-1.5 text-slate-500 font-semibold ${big ? 'text-base' : 'text-xs'}`}><Snowflake className="w-4 h-4" />{t(lang, 'Life sped up', 'Vie accélérée')}</span>}
      </div>
    </div>
  )
}

/* ============================================================= *
 * 3 · BE THE ATOMS — a coin each, the whole class
 * ============================================================= */
const ROUNDS = 6
function binomialRun(n0, seed) {
  // Each round every atom left has a 1 in 2 chance of breaking down.
  const rnd = mulberry32(seed)
  const out = [n0]
  let n = n0
  for (let k = 0; k < ROUNDS; k++) {
    if (n < 2000) {
      let m = 0
      for (let i = 0; i < n; i++) if (rnd() < 0.5) m++
      n = m
    } else {
      // a big crowd: the normal approximation is plenty
      const g = Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd())
      n = Math.max(0, Math.round(n / 2 + g * Math.sqrt(n / 4)))
    }
    out.push(n)
  }
  return out
}

export function CoinDecay({ lang = 'en', isDisplayMode = false }) {
  const [start, setStart] = useState(20)
  const [counts, setCounts] = useState([20])
  const [compare, setCompare] = useState(0) // 0 none, 1 thousand, 2 million
  const [seed, setSeed] = useState(3)
  const round = counts.length - 1
  const cur = counts[round]
  const big = isDisplayMode
  const sims = useMemo(() => ({ 1: binomialRun(1000, seed), 2: binomialRun(1_000_000, seed + 99) }), [seed])

  const setCur = (v) => setCounts((c) => [...c.slice(0, -1), Math.max(0, Math.min(v, round === 0 ? 60 : c[c.length - 2]))])
  const nextRound = () => setCounts((c) => (c.length > ROUNDS ? c : [...c, Math.round(c[c.length - 1] / 2)]))
  const undo = () => setCounts((c) => (c.length > 1 ? c.slice(0, -1) : c))
  const restart = () => { setCounts([start]); setSeed((s) => s + 1) }
  const changeStart = (v) => { const n = Math.max(2, Math.min(60, v)); setStart(n); setCounts([n]) }

  // chart: percent left, so a class of 20 and a crowd of a million share axes
  const C = { x0: 760, x1: 1540, y0: 470, y1: 70 }
  const cx = (k) => C.x0 + 40 + (k / ROUNDS) * (C.x1 - C.x0 - 80)
  const cy = (p) => C.y0 - (p / 100) * (C.y0 - C.y1)
  const pct = (n, n0) => (n0 ? (100 * n) / n0 : 0)
  const bw = 34

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1580 560" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1580" height="560" rx="16" fill="#ffffff" />
          {/* left: the round */}
          <text x="40" y="64" fontFamily={FONT} fontSize="26" fontWeight="800" fill={MUTED}>{t(lang, 'Round', 'Tour')} {round} · {t(lang, `${fmt(round * HALF)} years`, `${fmt(round * HALF)} ans`)}</text>
          <text x="40" y="150" fontFamily={FONT} fontSize="34" fontWeight="900" fill={INK}>{round === 0 ? t(lang, 'Everyone standing:', 'Tout le monde debout :') : t(lang, 'Still standing:', 'Encore debout :')}</text>
          <text x="330" y="300" fontFamily={FONT} fontSize="150" fontWeight="900" fill={C14} textAnchor="middle">{cur}</text>
          {round > 0 && (
            <text x="330" y="360" fontFamily={FONT} fontSize="26" fill={MUTED} textAnchor="middle">
              {t(lang, `prediction: ${fmt(counts[0] / 2 ** round, 1)}`, `prévision\u00a0: ${fmt(counts[0] / 2 ** round, 1)}`)}
            </text>
          )}
          <g fontFamily={FONT} fontSize="22" fill={INK}>
            <text x="40" y="430" fontWeight="800">{t(lang, 'Each round = one half-life', 'Chaque tour = une demi-vie')}</text>
            <text x="40" y="466">{t(lang, 'Flip your coin. Tails: you broke down. Sit.', 'Lance ta pièce. Pile : tu t’es désintégré. Assieds-toi.')}</text>
            <text x="40" y="502">{t(lang, 'Heads: stay standing.', 'Face : reste debout.')}</text>
          </g>

          {/* right: the chart */}
          {[0, 25, 50, 75, 100].map((p) => (
            <g key={p}>
              <line x1={C.x0} y1={cy(p)} x2={C.x1} y2={cy(p)} stroke={p === 0 ? INK : '#edf0f3'} strokeWidth={p === 0 ? 2.5 : 1.5} />
              <text x={C.x0 - 10} y={cy(p) + 6} fontFamily={FONT} fontSize="17" fill={MUTED} textAnchor="end">{p}%</text>
            </g>
          ))}
          <text x={C.x0 - 50} y={C.y1 - 22} fontFamily={FONT} fontSize="18" fontWeight="700" fill={MUTED}>{t(lang, 'atoms left', 'atomes restants')}</text>
          {Array.from({ length: ROUNDS + 1 }, (_, k) => (
            <text key={k} x={cx(k)} y={C.y0 + 30} fontFamily={FONT} fontSize="18" fill={MUTED} textAnchor="middle">{k}</text>
          ))}
          <text x={C.x1} y={C.y0 + 62} fontFamily={FONT} fontSize="18" fontWeight="700" fill={MUTED} textAnchor="end">{t(lang, 'round (half-lives)', 'tour (demi-vies)')}</text>
          {/* prediction */}
          <polyline
            points={Array.from({ length: 61 }, (_, i) => `${cx(i / 10).toFixed(1)},${cy(100 * 0.5 ** (i / 10)).toFixed(1)}`).join(' ')}
            fill="none" stroke={KEY} strokeWidth="3" strokeDasharray="8 6" opacity="0.8"
          />
          {/* the class */}
          {counts.map((n, k) => (
            <g key={k}>
              <rect x={cx(k) - bw / 2} y={cy(pct(n, counts[0]))} width={bw} height={C.y0 - cy(pct(n, counts[0]))} rx="5" fill={C14} />
              <text x={cx(k)} y={cy(pct(n, counts[0])) - 10} fontFamily={FONT} fontSize="20" fontWeight="900" fill={C14} textAnchor="middle">{n}</text>
            </g>
          ))}
          {/* the computer's atoms */}
          {compare > 0 && (
            <g>
              <polyline
                points={sims[compare].slice(0, counts.length).map((n, k) => `${cx(k).toFixed(1)},${cy(pct(n, sims[compare][0])).toFixed(1)}`).join(' ')}
                fill="none" stroke={BLUE} strokeWidth="4"
              />
              {sims[compare].slice(0, counts.length).map((n, k) => (
                <circle key={k} cx={cx(k)} cy={cy(pct(n, sims[compare][0]))} r="7" fill={BLUE} stroke="#ffffff" strokeWidth="2" />
              ))}
              <text x={C.x1 - 6} y={C.y1 + 4} fontFamily={FONT} fontSize="20" fontWeight="900" fill={BLUE} textAnchor="end">
                {compare === 1 ? t(lang, '1 000 computer atoms', '1 000 atomes simulés') : t(lang, '1 000 000 computer atoms', '1 000 000 d’atomes simulés')}
                {': '}{fmt(sims[compare][counts.length - 1])}
              </text>
            </g>
          )}
          <g transform={`translate(${C.x1 - 330} ${C.y1 + 30})`}>
            <rect x="0" y="-12" width="22" height="22" rx="4" fill={C14} />
            <text x="32" y="6" fontFamily={FONT} fontSize="18" fill={INK}>{t(lang, 'our class', 'notre classe')}</text>
            <line x1="150" y1="0" x2="186" y2="0" stroke={KEY} strokeWidth="3" strokeDasharray="8 6" />
            <text x="196" y="6" fontFamily={FONT} fontSize="18" fill={INK}>{t(lang, 'half each time', 'la moitié à chaque fois')}</text>
          </g>
        </svg>
      </div>

      <div className="shrink-0 flex items-center justify-center gap-2.5 flex-wrap">
        {round === 0 && (
          <span className={`inline-flex items-center gap-2 font-black text-slate-600 dark:text-slate-300 ${big ? 'text-lg' : 'text-sm'}`}>
            <Users className="w-5 h-5" />{t(lang, 'Class size', 'Effectif')}
            <Btn big={big} tone="slate" icon={Minus} onClick={() => changeStart(start - 1)} />
            <Btn big={big} tone="slate" icon={Plus} onClick={() => changeStart(start + 1)} />
          </span>
        )}
        {round > 0 && (
          <>
            <Btn big={big} tone="slate" icon={Minus} disabled={cur === 0} onClick={() => setCur(cur - 1)}>{t(lang, 'One fewer', 'Un de moins')}</Btn>
            <Btn big={big} tone="slate" icon={Plus} disabled={cur >= counts[round - 1]} onClick={() => setCur(cur + 1)}>{t(lang, 'One more', 'Un de plus')}</Btn>
          </>
        )}
        <Btn big={big} tone="orange" icon={Coins} disabled={round >= ROUNDS || cur === 0} onClick={nextRound}>{t(lang, 'Flip! Next round', 'Lancez ! Tour suivant')}</Btn>
        <Btn big={big} tone="teal" icon={Undo2} disabled={round === 0} onClick={undo}>{t(lang, 'Undo', 'Annuler')}</Btn>
        <Btn big={big} tone="blue" icon={Shuffle} onClick={() => setCompare((c) => (c + 1) % 3)}>
          {compare === 0 ? t(lang, 'Add 1 000 atoms', 'Ajouter 1 000 atomes') : compare === 1 ? t(lang, 'Try 1 000 000', 'Essayer 1 000 000') : t(lang, 'Hide the computer', 'Cacher l’ordinateur')}
        </Btn>
        <Btn big={big} tone="slate" icon={RotateCcw} onClick={restart}>{t(lang, 'Start again', 'Recommencer')}</Btn>
      </div>
    </div>
  )
}
