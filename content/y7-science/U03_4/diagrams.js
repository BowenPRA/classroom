// content/y7-science/U03_4/diagrams.js
// Teaching diagrams for 3.4 Tides (Learner's Book pp. 97–104).
//
//   Part 1 — what tides are, what they do, and why there are two a day
//     PAIR        — Alma harbour, Bay of Fundy: the same place at 09:40 and 15:34 (photos)
//     DEPTH       — depth = surface to bottom, at high tide and at low tide
//     DAY         — a real day of tides: Eastport, Bay of Fundy, 21 October 2026 (NOAA)
//     RANGE       — the same day: tidal range = high − low = 4.1 m
//     FUNDY       — Hopewell Rocks at low and high tide, and 16.3 m as a building (photos)
//     ANS_7M / ANS_6M — Question 6 (p.100) vote cards (left hand / right hand)
//     HALF        — Question 6 answered: half the range above the average, half below
//     EFFECTS     — harbours, food chains, electricity (photos)
//     TWO_TIDES   — Draw This: the book's figure on p.99, Earth from above the North Pole
//   Part 2 — the card model, the Sun, the land, and the scientists
//     PIECES      — the Activity's cut-outs: Sun, Earth, Moon, set 1, set 2
//     SETUP       — Activity Part 1: Earth and Moon 30 cm apart, set 1 in line
//     TURN        — Activity Part 2: mark a point, turn only the Earth, anticlockwise
//     HIGH_TIMES  — real first high tide each day, Mon 19 – Fri 23 Oct 2026 (NOAA)
//     LINE_UP     — Activity Part 3: Earth, Moon and Sun in a line, set 2
//     ANS_NEW / ANS_FULL — Activity Q7 vote cards (A, left = new moon, the answer)
//     PHASES      — Moon between Earth and Sun: new moon; the other side left as "?" (Q8)
//     IN_LINE     — Draw This: the book's second figure on p.99, bigger tidal range in line
//     MONTH       — real tidal range each day, 19 Oct – 17 Nov 2026, with the Moon's phases
//     EARTH_TIDE  — the ground rises about 30 cm; volcano photo
//
// The tide numbers are NOAA predictions for Eastport, Maine (station 8410140),
// at the mouth of the Bay of Fundy — public domain, fetched 14 Oct 2026. Graph
// paths are those numbers at 30-minute steps, written out as coordinates.
//
// Split diagrams are drawn at about 1.4:1 (840×560), showcase ones at about
// 2.5:1 (1120×440) — the shapes those layouts actually give a picture.
// Label <text> is written out literally so `npm run audit:svg` can measure it;
// the helpers below draw shapes only.

import almaOut from './images/alma_out.jpg'
import almaIn from './images/alma_in.jpg'
import hopeLow from './images/hope_low.jpg'
import hopeHigh from './images/hope_high.jpg'
import fullMoon from './images/fullmoon.jpg'
import oystercatcher from './images/oystercatcher.jpg'
import rance from './images/rance.jpg'
import kilauea from './images/kilauea.jpg'

const INK = '#2b2b2b'
const KEY = '#c25e12'
const MUTED = '#5b6770'
const RULE = '#cfd8dc'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const SEA = '#4f8fbf'
const SEA_T = '#d6eaf7'
const SEA_D = '#a9d2ef'
const SAND = '#ead9b5'
const MOON = '#cfd2d6'
const SUN = '#ffd84d'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const f1 = (n) => Number(n.toFixed(1))

