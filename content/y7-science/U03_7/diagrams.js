// content/y7-science/U03_7/diagrams.js
// Teaching diagrams for 3.7 Where does energy go? (Learner's Book pp. 117–119).
//
//   The motorbike (p.118)
//     ANS_QUARTER / ANS_THREEQ — vote: how much of the petrol's energy moves it?
//     MOTO_QUARTER  — 4 equal parts: 1 part kinetic (useful), 3 parts wasted
//     MOTO_DRAW     — Draw This: the 3.6 box diagram with useful and wasted
//   Dissipated
//     DISSIPATE     — rubbed hands: thermal energy in one place, then spread out
//     WORDS         — English check: waste, useful, dissipate, recover
//
//   Photographs (real things beside the drawings)
//     GS            — Getting started: wood fire, stairs, cycling, with 3.6's chains
//     LAMPS         — the book's lamps A and B, unlabelled (the question)
//     LAMP_BARS     — the book's numbers: A 15% light, B 50% light
//     POT_Q / POT_A — water on a wood fire: find 5 places, then the labels
//
// Useful is GREEN and wasted is GREY everywhere in this deck, in the diagrams
// and in the game, so the two never need a legend.
//
// Split diagrams are drawn at about 1.4:1 (840×560), showcase ones at about
// 2.5:1 (1120×440) — the shapes those layouts actually give a picture.
//
// Label <text> is written out literally so `npm run audit:svg` can measure it.
// Helpers below draw shapes only.

import fire from './images/fire.jpg'
import stairs from './images/stairs.jpg'
import cycling from './images/cycling.jpg'
import filament from './images/filament.jpg'
import saver from './images/saver.jpg'

const INK = '#2b2b2b'
const KEY = '#c25e12'
const MUTED = '#5b6770'
const RULE = '#cfd8dc'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#3f7d1e'
const GREEN_T = '#e6f2dc'
const GREY = '#6b7780'
const GREY_T = '#e9edf0'
const ORANGE_T = '#fdf1e3'
const HEAT = '#e2492c'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const f1 = (n) => Number(n.toFixed(1))

