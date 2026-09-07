// content/y7-math/U02_1/diagrams.js
// Teaching diagrams for 2.1 Constructing Expressions, drawn to match 1.1–1.6 so
// Unit 2 reads as a continuation rather than a new book: flat line art on
// paper-white, dark ink outlines, the book's orange for every key word.
//
// House rules (docs/LESSON-PLAYBOOK.md §5):
//  · every diagram opens with a white plate, so the artwork is legible on a
//    light OR dark slide and never depends on the page's text colour;
//  · every <text> is written out literally — the helpers below emit shapes and
//    leader lines only, because `npm run audit:svg` cannot see text produced by
//    a `${helper(...)}` call and will silently check nothing;
//  · a label keeps clear of any <rect> by more than its own font size, because
//    the audit treats a nearby baseline as living inside that box.
//
// The five diagrams are the five hinges of the lesson, in order:
//   THREE_BAGS        you cannot count what you cannot see, so name it
//   BAG_PLUS_TWO      b + 2 will not "go" to anything — that IS the answer
//   FOUR_PHRASES      the four English phrases of change, and their operations
//   ORDER_FLIP        "h less than t" is written t − h, backwards from the words
//   SUBTRACT_VS_FROM  "subtract 4" against "subtract from 4"
//
// The last two are the lesson. They are pure English, they cost marks every
// year in Exercise 2.1 Q9 and Q11, and the arithmetic in them is trivial on
// purpose — nothing should distract from the wording.

const INK = '#2b2b2b'
const KEY = '#c25e12' // the book's key-word orange
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const GREEN_T = '#eef6e6'
const ORANGE_T = '#fdf1e3'
const BLUE_T = '#eef4fb'
const GREY_T = '#f1f5f9'
const GREY_D = '#c3ccd6'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

/** White paper plate + a hairline frame. Every diagram starts with this. */
const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const MARKERS = `<defs>
    <marker id="m21-key" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${KEY}"/></marker>
    <marker id="m21-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${GREEN}"/></marker>
    <marker id="m21-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="${BLUE}"/></marker>
  </defs>`

/**
 * A paper carrier bag: a body rect with a looped handle over the top.
 * Shapes only — every caption is written out literally in each diagram.
 */
const bag = (cx, yTop, w, h, fill) =>
  `<path d="M ${cx - w / 4} ${yTop} a ${w / 4} ${w / 4} 0 0 1 ${w / 2} 0" fill="none" stroke="${INK}" stroke-width="3"/>` +
  `<rect x="${cx - w / 2}" y="${yTop}" width="${w}" height="${h}" rx="5" fill="${fill}" stroke="${INK}" stroke-width="2.5"/>`

/** A row of balls resting on the floor of a bag. */
const balls = (cx, yBase, n, r) => {
  let out = ''
  const span = (n - 1) * (r * 2 + 4)
  for (let i = 0; i < n; i += 1) {
    out += `<circle cx="${cx - span / 2 + i * (r * 2 + 4)}" cy="${yBase - r}" r="${r}" fill="${GREY_T}" stroke="${INK}" stroke-width="2"/>`
  }
  return out
}