// A straight arrow with a drawn head (not a marker, so every head is the same
// size whatever the line width).
const arrow = (x1, y1, x2, y2, color, w = 6, head = 20) => {
  const a = Math.atan2(y2 - y1, x2 - x1)
  const hx = x2 - head * Math.cos(a), hy = y2 - head * Math.sin(a)
  const px = head * 0.55 * Math.sin(a), py = -head * 0.55 * Math.cos(a)
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(hx)}" y2="${f1(hy)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>
    <path d="M ${f1(x2)} ${f1(y2)} L ${f1(hx + px)} ${f1(hy + py)} L ${f1(hx - px)} ${f1(hy - py)} Z" fill="${color}"/>`
}

// A double-headed arrow: a line with a drawn head at each end.
const both = (x1, y1, x2, y2, color, w = 4, head = 16) =>
  `${arrow((x1 + x2) / 2, (y1 + y2) / 2, x1, y1, color, w, head)}${arrow((x1 + x2) / 2, (y1 + y2) / 2, x2, y2, color, w, head)}`

// A thin leader line ending in a dot on the thing it names.
const leader = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${KEY}" stroke-width="2"/><circle cx="${x2}" cy="${y2}" r="4.5" fill="${KEY}"/>`

// A flat drawn Earth seen from above the North Pole: pale sea, pale land.
const LAND = [
  'M -0.18 -0.2 C 0.05 -0.38 0.3 -0.22 0.22 0.02 C 0.16 0.22 -0.08 0.3 -0.22 0.14 C -0.34 0.02 -0.3 -0.1 -0.18 -0.2 Z',
  'M 0.38 -0.62 C 0.58 -0.6 0.78 -0.36 0.72 -0.12 C 0.6 -0.02 0.46 -0.2 0.38 -0.36 C 0.32 -0.48 0.3 -0.58 0.38 -0.62 Z',
  'M -0.7 -0.42 C -0.52 -0.62 -0.3 -0.68 -0.22 -0.52 C -0.3 -0.42 -0.5 -0.3 -0.62 -0.18 C -0.72 -0.22 -0.76 -0.34 -0.7 -0.42 Z',
  'M -0.4 0.5 C -0.2 0.42 0.04 0.52 0.1 0.7 C -0.06 0.8 -0.3 0.78 -0.44 0.66 C -0.5 0.6 -0.48 0.54 -0.4 0.5 Z',
  'M 0.42 0.36 C 0.58 0.3 0.74 0.4 0.7 0.54 C 0.6 0.62 0.46 0.58 0.42 0.36 Z',
]
const earth = (id, cx, cy, r) => `<defs><clipPath id="${id}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#cfe5f5"/>
    <g clip-path="url(#${id})"><g transform="translate(${cx} ${cy}) scale(${r})">${LAND.map((d) => `<path d="${d}" fill="#bfe0ad" stroke="#4a8b23" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join('')}</g></g>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${SEA}" stroke-width="3"/>
    <circle cx="${cx}" cy="${cy}" r="4" fill="${INK}"/>`

// The water around the Earth: an oval, long along the Earth–Moon line.
const ocean = (cx, cy, rx, ry, fill = SEA_D) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${SEA}" stroke-width="3"/>`

const moon = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${MOON}" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="${cx - r * 0.3}" cy="${cy - r * 0.25}" r="${r * 0.18}" fill="#b4b8bd"/><circle cx="${cx + r * 0.3}" cy="${cy + r * 0.3}" r="${r * 0.13}" fill="#b4b8bd"/>`

// A Moon lit from the right (the Sun's side): dark disc, bright right half.
const litMoon = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#4a4f55" stroke="${INK}" stroke-width="2.5"/>
    <path d="M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx} ${cy + r} Z" fill="#f4f4f0"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${INK}" stroke-width="2.5"/>`

// A curved arrow around a centre, anticlockwise on screen (Earth's spin seen
// from above the North Pole), from angle a1 to a2 in degrees, y down.
const spin = (cx, cy, r, a1, a2, color, w = 4, head = 16) => {
  const p = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cy + r * Math.sin((a * Math.PI) / 180)]
  const [x1, y1] = p(a1)
  const [x2, y2] = p(a2)
  const [xb, yb] = p(a2 + 6)
  return `<path d="M ${f1(x1)} ${f1(y1)} A ${r} ${r} 0 0 0 ${f1(xb)} ${f1(yb)}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>
    ${arrow(xb, yb, x2, y2, color, w, head)}`
}

// A photo in a rounded frame.
const photo = (id, href, x, y, w, h, fit = 'xMidYMid slice') => `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/></clipPath></defs>
    <image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="${fit}" clip-path="url(#${id})"/>`

const roundPhoto = (id, href, cx, cy, r) => `<defs><clipPath id="${id}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
    <image href="${href}" x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>`

// The lucide Hand outline, as on Maths 2.3's vote cards. A left hand is the
// same drawing mirrored: seen from behind, thumb on the right.
const HAND_PATHS = '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
const leftHand = (color) => `<g transform="translate(192 76) scale(-7 7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const rightHand = (color) => `<g transform="translate(528 76) scale(7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`

