// content/y7-science/U03_4/widgets.jsx
// The one widget for 3.4 Tides. English and French only (the deck sets
// meta.vietnamese: false), so its label goes through t(lang, en, fr).
//
//   CausewayClip  The road to Holy Island (Lindisfarne), England, as the tide
//                 comes in over it — a CC BY 3.0 time-lapse from Commons,
//                 cropped and saved in the unit as a silent loop, so it plays
//                 on school wifi or none. 23 s; the file does not record how
//                 many hours it covers, so nothing on the slide claims a span.
//
// A TideTurn widget (the Earth turning under the two bulges, drawing the
// harbour's depth graph) was cut at review: it was the second of three
// "turn the Earth" moments (the class turning on slide 15, the card model on
// slide 21), and Part 2 needed the minutes.
import { tr } from '../../../src/lib/lang.js'
import causeway from './images/holyisland.webm'

const t = (lang, en, fr) => tr(lang, en, null, fr)

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
