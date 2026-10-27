// content/y7-science/U03_6/diagrams.js
// Teaching diagrams for 3.6 Changes in energy.
//
//   The goals
//     PIC_CHANGE_IT / PIC_DRAW_IT / PIC_FOLLOW_IT   one picture per part of the
//                   lesson, no words (the column headings say what they are)
//   Change it
//     EVENT_PROCESS  a book falls (an event) and wood burns (a process), each
//                   with its energy change
//   Draw it
//     BOOK_DIAGRAMS  the book's three diagrams (page 113): a fire, a television
//                   (one box, two arrows), a falling book
//     ANS_CHARGE_IN / ANS_CHARGE_OUT   vote: charging a phone — which way?
//     CHARGING      charging fills the battery's chemical store; using the
//                   phone empties it again
//     POWER_STATION Draw This (page 113): a gas power station, four boxes in a
//                   chain, beside a photograph of a real one
//   Follow it
//     USEFUL_DANGER the same moving air, useful (a wind farm) and dangerous (a
//                   typhoon), as photographs
//     CANDLE        the book's candle experiment (page 115): where the heat goes,
//                   and a line graph of the oil warming up
//     ANS_COLD_IN / ANS_HEAT_OUT   vote: water freezing — what moves?
//     FREEZER       heat comes OUT of the water into the cold air, and the
//                   freezer pumps it out into the kitchen
//
// Split diagrams are drawn at 840×560, showcase ones at 1120×440, vote cards
// at 720×320 — the shapes those layouts give a picture (as in 3.4 and 3.5).
// Label <text> is written out literally so `npm run audit:svg` can measure it.
// The pictures come from art.js and carry no text. Diagrams stay in English.

import {
  INK, KEY, MUTED, TEAL, BLUE, GREEN, RED, FONT, SEA, SEA_EDGE,
  plate, arrow, leader, book, charging, tv, fire, candle, turbine, tennisBall, burner,
} from './art.js'
import gasPlantPhoto from './images/gasplant.jpg'
import windFarmPhoto from './images/windfarm.jpg'
import typhoonPhoto from './images/typhoon.jpg'

// The voting hands from 3.1.
const HAND_PATHS = '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
const leftHand = (color) => `<g transform="translate(192 76) scale(-7 7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const rightHand = (color) => `<g transform="translate(528 76) scale(7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`

