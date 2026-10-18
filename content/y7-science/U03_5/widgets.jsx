// content/y7-science/U03_5/widgets.jsx
// Widgets for 3.5 Energy. English and French only (the deck sets
// meta.vietnamese: false), so every string goes through t(lang, en, fr).
// Each one does a thing a still slide cannot:
//
//   LaunchClip   The last space shuttle launch, Atlantis STS-135, 8 July 2011:
//                33 seconds of public-domain NASA film WITH ITS SOUND, saved in
//                the unit so it plays on school wifi or none. The class finds as
//                many energy stores and transfers as it can — the roar is the
//                sound, the flames the light and the thermal, the orange tank
//                the fuel. Trimmed from NASA Kennedy's file at 1.0–33.6 s:
//                0–3 s the shuttle on the pad, 3–11 s the engines start,
//                11–21 s lift-off, 21–29 s climbing, 29–33 s the trail seen
//                from far away (checked frame by frame; see CREDITS.json).
//
//   DanBauClip   12 seconds of a đàn bầu, for slide 13 (sound): the photo,
//                and a Listen button that always plays from the start. The
//                source and how the segment was checked are above it.
//
//   ActItOut     The deck's "way to remember" (the book's question on p.107),
//                played from the front. One card per energy, eight in all. A
//                thing appears; the class does that energy's action from
//                slides 7–14 all at once and says its name; Show names it and
//                says store or transfer. A clicker's Right arrow shows, then
//                moves on. Full-slide `game` layout.
import { useState, useEffect, useCallback, useRef } from 'react'
import { Eye, ArrowRight, Shuffle, Sparkles, RotateCcw, Zap, Play, Volume2 } from 'lucide-react'
import { tr } from '../../../src/lib/lang.js'
import launch from './images/launch.webm'
import danbauSound from './images/danbau.webm'
import danbauPhoto from './images/danbau.jpg'

const t = (lang, en, fr) => tr(lang, en, null, fr)

const KEY = '#c25e12'
const BLUE = '#1a5fa8'

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
 * THE FILM
 * ============================================================= */
// No Stage and no extra frame: `split` already wraps the media in a padded
// panel. In a split the panel is narrower than 16:9 wants, so the video is
// left at its own size (width/height give it the ratio before it loads) and
// shrunk by max-width AND max-height together, which keeps the ratio — the
// controls then sit on the picture, not on black bars.
export function LaunchClip({ lang = 'en' }) {
  return (
    <div className="w-full h-full flex items-center justify-center select-none">
      <video
        className="block max-w-full max-h-full rounded-xl bg-black"
        style={{ width: 'auto', height: 'auto' }}
        width={1280}
        height={720}
        src={launch}
        controls
        playsInline
        preload="metadata"
        aria-label={t(lang, 'The space shuttle Atlantis launches, 8 July 2011 (NASA)', 'Le décollage de la navette spatiale Atlantis, 8 juillet 2011 (NASA)')}
      />
    </div>
  )
}

/* ============================================================= *
 * THE ĐÀN BẦU — slide 13, sound
 * ============================================================= */
// "Lên ngàn", Nguyễn Thanh Tùng, from Wikimedia Commons (CC BY 3.0; "a special
// composition for monochord by Nguyen Thanh Tung, a noted Vietnamese monochord
// performer"). Trimmed to 1.7–13.4 s of the 229 s file. Checked by analysis,
// not by ear: one melodic line (one or two strong spectral peaks, nearly pure
// tones, as the đàn bầu's harmonics are), each note plucked and then decaying
// slowly, and the pitch sliding after the pluck — 705 → 797 Hz at 2–4.3 s, a
// vibrato around 620 Hz at 11–13 s — which is what the đàn bầu's rod does.
// The button always restarts the clip, so a second press replays it.
export function DanBauClip({ lang = 'en' }) {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const play = () => {
    const a = audio.current
    if (!a) return
    a.currentTime = 0
    a.play().catch(() => { /* a browser that blocks sound: the button simply does nothing */ })
  }
  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 flex items-center justify-center">
        <img src={danbauPhoto} alt={t(lang, 'A man playing the đàn bầu', 'Un homme joue du đàn bầu')} className="block max-w-full max-h-full rounded-xl object-contain" draggable={false} />
      </div>
      <div className="shrink-0 flex items-center justify-center">
        <Btn tone={playing ? 'teal' : 'orange'} icon={playing ? Volume2 : Play} onClick={play}>
          {t(lang, 'Listen: 12 seconds', 'Écoute : 12 secondes')}
        </Btn>
      </div>
      <audio ref={audio} src={danbauSound} preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
    </div>
  )
}

/* ============================================================= *
 * ACT IT OUT — name the energy with your body
 * ============================================================= */
