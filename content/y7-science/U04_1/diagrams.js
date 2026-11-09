// content/y7-science/U04_1/diagrams.js
// Teaching diagrams for 4.1 Characteristics of living organisms.
//
//   The goals
//     PIC_SPOT_IT / PIC_NAME_IT / PIC_TEST_IT   one picture per part of the
//                   lesson, no words (the column headings say what they are)
//   Spot it
//     TREE          a big tree (page 128: plants have no heart and do not
//                   breathe like you, yet they are alive)
//     ORGANISMS     organisms: the book's polar bears, the tree, a buffalo, you
//   Name them
//     ANS_BREATHING / ANS_CELLS   vote: what does respiration mean?
//     MRS / GREN    the seven, letter and picture, beside their write panels
//     SENSE_EVERYDAY / SENSE_SCIENCE   "sensitive" in everyday English and
//                   in science
//   Test it
//     CAR           Activity 4.1.1: is a car alive? (page 129)
//     ALL_SEVEN     put it together: the bear does all seven, the car some
//
// Split diagrams are drawn at 840×560, vote cards at 720×320, goal and
// compare pictures at 480×300 — the shapes those layouts give a picture (as in
// 3.5–3.7). Label <text> is written out literally so `npm run audit:svg` can
// measure it. The pictures come from art.js and carry no text. Diagrams stay
// in English.

import { mrBowenSvg } from '../../../src/lib/mrBowen.js'
import { tv } from '../U03_7/art.js'
import {
  INK, KEY, GREEN, RED, GOLD, FONT,
  plate, paws, cell, eye, sprouts, egg, breath, bowl, SEVEN, rock, plant, magnifier, mark,
} from './art.js'
import bearsPhoto from './images/polar-bears.jpg'
import banyanPhoto from './images/banyan.jpg'
import buffaloPhoto from './images/buffalo.jpg'
import carPhoto from './images/car.jpg'

// The voting hands from 3.1.
const HAND_PATHS = '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
const leftHand = (color) => `<g transform="translate(192 76) scale(-7 7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const rightHand = (color) => `<g transform="translate(528 76) scale(7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const BLUE_VOTE = '#1a5fa8'

// A photograph cropped to its cell, with rounded corners (as in 3.6 and 3.7).
const photo = (id, href, x, y, w, h) => `<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/></clipPath>
    <image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="none" stroke="#cbd5e1" stroke-width="2"/>`

// A letter of MRS GREN in a teal circle (shapes only; the letter is written out).
const disc = (cx, cy, r = 46) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#0087a8"/>`

