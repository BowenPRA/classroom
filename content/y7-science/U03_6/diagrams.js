// content/y7-science/U03_6/diagrams.js
// Teaching diagrams for 3.6 Changes in energy (Learner's Book pp. 111–116).
//
//   Recall
//     EIGHT          — the eight stores and transfers from 3.5, the book's own names
//   Changes
//     HANDS_CHAIN    — breakfast → moving hands → warm hands: chemical, kinetic, thermal
//     DRAW_DIAGRAMS  — Draw This: the book's fire and television diagrams (p.113)
//     WORDS          — English check: change, process, event, everyday vs science
//     PROCESS_EVENT  — burning goes on (process); a book falls (event), with chains
//     YAGI           — Typhoon Yagi from space and a fallen tree in Hà Nội (photos)
//   Think like a scientist: candle energy (pp. 115–116)
//     CANDLE_SETUP   — the apparatus, labelled
//     ANS_BAR / ANS_LINE — vote cards: a bar chart or a line graph?
//     RESULTS_GRAPH  — Mr Bowen's results: the table and its line graph
//
// Split diagrams are drawn at about 1.4:1 (840×560), showcase ones at about
// 2.5:1 (1120×440) — the shapes those layouts actually give a picture. Vote
// cards are 720×320, as in 3.1 and Maths 2.3.
//
// Label <text> is written out literally so `npm run audit:svg` can measure it.
// Helpers below draw shapes only. Diagrams stay in English in every language.

import yagiSpace from './images/yagi_space.jpg'
import yagiHanoi from './images/yagi_hanoi.jpg'

const INK = '#2b2b2b'
const KEY = '#c25e12'
const MUTED = '#5b6770'
const RULE = '#cfd8dc'
const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const TEAL_T = '#e2f2f6'
const PURPLE_T = '#efe6f5'
const ORANGE_T = '#fdf1e3'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const f1 = (n) => Number(n.toFixed(1))

