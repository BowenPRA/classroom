// content/freshman-math/U01_3/diagrams.js
// Teaching diagrams for Algebra Track 1.3 — Circles, Compasses and Three Points.
//
// House rules (docs/LESSON-PLAYBOOK.md §5):
//  · every diagram opens with a white plate, so the artwork is legible on a
//    light OR dark slide and never depends on the page's text colour;
//  · every <text> is written out literally — helpers draw shapes and leader
//    lines only, because `npm run audit:svg` cannot see text produced by a
//    `${helper(...)}` call and will silently check nothing;
//  · label text lives beside or below the artwork, never on top of it.
//
// THE ARGUMENT THIS FILE HAS TO CARRY, in order:
//   HOW_MANY_CIRCLES   one point → endless circles. Two points → still endless.
//                      Three → exactly one. This is deliberately the same shape
//                      of argument as 1.2's "any two points make a line", so the
//                      class recognises the move before they meet the answer.
//   LINE_MEETS_CIRCLE  the exception, proved rather than asserted: a straight
//                      line crosses a circle at most TWICE, so three points on a
//                      line can never all sit on one.
//   CIRCLE_DEF         what a circle actually is — every point the same distance
//                      from one point. Five radii, all ticked equal.
//   COMPASS_ANATOMY    why the compass is not a gadget: the locked hinge IS that
//                      fixed distance, so the pencil has no choice.
//   PERP_BISECTOR      the construction, drawn as arcs rather than as full
//                      circles, because arcs are what a student's page looks
//                      like and a full circle hides which bit came from where.
//   EQUIDISTANT        why the construction works — same compass setting for
//                      both arcs, so each crossing is equally far from A and B.
//   CIRCUMCENTRE       the payoff: two bisectors cross at the one point that is
//                      equally far from all three, which is the centre.
//
// Every circle, crossing point and bisector below was computed rather than
// eyeballed; the comment above each block records the numbers it was built from
// so a later edit can move a point without guessing where the arcs now meet.

const INK = '#2b2b2b'
const KEY = '#c25e12' // the book's key-word orange
const GRID = '#dbe3e8'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'
const PENCIL = '#8a94a0'
const BLUE_T = '#e9f1fa'
const GREEN_T = '#eef6e6'
const ORANGE_T = '#fdf1e3'
const PURPLE_T = '#f2ecf7'
const RED_T = '#fdeef0'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

/** White paper plate + a hairline frame. Every diagram starts with this. */
const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

// No arrowheads anywhere in this file, deliberately. Nothing here is a vector
// or a direction — a compass arc has no arrow on it — and 1.2's markers cost
// two separate traps (they scale with stroke-width unless markerUnits is
// overridden, and marker-start points forward). Leader lines end in a plain dot.

