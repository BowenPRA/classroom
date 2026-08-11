// content/freshman-math/U01_1/diagrams.js
// Teaching diagrams for Algebra Track 1.1 — The Cartesian Plane and Distance.
//
// House rules (docs/LESSON-PLAYBOOK.md §5):
//  · every diagram opens with a white plate, so the artwork is legible on a
//    light OR dark slide and never depends on the page's text colour;
//  · every <text> is written out literally — helpers draw shapes and leader
//    lines only, because `npm run audit:svg` cannot see text produced by a
//    `${helper(...)}` call and will silently check nothing;
//  · label text lives beside or below the artwork, never on top of it.
//
// ONE worked pair runs through every plane diagram: A(−4, −2) and B(4, 4).
// It was chosen so all three results are checkable by eye on the projector —
// the components are 8 and 6 (a 6-8-10 triangle, so the distance is exactly
// 10), and the midpoint (0, 1) sits on the y-axis where a student can SEE that
// it is halfway. Nothing here needs a calculator, which is the point: the
// arithmetic must never be what makes the concept hard.
//
// The 3D box is likewise built from two chained Pythagorean triples —
// 9-12-15 on the floor, then 15-8-17 up to the ceiling corner — so the two-
// triangle method lands on whole numbers at both steps.

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

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

/** White paper plate + a hairline frame. Every diagram starts with this. */
const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const MARKERS = `<defs>
    <marker id="ct-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${INK}"/></marker>
    <marker id="ct-key" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${KEY}"/></marker>
    <marker id="ct-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${RED}"/></marker>
    <marker id="ct-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${BLUE}"/></marker>
    <marker id="ct-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${GREEN}"/></marker>
    <marker id="ct-purple" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${PURPLE}"/></marker>
    <marker id="ct-sweep" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="19" markerHeight="19" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${PURPLE}"/></marker>
  </defs>`

// ── The standard plane: origin (310, 250), 34px per unit, −5…5 both ways ─────
// X(v) = 310 + 34v   ·   Y(v) = 250 − 34v
// Shapes only — every tick number is written literally below.
const planeGrid = () => {
  let g = ''
  for (let i = -5; i <= 5; i += 1) {
    const x = 310 + 34 * i
    const y = 250 - 34 * i
    g += `<line x1="${x}" y1="80" x2="${x}" y2="420" stroke="${GRID}" stroke-width="1"/>`
    g += `<line x1="140" y1="${y}" x2="480" y2="${y}" stroke="${GRID}" stroke-width="1"/>`
  }
  g += `<line x1="130" y1="250" x2="492" y2="250" stroke="${INK}" stroke-width="2.5" marker-end="url(#ct-ink)"/>`
  g += `<line x1="310" y1="430" x2="310" y2="68" stroke="${INK}" stroke-width="2.5" marker-end="url(#ct-ink)"/>`
  for (let i = -5; i <= 5; i += 1) {
    if (i === 0) continue
    const x = 310 + 34 * i
    const y = 250 - 34 * i
    g += `<line x1="${x}" y1="245" x2="${x}" y2="255" stroke="${INK}" stroke-width="2"/>`
    g += `<line x1="305" y1="${y}" x2="315" y2="${y}" stroke="${INK}" stroke-width="2"/>`
  }
  return g
}

// The 3D room box, oblique projection. Shapes only.
//   O(0,0,0) = (230,362)   X = (470,362)   Y = (320,300)   XY = (560,300)
//   Z        = (230,170)   XZ = (470,170)  YZ = (320,108)  XYZ = (560,108)
// The box sits right of x=230 on purpose: that leaves a clean left column for
// the two step cards, which used to be drawn on top of the back edges.
const boxEdges = () => `
    <path d="M 230 362 L 470 362 L 560 300 L 320 300 Z" fill="${BLUE_T}" opacity="0.75"/>
    <path d="M 230 362 L 470 362 L 470 170 L 230 170 Z" fill="#f6f9fb" opacity="0.7"/>
    <path d="M 470 362 L 560 300 L 560 108 L 470 170 Z" fill="#eef3f7" opacity="0.7"/>
    <line x1="230" y1="362" x2="470" y2="362" stroke="${INK}" stroke-width="2.5"/>
    <line x1="470" y1="362" x2="560" y2="300" stroke="${INK}" stroke-width="2.5"/>
    <line x1="230" y1="362" x2="230" y2="170" stroke="${INK}" stroke-width="2.5"/>
    <line x1="470" y1="362" x2="470" y2="170" stroke="${INK}" stroke-width="2"/>
    <line x1="560" y1="300" x2="560" y2="108" stroke="${INK}" stroke-width="2.5"/>
    <line x1="230" y1="170" x2="470" y2="170" stroke="${INK}" stroke-width="2"/>
    <line x1="470" y1="170" x2="560" y2="108" stroke="${INK}" stroke-width="2"/>
    <line x1="230" y1="170" x2="320" y2="108" stroke="${INK}" stroke-width="1.6" stroke-dasharray="5 4"/>
    <line x1="320" y1="108" x2="560" y2="108" stroke="${INK}" stroke-width="1.6" stroke-dasharray="5 4"/>
    <line x1="320" y1="300" x2="320" y2="108" stroke="${INK}" stroke-width="1.6" stroke-dasharray="5 4"/>
    <line x1="230" y1="362" x2="320" y2="300" stroke="${INK}" stroke-width="1.6" stroke-dasharray="5 4"/>
    <line x1="320" y1="300" x2="560" y2="300" stroke="${INK}" stroke-width="1.6" stroke-dasharray="5 4"/>`

