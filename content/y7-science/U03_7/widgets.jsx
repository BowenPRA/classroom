// content/y7-science/U03_7/widgets.jsx
// Widgets for 3.7 Where does energy go? English and French only (the deck sets
// meta.vietnamese: false), so every string goes through t(lang, en, fr).
//
// Two films, both from YouTube and never downloaded (they are not openly
// licensed). Each button plays exactly one segment, so the class can predict
// between them, and pressing a button again replays its segment. The
// timestamps were read off YouTube's storyboard thumbnails
// (frame i of the sprite sheet is at i × the interval), so they are good to
// the interval: ±2 s for the hand print, ±1 s for the lamps. Neither film has
// a caption track, so neither is narrated; the hand print has background music.
//
//   HandPrintClip   "Hand print In Thermal" (Life In Thermal, 3d5Z-PISoQs).
//                   A thermal camera. 1: a warm hand rests on a cold tile and
//                   lifts off (2–12 s, storyboard 2000 ms: hand down at 2–10 s,
//                   print alone at 12 s). Predict: what happens to the warm
//                   print? 2: it spreads out and fades (11–41 s: faint at
//                   40 s, the hand comes back at 42 s).
//   LampsClip       "Comparison of Heat Emitted from Incandescent and Energy
//                   Saving Light Bulbs" (Sbírka fyzikálních pokusů — a Czech
//                   physics-demo collection, CKo7gVjp_8s, 49 s). A
//                   filament lamp and an energy-saving lamp, both 700 lumens,
//                   side by side under a thermal camera, played 4× fast. One
//                   segment, 17–49 s: off at 17 s, on at 18 s, off at 48 s.
//
//   UsefulOrWasted  A game played from the front (full-slide `game` layout).
//                   A card shows a thing and ONE energy it gives out: "a lamp ·
//                   light". Everyone votes at once — LEFT hand useful, RIGHT
//                   hand wasted — then Show colours the energy and gives the
//                   reason. The cards come in pairs on purpose (a lamp's light,
//                   then a lamp's thermal energy; a speaker's sound, then a
//                   motorbike's sound; Mr Bowen's kettle, then his alarm clock):
//                   the same energy is useful in one job and wasted in another,
//                   which is Question 3's whole skill. 13 cards, 7 useful and 6
//                   wasted. A clicker's Right arrow shows, then moves on.
import { useState, useEffect, useCallback } from 'react'
import {
  Hand, Shuffle, Eye, ArrowRight, RotateCcw, Sparkles, Zap, Play,
  Lightbulb, Speaker, Motorbike, CookingPot, Smartphone, Wind, Flame, Fan, Coffee, AlarmClock,
} from 'lucide-react'
import { tr } from '../../../src/lib/lang.js'

const t = (lang, en, fr) => tr(lang, en, null, fr)

const GREEN = '#3f7d1e'
const GREY = '#6b7780'

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
 * THE FILMS
 * ============================================================= */
// No Stage and no extra frame: `showcase` already wraps the media in a padded
// panel. The frame is sized from the HEIGHT it is given and centred.
function Clip({ lang, id, title, segments }) {
  const [part, setPart] = useState(0)
  const [plays, setPlays] = useState(0) // 0 = not pressed yet: no autoplay
  const seg = segments[part]
  const src = `https://www.youtube-nocookie.com/embed/${id}?start=${seg.start}&end=${seg.end}&rel=0&modestbranding=1&playsinline=1${plays ? '&autoplay=1' : ''}`
  // Every press bumps the key, so pressing the same button again replays it.
  const play = (i) => { setPart(i); setPlays((n) => n + 1) }

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <div className="h-full max-w-full rounded-xl overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            key={`${part}-${plays}`}
            className="w-full h-full"
            src={src}
            title={title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        {segments.map((s, i) => (
          <Btn key={s.en} tone={plays && part === i ? 'orange' : 'slate'} icon={Play} onClick={() => play(i)}>{t(lang, s.en, s.fr)}</Btn>
        ))}
      </div>
    </div>
  )
}