export const DIAGRAMS = {
  // ───────────────────────────────────────────────────────────────────────────
  // ONE POINT, TWO POINTS, THREE POINTS.
  // Every caption sits BELOW its panel rather than inside it. The first draft
  // put them inside and the circles ran straight through the words — the panels
  // hold artwork only, and nothing is allowed into the 84..292 band but shapes.
  // Panel 1: four circles through P(140, 214), centres at P + r(cosθ, sinθ) for
  // (r, θ) = (44, 205°), (64, 272°), (36, 330°), (68, 302°) — placing the centre
  // that way is what guarantees each circle actually passes through P.
  // Panel 2: A(365, 214) and B(465, 190). Every centre sits on their
  // perpendicular bisector, at M(415, 202) + t(0.2334, 0.9724) for t = −46, 0,
  // 30, with r = sqrt(51.42² + t²).
  // Panel 3: one circle, centre (700, 188), r = 84, with the three points read
  // off it at 200°, 320° and 80°.
  // ───────────────────────────────────────────────────────────────────────────
  HOW_MANY_CIRCLES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 400" class="w-full h-full">
    ${plate(840, 400)}

    <text x="420" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">How many circles fit? Count them as the dots go in</text>

    <rect x="16" y="54" width="248" height="246" rx="12" fill="${BLUE_T}" stroke="${GRID}" stroke-width="2"/>
    <circle cx="100.1" cy="195.4" r="44" fill="none" stroke="${BLUE}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="142.2" cy="150.1" r="64" fill="none" stroke="${BLUE}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="171.2" cy="196" r="36" fill="none" stroke="${BLUE}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="176" cy="156.3" r="68" fill="none" stroke="${BLUE}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="140" cy="214" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="140" y="78" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">ONE POINT</text>
    <text x="140" y="326" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">endless circles</text>
    <text x="140" y="348" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">any size, anywhere</text>

    <rect x="296" y="54" width="248" height="246" rx="12" fill="${GREEN_T}" stroke="${GRID}" stroke-width="2"/>
    <circle cx="404.3" cy="157.3" r="69" fill="none" stroke="${GREEN}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="415" cy="202" r="51.4" fill="none" stroke="${GREEN}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="422" cy="231.2" r="59.5" fill="none" stroke="${GREEN}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="365" cy="214" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="465" cy="190" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="420" y="78" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">TWO POINTS</text>
    <text x="420" y="326" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">still endless</text>
    <text x="420" y="348" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">fatter or thinner, both fit</text>

    <rect x="576" y="54" width="248" height="246" rx="12" fill="${ORANGE_T}" stroke="${GRID}" stroke-width="2"/>
    <circle cx="700" cy="188" r="84" fill="none" stroke="${KEY}" stroke-width="4"/>
    <circle cx="621.1" cy="159.3" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="764.3" cy="134" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="714.6" cy="270.7" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="700" y="78" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">THREE POINTS</text>
    <text x="700" y="326" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="middle">exactly one</text>
    <text x="700" y="348" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">no choice left at all</text>

    <text x="420" y="384" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="middle">the third dot is the one that pins it down</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE EXCEPTION, PROVED. A straight line meets a circle at most twice.
  // Left: circle centre (196, 172) r = 78. The line y = 148 cuts it at
  // x = 196 ± sqrt(78² − 24²) = 196 ± 74.2, and y = 206 at 196 ± 70.2.
  // Right: three dots on one line at x = 470, 578, 686, and an arc of radius 210
  // through the outer two — sagitta 210 − sqrt(210² − 108²) = 29.8, so it clears
  // the middle dot by 29.8 and can never come down to meet it.
  // Captions live below the panels; inside, the circle ran through the words.
  // ───────────────────────────────────────────────────────────────────────────
  LINE_MEETS_CIRCLE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 352" class="w-full h-full">
    ${plate(780, 352)}

    <text x="390" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">A straight line can cross a circle twice. Never three times.</text>

    <rect x="16" y="46" width="360" height="218" rx="12" fill="${BLUE_T}" stroke="${GRID}" stroke-width="2"/>
    <circle cx="196" cy="172" r="78" fill="#ffffff" stroke="${INK}" stroke-width="3.5"/>
    <line x1="56" y1="148" x2="336" y2="148" stroke="${BLUE}" stroke-width="3.5"/>
    <line x1="56" y1="206" x2="336" y2="206" stroke="${BLUE}" stroke-width="3.5" stroke-dasharray="8 6"/>
    <circle cx="121.8" cy="148" r="7.5" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="270.2" cy="148" r="7.5" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="125.8" cy="206" r="7.5" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="266.2" cy="206" r="7.5" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <text x="196" y="70" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="middle">move the line where you like</text>
    <text x="196" y="292" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">two crossings, every time</text>

    <rect x="392" y="46" width="372" height="218" rx="12" fill="${RED_T}" stroke="${GRID}" stroke-width="2"/>
    <line x1="424" y1="196" x2="732" y2="196" stroke="${INK}" stroke-width="3.5"/>
    <path d="M 470 196 A 210 210 0 0 1 686 196" fill="none" stroke="${RED}" stroke-width="3" stroke-dasharray="8 6"/>
    <circle cx="470" cy="196" r="8.5" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="578" cy="196" r="8.5" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="686" cy="196" r="8.5" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <line x1="578" y1="170" x2="578" y2="188" stroke="${RED}" stroke-width="2.5"/>
    <text x="578" y="70" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">any circle through the outer two</text>
    <text x="578" y="138" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">sails over the middle one</text>
    <text x="578" y="292" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">three in a row: no circle exists</text>

    <text x="390" y="332" font-family="${FONT}" font-size="17" font-weight="900" fill="${INK}" text-anchor="middle">collinear points are the one case that fails</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // WHAT A CIRCLE IS. Centre O(300, 224), r = 128, with five radii drawn to the
  // circle at 18°, 96°, 158°, 226° and 302°, each ticked so the equality is
  // visible rather than claimed.
  // ───────────────────────────────────────────────────────────────────────────
  CIRCLE_DEF: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 430" class="w-full h-full">
    ${plate(620, 430)}

    <text x="310" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Every point on it is the same distance from the centre</text>

    <circle cx="300" cy="224" r="128" fill="${ORANGE_T}" stroke="${INK}" stroke-width="4"/>
    <line x1="300" y1="224" x2="421.7" y2="184.4" stroke="${KEY}" stroke-width="3"/>
    <line x1="300" y1="224" x2="313.4" y2="96.7" stroke="${KEY}" stroke-width="3"/>
    <line x1="300" y1="224" x2="181.3" y2="176.1" stroke="${KEY}" stroke-width="3"/>
    <line x1="300" y1="224" x2="211.1" y2="316.1" stroke="${KEY}" stroke-width="3"/>
    <line x1="300" y1="224" x2="367.8" y2="332.5" stroke="${KEY}" stroke-width="3"/>
    <line x1="356.2" y1="197.1" x2="365.5" y2="211.3" stroke="${KEY}" stroke-width="3"/>
    <line x1="299.4" y1="164.9" x2="313.3" y2="155.8" stroke="${KEY}" stroke-width="3"/>
    <line x1="248.4" y1="192.9" x2="234.9" y2="207.2" stroke="${KEY}" stroke-width="3"/>
    <line x1="248.1" y1="277.2" x2="263.0" y2="263.0" stroke="${KEY}" stroke-width="3"/>
    <line x1="341.4" y1="269.8" x2="326.4" y2="286.7" stroke="${KEY}" stroke-width="3"/>
    <circle cx="300" cy="224" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="421.7" cy="184.4" r="7" fill="${INK}"/>
    <circle cx="313.4" cy="96.7" r="7" fill="${INK}"/>
    <circle cx="181.3" cy="176.1" r="7" fill="${INK}"/>
    <circle cx="211.1" cy="316.1" r="7" fill="${INK}"/>
    <circle cx="367.8" cy="332.5" r="7" fill="${INK}"/>

    <line x1="300" y1="233" x2="300" y2="380" stroke="${KEY}" stroke-width="1.5"/>
    <circle cx="300" cy="380" r="3" fill="${KEY}"/>
    <text x="300" y="400" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">centre</text>

    <line x1="440" y1="180" x2="512" y2="150" stroke="${KEY}" stroke-width="1.5"/>
    <circle cx="512" cy="150" r="3" fill="${KEY}"/>
    <text x="524" y="146" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="start">radius</text>

    <text x="310" y="422" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">the tick marks say the five radii are the same length</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE COMPASS. Circle centre O(288, 236), r = 120, pencil sitting on it at
  // −35° → P(386.3, 167.2). The hinge is placed on the perpendicular bisector of
  // OP so both legs come out the same length (152.3): mid(337.15, 201.6) plus
  // 140 × (−0.5736, −0.8192) = H(256.9, 86.9).
  // The circle was 128 in the first draft and its foot ran under the summary
  // box; 120 with the centre lifted 14px clears it with room to spare.
  // ───────────────────────────────────────────────────────────────────────────
  COMPASS_ANATOMY: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 440" class="w-full h-full">
    ${plate(660, 440)}

    <text x="330" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The hinge is locked, so the pencil has no choice</text>

    <circle cx="288" cy="236" r="120" fill="none" stroke="${PENCIL}" stroke-width="3.5" stroke-dasharray="9 7"/>
    <path d="M 386.3 167.2 A 120 120 0 0 1 329 348.8" fill="none" stroke="${INK}" stroke-width="4.5"/>

    <line x1="256.9" y1="86.9" x2="288" y2="236" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>
    <line x1="256.9" y1="86.9" x2="386.3" y2="167.2" stroke="${INK}" stroke-width="9" stroke-linecap="round"/>
    <circle cx="256.9" cy="86.9" r="15" fill="#ffffff" stroke="${INK}" stroke-width="5"/>
    <rect x="248.9" y="48.9" width="16" height="30" rx="5" fill="${INK}"/>
    <path d="M 281 210 L 295 210 L 288 234 Z" fill="${RED}"/>
    <path d="M 363.4 162.4 L 371.8 148.8 L 386.3 167.2 Z" fill="${KEY}"/>

    <circle cx="288" cy="236" r="7" fill="${RED}" stroke="#ffffff" stroke-width="2"/>
    <circle cx="386.3" cy="167.2" r="7" fill="${KEY}" stroke="#ffffff" stroke-width="2"/>

    <line x1="278" y1="244" x2="150" y2="300" stroke="${RED}" stroke-width="1.5"/>
    <circle cx="150" cy="300" r="3" fill="${RED}"/>
    <text x="142" y="296" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="end">needle</text>
    <text x="142" y="318" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="end">it never moves</text>
    <text x="142" y="336" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="end">this is the centre</text>

    <line x1="396" y1="163" x2="478" y2="132" stroke="${KEY}" stroke-width="1.5"/>
    <circle cx="478" cy="132" r="3" fill="${KEY}"/>
    <text x="488" y="128" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="start">pencil</text>
    <text x="488" y="150" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="start">stuck at one distance</text>
    <text x="488" y="168" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="start">this is the radius</text>

    <line x1="272" y1="84" x2="184" y2="68" stroke="${INK}" stroke-width="1.5"/>
    <circle cx="184" cy="68" r="3" fill="${INK}"/>
    <text x="176" y="64" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">locked hinge</text>

    <rect x="76" y="372" width="508" height="48" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="330" y="392" font-family="${FONT}" font-size="14" font-weight="900" fill="${KEY}" text-anchor="middle">the gap between the legs cannot change while you turn it</text>
    <text x="330" y="412" font-family="${FONT}" font-size="14" font-weight="900" fill="${INK}" text-anchor="middle">so the pencil traces a circle — the definition, in metal</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE PERPENDICULAR BISECTOR CONSTRUCTION.
  // A(200, 276) and B(480, 276), so AB = 280 and half of it is 140. The compass
  // is opened to 175, comfortably more than 140, and both arcs are drawn at that
  // one setting. They cross at (340, 276 ± sqrt(175² − 140²)) = (340, 171) and
  // (340, 381). Each arc runs from −55° to +55° about its own centre.
  // ───────────────────────────────────────────────────────────────────────────
  PERP_BISECTOR: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 490" class="w-full h-full">
    ${plate(700, 490)}

    <text x="350" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">One compass setting. Two arcs. Two crossings. Join them.</text>

    <line x1="130" y1="276" x2="550" y2="276" stroke="${INK}" stroke-width="4"/>
    <path d="M 300.4 132.6 A 175 175 0 0 1 300.4 419.4" fill="none" stroke="${BLUE}" stroke-width="3" stroke-dasharray="9 6"/>
    <path d="M 379.6 419.4 A 175 175 0 0 1 379.6 132.6" fill="none" stroke="${GREEN}" stroke-width="3" stroke-dasharray="9 6"/>
    <line x1="340" y1="128" x2="340" y2="424" stroke="${RED}" stroke-width="4.5"/>

    <circle cx="200" cy="276" r="9" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="480" cy="276" r="9" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="340" cy="171" r="8" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="340" cy="381" r="8" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="340" cy="276" r="7" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <path d="M 320 276 L 320 256 L 340 256" fill="none" stroke="${INK}" stroke-width="2.5"/>

    <line x1="266" y1="268" x2="266" y2="284" stroke="${INK}" stroke-width="3"/>
    <line x1="414" y1="268" x2="414" y2="284" stroke="${INK}" stroke-width="3"/>

    <text x="196" y="306" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="end">A</text>
    <text x="492" y="306" font-family="${FONT}" font-size="18" font-weight="900" fill="${GREEN}" text-anchor="start">B</text>
    <text x="356" y="164" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="start">P</text>
    <text x="356" y="398" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="start">Q</text>
    <text x="334" y="302" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="end">M</text>

    <line x1="288" y1="140" x2="196" y2="106" stroke="${BLUE}" stroke-width="1.5"/>
    <circle cx="196" cy="106" r="3" fill="${BLUE}"/>
    <text x="188" y="102" font-family="${FONT}" font-size="14" font-weight="900" fill="${BLUE}" text-anchor="end">arc from A</text>

    <line x1="392" y1="140" x2="502" y2="106" stroke="${GREEN}" stroke-width="1.5"/>
    <circle cx="502" cy="106" r="3" fill="${GREEN}"/>
    <text x="512" y="102" font-family="${FONT}" font-size="14" font-weight="900" fill="${GREEN}" text-anchor="start">arc from B</text>

    <line x1="346" y1="330" x2="470" y2="356" stroke="${RED}" stroke-width="1.5"/>
    <circle cx="470" cy="356" r="3" fill="${RED}"/>
    <text x="480" y="352" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="start">the perpendicular</text>
    <text x="480" y="372" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="start">bisector of AB</text>

    <rect x="60" y="436" width="580" height="42" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="350" y="463" font-family="${FONT}" font-size="15" font-weight="900" fill="${PURPLE}" text-anchor="middle">open the compass wider than half of AB, then do not touch it</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // WHY THE CONSTRUCTION WORKS. A(160, 292) and B(440, 292), bisector x = 300.
  // P(300, 118): PA = PB = sqrt(140² + 174²) = 223.4.
  // R(300, 362): RA = RB = sqrt(140² + 70²) = 156.5.
  // The point of the diagram is that both distances at each height are equal
  // BECAUSE both arcs were drawn at one compass setting.
  // ───────────────────────────────────────────────────────────────────────────
  EQUIDISTANT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 430" class="w-full h-full">
    ${plate(640, 430)}

    <text x="320" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Anywhere on the red line, A and B are equally far away</text>

    <line x1="300" y1="72" x2="300" y2="390" stroke="${RED}" stroke-width="4.5"/>
    <line x1="120" y1="292" x2="480" y2="292" stroke="${INK}" stroke-width="3.5"/>

    <line x1="300" y1="118" x2="160" y2="292" stroke="${BLUE}" stroke-width="3"/>
    <line x1="300" y1="118" x2="440" y2="292" stroke="${GREEN}" stroke-width="3"/>
    <line x1="300" y1="362" x2="160" y2="292" stroke="${BLUE}" stroke-width="3" stroke-dasharray="8 5"/>
    <line x1="300" y1="362" x2="440" y2="292" stroke="${GREEN}" stroke-width="3" stroke-dasharray="8 5"/>

    <line x1="222" y1="195" x2="238" y2="205" stroke="${INK}" stroke-width="3"/>
    <line x1="362" y1="205" x2="378" y2="195" stroke="${INK}" stroke-width="3"/>
    <line x1="222" y1="335" x2="238" y2="325" stroke="${INK}" stroke-width="3"/>
    <line x1="362" y1="325" x2="378" y2="335" stroke="${INK}" stroke-width="3"/>

    <path d="M 300 272 L 320 272 L 320 292" fill="none" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="160" cy="292" r="9" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="440" cy="292" r="9" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="300" cy="118" r="8" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="300" cy="362" r="8" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="300" cy="292" r="6.5" fill="${INK}" stroke="#ffffff" stroke-width="2"/>

    <text x="152" y="322" font-family="${FONT}" font-size="18" font-weight="900" fill="${BLUE}" text-anchor="end">A</text>
    <text x="452" y="322" font-family="${FONT}" font-size="18" font-weight="900" fill="${GREEN}" text-anchor="start">B</text>
    <text x="314" y="112" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="start">P</text>
    <text x="314" y="378" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="start">R</text>

    <text x="126" y="196" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">PA</text>
    <text x="464" y="196" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="end">PB</text>

    <rect x="72" y="396" width="496" height="26" rx="8" fill="${RED_T}" stroke="${RED}" stroke-width="2"/>
    <text x="320" y="414" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">PA = PB, and RA = RB — true all the way up and down</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE PAYOFF. Circle centre O(360, 244), r = 168, with the three points read
  // off it at 200°, 315° and 75°:
  //   A(202.1, 186.5)   B(478.8, 125.2)   C(403.5, 406.3)
  // The two perpendicular bisectors are drawn as the segments joining each
  // chord's midpoint to O and a little way past it, which is exactly what a
  // student's page looks like after the construction.
  // ───────────────────────────────────────────────────────────────────────────
  CIRCUMCENTRE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480" class="w-full h-full">
    ${plate(720, 480)}

    <text x="360" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Where the two bisectors cross is the centre you were looking for</text>

    <circle cx="360" cy="244" r="168" fill="none" stroke="${KEY}" stroke-width="4"/>

    <line x1="202.1" y1="186.5" x2="478.8" y2="125.2" stroke="#b8c4cd" stroke-width="2.5"/>
    <line x1="478.8" y1="125.2" x2="403.5" y2="406.3" stroke="#b8c4cd" stroke-width="2.5"/>

    <line x1="333.1" y1="126.2" x2="378.2" y2="330.5" stroke="${BLUE}" stroke-width="3.5" stroke-dasharray="10 6"/>
    <line x1="499.6" y1="279.2" x2="301.7" y2="226.2" stroke="${GREEN}" stroke-width="3.5" stroke-dasharray="10 6"/>

    <line x1="360" y1="244" x2="202.1" y2="186.5" stroke="${PURPLE}" stroke-width="3"/>
    <line x1="360" y1="244" x2="478.8" y2="125.2" stroke="${PURPLE}" stroke-width="3"/>
    <line x1="360" y1="244" x2="403.5" y2="406.3" stroke="${PURPLE}" stroke-width="3"/>
    <line x1="273.1" y1="207.2" x2="281.1" y2="223.3" stroke="${PURPLE}" stroke-width="3"/>
    <line x1="411.6" y1="177.3" x2="427.2" y2="192" stroke="${PURPLE}" stroke-width="3"/>
    <line x1="373.1" y1="330.4" x2="390.4" y2="325.9" stroke="${PURPLE}" stroke-width="3"/>

    <circle cx="340.5" cy="155.9" r="6" fill="${BLUE}"/>
    <circle cx="441.2" cy="265.8" r="6" fill="${GREEN}"/>
    <circle cx="202.1" cy="186.5" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="478.8" cy="125.2" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="403.5" cy="406.3" r="9" fill="${INK}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="360" cy="244" r="9" fill="${RED}" stroke="#ffffff" stroke-width="3"/>

    <text x="190" y="178" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <text x="492" y="118" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="start">B</text>
    <text x="416" y="418" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="start">C</text>
    <text x="342" y="226" font-family="${FONT}" font-size="18" font-weight="900" fill="${RED}" text-anchor="end">O</text>

    <line x1="336" y1="122" x2="286" y2="82" stroke="${BLUE}" stroke-width="1.5"/>
    <circle cx="286" cy="82" r="3" fill="${BLUE}"/>
    <text x="278" y="78" font-family="${FONT}" font-size="14" font-weight="900" fill="${BLUE}" text-anchor="end">bisector of AB</text>

    <line x1="502" y1="282" x2="566" y2="316" stroke="${GREEN}" stroke-width="1.5"/>
    <circle cx="566" cy="316" r="3" fill="${GREEN}"/>
    <text x="576" y="312" font-family="${FONT}" font-size="14" font-weight="900" fill="${GREEN}" text-anchor="start">bisector of BC</text>

    <line x1="370" y1="250" x2="596" y2="196" stroke="${RED}" stroke-width="1.5"/>
    <circle cx="596" cy="196" r="3" fill="${RED}"/>
    <text x="606" y="192" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="start">the centre</text>
    <text x="606" y="212" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="start">same distance</text>
    <text x="606" y="230" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="start">from all three</text>

    <rect x="112" y="432" width="496" height="34" rx="9" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="360" y="455" font-family="${FONT}" font-size="15" font-weight="900" fill="${PURPLE}" text-anchor="middle">OA = OB = OC, so one compass sweep catches all three</text>
  </svg>`,
}