// A straight arrow with a drawn head (not a marker, so every head is the same
// size whatever the line width).
const arrow = (x1, y1, x2, y2, color, w = 5, head = 18) => {
  const a = Math.atan2(y2 - y1, x2 - x1)
  const hx = x2 - head * Math.cos(a), hy = y2 - head * Math.sin(a)
  const px = head * 0.55 * Math.sin(a), py = -head * 0.55 * Math.cos(a)
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(hx)}" y2="${f1(hy)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>
    <path d="M ${f1(x2)} ${f1(y2)} L ${f1(hx + px)} ${f1(hy + py)} L ${f1(hx - px)} ${f1(hy - py)} Z" fill="${color}"/>`
}

// The lucide Hand outline, as on Maths 2.3's and Science 3.1's vote cards. A
// left hand is the same drawing mirrored: seen from behind, thumb on the right.
const HAND_PATHS = '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
const leftHand = (color) => `<g transform="translate(192 76) scale(-7 7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const rightHand = (color) => `<g transform="translate(528 76) scale(7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`

// A bar of four equal parts, the first `n` filled.
const quarters = (x0, y0, n, color) =>
  [0, 1, 2, 3].map((i) => `<rect x="${x0 + i * 72}" y="${y0}" width="64" height="44" rx="6" fill="${i < n ? color : '#ffffff'}" stroke="${color}" stroke-width="3"/>`).join('')

// One block of energy (the motorbike picture).
const block = (x, y, fill, stroke) => `<rect x="${x}" y="${y}" width="120" height="76" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`

// A box of the book's energy diagrams (3.6): white, thin dark outline.
const ebox = (x, y, w = 200, h = 80) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#ffffff" stroke="${INK}" stroke-width="2.5"/>`

// Two hands pressed palm to palm, fingers up, centred on (cx, cy): a thumb on
// each outer side and lines between the fingers.
const palms = (cx, cy) => `<g stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <ellipse cx="${cx - 50}" cy="${cy + 6}" rx="11" ry="30" transform="rotate(-24 ${cx - 50} ${cy + 6})" fill="#f1c9a5"/>
      <ellipse cx="${cx + 50}" cy="${cy + 6}" rx="11" ry="30" transform="rotate(24 ${cx + 50} ${cy + 6})" fill="#f1c9a5"/>
      <path d="M ${cx - 2} ${cy + 84} V ${cy - 70} Q ${cx - 2} ${cy - 92} ${cx - 22} ${cy - 92} Q ${cx - 46} ${cy - 92} ${cx - 46} ${cy - 60} V ${cy + 60} Q ${cx - 46} ${cy + 84} ${cx - 24} ${cy + 84} Z" fill="#f1c9a5"/>
      <path d="M ${cx + 2} ${cy + 84} V ${cy - 70} Q ${cx + 2} ${cy - 92} ${cx + 22} ${cy - 92} Q ${cx + 46} ${cy - 92} ${cx + 46} ${cy - 60} V ${cy + 60} Q ${cx + 46} ${cy + 84} ${cx + 24} ${cy + 84} Z" fill="#f1c9a5"/>
      <path d="M ${cx - 24} ${cy - 90} V ${cy - 50} M ${cx - 35} ${cy - 84} V ${cy - 50} M ${cx + 24} ${cy - 90} V ${cy - 50} M ${cx + 35} ${cy - 84} V ${cy - 50}" fill="none" stroke-width="2" stroke="#b07d58"/>
    </g>`

// Dots of thermal energy: packed round (cx, cy), or spread over a box. A fixed
// seed, so the picture is the same every time.
const seeded = (seed) => () => {
  seed = (seed * 16807) % 2147483647
  return (seed - 1) / 2147483646
}
const heatClose = (cx, cy, n) => {
  const r = seeded(7)
  let out = ''
  for (let i = 0; i < n; i++) {
    const a = r() * Math.PI * 2, d = 58 + r() * 38
    out += `<circle cx="${f1(cx + d * Math.cos(a) * 0.9)}" cy="${f1(cy + d * Math.sin(a) * 1.15)}" r="7" fill="${HEAT}"/>`
  }
  return out
}
const heatSpread = (x0, y0, w, h, n, avoid) => {
  const r = seeded(11)
  let out = '', k = 0
  while (k < n) {
    const x = x0 + r() * w, y = y0 + r() * h
    if (Math.abs(x - avoid.x) < 66 && Math.abs(y - avoid.y) < 100) continue
    out += `<circle cx="${f1(x)}" cy="${f1(y)}" r="7" fill="${HEAT}" fill-opacity="0.75"/>`
    k++
  }
  return out
}

// A photo in a rounded frame.
const photo = (id, href, x, y, w, h, fit = 'xMidYMid slice') => `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/></clipPath></defs>
    <image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="${fit}" clip-path="url(#${id})"/>`

// A thin leader line ending in a dot on the thing it names, with a white
// underlay so it stays visible over a photograph.
const leader = (x1, y1, x2, y2, color = KEY) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3"/><circle cx="${x2}" cy="${y2}" r="8" fill="${color}" stroke="#ffffff" stroke-width="2.5"/>`

// The water-on-a-fire photo, placed the same on the question and answer slides.
// It is 960×720, shown 584 wide: x = 268 + 0.6083·px, y = 1 + 0.6083·py.
const firePhoto = (id) => photo(id, fire, 268, 10, 584, 420)

// One bar of a lamp: `light` percent useful (green), the rest wasted (grey).
const lampBar = (x, y, w, light) => {
  const lw = (w * light) / 100
  return `<rect x="${x}" y="${y}" width="${f1(lw)}" height="66" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="3"/>
    <rect x="${f1(x + lw)}" y="${y}" width="${f1(w - lw)}" height="66" fill="${GREY_T}" stroke="${GREY}" stroke-width="3"/>`
}

// Little drawings for the English check.
const tap = (cx, cy) => `<g stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <rect x="${cx - 70}" y="${cy - 40}" width="80" height="26" rx="6" fill="#cfd8dc"/>
      <path d="M ${cx + 10} ${cy - 40} h 30 q 14 0 14 14 v 26 h -26 v -14 h -18 Z" fill="#cfd8dc"/>
      <rect x="${cx - 40}" y="${cy - 62}" width="20" height="22" rx="4" fill="#9aa5ae"/>
      <path d="M ${cx + 41} ${cy + 16} q -7 12 0 16 q 7 -4 0 -16 Z M ${cx + 41} ${cy + 48} q -7 12 0 16 q 7 -4 0 -16 Z" fill="#7fb7e0" stroke="#4f8fbf" stroke-width="2"/>
    </g>`
const umbrella = (cx, cy) => `<g stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <path d="M ${cx - 70} ${cy} Q ${cx} ${cy - 92} ${cx + 70} ${cy} Q ${cx + 47} ${cy - 14} ${cx + 23} ${cy} Q ${cx} ${cy - 14} ${cx - 23} ${cy} Q ${cx - 47} ${cy - 14} ${cx - 70} ${cy} Z" fill="${KEY}"/>
      <path d="M ${cx} ${cy - 2} V ${cy + 56} q 0 14 -14 14 q -12 0 -12 -12" fill="none"/>
      <path d="M ${cx - 96} ${cy - 66} l -8 18 M ${cx + 96} ${cy - 66} l -8 18 M ${cx - 104} ${cy - 20} l -8 18 M ${cx + 104} ${cy - 20} l -8 18" stroke="#4f8fbf"/>
    </g>`
const fog = (cx, cy) => {
  const r = seeded(3)
  let dots = ''
  for (let i = 0; i < 16; i++) dots += `<circle cx="${f1(cx + 18 + r() * 84)}" cy="${f1(cy - 48 + r() * 96)}" r="${f1(3 + r() * 3)}" fill="#9aa5ae"/>`
  return `<g stroke="#8a979e" stroke-width="2.5">
      <circle cx="${cx - 70}" cy="${cy + 6}" r="24" fill="#dfe5ea"/>
      <circle cx="${cx - 40}" cy="${cy - 16}" r="30" fill="#dfe5ea"/>
      <circle cx="${cx - 12}" cy="${cy + 8}" r="24" fill="#dfe5ea"/>
    </g>${dots}`
}
const phone = (cx, cy) => `<g stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">
      <rect x="${cx - 70}" y="${cy - 64}" width="70" height="124" rx="12" fill="#3b3f46"/>
      <rect x="${cx - 62}" y="${cy - 52}" width="54" height="94" rx="4" fill="#cfe5f5" stroke-width="1.5"/>
      <circle cx="${cx + 46}" cy="${cy - 4}" r="30" fill="${GREEN_T}" stroke="${GREEN}"/>
      <path d="M ${cx + 32} ${cy - 4} l 10 11 l 18 -22" fill="none" stroke="${GREEN}" stroke-width="5"/>
    </g>`

export const DIAGRAMS = {
  // ── The motorbike ─────────────────────────────────────────────────────────
  ANS_QUARTER: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    <text x="460" y="84" font-family="${FONT}" font-size="34" font-weight="bold" fill="${MUTED}" text-anchor="middle">about</text>
    <text x="460" y="190" font-family="${FONT}" font-size="104" font-weight="bold" fill="${BLUE}" text-anchor="middle">1/4</text>
    ${quarters(320, 224, 1, BLUE)}
  </svg>`,

  ANS_THREEQ: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    <text x="260" y="84" font-family="${FONT}" font-size="34" font-weight="bold" fill="${MUTED}" text-anchor="middle">about</text>
    <text x="260" y="190" font-family="${FONT}" font-size="104" font-weight="bold" fill="${KEY}" text-anchor="middle">3/4</text>
    ${quarters(120, 224, 3, KEY)}
  </svg>`,

  MOTO_QUARTER: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="420" y="52" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">The chemical energy in the petrol</text>
    ${block(148, 76, ORANGE_T, KEY)}${block(284, 76, ORANGE_T, KEY)}${block(420, 76, ORANGE_T, KEY)}${block(556, 76, ORANGE_T, KEY)}

    ${arrow(208, 156, 150, 300, GREEN, 5, 20)}
    ${arrow(344, 156, 432, 300, GREY, 5, 20)}
    ${arrow(480, 156, 568, 300, GREY, 5, 20)}
    ${arrow(616, 156, 704, 300, GREY, 5, 20)}

    ${block(90, 306, GREEN_T, GREEN)}
    ${block(372, 306, GREY_T, GREY)}${block(508, 306, GREY_T, GREY)}${block(644, 306, GREY_T, GREY)}

    <text x="150" y="430" font-family="${FONT}" font-size="30" font-weight="bold" fill="${GREEN}" text-anchor="middle">kinetic</text>
    <text x="150" y="464" font-family="${FONT}" font-size="24" fill="${MUTED}" text-anchor="middle">it moves</text>
    <text x="150" y="526" font-family="${FONT}" font-size="34" font-weight="bold" fill="${GREEN}" text-anchor="middle">useful</text>

    <text x="568" y="430" font-family="${FONT}" font-size="30" font-weight="bold" fill="${GREY}" text-anchor="middle">thermal and sound</text>
    <text x="568" y="464" font-family="${FONT}" font-size="24" fill="${MUTED}" text-anchor="middle">a hot, noisy engine</text>
    <text x="568" y="526" font-family="${FONT}" font-size="34" font-weight="bold" fill="${GREY}" text-anchor="middle">wasted</text>
  </svg>`,

  MOTO_DRAW: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${ebox(50, 240)}
    <text x="150" y="291" font-family="${FONT}" font-size="32" fill="${INK}" text-anchor="middle">chemical</text>
    <text x="150" y="356" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">(the petrol)</text>

    ${ebox(460, 64)}
    <text x="560" y="115" font-family="${FONT}" font-size="32" fill="${INK}" text-anchor="middle">kinetic</text>
    ${ebox(460, 240)}
    <text x="560" y="291" font-family="${FONT}" font-size="32" fill="${INK}" text-anchor="middle">thermal</text>
    ${ebox(460, 416)}
    <text x="560" y="467" font-family="${FONT}" font-size="32" fill="${INK}" text-anchor="middle">sound</text>

    ${arrow(250, 268, 456, 112, INK, 2.5, 16)}
    ${arrow(250, 280, 456, 280, INK, 2.5, 16)}
    ${arrow(250, 292, 456, 448, INK, 2.5, 16)}

    <text x="680" y="115" font-family="${FONT}" font-size="30" font-weight="bold" fill="${GREEN}">useful</text>
    <text x="680" y="291" font-family="${FONT}" font-size="30" font-weight="bold" fill="${GREY}">wasted</text>
    <text x="680" y="467" font-family="${FONT}" font-size="30" font-weight="bold" fill="${GREY}">wasted</text>
  </svg>`,

  // ── Dissipated ────────────────────────────────────────────────────────────
  DISSIPATE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="16" y="16" width="392" height="380" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    <rect x="432" y="16" width="392" height="380" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    <text x="212" y="58" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">Now</text>
    <text x="628" y="58" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">30 seconds later</text>

    ${heatClose(212, 196, 30)}
    ${palms(212, 196)}
    ${arrow(112, 186, 112, 112, MUTED, 3, 12)}${arrow(112, 206, 112, 280, MUTED, 3, 12)}
    ${heatSpread(452, 80, 352, 236, 30, { x: 628, y: 196 })}
    ${palms(628, 196)}

    <text x="212" y="340" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">warm hands: the energy</text>
    <text x="212" y="372" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">is in one place</text>
    <text x="628" y="340" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">spread out in the air:</text>
    <text x="628" y="372" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">dissipated</text>

    <text x="420" y="436" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">it spreads out</text>
    ${arrow(170, 452, 670, 452, MUTED, 4, 18)}
    ${arrow(670, 498, 170, 498, RED, 4, 18)}
    <path d="M 402 480 L 438 516 M 438 480 L 402 516" stroke="${RED}" stroke-width="7" stroke-linecap="round"/>
    <rect x="270" y="514" width="300" height="38" rx="8" fill="#ffffff"/>
    <text x="420" y="542" font-family="${FONT}" font-size="24" font-weight="bold" fill="${RED}" text-anchor="middle">cannot be recovered</text>
  </svg>`,

  WORDS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}

    <!-- waste -->
    <rect x="16" y="16" width="260" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <text x="146" y="66" font-family="${FONT}" font-size="40" font-weight="bold" fill="${KEY}" text-anchor="middle">waste</text>
    ${tap(130, 170)}
    <text x="146" y="290" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">Don't waste</text>
    <text x="146" y="318" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">water!</text>
    <text x="146" y="360" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">= use it for</text>
    <text x="146" y="386" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">nothing</text>

    <!-- useful -->
    <rect x="292" y="16" width="260" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <text x="422" y="66" font-family="${FONT}" font-size="40" font-weight="bold" fill="${KEY}" text-anchor="middle">useful</text>
    ${umbrella(422, 186)}
    <text x="422" y="290" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">An umbrella</text>
    <text x="422" y="318" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">is useful.</text>
    <text x="422" y="360" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">= it helps you</text>

    <!-- dissipate -->
    <rect x="568" y="16" width="260" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <text x="698" y="66" font-family="${FONT}" font-size="40" font-weight="bold" fill="${KEY}" text-anchor="middle">dissipate</text>
    ${fog(690, 170)}
    <text x="698" y="290" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">The fog</text>
    <text x="698" y="318" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">dissipates.</text>
    <text x="698" y="360" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">= it spreads out</text>
    <text x="698" y="386" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">until you cannot</text>
    <text x="698" y="412" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">see it</text>

    <!-- recover -->
    <rect x="844" y="16" width="260" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <text x="974" y="66" font-family="${FONT}" font-size="40" font-weight="bold" fill="${KEY}" text-anchor="middle">recover</text>
    ${phone(974, 172)}
    <text x="974" y="290" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">I recovered</text>
    <text x="974" y="318" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">my lost phone.</text>
    <text x="974" y="360" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">= I got it back</text>
  </svg>`,

  // ── Photographs ───────────────────────────────────────────────────────────
  GS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}

    <rect x="16" y="16" width="360" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u37-gs-1', fire, 26, 26, 340, 226)}
    <text x="196" y="292" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">burning wood for cooking</text>
    <text x="196" y="330" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">from the wood</text>
    <text x="196" y="374" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical to thermal</text>

    <rect x="380" y="16" width="360" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u37-gs-2', stairs, 390, 26, 340, 226)}
    <text x="560" y="292" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">walking up stairs</text>
    <text x="560" y="330" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">from your food</text>
    <text x="560" y="374" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical to kinetic</text>
    <text x="560" y="406" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">to gravitational potential</text>

    <rect x="744" y="16" width="360" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u37-gs-3', cycling, 754, 26, 340, 226)}
    <text x="924" y="292" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">cycling on a level road</text>
    <text x="924" y="330" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">from your food</text>
    <text x="924" y="374" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical to kinetic</text>
  </svg>`,

  LAMPS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    <rect x="150" y="16" width="330" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u37-lamp-a', filament, 170, 28, 290, 320, 'xMidYMid meet')}
    <text x="315" y="406" font-family="${FONT}" font-size="58" font-weight="bold" fill="${INK}" text-anchor="middle">A</text>

    <rect x="640" y="16" width="330" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u37-lamp-b', saver, 660, 28, 290, 320, 'xMidYMid meet')}
    <text x="805" y="406" font-family="${FONT}" font-size="58" font-weight="bold" fill="${INK}" text-anchor="middle">B</text>
  </svg>`,

  LAMP_BARS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}

    <rect x="16" y="16" width="1088" height="198" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    ${photo('u37-bar-a', filament, 28, 26, 110, 178, 'xMidYMid meet')}
    <text x="160" y="62" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">A: filament lamp</text>
    ${lampBar(160, 82, 920, 15)}
    <text x="229" y="125" font-family="${FONT}" font-size="26" font-weight="bold" fill="${GREEN}" text-anchor="middle">15%</text>
    <text x="689" y="125" font-family="${FONT}" font-size="26" font-weight="bold" fill="${GREY}" text-anchor="middle">85% thermal: wasted</text>
    <text x="160" y="186" font-family="${FONT}" font-size="22" font-weight="bold" fill="${GREEN}">light: useful</text>

    <rect x="16" y="226" width="1088" height="198" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    ${photo('u37-bar-b', saver, 28, 236, 110, 178, 'xMidYMid meet')}
    <text x="160" y="272" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">B: energy-saving lamp</text>
    ${lampBar(160, 292, 920, 50)}
    <text x="390" y="335" font-family="${FONT}" font-size="26" font-weight="bold" fill="${GREEN}" text-anchor="middle">50% light: useful</text>
    <text x="850" y="335" font-family="${FONT}" font-size="26" font-weight="bold" fill="${GREY}" text-anchor="middle">50% thermal: wasted</text>
  </svg>`,

  POT_Q: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${firePhoto('u37-pot-q')}
    <text x="250" y="156" font-family="${FONT}" font-size="22" font-weight="bold" fill="${GREEN}" text-anchor="end">useful:</text>
    <text x="250" y="186" font-family="${FONT}" font-size="24" font-weight="bold" fill="${GREEN}" text-anchor="end">heats the water</text>
    ${leader(256, 178, 566, 244, GREEN)}

    <text x="874" y="74" font-family="${FONT}" font-size="24" font-weight="bold" fill="${GREY}">wasted:</text>
    <text x="874" y="136" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">1</text>
    <text x="874" y="196" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">2</text>
    <text x="874" y="256" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">3</text>
    <text x="874" y="316" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">4</text>
    <text x="874" y="376" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">5</text>
    <path d="M 904 136 H 1090 M 904 196 H 1090 M 904 256 H 1090 M 904 316 H 1090 M 904 376 H 1090" stroke="${RULE}" stroke-width="3" stroke-dasharray="8 8"/>
  </svg>`,

  POT_A: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${firePhoto('u37-pot-a')}
    <text x="250" y="156" font-family="${FONT}" font-size="22" font-weight="bold" fill="${GREEN}" text-anchor="end">useful:</text>
    <text x="250" y="186" font-family="${FONT}" font-size="24" font-weight="bold" fill="${GREEN}" text-anchor="end">heats the water</text>
    ${leader(256, 178, 566, 244, GREEN)}

    <text x="250" y="74" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="end">heats the air</text>
    ${leader(256, 66, 440, 120)}
    <text x="250" y="284" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="end">heats the rocks</text>
    ${leader(256, 276, 432, 270)}
    <text x="250" y="372" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="end">light from</text>
    <text x="250" y="402" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="end">the fire</text>
    ${leader(256, 380, 520, 300)}

    <text x="874" y="122" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">steam</text>
    <text x="874" y="152" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">and smoke</text>
    ${leader(868, 130, 530, 165)}
    <text x="874" y="250" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">heats the</text>
    <text x="874" y="280" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">metal pot</text>
    ${leader(868, 258, 633, 232)}
  </svg>`,
}
