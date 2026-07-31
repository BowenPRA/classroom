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
      <div className="flex-1 min-h-[210px] w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] border-2 border-slate-200 dark:border-slate-700 shadow-inner relative flex flex-col p-3 sm:p-5 overflow-y-auto custom-scrollbar">
        {/* The proportion readout */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">🔬</span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400">A cell</span>
            <span className="font-mono font-black text-sm sm:text-lg text-[#3b82f6]">{revealed ? `${CELL_MM} mm` : '? mm'}</span>
          </div>
          <span className="font-black text-slate-300 dark:text-slate-600 text-lg">×</span>
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400">Magnify</span>
            <span className="font-mono font-black text-sm sm:text-lg text-[#8b5cf6]">{mag.toLocaleString()}×</span>
          </div>
          <span className="font-black text-slate-300 dark:text-slate-600 text-lg">=</span>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl" aria-hidden="true">🥤</span>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400">Soda can</span>
            <span className={`font-mono font-black text-sm sm:text-lg ${matchesCan ? 'text-[#22c55e]' : 'text-slate-500 dark:text-slate-300'}`}>
              {revealed ? `${Math.round(magnifiedCell)} mm` : '120 mm'}
            </span>
          </div>
        </div>

        {revealed && matchesCan && (
          <div className="mt-2 mx-auto text-center text-[11px] sm:text-sm font-black text-[#22c55e] bg-[#22c55e]/10 rounded-full px-4 py-1 border-2 border-[#22c55e]/30">
            ✓ 120 ÷ 0.02 = 6,000 — the magnified cell is exactly a soda can!
          </div>
        )}

        {/* Mr Bowen vs Everest */}
        <div className="flex-1 flex items-end justify-center gap-6 sm:gap-10 mt-4 min-h-[120px]">
          <div className="flex flex-col items-center justify-end h-full">
            <span className={`font-mono font-black text-xs sm:text-sm mb-1 ${tallerThanEverest ? 'text-[#22c55e]' : 'text-[#3b82f6]'}`}>{bowenKm.toFixed(2)} km</span>
            <div className="w-10 sm:w-14 rounded-t-lg bg-gradient-to-t from-[#3b82f6] to-[#60a5fa] border-2 border-[#2563eb] transition-all duration-300 flex items-start justify-center" style={{ height: pct(bowenM) }}>
              <span className="text-lg mt-1" aria-hidden="true">🧍</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Mr Bowen</span>
          </div>
          <div className="flex flex-col items-center justify-end h-full">
            <span className="font-mono font-black text-xs sm:text-sm mb-1 text-slate-500 dark:text-slate-300">8.85 km</span>
            <div className="w-10 sm:w-14 rounded-t-lg bg-gradient-to-t from-slate-400 to-slate-300 dark:from-slate-600 dark:to-slate-500 border-2 border-slate-400 transition-all duration-300 flex items-start justify-center" style={{ height: pct(EVEREST_M) }}>
              <span className="text-lg mt-1" aria-hidden="true">🏔️</span>
            </div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400 mt-1">Everest</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="w-full bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 mt-2 flex-shrink-0">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full py-2.5 rounded-xl font-black text-sm uppercase tracking-widest bg-[#14b8a6] border-2 border-[#0d9488] text-white active:scale-95 transition-all">
            🔍 Reveal the size of a cell (0.02 mm)
          </button>
        ) : (
          <>
            <div className="flex items-center gap-3">
              <span className="w-20 text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400">Magnify</span>
              <input type="range" min="1000" max="10000" step="250" value={mag} onChange={(e) => setMag(Number(e.target.value))} className="flex-1 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#8b5cf6]" />
              <span className="w-16 text-right font-mono font-bold text-slate-600 dark:text-slate-300">{mag.toLocaleString()}×</span>
            </div>
            <div className={`mt-2 text-center text-[11px] sm:text-sm font-black rounded-lg py-1.5 px-3 ${tallerThanEverest ? 'text-[#22c55e] bg-[#22c55e]/10' : 'text-[#3b82f6] bg-[#3b82f6]/10'}`}>
              {tallerThanEverest ? `Magnified ${mag.toLocaleString()}×, Mr Bowen is ${bowenKm.toFixed(2)} km — taller than Everest!` : `Not tall enough yet — keep magnifying to pass Everest.`}
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
 * The tapped part highlights on a simple cell picture. Shows which
 * organelles are shared and which are plant-only.
 * ============================================================= */
const ORGANELLES = {
  membrane: { name: 'Cell membrane', color: '#ec4899', job: 'A thin, flexible layer that controls what goes in and out of the cell.', both: true },
  cytoplasm: { name: 'Cytoplasm', color: '#06b6d4', job: 'A clear, jelly-like substance where the cell’s chemical reactions happen.', both: true },
  nucleus: { name: 'Nucleus', color: '#7c3aed', job: 'The control centre — the “boss” that manages all the cell’s activities.', both: true },
  mitochondria: { name: 'Mitochondria', color: '#dc2626', job: 'Where energy is released from food. The powerhouse of the cell!', both: true },
  wall: { name: 'Cell wall', color: '#15803d', job: 'A strong, stiff outer layer (made of cellulose) that holds the plant cell in shape.', plant: true },
  chloroplast: { name: 'Chloroplast', color: '#22c55e', job: 'Green structures where the plant makes its food from sunlight (using chlorophyll).', plant: true },
  vacuole: { name: 'Sap vacuole', color: '#2563eb', job: 'A large space of cell sap (sugar and water) that helps keep the cell firm.', plant: true },
}

export const CellExplorerWidget = () => {
  const [mode, setMode] = useState('plant') // 'plant' | 'animal'
  const [sel, setSel] = useState('nucleus')

  const keys = Object.keys(ORGANELLES).filter((k) => (mode === 'plant' ? (ORGANELLES[k].both || ORGANELLES[k].plant) : ORGANELLES[k].both))
  const active = keys.includes(sel) ? sel : 'nucleus'
  const cur = ORGANELLES[active]
  const on = (k) => active === k
  const dim = (k) => (on(k) ? 1 : 0.35)

  return (
    <div className="w-full h-full flex flex-col select-none">
      <div className="flex-1 min-h-[210px] w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] border-2 border-slate-200 dark:border-slate-700 shadow-inner relative flex flex-col p-3 sm:p-4 overflow-hidden">
        {/* mode toggle */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {['plant', 'animal'].map((m) => (
            <button key={m} onClick={() => setMode(m)} className={`px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest border-2 transition-all ${mode === m ? (m === 'plant' ? 'bg-[#22c55e] border-[#15803d] text-white' : 'bg-[#ec4899] border-[#be185d] text-white') : 'bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-500'}`}>
              {m === 'plant' ? '🌱 Plant' : '🐾 Animal'}
            </button>
          ))}
        </div>

        {/* cell picture */}
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <svg viewBox="0 0 300 220" className="w-full h-full max-h-[150px]">
            {mode === 'plant' ? (
              <g>
                <rect x="40" y="30" width="220" height="160" rx="10" fill={cur && on('wall') ? '#16a34a' : '#bbf7d0'} stroke="#15803d" strokeWidth={on('wall') ? 6 : 3} opacity={dim('wall')} />
                <rect x="50" y="40" width="200" height="140" rx="7" fill="#ecfdf5" stroke="#ec4899" strokeWidth={on('membrane') ? 5 : 2} opacity={on('membrane') ? 1 : 0.5} />
                <rect x="80" y="60" width="150" height="100" rx="14" fill="#dbeafe" stroke="#3b82f6" strokeWidth={on('vacuole') ? 5 : 2} opacity={dim('vacuole')} />
                <circle cx="72" cy="80" r="20" fill="#c4b5fd" stroke="#7c3aed" strokeWidth={on('nucleus') ? 5 : 2} opacity={dim('nucleus')} />
                {[[95, 150], [130, 165], [210, 70], [225, 120]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="11" ry="7" fill="#22c55e" stroke="#15803d" strokeWidth="2" opacity={dim('chloroplast')} />)}
                <ellipse cx="190" cy="155" rx="16" ry="8" fill="#fca5a5" stroke="#dc2626" strokeWidth={on('mitochondria') ? 4 : 2} opacity={dim('mitochondria')} />
                <text x="150" y="118" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#3b82f6" textAnchor="middle" opacity={dim('cytoplasm')}>cytoplasm</text>
              </g>
            ) : (
              <g>
                <ellipse cx="150" cy="110" rx="115" ry="80" fill="#fdf2f8" stroke="#ec4899" strokeWidth={on('membrane') ? 6 : 3} opacity={on('membrane') ? 1 : 0.6} />
                <circle cx="150" cy="105" r="30" fill="#c4b5fd" stroke="#7c3aed" strokeWidth={on('nucleus') ? 5 : 2} opacity={dim('nucleus')} />
                {[[80, 140], [215, 75], [210, 145]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="18" ry="9" fill="#fca5a5" stroke="#dc2626" strokeWidth={on('mitochondria') ? 4 : 2} opacity={dim('mitochondria')} />)}
                <text x="150" y="165" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#06b6d4" textAnchor="middle" opacity={dim('cytoplasm')}>cytoplasm</text>
              </g>
            )}
          </svg>
        </div>

        {/* detail */}
        <div className="rounded-xl border-2 shadow-sm p-2.5 sm:p-3" style={{ borderColor: cur.color, backgroundColor: `${cur.color}12` }}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cur.color }} />
            <span className="font-black text-slate-800 dark:text-slate-100 text-sm sm:text-base">{cur.name}</span>
            {cur.plant && <span className="ml-auto text-[9px] font-black uppercase tracking-widest text-[#15803d] bg-[#22c55e]/15 rounded-full px-2 py-0.5">Plant only</span>}
          </div>
          <p className="mt-1 text-[13px] sm:text-sm font-bold text-slate-600 dark:text-slate-300 leading-snug">{cur.job}</p>
        </div>
      </div>

      {/* organelle chips */}
      <div className="w-full bg-white dark:bg-slate-800 p-2.5 sm:p-3 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 mt-2 flex-shrink-0">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {keys.map((k) => (
            <button key={k} onClick={() => setSel(k)}
              className={`px-3 py-1.5 rounded-lg font-black text-[11px] sm:text-xs border-2 transition-all active:scale-95 ${on(k) ? 'text-white' : 'bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600'}`}
              style={on(k) ? { backgroundColor: ORGANELLES[k].color, borderColor: ORGANELLES[k].color } : undefined}>
              {ORGANELLES[k].name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
