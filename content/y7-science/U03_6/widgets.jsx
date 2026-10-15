// content/y7-science/U03_6/widgets.jsx
// Widgets for 3.6 Changes in energy. English and French only (the deck sets
// meta.vietnamese: false), so every string goes through t(lang, en, fr).
// Each one does a thing a still slide cannot:
//
//   PowerChain   The book's gas power station (p.112–113), one store at a
//   DamChain     time. The four photos are on screen from the start; the
//                energy names are not. The class SAYS the next store, then
//                Mr Bowen presses Next: the box fills in, the arrow appears and
//                the book's sentence for that step is written underneath.
//                DamChain is the same stepper for Vietnam's Hòa Bình dam, done
//                by the class on whiteboards first ("your turn").
//
//   PageTurner   Joseph Herscher's chain-reaction machine "The Page Turner"
//                (Joseph's Machines, YouTube GOMIBdM6N7Q). Copyrighted, so it
//                is never downloaded: a youtube-nocookie embed, one button per
//                part, and the class writes the energy change on whiteboards
//                after each one before Answer is pressed. Timestamps were read
//                off the player's own currentTime while screenshotting the
//                embed every 0.5–1 s (14 Oct 2026):
//                  1 Gas      44–59 s  balls turn the gas dial up; the blue
//                                      flame boils the red water (54–58 s)
//                  2 Book     64–72 s  a ball knocks a book off the shelf
//                                      (falls 69.7–71.6 s)
//                  3 Hamster  86–106 s the hamster walks, its cage tips, a roll
//                                      of tape rolls down the slanted table and
//                                      turns the page (104–105 s)
//                  Whole film  0–114 s (credits follow)
//
// The chain stages are one wide SVG (1120×440) with a white plate, so their
// text scales with the panel and reads on a light or dark slide; only the
// buttons are HTML. Energy names stay in English (they are the words in the
// book); in French a small French name sits under each one.
import { useState } from 'react'
import { ArrowRight, Undo2, RotateCcw, Eye, Flame, BookOpen, Footprints, Clapperboard } from 'lucide-react'
import { tr } from '../../../src/lib/lang.js'
import gaspipes from './images/gaspipes.jpg'
import flame from './images/flame.jpg'
import turbine from './images/turbine.jpg'
import pylons from './images/pylons.jpg'
import hoabinh from './images/hoabinh.jpg'
import generator from './images/generator.jpg'
import hbwires from './images/hbwires.jpg'

const t = (lang, en, fr) => tr(lang, en, null, fr)

const INK = '#2b2b2b'
const KEY = '#c25e12'
const MUTED = '#5b6770'
const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

