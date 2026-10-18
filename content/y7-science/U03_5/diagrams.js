// content/y7-science/U03_5/diagrams.js
// Teaching diagrams for 3.5 Energy (Learner's Book pp. 105–110).
//
//   The joule
//     APPLE_LIFT    — lift an apple 1 m: about 1 joule (3.1's apple was 1 N)
//     RANK_ASK      — stairs, a 100 m run, a litre of boiling water (photos, no numbers)
//     RANK_ANSWER   — the book's numbers as a pictogram: 1, 10 and 200 squares of 2000 J
//   Stores and transfers
//     STORE_TRANSFER— English check: stored (rice in a sack), transferred (money between phones)
//     CHEMICAL      — food, fuels, batteries (photos)
//     ANS_YES / ANS_NO — vote cards: is the Moon luminous?
//     LUMINOUS      — the Sun gives out light; the Moon is lit by it (photos)
//     TABLE_BLANK   — Draw This: the book's eight, two columns to fill; one model row (fuels)
//     TABLE_FULL    — the same table, filled in
//     BUS           — the book's bus going uphill (p.107), seven labels
//   Storing energy
//     KEEP_ASK      — six stores, photographed, under a left-hand / right-hand key
//     ROOF_TANK     — stainless water tanks on a Saigon roof: gravitational potential
//     KEEP_SORTED   — the same six, sorted: lasts a long time / does not last
//
// Split diagrams are drawn at about 1.4:1 (840×560), showcase ones at about
// 2.5:1 (1120×440) — the shapes those layouts actually give a picture. Every
// diagram stays in English, as in every deck.
//
// Label <text> is written out literally so `npm run audit:svg` can measure it.
// Helpers below draw shapes only.

import stairs from './images/stairs.jpg'
import sprint from './images/sprint.jpg'
import kettle from './images/kettle.jpg'
import food from './images/food.jpg'
import coal from './images/coal.jpg'
import battery from './images/battery.jpg'
import batteries from './images/batteries.jpg'
import rice from './images/rice.jpg'
import pho from './images/pho.jpg'
import ball from './images/ball.jpg'
import roof from './images/roof.jpg'
import rooftank from './images/rooftank.jpg'
import moon from './images/moon.jpg'
import sun from './images/sun.jpg'

const INK = '#2b2b2b'
const KEY = '#c25e12'
const MUTED = '#5b6770'
const RULE = '#cfd8dc'
const TEAL = '#0087a8'
const BLUE = '#1a5fa8'
const TEAL_T = '#e2f2f6'
const ORANGE_T = '#fdf1e3'
const LIGHT = '#e8a317'

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

// A thin leader line ending in a dot on the thing it names.
const leader = (x1, y1, x2, y2) =>
  `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${KEY}" stroke-width="2"/><circle cx="${f1(x2)}" cy="${f1(y2)}" r="4.5" fill="${KEY}"/>`

// A photo in a rounded frame.
const photo = (id, href, x, y, w, h, fit = 'xMidYMid slice') => `<defs><clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/></clipPath></defs>
    <image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="${fit}" clip-path="url(#${id})"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="none" stroke="${RULE}" stroke-width="1.5"/>`

// A photo clipped to a circle.
const disc = (id, href, cx, cy, r) => `<defs><clipPath id="${id}"><circle cx="${cx}" cy="${cy}" r="${r}"/></clipPath></defs>
    <image href="${href}" x="${cx - r}" y="${cy - r}" width="${2 * r}" height="${2 * r}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>`

// The lucide Hand outline, as on Maths 2.3's and Science 3.1's vote cards. A
// left hand is the same drawing mirrored: seen from behind, thumb on the right.
const HAND_PATHS = '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
const leftHand = (color) => `<g transform="translate(192 76) scale(-7 7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const rightHand = (color) => `<g transform="translate(528 76) scale(7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`