// Graph furniture: axes with ticks (no text — the labels are written out).
const axes = (x0, x1, y0, y1, xs, ys) => `<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${INK}" stroke-width="2.5"/>
    <line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="${INK}" stroke-width="2.5"/>
    ${xs.map((x) => `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0 + 8}" stroke="${INK}" stroke-width="2"/>`).join('')}
    ${ys.map((y) => `<line x1="${x0 - 8}" y1="${y}" x2="${x0}" y2="${y}" stroke="${INK}" stroke-width="2"/><line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#edf1f4" stroke-width="1.5"/>`).join('')}`

// 21 October 2026 at Eastport, every 30 minutes (NOAA), 28.333 px an hour,
// 50 px a metre, 0 m at y = 420.
const DAY_PATH = 'M 110.0 351.7 L 124.2 368.8 L 138.3 379.4 L 152.5 382.4 L 166.7 377.4 L 180.8 365.4 L 195.0 348.1 L 209.2 327.2 L 223.3 304.1 L 237.5 279.6 L 251.7 254.3 L 265.8 229.5 L 280.0 206.6 L 294.2 187.9 L 308.3 175.3 L 322.5 169.8 L 336.7 171.8 L 350.8 180.6 L 365.0 194.7 L 379.2 212.8 L 393.3 233.7 L 407.5 256.5 L 421.7 280.1 L 435.8 304.1 L 450.0 327.1 L 464.2 347.4 L 478.3 363.3 L 492.5 372.6 L 506.7 374.1 L 520.8 367.8 L 535.0 354.5 L 549.2 336.1 L 563.3 314.3 L 577.5 290.4 L 591.7 265.0 L 605.8 239.2 L 620.0 213.8 L 634.2 191.2 L 648.3 173.3 L 662.5 162.1 L 676.7 158.7 L 690.8 163.2 L 705.0 174.6 L 719.2 191.6 L 733.3 212.9 L 747.5 236.9 L 761.7 262.9 L 775.8 289.8 L 790.0 316.5'
// The same day squeezed to 22.5 px an hour, to leave room for the bracket.
const RANGE_PATH = 'M 110.0 351.7 L 121.2 368.8 L 132.5 379.4 L 143.8 382.4 L 155.0 377.4 L 166.2 365.4 L 177.5 348.1 L 188.8 327.2 L 200.0 304.1 L 211.2 279.6 L 222.5 254.3 L 233.8 229.5 L 245.0 206.6 L 256.2 187.9 L 267.5 175.3 L 278.8 169.8 L 290.0 171.8 L 301.2 180.6 L 312.5 194.7 L 323.8 212.8 L 335.0 233.7 L 346.2 256.5 L 357.5 280.1 L 368.8 304.1 L 380.0 327.1 L 391.2 347.4 L 402.5 363.3 L 413.8 372.6 L 425.0 374.1 L 436.2 367.8 L 447.5 354.5 L 458.8 336.1 L 470.0 314.3 L 481.2 290.4 L 492.5 265.0 L 503.8 239.2 L 515.0 213.8 L 526.2 191.2 L 537.5 173.3 L 548.8 162.1 L 560.0 158.7 L 571.2 163.2 L 582.5 174.6 L 593.8 191.6 L 605.0 212.9 L 616.2 236.9 L 627.5 262.9 L 638.8 289.8 L 650.0 316.5'

// Tidal range each day, 19 Oct – 17 Nov 2026 (highest high − lowest low,
// NOAA), as the y of the top of each bar: 0 m at y = 470, 40 px a metre,
// 24 px a day.
const MONTH_TOPS = [318.4, 301.6, 290.8, 276.0, 256.8, 235.2, 213.6, 197.6, 190.0, 190.8, 199.6, 214.8, 232.8, 248.8, 259.6, 274.0, 261.2, 255.6, 241.6, 230.0, 224.8, 225.6, 231.2, 240.8, 252.8, 264.8, 276.4, 286.4, 293.2, 295.6]
const bars = () => MONTH_TOPS.map((top, i) => {
  const peak = i === 8 || i === 20 // 27 Oct and 8 Nov, the biggest ranges
  return `<rect x="${104 + i * 24}" y="${top}" width="16" height="${f1(470 - top)}" rx="3" fill="${peak ? KEY : SEA}" fill-opacity="${peak ? 1 : 0.75}"/>`
}).join('')

// A cut-out crescent pair: the parts of an oval that stick out past a circle.
const crescents = (cx, cy, r, rx, fill = SEA_D) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${r}" fill="${fill}" stroke="${SEA}" stroke-width="3"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="${SEA}" stroke-width="3"/>`

// A simple building of `floors` floors, 60 px each, bottom at y.
const building = (x, y, floors) => {
  let out = `<rect x="${x}" y="${y - floors * 60}" width="90" height="${floors * 60}" fill="#eef1f4" stroke="${INK}" stroke-width="3"/>`
  for (let f = 0; f < floors; f++) {
    out += `<line x1="${x}" y1="${y - f * 60}" x2="${x + 90}" y2="${y - f * 60}" stroke="#b8c2c9" stroke-width="1.5"/>`
    for (const dx of [14, 52]) out += `<rect x="${x + dx}" y="${y - f * 60 - 44}" width="24" height="26" fill="#cfe5f5" stroke="#8a979e" stroke-width="1.5"/>`
  }
  return out
}

