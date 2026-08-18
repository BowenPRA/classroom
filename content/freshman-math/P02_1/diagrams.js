// content/freshman-math/P02_1/diagrams.js
// Diagrams for Algebra Track · Project 2 — The Rectangle That Isn't.
//
// House rules (docs/LESSON-PLAYBOOK.md §5): white plate first, every <text>
// written out literally, labels beside the artwork and never on top of it.
//
// THE TWO SHAPES ARE THE WHOLE PROJECT, so their numbers were chosen with care:
//
//   Shape P   A(−4,−2)  B(2,1)  C(4,−3)  D(−2,−6)   slopes 1/2 and −2
//   Shape Q   A(−4,−2)  B(2,1)  C(5,−3)  D(−1,−6)   slopes 1/2 and −4/3
//
// They SHARE the edge AB and differ by a single grid square at C. Both are
// parallelograms. P's corners are exactly 90° (1/2 × −2 = −1); Q's are 79.7°,
// which is far too close to square to see on a tilted figure. That is the hook:
// the eye cannot referee this and the slope can. Neither shape is a square, so
// "prove it is a rectangle" cannot be short-circuited by measuring one side.
//
// BLANK versions carry no slopes and no verdict — they are what the student
// works from. SOLVED versions are for after the projects are collected. The fly
// project learned this the hard way: a diagram with the answer printed on it
// quietly removes the thing being assessed.
//
// Grid geometry, shared by every shape diagram here:
//   origin (250, 150), 28px per unit, x from −6 to 7, y from −8 to 3
//   X(v) = 250 + 28v   ·   Y(v) = 150 − 28v

const INK = '#2b2b2b'
const KEY = '#c25e12' // the book's key-word orange
const RULE = '#7c8a95'
const GRID = '#dbe3e8'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'
const BLUE_T = '#e9f1fa'
const GREEN_T = '#eef6e6'
const ORANGE_T = '#fdf1e3'
const PURPLE_T = '#f2ecf7'
const RED_T = '#fdeef0'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