function Btn({ onClick, disabled, tone = 'teal', icon: Icon, children, big = false }) {
  const tones = {
    teal: 'bg-[#0087a8] border-[#00697f]',
    orange: 'bg-[#c25e12] border-[#a04a0e]',
    slate: 'bg-slate-500 border-slate-700',
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 rounded-xl font-black uppercase tracking-wide text-white border-b-4 active:border-b-0 active:translate-y-1 transition-all disabled:opacity-35 disabled:pointer-events-none ${big ? 'px-6 py-3 text-[clamp(0.9rem,1.4vw,1.25rem)]' : 'px-4 py-2 text-sm lg:px-6 lg:py-2.5 lg:text-base'} ${tones[tone]}`}
    >
      {Icon && <Icon className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={3} />}
      {children}
    </button>
  )
}

/* ============================================================= *
 * ENERGY CHAIN — say the next store, then press
 * ============================================================= */
// `name` is one or two English lines; `fr` is the French name under it.
const GAS = [
  {
    img: gaspipes, en: 'natural gas', capFr: 'gaz naturel', name: ['chemical'], fr: 'chimique',
    say: 'Natural gas is a store of chemical energy.',
    sayFr: 'Le gaz naturel stocke de l’énergie chimique.',
  },
  {
    img: flame, en: 'it burns', capFr: 'il brûle', name: ['thermal'], fr: 'thermique',
    say: 'Burning changes chemical energy to thermal energy.',
    sayFr: 'La combustion change l’énergie chimique en énergie thermique.',
  },
  {
    img: turbine, en: 'it spins', capFr: 'ça tourne', name: ['kinetic'], fr: 'cinétique',
    say: 'Thermal energy changes to kinetic energy: the generators spin.',
    sayFr: 'L’énergie thermique devient cinétique : les générateurs tournent.',
  },
  {
    img: pylons, en: 'wires', capFr: 'les câbles', name: ['electrical'], fr: 'électrique',
    say: 'The generators change kinetic energy to electrical energy.',
    sayFr: 'Les générateurs changent l’énergie cinétique en électrique.',
  },
]

const DAM = [
  {
    img: hoabinh, en: 'water held high', capFr: 'l’eau retenue en haut', name: ['gravitational', 'potential'], fr: 'potentielle de pesanteur',
    say: 'Water held high behind the dam: gravitational potential energy.',
    sayFr: 'L’eau retenue en haut : énergie potentielle de pesanteur.',
  },
  {
    img: generator, en: 'the generators spin', capFr: 'les générateurs tournent', name: ['kinetic'], fr: 'cinétique',
    say: 'The water falls and spins the generators: kinetic energy.',
    sayFr: 'L’eau tombe et fait tourner les générateurs : énergie cinétique.',
  },
  {
    img: hbwires, en: 'wires', capFr: 'les câbles', name: ['electrical'], fr: 'électrique',
    say: 'The generators change kinetic energy to electrical energy.',
    sayFr: 'Les générateurs changent l’énergie cinétique en électrique.',
  },
]

const W = 1120
const GAP = 60
const PH_Y = 16
const PH_H = 178
const BOX_Y = 246
const BOX_H = 96

function EnergyChain({ lang = 'en', stages, id }) {
  const [shown, setShown] = useState(0) // how many energy boxes are filled in
  const n = stages.length
  const cw = (W - 32 - (n - 1) * GAP) / n
  const x0 = (i) => 16 + i * (cw + GAP)
  const fr = lang === 'fr'
  const last = shown > 0 ? stages[shown - 1] : null

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox={`0 0 ${W} 440`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width={W} height="440" rx="14" fill="#ffffff" />
          {stages.map((s, i) => {
            const x = x0(i)
            const cx = x + cw / 2
            const on = i < shown
            const newest = i === shown - 1
            const two = s.name.length === 2
            return (
              <g key={s.en}>
                <defs>
                  <clipPath id={`${id}-clip-${i}`}><rect x={x} y={PH_Y} width={cw} height={PH_H} rx="12" /></clipPath>
                </defs>
                <image href={s.img} x={x} y={PH_Y} width={cw} height={PH_H} preserveAspectRatio="xMidYMid slice" clipPath={`url(#${id}-clip-${i})`} />
                <text x={cx} y={PH_Y + PH_H + 32} fontFamily={FONT} fontSize="22" fontWeight="bold" fill={MUTED} textAnchor="middle">{t(lang, s.en, s.capFr)}</text>

                {/* the energy box: a dashed "?" until it is shown */}
                <rect x={x + 6} y={BOX_Y} width={cw - 12} height={BOX_H} rx="8"
                  fill={on ? (newest ? '#fdf1e3' : '#ffffff') : '#f1f4f6'}
                  stroke={on ? (newest ? KEY : INK) : '#b8c1ca'} strokeWidth={on ? 4 : 2.5} strokeDasharray={on ? undefined : '8 7'} />
                {on ? (
                  <>
                    {s.name.map((line, k) => (
                      <text key={line} x={cx} y={BOX_Y + (two ? (fr ? 30 : 40) + k * 28 : (fr ? 46 : 60))} fontFamily={FONT} fontSize={two ? 26 : 32} fontWeight="bold" fill={INK} textAnchor="middle">{line}</text>
                    ))}
                    {fr && <text x={cx} y={BOX_Y + (two ? 86 : 80)} fontFamily={FONT} fontSize="18" fill={MUTED} textAnchor="middle">{s.fr}</text>}
                  </>
                ) : (
                  <text x={cx} y={BOX_Y + 62} fontFamily={FONT} fontSize="44" fontWeight="bold" fill="#b8c1ca" textAnchor="middle">?</text>
                )}

                {/* the arrow to this box appears with it */}
                {i > 0 && on && (
                  <g>
                    <line x1={x - GAP + 2} y1={BOX_Y + BOX_H / 2} x2={x - 18} y2={BOX_Y + BOX_H / 2} stroke={INK} strokeWidth="5" strokeLinecap="round" />
                    <path d={`M ${x - 2} ${BOX_Y + BOX_H / 2} L ${x - 20} ${BOX_Y + BOX_H / 2 - 11} L ${x - 20} ${BOX_Y + BOX_H / 2 + 11} Z`} fill={INK} />
                  </g>
                )}
              </g>
            )
          })}

          {/* the book's sentence for the newest step */}
          {last && (
            <text x={W / 2} y="400" fontFamily={FONT} fontSize="28" fontWeight="bold" fill={KEY} textAnchor="middle">{t(lang, last.say, last.sayFr)}</text>
          )}
        </svg>
      </div>

      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn tone="slate" icon={Undo2} disabled={shown === 0} onClick={() => setShown((v) => v - 1)}>{t(lang, 'Back', 'Retour')}</Btn>
        <Btn tone="orange" icon={ArrowRight} disabled={shown === n} onClick={() => setShown((v) => v + 1)}>{t(lang, 'Next', 'Suivant')}</Btn>
        <Btn tone="slate" icon={RotateCcw} disabled={shown === 0} onClick={() => setShown(0)}>{t(lang, 'Start again', 'Recommencer')}</Btn>
      </div>
    </div>
  )
}

