// content/y7-science/U04_1/bears.jsx
// THE POLAR BEARS — the book's figure on page 128, built one label a press.
// The photograph sits in the middle; seven label boxes wait round it, showing
// only their letter (M R S G R E N), the next one ringed in orange. Before
// each press the class says a word for that letter (the book page is open,
// so they can hunt for it); the press fills the box — the science word and
// what the bear does — and draws its leader line to the bear. The last press
// spells the name: Mrs Gren.
import { useState } from 'react'
import { ChevronRight, Undo2, RotateCcw } from 'lucide-react'
import { tr } from '../../../src/lib/lang.js'
import { Btn } from '../U03_models/ui.jsx'
import { INK, KEY, MUTED, FONT } from './art.js'
import bearsPhoto from './images/polar-bears.jpg'

const t = (lang, en, fr) => tr(lang, en, null, fr)
const TEAL = '#0087a8', RULE = '#d5dbe1'

// The photograph (1200 × 800) shown at 740 wide: X = 380 + 0.6167 px.
const PH = { x: 380, y: 70, w: 740, h: 493 }
const BOX_W = 350
const BOX_H = 104

// In MRS GREN order: [letter, word EN, word FR, line(s) EN, line(s) FR,
// box x, box centre y, the point on the bear]
const LABELS = [
  ['M', 'Movement', 'Mouvement', ['It walks and swims.'], ['Il marche et il nage.'], 15, 490, [482, 351]],
  ['R', 'Respiration', 'Respiration', ['Its cells get energy', 'from food.'], ['Ses cellules tirent', 'l’énergie des aliments.'], 1135, 490, [990, 336]],
  ['S', 'Sensitivity', 'Sensibilité', ['It smells meat.'], ['Il sent la viande.'], 15, 130, [517, 244]],
  ['G', 'Growth', 'Croissance', ['The cubs get bigger.'], ['Les petits grandissent.'], 1135, 150, [800, 286]],
  ['R', 'Reproduction', 'Reproduction', ['It has cubs.'], ['L’ourse a des petits.'], 1135, 330, [904, 312]],
  ['E', 'Excretion', 'Excrétion', ['It breathes out', 'carbon dioxide.'], ['Il rejette du', 'dioxyde de carbone.'], 15, 250, [522, 259]],
  ['N', 'Nutrition', 'Nutrition', ['It eats meat.'], ['Il mange de la viande.'], 15, 370, [583, 304]],
]
const LAST = 8 // seven labels, then the name

export function BearSeven({ lang = 'en', isDisplayMode = false }) {
  const [k, setK] = useState(0) // labels 0..k-1 are shown
  const big = isDisplayMode
  const fr = lang === 'fr'

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1500 640" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1500" height="640" rx="16" fill="#ffffff" />
          <defs><clipPath id="bears-photo"><rect x={PH.x} y={PH.y} width={PH.w} height={PH.h} rx="16" /></clipPath></defs>
          <image href={bearsPhoto} x={PH.x} y={PH.y} width={PH.w} height={PH.h} preserveAspectRatio="xMidYMid slice" clipPath="url(#bears-photo)" />
          <rect x={PH.x} y={PH.y} width={PH.w} height={PH.h} rx="16" fill="none" stroke="#cbd5e1" strokeWidth="2" />

          {LABELS.map(([letter, en, frWord, linesEn, linesFr, bx, cy, pt], i) => {
            const shown = i < k
            const next = i === k
            const top = cy - BOX_H / 2
            const left = bx < 700
            const edgeX = left ? bx + BOX_W : bx
            const glow = k >= LAST
            const lines = fr ? linesFr : linesEn
            return (
              <g key={i}>
                {shown && (
                  <g>
                    <line x1={edgeX} y1={cy} x2={pt[0]} y2={pt[1]} stroke={KEY} strokeWidth="3.5" />
                    <circle cx={pt[0]} cy={pt[1]} r="8" fill={KEY} stroke="#ffffff" strokeWidth="3" />
                  </g>
                )}
                <rect x={bx} y={top} width={BOX_W} height={BOX_H} rx="14"
                  fill={shown ? '#fff8f0' : '#f4f6f8'} stroke={next ? KEY : shown ? '#e0b48f' : RULE}
                  strokeWidth={next ? 5 : 2.5} strokeDasharray={shown || next ? undefined : '9 7'} />
                <circle cx={bx + 40} cy={cy} r="27" fill={glow ? KEY : shown ? TEAL : next ? KEY : '#9aa5ae'} />
                <text x={bx + 40} y={cy + 12} fontFamily={FONT} fontSize="33" fontWeight="900" fill="#ffffff" textAnchor="middle">{letter}</text>
                {shown ? (
                  <g>
                    <text x={bx + 82} y={top + (lines.length > 1 ? 36 : 44)} fontFamily={FONT} fontSize="30" fontWeight="900" fill={KEY}>{fr ? frWord : en}</text>
                    {lines.map((line, j) => (
                      <text key={j} x={bx + 82} y={top + (lines.length > 1 ? 66 + j * 26 : 80)} fontFamily={FONT} fontSize="22" fontWeight="700" fill={INK}>{line}</text>
                    ))}
                  </g>
                ) : (
                  <text x={bx + 82} y={cy + 13} fontFamily={FONT} fontSize="38" fontWeight="900" fill="#b9c2ca">?</text>
                )}
              </g>
            )
          })}

          {k >= LAST ? (
            <g>
              <rect x={PH.x} y="580" width={PH.w} height="52" rx="14" fill="#fff4e8" stroke={KEY} strokeWidth="3" />
              <text x="750" y="616" fontFamily={FONT} fontSize="28" fontWeight="900" fill={INK} textAnchor="middle">
                {t(lang, 'M R S G R E N: remember her name, Mrs Gren', 'M R S G R E N : retiens son nom, Mrs Gren')}
              </text>
            </g>
          ) : (
            <text x="750" y="614" fontFamily={FONT} fontSize="24" fontWeight="800" fill={MUTED} textAnchor="middle">
              {k < 7 ? t(lang, 'Say a word for the orange letter, then press.', 'Dis un mot pour la lettre orange, puis clique.') : t(lang, 'Read the seven letters in order.', 'Lis les sept lettres dans l’ordre.')}
            </text>
          )}
        </svg>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn big={big} tone="slate" icon={Undo2} disabled={k === 0} onClick={() => setK((v) => Math.max(0, v - 1))}>{t(lang, 'Back', 'Retour')}</Btn>
        <Btn big={big} tone="orange" icon={ChevronRight} disabled={k === LAST} onClick={() => setK((v) => Math.min(LAST, v + 1))}>
          {k >= 7 ? t(lang, 'Her name', 'Son nom') : t(lang, `Show ${LABELS[k][0]}`, `Voir ${LABELS[k][0]}`)}
        </Btn>
        <Btn big={big} tone="teal" icon={RotateCcw} disabled={k === 0} onClick={() => setK(0)}>{t(lang, 'Start again', 'Recommencer')}</Btn>
      </div>
    </div>
  )
}
