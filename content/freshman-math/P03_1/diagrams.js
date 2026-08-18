// content/freshman-math/P03_1/diagrams.js
// Teaching diagrams for Algebra Track · Project 3 — Somebody Is 2.7 km Away.
//
// House rules (docs/LESSON-PLAYBOOK.md §5): white plate first, dark ink outlines
// on pale flat fills, labels in the book's orange out in the margins, and every
// <text> written out LITERALLY, because `npm run audit:svg` cannot see text that
// comes out of a `${helper(...)}` call and will happily report zero overflows
// while measuring nothing.
//
// THE FIRST THREE DIAGRAMS ARE ONE PICTURE, BUILT UP.
// ONE_READING, TWO_READINGS and THREE_READINGS share a canvas and share circles
// A and B, so as the class moves through the slides the picture does not jump —
// the third circle simply arrives and kills one of the two candidates. The
// geometry is exact, not sketched:
//
//   A  centre (230, 270)  r = 150
//   B  centre (450, 180)  r = 125      |AB| = 237.7, so they really do cross
//   crossings  X1 (327.4, 155.8)  and  X2 (379.4, 283.2)
//   C  centre (480, 360)  r = 126.6    passes through X2, misses X1 by 128
//
// Check any of them: X1 to A is sqrt(97.4^2 + 114.2^2) = 150.0, X1 to B is
// sqrt(122.6^2 + 24.2^2) = 125.0. If a point ever needs moving, re-solve the
// pair rather than nudging by eye, or the two crossings stop being crossings.
//
// BAND_PRECISION is deliberately drawn straight, not curved. Over the 130 m the
// region actually spans, arcs of radius 1.5-2.7 km are straight to well under a
// pencil width, and drawing them curved would suggest a precision the picture
// does not have.
//
// No arrowheads anywhere except the two angle rays in TRILAT_VS_TRIANG, which
// genuinely are directions. markerUnits="userSpaceOnUse" is set there, because
// the default scales a marker by the line's stroke-width and 1.2 learned that
// the hard way with 35 px arrowheads eating the labels beside them.
//
// The course is bilingual:false; nothing here has a Vietnamese twin.

const INK = '#2b2b2b'
const KEY = '#c25e12' // the book's key-word orange
const GRID = '#dbe3e8'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'
const GREY = '#94a3b8'
const BLUE_T = '#e9f1fa'
const GREEN_T = '#eef6e6'
const ORANGE_T = '#fdf1e3'
const PURPLE_T = '#f2ecf7'
const RED_T = '#fdeef0'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

/** White paper plate + a hairline frame. Every diagram starts with this. */
const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const ARROW = `<defs>
    <marker id="p3-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${PURPLE}"/></marker>
  </defs>`