// markerUnits="userSpaceOnUse" keeps arrowheads a fixed 14px whatever the
// stroke-width is; the default scales them by stroke-width, and a heavy line
// then renders an arrowhead big enough to swallow the label beside it.
// Reversed markers (…-b) exist because marker-start with plain orient="auto"
// points FORWARD along the path.
const arrow = (id, fill, back = false) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="${back ? 2 : 8}" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><path d="${back ? 'M10 0 L0 5 L10 10 z' : 'M0 0 L10 5 L0 10 z'}" fill="${fill}"/></marker>`

const MARKERS = `<defs>
    ${arrow('pj-ink-f', INK)}
    ${arrow('pj-key-f', KEY)}
    ${arrow('pj-red-f', RED)}${arrow('pj-red-b', RED, true)}
    ${arrow('pj-blue-f', BLUE)}${arrow('pj-blue-b', BLUE, true)}
    ${arrow('pj-green-f', GREEN)}${arrow('pj-green-b', GREEN, true)}
    ${arrow('pj-purple-f', PURPLE)}${arrow('pj-purple-b', PURPLE, true)}
  </defs>`

// Shapes only — every number that matters is written out literally below.
const shapeGrid = () => {
  let g = ''
  for (let i = -6; i <= 7; i += 1) {
    const x = 250 + 28 * i
    g += `<line x1="${x}" y1="66" x2="${x}" y2="374" stroke="${GRID}" stroke-width="1"/>`
  }
  for (let j = -8; j <= 3; j += 1) {
    const y = 150 - 28 * j
    g += `<line x1="82" y1="${y}" x2="446" y2="${y}" stroke="${GRID}" stroke-width="1"/>`
  }
  g += `<line x1="70" y1="150" x2="458" y2="150" stroke="${INK}" stroke-width="2.5" marker-end="url(#pj-ink-f)"/>`
  g += `<line x1="250" y1="386" x2="250" y2="54" stroke="${INK}" stroke-width="2.5" marker-end="url(#pj-ink-f)"/>`
  return g
}

// A small standalone lattice, used by the rotation diagrams. Lines only.
const miniGrid = (x0, y0, cols, rows, step) => {
  let g = ''
  for (let i = 0; i <= cols; i += 1) g += `<line x1="${x0 + i * step}" y1="${y0}" x2="${x0 + i * step}" y2="${y0 + rows * step}" stroke="${GRID}" stroke-width="1"/>`
  for (let j = 0; j <= rows; j += 1) g += `<line x1="${x0}" y1="${y0 + j * step}" x2="${x0 + cols * step}" y2="${y0 + j * step}" stroke="${GRID}" stroke-width="1"/>`
  return g
}

export const DIAGRAMS = {
  // ───────────────────────────────────────────────────────────────────────────
  // THE HOOK, half one. Shape P with its vertices named and nothing else. No
  // slopes, no right-angle marks, no verdict — the student earns all of it.
  // ───────────────────────────────────────────────────────────────────────────
  SHAPE_P_BLANK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 470" class="w-full h-full">
    ${plate(560, 470)}${MARKERS}
    ${shapeGrid()}

    <text x="280" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Shape P</text>

    <path d="M 138 206 L 306 122 L 362 234 L 194 318 Z" fill="${BLUE_T}" opacity="0.9" stroke="${BLUE}" stroke-width="4" stroke-linejoin="round"/>

    <circle cx="138" cy="206" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="306" cy="122" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="362" cy="234" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="194" cy="318" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>

    <text x="128" y="200" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">A (−4, −2)</text>
    <text x="316" y="112" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">B (2, 1)</text>
    <text x="374" y="248" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">C (4, −3)</text>
    <text x="186" y="342" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">D (−2, −6)</text>

    <text x="466" y="144" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="262" y="62" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="72" y="400" width="416" height="52" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="280" y="422" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">Is this a rectangle?</text>
    <text x="280" y="442" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">do not measure, do not guess — prove it</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE HOOK, half two. Identical to P except that C has moved ONE square right,
  // which drags D with it. Drawn at the same weight so neither shape looks like
  // the obvious answer.
  // ───────────────────────────────────────────────────────────────────────────
  SHAPE_Q_BLANK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 470" class="w-full h-full">
    ${plate(560, 470)}${MARKERS}
    ${shapeGrid()}

    <text x="280" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Shape Q</text>

    <path d="M 138 206 L 306 122 L 390 234 L 222 318 Z" fill="${GREEN_T}" opacity="0.9" stroke="${GREEN}" stroke-width="4" stroke-linejoin="round"/>

    <circle cx="138" cy="206" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="306" cy="122" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="390" cy="234" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="222" cy="318" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>

    <text x="128" y="200" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">A (−4, −2)</text>
    <text x="316" y="112" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">B (2, 1)</text>
    <text x="402" y="248" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">C (5, −3)</text>
    <text x="214" y="342" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">D (−1, −6)</text>

    <text x="466" y="144" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="262" y="62" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="72" y="400" width="416" height="52" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="280" y="422" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">Is this one a rectangle?</text>
    <text x="280" y="442" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">only one of the two shapes is</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Part 2's construction, posed. The triangle is given; the turned copy is an
  // empty dashed outline. The student finds the answer with scissors and their
  // hands before any algebra is offered.
  // ───────────────────────────────────────────────────────────────────────────
  ROTATE_BLANK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 400" class="w-full h-full">
    ${plate(700, 400)}${MARKERS}

    <text x="350" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Cut it out, then give it a quarter turn</text>

    ${miniGrid(70, 100, 5, 6, 34)}

    <path d="M 70 270 L 172 270 L 172 236 Z" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="70" cy="270" r="6" fill="${INK}"/>

    <text x="121" y="296" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">run = 3</text>
    <text x="184" y="252" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">rise = 1</text>
    <text x="140" y="348" font-family="${FONT}" font-size="19" font-weight="900" fill="${INK}" text-anchor="middle">m = 1/3</text>

    <path d="M 296 200 L 396 200" fill="none" stroke="${KEY}" stroke-width="4" marker-end="url(#pj-key-f)"/>
    <text x="346" y="182" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="middle">turn it 90°</text>

    <rect x="452" y="112" width="196" height="176" rx="12" fill="#f8fafc" stroke="${RULE}" stroke-width="3" stroke-dasharray="8 6"/>
    <text x="550" y="186" font-family="${FONT}" font-size="17" font-weight="900" fill="${RULE}" text-anchor="middle">new run = ?</text>
    <text x="550" y="220" font-family="${FONT}" font-size="17" font-weight="900" fill="${RULE}" text-anchor="middle">new rise = ?</text>

    <text x="550" y="348" font-family="${FONT}" font-size="19" font-weight="900" fill="${RULE}" text-anchor="middle">m = ?</text>

    <text x="350" y="382" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">use paper and scissors before you use any algebra</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The answer to Part 2, and the reason the perpendicular rule is TRUE rather
  // than merely memorable: a quarter turn swaps rise and run and flips one sign.
  // It is the SAME triangle in both panels, which is exactly why the student
  // turns a real cut-out instead of being shown two pictures.
  // ───────────────────────────────────────────────────────────────────────────
  ROTATE_SOLVED: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 400" class="w-full h-full">
    ${plate(700, 400)}${MARKERS}

    <text x="350" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">A quarter turn swaps the rise and the run</text>

    ${miniGrid(70, 100, 4, 6, 34)}

    <path d="M 70 270 L 172 270 L 172 236 Z" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="70" cy="270" r="6" fill="${INK}"/>
    <text x="121" y="296" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">run 3</text>
    <text x="184" y="256" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">rise 1</text>

    <path d="M 252 200 L 352 200" fill="none" stroke="${KEY}" stroke-width="4" marker-end="url(#pj-key-f)"/>
    <text x="302" y="182" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="middle">turn 90°</text>

    ${miniGrid(400, 100, 4, 6, 34)}

    <path d="M 502 270 L 468 270 L 468 168 Z" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="4" stroke-linejoin="round"/>
    <circle cx="502" cy="270" r="6" fill="${INK}"/>
    <text x="485" y="296" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">run −1</text>
    <text x="460" y="216" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="end">rise 3</text>

    <rect x="44" y="322" width="240" height="58" rx="10" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2.5"/>
    <text x="164" y="344" font-family="${FONT}" font-size="14" font-weight="bold" fill="${BLUE}" text-anchor="middle">before the turn</text>
    <text x="164" y="368" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="middle">m = 1/3</text>

    <rect x="386" y="322" width="270" height="58" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2.5"/>
    <text x="521" y="344" font-family="${FONT}" font-size="14" font-weight="bold" fill="${PURPLE}" text-anchor="middle">after the turn</text>
    <text x="521" y="368" font-family="${FONT}" font-size="18" font-weight="900" fill="${PURPLE}" text-anchor="middle">m = 3 ÷ (−1) = −3</text>

    <text x="335" y="360" font-family="${FONT}" font-size="24" font-weight="900" fill="${INK}" text-anchor="middle">so</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The two rules, stated once, with the rotation named as the reason for the
  // second one rather than the rule being handed over as a fact.
  // ───────────────────────────────────────────────────────────────────────────
  TWO_RULES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 360" class="w-full h-full">
    ${plate(700, 360)}${MARKERS}

    <text x="350" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Two rules, and only two</text>

    <rect x="24" y="54" width="316" height="186" rx="12" fill="${GREEN_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="182" y="84" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">PARALLEL</text>
    <line x1="70" y1="190" x2="220" y2="114" stroke="${GREEN}" stroke-width="5" marker-start="url(#pj-green-b)" marker-end="url(#pj-green-f)"/>
    <line x1="128" y1="220" x2="278" y2="144" stroke="${GREEN}" stroke-width="5" marker-start="url(#pj-green-b)" marker-end="url(#pj-green-f)"/>
    <text x="182" y="262" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">the slopes are equal</text>

    <rect x="360" y="54" width="316" height="186" rx="12" fill="${PURPLE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="518" y="84" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="middle">PERPENDICULAR</text>
    <line x1="410" y1="200" x2="560" y2="124" stroke="${PURPLE}" stroke-width="5" marker-start="url(#pj-purple-b)" marker-end="url(#pj-purple-f)"/>
    <line x1="447" y1="87" x2="523" y2="237" stroke="${PURPLE}" stroke-width="5" marker-start="url(#pj-purple-b)" marker-end="url(#pj-purple-f)"/>
    <text x="518" y="262" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="middle">the slopes multiply to −1</text>

    <rect x="78" y="282" width="544" height="58" rx="12" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="3"/>
    <text x="350" y="306" font-family="${FONT}" font-size="17" font-weight="900" fill="${KEY}" text-anchor="middle">turn a slope of 1/3 by 90° and you get −3</text>
    <text x="350" y="330" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="middle">flip it over, then change the sign</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The honest edge case, and a real Investigation mark: the multiply-to-−1 rule
  // cannot reach the one pair of perpendicular lines every student can already
  // draw, because one of the two slopes is not a number at all.
  // ───────────────────────────────────────────────────────────────────────────
  PERP_EXCEPTION: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 360" class="w-full h-full">
    ${plate(660, 360)}${MARKERS}

    <text x="330" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The one pair the rule cannot reach</text>

    ${miniGrid(120, 90, 4, 4, 40)}

    <line x1="108" y1="170" x2="332" y2="170" stroke="${BLUE}" stroke-width="5" marker-start="url(#pj-blue-b)" marker-end="url(#pj-blue-f)"/>
    <line x1="220" y1="262" x2="220" y2="78" stroke="${RED}" stroke-width="5" marker-start="url(#pj-red-b)" marker-end="url(#pj-red-f)"/>
    <path d="M 220 150 L 240 150 L 240 170" fill="none" stroke="${INK}" stroke-width="2.5"/>

    <text x="220" y="290" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">these really are perpendicular</text>

    <rect x="368" y="80" width="264" height="64" rx="10" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2.5"/>
    <text x="500" y="104" font-family="${FONT}" font-size="14" font-weight="bold" fill="${BLUE}" text-anchor="middle">the horizontal line</text>
    <text x="500" y="130" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="middle">m = 0</text>

    <rect x="368" y="156" width="264" height="64" rx="10" fill="${RED_T}" stroke="${RED}" stroke-width="2.5"/>
    <text x="500" y="180" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RED}" text-anchor="middle">the vertical line</text>
    <text x="500" y="206" font-family="${FONT}" font-size="18" font-weight="900" fill="${RED}" text-anchor="middle">m is undefined</text>

    <rect x="52" y="306" width="556" height="40" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <text x="330" y="332" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">you cannot multiply 0 by something that is not a number</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // SOLUTION. Shape P with every slope named and the product spelled out. The
  // two pairs of parallel edges are coloured rather than labelled on top of the
  // drawing, and the arithmetic lives in the box underneath.
  // ───────────────────────────────────────────────────────────────────────────
  SHAPE_P_SOLVED: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 470" class="w-full h-full">
    ${plate(560, 470)}${MARKERS}
    ${shapeGrid()}

    <text x="280" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Shape P is a rectangle</text>

    <path d="M 138 206 L 306 122 L 362 234 L 194 318 Z" fill="${BLUE_T}" opacity="0.75"/>
    <line x1="138" y1="206" x2="306" y2="122" stroke="${GREEN}" stroke-width="5.5"/>
    <line x1="362" y1="234" x2="194" y2="318" stroke="${GREEN}" stroke-width="5.5"/>
    <line x1="306" y1="122" x2="362" y2="234" stroke="${PURPLE}" stroke-width="5.5"/>
    <line x1="194" y1="318" x2="138" y2="206" stroke="${PURPLE}" stroke-width="5.5"/>
    <path d="M 290 130 L 298 146 L 314 138" fill="none" stroke="${RED}" stroke-width="3.5"/>

    <circle cx="138" cy="206" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="306" cy="122" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="362" cy="234" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="194" cy="318" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>

    <text x="128" y="200" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <text x="316" y="112" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">B</text>
    <text x="374" y="248" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">C</text>
    <text x="186" y="342" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">D</text>

    <text x="466" y="144" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="262" y="62" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="40" y="386" width="480" height="70" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="280" y="408" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="middle">AB and CD: m = 1/2   ·   BC and DA: m = −2</text>
    <text x="280" y="430" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">1/2 × (−2) = −1, so the corners are square</text>
    <text x="280" y="450" font-family="${FONT}" font-size="13" font-weight="bold" fill="${RULE}" text-anchor="middle">sides √45 and √20, so a rectangle but not a square</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // SOLUTION. Shape Q: still a parallelogram, but the product is −2/3, so the
  // corner is 79.7° and the shape is not a rectangle. The near-miss angle is the
  // point — this is what "your eye cannot referee it" looks like in numbers.
  // ───────────────────────────────────────────────────────────────────────────
  SHAPE_Q_SOLVED: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 470" class="w-full h-full">
    ${plate(560, 470)}${MARKERS}
    ${shapeGrid()}

    <text x="280" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Shape Q is not</text>

    <path d="M 138 206 L 306 122 L 390 234 L 222 318 Z" fill="${RED_T}" opacity="0.75"/>
    <line x1="138" y1="206" x2="306" y2="122" stroke="${GREEN}" stroke-width="5.5"/>
    <line x1="390" y1="234" x2="222" y2="318" stroke="${GREEN}" stroke-width="5.5"/>
    <line x1="306" y1="122" x2="390" y2="234" stroke="${RED}" stroke-width="5.5"/>
    <line x1="222" y1="318" x2="138" y2="206" stroke="${RED}" stroke-width="5.5"/>

    <circle cx="138" cy="206" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="306" cy="122" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="390" cy="234" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="222" cy="318" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>

    <text x="128" y="200" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <text x="316" y="112" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">B</text>
    <text x="402" y="248" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">C</text>
    <text x="214" y="342" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">D</text>

    <text x="466" y="144" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="262" y="62" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="40" y="386" width="480" height="70" rx="10" fill="${RED_T}" stroke="${RED}" stroke-width="2.5"/>
    <text x="280" y="408" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="middle">AB and CD: m = 1/2   ·   BC and DA: m = −4/3</text>
    <text x="280" y="430" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">1/2 × (−4/3) = −2/3, which is not −1</text>
    <text x="280" y="450" font-family="${FONT}" font-size="13" font-weight="bold" fill="${RULE}" text-anchor="middle">a parallelogram, with corners of 79.7° and 100.3°</text>
  </svg>`,

}
