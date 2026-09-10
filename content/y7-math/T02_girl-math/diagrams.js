// content/y7-math/T02_girl-math/diagrams.js
// Three bar models, and they are the whole of the teaching in this task.
//
// House rules (docs/LESSON-PLAYBOOK.md §5): white plate first so the artwork
// reads on a light OR dark slide; dark ink outlines with flat pale fills; every
// <text> written out literally, because `npm run audit:svg` cannot see text
// produced by a `${helper(...)}` call and will silently check nothing.
//
// WHY BARS AND NOT ALGEBRA. "Carrot gets twice as many as Erica" is an equation
// — 3e = 12 — and a Year 7 who has just met substitution cannot yet solve for e.
// Drawn as boxes it is not an equation at all: there are three identical boxes
// and twelve pieces, so a box is four. Every round of the game is that same
// picture with more boxes, and the two extra moves are the ones on BAR_PLUS
// (take the extra off the total first) and BAR_THREE (do both at once).
//
// The numbers on these three are deliberately NOT numbers from any round of the
// game, so the worked example does not spend a round.
//
//   BAR_TWICE   twice as many — three equal boxes, 12 pieces
//   BAR_PLUS    3 more than — take the 3 off the total FIRST
//   BAR_THREE   three girls at once, with a times rule and a plus rule

const INK = '#2b2b2b'
const KEY = '#c25e12'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'
const GREEN_T = '#eef6e6'
const ORANGE_T = '#fdf1e3'
const BLUE_T = '#eef4fb'
const PURPLE_T = '#f2ecf7'
const PAPER = '#f5e9d0'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

/** White paper plate + a hairline frame. Every diagram starts with this. */
const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const MARKERS = `<defs>
    <marker id="gm-key" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${KEY}"/></marker>
    <marker id="gm-green" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${GREEN}"/></marker>
  </defs>`

