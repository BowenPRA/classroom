// content/y7-science/U03_6/bounce.jsx
// THE BOUNCING BALL — the stepper the class answers before each press.
//
// Mr Bowen holds a tennis ball 2 m up and lets go. The next moment is always
// written on the screen ("Next: it hits the floor and squashes"); the class
// says which store will be biggest, then the press moves the ball and the
// bars show it:
//
//   0  in his hand, 2 m up            gravitational potential 100
//   1  halfway down                   gravitational 50, kinetic 50
//   2  just before the floor          kinetic 100
//   3  squashed on the floor: bang!   elastic potential 80, sound and heat 20
//   4  on the way back up             kinetic 27, gravitational 28, lost 45
//   5  the top of the bounce: 1.1 m   gravitational 55, sound and heat 45
//
// A real tennis ball bounces to just over half the height it fell from (the
// rules of tennis want 53–58%), so the energy that went to sound and heat is
// shown as about 45%. The starter's answer — and why not 2 m — is the next
// slide.
import { useState } from 'react'
import { Undo2, RotateCcw, ChevronRight } from 'lucide-react'
import { tr } from '../../../src/lib/lang.js'
import { Btn } from '../U03_models/ui.jsx'
import { MrBowen } from '../U03_coffee/dating.jsx'
import { INK, MUTED, FONT, tennisBall } from './art.js'

const t = (lang, en, fr) => tr(lang, en, null, fr)
const RULE = '#d5dbe1', BLUE = '#1a5fa8'

const STORES = [
  { key: 'g', en: 'gravitational potential', fr: 'potentielle de pesanteur', color: '#0087a8' },
  { key: 'k', en: 'kinetic', fr: 'cinétique', color: '#1a5fa8' },
  { key: 'e', en: 'elastic potential', fr: 'potentielle élastique', color: '#5c2483' },
  { key: 's', en: 'sound and heat', fr: 'son et chaleur', color: '#d83a2e' },
]
// h = the ball's height in metres; squash = on the floor
const STAGES = [
  { h: 2, g: 100, k: 0, e: 0, s: 0, en: 'Mr Bowen holds the ball 2 m up.', fr: 'M. Bowen tient la balle à 2 m.' },
  { h: 1, g: 50, k: 50, e: 0, s: 0, en: 'It falls. Halfway down.', fr: 'Elle tombe. À mi-hauteur.' },
  { h: 0.02, g: 0, k: 100, e: 0, s: 0, en: 'Just before it hits the floor.', fr: 'Juste avant le sol.' },
  { h: 0, squash: true, g: 0, k: 0, e: 80, s: 20, en: 'It squashes on the floor. Bang!', fr: 'Elle s’écrase sur le sol. Bang !' },
  { h: 0.56, g: 28, k: 27, e: 0, s: 45, en: 'It goes back up.', fr: 'Elle remonte.' },
  { h: 1.1, g: 55, k: 0, e: 0, s: 45, en: 'The top of the bounce: 1.1 m.', fr: 'Le haut du rebond : 1.1 m.' },
]
const NEXT = [
  ['He lets go. Halfway down…', 'Il lâche. À mi-hauteur…'],
  ['Just before it hits the floor…', 'Juste avant le sol…'],
  ['It hits the floor and squashes…', 'Elle touche le sol et s’écrase…'],
  ['It goes back up…', 'Elle remonte…'],
  ['The top of the bounce…', 'Le haut du rebond…'],
]

const FLOOR = 470
const M = 180 // pixels per metre
const BALL_X = 360
const R = 24
const yOf = (h) => FLOOR - R - h * M
const BAR = { x: 820, w: 600, y0: 152, gap: 86, h: 40 }