// A block of small squares, `cols` to a row: one square = 2000 J.
const squares = (x0, y0, n, cols, size = 16, gap = 2, fill = KEY) => {
  let out = ''
  for (let i = 0; i < n; i++) {
    const x = x0 + (i % cols) * (size + gap)
    const y = y0 + Math.floor(i / cols) * (size + gap)
    out += `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="2" fill="${fill}"/>`
  }
  return out
}

// A letter in a teal disc (A, B, C on a panel).
const badge = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="24" fill="${TEAL}" stroke="#ffffff" stroke-width="3"/>`

// A phone, centred on (x, y).
const phone = (x, y) => `<rect x="${x - 46}" y="${y - 80}" width="92" height="160" rx="14" fill="#3b3f46" stroke="${INK}" stroke-width="3"/>
    <rect x="${x - 38}" y="${y - 64}" width="76" height="124" rx="4" fill="#e2f2f6"/>
    <circle cx="${x}" cy="${y + 70}" r="4" fill="#9aa5ae"/>`

// The bus scene is drawn level, then turned 9° to climb the hill. R() turns a
// point of the level drawing the same way, so a leader line can find it.
const BUS_C = [560, 250]
const BUS_A = (-9 * Math.PI) / 180
const R = (x, y) => {
  const dx = x - BUS_C[0], dy = y - BUS_C[1]
  return [f1(BUS_C[0] + dx * Math.cos(BUS_A) - dy * Math.sin(BUS_A)), f1(BUS_C[1] + dx * Math.sin(BUS_A) + dy * Math.cos(BUS_A))]
}
const busLeader = (lx, ly, x, y) => leader(lx, ly, ...R(x, y))
const BUS_SCENE = `<g transform="rotate(-9 ${BUS_C[0]} ${BUS_C[1]})">
      <rect x="300" y="342" width="700" height="26" fill="#d6d3cb" stroke="${INK}" stroke-width="3"/>
      <path d="M 790 278 L 790 294 L 930 330 L 930 236 Z" fill="#fff3b0" opacity="0.85"/>
      <path d="M 268 210 L 312 210 M 254 244 L 312 244 M 268 278 L 312 278" stroke="${MUTED}" stroke-width="4" stroke-linecap="round"/>
      <rect x="330" y="166" width="460" height="146" rx="18" fill="#f6d55c" stroke="${INK}" stroke-width="3"/>
      <rect x="330" y="272" width="460" height="12" fill="#3b3f46"/>
      ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${356 + i * 58}" y="186" width="46" height="50" rx="5" fill="#cfe5f5" stroke="${INK}" stroke-width="2"/>`).join('')}
      <rect x="712" y="186" width="58" height="62" rx="5" fill="#cfe5f5" stroke="${INK}" stroke-width="2"/>
      <rect x="334" y="214" width="14" height="52" rx="3" fill="#9aa5ae" stroke="${INK}" stroke-width="2"/>
      <rect x="508" y="290" width="56" height="18" rx="4" fill="#9aa5ae" stroke="${INK}" stroke-width="2"/>
      <circle cx="782" cy="286" r="9" fill="#fff3b0" stroke="${INK}" stroke-width="2"/>
      <circle cx="420" cy="312" r="30" fill="#3b3f46" stroke="${INK}" stroke-width="3"/><circle cx="420" cy="312" r="11" fill="#cfd8dc"/>
      <circle cx="704" cy="312" r="30" fill="#3b3f46" stroke="${INK}" stroke-width="3"/><circle cx="704" cy="312" r="11" fill="#cfd8dc"/>
    </g>`

// One table, drawn once: the frame, the header strip and the rules.
const TABLE_X = [20, 400, 680, 1100]
const TABLE_TOP = 20
const ROW_H = 44
const tableFrame = () => {
  const bottom = TABLE_TOP + ROW_H * 9
  let out = `<rect x="${TABLE_X[0]}" y="${TABLE_TOP}" width="${TABLE_X[3] - TABLE_X[0]}" height="${ROW_H}" fill="${TEAL_T}"/>`
  for (let r = 1; r < 9; r++) out += `<line x1="${TABLE_X[0]}" y1="${TABLE_TOP + r * ROW_H}" x2="${TABLE_X[3]}" y2="${TABLE_TOP + r * ROW_H}" stroke="${RULE}" stroke-width="2"/>`
  for (const x of [TABLE_X[1], TABLE_X[2]]) out += `<line x1="${x}" y1="${TABLE_TOP}" x2="${x}" y2="${bottom}" stroke="${INK}" stroke-width="2"/>`
  out += `<rect x="${TABLE_X[0]}" y="${TABLE_TOP}" width="${TABLE_X[3] - TABLE_X[0]}" height="${bottom - TABLE_TOP}" fill="none" stroke="${INK}" stroke-width="2.5"/>`
  return out
}

export const DIAGRAMS = {
  // ── The joule ─────────────────────────────────────────────────────────────
  APPLE_LIFT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="84" y="488" width="16" height="56" fill="#d9bf95" stroke="${INK}" stroke-width="2"/>
    <rect x="420" y="488" width="16" height="56" fill="#d9bf95" stroke="${INK}" stroke-width="2"/>
    <rect x="60" y="468" width="400" height="20" rx="4" fill="#ecd9b8" stroke="${INK}" stroke-width="3"/>

    <circle cx="200" cy="442" r="25" fill="none" stroke="${MUTED}" stroke-width="3" stroke-dasharray="7 6"/>
    ${arrow(200, 404, 200, 196, TEAL, 7, 24)}
    <circle cx="200" cy="158" r="27" fill="#e04b3a" stroke="#8e2a1f" stroke-width="3"/>
    <path d="M 200 131 L 205 114" stroke="#6d4c2e" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="222" cy="120" rx="15" ry="8" transform="rotate(-30 222 120)" fill="#6abf4b" stroke="#3e7c27" stroke-width="2"/>
    <text x="200" y="76" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">an apple: about 1 N</text>

    <line x1="320" y1="158" x2="320" y2="442" stroke="${INK}" stroke-width="3"/>
    <line x1="306" y1="158" x2="334" y2="158" stroke="${INK}" stroke-width="3"/>
    <line x1="306" y1="442" x2="334" y2="442" stroke="${INK}" stroke-width="3"/>
    <text x="340" y="310" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}">1 metre</text>

    <rect x="530" y="200" width="270" height="200" rx="18" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="3"/>
    <text x="665" y="252" font-family="${FONT}" font-size="26" fill="${MUTED}" text-anchor="middle">about</text>
    <text x="665" y="322" font-family="${FONT}" font-size="54" font-weight="bold" fill="${KEY}" text-anchor="middle">1 joule</text>
    <text x="665" y="372" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}" text-anchor="middle">1 J</text>
  </svg>`,

  RANK_ASK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}

    <rect x="20" y="16" width="350" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u35-rank-a', stairs, 30, 26, 330, 260)}
    ${badge(66, 62)}
    <text x="66" y="73" font-family="${FONT}" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">A</text>
    <text x="195" y="334" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Walk up the stairs</text>
    <text x="195" y="368" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">to the next floor</text>

    <rect x="385" y="16" width="350" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u35-rank-b', sprint, 395, 26, 330, 260)}
    ${badge(431, 62)}
    <text x="431" y="73" font-family="${FONT}" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">B</text>
    <text x="560" y="334" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Run 100 metres</text>

    <rect x="750" y="16" width="350" height="408" rx="14" fill="#ffffff" stroke="${RULE}" stroke-width="2"/>
    ${photo('u35-rank-c', kettle, 760, 26, 330, 260, 'xMidYMid meet')}
    ${badge(796, 62)}
    <text x="796" y="73" font-family="${FONT}" font-size="30" font-weight="bold" fill="#ffffff" text-anchor="middle">C</text>
    <text x="925" y="334" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">Boil 1 litre</text>
    <text x="925" y="368" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">of water</text>
  </svg>`,

  RANK_ANSWER: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}

    <text x="30" y="70" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}">A · up 1 floor</text>
    ${squares(340, 52, 1, 1)}
    <text x="372" y="70" font-family="${FONT}" font-size="28" font-weight="bold" fill="${KEY}">2000 J</text>

    <text x="30" y="148" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}">B · run 100 m</text>
    ${squares(340, 130, 10, 10)}
    <text x="534" y="148" font-family="${FONT}" font-size="28" font-weight="bold" fill="${KEY}">20 000 J</text>
    <text x="680" y="148" font-family="${FONT}" font-size="22" fill="${MUTED}">200 J × 100 metres</text>

    <text x="30" y="262" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}">C · boil 1 litre</text>
    ${squares(340, 206, 200, 40)}
    <text x="340" y="346" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}">400 000 J</text>
    <text x="540" y="346" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}">= 200 floors of stairs!</text>

    <line x1="30" y1="380" x2="1090" y2="380" stroke="${RULE}" stroke-width="2"/>
    ${squares(30, 398, 1, 1)}
    <text x="58" y="413" font-family="${FONT}" font-size="22" fill="${MUTED}">= 2000 J, the energy to walk up one floor (Learner’s Book, page 106)</text>
  </svg>`,

  // ── Stores and transfers ──────────────────────────────────────────────────
  STORE_TRANSFER: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}

    <rect x="16" y="16" width="396" height="528" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    <text x="214" y="74" font-family="${FONT}" font-size="46" font-weight="bold" fill="${KEY}" text-anchor="middle">stored</text>
    <path d="M 150 360 Q 136 250 168 190 L 158 160 Q 214 150 270 160 L 260 190 Q 292 250 278 360 Z" fill="#f3ead7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M 160 166 Q 214 182 268 166" fill="none" stroke="${KEY}" stroke-width="5" stroke-linecap="round"/>
    <text x="214" y="290" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">rice</text>
    <text x="214" y="440" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">Rice is stored</text>
    <text x="214" y="476" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">in a sack.</text>

    <rect x="428" y="16" width="396" height="528" rx="14" fill="#fbfcfd" stroke="${RULE}" stroke-width="2"/>
    <text x="626" y="74" font-family="${FONT}" font-size="46" font-weight="bold" fill="${KEY}" text-anchor="middle">transferred</text>
    ${phone(512, 260)}
    ${phone(740, 260)}
    ${arrow(572, 260, 682, 260, TEAL, 6, 20)}
    <circle cx="626" cy="214" r="20" fill="#f6d55c" stroke="${INK}" stroke-width="3"/>
    <text x="626" y="440" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">Money is transferred</text>
    <text x="626" y="476" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">to a friend’s phone.</text>
  </svg>`,

  CHEMICAL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${photo('u35-chem-food', food, 16, 16, 260, 456)}
    ${photo('u35-chem-fuel', coal, 290, 16, 260, 456)}
    ${photo('u35-chem-batt', batteries, 564, 16, 260, 456)}
    <text x="146" y="520" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">food</text>
    <text x="420" y="520" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">fuels</text>
    <text x="694" y="520" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">batteries</text>
  </svg>`,

  ANS_YES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    ${disc('u35-ans-y', moon, 452, 100, 72)}
    <text x="452" y="270" font-family="${FONT}" font-size="76" font-weight="bold" fill="${BLUE}" text-anchor="middle">Yes</text>
  </svg>`,

  ANS_NO: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    ${disc('u35-ans-n', moon, 268, 100, 72)}
    <text x="268" y="270" font-family="${FONT}" font-size="76" font-weight="bold" fill="${KEY}" text-anchor="middle">No</text>
  </svg>`,

  LUMINOUS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="175" y="60" font-family="${FONT}" font-size="32" font-weight="bold" fill="${INK}" text-anchor="middle">the Sun</text>
    ${disc('u35-lum-sun', sun, 175, 210, 115)}
    <text x="175" y="392" font-family="${FONT}" font-size="38" font-weight="bold" fill="${KEY}" text-anchor="middle">luminous</text>

    ${arrow(298, 186, 562, 166, LIGHT, 7, 24)}
    ${arrow(296, 236, 566, 204, LIGHT, 7, 24)}

    <text x="660" y="60" font-family="${FONT}" font-size="32" font-weight="bold" fill="${INK}" text-anchor="middle">the Moon</text>
    ${disc('u35-lum-moon', moon, 660, 182, 86)}
    ${arrow(660, 278, 660, 420, LIGHT, 7, 24)}
    <text x="634" y="334" font-family="${FONT}" font-size="36" font-weight="bold" fill="${MUTED}" text-anchor="end">not luminous</text>
    <text x="634" y="374" font-family="${FONT}" font-size="27" fill="${INK}" text-anchor="end">lit up by the Sun</text>

    <g fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="660" cy="454" r="15" fill="#ffffff"/>
      <path d="M 660 469 L 660 510 M 638 486 L 682 486 M 660 510 L 645 540 M 660 510 L 675 540"/>
    </g>
    <text x="694" y="504" font-family="${FONT}" font-size="27" fill="${MUTED}">you see it</text>
  </svg>`,

  TABLE_BLANK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${tableFrame()}
    <text x="36" y="51" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">Energy</text>
    <text x="416" y="51" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">Store or transfer?</text>
    <text x="696" y="51" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">Example</text>
    <text x="36" y="95" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">kinetic</text>
    <text x="36" y="139" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">chemical</text>
    <text x="36" y="183" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">thermal</text>
    <text x="36" y="227" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">elastic potential</text>
    <text x="36" y="271" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">gravitational potential</text>
    <text x="36" y="315" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">electrical</text>
    <text x="36" y="359" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">sound</text>
    <text x="36" y="403" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">light</text>
    <text x="696" y="139" font-family="${FONT}" font-size="23" fill="${INK}">fuels: wood, coal, oil</text>
  </svg>`,

  TABLE_FULL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${tableFrame()}
    <text x="36" y="51" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">Energy</text>
    <text x="416" y="51" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">Store or transfer?</text>
    <text x="696" y="51" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">Example</text>
    <text x="36" y="95" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">kinetic</text>
    <text x="36" y="139" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">chemical</text>
    <text x="36" y="183" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">thermal</text>
    <text x="36" y="227" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">elastic potential</text>
    <text x="36" y="271" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">gravitational potential</text>
    <text x="36" y="315" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">electrical</text>
    <text x="36" y="359" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">sound</text>
    <text x="36" y="403" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">light</text>
    <text x="416" y="95" font-family="${FONT}" font-size="23" fill="${INK}">store</text>
    <text x="416" y="139" font-family="${FONT}" font-size="23" fill="${INK}">store</text>
    <text x="416" y="183" font-family="${FONT}" font-size="23" font-weight="bold" fill="${BLUE}">store or transfer</text>
    <text x="416" y="227" font-family="${FONT}" font-size="23" fill="${INK}">store</text>
    <text x="416" y="271" font-family="${FONT}" font-size="23" fill="${INK}">store</text>
    <text x="416" y="315" font-family="${FONT}" font-size="23" fill="${INK}">transfer</text>
    <text x="416" y="359" font-family="${FONT}" font-size="23" fill="${INK}">transfer</text>
    <text x="416" y="403" font-family="${FONT}" font-size="23" fill="${INK}">transfer</text>
    <text x="696" y="95" font-family="${FONT}" font-size="23" fill="${INK}">a moving motorbike</text>
    <text x="696" y="139" font-family="${FONT}" font-size="23" fill="${INK}">fuels: wood, coal, oil</text>
    <text x="696" y="183" font-family="${FONT}" font-size="23" fill="${INK}">a hot bowl of phở</text>
    <text x="696" y="227" font-family="${FONT}" font-size="23" fill="${INK}">a stretched bow</text>
    <text x="696" y="271" font-family="${FONT}" font-size="23" fill="${INK}">water in a tank on the roof</text>
    <text x="696" y="315" font-family="${FONT}" font-size="23" fill="${INK}">current in a wire</text>
    <text x="696" y="359" font-family="${FONT}" font-size="23" fill="${INK}">a vibrating string</text>
    <text x="696" y="403" font-family="${FONT}" font-size="23" fill="${INK}">the Sun, a lamp</text>
  </svg>`,

  BUS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${BUS_SCENE}

    <text x="600" y="40" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">kinetic</text>
    <text x="600" y="68" font-family="${FONT}" font-size="20" fill="${INK}" text-anchor="middle">the bus is moving</text>
    ${busLeader(600, 80, 600, 168)}

    <text x="30" y="172" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">thermal</text>
    <text x="30" y="200" font-family="${FONT}" font-size="20" fill="${INK}">the engine is hot</text>
    ${busLeader(200, 192, 341, 226)}

    <text x="30" y="292" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">sound</text>
    <text x="30" y="320" font-family="${FONT}" font-size="20" fill="${INK}">the engine makes a noise</text>
    ${busLeader(268, 300, 341, 258)}

    <text x="1090" y="120" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="end">electrical</text>
    <text x="1090" y="148" font-family="${FONT}" font-size="20" fill="${INK}" text-anchor="end">for the lights</text>
    ${busLeader(1000, 158, 782, 286)}

    <text x="170" y="404" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">elastic potential</text>
    <text x="170" y="430" font-family="${FONT}" font-size="20" fill="${INK}" text-anchor="middle">the tyres are squeezed</text>
    ${busLeader(262, 384, 420, 340)}

    <text x="560" y="408" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical</text>
    <text x="560" y="432" font-family="${FONT}" font-size="20" fill="${INK}" text-anchor="middle">the bus carries fuel</text>
    ${busLeader(560, 386, 536, 299)}

    <text x="910" y="396" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">gravitational potential</text>
    <text x="910" y="422" font-family="${FONT}" font-size="20" fill="${INK}" text-anchor="middle">the bus is going uphill</text>
    ${busLeader(862, 374, 760, 300)}
  </svg>`,

  // The book's Question 1 circuit (p.109): a flat battery, two wires, a bulb.
  CIRCUIT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <path d="M 362 238 C 170 236 190 110 384 202" fill="none" stroke="#4f8fbf" stroke-width="7" stroke-linecap="round"/>
    <path d="M 458 238 C 650 236 630 110 436 202" fill="none" stroke="#4f8fbf" stroke-width="7" stroke-linecap="round"/>
    <rect x="300" y="244" width="220" height="230" rx="16" fill="#3f8f5a" stroke="${INK}" stroke-width="3"/>
    <rect x="350" y="226" width="24" height="22" rx="3" fill="#d9b44a" stroke="${INK}" stroke-width="2"/>
    <rect x="446" y="226" width="24" height="22" rx="3" fill="#d9b44a" stroke="${INK}" stroke-width="2"/>
    <text x="410" y="376" font-family="${FONT}" font-size="34" font-weight="bold" fill="#ffffff" text-anchor="middle">4.5 V</text>
    <rect x="378" y="192" width="64" height="26" rx="5" fill="#d64541" stroke="${INK}" stroke-width="2.5"/>
    <rect x="396" y="160" width="28" height="34" rx="3" fill="#b8c1ca" stroke="${INK}" stroke-width="2"/>
    <path d="M 410 124 L 410 160" stroke="${INK}" stroke-width="2"/>
    <circle cx="410" cy="126" r="34" fill="#fff3b0" stroke="${INK}" stroke-width="2.5"/>
    <path d="M 410 70 L 410 54 M 360 84 L 348 72 M 460 84 L 472 72 M 346 128 L 330 128 M 474 128 L 490 128" stroke="${LIGHT}" stroke-width="5" stroke-linecap="round"/>

    <text x="120" y="436" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">battery</text>
    ${leader(240, 426, 300, 420)}
    <text x="700" y="290" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">wires</text>
    ${leader(694, 280, 584, 186)}
    <text x="560" y="70" font-family="${FONT}" font-size="30" font-weight="bold" fill="${KEY}">bulb</text>
    ${leader(552, 64, 436, 108)}
  </svg>`,

  // ── Storing energy ────────────────────────────────────────────────────────
  // The vote key sits across the top, big enough for the back row.
  KEEP_ASK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    <rect x="16" y="10" width="536" height="52" rx="12" fill="#e9f1fa" stroke="${BLUE}" stroke-width="2"/>
    <g transform="translate(70 14) scale(-1.8 1.8)" fill="none" stroke="${BLUE}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>
    <text x="84" y="46" font-family="${FONT}" font-size="26" font-weight="bold" fill="${BLUE}">Left hand: a long time</text>
    <rect x="568" y="10" width="536" height="52" rx="12" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <g transform="translate(1052 14) scale(1.8)" fill="none" stroke="${KEY}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>
    <text x="1040" y="46" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="end">Right hand: not for long</text>

    ${photo('u35-keep-1', rice, 16, 74, 356, 132)}
    ${photo('u35-keep-2', pho, 382, 74, 356, 132)}
    ${photo('u35-keep-3', coal, 748, 74, 356, 132)}
    <text x="194" y="232" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">uncooked rice</text>
    <text x="560" y="232" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">a hot bowl of phở</text>
    <text x="926" y="232" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">coal</text>
    ${photo('u35-keep-4', ball, 16, 250, 356, 132)}
    ${photo('u35-keep-5', battery, 382, 250, 356, 132)}
    ${photo('u35-keep-6', rooftank, 748, 250, 356, 132)}
    <text x="194" y="410" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">a bouncing ball</text>
    <text x="560" y="410" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">a battery</text>
    <text x="926" y="410" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">water in a roof tank</text>
  </svg>`,

  // Slide 11: stainless water tanks on a Saigon roof. Every house has one, and
  // it is why the taps run without a pump: the water is stored up high.
  ROOF_TANK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${photo('u35-roof', roof, 0, 0, 840, 560)}
    <rect x="20" y="20" width="340" height="60" rx="14" fill="#ffffff" fill-opacity="0.94"/>
    <text x="190" y="60" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">water tanks on a roof</text>
    ${leader(240, 80, 405, 262)}
    ${leader(320, 80, 528, 240)}
  </svg>`,

  KEEP_SORTED: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="16" y="16" width="520" height="528" rx="14" fill="${TEAL_T}" stroke="${TEAL}" stroke-width="2"/>
    <text x="276" y="58" font-family="${FONT}" font-size="32" font-weight="bold" fill="${TEAL}" text-anchor="middle">lasts a long time</text>
    ${photo('u35-sort-1', rice, 32, 76, 236, 150)}
    ${photo('u35-sort-3', coal, 284, 76, 236, 150)}
    <text x="150" y="258" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">rice</text>
    <text x="150" y="286" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">chemical</text>
    <text x="402" y="258" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">coal</text>
    <text x="402" y="286" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">chemical</text>
    ${photo('u35-sort-6', rooftank, 32, 304, 236, 150)}
    ${photo('u35-sort-5', battery, 284, 304, 236, 150)}
    <text x="150" y="486" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">a roof tank</text>
    <text x="150" y="514" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">gravitational potential</text>
    <text x="402" y="486" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">a battery</text>
    <text x="402" y="514" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">chemical</text>

    <rect x="552" y="16" width="272" height="528" rx="14" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="688" y="58" font-family="${FONT}" font-size="32" font-weight="bold" fill="${KEY}" text-anchor="middle">does not last</text>
    ${photo('u35-sort-2', pho, 568, 76, 240, 150)}
    <text x="688" y="258" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">hot phở</text>
    <text x="688" y="286" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">thermal</text>
    ${photo('u35-sort-4', ball, 568, 304, 240, 150)}
    <text x="688" y="486" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">a bouncing ball</text>
    <text x="688" y="514" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">kinetic</text>
  </svg>`,
}