export function PowerChain({ lang = 'en' }) {
  return <EnergyChain lang={lang} stages={GAS} id="u36-gas" />
}

export function DamChain({ lang = 'en' }) {
  return <EnergyChain lang={lang} stages={DAM} id="u36-dam" />
}

/* ============================================================= *
 * THE PAGE TURNER — pause, name the change, then Answer
 * ============================================================= */
const FILM_ID = 'GOMIBdM6N7Q'
const PARTS = [
  {
    key: 'gas', start: 44, end: 59, icon: Flame, en: '1 · Gas', fr: '1 · Le gaz',
    q: 'The gas burner', qFr: 'Le brûleur à gaz',
    a: 'chemical → thermal', aFr: 'chimique → thermique',
  },
  {
    key: 'book', start: 64, end: 72, icon: BookOpen, en: '2 · Book', fr: '2 · Le livre',
    q: 'The book falls', qFr: 'Le livre tombe',
    a: 'gravitational potential → kinetic', aFr: 'potentielle de pesanteur → cinétique',
  },
  {
    key: 'hamster', start: 86, end: 106, icon: Footprints, en: '3 · Hamster', fr: '3 · Le hamster',
    q: 'The hamster walks', qFr: 'Le hamster marche',
    a: 'chemical → kinetic', aFr: 'chimique → cinétique',
  },
  {
    key: 'all', start: 0, end: 114, icon: Clapperboard, en: 'Whole film', fr: 'Tout le film',
    q: 'How many changes can you see?', qFr: 'Combien de changements vois-tu ?',
    a: null, aFr: null,
  },
]

export function PageTurner({ lang = 'en', isDisplayMode = false }) {
  const [part, setPart] = useState(0)
  const [go, setGo] = useState(false) // autoplay only after a button press
  const [open, setOpen] = useState(false)
  const p = PARTS[part]
  const src = `https://www.youtube-nocookie.com/embed/${FILM_ID}?start=${p.start}&end=${p.end}&rel=0&modestbranding=1&playsinline=1${go ? '&autoplay=1' : ''}`
  const play = (i) => { setPart(i); setGo(true); setOpen(false) }
  const big = isDisplayMode

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 flex items-stretch justify-center gap-4">
        <div className="h-full max-w-[64%] rounded-xl overflow-hidden bg-black shrink-0" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            key={`${p.key}-${go}`}
            className="w-full h-full"
            src={src}
            title={t(lang, 'The Page Turner, a chain-reaction machine by Joseph Herscher', 'The Page Turner, une machine en réaction en chaîne de Joseph Herscher')}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-white border-2 border-slate-200 px-4 py-3 text-center">
          <div className={`font-black text-[#2b2b2b] leading-tight ${big ? 'text-[clamp(1.2rem,2.2vw,2.1rem)]' : 'text-lg lg:text-2xl'}`}>{t(lang, p.q, p.qFr)}</div>
          {p.a ? (
            open ? (
              <div className={`font-black text-[#c25e12] leading-tight ${big ? 'text-[clamp(1.3rem,2.6vw,2.5rem)]' : 'text-xl lg:text-3xl'}`}>
                {p.a}
                {lang === 'fr' && <div className={`font-bold text-slate-500 mt-1 ${big ? 'text-[clamp(0.9rem,1.5vw,1.4rem)]' : 'text-sm lg:text-base'}`}>({p.aFr})</div>}
              </div>
            ) : (
              <>
                <div className={`font-bold text-slate-500 ${big ? 'text-[clamp(0.95rem,1.6vw,1.5rem)]' : 'text-sm lg:text-lg'}`}>{t(lang, 'What energy change? Write it.', 'Quel changement d’énergie ? Écris-le.')}</div>
                <Btn tone="teal" icon={Eye} big={big} onClick={() => setOpen(true)}>{t(lang, 'Answer', 'Réponse')}</Btn>
              </>
            )
          ) : (
            <div className={`font-bold text-slate-500 ${big ? 'text-[clamp(0.95rem,1.6vw,1.5rem)]' : 'text-sm lg:text-lg'}`}>{t(lang, 'Watch it all, just for fun.', 'Regarde tout, pour le plaisir.')}</div>
          )}
        </div>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        {PARTS.map((q, i) => (
          <Btn key={q.key} tone={part === i && go ? 'orange' : 'slate'} icon={q.icon} onClick={() => play(i)}>{t(lang, q.en, q.fr)}</Btn>
        ))}
      </div>
    </div>
  )
}