export function BouncingBall({ lang = 'en', isDisplayMode = false }) {
  const [k, setK] = useState(0)
  const big = isDisplayMode
  const fr = lang === 'fr'
  const st = STAGES[k]
  const last = STAGES.length - 1
  const biggest = STORES.reduce((a, b) => (st[b.key] > st[a.key] ? b : a), STORES[0]).key

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1500 520" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1500" height="520" rx="16" fill="#ffffff" />

          {/* the scene: Mr Bowen, the ball, a height scale */}
          <line x1="40" y1={FLOOR} x2="548" y2={FLOOR} stroke={INK} strokeWidth="4" />
          <MrBowen x={190} y={FLOOR - 268 * 1.1} scale={1.1} />
          <path d={`M 226 ${FLOOR - 196} L 300 ${yOf(2) + 30} L 334 ${yOf(2) + 6}`} fill="none" stroke={BLUE} strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" />
          {[0, 0.5, 1, 1.5, 2].map((m) => (
            <g key={m}>
              <line x1="560" y1={FLOOR - m * M} x2="584" y2={FLOOR - m * M} stroke={INK} strokeWidth="3" />
              <text x="596" y={FLOOR - m * M + 8} fontFamily={FONT} fontSize="22" fontWeight="700" fill={MUTED}>{m} m</text>
            </g>
          ))}
          <line x1="572" y1={FLOOR} x2="572" y2={FLOOR - 2 * M} stroke={INK} strokeWidth="3" />
          <line x1={BALL_X - 40} y1={FLOOR - 2 * M} x2="560" y2={FLOOR - 2 * M} stroke="#9aa7b4" strokeWidth="3" strokeDasharray="8 8" />
          {k === last && <line x1={BALL_X - 40} y1={FLOOR - 1.1 * M} x2="560" y2={FLOOR - 1.1 * M} stroke="#d83a2e" strokeWidth="3" strokeDasharray="8 8" />}
          {st.squash ? (
            <g>
              <ellipse cx={BALL_X} cy={FLOOR - 13} rx="34" ry="13" fill="#d7e84a" stroke={INK} strokeWidth="3" />
              <path d={`M ${BALL_X - 70} ${FLOOR - 40} l 18 12 M ${BALL_X - 60} ${FLOOR - 64} l 18 22 M ${BALL_X + 70} ${FLOOR - 40} l -18 12 M ${BALL_X + 60} ${FLOOR - 64} l -18 22`} stroke="#c25e12" strokeWidth="5" strokeLinecap="round" />
            </g>
          ) : (
            <g dangerouslySetInnerHTML={{ __html: tennisBall(BALL_X, yOf(st.h), R) }} />
          )}
          {(k === 1 || k === 2) && <path d={`M ${BALL_X} ${yOf(st.h) - 40} v -60`} stroke="#9aa7b4" strokeWidth="5" strokeLinecap="round" strokeDasharray="10 8" />}
          {k === 4 && <path d={`M ${BALL_X} ${yOf(st.h) + 40} v 60`} stroke="#9aa7b4" strokeWidth="5" strokeLinecap="round" strokeDasharray="10 8" />}

          {/* now, and next */}
          <text x="40" y="50" fontFamily={FONT} fontSize="27" fontWeight="900" fill={INK}>{fr ? st.fr : st.en}</text>
          {k < last ? (
            <g>
              <rect x="652" y="16" width="824" height="56" rx="12" fill="#e9f1fa" stroke={BLUE} strokeWidth="2.5" />
              <text x="672" y="53" fontFamily={FONT} fontSize="24" fontWeight="800" fill={BLUE}>
                {t(lang, 'Next: ', 'Ensuite : ')}{fr ? NEXT[k][1] : NEXT[k][0]}
              </text>
            </g>
          ) : (
            <g>
              <rect x="652" y="16" width="824" height="56" rx="12" fill="#fdecee" stroke="#d83a2e" strokeWidth="2.5" />
              <text x="672" y="53" fontFamily={FONT} fontSize="24" fontWeight="800" fill="#d83a2e">{t(lang, 'Not 2 m! Where did the rest of the energy go?', 'Pas 2 m ! Où est passé le reste de l’énergie ?')}</text>
            </g>
          )}

          {/* the four stores */}
          {STORES.map((s, i) => {
            const y = BAR.y0 + i * BAR.gap
            const on = s.key === biggest
            return (
              <g key={s.key}>
                <text x={BAR.x} y={y - 12} fontFamily={FONT} fontSize="24" fontWeight={on ? 900 : 700} fill={on ? s.color : MUTED}>
                  {s.en}{fr && <tspan dx="14" fontSize="19" fontWeight="700" fill={MUTED}>{s.fr}</tspan>}
                </text>
                <rect x={BAR.x} y={y} width={BAR.w} height={BAR.h} rx="8" fill="#f1f5f9" stroke={on ? s.color : RULE} strokeWidth={on ? 3 : 1.5} />
                <rect x={BAR.x} y={y} width={BAR.w} height={BAR.h} rx="8" fill={s.color}
                  style={{ transform: `scaleX(${st[s.key] / 100})`, transformOrigin: `${BAR.x}px 0px`, transition: 'transform 0.8s cubic-bezier(.4,0,.2,1)' }} />
              </g>
            )
          })}
          <text x={BAR.x} y="498" fontFamily={FONT} fontSize="20" fontWeight="700" fill={MUTED}>{t(lang, 'The ball’s energy, in its stores', 'L’énergie de la balle, dans ses réserves')}</text>
        </svg>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn big={big} tone="slate" icon={Undo2} disabled={k === 0} onClick={() => setK((v) => Math.max(0, v - 1))}>{t(lang, 'Back', 'Retour')}</Btn>
        <Btn big={big} tone="orange" icon={ChevronRight} disabled={k === last} onClick={() => setK((v) => Math.min(last, v + 1))}>{t(lang, 'Next', 'Suivant')}</Btn>
        <Btn big={big} tone="teal" icon={RotateCcw} disabled={k === 0} onClick={() => setK(0)}>{t(lang, 'Start again', 'Recommencer')}</Btn>
      </div>
    </div>
  )
}