export const DIAGRAMS = {
  // ══ PART 1 ══════════════════════════════════════════════════════════════
  PAIR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    <text x="280" y="38" font-family="${FONT}" font-size="32" font-weight="bold" fill="${INK}" text-anchor="middle">09:40</text>
    <text x="840" y="38" font-family="${FONT}" font-size="32" font-weight="bold" fill="${INK}" text-anchor="middle">15:34</text>
    ${photo('u34-pair-a', almaOut, 20, 56, 520, 372)}
    ${photo('u34-pair-b', almaIn, 580, 56, 520, 372)}
  </svg>`,

  DEPTH: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="180" y="170" width="440" height="300" fill="${SEA_T}"/>
    <rect x="180" y="370" width="440" height="100" fill="${SEA_D}"/>
    <line x1="180" y1="170" x2="620" y2="170" stroke="${SEA}" stroke-width="4"/>
    <line x1="180" y1="370" x2="620" y2="370" stroke="${SEA}" stroke-width="4" stroke-dasharray="12 9"/>
    <rect x="180" y="470" width="440" height="56" fill="${SAND}"/>
    <line x1="180" y1="470" x2="620" y2="470" stroke="${INK}" stroke-width="3"/>
    <path d="M 432 166 L 528 166 L 514 188 L 446 188 Z" fill="${KEY}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="470" y1="166" x2="470" y2="120" stroke="${INK}" stroke-width="3"/>
    <path d="M 474 124 L 506 158 L 474 158 Z" fill="#ffffff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>

    ${both(290, 176, 290, 464, INK, 4, 16)}
    <text x="304" y="330" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">depth</text>
    ${both(524, 376, 524, 464, INK, 4, 16)}
    <text x="536" y="430" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}">depth</text>

    <text x="650" y="179" font-family="${FONT}" font-size="28" font-weight="bold" fill="${KEY}">high tide</text>
    ${leader(644, 170, 622, 170)}
    <text x="650" y="379" font-family="${FONT}" font-size="28" font-weight="bold" fill="${KEY}">low tide</text>
    ${leader(644, 370, 622, 370)}

    <text x="24" y="178" font-family="${FONT}" font-size="26" fill="${MUTED}">surface</text>
    ${leader(130, 170, 182, 170)}
    <text x="24" y="478" font-family="${FONT}" font-size="26" fill="${MUTED}">bottom</text>
    ${leader(124, 470, 182, 470)}
  </svg>`,

  DAY: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="420" y="44" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">Eastport, Bay of Fundy · 21 October 2026</text>
    <text x="24" y="92" font-family="${FONT}" font-size="20" fill="${MUTED}">height of the water</text>
    ${axes(110, 790, 420, 100, [110, 280, 450, 620, 790], [320, 220, 120])}
    <path d="${DAY_PATH} L 790 420 L 110 420 Z" fill="${SEA_T}"/>
    <path d="${DAY_PATH}" fill="none" stroke="${SEA}" stroke-width="5" stroke-linejoin="round"/>
    <text x="98" y="427" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">0 m</text>
    <text x="98" y="327" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">2 m</text>
    <text x="98" y="227" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">4 m</text>
    <text x="98" y="127" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">6 m</text>
    <text x="110" y="512" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">00:00</text>
    <text x="280" y="512" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">06:00</text>
    <text x="450" y="512" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">12:00</text>
    <text x="620" y="512" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">18:00</text>
    <text x="790" y="512" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">24:00</text>
    <text x="450" y="544" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">time of day</text>

    <circle cx="325.8" cy="169.7" r="8" fill="${KEY}"/>
    <circle cx="675.7" cy="158.6" r="8" fill="${KEY}"/>
    <circle cx="150.6" cy="382.5" r="8" fill="${KEY}"/>
    <circle cx="502.4" cy="374.6" r="8" fill="${KEY}"/>
    <text x="326" y="138" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">high tide 07:37</text>
    <text x="676" y="128" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">high tide 19:58</text>
    <text x="160" y="462" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">low tide 01:26</text>
    <text x="502" y="462" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">low tide 13:51</text>

    <text x="226" y="284" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="end">comes in</text>
    <text x="404" y="226" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}">goes out</text>
    <text x="560" y="302" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="end">comes in</text>
  </svg>`,

  RANGE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="24" y="72" font-family="${FONT}" font-size="20" fill="${MUTED}">height of the water</text>
    ${axes(110, 650, 420, 100, [110, 245, 380, 515, 650], [320, 220, 120])}
    <path d="${RANGE_PATH} L 650 420 L 110 420 Z" fill="${SEA_T}"/>
    <path d="${RANGE_PATH}" fill="none" stroke="${SEA}" stroke-width="5" stroke-linejoin="round"/>
    <text x="98" y="427" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">0 m</text>
    <text x="98" y="327" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">2 m</text>
    <text x="98" y="227" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">4 m</text>
    <text x="98" y="127" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">6 m</text>
    <text x="110" y="456" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">00:00</text>
    <text x="380" y="456" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">12:00</text>
    <text x="650" y="456" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">24:00</text>

    <line x1="281.4" y1="169.7" x2="680" y2="169.7" stroke="${KEY}" stroke-width="2.5" stroke-dasharray="8 7"/>
    <line x1="421.6" y1="374.6" x2="680" y2="374.6" stroke="${KEY}" stroke-width="2.5" stroke-dasharray="8 7"/>
    <circle cx="281.4" cy="169.7" r="8" fill="${KEY}"/>
    <circle cx="421.6" cy="374.6" r="8" fill="${KEY}"/>
    <path d="M 670 169.7 L 690 169.7 M 680 169.7 L 680 374.6 M 670 374.6 L 690 374.6" stroke="${KEY}" stroke-width="4" fill="none"/>
    <text x="694" y="158" font-family="${FONT}" font-size="20" fill="${INK}">high: 5.0 m</text>
    <text x="694" y="400" font-family="${FONT}" font-size="20" fill="${INK}">low: 0.9 m</text>
    <text x="696" y="262" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">tidal</text>
    <text x="696" y="292" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">range</text>
    <text x="696" y="330" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">4.1 m</text>
    <text x="420" y="520" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">5.0 − 0.9 = 4.1 m</text>
  </svg>`,

  FUNDY: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    <text x="235" y="40" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">low tide</text>
    <text x="685" y="40" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">high tide</text>
    ${photo('u34-fundy-a', hopeLow, 20, 54, 430, 322)}
    ${photo('u34-fundy-b', hopeHigh, 470, 54, 430, 322)}
    <text x="460" y="414" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">Hopewell Rocks, Bay of Fundy, Canada</text>

    ${building(990, 396, 5)}
    <path d="M 950 96 L 966 96 M 958 96 L 958 396 M 950 396 L 966 396" stroke="${KEY}" stroke-width="4" fill="none"/>
    <text x="1035" y="78" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">16.3 m</text>
    <text x="1035" y="428" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">5 floors</text>
  </svg>`,

  // ── Question 6 vote ─────────────────────────────────────────────────────
  ANS_7M: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    <text x="460" y="200" font-family="${FONT}" font-size="120" font-weight="bold" fill="${BLUE}" text-anchor="middle">7.0 m</text>
  </svg>`,

  ANS_6M: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    <text x="262" y="200" font-family="${FONT}" font-size="120" font-weight="bold" fill="${KEY}" text-anchor="middle">6.0 m</text>
  </svg>`,

  HALF: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="230" y="140" width="330" height="360" fill="${SEA_T}"/>
    <rect x="230" y="260" width="330" height="240" fill="${SEA_D}"/>
    <line x1="230" y1="140" x2="560" y2="140" stroke="${SEA}" stroke-width="4"/>
    <line x1="230" y1="200" x2="560" y2="200" stroke="${INK}" stroke-width="3" stroke-dasharray="10 8"/>
    <line x1="230" y1="260" x2="560" y2="260" stroke="${SEA}" stroke-width="4" stroke-dasharray="12 9"/>
    <rect x="230" y="500" width="330" height="40" fill="${SAND}"/>
    <line x1="230" y1="500" x2="560" y2="500" stroke="${INK}" stroke-width="3"/>

    <text x="218" y="148" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="end">high: 6.0 m</text>
    <text x="218" y="208" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="end">average: 5.0 m</text>
    <text x="218" y="268" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="end">low: 4.0 m</text>

    ${both(330, 146, 330, 494, INK, 4, 16)}
    <text x="344" y="380" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">maximum depth</text>
    <text x="344" y="412" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">6.0 m</text>

    <path d="M 572 140 L 588 140 M 580 140 L 580 260 M 572 200 L 588 200 M 572 260 L 588 260" stroke="${MUTED}" stroke-width="3" fill="none"/>
    <text x="594" y="178" font-family="${FONT}" font-size="22" fill="${MUTED}">1.0 m</text>
    <text x="594" y="238" font-family="${FONT}" font-size="22" fill="${MUTED}">1.0 m</text>
    <path d="M 652 140 L 668 140 M 660 140 L 660 260 M 652 260 L 668 260" stroke="${KEY}" stroke-width="4" fill="none"/>
    <text x="676" y="194" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">tidal range</text>
    <text x="676" y="226" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">2.0 m</text>
  </svg>`,

  // ── Draw This: the book's figure, p.99 ──────────────────────────────────
  TWO_TIDES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="24" y="40" font-family="${FONT}" font-size="22" fill="${MUTED}">The Earth from above the North Pole</text>
    ${ocean(320, 290, 185, 140)}
    ${earth('u34-two', 320, 290, 118)}
    ${spin(320, 290, 84, 200, 120, INK, 4, 16)}
    ${moon(736, 290, 44)}
    <text x="736" y="372" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Moon</text>
    ${arrow(526, 290, 676, 290, RED, 6, 20)}
    <text x="600" y="246" font-family="${FONT}" font-size="22" fill="${RED}" text-anchor="middle">pull of gravity</text>
    <text x="600" y="272" font-family="${FONT}" font-size="22" fill="${RED}" text-anchor="middle">from the Moon</text>

    <text x="24" y="284" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">high</text>
    <text x="24" y="314" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">tide</text>
    ${leader(90, 290, 133, 290)}
    <text x="520" y="352" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">high tide</text>
    ${leader(536, 330, 506, 300)}
    <text x="320" y="110" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">low tide</text>
    ${leader(320, 118, 320, 150)}
    <text x="320" y="496" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">low tide</text>
    ${leader(320, 470, 320, 430)}
    <text x="816" y="540" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">not to scale</text>
  </svg>`,

  // ══ PART 2 ══════════════════════════════════════════════════════════════
  PIECES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 560" class="w-full h-full">
    ${plate(760, 560)}
    <circle cx="140" cy="132" r="108" fill="${SUN}" stroke="${INK}" stroke-width="3"/>
    <circle cx="390" cy="132" r="64" fill="#cfe5f5" stroke="${INK}" stroke-width="3"/>
    <circle cx="610" cy="132" r="30" fill="${MOON}" stroke="${INK}" stroke-width="3"/>
    <text x="140" y="290" font-family="${FONT}" font-size="44" font-weight="bold" fill="${INK}" text-anchor="middle">Sun</text>
    <text x="390" y="252" font-family="${FONT}" font-size="44" font-weight="bold" fill="${INK}" text-anchor="middle">Earth</text>
    <text x="610" y="214" font-family="${FONT}" font-size="44" font-weight="bold" fill="${INK}" text-anchor="middle">Moon</text>

    ${crescents(200, 410, 64, 86)}
    ${crescents(550, 410, 64, 118)}
    <text x="200" y="534" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">set 1</text>
    <text x="550" y="534" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">set 2</text>
  </svg>`,

  SETUP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="24" y="40" font-family="${FONT}" font-size="22" fill="${MUTED}">On your desk, seen from above</text>
    <line x1="80" y1="280" x2="780" y2="280" stroke="${MUTED}" stroke-width="2.5" stroke-dasharray="10 8"/>
    ${crescents(230, 280, 82, 112)}
    <circle cx="230" cy="280" r="82" fill="#cfe5f5" stroke="${INK}" stroke-width="3"/>
    <text x="230" y="290" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Earth</text>
    ${moon(660, 280, 34)}
    <text x="660" y="346" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Moon</text>
    <path d="M 230 420 L 230 440 M 230 430 L 660 430 M 660 420 L 660 440" stroke="${KEY}" stroke-width="4" fill="none"/>
    <text x="445" y="474" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">about 30 cm</text>

    <text x="230" y="140" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">set 1</text>
    ${leader(210, 152, 130, 262)}
    ${leader(250, 152, 330, 262)}
    <text x="470" y="200" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">deepest parts</text>
    <text x="470" y="228" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">in line with the Moon</text>
    ${leader(420, 238, 342, 278)}
  </svg>`,

  TURN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${crescents(300, 290, 120, 160)}
    ${earth('u34-turn', 300, 290, 120)}
    ${spin(300, 290, 178, 340, 240, KEY, 6, 22)}
    <circle cx="215.1" cy="205.1" r="12" fill="${RED}" stroke="#ffffff" stroke-width="3"/>
    ${moon(720, 290, 34)}
    <text x="720" y="356" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Moon</text>

    <text x="24" y="60" font-family="${FONT}" font-size="24" font-weight="bold" fill="${RED}">your point</text>
    <text x="24" y="88" font-family="${FONT}" font-size="24" font-weight="bold" fill="${RED}">on the coast</text>
    ${leader(110, 98, 206, 196)}
    <text x="472" y="76" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">anticlockwise</text>
    <text x="472" y="106" font-family="${FONT}" font-size="22" fill="${MUTED}">the opposite way</text>
    <text x="472" y="132" font-family="${FONT}" font-size="22" fill="${MUTED}">to a clock's hands</text>
    ${leader(466, 92, 392, 134)}
    <text x="300" y="504" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">Turn only the Earth. The crescents stay still.</text>
  </svg>`,

  HIGH_TIMES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="420" y="44" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">Eastport, Bay of Fundy · the first high tide each day</text>
    <rect x="40" y="66" width="760" height="70" rx="10" fill="#0087a8"/>
    <text x="180" y="112" font-family="${FONT}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">day</text>
    <text x="440" y="112" font-family="${FONT}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">high tide</text>
    <text x="670" y="112" font-family="${FONT}" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">difference</text>

    <rect x="40" y="140" width="760" height="76" fill="#f7f9fa"/>
    <text x="180" y="190" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Mon 19 Oct</text>
    <text x="440" y="192" font-family="${FONT}" font-size="36" font-weight="bold" fill="${INK}" text-anchor="middle">05:46</text>
    <rect x="40" y="216" width="760" height="76" fill="#ffffff"/>
    <text x="180" y="266" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Tue 20 Oct</text>
    <text x="440" y="268" font-family="${FONT}" font-size="36" font-weight="bold" fill="${INK}" text-anchor="middle">06:43</text>
    <text x="670" y="268" font-family="${FONT}" font-size="36" font-weight="bold" fill="#b8c2c9" text-anchor="middle">?</text>
    <rect x="40" y="292" width="760" height="76" fill="#f7f9fa"/>
    <text x="180" y="342" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Wed 21 Oct</text>
    <text x="440" y="344" font-family="${FONT}" font-size="36" font-weight="bold" fill="${INK}" text-anchor="middle">07:37</text>
    <text x="670" y="344" font-family="${FONT}" font-size="36" font-weight="bold" fill="#b8c2c9" text-anchor="middle">?</text>
    <rect x="40" y="368" width="760" height="76" fill="#ffffff"/>
    <text x="180" y="418" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Thu 22 Oct</text>
    <text x="440" y="420" font-family="${FONT}" font-size="36" font-weight="bold" fill="${INK}" text-anchor="middle">08:26</text>
    <text x="670" y="420" font-family="${FONT}" font-size="36" font-weight="bold" fill="#b8c2c9" text-anchor="middle">?</text>
    <rect x="40" y="444" width="760" height="76" fill="#f7f9fa"/>
    <text x="180" y="494" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Fri 23 Oct</text>
    <text x="440" y="496" font-family="${FONT}" font-size="36" font-weight="bold" fill="${INK}" text-anchor="middle">09:11</text>
    <text x="670" y="496" font-family="${FONT}" font-size="36" font-weight="bold" fill="#b8c2c9" text-anchor="middle">?</text>
    <rect x="40" y="66" width="760" height="454" rx="10" fill="none" stroke="${RULE}" stroke-width="2"/>
  </svg>`,

  LINE_UP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="24" y="40" font-family="${FONT}" font-size="22" fill="${MUTED}">Not to scale</text>
    <circle cx="930" cy="280" r="230" fill="${SUN}" stroke="${INK}" stroke-width="3"/>
    <text x="780" y="290" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Sun</text>
    <line x1="40" y1="280" x2="700" y2="280" stroke="${MUTED}" stroke-width="2.5" stroke-dasharray="10 8"/>
    ${crescents(220, 280, 80, 150)}
    <circle cx="220" cy="280" r="80" fill="#cfe5f5" stroke="${INK}" stroke-width="3"/>
    <text x="220" y="290" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Earth</text>
    ${moon(520, 280, 32)}
    <text x="520" y="346" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Moon</text>
    <text x="220" y="450" font-family="${FONT}" font-size="28" font-weight="bold" fill="${KEY}" text-anchor="middle">set 2</text>
    ${leader(220, 424, 342, 300)}
    <text x="420" y="510" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">Earth, Moon and Sun in a line</text>
  </svg>`,

  // ── Activity Q7 vote (A = left hand = new moon, the answer; B = full moon) ─
  ANS_NEW: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    <rect x="382" y="14" width="160" height="160" rx="16" fill="#0b1220"/>
    <circle cx="462" cy="94" r="66" fill="#2a2f36" stroke="#59616b" stroke-width="2"/>
    <text x="462" y="262" font-family="${FONT}" font-size="54" font-weight="bold" fill="${BLUE}" text-anchor="middle">new moon</text>
  </svg>`,

  ANS_FULL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    <rect x="180" y="14" width="160" height="160" rx="16" fill="#0b1220"/>
    ${roundPhoto('u34-ans-full', fullMoon, 260, 94, 66)}
    <text x="262" y="262" font-family="${FONT}" font-size="54" font-weight="bold" fill="${KEY}" text-anchor="middle">full moon</text>
  </svg>`,

  PHASES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <circle cx="960" cy="330" r="220" fill="${SUN}" stroke="${INK}" stroke-width="3"/>
    <text x="796" y="340" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Sun</text>
    ${arrow(730, 220, 640, 220, '#d9a400', 4, 14)}
    ${arrow(730, 440, 640, 440, '#d9a400', 4, 14)}
    <line x1="140" y1="330" x2="560" y2="330" stroke="${RULE}" stroke-width="2.5" stroke-dasharray="8 8"/>
    ${earth('u34-ph', 360, 330, 56)}
    <text x="360" y="420" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">Earth</text>
    ${litMoon(560, 330, 30)}
    ${litMoon(160, 330, 30)}

    <rect x="490" y="66" width="140" height="140" rx="14" fill="#0b1220"/>
    <circle cx="560" cy="136" r="54" fill="#2a2f36" stroke="#59616b" stroke-width="2"/>
    <text x="560" y="36" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">new moon</text>
    ${leader(560, 218, 560, 296)}
    <rect x="90" y="66" width="140" height="140" rx="14" fill="#f7f9fa" stroke="${RULE}" stroke-width="2" stroke-dasharray="8 6"/>
    <text x="160" y="160" font-family="${FONT}" font-size="72" font-weight="bold" fill="${MUTED}" text-anchor="middle">?</text>
    ${leader(160, 218, 160, 296)}

    <text x="300" y="494" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">The half of the Moon facing the Sun</text>
    <text x="300" y="522" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">is always lit. What do we see from Earth?</text>
  </svg>`,

  // ── Draw This: the book's second figure, p.99 ───────────────────────────
  IN_LINE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <circle cx="960" cy="270" r="200" fill="${SUN}" stroke="${INK}" stroke-width="3"/>
    <text x="808" y="280" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">Sun</text>
    <line x1="40" y1="270" x2="760" y2="270" stroke="${RULE}" stroke-width="2.5" stroke-dasharray="8 8"/>
    ${ocean(320, 270, 180, 108)}
    ${earth('u34-inline', 320, 270, 88)}
    ${moon(80, 270, 30)}
    ${moon(660, 270, 30)}
    ${arrow(508, 270, 610, 270, RED, 6, 18)}
    <text x="80" y="336" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">full moon</text>
    <text x="660" y="336" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">new moon</text>
    <text x="320" y="78" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">a bigger tidal range</text>
    ${leader(320, 88, 320, 162)}
    <text x="560" y="214" font-family="${FONT}" font-size="22" fill="${RED}" text-anchor="middle">pull of the Sun</text>
    <text x="560" y="240" font-family="${FONT}" font-size="22" fill="${RED}" text-anchor="middle">and the Moon</text>
    <text x="320" y="450" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">Sun, Moon and Earth in line</text>
    <text x="816" y="540" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">not to scale</text>
  </svg>`,

  MONTH: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${axes(96, 824, 470, 140, [], [390, 310, 230, 150])}
    ${bars()}
    <text x="86" y="477" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">0 m</text>
    <text x="86" y="397" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">2 m</text>
    <text x="86" y="317" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">4 m</text>
    <text x="86" y="237" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">6 m</text>
    <text x="86" y="157" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">8 m</text>
    <text x="112" y="500" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">19 Oct</text>
    <text x="280" y="500" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">26 Oct</text>
    <text x="448" y="500" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">2 Nov</text>
    <text x="616" y="500" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">9 Nov</text>
    <text x="784" y="500" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">16 Nov</text>
    <text x="420" y="540" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">tidal range each day · Eastport, Bay of Fundy · 2026</text>

    <rect x="252" y="40" width="56" height="56" rx="10" fill="#0b1220"/>
    ${roundPhoto('u34-month-full', fullMoon, 280, 68, 24)}
    <text x="318" y="76" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">full moon</text>
    <rect x="588" y="40" width="56" height="56" rx="10" fill="#0b1220"/>
    <circle cx="616" cy="68" r="24" fill="#2a2f36" stroke="#59616b" stroke-width="2"/>
    <text x="654" y="76" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">new moon</text>
  </svg>`,

  EFFECTS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${photo('u34-eff-a', almaOut, 20, 20, 350, 300)}
    ${photo('u34-eff-b', oystercatcher, 385, 20, 350, 300)}
    ${photo('u34-eff-c', rance, 750, 20, 350, 300, 'xMidYMax slice')}
    <text x="195" y="360" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}" text-anchor="middle">harbours</text>
    <text x="195" y="396" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">boats sit on the mud</text>
    <text x="560" y="360" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}" text-anchor="middle">food chains</text>
    <text x="560" y="396" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">a bird finds a mussel</text>
    <text x="925" y="360" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}" text-anchor="middle">electricity</text>
    <text x="925" y="396" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">La Rance, France</text>
  </svg>`,

  EARTH_TIDE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="30" y="330" width="420" height="200" fill="#d9c7a5" stroke="${INK}" stroke-width="3"/>
    <rect x="30" y="300" width="420" height="30" fill="none" stroke="${KEY}" stroke-width="3" stroke-dasharray="10 8"/>
    <rect x="150" y="196" width="180" height="134" fill="#f3ead7" stroke="${INK}" stroke-width="3"/>
    <path d="M 136 200 L 240 132 L 344 200 Z" fill="${KEY}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <rect x="216" y="262" width="48" height="68" fill="#cfe5f5" stroke="${INK}" stroke-width="2.5"/>
    ${both(410, 300, 410, 330, KEY, 3, 10)}
    <text x="240" y="414" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">up and down</text>
    <text x="240" y="462" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">about 30 cm</text>
    ${photo('u34-lava', kilauea, 490, 30, 320, 440)}
    <text x="650" y="510" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">Kīlauea volcano, Hawaii</text>
  </svg>`,
}
