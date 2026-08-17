// content/freshman-math/U01_2/diagrams.js
// Teaching diagrams for Algebra Track 1.2 — Lines and Slope.
//
// House rules (docs/LESSON-PLAYBOOK.md §5):
//  · every diagram opens with a white plate, so the artwork is legible on a
//    light OR dark slide and never depends on the page's text colour;
//  · every <text> is written out literally — helpers draw shapes and leader
//    lines only, because `npm run audit:svg` cannot see text produced by a
//    `${helper(...)}` call and will silently check nothing;
//  · label text lives beside or below the artwork, never on top of it.
//
// THE SPINE OF THIS DECK IS THE SAME PAIR OF POINTS AS LESSON 1.1:
// A(−4, −2) and B(4, 4). That is the whole retread argument made visual — the
// class has already drawn this triangle to find a distance of 10, and every
// slope diagram here is that same triangle asked a different question. Run 8,
// rise 6, so the slope is 6/8 = 3/4 and the distance is 10; both answers come
// out clean, and nothing needs a calculator.
//
// The pair also sits on lattice points at x = −4, 0, 4 (y = −2, 1, 4), which is
// why SLOPE_STAIRCASE works: two identical 4-across-3-up steps land exactly on
// the line, so "the slope is the same wherever you measure it" is something the
// class can SEE rather than be told.
//
// Grid geometry, shared with 1.1 so the two decks line up on the projector:
//   origin (310, 250), 34px per unit, −5…5 both ways
//   X(v) = 310 + 34v   ·   Y(v) = 250 − 34v
//   A(−4, −2) = (174, 318)   B(4, 4) = (446, 114)   corner (4, −2) = (446, 318)

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

/** White paper plate + a hairline frame. Every diagram starts with this. */
const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

// Forward markers (…-f) point along the line; reversed markers (…-b) let one
// <line> carry an arrowhead at BOTH ends, which is how a line — as opposed to a
// segment — is drawn in this deck. `marker-start` with plain `orient="auto"`
// points FORWARD along the path, so a double-headed arrow needs the reversed
// marker at the start; using the forward one there aims both heads the same way.
//
// markerUnits="userSpaceOnUse" is load-bearing. The default scales the marker by
// the line's stroke-width, so the width-5 lines in this deck were rendering
// 35px arrowheads that swallowed the point labels next to them. Fixed at 14px,
// every arrow is the same size whatever line it sits on.
const arrow = (id, fill, back = false) =>
  `<marker id="${id}" viewBox="0 0 10 10" refX="${back ? 2 : 8}" refY="5" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" orient="auto"><path d="${back ? 'M10 0 L0 5 L10 10 z' : 'M0 0 L10 5 L0 10 z'}" fill="${fill}"/></marker>`

const MARKERS = `<defs>
    ${arrow('sl-ink-f', INK)}${arrow('sl-ink-b', INK, true)}
    ${arrow('sl-red-f', RED)}${arrow('sl-red-b', RED, true)}
    ${arrow('sl-blue-f', BLUE)}${arrow('sl-blue-b', BLUE, true)}
    ${arrow('sl-green-f', GREEN)}${arrow('sl-green-b', GREEN, true)}
    ${arrow('sl-purple-f', PURPLE)}${arrow('sl-purple-b', PURPLE, true)}
  </defs>`

// The standard plane, identical to 1.1's. Shapes only — every tick number that
// matters is written out literally in the diagram that needs it.
const planeGrid = () => {
  let g = ''
  for (let i = -5; i <= 5; i += 1) {
    const x = 310 + 34 * i
    const y = 250 - 34 * i
    g += `<line x1="${x}" y1="80" x2="${x}" y2="420" stroke="${GRID}" stroke-width="1"/>`
    g += `<line x1="140" y1="${y}" x2="480" y2="${y}" stroke="${GRID}" stroke-width="1"/>`
  }
  g += `<line x1="130" y1="250" x2="492" y2="250" stroke="${INK}" stroke-width="2.5" marker-end="url(#sl-ink-f)"/>`
  g += `<line x1="310" y1="430" x2="310" y2="68" stroke="${INK}" stroke-width="2.5" marker-end="url(#sl-ink-f)"/>`
  for (let i = -5; i <= 5; i += 1) {
    if (i === 0) continue
    const x = 310 + 34 * i
    const y = 250 - 34 * i
    g += `<line x1="${x}" y1="245" x2="${x}" y2="255" stroke="${INK}" stroke-width="2"/>`
    g += `<line x1="305" y1="${y}" x2="315" y2="${y}" stroke="${INK}" stroke-width="2"/>`
  }
  return g
}