export const DIAGRAMS = {
  // ───────────────────────────────────────────────────────────────────────────
  // The hook, straight from the book's opening picture. Two bags you can see
  // into and one you cannot. No letter appears here yet — the letter is the
  // answer to the question this diagram asks, and it arrives on the next slide.
  // ───────────────────────────────────────────────────────────────────────────
  THREE_BAGS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 300" class="w-full h-full">
    ${plate(660, 300)}

    <text x="330" y="34" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Three bags. How many balls in each one?</text>

    ${bag(120, 76, 130, 130, '#ffffff')}
    ${balls(120, 196, 2, 15)}

    ${bag(330, 76, 130, 130, GREY_T)}
    ${balls(330, 196, 4, 13)}

    ${bag(540, 76, 130, 130, GREY_D)}
    <text x="540" y="162" font-family="${FONT}" font-size="52" font-weight="900" fill="${INK}" text-anchor="middle">?</text>

    <text x="120" y="242" font-family="${FONT}" font-size="18" font-weight="bold" fill="${INK}" text-anchor="middle">2 balls</text>
    <text x="330" y="242" font-family="${FONT}" font-size="18" font-weight="bold" fill="${INK}" text-anchor="middle">4 balls</text>
    <text x="540" y="242" font-family="${FONT}" font-size="18" font-weight="bold" fill="${KEY}" text-anchor="middle">you cannot see</text>

    <text x="330" y="278" font-family="${FONT}" font-size="16" fill="${INK}" text-anchor="middle">The third bag still holds a number of balls. We just do not know it.</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The wall, and the whole point of the section. Two balls go into each bag.
  // The first two rows finish. The third row does not, and the orange line
  // underneath says so out loud: an unfinished-looking answer is the answer.
  // ───────────────────────────────────────────────────────────────────────────
  BAG_PLUS_TWO: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 292" class="w-full h-full">
    ${plate(660, 292)}
    ${MARKERS}

    <text x="330" y="30" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Put two more balls into every bag</text>

    <text x="100" y="64" font-family="${FONT}" font-size="14" font-weight="bold" fill="${BLUE}" text-anchor="middle">In the bag</text>
    <text x="300" y="64" font-family="${FONT}" font-size="14" font-weight="bold" fill="${BLUE}" text-anchor="middle">Add two</text>
    <text x="530" y="64" font-family="${FONT}" font-size="14" font-weight="bold" fill="${BLUE}" text-anchor="middle">Now there are</text>

    <rect x="40" y="84" width="120" height="48" rx="10" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2"/>
    <rect x="40" y="144" width="120" height="48" rx="10" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2"/>
    <rect x="40" y="204" width="120" height="48" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <text x="100" y="117" font-family="${FONT}" font-size="26" font-weight="900" fill="${INK}" text-anchor="middle">2</text>
    <text x="100" y="177" font-family="${FONT}" font-size="26" font-weight="900" fill="${INK}" text-anchor="middle">4</text>
    <text x="100" y="237" font-family="${FONT}" font-size="26" font-weight="900" fill="${KEY}" text-anchor="middle">b</text>

    <rect x="216" y="84" width="168" height="48" rx="10" fill="#ffffff" stroke="${BLUE}" stroke-width="2"/>
    <rect x="216" y="144" width="168" height="48" rx="10" fill="#ffffff" stroke="${BLUE}" stroke-width="2"/>
    <rect x="216" y="204" width="168" height="48" rx="10" fill="#ffffff" stroke="${KEY}" stroke-width="2.5"/>
    <text x="300" y="117" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">2 + 2</text>
    <text x="300" y="177" font-family="${FONT}" font-size="24" font-weight="bold" fill="${INK}" text-anchor="middle">4 + 2</text>
    <text x="300" y="237" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">b + 2</text>

    <line x1="394" y1="108" x2="428" y2="108" stroke="${BLUE}" stroke-width="2.5" marker-end="url(#m21-blue)"/>
    <line x1="394" y1="168" x2="428" y2="168" stroke="${BLUE}" stroke-width="2.5" marker-end="url(#m21-blue)"/>
    <line x1="394" y1="228" x2="428" y2="228" stroke="${KEY}" stroke-width="2.5" marker-end="url(#m21-key)"/>

    <rect x="440" y="84" width="180" height="48" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2"/>
    <rect x="440" y="144" width="180" height="48" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2"/>
    <rect x="440" y="204" width="180" height="48" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <text x="530" y="117" font-family="${FONT}" font-size="26" font-weight="900" fill="${INK}" text-anchor="middle">4</text>
    <text x="530" y="177" font-family="${FONT}" font-size="26" font-weight="900" fill="${INK}" text-anchor="middle">6</text>
    <text x="530" y="237" font-family="${FONT}" font-size="24" font-weight="900" fill="${KEY}" text-anchor="middle">b + 2</text>

    <text x="330" y="280" font-family="${FONT}" font-size="16" font-weight="bold" fill="${KEY}" text-anchor="middle">The last row does not go anywhere. Leaving it is the correct answer.</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The four phrases of change, all built on one starting letter so the class
  // compares the English rather than the numbers. Mr Bowen keeps the stickers.
  // ───────────────────────────────────────────────────────────────────────────
  FOUR_PHRASES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 318" class="w-full h-full">
    ${plate(660, 318)}
    ${MARKERS}

    <text x="330" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">Mr Bowen has s stickers. Someone else has...</text>

    <rect x="30" y="54" width="382" height="46" rx="10" fill="${GREY_T}" stroke="${INK}" stroke-width="2"/>
    <rect x="30" y="114" width="382" height="46" rx="10" fill="${GREY_T}" stroke="${INK}" stroke-width="2"/>
    <rect x="30" y="174" width="382" height="46" rx="10" fill="${GREY_T}" stroke="${INK}" stroke-width="2"/>
    <rect x="30" y="234" width="382" height="46" rx="10" fill="${GREY_T}" stroke="${INK}" stroke-width="2"/>

    <text x="221" y="84" font-family="${FONT}" font-size="17" fill="${INK}" text-anchor="middle">two more stickers than Mr Bowen</text>
    <text x="221" y="144" font-family="${FONT}" font-size="17" fill="${INK}" text-anchor="middle">three times as many as Mr Bowen</text>
    <text x="221" y="204" font-family="${FONT}" font-size="17" fill="${INK}" text-anchor="middle">six fewer stickers than Mr Bowen</text>
    <text x="221" y="264" font-family="${FONT}" font-size="17" fill="${INK}" text-anchor="middle">half as many stickers as Mr Bowen</text>

    <line x1="424" y1="77" x2="462" y2="77" stroke="${KEY}" stroke-width="2.5" marker-end="url(#m21-key)"/>
    <line x1="424" y1="137" x2="462" y2="137" stroke="${KEY}" stroke-width="2.5" marker-end="url(#m21-key)"/>
    <line x1="424" y1="197" x2="462" y2="197" stroke="${KEY}" stroke-width="2.5" marker-end="url(#m21-key)"/>
    <line x1="424" y1="257" x2="462" y2="257" stroke="${KEY}" stroke-width="2.5" marker-end="url(#m21-key)"/>

    <rect x="474" y="54" width="150" height="46" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <rect x="474" y="114" width="150" height="46" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <rect x="474" y="174" width="150" height="46" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <rect x="474" y="234" width="150" height="46" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>

    <text x="549" y="87" font-family="${FONT}" font-size="26" font-weight="900" fill="${KEY}" text-anchor="middle">s + 2</text>
    <text x="549" y="147" font-family="${FONT}" font-size="26" font-weight="900" fill="${KEY}" text-anchor="middle">3s</text>
    <text x="549" y="207" font-family="${FONT}" font-size="26" font-weight="900" fill="${KEY}" text-anchor="middle">s − 6</text>
    <text x="549" y="267" font-family="${FONT}" font-size="26" font-weight="900" fill="${KEY}" text-anchor="middle">s ÷ 2</text>

    <text x="330" y="304" font-family="${FONT}" font-size="15" fill="${INK}" text-anchor="middle">3s means 3 × s. In algebra we stop writing the multiplication sign.</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // The word-order flip. The number version sits on top, because the class
  // already knows that "5 less than 12" is 7 and will not accept 5 − 12. The
  // letter version underneath is then the same sentence, not a new rule.
  // ───────────────────────────────────────────────────────────────────────────
  ORDER_FLIP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 286" class="w-full h-full">
    ${plate(660, 286)}
    ${MARKERS}

    <text x="330" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">The words arrive in the opposite order</text>

    <rect x="34" y="56" width="250" height="56" rx="10" fill="${GREY_T}" stroke="${INK}" stroke-width="2"/>
    <text x="159" y="92" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">5 less than 12</text>
    <line x1="296" y1="84" x2="342" y2="84" stroke="${GREEN}" stroke-width="3" marker-end="url(#m21-green)"/>
    <rect x="354" y="56" width="272" height="56" rx="10" fill="${GREEN_T}" stroke="${GREEN}" stroke-width="2.5"/>
    <text x="490" y="93" font-family="${FONT}" font-size="24" font-weight="900" fill="${INK}" text-anchor="middle">12 − 5 = 7</text>

    <rect x="34" y="140" width="250" height="56" rx="10" fill="${GREY_T}" stroke="${INK}" stroke-width="2"/>
    <text x="159" y="176" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">h less than t</text>
    <line x1="296" y1="168" x2="342" y2="168" stroke="${KEY}" stroke-width="3" marker-end="url(#m21-key)"/>
    <rect x="354" y="140" width="272" height="56" rx="10" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <text x="490" y="177" font-family="${FONT}" font-size="24" font-weight="900" fill="${KEY}" text-anchor="middle">t − h</text>

    <text x="330" y="240" font-family="${FONT}" font-size="17" font-weight="bold" fill="${RED}" text-anchor="middle">Not 5 − 12. Not h − t.</text>
    <text x="330" y="268" font-family="${FONT}" font-size="16" fill="${INK}" text-anchor="middle">What you started with is written first, even though it is said last.</text>
  </svg>`,

  // ───────────────────────────────────────────────────────────────────────────
  // Exercise 2.1 Q9 in one picture. Two sentences differing by the single word
  // "from", and a value of x that lands the two answers on opposite sides of
  // zero — so the difference between them is impossible to wave away.
  // ───────────────────────────────────────────────────────────────────────────
  SUBTRACT_VS_FROM: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 316" class="w-full h-full">
    ${plate(660, 316)}

    <text x="330" y="32" font-family="${FONT}" font-size="19" font-weight="bold" fill="${KEY}" text-anchor="middle">One extra word. A completely different answer.</text>

    <rect x="14" y="52" width="312" height="212" rx="12" fill="${BLUE_T}" stroke="${BLUE}" stroke-width="2.5"/>
    <text x="170" y="84" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">Multiply x by 5 and subtract 4.</text>
    <text x="170" y="142" font-family="${FONT}" font-size="34" font-weight="900" fill="${BLUE}" text-anchor="middle">5x − 4</text>
    <text x="170" y="186" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">Try it with x = 2</text>
    <text x="170" y="224" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">10 − 4 = 6</text>
    <text x="170" y="250" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">start at 10, take 4 away</text>

    <rect x="334" y="52" width="312" height="212" rx="12" fill="${ORANGE_T}" stroke="${KEY}" stroke-width="2.5"/>
    <text x="490" y="84" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}" text-anchor="middle">Multiply x by 5 and subtract from 4.</text>
    <text x="490" y="142" font-family="${FONT}" font-size="34" font-weight="900" fill="${KEY}" text-anchor="middle">4 − 5x</text>
    <text x="490" y="186" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">Try it with x = 2</text>
    <text x="490" y="224" font-family="${FONT}" font-size="22" font-weight="bold" fill="${RED}" text-anchor="middle">4 − 10 = −6</text>
    <text x="490" y="250" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">start at 4, take 10 away</text>

    <text x="330" y="298" font-family="${FONT}" font-size="16" font-weight="bold" fill="${INK}" text-anchor="middle">The word from tells you where to start counting down.</text>
  </svg>`,
}