export const DIAGRAMS = {
  // ── The goals ─────────────────────────────────────────────────────────────
  PIC_SPOT_IT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    <line x1="30" y1="254" x2="450" y2="254" stroke="${INK}" stroke-width="4"/>
    ${plant(150, 176, 1.48)}
    ${rock(340, 200, 1.25)}
  </svg>`,

  PIC_NAME_IT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    ${SEVEN.slice(0, 4).map((draw, i) => draw(72 + i * 112, 82, 0.72)).join('')}
    ${SEVEN.slice(4).map((draw, i) => draw(128 + i * 112, 220, 0.72)).join('')}
  </svg>`,

  PIC_TEST_IT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    ${photo('goal-car', carPhoto, 16, 36, 342, 228)}
    ${magnifier(366, 118, 1.25)}
  </svg>`,

  // ── Spot it ───────────────────────────────────────────────────────────────
  TREE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${photo('tree', banyanPhoto, 12, 12, 816, 536)}
  </svg>`,

  ORGANISMS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${photo('org-bears', bearsPhoto, 16, 16, 404, 270)}
    ${photo('org-tree', banyanPhoto, 436, 16, 388, 270)}
    ${photo('org-buffalo', buffaloPhoto, 16, 302, 404, 242)}
    <rect x="436" y="302" width="388" height="242" rx="12" fill="#f4f8fb" stroke="#cbd5e1" stroke-width="2"/>
    ${mrBowenSvg({ x: 630, y: 334, scale: 0.74 })}
  </svg>`,

  // ── Name them ─────────────────────────────────────────────────────────────
  ANS_BREATHING: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE_VOTE)}
    ${breath(296, 160, 1.15)}
    <text x="430" y="148" font-family="${FONT}" font-size="40" font-weight="bold" fill="${BLUE_VOTE}">breathing</text>
    <text x="430" y="200" font-family="${FONT}" font-size="40" font-weight="bold" fill="${BLUE_VOTE}">in and out</text>
  </svg>`,

  ANS_CELLS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    ${cell(104, 168, 1.3)}
    <text x="212" y="116" font-family="${FONT}" font-size="38" font-weight="bold" fill="${KEY}">breaking down</text>
    <text x="212" y="166" font-family="${FONT}" font-size="38" font-weight="bold" fill="${KEY}">food in cells</text>
    <text x="212" y="216" font-family="${FONT}" font-size="38" font-weight="bold" fill="${KEY}">for energy</text>
  </svg>`,

  MRS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${disc(250, 98)}<text x="250" y="114" font-family="${FONT}" font-size="46" font-weight="bold" fill="#ffffff" text-anchor="middle">M</text>
    ${paws(500, 98, 1.15)}
    ${disc(250, 280)}<text x="250" y="296" font-family="${FONT}" font-size="46" font-weight="bold" fill="#ffffff" text-anchor="middle">R</text>
    ${cell(500, 282, 1.15)}
    ${disc(250, 462)}<text x="250" y="478" font-family="${FONT}" font-size="46" font-weight="bold" fill="#ffffff" text-anchor="middle">S</text>
    ${eye(500, 462, 1.15)}
  </svg>`,

  GREN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${disc(250, 76, 42)}<text x="250" y="91" font-family="${FONT}" font-size="42" font-weight="bold" fill="#ffffff" text-anchor="middle">G</text>
    ${sprouts(500, 70, 0.95)}
    ${disc(250, 212, 42)}<text x="250" y="227" font-family="${FONT}" font-size="42" font-weight="bold" fill="#ffffff" text-anchor="middle">R</text>
    ${egg(500, 216, 0.9)}
    ${disc(250, 348, 42)}<text x="250" y="363" font-family="${FONT}" font-size="42" font-weight="bold" fill="#ffffff" text-anchor="middle">E</text>
    ${breath(486, 344, 0.95)}
    ${disc(250, 484, 42)}<text x="250" y="499" font-family="${FONT}" font-size="42" font-weight="bold" fill="#ffffff" text-anchor="middle">N</text>
    ${bowl(500, 484, 0.95)}
  </svg>`,

  // Everyday English: Mr Bowen cries at a sad film.
  SENSE_EVERYDAY: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    <line x1="20" y1="286" x2="460" y2="286" stroke="#d5dbe1" stroke-width="3"/>
    ${mrBowenSvg({ x: 120, y: 286 - 268 * 0.9, scale: 0.9, mood: 'sad' })}
    <path d="M 104 80 q -6 10 0 15 q 6 -5 0 -15 Z M 137 80 q -6 10 0 15 q 6 -5 0 -15 Z" fill="#5bb4e5" stroke="${BLUE_VOTE}" stroke-width="1.5"/>
    ${tv(352, 170, 0.62)}
  </svg>`,

  // Science English: a plant leans towards the light.
  SENSE_SCIENCE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" class="w-full h-full">
    ${plate(480, 300)}
    <circle cx="398" cy="72" r="34" fill="#ffd45c" stroke="${INK}" stroke-width="3"/>
    <path d="M 398 22 v -14 M 398 122 v 14 M 348 72 h -14 M 448 72 h 14 M 363 37 l -10 -10 M 433 107 l 10 10 M 433 37 l 10 -10 M 363 107 l -10 10" stroke="${GOLD}" stroke-width="5" stroke-linecap="round"/>
    <path d="M 318 112 L 250 150 M 330 134 L 262 176" stroke="${GOLD}" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 9"/>
    <path d="M 150 232 C 150 186 170 150 222 122" fill="none" stroke="#5f9e35" stroke-width="6" stroke-linecap="round"/>
    <path d="M 160 188 q -34 -6 -44 -34 q 32 0 44 34 Z" fill="#dcefcf" stroke="#5f9e35" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M 186 146 q 22 -26 52 -24 q -14 28 -52 24 Z" fill="#dcefcf" stroke="#5f9e35" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M 214 126 q 2 -30 28 -40 q 4 30 -28 40 Z" fill="#dcefcf" stroke="#5f9e35" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M 112 236 L 188 236 L 178 286 L 122 286 Z" fill="#d9825b" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
    <rect x="106" y="226" width="88" height="14" rx="3" fill="#c96f49" stroke="${INK}" stroke-width="3.5"/>
  </svg>`,

  // ── Test it ───────────────────────────────────────────────────────────────
  CAR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${photo('car', carPhoto, 12, 12, 816, 536)}
  </svg>`,

  // The bear does all seven; the car does one, sort of does five, and not two.
  ALL_SEVEN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${photo('all-bears', bearsPhoto, 16, 16, 396, 264)}
    ${photo('all-car', carPhoto, 428, 16, 396, 264)}
    <text x="40" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">M</text>
    <text x="93" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">R</text>
    <text x="146" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">S</text>
    <text x="199" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">G</text>
    <text x="252" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">R</text>
    <text x="305" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">E</text>
    <text x="358" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">N</text>
    ${[40, 93, 146, 199, 252, 305, 358].map((x) => mark(x, 384, 'yes', 0.95)).join('')}
    <text x="452" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">M</text>
    <text x="505" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">R</text>
    <text x="558" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">S</text>
    <text x="611" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">G</text>
    <text x="664" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">R</text>
    <text x="717" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">E</text>
    <text x="770" y="340" font-family="${FONT}" font-size="34" font-weight="bold" fill="${INK}" text-anchor="middle">N</text>
    ${['yes', 'sort', 'sort', 'no', 'no', 'sort', 'sort'].map((k, i) => mark(452 + i * 53, 384, k, 0.95)).join('')}
    <text x="214" y="470" font-family="${FONT}" font-size="44" font-weight="bold" fill="${GREEN}" text-anchor="middle">alive</text>
    <text x="626" y="470" font-family="${FONT}" font-size="44" font-weight="bold" fill="${RED}" text-anchor="middle">not alive</text>
  </svg>`,
}
