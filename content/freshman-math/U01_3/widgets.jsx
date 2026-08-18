// content/freshman-math/U01_3/widgets.jsx
// One widget, used twice, and it exists for exactly one reason: the circle has
// to arrive AFTER the cities, in the same place, while nobody blinks.
//
// A static slide can show a map with a circle on it. What it cannot do is let
// the class look at three unremarkable dots, decide there is nothing there, and
// then watch a circle sweep through all three without the picture moving. Two
// slides flipping between "no circle" and "circle" throws that away — the eye
// spends the moment re-finding the cities instead of watching the sweep. So the
// circle is drawn with a stroke-dashoffset transition on the same image: it
// paints itself around, through all three, in a second and a bit.
//
// That is the whole widget. One button. No sliders, no dragging, nothing to
// fiddle with, and the map is never hidden behind the interaction.
//
// GEOMETRY — the numbers below are not eyeballed, and must not be re-eyeballed.
// images/europe-map.png is an equirectangular (equidistant cylindrical) crop at
// a uniform 30 pixels per degree in BOTH directions, covering 12W-30E and
// 36N-64N. So for any city:
//     x = (longitude + 12) * 30      y = (64 - latitude) * 30
// and because the scale is the same on both axes, a circumcircle computed in
// these pixels is a true circle on the picture rather than an ellipse. The
// centre/radius values are the exact circumcentres of the three plotted points
// — see images/CREDITS.json.
//
// The course is flagged bilingual:false in content/courses.js, so this widget
// takes no `lang` prop and has no …Vn twins.
import { useState } from 'react'

import mapImg from './images/europe-map.png'

const RED = '#c8102e'
const BLUE = '#1a5fa8'

// The map crop, in the pixel space every coordinate below is written in.
const W = 1260
const H = 840

const TRIO_ONE = {
  tone: RED,
  cities: [
    { name: 'London', x: 356.2, y: 374.8, anchor: 'end', lx: 336, ly: 366 },
    { name: 'Rome', x: 734.9, y: 662.9, anchor: 'start', lx: 756, ly: 676 },
    { name: 'Warsaw', x: 990.4, y: 353.1, anchor: 'start', lx: 1012, ly: 345 },
  ],
  circle: { cx: 672.9, cy: 351.5, r: 317.5 },
  button: 'Draw the circle',
}

const TRIO_TWO = {
  tone: BLUE,
  cities: [
    { name: 'Paris', x: 430.6, y: 454.3, anchor: 'end', lx: 410, ly: 446 },
    { name: 'Berlin', x: 762.2, y: 344.4, anchor: 'start', lx: 784, ly: 336 },
    { name: 'Rome', x: 734.9, y: 662.9, anchor: 'start', lx: 756, ly: 676 },
  ],
  circle: { cx: 627.5, cy: 493.3, r: 200.7 },
  button: 'Do it again',
}

function MapMystery({ spec }) {
  const [shown, setShown] = useState(false)
  const { tone, cities, circle, button } = spec

  // The whole reveal: the stroke is dashed at its own circumference, so an
  // offset of C hides it completely and an offset of 0 paints it all the way
  // round. Transitioning between the two draws the circle.
  const circumference = 2 * Math.PI * circle.r

  return (
    <div className="w-full h-full flex flex-col select-none gap-2">
      {/* No card, border or background here on purpose: the showcase's Media
          frame already draws a white bordered panel around this, and a second
          one inside it read as an empty white slab with a small map floating in
          the middle. The PNG's own white background is the plate. */}
      <div className="flex-1 min-h-0 relative">
        <img
          src={mapImg}
          alt="Blank political map of Europe"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />
        {/* Same viewBox and the default xMidYMid meet, so this overlay lands on
            the image pixel-for-pixel however the panel is shaped. */}
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full">
          <circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="none"
            stroke={tone}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={shown ? 0 : circumference}
            style={{ transition: 'stroke-dashoffset 1400ms ease-in-out' }}
          />
          {cities.map((c) => (
            <g key={c.name}>
              <circle cx={c.x} cy={c.y} r="13" fill={tone} stroke="#ffffff" strokeWidth="4" />
              <text
                x={c.lx}
                y={c.ly}
                textAnchor={c.anchor}
                fontSize="34"
                fontWeight="800"
                fill={tone}
                stroke="#ffffff"
                strokeWidth="7"
                paintOrder="stroke"
                fontFamily="system-ui, Segoe UI, sans-serif">
                {c.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <button
        onClick={() => setShown(!shown)}
        className="shrink-0 w-full py-2.5 rounded-xl font-black text-sm uppercase tracking-widest text-white border-2 active:scale-95 transition-all"
        style={{ backgroundColor: shown ? '#64748b' : tone, borderColor: shown ? '#64748b' : tone }}>
        {shown ? 'Take it away' : button}
      </button>
    </div>
  )
}

export const CityCircleOneWidget = () => <MapMystery spec={TRIO_ONE} />
export const CityCircleTwoWidget = () => <MapMystery spec={TRIO_TWO} />