export const DIAGRAMS = {
  // ───────────────────────────────────────────────────────────────────────────
  // 1D. Distance between two numbers on the line: count the gap, or subtract
  // smaller from bigger. The arc carries the answer so it is not buried in the
  // arithmetic underneath.
  // ───────────────────────────────────────────────────────────────────────────
  LINE_DISTANCE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 250" class="w-full h-full">
    ${plate(680, 250)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Distance is the size of the gap</text>

    <path d="M 152 96 L 152 78 L 520 78 L 520 96" fill="none" stroke="${KEY}" stroke-width="2.5"/>
    <text x="336" y="68" font-family="${FONT}" font-size="19" font-weight="900" fill="${KEY}" text-anchor="middle">8 units apart</text>

    <line x1="50" y1="130" x2="644" y2="130" stroke="${INK}" stroke-width="2.5" marker-end="url(#ct-ink)"/>
    <line x1="60" y1="124" x2="60" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="106" y1="124" x2="106" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="152" y1="124" x2="152" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="198" y1="124" x2="198" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="244" y1="124" x2="244" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="290" y1="124" x2="290" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="336" y1="124" x2="336" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="382" y1="124" x2="382" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="428" y1="124" x2="428" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="474" y1="124" x2="474" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="520" y1="124" x2="520" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="566" y1="124" x2="566" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="612" y1="124" x2="612" y2="136" stroke="${INK}" stroke-width="2"/>

    <circle cx="152" cy="130" r="7.5" fill="${RED}"/>
    <circle cx="520" cy="130" r="7.5" fill="${BLUE}"/>

    <text x="60" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−5</text>
    <text x="106" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−4</text>
    <text x="152" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">−3</text>
    <text x="198" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−2</text>
    <text x="244" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−1</text>
    <text x="290" y="158" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">0</text>
    <text x="336" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">1</text>
    <text x="382" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">2</text>
    <text x="428" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">3</text>
    <text x="474" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">4</text>
    <text x="520" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">5</text>
    <text x="566" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">6</text>
    <text x="612" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">7</text>

    <rect x="188" y="180" width="304" height="48" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="340" y="203" font-family="${FONT}" font-size="19" font-weight="900" fill="${KEY}" text-anchor="middle">bigger − smaller</text>
    <text x="340" y="221" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">5 − (−3) = 8</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Absolute value as DISTANCE FROM ZERO — not "make it positive", which is the
  // rule students memorise and then misapply. Both arrows are the same length,
  // so |−4| and |4| are visibly the same thing.
  // ───────────────────────────────────────────────────────────────────────────
  ABS_VALUE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 260" class="w-full h-full">
    ${plate(680, 260)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Absolute value = distance from zero</text>

    <path d="M 332 92 L 116 92" fill="none" stroke="${RED}" stroke-width="3" marker-end="url(#ct-red)"/>
    <path d="M 348 92 L 564 92" fill="none" stroke="${BLUE}" stroke-width="3" marker-end="url(#ct-blue)"/>
    <text x="224" y="80" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">4 units</text>
    <text x="456" y="80" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">4 units</text>

    <line x1="50" y1="130" x2="644" y2="130" stroke="${INK}" stroke-width="2.5" marker-end="url(#ct-ink)"/>
    <line x1="60" y1="124" x2="60" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="116" y1="124" x2="116" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="172" y1="124" x2="172" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="228" y1="124" x2="228" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="284" y1="124" x2="284" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="340" y1="122" x2="340" y2="138" stroke="${INK}" stroke-width="3"/>
    <line x1="396" y1="124" x2="396" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="452" y1="124" x2="452" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="508" y1="124" x2="508" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="564" y1="124" x2="564" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="620" y1="124" x2="620" y2="136" stroke="${INK}" stroke-width="2"/>

    <circle cx="116" cy="130" r="7.5" fill="${RED}"/>
    <circle cx="564" cy="130" r="7.5" fill="${BLUE}"/>

    <text x="60" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−5</text>
    <text x="116" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">−4</text>
    <text x="172" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−3</text>
    <text x="228" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−2</text>
    <text x="284" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">−1</text>
    <text x="340" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">0</text>
    <text x="396" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">1</text>
    <text x="452" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">2</text>
    <text x="508" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">3</text>
    <text x="564" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">4</text>
    <text x="620" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">5</text>

    <rect x="96" y="182" width="200" height="46" rx="10" fill="#fdeef0" stroke="${RED}" stroke-width="2"/>
    <text x="196" y="212" font-family="${FONT}" font-size="24" font-weight="900" fill="${RED}" text-anchor="middle">| −4 | = 4</text>

    <rect x="384" y="182" width="200" height="46" rx="10" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2"/>
    <text x="484" y="212" font-family="${FONT}" font-size="24" font-weight="900" fill="${BLUE}" text-anchor="middle">| 4 | = 4</text>

    <text x="340" y="248" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RULE}" text-anchor="middle">a distance is never negative</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Midpoint on the line. The two arcs are drawn the SAME length on purpose —
  // "halfway" is a statement about two equal gaps, and the arithmetic
  // (−3 + 5) ÷ 2 is just how you find where that happens.
  // ───────────────────────────────────────────────────────────────────────────
  LINE_MIDPOINT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 250" class="w-full h-full">
    ${plate(680, 250)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The midpoint sits on two equal gaps</text>

    <path d="M 152 96 L 152 78 L 336 78 L 336 96" fill="none" stroke="${GREEN}" stroke-width="2.5"/>
    <path d="M 336 96 L 336 78 L 520 78 L 520 96" fill="none" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="244" y="68" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">4</text>
    <text x="428" y="68" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">4</text>

    <line x1="50" y1="130" x2="644" y2="130" stroke="${INK}" stroke-width="2.5" marker-end="url(#ct-ink)"/>
    <line x1="60" y1="124" x2="60" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="106" y1="124" x2="106" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="152" y1="124" x2="152" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="198" y1="124" x2="198" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="244" y1="124" x2="244" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="290" y1="124" x2="290" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="336" y1="124" x2="336" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="382" y1="124" x2="382" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="428" y1="124" x2="428" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="474" y1="124" x2="474" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="520" y1="124" x2="520" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="566" y1="124" x2="566" y2="136" stroke="${INK}" stroke-width="2"/>
    <line x1="612" y1="124" x2="612" y2="136" stroke="${INK}" stroke-width="2"/>

    <circle cx="152" cy="130" r="7.5" fill="${RED}"/>
    <circle cx="520" cy="130" r="7.5" fill="${BLUE}"/>
    <circle cx="336" cy="130" r="9" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="152" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">−3</text>
    <text x="290" y="158" font-family="${FONT}" font-size="14" fill="${RULE}" text-anchor="middle">0</text>
    <text x="336" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">1</text>
    <text x="520" y="158" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">5</text>

    <rect x="164" y="180" width="352" height="50" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2"/>
    <text x="340" y="203" font-family="${FONT}" font-size="19" font-weight="900" fill="${GREEN}" text-anchor="middle">(−3 + 5) ÷ 2 = 2 ÷ 2 = 1</text>
    <text x="340" y="222" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">add them, halve it — that is the average</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Anatomy of the plane: two number lines crossed at right angles. The point
  // (4, 3) is reached by walking ACROSS first and then UP, which is the whole
  // reason the order in an ordered pair matters.
  // ───────────────────────────────────────────────────────────────────────────
  PLANE_ANATOMY: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Two number lines, crossed at 90°</text>

    <path d="M 310 250 L 442 250" fill="none" stroke="${RED}" stroke-width="4" marker-end="url(#ct-red)"/>
    <path d="M 446 250 L 446 152" fill="none" stroke="${BLUE}" stroke-width="4" marker-end="url(#ct-blue)"/>
    <circle cx="446" cy="148" r="8" fill="${PURPLE}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="378" y="272" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">4 across</text>
    <text x="462" y="200" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">3 up</text>
    <text x="446" y="132" font-family="${FONT}" font-size="18" font-weight="900" fill="${PURPLE}" text-anchor="middle">(4, 3)</text>

    <text x="504" y="244" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="start">x-axis</text>
    <text x="322" y="76" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="start">y-axis</text>
    <text x="300" y="242" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="end">0</text>

    <line x1="252" y1="304" x2="300" y2="258" stroke="${KEY}" stroke-width="1.5"/>
    <circle cx="302" cy="256" r="3.5" fill="${KEY}"/>
    <text x="248" y="320" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="end">origin</text>

    <text x="310" y="452" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">across first, then up — always in that order</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Order matters. (4, 3) and (3, 4) use the same two digits and are not the
  // same place. This is the single most common wrong answer in the topic.
  // ───────────────────────────────────────────────────────────────────────────
  ORDER_MATTERS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Same digits, different places</text>

    <line x1="310" y1="250" x2="446" y2="250" stroke="${RED}" stroke-width="2.5" stroke-dasharray="5 4"/>
    <line x1="446" y1="250" x2="446" y2="148" stroke="${RED}" stroke-width="2.5" stroke-dasharray="5 4"/>
    <circle cx="446" cy="148" r="8.5" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="470" y="142" font-family="${FONT}" font-size="18" font-weight="900" fill="${RED}" text-anchor="start">(4, 3)</text>

    <line x1="310" y1="250" x2="412" y2="250" stroke="${BLUE}" stroke-width="2.5" stroke-dasharray="5 4"/>
    <line x1="412" y1="250" x2="412" y2="114" stroke="${BLUE}" stroke-width="2.5" stroke-dasharray="5 4"/>
    <circle cx="412" cy="114" r="8.5" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="400" y="100" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="end">(3, 4)</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="150" y="392" width="320" height="46" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="310" y="421" font-family="${FONT}" font-size="20" font-weight="900" fill="${KEY}" text-anchor="middle">(4, 3) is not (3, 4)</text>

    <text x="310" y="458" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">an ordered pair — the order is part of the answer</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The four quadrants with their sign patterns. Roman numerals, because that
  // is what every later textbook uses.
  // ───────────────────────────────────────────────────────────────────────────
  QUADRANTS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}

    <rect x="312" y="82" width="166" height="166" rx="6" fill="${GREEN_T}"/>
    <rect x="142" y="82" width="166" height="166" rx="6" fill="${BLUE_T}"/>
    <rect x="142" y="252" width="166" height="166" rx="6" fill="#fdeef0"/>
    <rect x="312" y="252" width="166" height="166" rx="6" fill="${PURPLE_T}"/>
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The four quadrants</text>

    <text x="395" y="156" font-family="${FONT}" font-size="34" font-weight="900" fill="${GREEN}" text-anchor="middle">I</text>
    <text x="395" y="186" font-family="${FONT}" font-size="18" font-weight="900" fill="${GREEN}" text-anchor="middle">(+, +)</text>

    <text x="225" y="156" font-family="${FONT}" font-size="34" font-weight="900" fill="${BLUE}" text-anchor="middle">II</text>
    <text x="225" y="186" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="middle">(−, +)</text>

    <text x="225" y="326" font-family="${FONT}" font-size="34" font-weight="900" fill="${RED}" text-anchor="middle">III</text>
    <text x="225" y="356" font-family="${FONT}" font-size="18" font-weight="900" fill="${RED}" text-anchor="middle">(−, −)</text>

    <text x="395" y="326" font-family="${FONT}" font-size="34" font-weight="900" fill="${PURPLE}" text-anchor="middle">IV</text>
    <text x="395" y="356" font-family="${FONT}" font-size="18" font-weight="900" fill="${PURPLE}" text-anchor="middle">(+, −)</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <text x="310" y="452" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">a point ON an axis is in no quadrant at all</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Why the numbering runs the way it does: start at (1, 0) and sweep
  // ANTICLOCKWISE. The quadrants come out in order, for free. That sweep is
  // the unit circle, which is where trigonometry starts — flagged here as a
  // thing to recognise later, not a thing to learn today.
  // ───────────────────────────────────────────────────────────────────────────
  COUNTERCLOCKWISE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Start at (1, 0) and sweep anticlockwise</text>

    <line x1="150" y1="250" x2="470" y2="250" stroke="${INK}" stroke-width="2.5" marker-end="url(#ct-ink)"/>
    <line x1="310" y1="410" x2="310" y2="90" stroke="${INK}" stroke-width="2.5" marker-end="url(#ct-ink)"/>

    <circle cx="310" cy="250" r="80" fill="none" stroke="${GRID}" stroke-width="10"/>

    <path d="M 390 250 A 80 80 0 0 0 310 170" fill="none" stroke="${GREEN}" stroke-width="7" stroke-linecap="round"/>
    <path d="M 310 170 A 80 80 0 0 0 230 250" fill="none" stroke="${BLUE}" stroke-width="7" stroke-linecap="round"/>
    <path d="M 230 250 A 80 80 0 0 0 310 330" fill="none" stroke="${RED}" stroke-width="7" stroke-linecap="round"/>
    <path d="M 310 330 A 80 80 0 0 0 384 262" fill="none" stroke="${PURPLE}" stroke-width="7" stroke-linecap="round" marker-end="url(#ct-sweep)"/>

    <circle cx="390" cy="250" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="404" y="278" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="start">start (1, 0)</text>

    <text x="388" y="182" font-family="${FONT}" font-size="30" font-weight="900" fill="${GREEN}" text-anchor="middle">I</text>
    <text x="232" y="182" font-family="${FONT}" font-size="30" font-weight="900" fill="${BLUE}" text-anchor="middle">II</text>
    <text x="228" y="336" font-family="${FONT}" font-size="30" font-weight="900" fill="${RED}" text-anchor="middle">III</text>
    <text x="386" y="336" font-family="${FONT}" font-size="30" font-weight="900" fill="${PURPLE}" text-anchor="middle">IV</text>

    <text x="482" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="98" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="94" y="396" width="432" height="52" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="310" y="418" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">this sweep is the unit circle</text>
    <text x="310" y="438" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">later this becomes angles — that is trigonometry</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The key move of the whole lesson: a slanted line is hard, but its shadow on
  // each axis is a 1D distance we already know how to do. Drop the corner and a
  // right triangle appears.
  // ───────────────────────────────────────────────────────────────────────────
  COMPONENTS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Break the slanted line into two straight ones</text>

    <path d="M 174 318 L 446 318 L 446 114 Z" fill="${ORANGE_T}" opacity="0.85"/>
    <line x1="174" y1="318" x2="446" y2="318" stroke="${RED}" stroke-width="4"/>
    <line x1="446" y1="318" x2="446" y2="114" stroke="${BLUE}" stroke-width="4"/>
    <line x1="174" y1="318" x2="446" y2="114" stroke="${PURPLE}" stroke-width="4"/>

    <path d="M 428 318 L 428 300 L 446 300" fill="none" stroke="${INK}" stroke-width="2"/>

    <circle cx="174" cy="318" r="8.5" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="446" cy="114" r="8.5" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="164" y="344" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="middle">A (−4, −2)</text>
    <text x="452" y="100" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="start">B (4, 4)</text>

    <text x="392" y="344" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">x-component = 8</text>
    <text x="458" y="220" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="start">y-comp. = 6</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="86" y="378" width="448" height="56" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="310" y="400" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">across: | 4 − (−4) | = 8</text>
    <text x="310" y="424" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">up: | 4 − (−2) | = 6</text>

    <text x="310" y="456" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">each component is a distance on one number line</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Midpoint in the plane = the 1D midpoint done twice, once per component.
  // The answer (0, 1) lands on the y-axis, so the class can check "is that
  // halfway?" by eye instead of trusting the formula.
  // ───────────────────────────────────────────────────────────────────────────
  MIDPOINT_PLANE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Average the x's, average the y's</text>

    <line x1="174" y1="318" x2="446" y2="114" stroke="${PURPLE}" stroke-width="4"/>

    <line x1="174" y1="318" x2="174" y2="250" stroke="${RED}" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="446" y1="114" x2="446" y2="250" stroke="${RED}" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="174" y1="318" x2="310" y2="318" stroke="${BLUE}" stroke-width="2" stroke-dasharray="4 4"/>
    <line x1="446" y1="114" x2="310" y2="114" stroke="${BLUE}" stroke-width="2" stroke-dasharray="4 4"/>

    <circle cx="174" cy="318" r="8.5" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="446" cy="114" r="8.5" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="310" cy="216" r="10" fill="${GREEN}" stroke="#ffffff" stroke-width="3"/>

    <text x="164" y="344" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="middle">A (−4, −2)</text>
    <text x="452" y="100" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="start">B (4, 4)</text>
    <text x="252" y="204" font-family="${FONT}" font-size="18" font-weight="900" fill="${GREEN}" text-anchor="end">M (0, 1)</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="94" y="384" width="432" height="72" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2"/>
    <text x="310" y="408" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">x of M = (−4 + 4) ÷ 2 = 0</text>
    <text x="310" y="430" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">y of M = (−2 + 4) ÷ 2 = 1</text>
    <text x="310" y="448" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">the midpoint is a point, so it needs two numbers</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Distance in the plane = the hypotenuse of the component triangle. Deliberately
  // a 6-8-10, so Pythagoras produces a whole number and the concept is not
  // competing with a square root for attention.
  // ───────────────────────────────────────────────────────────────────────────
  DISTANCE_PLANE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" class="w-full h-full">
    ${plate(620, 470)}${MARKERS}
    ${planeGrid()}

    <text x="310" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The distance is the hypotenuse</text>

    <path d="M 174 318 L 446 318 L 446 114 Z" fill="${ORANGE_T}" opacity="0.85"/>
    <line x1="174" y1="318" x2="446" y2="318" stroke="${RED}" stroke-width="3.5"/>
    <line x1="446" y1="318" x2="446" y2="114" stroke="${BLUE}" stroke-width="3.5"/>
    <line x1="174" y1="318" x2="446" y2="114" stroke="${PURPLE}" stroke-width="5"/>
    <path d="M 428 318 L 428 300 L 446 300" fill="none" stroke="${INK}" stroke-width="2"/>

    <circle cx="174" cy="318" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="446" cy="114" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="248" y="344" font-family="${FONT}" font-size="18" font-weight="900" fill="${RED}" text-anchor="middle">8</text>
    <text x="462" y="220" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="start">6</text>
    <text x="272" y="192" font-family="${FONT}" font-size="22" font-weight="900" fill="${PURPLE}" text-anchor="middle">10</text>

    <text x="504" y="244" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">x</text>
    <text x="322" y="76" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">y</text>

    <rect x="82" y="384" width="456" height="72" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="310" y="409" font-family="${FONT}" font-size="18" font-weight="900" fill="${PURPLE}" text-anchor="middle">d² = 8² + 6² = 64 + 36 = 100</text>
    <text x="310" y="433" font-family="${FONT}" font-size="18" font-weight="900" fill="${PURPLE}" text-anchor="middle">d = √100 = 10</text>
    <text x="310" y="450" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">Pythagoras, on the triangle the components made</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // What a dimension IS: the count of directions you can move in independently.
  // Three panels, one axis added each time, and the axes always meet at 90°.
  // ───────────────────────────────────────────────────────────────────────────
  DIMENSION_LADDER: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 280" class="w-full h-full">
    ${plate(720, 280)}${MARKERS}

    <text x="360" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">A dimension is an axis you can move along</text>

    <rect x="24" y="52" width="212" height="196" rx="12" fill="#f8fafc" stroke="${GRID}" stroke-width="2"/>
    <line x1="52" y1="150" x2="208" y2="150" stroke="${RED}" stroke-width="3" marker-end="url(#ct-red)"/>
    <circle cx="130" cy="150" r="6" fill="${INK}"/>
    <text x="130" y="88" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">1D — a line</text>
    <text x="130" y="112" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">1 axis</text>
    <text x="130" y="240" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">1 number</text>

    <rect x="254" y="52" width="212" height="196" rx="12" fill="#f8fafc" stroke="${GRID}" stroke-width="2"/>
    <line x1="286" y1="170" x2="438" y2="170" stroke="${RED}" stroke-width="3" marker-end="url(#ct-red)"/>
    <line x1="330" y1="212" x2="330" y2="128" stroke="${BLUE}" stroke-width="3" marker-end="url(#ct-blue)"/>
    <path d="M 330 158 L 342 158 L 342 170" fill="none" stroke="${INK}" stroke-width="1.6"/>
    <text x="360" y="88" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">2D — a plane</text>
    <text x="360" y="112" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">2 axes</text>
    <text x="360" y="240" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">2 numbers</text>

    <rect x="484" y="52" width="212" height="196" rx="12" fill="#f8fafc" stroke="${GRID}" stroke-width="2"/>
    <line x1="556" y1="180" x2="668" y2="180" stroke="${RED}" stroke-width="3" marker-end="url(#ct-red)"/>
    <line x1="556" y1="212" x2="556" y2="132" stroke="${BLUE}" stroke-width="3" marker-end="url(#ct-blue)"/>
    <line x1="556" y1="180" x2="496" y2="222" stroke="${GREEN}" stroke-width="3" marker-end="url(#ct-green)"/>
    <text x="590" y="88" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">3D — space</text>
    <text x="590" y="112" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">3 axes</text>
    <text x="590" y="240" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">3 numbers</text>

    <text x="360" y="270" font-family="${FONT}" font-size="15" font-weight="bold" fill="${KEY}" text-anchor="middle">every axis meets every other one at 90°</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Three axes, named. The z-axis is the one that comes up out of the page —
  // which is exactly what the folded-notebook model in the project makes real.
  // ───────────────────────────────────────────────────────────────────────────
  AXES_3D: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 420" class="w-full h-full">
    ${plate(620, 420)}${MARKERS}

    <text x="310" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Three axes, all at right angles</text>

    <line x1="290" y1="260" x2="540" y2="260" stroke="${RED}" stroke-width="3.5" marker-end="url(#ct-red)"/>
    <line x1="290" y1="260" x2="290" y2="80" stroke="${GREEN}" stroke-width="3.5" marker-end="url(#ct-green)"/>
    <line x1="290" y1="260" x2="120" y2="360" stroke="${BLUE}" stroke-width="3.5" marker-end="url(#ct-blue)"/>

    <path d="M 290 236 L 314 236 L 314 260" fill="none" stroke="${INK}" stroke-width="1.8"/>

    <circle cx="290" cy="260" r="7" fill="${INK}"/>
    <line x1="272" y1="248" x2="284" y2="257" stroke="${RULE}" stroke-width="1.5"/>
    <text x="268" y="244" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="end">origin (0, 0, 0)</text>

    <text x="556" y="266" font-family="${FONT}" font-size="22" font-weight="900" fill="${RED}" text-anchor="start">x</text>
    <text x="302" y="76" font-family="${FONT}" font-size="22" font-weight="900" fill="${GREEN}" text-anchor="start">z</text>
    <text x="104" y="380" font-family="${FONT}" font-size="22" font-weight="900" fill="${BLUE}" text-anchor="middle">y</text>

    <text x="556" y="288" font-family="${FONT}" font-size="13" font-weight="bold" fill="${RED}" text-anchor="end">across</text>
    <text x="316" y="96" font-family="${FONT}" font-size="13" font-weight="bold" fill="${GREEN}" text-anchor="start">up</text>
    <text x="128" y="398" font-family="${FONT}" font-size="13" font-weight="bold" fill="${BLUE}" text-anchor="middle">towards you</text>

    <rect x="352" y="330" width="242" height="46" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="473" y="359" font-family="${FONT}" font-size="19" font-weight="900" fill="${KEY}" text-anchor="middle">a point is (x, y, z)</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE central diagram of the second half. Two right triangles, chained:
  //   1. on the FLOOR, legs x and y, hypotenuse f
  //   2. STANDING UP, legs f and z, hypotenuse d
  // Written with letters so the algebra on the next slide has something to
  // point at. The numbers version is FLY_ROOM.
  // ───────────────────────────────────────────────────────────────────────────
  BOX_DIAGONAL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 440" class="w-full h-full">
    ${plate(680, 440)}${MARKERS}

    <text x="340" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Two triangles get you across the room</text>

    <path d="M 230 362 L 470 362 L 560 300 Z" fill="${ORANGE_T}" opacity="0.9"/>
    <path d="M 230 362 L 560 300 L 560 108 Z" fill="${PURPLE_T}" opacity="0.85"/>
    ${boxEdges()}

    <line x1="230" y1="362" x2="560" y2="300" stroke="${KEY}" stroke-width="4"/>
    <line x1="230" y1="362" x2="560" y2="108" stroke="${PURPLE}" stroke-width="5"/>

    <path d="M 542 303 L 543 285 L 560 282" fill="none" stroke="${INK}" stroke-width="2"/>

    <circle cx="230" cy="362" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="560" cy="108" r="8" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="350" y="388" font-family="${FONT}" font-size="19" font-weight="900" fill="${RED}" text-anchor="middle">x</text>
    <text x="534" y="348" font-family="${FONT}" font-size="19" font-weight="900" fill="${BLUE}" text-anchor="middle">y</text>
    <text x="578" y="204" font-family="${FONT}" font-size="19" font-weight="900" fill="${GREEN}" text-anchor="start">z</text>
    <text x="395" y="320" font-family="${FONT}" font-size="19" font-weight="900" fill="${KEY}" text-anchor="middle">f</text>
    <text x="370" y="228" font-family="${FONT}" font-size="22" font-weight="900" fill="${PURPLE}" text-anchor="middle">d</text>

    <text x="216" y="382" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="end">start</text>
    <text x="572" y="96" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="start">finish</text>

    <rect x="16" y="110" width="200" height="52" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="116" y="132" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="middle">1. on the floor</text>
    <text x="116" y="152" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">f² = x² + y²</text>

    <rect x="16" y="176" width="200" height="52" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="116" y="198" font-family="${FONT}" font-size="15" font-weight="900" fill="${PURPLE}" text-anchor="middle">2. standing up</text>
    <text x="116" y="218" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">d² = f² + z²</text>

    <text x="340" y="424" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">the floor diagonal f becomes a leg of the second triangle</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The payoff. Substituting f² = x² + y² into d² = f² + z² makes the square
  // root of the floor diagonal disappear, and the pattern from 2D just carries
  // on. This is the slide the lesson is built towards.
  // ───────────────────────────────────────────────────────────────────────────
  DISTANCE_3D_ALGEBRA: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 330" class="w-full h-full">
    ${plate(680, 330)}${MARKERS}

    <text x="340" y="34" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Put the two triangles together</text>

    <rect x="56" y="58" width="248" height="56" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="180" y="82" font-family="${FONT}" font-size="14" font-weight="bold" fill="${KEY}" text-anchor="middle">floor triangle</text>
    <text x="180" y="104" font-family="${FONT}" font-size="19" font-weight="900" fill="${INK}" text-anchor="middle">f² = x² + y²</text>

    <rect x="376" y="58" width="248" height="56" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="500" y="82" font-family="${FONT}" font-size="14" font-weight="bold" fill="${PURPLE}" text-anchor="middle">upright triangle</text>
    <text x="500" y="104" font-family="${FONT}" font-size="19" font-weight="900" fill="${INK}" text-anchor="middle">d² = f² + z²</text>

    <path d="M 180 122 L 300 158" fill="none" stroke="${RULE}" stroke-width="2" marker-end="url(#ct-ink)"/>
    <path d="M 500 122 L 380 158" fill="none" stroke="${RULE}" stroke-width="2" marker-end="url(#ct-ink)"/>

    <text x="340" y="196" font-family="${FONT}" font-size="21" font-weight="900" fill="${INK}" text-anchor="middle">d² = ( x² + y² ) + z²</text>

    <rect x="132" y="216" width="416" height="60" rx="12" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="3"/>
    <text x="340" y="254" font-family="${FONT}" font-size="26" font-weight="900" fill="${GREEN}" text-anchor="middle">d = √( x² + y² + z² )</text>

    <text x="340" y="302" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">one square per dimension, all under one root</text>
    <text x="340" y="322" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RULE}" text-anchor="middle">you never have to work out f at all</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The freshman's dream, with an actual counterexample. 3 and 4 are chosen
  // because 3-4-5 is the triangle everyone already knows, so the gap between 5
  // and 7 is impossible to argue with.
  // ───────────────────────────────────────────────────────────────────────────
  FRESHMAN_DREAM: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 330" class="w-full h-full">
    ${plate(680, 330)}${MARKERS}

    <text x="340" y="34" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Test it with numbers you already know</text>

    <path d="M 76 250 L 220 250 L 220 142 Z" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="3"/>
    <path d="M 202 250 L 202 232 L 220 232" fill="none" stroke="${INK}" stroke-width="2"/>
    <text x="148" y="276" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="middle">4</text>
    <text x="236" y="202" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="start">3</text>
    <text x="126" y="184" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="middle">5</text>

    <rect x="300" y="96" width="330" height="56" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="465" y="131" font-family="${FONT}" font-size="22" font-weight="900" fill="${GREEN}" text-anchor="middle">√( 3² + 4² ) = √25 = 5</text>

    <rect x="300" y="180" width="330" height="56" rx="10" fill="#fdeef0" stroke="${RED}" stroke-width="2.5"/>
    <text x="465" y="215" font-family="${FONT}" font-size="22" font-weight="900" fill="${RED}" text-anchor="middle">3 + 4 = 7</text>

    <text x="465" y="170" font-family="${FONT}" font-size="26" font-weight="900" fill="${INK}" text-anchor="middle">≠</text>

    <rect x="112" y="288" width="456" height="30" rx="8" fill="${RED}"/>
    <text x="340" y="309" font-family="${FONT}" font-size="17" font-weight="900" fill="#ffffff" text-anchor="middle">the root does not split across a plus sign</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The project room, with the numbers in. Same geometry as BOX_DIAGONAL so
  // students recognise it: 12 by 9 floor, 8 up. Both steps land on whole
  // numbers — 9-12-15 on the floor, then 15-8-17 to the ceiling corner.
  // ───────────────────────────────────────────────────────────────────────────
  FLY_ROOM: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 440" class="w-full h-full">
    ${plate(680, 440)}${MARKERS}

    <text x="340" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Mr Bowen's classroom, and one fly</text>

    <path d="M 230 362 L 470 362 L 560 300 Z" fill="${ORANGE_T}" opacity="0.9"/>
    <path d="M 230 362 L 560 300 L 560 108 Z" fill="${PURPLE_T}" opacity="0.85"/>
    ${boxEdges()}

    <line x1="230" y1="362" x2="560" y2="300" stroke="${KEY}" stroke-width="3.5" stroke-dasharray="7 5"/>
    <line x1="230" y1="362" x2="560" y2="108" stroke="${PURPLE}" stroke-width="5"/>
    <path d="M 542 303 L 543 285 L 560 282" fill="none" stroke="${INK}" stroke-width="2"/>

    <circle cx="230" cy="362" r="8" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="560" cy="108" r="8" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="350" y="388" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">12 ft</text>
    <text x="534" y="348" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">9 ft</text>
    <text x="578" y="204" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="start">8 ft</text>
    <text x="395" y="320" font-family="${FONT}" font-size="17" font-weight="900" fill="${KEY}" text-anchor="middle">15 ft</text>
    <text x="366" y="226" font-family="${FONT}" font-size="22" font-weight="900" fill="${PURPLE}" text-anchor="middle">17 ft</text>

    <text x="216" y="382" font-family="${FONT}" font-size="14" font-weight="bold" fill="${GREEN}" text-anchor="end">fly starts</text>
    <text x="572" y="96" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RED}" text-anchor="start">fly lands</text>

    <rect x="16" y="110" width="200" height="52" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="116" y="132" font-family="${FONT}" font-size="14" font-weight="bold" fill="${KEY}" text-anchor="middle">across the floor</text>
    <text x="116" y="152" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">√(12² + 9²) = 15</text>

    <rect x="16" y="176" width="200" height="52" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="116" y="198" font-family="${FONT}" font-size="14" font-weight="bold" fill="${PURPLE}" text-anchor="middle">up to the corner</text>
    <text x="116" y="218" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">√(15² + 8²) = 17</text>

    <text x="340" y="424" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">or in one step: √(12² + 9² + 8²) = √289 = 17</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The physical model for the project. A notebook opened to 90° IS a set of
  // three axes: the flat page carries x and y, the standing page carries z.
  // Students who fold this find the z-axis obvious in a way no drawing manages.
  // ───────────────────────────────────────────────────────────────────────────
  NOTEBOOK_MODEL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 400" class="w-full h-full">
    ${plate(680, 400)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Fold your notebook to 90° and it becomes 3D</text>

    <path d="M 150 300 L 420 300 L 530 224 L 260 224 Z" fill="#f4f7fa" stroke="${INK}" stroke-width="2.5"/>
    <path d="M 150 300 L 260 224 L 260 76 L 150 152 Z" fill="#fbfcfd" stroke="${INK}" stroke-width="2.5"/>
    <line x1="150" y1="300" x2="150" y2="152" stroke="${INK}" stroke-width="3.5"/>

    <path d="M 150 300 L 350 300 L 427 247 L 227 247 Z" fill="${ORANGE_T}" opacity="0.7" stroke="${KEY}" stroke-width="2" stroke-dasharray="6 4"/>
    <line x1="427" y1="247" x2="427" y2="137" stroke="${KEY}" stroke-width="2" stroke-dasharray="6 4"/>

    <line x1="150" y1="300" x2="400" y2="300" stroke="${RED}" stroke-width="3" marker-end="url(#ct-red)"/>
    <line x1="150" y1="300" x2="240" y2="238" stroke="${BLUE}" stroke-width="3" marker-end="url(#ct-blue)"/>
    <line x1="150" y1="300" x2="150" y2="166" stroke="${GREEN}" stroke-width="3" marker-end="url(#ct-green)"/>

    <path d="M 150 276 L 174 276 L 174 300" fill="none" stroke="${INK}" stroke-width="1.8"/>

    <line x1="150" y1="300" x2="427" y2="137" stroke="${PURPLE}" stroke-width="4" stroke-dasharray="9 5"/>
    <circle cx="150" cy="300" r="7" fill="${GREEN}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="427" cy="137" r="7" fill="${RED}" stroke="#ffffff" stroke-width="2"/>

    <text x="412" y="308" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="start">x</text>
    <text x="250" y="252" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="start">y</text>
    <text x="134" y="172" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="end">z</text>
    <text x="286" y="174" font-family="${FONT}" font-size="15" font-weight="900" fill="${PURPLE}" text-anchor="middle">the twine</text>

    <line x1="144" y1="116" x2="172" y2="114" stroke="${RULE}" stroke-width="1.5"/>
    <text x="140" y="106" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RULE}" text-anchor="end">standing page</text>
    <text x="140" y="124" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RULE}" text-anchor="end">= the wall</text>
    <text x="320" y="338" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RULE}" text-anchor="middle">flat page = the floor</text>

    <rect x="424" y="300" width="248" height="78" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="548" y="324" font-family="${FONT}" font-size="14" font-weight="900" fill="${KEY}" text-anchor="middle">draw the room to scale</text>
    <text x="548" y="346" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">tape the twine at the start,</text>
    <text x="548" y="366" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">cut it at the far corner</text>
  </svg>`,
}