export const DIAGRAMS = {
  // ───────────────────────────────────────────────────────────────────────────
  // ONE READING. The circle is the answer, and that is the surprise: a distance
  // does not give a place. The five dots are all equally consistent with the
  // reading, which is the same "every point the same distance from the centre"
  // the class copied down in 1.3 — now doing real work.
  // ───────────────────────────────────────────────────────────────────────────
  ONE_READING: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 520" class="w-full h-full">
    ${plate(700, 520)}

    <text x="350" y="34" font-family="${FONT}" font-size="20" font-weight="bold" fill="${KEY}" text-anchor="middle">One reading tells you a circle, not a place</text>

    <circle cx="230" cy="270" r="150" fill="${RED_T}" stroke="${RED}" stroke-width="4"/>
    <line x1="230" y1="270" x2="380" y2="270" stroke="${RED}" stroke-width="3"/>
    <circle cx="230" cy="270" r="10" fill="${INK}" stroke="#ffffff" stroke-width="3"/>

    <circle cx="380" cy="270" r="9" fill="${PURPLE}"/>
    <circle cx="276.3" cy="127.3" r="9" fill="${PURPLE}"/>
    <circle cx="123.5" cy="181.8" r="9" fill="${PURPLE}"/>
    <circle cx="128.6" cy="352.6" r="9" fill="${PURPLE}"/>
    <circle cx="308.7" cy="398.1" r="9" fill="${PURPLE}"/>

    <text x="216" y="262" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <line x1="222" y1="286" x2="120" y2="424" stroke="${INK}" stroke-width="1.5"/>
    <circle cx="120" cy="424" r="3" fill="${INK}"/>
    <text x="112" y="430" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="end">Japanese</text>
    <text x="112" y="450" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="end">Bridge</text>

    <text x="305" y="258" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">2.7 km</text>

    <line x1="390" y1="264" x2="470" y2="200" stroke="${PURPLE}" stroke-width="1.5"/>
    <circle cx="470" cy="200" r="3" fill="${PURPLE}"/>
    <text x="482" y="196" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="start">he could be</text>
    <text x="482" y="218" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="start">at any of these</text>

    <rect x="106" y="472" width="488" height="34" rx="9" fill="${RED_T}" stroke="${RED}" stroke-width="2"/>
    <text x="350" y="495" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">one distance, and the whole ring is still in play</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // TWO READINGS. The load-bearing diagram of the whole project: two circles cut
  // each other TWICE, and the two answers are nowhere near each other. This is
  // the fact the Early Years treasure task makes physical, because two tape
  // measures leave exactly this ambiguity.
  // ───────────────────────────────────────────────────────────────────────────
  TWO_READINGS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 520" class="w-full h-full">
    ${plate(700, 520)}

    <text x="350" y="34" font-family="${FONT}" font-size="20" font-weight="bold" fill="${KEY}" text-anchor="middle">Two readings cut it down to two places. Only two.</text>

    <circle cx="230" cy="270" r="150" fill="none" stroke="${RED}" stroke-width="4"/>
    <circle cx="450" cy="180" r="125" fill="none" stroke="${BLUE}" stroke-width="4"/>
    <line x1="230" y1="270" x2="380" y2="270" stroke="${RED}" stroke-width="2.5" stroke-dasharray="7 5"/>
    <line x1="450" y1="180" x2="575" y2="180" stroke="${BLUE}" stroke-width="2.5" stroke-dasharray="7 5"/>

    <circle cx="230" cy="270" r="10" fill="${INK}" stroke="#ffffff" stroke-width="3"/>
    <circle cx="450" cy="180" r="10" fill="${INK}" stroke="#ffffff" stroke-width="3"/>
    <circle cx="327.4" cy="155.8" r="12" fill="${PURPLE}" stroke="#ffffff" stroke-width="3.5"/>
    <circle cx="379.4" cy="283.2" r="12" fill="${PURPLE}" stroke="#ffffff" stroke-width="3.5"/>

    <text x="218" y="300" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <text x="462" y="172" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="start">B</text>
    <text x="305" y="258" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">2.7 km</text>
    <text x="512" y="170" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">1.5 km</text>

    <line x1="322" y1="142" x2="250" y2="86" stroke="${PURPLE}" stroke-width="1.5"/>
    <circle cx="250" cy="86" r="3" fill="${PURPLE}"/>
    <text x="242" y="82" font-family="${FONT}" font-size="18" font-weight="900" fill="${PURPLE}" text-anchor="end">here</text>

    <line x1="392" y1="290" x2="500" y2="352" stroke="${PURPLE}" stroke-width="1.5"/>
    <circle cx="500" cy="352" r="3" fill="${PURPLE}"/>
    <text x="512" y="358" font-family="${FONT}" font-size="18" font-weight="900" fill="${PURPLE}" text-anchor="start">or here</text>

    <rect x="60" y="452" width="580" height="54" rx="9" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="350" y="474" font-family="${FONT}" font-size="16" font-weight="900" fill="${PURPLE}" text-anchor="middle">two circles cross twice, and the two answers are far apart</text>
    <text x="350" y="496" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">so two readings are not enough to name a place</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THREE READINGS. Same A and B, with C arriving to kill one candidate. The
  // dead one keeps its dot and gains a cross, because "the third reading picks
  // one" is much clearer when you can still see what it rejected.
  // ───────────────────────────────────────────────────────────────────────────
  THREE_READINGS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 520" class="w-full h-full">
    ${plate(700, 520)}

    <text x="350" y="34" font-family="${FONT}" font-size="20" font-weight="bold" fill="${KEY}" text-anchor="middle">The third reading throws one of them away</text>

    <circle cx="230" cy="270" r="150" fill="none" stroke="${RED}" stroke-width="3.5" opacity="0.75"/>
    <circle cx="450" cy="180" r="125" fill="none" stroke="${BLUE}" stroke-width="3.5" opacity="0.75"/>
    <circle cx="480" cy="360" r="126.6" fill="none" stroke="${GREEN}" stroke-width="4.5"/>

    <circle cx="230" cy="270" r="10" fill="${INK}" stroke="#ffffff" stroke-width="3"/>
    <circle cx="450" cy="180" r="10" fill="${INK}" stroke="#ffffff" stroke-width="3"/>
    <circle cx="480" cy="360" r="10" fill="${INK}" stroke="#ffffff" stroke-width="3"/>

    <circle cx="327.4" cy="155.8" r="12" fill="${GREY}" stroke="#ffffff" stroke-width="3.5"/>
    <line x1="313" y1="141" x2="342" y2="170" stroke="${RED}" stroke-width="5"/>
    <line x1="313" y1="170" x2="342" y2="141" stroke="${RED}" stroke-width="5"/>

    <circle cx="379.4" cy="283.2" r="15" fill="${KEY}" stroke="#ffffff" stroke-width="4"/>

    <text x="218" y="300" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="end">A</text>
    <text x="462" y="172" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="start">B</text>
    <text x="492" y="384" font-family="${FONT}" font-size="18" font-weight="900" fill="${INK}" text-anchor="start">C</text>

    <line x1="310" y1="140" x2="212" y2="82" stroke="${RED}" stroke-width="1.5"/>
    <circle cx="212" cy="82" r="3" fill="${RED}"/>
    <text x="204" y="78" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="end">C says no</text>

    <line x1="392" y1="272" x2="560" y2="220" stroke="${KEY}" stroke-width="1.5"/>
    <circle cx="560" cy="220" r="3" fill="${KEY}"/>
    <text x="572" y="216" font-family="${FONT}" font-size="18" font-weight="900" fill="${KEY}" text-anchor="start">he is here</text>

    <rect x="86" y="452" width="528" height="54" rx="9" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="350" y="474" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">three distances from three places name ONE place</text>
    <text x="350" y="496" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">and nobody ever said where they were</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // WHY THE ANSWER IS A PATCH, NOT A POINT. Each reading is rounded to the
  // nearest 0.1 km, so each one is a 100 m BAND rather than a line, and three
  // bands overlap in a region. Drawn straight on purpose: across 130 m an arc of
  // radius 2 km is straight to far less than a pencil width, and drawing it
  // curved would claim a precision this picture does not have.
  // ───────────────────────────────────────────────────────────────────────────
  BAND_PRECISION: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" class="w-full h-full">
    ${plate(700, 430)}

    <text x="350" y="34" font-family="${FONT}" font-size="20" font-weight="bold" fill="${KEY}" text-anchor="middle">"2.7 km" means anywhere from 2.65 to 2.75</text>

    <g opacity="0.92">
      <path d="M 109.8 180.0 L 582.6 263.4 L 590.2 220.0 L 117.4 136.6 Z" fill="${RED_T}"/>
      <line x1="109.8" y1="180.0" x2="582.6" y2="263.4" stroke="${RED}" stroke-width="2.5"/>
      <line x1="117.4" y1="136.6" x2="590.2" y2="220.0" stroke="${RED}" stroke-width="2.5"/>

      <path d="M 278.0 66.5 L 387.4 367.2 L 428.8 352.2 L 319.4 51.5 Z" fill="${BLUE_T}"/>
      <line x1="278.0" y1="66.5" x2="387.4" y2="367.2" stroke="${BLUE}" stroke-width="2.5"/>
      <line x1="319.4" y1="51.5" x2="428.8" y2="352.2" stroke="${BLUE}" stroke-width="2.5"/>

      <path d="M 448.8 48.0 L 201.3 342.9 L 235.1 371.1 L 482.6 76.2 Z" fill="${GREEN_T}"/>
      <line x1="448.8" y1="48.0" x2="201.3" y2="342.9" stroke="${GREEN}" stroke-width="2.5"/>
      <line x1="482.6" y1="76.2" x2="235.1" y2="371.1" stroke="${GREEN}" stroke-width="2.5"/>
    </g>

    <path d="M 375.0 204.4 L 358.7 223.9 L 333.7 219.5 L 325.0 195.6 L 341.3 176.1 L 366.3 180.5 Z" fill="${KEY}" stroke="${INK}" stroke-width="2.5"/>

    <line x1="376" y1="206" x2="520" y2="300" stroke="${KEY}" stroke-width="1.5"/>
    <circle cx="520" cy="300" r="3" fill="${KEY}"/>
    <text x="532" y="298" font-family="${FONT}" font-size="17" font-weight="900" fill="${KEY}" text-anchor="start">he is in here</text>
    <text x="532" y="320" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="start">about 130 m across</text>

    <text x="104" y="128" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="end">band A</text>
    <text x="440" y="374" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">band B</text>
    <text x="196" y="352" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="end">band C</text>

    <rect x="76" y="386" width="548" height="32" rx="9" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="350" y="408" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="middle">a rounded reading is a band, so the answer is a patch</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE TWO WORDS. Distances give circles (trilateration, what the app and the
  // phone actually do); angles give rays (triangulation, what a surveyor with a
  // theodolite does). Everyone says the second word for both, and it is worth
  // thirty seconds to say which is which rather than letting it slide.
  // ───────────────────────────────────────────────────────────────────────────
  TRILAT_VS_TRIANG: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 430" class="w-full h-full">
    ${plate(840, 430)}${ARROW}

    <rect x="16" y="46" width="392" height="298" rx="12" fill="${ORANGE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="212" y="76" font-family="${FONT}" font-size="17" font-weight="900" fill="${KEY}" text-anchor="middle">TRILATERATION</text>
    <text x="212" y="98" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">measures DISTANCES</text>
    <circle cx="150" cy="213" r="63.2" fill="none" stroke="${RED}" stroke-width="3"/>
    <circle cx="272" cy="195" r="67.1" fill="none" stroke="${BLUE}" stroke-width="3"/>
    <circle cx="238" cy="275" r="56.4" fill="none" stroke="${GREEN}" stroke-width="3"/>
    <circle cx="150" cy="213" r="7" fill="${INK}"/>
    <circle cx="272" cy="195" r="7" fill="${INK}"/>
    <circle cx="238" cy="275" r="7" fill="${INK}"/>
    <circle cx="212" cy="225" r="10" fill="${KEY}" stroke="#ffffff" stroke-width="3"/>

    <rect x="432" y="46" width="392" height="298" rx="12" fill="${BLUE_T}" stroke="${GRID}" stroke-width="2"/>
    <text x="628" y="76" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">TRIANGULATION</text>
    <text x="628" y="98" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">measures ANGLES</text>
    <line x1="500" y1="300" x2="756" y2="300" stroke="${INK}" stroke-width="4"/>
    <line x1="500" y1="300" x2="628" y2="176" stroke="${PURPLE}" stroke-width="3" marker-end="url(#p3-arrow)"/>
    <line x1="756" y1="300" x2="628" y2="176" stroke="${PURPLE}" stroke-width="3" marker-end="url(#p3-arrow)"/>
    <path d="M 536 300 A 36 36 0 0 0 525.9 274.9" fill="none" stroke="${PURPLE}" stroke-width="2.5"/>
    <path d="M 720 300 A 36 36 0 0 1 730.2 274.9" fill="none" stroke="${PURPLE}" stroke-width="2.5"/>
    <circle cx="500" cy="300" r="7" fill="${INK}"/>
    <circle cx="756" cy="300" r="7" fill="${INK}"/>
    <circle cx="628" cy="176" r="10" fill="${KEY}" stroke="#ffffff" stroke-width="3"/>
    <text x="628" y="326" font-family="${FONT}" font-size="14" font-weight="900" fill="${INK}" text-anchor="middle">one measured base line</text>

    <rect x="96" y="360" width="648" height="60" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="420" y="384" font-family="${FONT}" font-size="16" font-weight="900" fill="${PURPLE}" text-anchor="middle">your phone and the app do the LEFT one</text>
    <text x="420" y="408" font-family="${FONT}" font-size="16" font-weight="900" fill="${INK}" text-anchor="middle">almost everybody calls it by the RIGHT one's name</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // WHAT THE PHONE IS ACTUALLY DOING. Same method, one dimension up: each
  // satellite gives a distance, so each one is a SPHERE, and spheres cross in
  // circles rather than points. This is the payoff of 1.1's three-dimensional
  // distance formula, so it is worth naming that out loud.
  // ───────────────────────────────────────────────────────────────────────────
  GPS_FIX: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 430" class="w-full h-full">
    ${plate(700, 430)}

    <text x="350" y="34" font-family="${FONT}" font-size="20" font-weight="bold" fill="${KEY}" text-anchor="middle">Your phone does exactly this, one dimension up</text>

    <path d="M 40 400 A 420 420 0 0 1 660 400" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="3"/>

    <circle cx="150" cy="120" r="14" fill="${INK}"/>
    <rect x="128" y="112" width="44" height="16" rx="4" fill="${GREY}"/>
    <circle cx="350" cy="70" r="14" fill="${INK}"/>
    <rect x="328" y="62" width="44" height="16" rx="4" fill="${GREY}"/>
    <circle cx="560" cy="130" r="14" fill="${INK}"/>
    <rect x="538" y="122" width="44" height="16" rx="4" fill="${GREY}"/>

    <line x1="150" y1="134" x2="352" y2="300" stroke="${RED}" stroke-width="2.5" stroke-dasharray="9 6"/>
    <line x1="350" y1="84" x2="352" y2="300" stroke="${BLUE}" stroke-width="2.5" stroke-dasharray="9 6"/>
    <line x1="560" y1="144" x2="352" y2="300" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="9 6"/>

    <rect x="340" y="286" width="24" height="38" rx="5" fill="${KEY}" stroke="#ffffff" stroke-width="3"/>

    <text x="122" y="104" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">satellite 1</text>
    <text x="322" y="54" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="end">satellite 2</text>
    <text x="592" y="114" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">satellite 3</text>

    <line x1="368" y1="304" x2="500" y2="330" stroke="${KEY}" stroke-width="1.5"/>
    <circle cx="500" cy="330" r="3" fill="${KEY}"/>
    <text x="512" y="336" font-family="${FONT}" font-size="16" font-weight="900" fill="${KEY}" text-anchor="start">your phone</text>

    <rect x="76" y="368" width="548" height="52" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2"/>
    <text x="350" y="390" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="middle">each satellite gives a DISTANCE, so each one is a sphere</text>
    <text x="350" y="412" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">a fourth is needed: the phone's own clock is unknown too</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // THE TREASURE TASK, AND THE RULE THAT MATTERS IN IT. Left: three anchor
  // points spread round the room, and the sticker pinned where the three
  // distances agree. Right: the same three distances taken from points in a
  // LINE, which leaves a long smear instead of a place — the collinear
  // exception from 1.3, arriving as a practical instruction.
  // ───────────────────────────────────────────────────────────────────────────
  TREASURE_ROOM: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 420" class="w-full h-full">
    ${plate(840, 420)}

    <text x="420" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Where you stand to measure from decides whether the clue works</text>

    <rect x="20" y="52" width="390" height="272" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="215" y="80" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">SPREAD OUT — good clue</text>
    <rect x="56" y="98" width="318" height="196" rx="6" fill="#ffffff" stroke="${INK}" stroke-width="2.5"/>
    <line x1="215" y1="196" x2="76" y2="118" stroke="${RED}" stroke-width="2.5"/>
    <line x1="215" y1="196" x2="354" y2="126" stroke="${BLUE}" stroke-width="2.5"/>
    <line x1="215" y1="196" x2="150" y2="274" stroke="${PURPLE}" stroke-width="2.5"/>
    <circle cx="76" cy="118" r="9" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="354" cy="126" r="9" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="150" cy="274" r="9" fill="${PURPLE}" stroke="#ffffff" stroke-width="2.5"/>
    <rect x="205" y="186" width="20" height="20" rx="4" fill="${KEY}" stroke="${INK}" stroke-width="2"/>
    <text x="76" y="146" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">P</text>
    <text x="354" y="154" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="middle">Q</text>
    <text x="150" y="302" font-family="${FONT}" font-size="15" font-weight="900" fill="${PURPLE}" text-anchor="middle">R</text>
    <text x="215" y="348" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">the three distances agree in one place</text>

    <rect x="430" y="52" width="390" height="272" rx="10" fill="${RED_T}" stroke="${RED}" stroke-width="2.5"/>
    <text x="625" y="80" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">ALL IN A LINE — bad clue</text>
    <rect x="466" y="98" width="318" height="196" rx="6" fill="#ffffff" stroke="${INK}" stroke-width="2.5"/>
    <line x1="500" y1="130" x2="750" y2="130" stroke="${GREY}" stroke-width="2.5" stroke-dasharray="7 5"/>
    <circle cx="500" cy="130" r="9" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="625" cy="130" r="9" fill="${BLUE}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="750" cy="130" r="9" fill="${PURPLE}" stroke="#ffffff" stroke-width="2.5"/>
    <ellipse cx="625" cy="228" rx="14" ry="52" fill="${KEY}" fill-opacity="0.3" stroke="${KEY}" stroke-width="2.5" stroke-dasharray="6 5"/>
    <rect x="615" y="218" width="20" height="20" rx="4" fill="${KEY}" stroke="${INK}" stroke-width="2"/>
    <text x="500" y="158" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">P</text>
    <text x="625" y="158" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="middle">Q</text>
    <text x="750" y="158" font-family="${FONT}" font-size="15" font-weight="900" fill="${PURPLE}" text-anchor="middle">R</text>
    <text x="625" y="348" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">they agree along a smear, and above and below it</text>

    <rect x="120" y="372" width="600" height="34" rx="9" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="420" y="395" font-family="${FONT}" font-size="16" font-weight="900" fill="${PURPLE}" text-anchor="middle">same rule as 1.3: three points in a line pin down nothing</text>
  </svg>`,
}