export function HandPrintClip({ lang = 'en' }) {
  return (
    <Clip
      lang={lang}
      id="3d5Z-PISoQs"
      title={t(lang, 'A warm hand print on a cold tile, seen with a thermal camera', 'L’empreinte d’une main chaude sur un carreau froid, vue avec une caméra thermique')}
      segments={[
        { start: 2, end: 12, en: '1 · Hand on the tile', fr: '1 · La main sur le carreau' },
        { start: 11, end: 41, en: '2 · Watch the print', fr: '2 · Regarde l’empreinte' },
      ]}
    />
  )
}

export function LampsClip({ lang = 'en' }) {
  return (
    <Clip
      lang={lang}
      id="CKo7gVjp_8s"
      title={t(lang, 'A filament lamp and an energy-saving lamp, seen with a thermal camera', 'Une lampe à filament et une lampe basse consommation, vues avec une caméra thermique')}
      segments={[
        { start: 17, end: 49, en: 'Switch on', fr: 'Allume' },
      ]}
    />
  )
}

/* ============================================================= *
 * USEFUL OR WASTED? — same energy, different job
 * ============================================================= */
// `energy` is the book's store/transfer name (3.5's table), in English on every
// card; the French deck shows the French word beside it.
const ENERGY = {
  light: { en: 'light', fr: 'lumineuse' },
  thermal: { en: 'thermal', fr: 'thermique' },
  sound: { en: 'sound', fr: 'sonore' },
  kinetic: { en: 'kinetic', fr: 'cinétique' },
}

const CARDS = [
  { icon: Lightbulb, en: 'a lamp', fr: 'une lampe', energy: 'light', useful: true,
    why: 'Light is its job.', whyFr: 'Éclairer, c’est son travail.' },
  { icon: Lightbulb, en: 'a lamp', fr: 'une lampe', energy: 'thermal', useful: false,
    why: 'A lamp is not a heater.', whyFr: 'Une lampe n’est pas un radiateur.' },
  { icon: Speaker, en: 'a speaker', fr: 'un haut-parleur', energy: 'sound', useful: true,
    why: 'Sound is its job.', whyFr: 'Faire du son, c’est son travail.' },
  { icon: Motorbike, en: 'a motorbike', fr: 'une moto', energy: 'sound', useful: false,
    why: 'The noise does not move you.', whyFr: 'Le bruit ne te fait pas avancer.' },
  { icon: Motorbike, en: 'a motorbike', fr: 'une moto', energy: 'kinetic', useful: true,
    why: 'Moving you is its job.', whyFr: 'Te transporter, c’est son travail.' },
  { icon: CookingPot, en: 'a rice cooker', fr: 'un cuiseur à riz', energy: 'thermal', useful: true,
    why: 'The heat cooks the rice.', whyFr: 'La chaleur cuit le riz.' },
  { icon: Smartphone, en: 'a phone', fr: 'un téléphone', energy: 'thermal', useful: false,
    why: 'A hot phone wastes its battery.', whyFr: 'Un téléphone chaud gaspille sa batterie.' },
  { icon: Wind, en: 'a hairdryer', fr: 'un sèche-cheveux', energy: 'thermal', useful: true,
    why: 'Hot air dries your hair.', whyFr: 'L’air chaud sèche tes cheveux.' },
  { icon: Wind, en: 'a hairdryer', fr: 'un sèche-cheveux', energy: 'sound', useful: false,
    why: 'Nobody wants the noise.', whyFr: 'Personne ne veut le bruit.' },
  { icon: Flame, en: 'a cooking fire', fr: 'un feu pour cuisiner', energy: 'light', useful: false,
    why: 'Light does not cook the food.', whyFr: 'La lumière ne cuit pas la nourriture.' },
  { icon: Fan, en: 'a fan', fr: 'un ventilateur', energy: 'kinetic', useful: true,
    why: 'It moves the air.', whyFr: 'Il fait bouger l’air.' },
  { icon: Coffee, en: 'Mr Bowen’s kettle', fr: 'la bouilloire de M. Bowen', energy: 'sound', useful: false,
    why: 'He only wants tea.', whyFr: 'Il veut juste du thé.' },
  { icon: AlarmClock, en: 'Mr Bowen’s alarm clock', fr: 'le réveil de M. Bowen', energy: 'sound', useful: true,
    why: 'He has to wake up.', whyFr: 'Il doit se réveiller.' },
]

