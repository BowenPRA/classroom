// content/freshman-math/P01_1/diagrams.js
// Diagrams for Algebra Track Project 1 — The Flight of the Fly.
//
// House rules (docs/LESSON-PLAYBOOK.md §5): every diagram opens with a white
// plate so it reads on a light OR dark slide, every <text> is written out
// literally (audit:svg cannot see text emitted from a `${helper(...)}` call),
// and labels sit beside the artwork rather than on top of it.
//
// FLY_ROOM and NOTEBOOK_MODEL moved here from the 1.1 lesson when the fly
// became its own project. ROOM_NET and THREE_UNFOLDINGS are new, and they carry
// the investigation: a fly can fly straight through the air, but a spider has
// to WALK the surfaces — so you flatten the room out and the shortest walk
// becomes a straight line again. It is the same "collapse a dimension" move the
// lesson used for components, applied one level up.
//
// The room is 12 × 9 × 8 ft throughout. The flight chains two Pythagorean
// triples (9-12-15 on the floor, then 15-8-17 up to the corner) so both steps
// land on whole numbers. The WALK deliberately does not: √433 ≈ 20.8 ft is
// honestly irrational, which is the point at which students meet a real answer
// that does not tidy up.

const INK = '#2b2b2b'
const KEY = '#c25e12'
const RULE = '#7c8a95'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'
const BLUE_T = '#e9f1fa'
const GREEN_T = '#eef6e6'
const ORANGE_T = '#fdf1e3'
const PURPLE_T = '#f2ecf7'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const MARKERS = `<defs>
    <marker id="pj-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${INK}"/></marker>
    <marker id="pj-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${RED}"/></marker>
    <marker id="pj-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${BLUE}"/></marker>
    <marker id="pj-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${GREEN}"/></marker>
  </defs>`