export const DIAGRAMS = {
  // ───────────────────────────────────────────────────────────────────────────
  // The first move, and the one every round is built on: "twice as many" means
  // two boxes the same size as the one box, so the total is cut into THREE
  // equal boxes — not two.
  // ───────────────────────────────────────────────────────────────────────────
  BAR_TWICE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 520" class="w-full h-full">
    ${plate(840, 520)}
    ${MARKERS}

    <text x="420" y="44" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">Carrot gets twice as many as Erica</text>
    <text x="420" y="82" font-family="${FONT}" font-size="22" font-weight="bold" fill="${BLUE}" text-anchor="middle">12 pieces of rice paper altogether</text>

    <text x="196" y="152" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="end">Erica</text>
    <rect x="216" y="120" width="160" height="52" rx="8" fill="${BLUE_T}" stroke="${INK}" stroke-width="3"/>
    <text x="296" y="156" font-family="${FONT}" font-size="26" font-weight="bold" fill="${BLUE}" text-anchor="middle">4</text>

    <text x="196" y="234" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="end">Carrot</text>
    <rect x="216" y="202" width="160" height="52" rx="8" fill="${ORANGE_T}" stroke="${INK}" stroke-width="3"/>
    <text x="296" y="238" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">4</text>
    <rect x="386" y="202" width="160" height="52" rx="8" fill="${ORANGE_T}" stroke="${INK}" stroke-width="3"/>
    <text x="466" y="238" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">4</text>

    <text x="420" y="322" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">Three equal boxes, and 12 pieces to fill them.</text>
    <text x="420" y="378" font-family="${FONT}" font-size="34" font-weight="bold" fill="${GREEN}" text-anchor="middle">12 ÷ 3 = 4 in one box</text>

    <rect x="150" y="416" width="540" height="70" rx="14" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="420" y="460" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">Erica gets 4. Carrot gets 8.</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The second move. A class that has only met "twice as many" tries to divide
  // 15 by 2 and gets stuck on the half. Taking the extra 3 off the TOTAL first
  // leaves two boxes and an even number, and the extra goes back on at the end.
  // ───────────────────────────────────────────────────────────────────────────
  BAR_PLUS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 520" class="w-full h-full">
    ${plate(840, 520)}
    ${MARKERS}

    <text x="420" y="44" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">Nam gets 3 more than Su</text>
    <text x="420" y="82" font-family="${FONT}" font-size="22" font-weight="bold" fill="${BLUE}" text-anchor="middle">15 pieces of rice paper altogether</text>

    <text x="196" y="152" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="end">Su</text>
    <rect x="216" y="120" width="180" height="52" rx="8" fill="${PURPLE_T}" stroke="${INK}" stroke-width="3"/>
    <text x="306" y="156" font-family="${FONT}" font-size="26" font-weight="bold" fill="${PURPLE}" text-anchor="middle">6</text>

    <text x="196" y="234" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="end">Nam</text>
    <rect x="216" y="202" width="180" height="52" rx="8" fill="${BLUE_T}" stroke="${INK}" stroke-width="3"/>
    <text x="306" y="238" font-family="${FONT}" font-size="26" font-weight="bold" fill="${BLUE}" text-anchor="middle">6</text>
    <rect x="406" y="202" width="90" height="52" rx="8" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="3" stroke-dasharray="8 6"/>
    <text x="451" y="238" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">3</text>

    <text x="540" y="238" font-family="${FONT}" font-size="20" font-weight="bold" fill="${KEY}">the extra</text>

    <text x="420" y="316" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">Take the extra 3 off the total first: 15 − 3 = 12</text>
    <text x="420" y="372" font-family="${FONT}" font-size="34" font-weight="bold" fill="${GREEN}" text-anchor="middle">12 ÷ 2 = 6 in one box</text>

    <rect x="150" y="410" width="540" height="70" rx="14" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="420" y="454" font-family="${FONT}" font-size="28" font-weight="bold" fill="${INK}" text-anchor="middle">Su gets 6. Nam gets 6 + 3 = 9.</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Both moves at once, which is every round from the fourth onwards: take the
  // extra off the total, THEN count the boxes. Three girls, 26 pieces, and none
  // of these numbers appears in the game.
  // ───────────────────────────────────────────────────────────────────────────
  BAR_THREE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    ${MARKERS}

    <text x="420" y="42" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}" text-anchor="middle">Three girls, 26 pieces</text>
    <text x="420" y="78" font-family="${FONT}" font-size="20" font-weight="bold" fill="${INK}" text-anchor="middle">Tess gets twice as many as Su. Ana gets 2 more than Su.</text>

    <text x="196" y="140" font-family="${FONT}" font-size="23" font-weight="bold" fill="${INK}" text-anchor="end">Su</text>
    <rect x="216" y="110" width="150" height="48" rx="8" fill="${PURPLE_T}" stroke="${INK}" stroke-width="3"/>
    <text x="291" y="143" font-family="${FONT}" font-size="24" font-weight="bold" fill="${PURPLE}" text-anchor="middle">6</text>

    <text x="196" y="216" font-family="${FONT}" font-size="23" font-weight="bold" fill="${INK}" text-anchor="end">Tess</text>
    <rect x="216" y="186" width="150" height="48" rx="8" fill="${GREEN_T}" stroke="${INK}" stroke-width="3"/>
    <text x="291" y="219" font-family="${FONT}" font-size="24" font-weight="bold" fill="${GREEN}" text-anchor="middle">6</text>
    <rect x="376" y="186" width="150" height="48" rx="8" fill="${GREEN_T}" stroke="${INK}" stroke-width="3"/>
    <text x="451" y="219" font-family="${FONT}" font-size="24" font-weight="bold" fill="${GREEN}" text-anchor="middle">6</text>

    <text x="196" y="292" font-family="${FONT}" font-size="23" font-weight="bold" fill="${INK}" text-anchor="end">Ana</text>
    <rect x="216" y="262" width="150" height="48" rx="8" fill="${BLUE_T}" stroke="${INK}" stroke-width="3"/>
    <text x="291" y="295" font-family="${FONT}" font-size="24" font-weight="bold" fill="${BLUE}" text-anchor="middle">6</text>
    <rect x="376" y="262" width="70" height="48" rx="8" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="3" stroke-dasharray="8 6"/>
    <text x="411" y="295" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">2</text>

    <text x="420" y="360" font-family="${FONT}" font-size="23" font-weight="bold" fill="${INK}" text-anchor="middle">Take the extra 2 off first: 26 − 2 = 24</text>
    <text x="420" y="400" font-family="${FONT}" font-size="23" font-weight="bold" fill="${INK}" text-anchor="middle">Now count the boxes. There are 4 of them.</text>
    <text x="420" y="452" font-family="${FONT}" font-size="34" font-weight="bold" fill="${GREEN}" text-anchor="middle">24 ÷ 4 = 6 in one box</text>

    <rect x="90" y="486" width="660" height="60" rx="14" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="420" y="524" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">Su 6 · Tess 12 · Ana 8 · and 6 + 12 + 8 = 26</text>
  </svg>`,
}

// PAPER is kept for the rice-paper fill used by the game widget's own drawing;
// referenced here so the palette stays in one place with the rest of the task.
export const RICE_PAPER_FILL = PAPER
