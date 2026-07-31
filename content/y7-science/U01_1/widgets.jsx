import { useState } from 'react'

/* ============================================================= *
 * WIDGET 1 — SCALE CHALLENGE (the soda-can proportion)
 * The teacher reveals the size of a cell (0.02 mm). Students then
 * find the scale factor themselves: a soda can is 120 mm, so the
 * cell must be magnified 120 / 0.02 = 6000×. The same magnification
 * turns Mr Bowen (178 cm) into a 10.68 km giant — taller than
 * Everest. Slide the magnification and watch both facts move.
 * ============================================================= */
const CELL_MM = 0.02
const CAN_MM = 120
const BOWEN_CM = 178
const EVEREST_M = 8849

// Cambridge palette, matching the deck's note cards and diagrams.
const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'

export const ScaleChallengeWidget = () => {
  const [revealed, setRevealed] = useState(false)
  const [mag, setMag] = useState(6000)

  const magnifiedCell = CELL_MM * mag // in mm
  const matchesCan = Math.abs(magnifiedCell - CAN_MM) < 1
  const bowenM = (BOWEN_CM / 100) * mag // metres
  const bowenKm = bowenM / 1000
  const tallerThanEverest = bowenM > EVEREST_M
  const maxM = Math.max(bowenM, EVEREST_M)
  const pct = (m) => `${Math.max(4, (m / maxM) * 100)}%`

  return (
    <div className="w-full h-full flex flex-col select-none">
      <div className="flex-1 min-h-[210px] w-full bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-inner relative flex flex-col p-3 sm:p-5 overflow-y-auto custom-scrollbar">
        {/* The proportion readout */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">🔬</span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">A cell</span>
            <span className="font-mono font-black text-sm sm:text-lg" style={{ color: TEAL }}>{revealed ? `${CELL_MM} mm` : '? mm'}</span>
          </div>
          <span className="font-black text-slate-400 text-lg">×</span>
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Magnify</span>
            <span className="font-mono font-black text-sm sm:text-lg" style={{ color: PURPLE }}>{mag.toLocaleString()}×</span>
          </div>
          <span className="font-black text-slate-400 text-lg">=</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">🥤</span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Soda can</span>
            <span className="font-mono font-black text-sm sm:text-lg" style={{ color: matchesCan ? GREEN : undefined }}>
              {revealed ? `${Math.round(magnifiedCell)} mm` : '120 mm'}
            </span>
          </div>
        </div>

        {revealed && matchesCan && (
          <div className="mt-2 mx-auto text-center text-[11px] sm:text-sm font-black rounded-lg px-4 py-1.5 border-2"
            style={{ color: GREEN, borderColor: `${GREEN}55`, backgroundColor: `${GREEN}14` }}>
            ✓ 120 ÷ 0.02 = 6,000 — the magnified cell is exactly a soda can
          </div>
        )}

        {/* Mr Bowen vs Everest */}
        <div className="flex-1 flex items-end justify-center gap-6 sm:gap-10 mt-4 min-h-[120px]">
          <div className="flex flex-col items-center justify-end h-full">
            <span className="font-mono font-black text-xs sm:text-sm mb-1" style={{ color: tallerThanEverest ? GREEN : TEAL }}>{bowenKm.toFixed(2)} km</span>
            <div className="w-10 sm:w-14 rounded-t-lg border-2 transition-all duration-300 flex items-start justify-center"
              style={{ height: pct(bowenM), backgroundColor: tallerThanEverest ? GREEN : TEAL, borderColor: tallerThanEverest ? '#3d731c' : '#00697f' }}>
              <span className="text-lg mt-1" aria-hidden="true">🧍</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Mr Bowen</span>
          </div>
          <div className="flex flex-col items-center justify-end h-full">
            <span className="font-mono font-black text-xs sm:text-sm mb-1 text-slate-500 dark:text-slate-300">8.85 km</span>
            <div className="w-10 sm:w-14 rounded-t-lg bg-slate-300 dark:bg-slate-600 border-2 border-slate-400 dark:border-slate-500 transition-all duration-300 flex items-start justify-center" style={{ height: pct(EVEREST_M) }}>
              <span className="text-lg mt-1" aria-hidden="true">🏔️</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Everest</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 mt-2 flex-shrink-0">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-2.5 rounded-xl font-black text-sm uppercase tracking-widest text-white active:scale-95 transition-all"
            style={{ backgroundColor: TEAL }}>
            🔍 Reveal the size of a cell (0.02 mm)
          </button>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <span className="w-20 text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Magnify</span>
              <input type="range" min="1000" max="10000" step="250" value={mag} onChange={(e) => setMag(Number(e.target.value))}
                className="flex-1 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer" style={{ accentColor: PURPLE }} />
              <span className="w-16 text-right font-mono font-bold text-slate-600 dark:text-slate-300">{mag.toLocaleString()}×</span>
            </div>
            <div className="mt-2 text-center text-[11px] sm:text-sm font-black rounded-lg py-1.5 px-3"
              style={{ color: tallerThanEverest ? GREEN : ORANGE, backgroundColor: tallerThanEverest ? `${GREEN}14` : `${ORANGE}14` }}>
              {tallerThanEverest ? `Magnified ${mag.toLocaleString()}×, Mr Bowen is ${bowenKm.toFixed(2)} km — taller than Everest` : 'Not tall enough yet — keep magnifying to pass Everest'}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

/* ============================================================= *
 * WIDGET 2 — CELL EXPLORER
 * Toggle animal / plant, then tap an organelle to reveal its job.
 * The picture uses the same flat Learner's-Book palette as the
 * printed diagrams. Nothing is dimmed — the selected part gets a
 * halo and a heavier outline instead, so the whole cell stays
 * readable from the back of the room at all times.
 * ============================================================= */
const WALL_F = '#f9dcc4', WALL_S = '#e07b39'
const CYTO_F = '#eaf0f8', MEMB_S = '#8fa6c4'
const VAC_F = '#dbeafe', VAC_S = '#7ba7d4'
const NUC_F = '#9b7fc4', NUC_S = '#6f52a0'
const CHL_F = '#5aab4e', CHL_S = '#3a7d31'
const AMEM_S = '#c2185b'
const INK = '#2b2b2b'

const ORGANELLES = {
  membrane: { name: 'Cell membrane', color: AMEM_S, job: 'A thin, flexible layer that controls what goes in and out of the cell.', both: true },
  cytoplasm: { name: 'Cytoplasm', color: TEAL, job: 'A clear, jelly-like substance where the cell’s chemical reactions happen.', both: true },
  nucleus: { name: 'Nucleus', color: NUC_S, job: 'The control centre — the “boss” that manages all the cell’s activities.', both: true },
  mitochondria: { name: 'Mitochondria', color: '#8a5a2b', job: 'Where energy is released from food. The powerhouse of the cell.', both: true },
  wall: { name: 'Cell wall', color: WALL_S, job: 'A strong, stiff outer layer made of cellulose that holds the plant cell in shape.', plant: true },
  chloroplast: { name: 'Chloroplast', color: CHL_S, job: 'Green structures where the plant makes its food from sunlight, using chlorophyll.', plant: true },
  vacuole: { name: 'Sap vacuole', color: VAC_S, job: 'A large space of cell sap — sugar and water — that helps keep the cell firm.', plant: true },
}

const PLANT_CHLOROPLASTS = [[84, 62], [84, 104], [216, 62], [216, 112], [216, 160]]
const ANIMAL_MITOS = [[78, 152], [228, 62], [220, 148]]

export const CellExplorerWidget = () => {
  const [mode, setMode] = useState('plant') // 'plant' | 'animal'
  const [sel, setSel] = useState('nucleus')

  const keys = Object.keys(ORGANELLES).filter((k) => (mode === 'plant' ? (ORGANELLES[k].both || ORGANELLES[k].plant) : ORGANELLES[k].both))
  const active = keys.includes(sel) ? sel : 'nucleus'
  const cur = ORGANELLES[active]
  const on = (k) => active === k
  // Selected parts get a heavier outline; nothing is faded out.
  const sw = (k, base, hot) => (on(k) ? hot : base)

  return (
    <div className="w-full h-full flex flex-col select-none">
      <div className="flex-1 min-h-[210px] w-full bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-inner relative flex flex-col p-3 sm:p-4 overflow-hidden">
        {/* mode toggle */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          {['plant', 'animal'].map((m) => (
            <button key={m} onClick={() => setMode(m)}
              className="px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest border-2 transition-all"
              style={mode === m
                ? { backgroundColor: m === 'plant' ? CHL_S : AMEM_S, borderColor: m === 'plant' ? CHL_S : AMEM_S, color: '#fff' }
                : { backgroundColor: 'transparent', borderColor: '#cbd5e1', color: '#64748b' }}>
              {m === 'plant' ? '🌱 Plant' : '🐾 Animal'}
            </button>
          ))}
        </div>

        {/* cell picture — always drawn on white so it reads in dark mode too */}
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <svg viewBox="0 0 300 220" className="w-full h-full max-h-[160px]">
            <rect x="0" y="0" width="300" height="220" rx="12" fill="#ffffff" />
            {mode === 'plant' ? (
              <g>
                {on('wall') && <rect x="44" y="14" width="212" height="192" rx="28" fill={`${WALL_S}22`} />}
                <rect x="52" y="22" width="196" height="176" rx="22" fill={WALL_F} stroke={WALL_S} strokeWidth={sw('wall', 3, 7)} />
                <rect x="61" y="31" width="178" height="158" rx="16" fill={on('cytoplasm') ? `${TEAL}30` : CYTO_F} stroke={on('membrane') ? AMEM_S : MEMB_S} strokeWidth={sw('membrane', 2, 6)} />
                <rect x="104" y="58" width="92" height="104" rx="26" fill={VAC_F} stroke={VAC_S} strokeWidth={sw('vacuole', 2, 6)} />
                {PLANT_CHLOROPLASTS.map(([x, y], i) => (
                  <ellipse key={i} cx={x} cy={y} rx="11" ry="17" fill={CHL_F} stroke={CHL_S} strokeWidth={sw('chloroplast', 2, 5)} />
                ))}
                <ellipse cx="86" cy="142" rx="19" ry="24" fill={NUC_F} stroke={NUC_S} strokeWidth={sw('nucleus', 2, 6)} />
                <ellipse cx="140" cy="180" rx="15" ry="9" fill="#ffffff" stroke={INK} strokeWidth={sw('mitochondria', 2, 4)} />
                <path d="M 128 180 q 6 -7 12 0 q 6 7 12 0" fill="none" stroke={INK} strokeWidth="1.5" />
              </g>
            ) : (
              <g>
                <ellipse cx="150" cy="110" rx="118" ry="82" fill={on('cytoplasm') ? `${TEAL}30` : CYTO_F} stroke={AMEM_S} strokeWidth={sw('membrane', 3, 7)} />
                <circle cx="160" cy="100" r="32" fill={NUC_F} stroke={NUC_S} strokeWidth={sw('nucleus', 2, 6)} />
                <circle cx="170" cy="90" r="10" fill={NUC_S} />
                {ANIMAL_MITOS.map(([x, y], i) => (
                  <g key={i}>
                    <ellipse cx={x} cy={y} rx="17" ry="10" fill="#ffffff" stroke={INK} strokeWidth={sw('mitochondria', 2, 4)} />
                    <path d={`M ${x - 13} ${y} q 6.5 -8 13 0 q 6.5 8 13 0`} fill="none" stroke={INK} strokeWidth="1.5" />
                  </g>
                ))}
              </g>
            )}
          </svg>
        </div>

        {/* detail */}
        <div className="rounded-xl border-2 shadow-sm p-2.5 sm:p-3 bg-white dark:bg-slate-800" style={{ borderColor: cur.color }}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cur.color }} />
            <span className="font-black text-sm sm:text-base" style={{ color: cur.color }}>{cur.name}</span>
            {cur.plant && (
              <span className="ml-auto text-[9px] font-black uppercase tracking-widest text-white rounded-full px-2 py-0.5" style={{ backgroundColor: CHL_S }}>Plant only</span>
            )}
          </div>
          <p className="mt-1 text-[13px] sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-snug">{cur.job}</p>
        </div>
      </div>

      {/* organelle chips */}
      <div className="w-full bg-white dark:bg-slate-800 p-2.5 sm:p-3 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 mt-2 flex-shrink-0">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {keys.map((k) => (
            <button key={k} onClick={() => setSel(k)}
              className="px-3 py-1.5 rounded-lg font-black text-[11px] sm:text-xs border-2 transition-all active:scale-95"
              style={on(k)
                ? { backgroundColor: ORGANELLES[k].color, borderColor: ORGANELLES[k].color, color: '#fff' }
                : { backgroundColor: 'transparent', borderColor: '#cbd5e1', color: ORGANELLES[k].color }}>
              {ORGANELLES[k].name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