// A box of the book's energy-change diagrams: white, thin dark outline.
const box = (x, y, w, h = 60) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="#ffffff" stroke="${INK}" stroke-width="3"/>`

// A photograph cropped to its cell, with rounded corners.
const photo = (id, href, x, y, w, h) => `<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/></clipPath>
    <image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="none" stroke="#cbd5e1" stroke-width="2"/>`

// A shelf on the wall, its brackets underneath.
const shelf = (x, y, w) => `<rect x="${x}" y="${y}" width="${w}" height="14" rx="3" fill="#b5835a" stroke="${INK}" stroke-width="3"/>
    <path d="M ${x + 20} ${y + 14} v 26 l 26 -26 M ${x + w - 20} ${y + 14} v 26 l -26 -26" fill="none" stroke="${MUTED}" stroke-width="5" stroke-linejoin="round"/>`

// Heat leaving something: a short red arrow.
const heat = (x1, y1, x2, y2, w = 5) => arrow(x1, y1, x2, y2, RED, w, w * 3.4)

export const DIAGRAMS = {
  // ── The goals ─────────────────────────────────────────────────────────────
  PIC_CHANGE_IT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    <line x1="40" y1="262" x2="440" y2="262" stroke="${INK}" stroke-width="4"/>
    <path d="M 80 60 Q 120 60 150 240 Q 210 40 270 240 Q 315 120 360 240 Q 392 180 420 240" fill="none" stroke="#9aa7b4" stroke-width="4" stroke-dasharray="9 9"/>
    ${tennisBall(80, 58, 24)}
    ${tennisBall(210, 116, 22)}
    ${tennisBall(392, 196, 20)}
  </svg>`,

  PIC_DRAW_IT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    ${box(36, 90, 150, 120)}
    ${box(296, 90, 150, 120)}
    ${fire(111, 140, 0.42)}
    <path d="M 340 190 q -10 -14 0 -28 q 10 -14 0 -28 M 371 190 q -10 -14 0 -28 q 10 -14 0 -28 M 402 190 q -10 -14 0 -28 q 10 -14 0 -28" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round"/>
    ${arrow(196, 150, 286, 150, INK, 6, 22)}
  </svg>`,

  PIC_FOLLOW_IT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    ${candle(240, 170, 1.0)}
    ${heat(290, 120, 380, 70, 6)}
    ${heat(296, 170, 400, 170, 6)}
    ${heat(190, 120, 100, 70, 6)}
    ${heat(184, 170, 80, 170, 6)}
  </svg>`,

  // ── Change it ─────────────────────────────────────────────────────────────
  EVENT_PROCESS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="20" y="20" width="390" height="520" rx="16" fill="#e9f1fa"/>
    <rect x="430" y="20" width="390" height="520" rx="16" fill="#fdf1e3"/>
    <text x="215" y="70" font-family="${FONT}" font-size="34" font-weight="bold" fill="${BLUE}" text-anchor="middle">an event</text>
    <text x="215" y="108" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">it happens once</text>
    ${shelf(70, 170, 180)}
    <g transform="rotate(26 230 290)">${book(230, 290, 0.9)}</g>
    <path d="M 200 156 Q 236 190 226 236" fill="none" stroke="#9aa7b4" stroke-width="4" stroke-dasharray="8 8"/>
    ${arrow(320, 230, 320, 380, BLUE, 6, 20)}
    <line x1="60" y1="410" x2="370" y2="410" stroke="${INK}" stroke-width="4"/>
    <text x="215" y="462" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}" text-anchor="middle">gravitational potential</text>
    <text x="215" y="496" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}" text-anchor="middle">→ kinetic</text>
    <text x="625" y="70" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">a process</text>
    <text x="625" y="108" font-family="${FONT}" font-size="24" fill="${INK}" text-anchor="middle">it keeps going</text>
    ${fire(625, 300, 1.05)}
    <path d="M 742 168 a 30 30 0 1 1 -20 -26" fill="none" stroke="${MUTED}" stroke-width="5" stroke-linecap="round"/>
    ${arrow(724, 148, 714, 136, MUTED, 4, 14)}
    <text x="625" y="462" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical</text>
    <text x="625" y="496" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}" text-anchor="middle">→ thermal</text>
  </svg>`,

  // ── Draw it ───────────────────────────────────────────────────────────────
  BOOK_DIAGRAMS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${fire(94, 108, 0.46)}
    ${box(206, 72, 190)}${box(560, 72, 190)}
    ${arrow(404, 102, 550, 102, INK, 4, 16)}
    <text x="301" y="111" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">chemical</text>
    <text x="655" y="111" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">thermal</text>
    <text x="94" y="182" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">a fire</text>
    <line x1="30" y1="204" x2="810" y2="204" stroke="#e2e8f0" stroke-width="2"/>
    ${tv(94, 276, 0.42)}
    ${box(206, 248, 190)}${box(560, 222, 190)}${box(560, 300, 190)}
    ${arrow(404, 278, 550, 252, INK, 4, 16)}
    ${arrow(404, 278, 550, 330, INK, 4, 16)}
    <text x="301" y="287" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">electrical</text>
    <text x="655" y="261" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">sound</text>
    <text x="655" y="339" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">light</text>
    <text x="94" y="346" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">a television</text>
    <line x1="30" y1="380" x2="810" y2="380" stroke="#e2e8f0" stroke-width="2"/>
    ${shelf(40, 418, 108)}
    <g transform="rotate(24 104 470)">${book(104, 470, 0.42)}</g>
    ${box(190, 438, 320)}${box(620, 438, 160)}
    ${arrow(518, 468, 610, 468, INK, 4, 16)}
    <text x="350" y="477" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">gravitational potential</text>
    <text x="700" y="477" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">kinetic</text>
    <text x="94" y="540" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">a falling book</text>
  </svg>`,

  ANS_CHARGE_IN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    ${box(300, 36, 300, 78)}${box(300, 206, 300, 78)}
    ${arrow(450, 122, 450, 198, BLUE, 7, 26)}
    <text x="450" y="90" font-family="${FONT}" font-size="40" font-weight="bold" fill="${BLUE}" text-anchor="middle">electrical</text>
    <text x="450" y="260" font-family="${FONT}" font-size="40" font-weight="bold" fill="${BLUE}" text-anchor="middle">chemical</text>
  </svg>`,

  ANS_CHARGE_OUT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    ${box(120, 36, 300, 78)}${box(120, 206, 300, 78)}
    ${arrow(270, 122, 270, 198, KEY, 7, 26)}
    <text x="270" y="90" font-family="${FONT}" font-size="40" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical</text>
    <text x="270" y="260" font-family="${FONT}" font-size="40" font-weight="bold" fill="${KEY}" text-anchor="middle">electrical</text>
  </svg>`,

  CHARGING: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="30" y="56" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">Charging</text>
    ${charging(170, 160, 0.72)}
    ${box(380, 128, 190)}${box(630, 128, 180)}
    ${arrow(578, 158, 622, 158, INK, 4, 16)}
    <text x="475" y="167" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">electrical</text>
    <text x="720" y="167" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical</text>
    <text x="720" y="220" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">stored in the battery</text>
    <line x1="30" y1="270" x2="810" y2="270" stroke="#e2e8f0" stroke-width="3"/>
    <text x="30" y="316" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}">Using it</text>
    <rect x="76" y="340" width="96" height="170" rx="16" fill="#3d4650" stroke="${INK}" stroke-width="3.5"/>
    <rect x="86" y="356" width="76" height="130" rx="6" fill="#fff3b0"/>
    <path d="M 192 390 q 14 24 0 48 M 212 376 q 24 38 0 76" fill="none" stroke="${KEY}" stroke-width="5" stroke-linecap="round"/>
    ${box(250, 394, 160)}${box(450, 394, 160)}${box(660, 344, 150)}${box(660, 444, 150)}
    ${arrow(414, 424, 444, 424, INK, 4, 14)}
    ${arrow(614, 424, 654, 376, INK, 4, 14)}
    ${arrow(614, 424, 654, 472, INK, 4, 14)}
    <text x="330" y="433" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}" text-anchor="middle">chemical</text>
    <text x="530" y="433" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">electrical</text>
    <text x="735" y="383" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">light</text>
    <text x="735" y="483" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">sound</text>
  </svg>`,

  POWER_STATION: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    ${photo('ps-photo', gasPlantPhoto, 20, 20, 300, 340)}
    <text x="170" y="398" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">a gas power station</text>
    <text x="170" y="426" font-family="${FONT}" font-size="19" fill="${MUTED}" text-anchor="middle">page 113</text>
    ${burner(437, 120, 0.9)}
    <path d="M 596 160 q -9 -14 0 -28 q 9 -14 0 -28 q -9 -14 0 -28 M 626 160 q -9 -14 0 -28 q 9 -14 0 -28 q -9 -14 0 -28 M 656 160 q -9 -14 0 -28 q 9 -14 0 -28 q -9 -14 0 -28" fill="none" stroke="${RED}" stroke-width="6" stroke-linecap="round"/>
    ${turbine(820, 132, 0.46)}
    <path d="M 1013 64 L 987 116 L 1007 116 L 991 164 L 1037 100 L 1015 100 L 1031 64 Z" fill="#ffd45c" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${box(352, 214, 160, 66)}${box(546, 214, 160, 66)}${box(740, 214, 160, 66)}${box(934, 214, 166, 66)}
    ${arrow(514, 247, 542, 247, INK, 4, 14)}
    ${arrow(708, 247, 736, 247, INK, 4, 14)}
    ${arrow(902, 247, 930, 247, INK, 4, 14)}
    <text x="432" y="257" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">chemical</text>
    <text x="626" y="257" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">thermal</text>
    <text x="820" y="257" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">kinetic</text>
    <text x="1017" y="257" font-family="${FONT}" font-size="27" font-weight="bold" fill="${INK}" text-anchor="middle">electrical</text>
    <text x="432" y="318" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">gas burns</text>
    <text x="626" y="318" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">very hot</text>
    <text x="820" y="318" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">generators spin</text>
    <text x="1017" y="318" font-family="${FONT}" font-size="21" fill="${KEY}" text-anchor="middle">wires to homes</text>
    <rect x="352" y="356" width="754" height="62" rx="12" fill="#e2f2f6"/>
    <text x="729" y="396" font-family="${FONT}" font-size="23" font-weight="bold" fill="${TEAL}" text-anchor="middle">Four boxes, three arrows: each arrow is a change.</text>
  </svg>`,

  // ── Follow it ─────────────────────────────────────────────────────────────
  USEFUL_DANGER: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${photo('ud-wind', windFarmPhoto, 20, 20, 800, 248)}
    ${photo('ud-storm', typhoonPhoto, 20, 292, 800, 248)}
    <rect x="34" y="34" width="372" height="86" rx="12" fill="#ffffff" opacity="0.93"/>
    <text x="52" y="70" font-family="${FONT}" font-size="28" font-weight="bold" fill="${GREEN}">useful</text>
    <text x="52" y="104" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">kinetic → electrical</text>
    <rect x="34" y="306" width="440" height="86" rx="12" fill="#ffffff" opacity="0.93"/>
    <text x="52" y="342" font-family="${FONT}" font-size="28" font-weight="bold" fill="${RED}">dangerous</text>
    <text x="52" y="376" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}">kinetic: trees knocked down</text>
    <rect x="510" y="226" width="296" height="30" rx="8" fill="#ffffff" opacity="0.9"/>
    <text x="796" y="248" font-family="${FONT}" font-size="18" fill="${INK}" text-anchor="end">a wind farm, Bạc Liêu</text>
    <rect x="480" y="498" width="326" height="30" rx="8" fill="#ffffff" opacity="0.9"/>
    <text x="796" y="520" font-family="${FONT}" font-size="18" fill="${INK}" text-anchor="end">Hà Nội after Typhoon Yagi</text>
  </svg>`,

  CANDLE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="30" y="470" width="380" height="16" rx="4" fill="#a8b5a0" stroke="${INK}" stroke-width="2.5"/>
    <path d="M 110 470 L 150 270 M 330 470 L 290 270 M 220 470 L 220 270" stroke="${MUTED}" stroke-width="7" stroke-linecap="round"/>
    <rect x="128" y="262" width="184" height="12" rx="3" fill="#c3c9d1" stroke="${INK}" stroke-width="2.5"/>
    <path d="M 160 120 L 166 254 Q 166 262 174 262 L 266 262 Q 274 262 274 254 L 280 120" fill="#ffffff" stroke="${INK}" stroke-width="3.5"/>
    <path d="M 163 178 L 166 254 Q 166 262 174 262 L 266 262 Q 274 262 274 254 L 277 178 Z" fill="#f5d77a"/>
    <path d="M 160 120 L 166 254 Q 166 262 174 262 L 266 262 Q 274 262 274 254 L 280 120" fill="none" stroke="${INK}" stroke-width="3.5"/>
    <rect x="236" y="70" width="10" height="170" rx="5" fill="#ffffff" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="241" cy="236" r="9" fill="${RED}" stroke="${INK}" stroke-width="2"/>
    ${candle(220, 404, 0.62)}
    ${heat(220, 330, 220, 290, 7)}
    ${heat(180, 352, 104, 330, 4)}
    ${heat(260, 352, 336, 330, 4)}
    ${heat(250, 296, 300, 250, 4)}
    ${leader(330, 160, 268, 200)}
    <text x="340" y="150" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}">cooking oil</text>
    ${leader(96, 160, 162, 140)}
    <text x="30" y="150" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}">glass</text>
    ${leader(330, 96, 246, 96)}
    <text x="340" y="104" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}">thermometer</text>
    <text x="30" y="324" font-family="${FONT}" font-size="25" font-weight="bold" fill="${RED}">air</text>
    <text x="350" y="324" font-family="${FONT}" font-size="25" font-weight="bold" fill="${RED}">air</text>
    ${leader(390, 420, 316, 420)}
    <text x="398" y="428" font-family="${FONT}" font-size="25" font-weight="bold" fill="${KEY}">tripod</text>
    <text x="220" y="532" font-family="${FONT}" font-size="26" font-weight="bold" fill="${INK}" text-anchor="middle">candle: chemical → thermal</text>
    <rect x="520" y="70" width="300" height="300" fill="#ffffff"/>
    <line x1="560" y1="350" x2="800" y2="350" stroke="${INK}" stroke-width="2.5"/>
    <line x1="560" y1="350" x2="560" y2="96" stroke="${INK}" stroke-width="2.5"/>
    <line x1="560" y1="290" x2="800" y2="290" stroke="#eef1f4" stroke-width="1.5"/>
    <line x1="560" y1="230" x2="800" y2="230" stroke="#eef1f4" stroke-width="1.5"/>
    <line x1="560" y1="170" x2="800" y2="170" stroke="#eef1f4" stroke-width="1.5"/>
    <line x1="560" y1="110" x2="800" y2="110" stroke="#eef1f4" stroke-width="1.5"/>
    <text x="550" y="356" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="end">20</text>
    <text x="550" y="236" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="end">25</text>
    <text x="550" y="116" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="end">30</text>
    <text x="560" y="378" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">0</text>
    <text x="620" y="378" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">1</text>
    <text x="680" y="378" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">2</text>
    <text x="740" y="378" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">3</text>
    <text x="800" y="378" font-family="${FONT}" font-size="22" fill="${MUTED}" text-anchor="middle">4</text>
    <polyline points="560,338 620,278 680,216 740,158 800,98" fill="none" stroke="${KEY}" stroke-width="4"/>
    <circle cx="560" cy="338" r="7" fill="${KEY}"/><circle cx="620" cy="278" r="7" fill="${KEY}"/><circle cx="680" cy="216" r="7" fill="${KEY}"/><circle cx="740" cy="158" r="7" fill="${KEY}"/><circle cx="800" cy="98" r="7" fill="${KEY}"/>
    <text x="500" y="62" font-family="${FONT}" font-size="23" font-weight="bold" fill="${INK}">oil temperature (°C)</text>
    <text x="800" y="414" font-family="${FONT}" font-size="23" font-weight="bold" fill="${INK}" text-anchor="end">time (minutes)</text>
    <text x="672" y="472" font-family="${FONT}" font-size="23" fill="${INK}" text-anchor="middle">Up 10 °C in 4 minutes.</text>
    <text x="672" y="506" font-family="${FONT}" font-size="23" fill="${INK}" text-anchor="middle">A line graph shows the rise.</text>
  </svg>`,

  ANS_COLD_IN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    <rect x="388" y="120" width="124" height="70" rx="8" fill="${SEA}" stroke="${INK}" stroke-width="3.5"/>
    <path d="M 388 140 H 512" stroke="${SEA_EDGE}" stroke-width="3"/>
    ${arrow(300, 155, 378, 155, BLUE, 7, 24)}
    ${arrow(600, 155, 522, 155, BLUE, 7, 24)}
    ${arrow(450, 36, 450, 110, BLUE, 7, 24)}
    <text x="450" y="268" font-family="${FONT}" font-size="40" font-weight="bold" fill="${BLUE}" text-anchor="middle">cold goes in</text>
  </svg>`,

  ANS_HEAT_OUT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    <rect x="208" y="120" width="124" height="70" rx="8" fill="${SEA}" stroke="${INK}" stroke-width="3.5"/>
    <path d="M 208 140 H 332" stroke="${SEA_EDGE}" stroke-width="3"/>
    ${arrow(198, 155, 120, 155, RED, 7, 24)}
    ${arrow(342, 155, 420, 155, RED, 7, 24)}
    ${arrow(270, 110, 270, 36, RED, 7, 24)}
    <text x="270" y="268" font-family="${FONT}" font-size="40" font-weight="bold" fill="${KEY}" text-anchor="middle">heat comes out</text>
  </svg>`,

  FREEZER: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="40" y="70" width="380" height="440" rx="18" fill="#f1f5f9" stroke="${INK}" stroke-width="4"/>
    <rect x="62" y="92" width="336" height="396" rx="10" fill="#dbeefb"/>
    <path d="M 70 300 H 390" stroke="#9fb8cc" stroke-width="5"/>
    <rect x="130" y="200" width="200" height="66" rx="8" fill="${SEA}" stroke="${INK}" stroke-width="3.5"/>
    <path d="M 150 222 h 34 v 28 h -34 z M 196 222 h 34 v 28 h -34 z M 242 222 h 34 v 28 h -34 z M 288 222 h 26 v 28 h -26 z" fill="#ffffff" opacity="0.8"/>
    ${heat(180, 196, 150, 140, 5)}
    ${heat(230, 194, 230, 132, 5)}
    ${heat(280, 196, 310, 140, 5)}
    <path d="M 420 140 h 30 v 30 h -30 M 450 170 v 30 h -30 M 420 200 h 30 v 30 h -30 M 450 230 v 30 h -30 M 420 260 h 30 v 30 h -30 M 450 290 v 30 h -30" fill="none" stroke="${MUTED}" stroke-width="6" stroke-linejoin="round"/>
    ${heat(470, 190, 560, 150, 6)}
    ${heat(470, 250, 570, 250, 6)}
    ${heat(470, 310, 560, 350, 6)}
    <text x="230" y="120" font-family="${FONT}" font-size="22" font-weight="bold" fill="${RED}" text-anchor="middle">heat comes out</text>
    <text x="230" y="332" font-family="${FONT}" font-size="21" fill="${INK}" text-anchor="middle">water → ice</text>
    <text x="230" y="380" font-family="${FONT}" font-size="22" font-weight="bold" fill="${BLUE}" text-anchor="middle">into the cold air</text>
    <text x="566" y="120" font-family="${FONT}" font-size="22" font-weight="bold" fill="${RED}">then out of the back,</text>
    <text x="566" y="148" font-family="${FONT}" font-size="22" font-weight="bold" fill="${RED}">into the kitchen</text>
    <text x="590" y="400" font-family="${FONT}" font-size="22" fill="${INK}">The back of a</text>
    <text x="590" y="430" font-family="${FONT}" font-size="22" fill="${INK}">freezer is warm.</text>
    <text x="230" y="542" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">electrical energy runs the pump</text>
    <circle cx="230" cy="448" r="18" fill="${MUTED}"/>
  </svg>`,
}