// A straight arrow with a drawn head (not a marker, so every head is the same
// size whatever the line width).
const arrow = (x1, y1, x2, y2, color = INK, w = 4, head = 18) => {
  const a = Math.atan2(y2 - y1, x2 - x1)
  const hx = x2 - head * Math.cos(a), hy = y2 - head * Math.sin(a)
  const px = head * 0.5 * Math.sin(a), py = -head * 0.5 * Math.cos(a)
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(hx)}" y2="${f1(hy)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>
    <path d="M ${f1(x2)} ${f1(y2)} L ${f1(hx + px)} ${f1(hy + py)} L ${f1(hx - px)} ${f1(hy - py)} Z" fill="${color}"/>`
}

// A thin leader line ending in a dot on the thing it names.
const leader = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${KEY}" stroke-width="2"/><circle cx="${x2}" cy="${y2}" r="4.5" fill="${KEY}"/>`

// The book's energy box: white, dark outline. Text goes in separately.
const box = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#ffffff" stroke="${INK}" stroke-width="3"/>`

// A photo in a rounded frame.
const photo = (id, href, x, y, w, h, fit = 'xMidYMid slice') => `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/></clipPath></defs>
    <image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="${fit}" clip-path="url(#${id})"/>`

// The lucide Hand outline, as on Maths 2.3's and Science 3.1's vote cards.
const HAND_PATHS = '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
const leftHand = (color) => `<g transform="translate(192 76) scale(-7 7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const rightHand = (color) => `<g transform="translate(528 76) scale(7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const handAt = (x, y, s, color = INK, mirror = false) =>
  `<g transform="translate(${x} ${y}) scale(${mirror ? -s : s} ${s})" fill="none" stroke="${color}" stroke-width="${(5 / s).toFixed(2)}" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`

// Three wavy heat lines rising from (x, y).
const heat = (x, y, color = RED) => [0, 22, 44].map((dx) =>
  `<path d="M ${x + dx} ${y} c -8 -10 8 -18 0 -28 c -8 -10 8 -18 0 -28" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>`).join('')

// A flame (teardrop) with a yellow core, base at (x, y), height h.
const flame = (x, y, h) => {
  const w = h * 0.42
  return `<path d="M ${x} ${y - h} C ${x + w} ${y - h * 0.55} ${x + w} ${y - h * 0.1} ${x} ${y} C ${x - w} ${y - h * 0.1} ${x - w} ${y - h * 0.55} ${x} ${y - h} Z" fill="#f08a24" stroke="#b5521b" stroke-width="2"/>
    <path d="M ${x} ${y - h * 0.62} C ${x + w * 0.5} ${y - h * 0.35} ${x + w * 0.5} ${y - h * 0.08} ${x} ${y - h * 0.02} C ${x - w * 0.5} ${y - h * 0.08} ${x - w * 0.5} ${y - h * 0.35} ${x} ${y - h * 0.62} Z" fill="#ffd84d"/>`
}

// Two crossed logs with flames, centred on x, logs resting at y.
const fire = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
      <rect x="-70" y="-14" width="140" height="22" rx="11" fill="#9b6b43" stroke="${INK}" stroke-width="3" transform="rotate(-12)"/>
      <rect x="-70" y="-14" width="140" height="22" rx="11" fill="#b9845a" stroke="${INK}" stroke-width="3" transform="rotate(12)"/>
      ${flame(-26, -14, 70)}${flame(24, -14, 84)}${flame(0, -18, 110)}
    </g>`

// ── Icons for the eight stores and transfers, centred on (cx, cy) ────────────
const ICON = {
  kinetic: (cx, cy) => `<circle cx="${cx + 18}" cy="${cy}" r="22" fill="#cfe5f5" stroke="${INK}" stroke-width="3"/>
    <path d="M ${cx - 40} ${cy - 12} L ${cx - 12} ${cy - 12} M ${cx - 48} ${cy} L ${cx - 10} ${cy} M ${cx - 40} ${cy + 12} L ${cx - 12} ${cy + 12}" stroke="${MUTED}" stroke-width="4" stroke-linecap="round"/>`,
  chemical: (cx, cy) => `<rect x="${cx - 36}" y="${cy - 17}" width="64" height="34" rx="5" fill="#e3f1d9" stroke="${INK}" stroke-width="3"/>
    <rect x="${cx + 28}" y="${cy - 8}" width="8" height="16" rx="2" fill="${INK}"/>
    <path d="M ${cx - 14} ${cy} L ${cx + 6} ${cy} M ${cx - 4} ${cy - 10} L ${cx - 4} ${cy + 10}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`,
  thermal: (cx, cy) => `<rect x="${cx - 8}" y="${cy - 40}" width="16" height="62" rx="8" fill="#ffffff" stroke="${INK}" stroke-width="3"/>
    <rect x="${cx - 3}" y="${cy - 16}" width="6" height="34" fill="${RED}"/>
    <circle cx="${cx}" cy="${cy + 26}" r="13" fill="${RED}" stroke="${INK}" stroke-width="3"/>`,
  elastic: (cx, cy) => `<path d="M ${cx - 46} ${cy} L ${cx - 34} ${cy} L ${cx - 26} ${cy - 16} L ${cx - 14} ${cy + 16} L ${cx - 2} ${cy - 16} L ${cx + 10} ${cy + 16} L ${cx + 22} ${cy - 16} L ${cx + 30} ${cy} L ${cx + 46} ${cy}" fill="none" stroke="${INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${cx - 46}" cy="${cy}" r="6" fill="${KEY}"/><circle cx="${cx + 46}" cy="${cy}" r="6" fill="${KEY}"/>`,
  gravitational: (cx, cy) => `<line x1="${cx - 44}" y1="${cy - 14}" x2="${cx + 10}" y2="${cy - 14}" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
    <rect x="${cx - 32}" y="${cy - 44}" width="30" height="30" rx="3" fill="${TEAL}" stroke="${INK}" stroke-width="3"/>
    <line x1="${cx + 30}" y1="${cy - 40}" x2="${cx + 30}" y2="${cy + 26}" stroke="${MUTED}" stroke-width="3" stroke-dasharray="6 6"/>
    <line x1="${cx - 44}" y1="${cy + 36}" x2="${cx + 44}" y2="${cy + 36}" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`,
  electrical: (cx, cy) => `<path d="M ${cx + 8} ${cy - 42} L ${cx - 22} ${cy + 4} L ${cx - 2} ${cy + 4} L ${cx - 10} ${cy + 42} L ${cx + 24} ${cy - 8} L ${cx + 4} ${cy - 8} Z" fill="#ffd84d" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>`,
  sound: (cx, cy) => `<path d="M ${cx - 40} ${cy - 12} L ${cx - 26} ${cy - 12} L ${cx - 8} ${cy - 28} L ${cx - 8} ${cy + 28} L ${cx - 26} ${cy + 12} L ${cx - 40} ${cy + 12} Z" fill="#e9eef2" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M ${cx + 6} ${cy - 14} Q ${cx + 18} ${cy} ${cx + 6} ${cy + 14} M ${cx + 18} ${cy - 26} Q ${cx + 38} ${cy} ${cx + 18} ${cy + 26}" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`,
  light: (cx, cy) => `<circle cx="${cx}" cy="${cy - 8}" r="20" fill="#fff3b0" stroke="${INK}" stroke-width="3"/>
    <rect x="${cx - 10}" y="${cy + 12}" width="20" height="16" rx="3" fill="#b8c1ca" stroke="${INK}" stroke-width="3"/>
    <path d="M ${cx - 40} ${cy - 8} L ${cx - 28} ${cy - 8} M ${cx + 28} ${cy - 8} L ${cx + 40} ${cy - 8} M ${cx} ${cy - 48} L ${cx} ${cy - 36} M ${cx - 28} ${cy - 36} L ${cx - 20} ${cy - 28} M ${cx + 28} ${cy - 36} L ${cx + 20} ${cy - 28}" stroke="#d99a00" stroke-width="4" stroke-linecap="round"/>`,
}