function VoteSide({ side, label, active, big }) {
  const left = side === 'left'
  const colour = left ? GREEN : GREY
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-3xl border-4 px-4 py-5 transition-all duration-300 shrink-0 ${active === null ? 'opacity-100' : active ? 'opacity-100 scale-105' : 'opacity-25'}`}
      style={{ borderColor: colour, color: colour, backgroundColor: left ? '#e6f2dc' : '#e9edf0' }}
    >
      <Hand className={`${big ? 'w-[clamp(4rem,11vh,8rem)] h-[clamp(4rem,11vh,8rem)]' : 'w-20 h-20'} ${left ? '-scale-x-100' : ''}`} strokeWidth={2.2} />
      <div className={`font-black uppercase tracking-wide ${big ? 'text-[clamp(1.2rem,3vh,2.2rem)]' : 'text-xl'}`}>{label}</div>
    </div>
  )
}

export function UsefulOrWasted({ lang = 'en', isDisplayMode = false }) {
  const [order, setOrder] = useState(() => CARDS.map((_, i) => i))
  const [pos, setPos] = useState(0)
  const [shown, setShown] = useState(false)

  const done = pos >= order.length
  const card = done ? null : CARDS[order[pos]]
  const big = isDisplayMode

  const advance = useCallback(() => {
    if (done) return
    if (!shown) { setShown(true); return }
    setShown(false)
    setPos((p) => p + 1)
  }, [done, shown])

  const deal = () => {
    const next = CARDS.map((_, i) => i)
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[next[i], next[j]] = [next[j], next[i]]
    }
    setOrder(next)
    setPos(0)
    setShown(false)
  }

  // A presenter clicker sends arrow keys: first press shows, second moves on.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); advance() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [advance])

  const verdict = shown ? card.useful : null
  const chip = verdict === null ? '#2b2b2b' : verdict ? GREEN : GREY
  const Icon = card?.icon

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded-xl text-white bg-[#c25e12] shrink-0">
            <Zap className={big ? 'w-7 h-7' : 'w-5 h-5'} strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <div className={`font-black tracking-tight text-slate-800 dark:text-slate-100 leading-none ${big ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
              {t(lang, 'Useful or Wasted?', 'Utile ou perdue\u00a0?')}
            </div>
            <div className={`font-bold text-slate-400 dark:text-slate-500 truncate ${big ? 'text-base' : 'text-xs'}`}>
              {t(lang, 'Left hand: useful. Right hand: wasted. Everyone at once.', 'Main gauche\u00a0: utile. Main droite\u00a0: perdue. Tous ensemble.')}
            </div>
          </div>
        </div>
        {!done && (
          <div className={`font-black text-slate-400 dark:text-slate-500 tabular-nums shrink-0 ${big ? 'text-2xl' : 'text-base'}`}>
            {pos + 1} / {order.length}
          </div>
        )}
      </div>

      {/* Card */}
      <div className="flex-1 min-h-0 flex items-center justify-center gap-[clamp(1rem,3vw,3rem)] p-4">
        {done ? (
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-2xl bg-emerald-500 text-white"><Sparkles className="w-12 h-12" strokeWidth={2} /></div>
            <div className={`font-black text-slate-800 dark:text-slate-100 ${big ? 'text-5xl' : 'text-3xl'}`}>{t(lang, `All ${CARDS.length} done!`, `Les ${CARDS.length} cartes, c\u2019est fini\u00a0!`)}</div>
          </div>
        ) : (
          <>
            <VoteSide side="left" label={t(lang, 'Useful', 'Utile')} active={verdict === null ? null : verdict} big={big} />

            <div className="flex flex-col items-center gap-[clamp(0.75rem,3vh,2rem)] min-w-0 flex-1 max-w-[56rem]">
              <div
                className={`w-full rounded-3xl border-[6px] bg-white flex flex-col items-center justify-center text-center text-[#2b2b2b] shadow-sm px-8 py-5 gap-[clamp(0.5rem,2vh,1.25rem)] ${big ? 'min-h-[clamp(13rem,34vh,22rem)]' : 'min-h-[12rem]'}`}
                style={{ borderColor: verdict === null ? '#cbd5e1' : chip }}
              >
                <div className="flex items-center gap-4">
                  <Icon className={big ? 'w-[clamp(3rem,8vh,5.5rem)] h-[clamp(3rem,8vh,5.5rem)]' : 'w-14 h-14'} strokeWidth={2} />
                  <div className={`font-black leading-tight ${big ? 'text-[clamp(1.8rem,5.2vh,3.4rem)]' : 'text-3xl'}`}>{t(lang, card.en, card.fr)}</div>
                </div>
                <div
                  className={`inline-flex items-baseline gap-3 rounded-2xl border-4 font-black px-6 py-2 transition-colors duration-300 ${big ? 'text-[clamp(1.8rem,5.6vh,3.6rem)]' : 'text-4xl'}`}
                  style={{ borderColor: chip, color: chip, backgroundColor: verdict === null ? '#f8fafc' : verdict ? '#e6f2dc' : '#e9edf0' }}
                >
                  {ENERGY[card.energy].en}
                  {lang === 'fr' && <span className={`font-bold ${big ? 'text-[clamp(1.1rem,3vh,2rem)]' : 'text-xl'}`}>({ENERGY[card.energy].fr})</span>}
                </div>
              </div>
              <div className="min-h-[clamp(4rem,11vh,7rem)] flex flex-col items-center justify-center gap-2 text-center">
                {shown ? (
                  <div className={`font-bold text-slate-600 dark:text-slate-300 ${big ? 'text-[clamp(1.1rem,2.8vh,2rem)]' : 'text-lg'}`}>
                    <span className={`font-black ${card.useful ? 'text-[#3f7d1e] dark:text-[#8fd16a]' : 'text-[#6b7780] dark:text-slate-300'}`}>{card.useful ? t(lang, 'Useful.', 'Utile.') : t(lang, 'Wasted.', 'Perdue.')}</span>{' '}
                    {t(lang, card.why, card.whyFr)}
                  </div>
                ) : (
                  <div className={`font-black text-slate-300 dark:text-slate-700 ${big ? 'text-7xl' : 'text-5xl'}`}>?</div>
                )}
              </div>
            </div>

            <VoteSide side="right" label={t(lang, 'Wasted', 'Perdue')} active={verdict === null ? null : !verdict} big={big} />
          </>
        )}
      </div>

      {/* Controls */}
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap px-4 pb-4 pt-2">
        <Btn tone="teal" icon={Shuffle} onClick={deal}>{t(lang, 'Shuffle', 'Mélanger')}</Btn>
        {!done && (
          <Btn tone="orange" icon={shown ? ArrowRight : Eye} onClick={advance}>
            {shown ? t(lang, 'Next', 'Suivant') : t(lang, 'Show', 'Voir')}
          </Btn>
        )}
        {done && (
          <Btn tone="slate" icon={RotateCcw} onClick={() => { setPos(0); setShown(false) }}>{t(lang, 'Start again', 'Recommencer')}</Btn>
        )}
      </div>
    </div>
  )
}