// The room box in oblique projection. Shapes only.
//   O(0,0,0) = (230,362)   X = (470,362)   Y = (320,300)   XY = (560,300)
//   Z        = (230,170)   XZ = (470,170)  YZ = (320,108)  XYZ = (560,108)
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
  // STUDENT-FACING. The room and the line, with the three side lengths and
  // nothing else — no floor diagonal, no answer. This is the picture that sits
  // beside the task, so it must not do the task. The answered twin is
  // FLY_ROOM below, which lives in the solutions section.
  // ───────────────────────────────────────────────────────────────────────────
  FLY_ROOM_BLANK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 430" class="w-full h-full">
    ${plate(680, 430)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">How far does the fly travel?</text>

    ${boxEdges()}
    <line x1="230" y1="362" x2="560" y2="108" stroke="${PURPLE}" stroke-width="5"/>

    <circle cx="230" cy="362" r="8" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="560" cy="108" r="8" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="350" y="388" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">12 ft</text>
    <text x="534" y="348" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">9 ft</text>
    <text x="578" y="204" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="start">8 ft</text>
    <text x="340" y="246" font-family="${FONT}" font-size="26" font-weight="900" fill="${PURPLE}" text-anchor="middle">?</text>

    <text x="216" y="382" font-family="${FONT}" font-size="14" font-weight="bold" fill="${GREEN}" text-anchor="end">fly starts</text>
    <text x="572" y="96" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RED}" text-anchor="start">fly lands</text>

    <text x="340" y="418" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">one straight line, bottom corner to the opposite ceiling corner</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // STUDENT-FACING. The same two surfaces laid flat, with the fold shown and
  // both end points marked — but NO diagonal and no answer. It gives away the
  // method (flatten it) without giving away the work, which is the level of
  // help this task needs to be attemptable rather than impossible.
  // ───────────────────────────────────────────────────────────────────────────
  ROOM_NET_BLANK: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 510" class="w-full h-full">
    ${plate(680, 510)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The same two surfaces, laid out flat</text>

    <rect x="210" y="252" width="288" height="216" fill="${BLUE_T}" stroke="${INK}" stroke-width="2.5"/>
    <rect x="210" y="60" width="288" height="192" fill="${GREEN_T}" stroke="${INK}" stroke-width="2.5"/>
    <line x1="210" y1="252" x2="498" y2="252" stroke="${KEY}" stroke-width="3" stroke-dasharray="8 5"/>

    <circle cx="210" cy="468" r="9" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="498" cy="60" r="9" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="354" y="392" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">FLOOR</text>
    <text x="354" y="150" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">WALL</text>

    <text x="354" y="494" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">12 ft</text>
    <text x="198" y="366" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="end">9 ft</text>
    <text x="198" y="162" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="end">8 ft</text>
    <text x="512" y="258" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">the fold</text>

    <text x="512" y="66" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RED}" text-anchor="start">ends</text>
    <text x="204" y="490" font-family="${FONT}" font-size="14" font-weight="bold" fill="${GREEN}" text-anchor="end">starts</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // SOLUTION. The room with the flight worked out both ways: the dashed orange
  // floor diagonal (the two-triangle method) and the one-step formula
  // underneath. Shown only after the projects are handed in.
  // ───────────────────────────────────────────────────────────────────────────
  FLY_ROOM: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 440" class="w-full h-full">
    ${plate(680, 440)}${MARKERS}

    <text x="340" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The room, and one straight flight</text>

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

    <text x="216" y="382" font-family="${FONT}" font-size="14" font-weight="bold" fill="${GREEN}" text-anchor="end">start</text>
    <text x="572" y="96" font-family="${FONT}" font-size="14" font-weight="bold" fill="${RED}" text-anchor="start">finish</text>

    <rect x="16" y="110" width="200" height="52" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="116" y="132" font-family="${FONT}" font-size="14" font-weight="bold" fill="${KEY}" text-anchor="middle">across the floor</text>
    <text x="116" y="152" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">√(12² + 9²) = 15</text>

    <rect x="16" y="176" width="200" height="52" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2"/>
    <text x="116" y="198" font-family="${FONT}" font-size="14" font-weight="bold" fill="${PURPLE}" text-anchor="middle">up to the corner</text>
    <text x="116" y="218" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="middle">√(15² + 8²) = 17</text>

    <text x="340" y="424" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">or in one step: √(12² + 9² + 8²) = √289 = 17</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The physical model, and the thing students get wrong: WHERE THE TWO ENDS GO.
  //
  // The notebook is folded to 90°. The flat page is the floor, the upright page
  // is one wall, and the fold is where they meet. The room's floor is drawn on
  // the flat page with one 9 ft edge ALONG the fold; that same wall (9 ft wide,
  // 8 ft tall) is drawn on the upright page standing on it.
  //
  // The fly starts at the floor corner furthest from the fold and lands on the
  // OPPOSITE TOP corner — which is on the UPRIGHT page. Both ends therefore sit
  // on different pages, and the twine has to lift off the paper and cross the
  // open air between them. If a student puts both ends on the flat page they
  // have modelled a floor diagonal, not the flight, and will measure 15 ft.
  //
  //   start  = (12, 0, 0)  the near floor corner, away from the fold
  //   finish = (0, 9, 8)   the top corner of the upright page, far end
  // ───────────────────────────────────────────────────────────────────────────
  NOTEBOOK_MODEL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 400" class="w-full h-full">
    ${plate(680, 400)}${MARKERS}

    <text x="340" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The string must run from one page to the other</text>

    <path d="M 150 300 L 420 300 L 530 224 L 260 224 Z" fill="${BLUE_T}" stroke="${INK}" stroke-width="2.5"/>
    <path d="M 150 300 L 260 224 L 260 76 L 150 152 Z" fill="${GREEN_T}" stroke="${INK}" stroke-width="2.5"/>
    <line x1="150" y1="300" x2="260" y2="224" stroke="${KEY}" stroke-width="3.5" stroke-dasharray="8 5"/>

    <line x1="420" y1="300" x2="260" y2="76" stroke="${PURPLE}" stroke-width="4.5"/>
    <circle cx="420" cy="300" r="8" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="260" cy="76" r="8" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="285" y="322" font-family="${FONT}" font-size="15" font-weight="900" fill="${RED}" text-anchor="middle">12 ft</text>
    <text x="486" y="278" font-family="${FONT}" font-size="15" font-weight="900" fill="${BLUE}" text-anchor="start">9 ft</text>
    <text x="138" y="232" font-family="${FONT}" font-size="15" font-weight="900" fill="${GREEN}" text-anchor="end">8 ft</text>
    <text x="188" y="286" font-family="${FONT}" font-size="13" font-weight="900" fill="${KEY}" text-anchor="start">the fold</text>

    <text x="352" y="188" font-family="${FONT}" font-size="15" font-weight="900" fill="${PURPLE}" text-anchor="start">the twine</text>

    <text x="430" y="322" font-family="${FONT}" font-size="13" font-weight="bold" fill="${GREEN}" text-anchor="start">tape it here</text>
    <text x="272" y="60" font-family="${FONT}" font-size="13" font-weight="bold" fill="${RED}" text-anchor="start">cut it here</text>

    <text x="330" y="292" font-family="${FONT}" font-size="13" font-weight="bold" fill="${RULE}" text-anchor="middle">flat page = the floor</text>
    <line x1="112" y1="112" x2="180" y2="130" stroke="${RULE}" stroke-width="1.5"/>
    <text x="26" y="98" font-family="${FONT}" font-size="13" font-weight="bold" fill="${RULE}" text-anchor="start">upright page</text>
    <text x="26" y="116" font-family="${FONT}" font-size="13" font-weight="bold" fill="${RULE}" text-anchor="start">= the wall</text>

    <rect x="396" y="336" width="268" height="52" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2"/>
    <text x="530" y="356" font-family="${FONT}" font-size="13" font-weight="900" fill="${KEY}" text-anchor="middle">both ends on the flat page</text>
    <text x="530" y="376" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">measures the floor, not the flight</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The investigation. A spider cannot fly, so it walks over the surfaces —
  // and the trick is to UNFOLD the room flat. Once the floor and the far wall
  // lie in one plane, the shortest walk is a plain straight line across a
  // rectangle, and Pythagoras works again. Exactly the move from the lesson
  // (collapse the problem into a plane), one level up.
  // ───────────────────────────────────────────────────────────────────────────
  ROOM_NET: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 570" class="w-full h-full">
    ${plate(680, 570)}${MARKERS}

    <text x="340" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Unfold the room and the walk goes straight</text>

    <rect x="210" y="252" width="288" height="216" fill="${BLUE_T}" stroke="${INK}" stroke-width="2.5"/>
    <rect x="210" y="60" width="288" height="192" fill="${GREEN_T}" stroke="${INK}" stroke-width="2.5"/>
    <line x1="210" y1="252" x2="498" y2="252" stroke="${KEY}" stroke-width="3" stroke-dasharray="8 5"/>

    <line x1="210" y1="468" x2="498" y2="60" stroke="${PURPLE}" stroke-width="5"/>
    <circle cx="210" cy="468" r="9" fill="${GREEN}" stroke="#ffffff" stroke-width="2.5"/>
    <circle cx="498" cy="60" r="9" fill="${RED}" stroke="#ffffff" stroke-width="2.5"/>

    <text x="440" y="392" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="middle">FLOOR</text>
    <text x="272" y="150" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="middle">WALL</text>

    <text x="354" y="494" font-family="${FONT}" font-size="17" font-weight="900" fill="${RED}" text-anchor="middle">12 ft</text>
    <text x="198" y="366" font-family="${FONT}" font-size="17" font-weight="900" fill="${BLUE}" text-anchor="end">9 ft</text>
    <text x="198" y="162" font-family="${FONT}" font-size="17" font-weight="900" fill="${GREEN}" text-anchor="end">8 ft</text>
    <text x="512" y="258" font-family="${FONT}" font-size="15" font-weight="900" fill="${KEY}" text-anchor="start">the fold</text>
    <text x="512" y="180" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">9 + 8</text>
    <text x="512" y="200" font-family="${FONT}" font-size="15" font-weight="900" fill="${INK}" text-anchor="start">= 17 ft</text>

    <text x="216" y="490" font-family="${FONT}" font-size="14" font-weight="bold" fill="${GREEN}" text-anchor="start">spider starts</text>

    <rect x="120" y="506" width="440" height="52" rx="10" fill="${PURPLE_T}" stroke="${PURPLE}" stroke-width="2.5"/>
    <text x="340" y="528" font-family="${FONT}" font-size="17" font-weight="900" fill="${PURPLE}" text-anchor="middle">√(12² + 17²) = √433 ≈ 20.8 ft</text>
    <text x="340" y="548" font-family="${FONT}" font-size="13" font-weight="bold" fill="${INK}" text-anchor="middle">flat again — so Pythagoras works again</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The answer to the investigation, drawn to scale so the result is VISIBLE
  // rather than just calculated: the tall narrow rectangle has the shortest
  // diagonal. Three ways to unfold, three different walks. Students should meet
  // this only AFTER they have hunted for the unfoldings themselves.
  // ───────────────────────────────────────────────────────────────────────────
  THREE_UNFOLDINGS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 350" class="w-full h-full">
    ${plate(720, 350)}${MARKERS}

    <text x="360" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Three ways to unfold, three different walks</text>

    <text x="130" y="72" font-family="${FONT}" font-size="16" font-weight="900" fill="${GREEN}" text-anchor="middle">pair 9 + 8 = 17</text>
    <rect x="91" y="139" width="78" height="111" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <line x1="91" y1="250" x2="169" y2="139" stroke="${PURPLE}" stroke-width="4"/>
    <text x="130" y="272" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">17 by 12</text>
    <text x="130" y="298" font-family="${FONT}" font-size="19" font-weight="900" fill="${GREEN}" text-anchor="middle">√433 ≈ 20.8</text>
    <text x="130" y="320" font-family="${FONT}" font-size="14" font-weight="900" fill="${GREEN}" text-anchor="middle">SHORTEST</text>

    <text x="360" y="72" font-family="${FONT}" font-size="16" font-weight="900" fill="${BLUE}" text-anchor="middle">pair 12 + 8 = 20</text>
    <rect x="295" y="191" width="130" height="59" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2.5"/>
    <line x1="295" y1="250" x2="425" y2="191" stroke="${PURPLE}" stroke-width="4"/>
    <text x="360" y="272" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">20 by 9</text>
    <text x="360" y="298" font-family="${FONT}" font-size="19" font-weight="900" fill="${BLUE}" text-anchor="middle">√481 ≈ 21.9</text>

    <text x="590" y="72" font-family="${FONT}" font-size="16" font-weight="900" fill="${RED}" text-anchor="middle">pair 12 + 9 = 21</text>
    <rect x="522" y="198" width="137" height="52" fill="#fdeef0" stroke="${RED}" stroke-width="2.5"/>
    <line x1="522" y1="250" x2="659" y2="198" stroke="${PURPLE}" stroke-width="4"/>
    <text x="590" y="272" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">21 by 8</text>
    <text x="590" y="298" font-family="${FONT}" font-size="19" font-weight="900" fill="${RED}" text-anchor="middle">√505 ≈ 22.5</text>

    <text x="360" y="340" font-family="${FONT}" font-size="15" font-weight="bold" fill="${INK}" text-anchor="middle">drawn to scale — the tall narrow one really does have the shortest diagonal</text>
  </svg>`,
}