// A tile for one store or transfer: frame, tag pill and icon. Text is literal.
const tile = (x, y, kind, icon) => {
  const store = kind === 'store'
  const both = kind === 'both'
  const pw = both ? 176 : store ? 78 : 104
  const fill = both ? ORANGE_T : store ? TEAL_T : PURPLE_T
  return `<rect x="${x}" y="${y}" width="266" height="196" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <rect x="${x + 12}" y="${y + 12}" width="${pw}" height="30" rx="15" fill="${fill}"/>
    ${ICON[icon](x + 214, y + 58)}`
}

// Ground for the falling-book picture: a shelf on a wall.
const shelf = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="12" rx="3" fill="#d9bf95" stroke="${INK}" stroke-width="2.5"/>
    <path d="M ${x + 14} ${y + 12} L ${x + 14} ${y + 34} L ${x + 40} ${y + 12}" fill="none" stroke="${INK}" stroke-width="2.5"/>`

// A small television, top-left at (x, y).
const tv = (x, y) => `<rect x="${x}" y="${y}" width="110" height="76" rx="8" fill="#3b3f46" stroke="${INK}" stroke-width="3"/>
    <rect x="${x + 8}" y="${y + 8}" width="94" height="60" rx="4" fill="#cfe5f5"/>
    <path d="M ${x + 18} ${y + 58} L ${x + 44} ${y + 30} L ${x + 62} ${y + 48} L ${x + 74} ${y + 38} L ${x + 92} ${y + 58} Z" fill="#8fc27a"/>
    <path d="M ${x + 40} ${y + 92} L ${x + 55} ${y + 76} L ${x + 70} ${y + 92}" fill="none" stroke="${INK}" stroke-width="3"/>`

// Grid lines and points for the results graph. x: 0–6 min, y: 24–38 °C.
const gx = (t) => f1(390 + t * 68.33)
const gy = (T) => f1(470 - (T - 24) * 29.29)
const RESULTS = [[0, 26], [1, 27], [2, 28.5], [3, 30.5], [4, 32.5], [5, 34], [6, 36]]
const grid = () => {
  let out = ''
  for (let t = 1; t <= 6; t++) out += `<line x1="${gx(t)}" y1="60" x2="${gx(t)}" y2="470" stroke="#e6ebef" stroke-width="1.5"/>`
  for (let T = 26; T <= 38; T += 2) out += `<line x1="390" y1="${gy(T)}" x2="800" y2="${gy(T)}" stroke="#e6ebef" stroke-width="1.5"/>`
  return out
}
const resultsLine = () => `<polyline points="${RESULTS.map(([t, T]) => `${gx(t)},${gy(T)}`).join(' ')}" fill="none" stroke="${KEY}" stroke-width="4" stroke-linejoin="round"/>
    ${RESULTS.map(([t, T]) => `<circle cx="${gx(t)}" cy="${gy(T)}" r="7" fill="${INK}"/>`).join('')}`

export const DIAGRAMS = {
  // ── Recall: the eight from 3.5 ────────────────────────────────────────────
  EIGHT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${tile(16, 16, 'store', 'kinetic')}
    <text x="40" y="49" font-family="${FONT}" font-size="16" font-weight="bold" fill="${TEAL}">store</text>
    <text x="32" y="146" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">kinetic</text>
    <text x="32" y="184" font-family="${FONT}" font-size="18" fill="${MUTED}">anything moving</text>

    ${tile(290, 16, 'store', 'chemical')}
    <text x="314" y="49" font-family="${FONT}" font-size="16" font-weight="bold" fill="${TEAL}">store</text>
    <text x="306" y="146" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">chemical</text>
    <text x="306" y="184" font-family="${FONT}" font-size="18" fill="${MUTED}">food, fuel, batteries</text>

    ${tile(564, 16, 'both', 'thermal')}
    <text x="588" y="49" font-family="${FONT}" font-size="16" font-weight="bold" fill="${KEY}">store or transfer</text>
    <text x="580" y="146" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">thermal</text>
    <text x="580" y="184" font-family="${FONT}" font-size="18" fill="${MUTED}">hot objects</text>

    ${tile(838, 16, 'store', 'elastic')}
    <text x="862" y="49" font-family="${FONT}" font-size="16" font-weight="bold" fill="${TEAL}">store</text>
    <text x="854" y="138" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">elastic</text>
    <text x="854" y="168" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">potential</text>
    <text x="854" y="198" font-family="${FONT}" font-size="18" fill="${MUTED}">stretched or squeezed</text>

    ${tile(16, 228, 'store', 'gravitational')}
    <text x="40" y="261" font-family="${FONT}" font-size="16" font-weight="bold" fill="${TEAL}">store</text>
    <text x="32" y="350" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">gravitational</text>
    <text x="32" y="380" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">potential</text>
    <text x="32" y="410" font-family="${FONT}" font-size="18" fill="${MUTED}">lifted up high</text>

    ${tile(290, 228, 'transfer', 'electrical')}
    <text x="314" y="261" font-family="${FONT}" font-size="16" font-weight="bold" fill="${PURPLE}">transfer</text>
    <text x="306" y="358" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">electrical</text>
    <text x="306" y="396" font-family="${FONT}" font-size="18" fill="${MUTED}">current in wires</text>

    ${tile(564, 228, 'transfer', 'sound')}
    <text x="588" y="261" font-family="${FONT}" font-size="16" font-weight="bold" fill="${PURPLE}">transfer</text>
    <text x="580" y="358" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">sound</text>
    <text x="580" y="396" font-family="${FONT}" font-size="18" fill="${MUTED}">vibrating objects</text>

    ${tile(838, 228, 'transfer', 'light')}
    <text x="862" y="261" font-family="${FONT}" font-size="16" font-weight="bold" fill="${PURPLE}">transfer</text>
    <text x="854" y="358" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">light</text>
    <text x="854" y="396" font-family="${FONT}" font-size="18" fill="${MUTED}">luminous objects</text>
  </svg>`,

  // ── Changes ───────────────────────────────────────────────────────────────
  HANDS_CHAIN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}

    <!-- breakfast: a bowl of rice -->
    <path d="M 74 168 Q 140 116 206 168 Z" fill="#ffffff" stroke="${INK}" stroke-width="3"/>
    <path d="M 66 168 L 214 168 Q 206 232 140 236 Q 74 232 66 168 Z" fill="#e8eef3" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M 70 182 L 210 182" stroke="${BLUE}" stroke-width="4"/>
    <line x1="150" y1="96" x2="214" y2="150" stroke="#9b6b43" stroke-width="6" stroke-linecap="round"/>
    <line x1="170" y1="90" x2="224" y2="148" stroke="#9b6b43" stroke-width="6" stroke-linecap="round"/>
    <text x="140" y="290" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">breakfast</text>

    <!-- hands moving -->
    ${handAt(300, 96, 5)}
    ${handAt(540, 96, 5, INK, true)}
    ${arrow(394, 238, 446, 238, MUTED, 4, 14)}
    ${arrow(446, 238, 394, 238, MUTED, 4, 14)}
    <text x="420" y="290" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">hands move</text>

    <!-- hands warm -->
    ${handAt(640, 110, 5)}
    ${heat(668, 104)}
    <text x="700" y="290" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">hands get warm</text>

    <!-- the chain -->
    ${box(40, 320, 200, 76)}
    <text x="140" y="369" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">chemical</text>
    ${arrow(246, 358, 314, 358, INK, 4, 18)}
    ${box(320, 320, 200, 76)}
    <text x="420" y="369" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">kinetic</text>
    ${arrow(526, 358, 594, 358, INK, 4, 18)}
    ${box(600, 320, 200, 76)}
    <text x="700" y="369" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">thermal</text>

    <text x="174" y="494" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="middle">a box for</text>
    <text x="174" y="524" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="middle">each energy</text>
    ${leader(140, 466, 140, 400)}
    <text x="560" y="494" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="middle">an arrow for</text>
    <text x="560" y="524" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="middle">each change</text>
    ${leader(560, 466, 560, 361)}
  </svg>`,

  DRAW_DIAGRAMS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}

    <text x="40" y="70" font-family="${FONT}" font-size="28" font-weight="bold" fill="${KEY}">A wood fire</text>
    ${box(40, 100, 220, 76)}
    <text x="150" y="149" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">chemical</text>
    ${arrow(268, 138, 402, 138, INK, 4, 18)}
    ${box(410, 100, 220, 76)}
    <text x="520" y="149" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">thermal</text>
    ${fire(738, 168, 0.62)}

    <line x1="40" y1="222" x2="800" y2="222" stroke="${RULE}" stroke-width="2"/>

    <text x="40" y="282" font-family="${FONT}" font-size="28" font-weight="bold" fill="${KEY}">A television</text>
    ${box(40, 378, 220, 76)}
    <text x="150" y="427" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">electrical</text>
    ${arrow(266, 404, 402, 350, INK, 4, 18)}
    ${arrow(266, 428, 402, 482, INK, 4, 18)}
    ${box(410, 304, 220, 76)}
    <text x="520" y="353" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">sound</text>
    ${box(410, 448, 220, 76)}
    <text x="520" y="497" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">light</text>
    ${tv(684, 368)}
  </svg>`,

  WORDS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}

    <rect x="16" y="16" width="352" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <text x="192" y="68" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">change</text>
    <text x="40" y="118" font-family="${FONT}" font-size="18" font-weight="bold" fill="${MUTED}">EVERYDAY</text>
    <text x="40" y="152" font-family="${FONT}" font-size="24" fill="${INK}">"Here is your change."</text>
    <text x="40" y="182" font-family="${FONT}" font-size="22" fill="${MUTED}">(money you get back)</text>
    <line x1="40" y1="212" x2="344" y2="212" stroke="${RULE}" stroke-width="2"/>
    <text x="40" y="250" font-family="${FONT}" font-size="18" font-weight="bold" fill="${TEAL}">IN SCIENCE</text>
    <text x="40" y="284" font-family="${FONT}" font-size="24" fill="${INK}">Energy changes from</text>
    <text x="40" y="314" font-family="${FONT}" font-size="24" fill="${INK}">one store to another:</text>
    <text x="40" y="360" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}">chemical → thermal</text>

    <rect x="384" y="16" width="352" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <text x="560" y="68" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">process</text>
    <text x="408" y="118" font-family="${FONT}" font-size="18" font-weight="bold" fill="${MUTED}">EVERYDAY</text>
    <text x="408" y="152" font-family="${FONT}" font-size="24" fill="${INK}">Cooking rice is a</text>
    <text x="408" y="182" font-family="${FONT}" font-size="24" fill="${INK}">process: many steps.</text>
    <line x1="408" y1="212" x2="712" y2="212" stroke="${RULE}" stroke-width="2"/>
    <text x="408" y="250" font-family="${FONT}" font-size="18" font-weight="bold" fill="${TEAL}">IN SCIENCE</text>
    <text x="408" y="284" font-family="${FONT}" font-size="24" fill="${INK}">Something that goes on</text>
    <text x="408" y="314" font-family="${FONT}" font-size="24" fill="${INK}">and changes energy:</text>
    <text x="408" y="360" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}">burning</text>

    <rect x="752" y="16" width="352" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    <text x="928" y="68" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">event</text>
    <text x="776" y="118" font-family="${FONT}" font-size="18" font-weight="bold" fill="${MUTED}">EVERYDAY</text>
    <text x="776" y="152" font-family="${FONT}" font-size="24" fill="${INK}">Sports Day is a</text>
    <text x="776" y="182" font-family="${FONT}" font-size="24" fill="${INK}">school event.</text>
    <line x1="776" y1="212" x2="1080" y2="212" stroke="${RULE}" stroke-width="2"/>
    <text x="776" y="250" font-family="${FONT}" font-size="18" font-weight="bold" fill="${TEAL}">IN SCIENCE</text>
    <text x="776" y="284" font-family="${FONT}" font-size="24" fill="${INK}">Something that happens</text>
    <text x="776" y="314" font-family="${FONT}" font-size="24" fill="${INK}">and changes energy:</text>
    <text x="776" y="360" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}">a book falls</text>
  </svg>`,

  PROCESS_EVENT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}

    <rect x="16" y="16" width="396" height="528" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    <text x="214" y="62" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">process</text>
    <text x="214" y="96" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">burning goes on</text>
    ${fire(214, 262, 0.95)}
    ${box(64, 300, 300, 64)}
    <text x="214" y="343" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">chemical</text>
    ${arrow(214, 370, 214, 444, INK, 4, 18)}
    ${box(64, 450, 300, 64)}
    <text x="214" y="493" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">thermal</text>

    <rect x="428" y="16" width="396" height="528" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    <text x="626" y="62" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">event</text>
    <text x="626" y="96" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">a book falls</text>
    ${shelf(470, 150, 150)}
    <rect x="510" y="112" width="26" height="38" rx="2" fill="${RED}" stroke="${INK}" stroke-width="2.5"/>
    <rect x="538" y="118" width="22" height="32" rx="2" fill="${BLUE}" stroke="${INK}" stroke-width="2.5"/>
    <g transform="rotate(28 680 214)"><rect x="660" y="190" width="40" height="52" rx="3" fill="${TEAL}" stroke="${INK}" stroke-width="3"/><rect x="666" y="198" width="6" height="36" fill="#ffffff"/></g>
    <path d="M 620 140 Q 668 150 676 182" fill="none" stroke="${MUTED}" stroke-width="3" stroke-dasharray="6 6"/>
    <path d="M 664 262 L 664 278 M 680 266 L 680 284 M 696 262 L 696 278" stroke="${MUTED}" stroke-width="3" stroke-linecap="round"/>
    ${box(446, 300, 360, 64)}
    <text x="626" y="342" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">gravitational potential</text>
    ${arrow(626, 370, 626, 444, INK, 4, 18)}
    ${box(446, 450, 360, 64)}
    <text x="626" y="493" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">kinetic</text>
  </svg>`,

  YAGI: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${photo('u36-yagi-a', yagiSpace, 16, 16, 540, 360)}
    ${photo('u36-yagi-b', yagiHanoi, 564, 16, 540, 360)}
    <text x="286" y="414" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">Yagi from space, 4 September 2024</text>
    <text x="834" y="414" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">Hà Nội, 8 September 2024</text>
  </svg>`,

  // ── Think like a scientist: candle energy ─────────────────────────────────
  CANDLE_SETUP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <line x1="20" y1="524" x2="820" y2="524" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>

    <!-- heat-proof mat, candle -->
    <rect x="120" y="504" width="340" height="20" rx="3" fill="#8fa48a" stroke="${INK}" stroke-width="2.5"/>
    <rect x="272" y="392" width="36" height="112" rx="4" fill="#fbf6e9" stroke="${INK}" stroke-width="2.5"/>
    <line x1="290" y1="392" x2="290" y2="382" stroke="${INK}" stroke-width="3"/>
    ${flame(290, 382, 60)}

    <!-- tripod and gauze -->
    <path d="M 196 304 L 160 504 M 384 304 L 420 504" stroke="#6b7580" stroke-width="7" stroke-linecap="round"/>
    <rect x="176" y="292" width="228" height="12" rx="2" fill="#c9ced3" stroke="${INK}" stroke-width="2.5"/>
    <path d="M 196 292 L 196 304 M 216 292 L 216 304 M 236 292 L 236 304 M 256 292 L 256 304 M 276 292 L 276 304 M 296 292 L 296 304 M 316 292 L 316 304 M 336 292 L 336 304 M 356 292 L 356 304 M 376 292 L 376 304" stroke="#8a979e" stroke-width="1.5"/>

    <!-- beaker of cooking oil -->
    <path d="M 226 212 L 354 212 L 354 286 Q 354 292 348 292 L 232 292 Q 226 292 226 286 Z" fill="#f6d55c"/>
    <path d="M 218 154 L 226 160 L 226 286 Q 226 292 232 292 L 348 292 Q 354 292 354 286 L 354 154" fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <line x1="226" y1="212" x2="354" y2="212" stroke="#c9a227" stroke-width="2"/>

    <!-- thermometer and stirring rod -->
    <rect x="312" y="76" width="12" height="196" rx="6" fill="#ffffff" stroke="${INK}" stroke-width="2.5"/>
    <rect x="315" y="160" width="6" height="104" fill="${RED}"/>
    <circle cx="318" cy="270" r="9" fill="${RED}" stroke="${INK}" stroke-width="2.5"/>
    <line x1="246" y1="112" x2="268" y2="284" stroke="#9fb4c2" stroke-width="8" stroke-linecap="round"/>

    <!-- timer -->
    <rect x="612" y="470" width="110" height="52" rx="10" fill="#ffffff" stroke="${INK}" stroke-width="3"/>
    <rect x="626" y="480" width="82" height="30" rx="4" fill="#cfe5f5"/>
    <text x="667" y="503" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">1:05</text>

    <text x="560" y="104" font-family="${FONT}" font-size="24" fill="${KEY}">thermometer</text>
    ${leader(552, 96, 322, 120)}
    <text x="198" y="90" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="end">stirring rod</text>
    ${leader(204, 98, 250, 140)}
    <text x="560" y="236" font-family="${FONT}" font-size="24" fill="${KEY}">cooking oil</text>
    ${leader(552, 228, 346, 250)}
    <text x="560" y="300" font-family="${FONT}" font-size="24" fill="${KEY}">tripod and gauze</text>
    ${leader(552, 292, 402, 298)}
    <text x="142" y="396" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="end">candle</text>
    ${leader(148, 400, 274, 446)}
    <text x="100" y="452" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="middle">heat-proof</text>
    <text x="100" y="480" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="middle">mat</text>
    ${leader(124, 488, 150, 508)}
    <text x="667" y="456" font-family="${FONT}" font-size="24" fill="${KEY}" text-anchor="middle">timer</text>
  </svg>`,

  // Vote: left hand A, right hand B. Each card is the answer and nothing else.
  ANS_BAR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    <path d="M 340 40 L 340 210 L 660 210" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="356" y="180" width="30" height="30" fill="${BLUE}"/>
    <rect x="400" y="164" width="30" height="46" fill="${BLUE}"/>
    <rect x="444" y="144" width="30" height="66" fill="${BLUE}"/>
    <rect x="488" y="118" width="30" height="92" fill="${BLUE}"/>
    <rect x="532" y="94" width="30" height="116" fill="${BLUE}"/>
    <rect x="576" y="74" width="30" height="136" fill="${BLUE}"/>
    <rect x="620" y="52" width="30" height="158" fill="${BLUE}"/>
    <text x="500" y="282" font-family="${FONT}" font-size="48" font-weight="bold" fill="${BLUE}" text-anchor="middle">a bar chart</text>
  </svg>`,

  ANS_LINE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    <path d="M 60 40 L 60 210 L 480 210" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="80,190 140,176 200,156 260,130 320,104 380,84 440,58" fill="none" stroke="${KEY}" stroke-width="5" stroke-linejoin="round"/>
    <circle cx="80" cy="190" r="7" fill="${INK}"/><circle cx="140" cy="176" r="7" fill="${INK}"/><circle cx="200" cy="156" r="7" fill="${INK}"/>
    <circle cx="260" cy="130" r="7" fill="${INK}"/><circle cx="320" cy="104" r="7" fill="${INK}"/><circle cx="380" cy="84" r="7" fill="${INK}"/>
    <circle cx="440" cy="58" r="7" fill="${INK}"/>
    <text x="268" y="282" font-family="${FONT}" font-size="48" font-weight="bold" fill="${KEY}" text-anchor="middle">a line graph</text>
  </svg>`,

  RESULTS_GRAPH: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}

    <!-- the table -->
    <rect x="20" y="40" width="270" height="72" rx="8" fill="${TEAL}"/>
    <text x="75" y="70" font-family="${FONT}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">time</text>
    <text x="75" y="96" font-family="${FONT}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">(min)</text>
    <text x="210" y="70" font-family="${FONT}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">temperature</text>
    <text x="210" y="96" font-family="${FONT}" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">(°C)</text>
    <rect x="20" y="112" width="270" height="54" fill="#f7f9fa"/>
    <rect x="20" y="220" width="270" height="54" fill="#f7f9fa"/>
    <rect x="20" y="328" width="270" height="54" fill="#f7f9fa"/>
    <rect x="20" y="436" width="270" height="54" fill="#f7f9fa"/>
    <line x1="130" y1="112" x2="130" y2="490" stroke="${RULE}" stroke-width="2"/>
    <rect x="20" y="40" width="270" height="450" rx="8" fill="none" stroke="${RULE}" stroke-width="2"/>
    <text x="75" y="147" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">0</text>
    <text x="210" y="147" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">26.0</text>
    <text x="75" y="201" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">1</text>
    <text x="210" y="201" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">27.0</text>
    <text x="75" y="255" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">2</text>
    <text x="210" y="255" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">28.5</text>
    <text x="75" y="309" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">3</text>
    <text x="210" y="309" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">30.5</text>
    <text x="75" y="363" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">4</text>
    <text x="210" y="363" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">32.5</text>
    <text x="75" y="417" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">5</text>
    <text x="210" y="417" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">34.0</text>
    <text x="75" y="471" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">6</text>
    <text x="210" y="471" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">36.0</text>

    <!-- the graph -->
    ${grid()}
    <path d="M 390 50 L 390 470 L 812 470" fill="none" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${resultsLine()}
    <text x="380" y="418" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">26</text>
    <text x="380" y="360" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">28</text>
    <text x="380" y="301" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">30</text>
    <text x="380" y="243" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">32</text>
    <text x="380" y="184" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">34</text>
    <text x="380" y="125" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">36</text>
    <text x="380" y="67" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="end">38</text>
    <text x="390" y="496" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="middle">0</text>
    <text x="458" y="496" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="middle">1</text>
    <text x="527" y="496" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="middle">2</text>
    <text x="595" y="496" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="middle">3</text>
    <text x="663" y="496" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="middle">4</text>
    <text x="732" y="496" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="middle">5</text>
    <text x="800" y="496" font-family="${FONT}" font-size="18" fill="${MUTED}" text-anchor="middle">6</text>
    <text x="600" y="532" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">time (min)</text>
    <text x="400" y="36" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}">temperature (°C)</text>
  </svg>`,
}