export const DIAGRAMS = {
  // ───────────────────────────────────────────────────────────────────────────
  // THE RETREAD. Same two points as 1.1, same answer of 10 — but the diagram
  // now argues for the one move students actually forget: the third corner is
  // not given to them. It is dashed and orange because it is the thing they
  // ADD to the page, and the reason they never need to remember the formula.
  // ───────────────────────────────────────────────────────────────────────────
  RECALL_TRIANGLE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Nobody gives you the corner — you add it</text>

    <path d="M 174 318 L 446 318 L 446 114 Z" fill="${ORANGE_T}" opacity="0.85"/>
    <line x1="174" y1="318" x2="446" y2="318" stroke="${RED}" stroke-width="3.5" stroke-dasharray="7 5"/>
    <line x1="446" y1="318" x2="446" y2="114" stroke="${BLUE}" stroke-width="3.5" stroke-dasharray="7 5"/>
    <line x1="174" y1="318" x2="446" y2="114" stroke="${PURPLE}" stroke-width="5"/>
    <path d="M 428 318 L 428 300 L 446 300" fill="none" stroke="${INK}" stroke-width="2"/>

    <circle cx="174" cy="318" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="446" cy="114" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="446" cy="318" r="9" fill="#ffffff" stroke="${KEY}" stroke-width="3.5" stroke-dasharray="4 3"/>

    <text x="166" y="346" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="end">A (−4, −2)</text>
    <text x="452" y="100" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="start">B (4, 4)</text>
    <text x="240" y="346" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">8 across</text>
    <text x="458" y="220" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="start">6 up</text>
    <text x="272" y="192" font-family="${FONT}" font-size="22" font-weight="900" fill="${PURPLE}" text-anchor="middle">10</text>

    <line x1="446" y1="336" x2="446" y2="356" stroke="${KEY}" stroke-width="1.5"/>
    <text x="446" y="372" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="middle">the corner (4, −2)</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="74" y="386" width="472" height="52" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="310" y="408" font-family="${FONT}" font-size="16" font-weight="900" fill="${PURPLE}" text-anchor="middle">legs 8 and 6, so d² = 64 + 36 = 100</text>
    <text x="310" y="430" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="middle">d = √100 = 10</text>

    <text x="310" y="458" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">draw the triangle and Pythagoras does the rest</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Line vs segment vs ray. Students arrive using "line" for the thing they draw
  // with a ruler, which is a SEGMENT. The arrowheads are the whole distinction,
  // so they are drawn heavy and the panels are otherwise identical.
  // ───────────────────────────────────────────────────────────────────────────
  LINE_SEGMENT_RAY: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300" class="w-full h-full">
    ${plate(720, 300)}${MARKERS}

    <text x="360" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Three different things, three different names</text>

    <rect x="24" y="52" width="212" height="210" rx="12" fill="${BLUE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="130" y="84" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">LINE</text>
    <line x1="46" y1="140" x2="214" y2="140" stroke="${INK}" stroke-width="3.5" marker-start="url(#sl-ink-b)" marker-end="url(#sl-ink-f)"/>
    <circle cx="90" cy="140" r="6.5" fill="${BLUE}"/>
    <circle cx="170" cy="140" r="6.5" fill="${BLUE}"/>
    <text x="90" y="168" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="middle">A</text>
    <text x="170" y="168" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="middle">B</text>
    <text x="130" y="204" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">line AB</text>
    <text x="130" y="228" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">goes on for ever</text>
    <text x="130" y="246" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">in both directions</text>

    <rect x="254" y="52" width="212" height="210" rx="12" fill="${GREEN_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="360" y="84" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">LINE SEGMENT</text>
    <line x1="290" y1="140" x2="430" y2="140" stroke="${INK}" stroke-width="3.5"/>
    <circle cx="290" cy="140" r="6.5" fill="${GREEN}"/>
    <circle cx="430" cy="140" r="6.5" fill="${GREEN}"/>
    <text x="290" y="168" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="middle">A</text>
    <text x="430" y="168" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="middle">B</text>
    <text x="360" y="204" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">segment AB</text>
    <text x="360" y="228" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">just the piece</text>
    <text x="360" y="246" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">between A and B</text>

    <rect x="484" y="52" width="212" height="210" rx="12" fill="${ORANGE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="590" y="84" font-family="${FONT}" font-size="17" font-weight="900" fill="${KEY}" text-anchor="middle">RAY</text>
    <line x1="520" y1="140" x2="664" y2="140" stroke="${INK}" stroke-width="3.5" marker-end="url(#sl-ink-f)"/>
    <circle cx="520" cy="140" r="6.5" fill="${KEY}"/>
    <circle cx="600" cy="140" r="6.5" fill="${KEY}"/>
    <text x="520" y="168" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="middle">A</text>
    <text x="600" y="168" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="middle">B</text>
    <text x="590" y="204" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">ray AB</text>
    <text x="590" y="228" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">starts at A and</text>
    <text x="590" y="246" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">runs on one way</text>

    <text x="360" y="288" font-family="${FONT}" font-size="15" font-weight="bold" fill="${KEY}" text-anchor="middle">in algebra, a line always has the arrows</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Why two points are exactly the right number. One point leaves the line free
  // to spin, which is why the left panel is a fan; a second point locks it. The
  // fan is drawn thin and grey so the single bold line on the right reads as the
  // ONLY answer, not merely the neatest one.
  // ───────────────────────────────────────────────────────────────────────────
  TWO_POINTS_ONE_LINE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 390" class="w-full h-full">
    ${plate(700, 390)}${MARKERS}

    <text x="350" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">How many straight lines fit through the dots?</text>

    <text x="182" y="60" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">ONE dot</text>
    <rect x="24" y="70" width="316" height="190" rx="12" fill="${RED_T}" stroke="${GRID}" stroke-width="2"/>
    <line x1="94" y1="165" x2="270" y2="165" stroke="${RULE}" stroke-width="1.8"/>
    <line x1="103" y1="203" x2="261" y2="127" stroke="${RULE}" stroke-width="1.8"/>
    <line x1="120" y1="228" x2="244" y2="102" stroke="${RULE}" stroke-width="1.8"/>
    <line x1="144" y1="246" x2="220" y2="84" stroke="${RULE}" stroke-width="1.8"/>
    <line x1="182" y1="79" x2="182" y2="251" stroke="${RULE}" stroke-width="1.8"/>
    <line x1="220" y1="246" x2="144" y2="84" stroke="${RULE}" stroke-width="1.8"/>
    <line x1="244" y1="228" x2="120" y2="102" stroke="${RULE}" stroke-width="1.8"/>
    <line x1="261" y1="203" x2="103" y2="127" stroke="${RULE}" stroke-width="1.8"/>
    <circle cx="182" cy="165" r="9" fill="${RED}" stroke="#ffffff" stroke-width="3"/>
    <text x="182" y="286" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">infinitely many</text>
    <text x="182" y="308" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">the line can still spin</text>

    <text x="518" y="60" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">TWO dots</text>
    <rect x="360" y="70" width="316" height="190" rx="12" fill="${GREEN_T}" stroke="${GRID}" stroke-width="2"/>
    <line x1="422" y1="256" x2="614" y2="74" stroke="${PURPLE}" stroke-width="5" marker-start="url(#sl-purple-b)" marker-end="url(#sl-purple-f)"/>
    <circle cx="455" cy="225" r="9" fill="${GREEN}" stroke="#ffffff" stroke-width="3"/>
    <circle cx="581" cy="105" r="9" fill="${GREEN}" stroke="#ffffff" stroke-width="3"/>
    <text x="446" y="212" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="end">A</text>
    <text x="596" y="126" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="start">B</text>
    <text x="518" y="286" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">exactly one</text>
    <text x="518" y="308" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">the second dot locks it</text>

    <rect x="140" y="324" width="420" height="50" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="350" y="355" font-family="${FONT}" font-size="19" font-weight="900" fill="${KEY}" text-anchor="middle">two points determine a line</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The pivot of the lesson. Identical triangle to RECALL_TRIANGLE, and that is
  // the point: for distance we wanted the HYPOTENUSE, for slope we throw the
  // hypotenuse away and compare the two LEGS instead. So the legs are heavy here
  // and the hypotenuse is now drawn as a LINE — arrowheads at both ends, because
  // by this slide the class knows what that means.
  // ───────────────────────────────────────────────────────────────────────────
  SLOPE_TRIANGLE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Same triangle — now compare the two legs</text>

    <path d="M 174 318 L 446 318 L 446 114 Z" fill="${ORANGE_T}" opacity="0.7"/>
    <line x1="140" y1="343" x2="480" y2="88" stroke="${PURPLE}" stroke-width="3" marker-start="url(#sl-purple-b)" marker-end="url(#sl-purple-f)"/>
    <line x1="174" y1="318" x2="446" y2="318" stroke="${RED}" stroke-width="5"/>
    <line x1="446" y1="318" x2="446" y2="114" stroke="${BLUE}" stroke-width="5"/>
    <path d="M 428 318 L 428 300 L 446 300" fill="none" stroke="${INK}" stroke-width="2"/>

    <circle cx="174" cy="318" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="446" cy="114" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="166" y="300" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="end">A (−4, −2)</text>
    <text x="452" y="140" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="start">B (4, 4)</text>
    <text x="240" y="346" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">run = 8</text>
    <text x="458" y="220" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="start">rise = 6</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="74" y="380" width="472" height="58" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="310" y="404" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">slope = rise ÷ run</text>
    <text x="310" y="430" font-family="${FONT}" font-size="19" font-weight="900" fill="${GREEN}" text-anchor="middle">= 6 ÷ 8 = 3/4</text>

    <text x="310" y="458" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">for every 4 across, the line goes 3 up</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Why slope is a property of the LINE and not of the two points you happened
  // to pick. Two identical 4-across-3-up steps land exactly on the line, and the
  // big dashed 8-and-6 triangle over the top gives 6/8, which is the same
  // fraction. Chosen numbers make this checkable by eye: no arithmetic needed to
  // see that the two green steps are congruent.
  // ───────────────────────────────────────────────────────────────────────────
  SLOPE_STAIRCASE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Measure it anywhere and you get the same answer</text>

    <path d="M 174 324 L 452 324 L 452 110" fill="none" stroke="${PURPLE}" stroke-width="2" stroke-dasharray="6 5"/>
    <line x1="140" y1="343" x2="480" y2="88" stroke="${INK}" stroke-width="3" marker-start="url(#sl-ink-b)" marker-end="url(#sl-ink-f)"/>

    <path d="M 174 318 L 310 318 L 310 216" fill="none" stroke="${GREEN}" stroke-width="5" stroke-linejoin="round"/>
    <path d="M 310 216 L 446 216 L 446 114" fill="none" stroke="${BLUE}" stroke-width="5" stroke-linejoin="round"/>

    <circle cx="174" cy="318" r="7.5" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="310" cy="216" r="7.5" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="446" cy="114" r="7.5" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="242" y="338" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">4</text>
    <text x="302" y="272" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="end">3</text>
    <text x="378" y="208" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">4</text>
    <text x="438" y="172" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="end">3</text>
    <text x="404" y="344" font-family="${FONT}" font-size="16" font-weight="900" fill="${PURPLE}" text-anchor="middle">8</text>
    <text x="468" y="226" font-family="${FONT}" font-size="16" font-weight="900" fill="${PURPLE}" text-anchor="start">6</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="58" y="376" width="158" height="54" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2"/>
    <text x="137" y="398" font-family="${FONT}" font-size="13" font-weight="bold" fill="${GREEN}" text-anchor="middle">first step</text>
    <text x="137" y="420" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">3/4</text>

    <rect x="231" y="376" width="158" height="54" rx="10" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2"/>
    <text x="310" y="398" font-family="${FONT}" font-size="13" font-weight="bold" fill="${BLUE}" text-anchor="middle">second step</text>
    <text x="310" y="420" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">3/4</text>

    <rect x="404" y="376" width="158" height="54" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="483" y="398" font-family="${FONT}" font-size="13" font-weight="bold" fill="${PURPLE}" text-anchor="middle">the whole way</text>
    <text x="483" y="420" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="middle">6/8 = 3/4</text>

    <text x="310" y="456" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">slope belongs to the line, not to the pair you picked</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The symbols, introduced only AFTER the words have been used. Unicode
  // subscripts rather than <tspan>, because the audit measures the raw text
  // node and a tspan's markup would be counted as characters.
  // ───────────────────────────────────────────────────────────────────────────
  DELTA_NOTATION: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" class="w-full h-full">
    ${plate(680, 360)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The same two legs, written with symbols</text>

    <path d="M 110 230 L 400 230 L 400 96 Z" fill="${ORANGE_T}" opacity="0.8"/>
    <line x1="110" y1="230" x2="400" y2="230" stroke="${RED}" stroke-width="4.5"/>
    <line x1="400" y1="230" x2="400" y2="96" stroke="${BLUE}" stroke-width="4.5"/>
    <line x1="110" y1="230" x2="400" y2="96" stroke="${PURPLE}" stroke-width="4"/>
    <path d="M 382 230 L 382 212 L 400 212" fill="none" stroke="${INK}" stroke-width="2"/>

    <circle cx="110" cy="230" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="400" cy="96" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="98" y="256" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="end">(x₁, y₁)</text>
    <text x="412" y="88" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="start">(x₂, y₂)</text>
    <text x="255" y="258" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">run = Δx = x₂ − x₁</text>
    <text x="414" y="170" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="start">rise = Δy = y₂ − y₁</text>

    <rect x="150" y="278" width="380" height="46" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="340" y="308" font-family="${FONT}" font-size="18" font-weight="900" fill="${GREEN}" text-anchor="middle">m = Δy ÷ Δx</text>

    <text x="340" y="346" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">Δ is the Greek letter delta, and it means the change in</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The mistake that costs the most marks: starting the top of the fraction at
  // one point and the bottom at the other. Both panels are the SAME triangle, so
  // the two boxes underneath are the argument — reversing the order flips both
  // signs, and two flipped signs cancel.
  // ───────────────────────────────────────────────────────────────────────────
  ORDER_CONSISTENT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 390" class="w-full h-full">
    ${plate(700, 390)}${MARKERS}

    <text x="350" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Start at either point — but finish the way you started</text>

    <rect x="24" y="52" width="316" height="208" rx="12" fill="${GREEN_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="182" y="82" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">from A to B</text>
    <path d="M 86 226 L 250 226 L 250 132 Z" fill="#ffffff" opacity="0.7"/>
    <line x1="86" y1="226" x2="246" y2="226" stroke="${RED}" stroke-width="4" marker-end="url(#sl-red-f)"/>
    <line x1="250" y1="226" x2="250" y2="136" stroke="${BLUE}" stroke-width="4" marker-end="url(#sl-blue-f)"/>
    <line x1="86" y1="226" x2="250" y2="132" stroke="${PURPLE}" stroke-width="3"/>
    <circle cx="86" cy="226" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="250" cy="132" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <text x="76" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <text x="260" y="126" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">B</text>
    <text x="164" y="248" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">8 right</text>
    <text x="258" y="186" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">6 up</text>

    <rect x="46" y="268" width="272" height="44" rx="10" fill="#ffffff" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="182" y="296" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">m = +6 ÷ +8 = 3/4</text>

    <rect x="360" y="52" width="316" height="208" rx="12" fill="${BLUE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="518" y="82" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">from B to A</text>
    <path d="M 422 226 L 586 226 L 586 132 Z" fill="#ffffff" opacity="0.7"/>
    <line x1="586" y1="226" x2="426" y2="226" stroke="${RED}" stroke-width="4" marker-end="url(#sl-red-f)"/>
    <line x1="586" y1="132" x2="586" y2="222" stroke="${BLUE}" stroke-width="4" marker-end="url(#sl-blue-f)"/>
    <line x1="422" y1="226" x2="586" y2="132" stroke="${PURPLE}" stroke-width="3"/>
    <circle cx="422" cy="226" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="586" cy="132" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2"/>
    <text x="412" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <text x="596" y="126" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">B</text>
    <text x="500" y="248" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">8 left</text>
    <text x="594" y="186" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">6 down</text>

    <rect x="382" y="268" width="272" height="44" rx="10" fill="#ffffff" stroke="${BLUE}" stroke-width="2.5"/>
    <text x="518" y="296" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">m = −6 ÷ −8 = 3/4</text>

    <rect x="110" y="322" width="480" height="54" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <text x="350" y="344" font-family="${FONT}" font-size="17" font-weight="900" fill="${KEY}" text-anchor="middle">two flipped signs cancel — same slope</text>
    <text x="350" y="366" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">what breaks it is taking the top from A and the bottom from B</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The four kinds, side by side, because the pair students confuse is ZERO and
  // UNDEFINED and they can only be confused when seen apart. Deliberately no
  // numbers on the pictures: this diagram is about the SHAPE of the line, and
  // the arithmetic is on the slide beside it.
  // ───────────────────────────────────────────────────────────────────────────
  FOUR_SLOPES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 470" class="w-full h-full">
    ${plate(660, 470)}${MARKERS}

    <text x="330" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Four kinds of slope</text>

    <rect x="22" y="52" width="300" height="190" rx="12" fill="${GREEN_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="172" y="80" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">POSITIVE</text>
    <line x1="62" y1="102" x2="62" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="117" y1="102" x2="117" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="172" y1="102" x2="172" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="227" y1="102" x2="227" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="282" y1="102" x2="282" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="102" x2="282" y2="102" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="132" x2="282" y2="132" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="162" x2="282" y2="162" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="192" x2="282" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="72" y1="184" x2="272" y2="110" stroke="${GREEN}" stroke-width="5" marker-start="url(#sl-green-b)" marker-end="url(#sl-green-f)"/>
    <text x="172" y="222" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">up to the right — m is positive</text>

    <rect x="338" y="52" width="300" height="190" rx="12" fill="${RED_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="488" y="80" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">NEGATIVE</text>
    <line x1="378" y1="102" x2="378" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="433" y1="102" x2="433" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="488" y1="102" x2="488" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="543" y1="102" x2="543" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="598" y1="102" x2="598" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="102" x2="598" y2="102" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="132" x2="598" y2="132" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="162" x2="598" y2="162" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="192" x2="598" y2="192" stroke="#ffffff" stroke-width="2"/>
    <line x1="388" y1="110" x2="588" y2="184" stroke="${RED}" stroke-width="5" marker-start="url(#sl-red-b)" marker-end="url(#sl-red-f)"/>
    <text x="488" y="222" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">down to the right — m is negative</text>

    <rect x="22" y="254" width="300" height="190" rx="12" fill="${BLUE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="172" y="282" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">ZERO</text>
    <line x1="62" y1="304" x2="62" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="117" y1="304" x2="117" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="172" y1="304" x2="172" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="227" y1="304" x2="227" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="282" y1="304" x2="282" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="304" x2="282" y2="304" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="334" x2="282" y2="334" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="364" x2="282" y2="364" stroke="#ffffff" stroke-width="2"/>
    <line x1="62" y1="394" x2="282" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="72" y1="364" x2="272" y2="364" stroke="${BLUE}" stroke-width="5" marker-start="url(#sl-blue-b)" marker-end="url(#sl-blue-f)"/>
    <text x="172" y="330" font-family="${FONT}" font-size="14" font-weight="900" fill="${BLUE}" text-anchor="middle">rise = 0</text>
    <text x="172" y="424" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">flat — no rise, so m = 0</text>

    <rect x="338" y="254" width="300" height="190" rx="12" fill="${PURPLE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="488" y="282" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="middle">UNDEFINED</text>
    <line x1="378" y1="304" x2="378" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="433" y1="304" x2="433" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="488" y1="304" x2="488" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="543" y1="304" x2="543" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="598" y1="304" x2="598" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="304" x2="598" y2="304" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="334" x2="598" y2="334" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="364" x2="598" y2="364" stroke="#ffffff" stroke-width="2"/>
    <line x1="378" y1="394" x2="598" y2="394" stroke="#ffffff" stroke-width="2"/>
    <line x1="488" y1="298" x2="488" y2="400" stroke="${PURPLE}" stroke-width="5" marker-start="url(#sl-purple-b)" marker-end="url(#sl-purple-f)"/>
    <text x="552" y="340" font-family="${FONT}" font-size="14" font-weight="900" fill="${PURPLE}" text-anchor="middle">run = 0</text>
    <text x="488" y="424" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">vertical — run is 0, so no slope</text>

    <text x="330" y="462" font-family="${FONT}" font-size="15" font-weight="bold" fill="${KEY}" text-anchor="middle">zero and undefined are NOT the same thing</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Slope escaping the grid. A road gradient sign IS a slope, and decoding it
  // gives students the fraction–decimal–percentage chain for free. The hill is
  // drawn to scale (400px across, 100px up) so the picture and the number agree.
  // ───────────────────────────────────────────────────────────────────────────
  SLOPE_AS_RATE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" class="w-full h-full">
    ${plate(700, 430)}${MARKERS}

    <text x="350" y="34" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">A road gradient sign is a slope in disguise</text>

    <path d="M 66 264 L 466 264 L 466 164 Z" fill="${GREEN_T}"/>
    <line x1="66" y1="264" x2="466" y2="264" stroke="${RED}" stroke-width="4.5"/>
    <line x1="466" y1="264" x2="466" y2="164" stroke="${BLUE}" stroke-width="4.5"/>
    <line x1="66" y1="264" x2="466" y2="164" stroke="${INK}" stroke-width="5.5"/>
    <path d="M 448 264 L 448 246 L 466 246" fill="none" stroke="${INK}" stroke-width="2"/>

    <text x="266" y="292" font-family="${FONT}" font-size="18" font-weight="900" fill="${RED}" text-anchor="middle">4 along</text>
    <text x="478" y="220" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="start">1 up</text>
    <text x="176" y="196" font-family="${FONT}" font-size="15" font-weight="bold" fill="${RULE}" text-anchor="middle">the hill you drive up</text>

    <path d="M 596 76 L 656 178 L 536 178 Z" fill="#ffffff" stroke="${RED}" stroke-width="7" stroke-linejoin="round"/>
    <text x="596" y="158" font-family="${FONT}" font-size="26" font-weight="900" fill="${INK}" text-anchor="middle">25%</text>
    <text x="596" y="208" font-family="${FONT}" font-size="15" font-weight="bold" fill="${RULE}" text-anchor="middle">the sign you see</text>

    <rect x="52" y="322" width="288" height="66" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="196" y="346" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">1 up for every 4 along</text>
    <text x="196" y="372" font-family="${FONT}" font-size="18" font-weight="900" fill="${GREEN}" text-anchor="middle">m = 1/4 = 0.25</text>

    <rect x="360" y="322" width="288" height="66" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <text x="504" y="346" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">25 up for every 100 along</text>
    <text x="504" y="372" font-family="${FONT}" font-size="18" font-weight="900" fill="${KEY}" text-anchor="middle">0.25 = 25%</text>

    <text x="350" y="412" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">a slope can be a fraction, a decimal or a percentage</text>
  </svg>`,

}