/// The eight, with the action each one was given on slides 7–14. The class
// invents its own action for chemical (slide 8) and light (slide 14), so the
// game names those as "your class's action".
const ENERGY = {
  kinetic: { en: 'kinetic', fr: 'énergie cinétique', store: 'store', act: 'Run on the spot', actFr: 'Cours sur place' },
  chemical: { en: 'chemical', fr: 'énergie chimique', store: 'store', act: 'Your class’s action', actFr: 'Le geste de ta classe' },
  thermal: { en: 'thermal', fr: 'énergie thermique', store: 'both', act: 'Rub your hands', actFr: 'Frotte tes mains' },
  elastic: { en: 'elastic potential', fr: 'énergie potentielle élastique', store: 'store', act: 'Stretch your hands apart', actFr: 'Écarte les mains' },
  gravitational: { en: 'gravitational potential', fr: 'énergie potentielle de pesanteur', store: 'store', act: 'Lift both hands up high', actFr: 'Lève les deux mains bien haut' },
  electrical: { en: 'electrical', fr: 'énergie électrique', store: 'transfer', act: 'Draw a zigzag in the air', actFr: 'Dessine un zigzag dans l’air' },
  sound: { en: 'sound', fr: 'énergie sonore', store: 'transfer', act: 'Hum with a hand on your throat', actFr: 'Fredonne, la main sur la gorge' },
  light: { en: 'light', fr: 'énergie lumineuse', store: 'transfer', act: 'Your class’s action', actFr: 'Le geste de ta classe' },
}

// One card per energy, so eight cards fit the three minutes the plan gives.
const CARDS = [
  { en: 'A cup of hot tea', fr: 'Une tasse de thé chaud', e: 'thermal' },
  { en: 'A coconut high up in a tree', fr: 'Une noix de coco en haut d’un arbre', e: 'gravitational' },
  { en: 'A firefly at night', fr: 'Une luciole la nuit', e: 'light' },
  { en: 'A dog running after a ball', fr: 'Un chien qui court après une balle', e: 'kinetic' },
  { en: 'A drum when you hit it', fr: 'Un tambour quand on le frappe', e: 'sound' },
  { en: 'A trampoline when you land on it', fr: 'Un trampoline quand tu atterris dessus', e: 'elastic' },
  { en: 'A bánh mì', fr: 'Un bánh mì', e: 'chemical' },
  { en: 'Current in a phone charger cable', fr: 'Le courant dans un câble de chargeur', e: 'electrical' },
]

const storeWord = (lang, s) =>
  s === 'store' ? t(lang, 'a store', 'un stock (store)')
    : s === 'transfer' ? t(lang, 'a transfer', 'un transfert (transfer)')
      : t(lang, 'a store or a transfer', 'un stock ou un transfert')

export function ActItOut({ lang = 'en', isDisplayMode = false }) {
  const [order, setOrder] = useState(() => CARDS.map((_, i) => i))
  const [pos, setPos] = useState(0)
  const [shown, setShown] = useState(false)

  const done = pos >= order.length
  const card = done ? null : CARDS[order[pos]]
  const energy = card ? ENERGY[card.e] : null
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

  const colour = energy && energy.store === 'transfer' ? BLUE : KEY

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
              {t(lang, 'Act It Out', 'Mime-le')}
            </div>
            <div className={`font-bold text-slate-400 dark:text-slate-500 truncate ${big ? 'text-base' : 'text-xs'}`}>
              {t(lang, 'Everyone at once: do the action, say the word.', 'Tous ensemble : fais le geste, dis le mot.')}
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
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-[clamp(0.75rem,3vh,2rem)] p-4">
        {done ? (
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-2xl bg-emerald-500 text-white"><Sparkles className="w-12 h-12" strokeWidth={2} /></div>
            <div className={`font-black text-slate-800 dark:text-slate-100 ${big ? 'text-5xl' : 'text-3xl'}`}>{t(lang, 'All 8 done!', 'Les 8 cartes, c’est fini !')}</div>
          </div>
        ) : (
          <>
            <div className={`w-full max-w-[60rem] rounded-3xl border-[6px] bg-white flex flex-col items-center justify-center text-center font-black text-[#2b2b2b] leading-snug shadow-sm px-8 py-5 ${shown ? '' : 'border-slate-300'} ${big ? 'min-h-[clamp(9rem,24vh,16rem)] text-[clamp(2rem,6vh,3.8rem)]' : 'min-h-[9rem] text-3xl sm:text-4xl'}`}
              style={shown ? { borderColor: colour } : undefined}>
              <div>{card.en}</div>
              {lang === 'fr' && (
                <div className={`mt-2 font-bold text-slate-500 ${big ? 'text-[clamp(1.1rem,2.8vh,2rem)]' : 'text-lg'}`}>({card.fr})</div>
              )}
            </div>
            <div className={`flex flex-col items-center justify-center gap-1 text-center ${big ? 'min-h-[clamp(7rem,19vh,12rem)]' : 'min-h-[7.5rem]'}`}>
              {shown ? (
                <>
                  <div className={`font-black ${energy.store === 'transfer' ? 'text-[#1a5fa8] dark:text-[#7fb2ec]' : 'text-[#c25e12] dark:text-[#f39a5a]'} ${big ? 'text-[clamp(2.2rem,6.5vh,4.2rem)]' : 'text-4xl sm:text-5xl'}`}>
                    {energy.en}
                    {lang === 'fr' && <span className={`ml-3 font-bold text-slate-500 dark:text-slate-400 ${big ? 'text-[clamp(1.1rem,2.8vh,2rem)]' : 'text-xl'}`}>({energy.fr})</span>}
                  </div>
                  <div className={`font-bold text-slate-600 dark:text-slate-300 ${big ? 'text-[clamp(1.1rem,2.8vh,2rem)]' : 'text-lg'}`}>
                    {storeWord(lang, energy.store)} · {t(lang, energy.act, energy.actFr)}
                  </div>
                </>
              ) : (
                <div className={`font-black text-slate-300 dark:text-slate-700 ${big ? 'text-7xl' : 'text-5xl'}`}>?</div>
              )}
            </div>
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
