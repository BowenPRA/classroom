// content/y7-science/U03_models/diagrams.js
// Teaching diagrams for "Models: Space and Time".
//
//   What a model is
//     MODEL_KINDS   four models the class already knows: a globe, a particle
//                   drawing (2.1), a computer model, a formula (3.1)
//     GLOBE         a globe on its stand — "what does it get wrong?"
//   The Solar System
//     ANS_TENNIS / ANS_PIN   vote: the Sun is a football, so the Earth is …
//     ORBIT         Draw This: the Sun, a planet, its orbit; gravity pulls in
//     ANS_BALL / ANS_PLATE   vote: are the orbits a ball or a plate?
//     PLANE         Draw This: from above, all go the same way; from the side, flat
//   How it formed
//     SPIN_FLAT     arms in, spin faster (the skater); spinning dough goes flat
//     NEBULA_STEPS  Draw This: cloud → shrinking ball → disc → Sun and planets
//     ROCKY / GIANT near the Sun only rock and metal; far out, ice too, then gas
//     HL_TAU        a young star's disc with gaps, drawn from ALMA's 2014 image
//   Half-life and carbon dating
//     HALVING       100 → 50 → 25 → 12.5: each step is one half-life
//     CARBON_TWO    ordinary carbon, and carbon-14, which one day becomes nitrogen
//     C14_CYCLE     from the air, into a coffee plant, into Mr Bowen
//     DECAY_CURVE   Draw This: the carbon-14 curve, with the half-lives marked
//     ANS_DINO_YES / ANS_DINO_NO   vote: can carbon dating date a dinosaur?
//     TOO_OLD       after 9 half-lives almost nothing is left to measure
//     CLOCKS        three clocks, three jobs: carbon-14, potassium-40, uranium-238
//     DINO_LAYERS   a fossil between two dated layers of volcanic ash
//   The age of the Earth and the Sun
//     ZIRCON        a crystal clock: uranium in, no lead; lead builds up
//     METEORITE     a cut meteorite and its white specks, the oldest solids
//
// Split diagrams are drawn at 840×560, showcase ones at 1120×440, vote cards
// at 720×320 — the shapes those layouts give a picture (as in 3.1).
// Label <text> is written out literally so `npm run audit:svg` can measure it.
// Helpers below draw shapes only. Diagrams stay in English (house rule).

const INK = '#2b2b2b'
const KEY = '#c25e12'
const MUTED = '#5b6770'
const RULE = '#cfd8dc'
const TEAL = '#0087a8'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const PURPLE = '#5c2483'
const C14 = '#e07a1f'
const N14 = '#7f9bb8'
const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const f1 = (n) => Number(n.toFixed(1))

const arrow = (x1, y1, x2, y2, color, w = 5, head = 18) => {
  const a = Math.atan2(y2 - y1, x2 - x1)
  const hx = x2 - head * Math.cos(a), hy = y2 - head * Math.sin(a)
  const px = head * 0.55 * Math.sin(a), py = -head * 0.55 * Math.cos(a)
  return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(hx)}" y2="${f1(hy)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>
    <path d="M ${f1(x2)} ${f1(y2)} L ${f1(hx + px)} ${f1(hy + py)} L ${f1(hx - px)} ${f1(hy - py)} Z" fill="${color}"/>`
}

// A curved arrow along a circle, from angle a0 to a1 (degrees, screen).
const arcArrow = (cx, cy, rx, ry, a0, a1, color, w = 4, head = 16) => {
  const P = (a) => [cx + rx * Math.cos((a * Math.PI) / 180), cy + ry * Math.sin((a * Math.PI) / 180)]
  const [x0, y0] = P(a0)
  const [x1, y1] = P(a1)
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0
  const sweep = a1 > a0 ? 1 : 0
  const [xb, yb] = P(a1 - (a1 > a0 ? 6 : -6))
  const ang = Math.atan2(y1 - yb, x1 - xb)
  const px = head * 0.55 * Math.sin(ang), py = -head * 0.55 * Math.cos(ang)
  const hx = x1 - head * Math.cos(ang), hy = y1 - head * Math.sin(ang)
  return `<path d="M ${f1(x0)} ${f1(y0)} A ${rx} ${ry} 0 ${large} ${sweep} ${f1(hx)} ${f1(hy)}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>
    <path d="M ${f1(x1)} ${f1(y1)} L ${f1(hx + px)} ${f1(hy + py)} L ${f1(hx - px)} ${f1(hy - py)} Z" fill="${color}"/>`
}

const leader = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${KEY}" stroke-width="2"/><circle cx="${x2}" cy="${y2}" r="4.5" fill="${KEY}"/>`

// A drawn Sun: flat pale disc and short rays.
const sun = (cx, cy, r) => {
  let rays = ''
  for (let k = 0; k < 12; k++) {
    const a = (k * 30 * Math.PI) / 180
    rays += `<line x1="${f1(cx + (r + 6) * Math.cos(a))}" y1="${f1(cy + (r + 6) * Math.sin(a))}" x2="${f1(cx + (r + 18) * Math.cos(a))}" y2="${f1(cy + (r + 18) * Math.sin(a))}" stroke="#e8a317" stroke-width="4" stroke-linecap="round"/>`
  }
  return `${rays}<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffd45c" stroke="${INK}" stroke-width="3"/>`
}

// A planet: flat fill, ink outline.
const planet = (cx, cy, r, fill) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${INK}" stroke-width="2.5"/>`

// The voting hands from 3.1.
const HAND_PATHS = '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>'
const leftHand = (color) => `<g transform="translate(192 76) scale(-7 7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`
const rightHand = (color) => `<g transform="translate(528 76) scale(7)" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${HAND_PATHS}</g>`

// A football, drawn.
const football = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="${INK}" stroke-width="3"/>
    <path d="M ${cx} ${f1(cy - r * 0.42)} l ${f1(r * 0.4)} ${f1(r * 0.29)} l ${f1(-r * 0.15)} ${f1(r * 0.47)} l ${f1(-r * 0.5)} 0 l ${f1(-r * 0.15)} ${f1(-r * 0.47)} z" fill="${INK}"/>`

// Rows of dots for atoms in a crystal.
const dots = (x0, y0, cols, rows, gap, r, fillFor) => {
  let out = ''
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const k = j * cols + i
    out += `<circle cx="${x0 + i * gap}" cy="${y0 + j * gap}" r="${r}" fill="${fillFor(k)}" stroke="${INK}" stroke-width="1.2"/>`
  }
  return out
}

export const DIAGRAMS = {
  // ── What a model is ───────────────────────────────────────────────────────
  MODEL_KINDS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="24" y="24" width="384" height="246" rx="16" fill="#e2f2f6" stroke="${RULE}" stroke-width="2"/>
    <rect x="432" y="24" width="384" height="246" rx="16" fill="#fdf1e3" stroke="${RULE}" stroke-width="2"/>
    <rect x="24" y="290" width="384" height="246" rx="16" fill="#f2ecf7" stroke="${RULE}" stroke-width="2"/>
    <rect x="432" y="290" width="384" height="246" rx="16" fill="#eef6e6" stroke="${RULE}" stroke-width="2"/>
    <circle cx="216" cy="122" r="70" fill="#9fd0ff" stroke="${INK}" stroke-width="3"/>
    <path d="M 176 82 q 30 -12 40 10 q 6 24 -20 34 q -24 -4 -20 -44 z M 230 120 q 26 -6 30 18 q -4 24 -26 26 q -14 -18 -4 -44 z" fill="#7cc36a" stroke="${INK}" stroke-width="2"/>
    <path d="M 216 192 v 26 M 176 222 h 80" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
    <text x="216" y="254" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">a globe</text>
    ${dots(552, 70, 6, 4, 26, 10, () => '#f2b880')}
    <text x="624" y="210" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">particles in a solid (2.1)</text>
    <text x="624" y="254" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">a drawing</text>
    <rect x="96" y="320" width="240" height="150" rx="12" fill="#0b1228" stroke="${INK}" stroke-width="3"/>
    <ellipse cx="216" cy="395" rx="90" ry="40" fill="none" stroke="#7dd3fc" stroke-width="2"/>
    <ellipse cx="216" cy="395" rx="50" ry="22" fill="none" stroke="#fcd34d" stroke-width="2"/>
    <circle cx="216" cy="395" r="10" fill="#ffd45c"/>
    <circle cx="306" cy="395" r="6" fill="#60a5fa"/>
    <circle cx="190" cy="374" r="4" fill="#fcd34d"/>
    <text x="216" y="520" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">a computer model</text>
    <text x="624" y="420" font-family="${FONT}" font-size="58" font-weight="bold" fill="${GREEN}" text-anchor="middle">W = m × 10</text>
    <text x="624" y="470" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">weight (3.1)</text>
    <text x="624" y="520" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">a maths model</text>
  </svg>`,

  GLOBE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <g transform="rotate(-23 420 250)">
      <circle cx="420" cy="250" r="190" fill="#bfe1ff" stroke="${INK}" stroke-width="4"/>
      <path d="M 320 120 q 70 -40 110 10 q 20 50 -30 90 q -40 30 -20 80 q -40 20 -70 -30 q -30 -60 10 -150 z" fill="#9bd18a" stroke="${INK}" stroke-width="2.5"/>
      <path d="M 470 170 q 60 -20 90 30 q 10 60 -30 100 q -40 40 -70 10 q -10 -50 10 -140 z" fill="#9bd18a" stroke="${INK}" stroke-width="2.5"/>
      <ellipse cx="420" cy="250" rx="190" ry="40" fill="none" stroke="${MUTED}" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="420" y1="40" x2="420" y2="460" stroke="${INK}" stroke-width="5"/>
    </g>
    <path d="M 250 140 A 190 190 0 0 0 330 450" fill="none" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
    <path d="M 420 470 v 40 M 330 520 h 180" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>
    <text x="640" y="540" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}">a model Earth</text>
  </svg>`,

  // ── Votes: the football Sun ───────────────────────────────────────────────
  ANS_TENNIS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    ${football(330, 90, 46)}
    <circle cx="560" cy="110" r="22" fill="#d8ec4f" stroke="${INK}" stroke-width="3"/>
    <path d="M 542 98 q 18 12 36 0 M 542 122 q 18 -12 36 0" fill="none" stroke="#ffffff" stroke-width="3"/>
    <line x1="380" y1="158" x2="538" y2="158" stroke="${MUTED}" stroke-width="2" stroke-dasharray="5 5"/>
    <text x="459" y="150" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">2 m</text>
    <text x="452" y="236" font-family="${FONT}" font-size="44" font-weight="bold" fill="${BLUE}" text-anchor="middle">a tennis ball,</text>
    <text x="452" y="290" font-family="${FONT}" font-size="44" font-weight="bold" fill="${BLUE}" text-anchor="middle">2 m away</text>
  </svg>`,

  ANS_PIN: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    ${football(80, 90, 46)}
    <circle cx="400" cy="110" r="3" fill="${BLUE}"/>
    <line x1="132" y1="158" x2="396" y2="158" stroke="${MUTED}" stroke-width="2" stroke-dasharray="5 5"/>
    <text x="264" y="150" font-family="${FONT}" font-size="22" font-weight="bold" fill="${MUTED}" text-anchor="middle">24 m</text>
    <text x="260" y="236" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">a pinhead,</text>
    <text x="260" y="290" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">24 m away</text>
  </svg>`,

  ORBIT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <ellipse cx="400" cy="290" rx="300" ry="190" fill="none" stroke="${INK}" stroke-width="3" stroke-dasharray="10 8"/>
    ${sun(400, 290, 52)}
    ${planet(640, 176, 26, '#9fd0ff')}
    ${arrow(624, 190, 474, 258, RED, 5, 20)}
    ${arrow(666, 176, 760, 252, BLUE, 5, 20)}
    <text x="586" y="266" font-family="${FONT}" font-size="22" font-weight="bold" fill="${RED}" text-anchor="middle">gravity</text>
    <text x="760" y="296" font-family="${FONT}" font-size="22" font-weight="bold" fill="${BLUE}" text-anchor="middle">moving</text>
    ${leader(250, 520, 250, 445)}
    <text x="262" y="534" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">orbit</text>
    <text x="400" y="390" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">the Sun</text>
    <text x="640" y="134" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">a planet</text>
  </svg>`,

  ANS_BALL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    ${sun(452, 98, 16)}
    <ellipse cx="452" cy="98" rx="80" ry="30" fill="none" stroke="${BLUE}" stroke-width="2.5" transform="rotate(35 452 98)"/>
    <ellipse cx="452" cy="98" rx="80" ry="30" fill="none" stroke="${BLUE}" stroke-width="2.5" transform="rotate(-35 452 98)"/>
    <ellipse cx="452" cy="98" rx="30" ry="80" fill="none" stroke="${BLUE}" stroke-width="2.5"/>
    <text x="452" y="236" font-family="${FONT}" font-size="44" font-weight="bold" fill="${BLUE}" text-anchor="middle">all around,</text>
    <text x="452" y="290" font-family="${FONT}" font-size="44" font-weight="bold" fill="${BLUE}" text-anchor="middle">like a ball</text>
  </svg>`,

  ANS_PLATE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    ${sun(260, 98, 16)}
    <ellipse cx="260" cy="98" rx="150" ry="14" fill="none" stroke="${KEY}" stroke-width="2.5"/>
    <ellipse cx="260" cy="98" rx="100" ry="9" fill="none" stroke="${KEY}" stroke-width="2.5"/>
    <ellipse cx="260" cy="98" rx="60" ry="6" fill="none" stroke="${KEY}" stroke-width="2.5"/>
    <text x="260" y="236" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">flat,</text>
    <text x="260" y="290" font-family="${FONT}" font-size="44" font-weight="bold" fill="${KEY}" text-anchor="middle">like a plate</text>
  </svg>`,

  PLANE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="210" y="48" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">From above</text>
    <circle cx="210" cy="250" r="70" fill="none" stroke="${INK}" stroke-width="2.5" stroke-dasharray="7 6"/>
    <circle cx="210" cy="250" r="120" fill="none" stroke="${INK}" stroke-width="2.5" stroke-dasharray="7 6"/>
    <circle cx="210" cy="250" r="170" fill="none" stroke="${INK}" stroke-width="2.5" stroke-dasharray="7 6"/>
    ${sun(210, 250, 22)}
    ${arcArrow(210, 250, 70, 70, 20, -50, BLUE, 4, 14)}
    ${arcArrow(210, 250, 120, 120, 150, 80, BLUE, 4, 16)}
    ${arcArrow(210, 250, 170, 170, 260, 200, BLUE, 4, 16)}
    ${planet(280, 250, 9, '#9fd0ff')}
    ${planet(110, 320, 11, '#e2a76f')}
    ${planet(210, 420, 14, '#e3cc94')}
    <text x="210" y="470" font-family="${FONT}" font-size="21" font-weight="bold" fill="${BLUE}" text-anchor="middle">all go round</text>
    <text x="210" y="498" font-family="${FONT}" font-size="21" font-weight="bold" fill="${BLUE}" text-anchor="middle">the same way</text>
    <line x1="420" y1="40" x2="420" y2="520" stroke="${RULE}" stroke-width="2"/>
    <text x="630" y="48" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">From the side</text>
    <line x1="450" y1="250" x2="810" y2="250" stroke="${INK}" stroke-width="2.5" stroke-dasharray="7 6"/>
    ${sun(630, 250, 22)}
    ${planet(700, 250, 9, '#9fd0ff')}
    ${planet(520, 250, 11, '#e2a76f')}
    ${planet(790, 250, 14, '#e3cc94')}
    <text x="630" y="470" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}" text-anchor="middle">almost flat:</text>
    <text x="630" y="498" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}" text-anchor="middle">one plane</text>
  </svg>`,

  // ── How it formed ─────────────────────────────────────────────────────────
  SPIN_FLAT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    <circle cx="150" cy="120" r="22" fill="#f2c9a5" stroke="${INK}" stroke-width="3"/>
    <line x1="150" y1="142" x2="150" y2="250" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="170" x2="60" y2="200" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="170" x2="240" y2="200" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    <line x1="150" y1="250" x2="150" y2="320" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    ${arcArrow(150, 330, 70, 18, 20, 160, BLUE, 3, 12)}
    <text x="150" y="386" font-family="${FONT}" font-size="24" font-weight="bold" fill="${BLUE}" text-anchor="middle">arms out: slow</text>
    <circle cx="420" cy="120" r="22" fill="#f2c9a5" stroke="${INK}" stroke-width="3"/>
    <line x1="420" y1="142" x2="420" y2="250" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    <path d="M 420 168 l -16 22 l 16 18 M 420 168 l 16 22 l -16 18" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="420" y1="250" x2="420" y2="320" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    ${arcArrow(420, 330, 40, 12, 20, 160, RED, 3, 12)}
    ${arcArrow(420, 330, 40, 12, 200, 340, RED, 3, 12)}
    ${arcArrow(420, 200, 46, 14, 200, 340, RED, 3, 12)}
    <text x="420" y="386" font-family="${FONT}" font-size="24" font-weight="bold" fill="${RED}" text-anchor="middle">arms in: FAST</text>
    <line x1="560" y1="40" x2="560" y2="400" stroke="${RULE}" stroke-width="2"/>
    <circle cx="690" cy="200" r="60" fill="#f6e3b8" stroke="${INK}" stroke-width="3"/>
    <text x="690" y="300" font-family="${FONT}" font-size="24" font-weight="bold" fill="${MUTED}" text-anchor="middle">a ball of dough</text>
    ${arrow(770, 200, 840, 200, MUTED, 4, 16)}
    <ellipse cx="970" cy="200" rx="120" ry="26" fill="#f6e3b8" stroke="${INK}" stroke-width="3"/>
    ${arcArrow(970, 200, 140, 40, 200, 340, RED, 3, 14)}
    <text x="970" y="300" font-family="${FONT}" font-size="24" font-weight="bold" fill="${KEY}" text-anchor="middle">spin it: it goes flat</text>
  </svg>`,

  NEBULA_STEPS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <text x="40" y="52" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">1</text>
    <path d="M 120 150 q -40 -60 30 -80 q 40 -40 90 0 q 70 0 60 60 q 40 50 -20 90 q -40 40 -100 10 q -80 0 -60 -80 z" fill="#efe3f7" stroke="${INK}" stroke-width="3"/>
    <circle cx="160" cy="130" r="3" fill="${INK}"/><circle cx="210" cy="110" r="3" fill="${INK}"/><circle cx="250" cy="160" r="3" fill="${INK}"/><circle cx="180" cy="190" r="3" fill="${INK}"/><circle cx="230" cy="210" r="3" fill="${INK}"/><circle cx="140" cy="180" r="3" fill="${INK}"/>
    <text x="200" y="268" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">a cloud (nebula)</text>
    <text x="460" y="52" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">2</text>
    <circle cx="620" cy="150" r="70" fill="#efe3f7" stroke="${INK}" stroke-width="3"/>
    ${arrow(520, 150, 556, 150, RED, 4, 14)}
    ${arrow(720, 150, 684, 150, RED, 4, 14)}
    ${arrow(620, 50, 620, 86, RED, 4, 14)}
    ${arrow(620, 250, 620, 214, RED, 4, 14)}
    <text x="620" y="268" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">gravity pulls it in</text>
    <line x1="30" y1="290" x2="810" y2="290" stroke="${RULE}" stroke-width="2"/>
    <line x1="420" y1="30" x2="420" y2="530" stroke="${RULE}" stroke-width="2"/>
    <text x="40" y="330" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">3</text>
    <ellipse cx="210" cy="420" rx="160" ry="34" fill="#efe3f7" stroke="${INK}" stroke-width="3"/>
    <circle cx="210" cy="420" r="16" fill="#ffd45c" stroke="${INK}" stroke-width="2.5"/>
    ${arcArrow(210, 420, 180, 50, 200, 340, BLUE, 3, 14)}
    <text x="210" y="510" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">a spinning disc</text>
    <text x="460" y="330" font-family="${FONT}" font-size="26" font-weight="bold" fill="${KEY}">4</text>
    <ellipse cx="620" cy="420" rx="160" ry="34" fill="none" stroke="${INK}" stroke-width="2" stroke-dasharray="6 6"/>
    <ellipse cx="620" cy="420" rx="100" ry="21" fill="none" stroke="${INK}" stroke-width="2" stroke-dasharray="6 6"/>
    ${sun(620, 420, 18)}
    ${planet(720, 420, 8, '#9fd0ff')}
    ${planet(510, 430, 14, '#e2a76f')}
    ${planet(760, 404, 11, '#e3cc94')}
    <text x="620" y="510" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">the Sun and planets</text>
  </svg>`,

  ROCKY: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" class="w-full h-full">
    ${plate(600, 380)}
    ${sun(70, 190, 40)}
    <circle cx="350" cy="190" r="110" fill="#d9a27a" stroke="${INK}" stroke-width="3"/>
    <circle cx="350" cy="190" r="52" fill="#8b5a3c" stroke="${INK}" stroke-width="2.5"/>
    ${leader(520, 110, 420, 140)}
    <text x="500" y="98" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">rock</text>
    ${leader(520, 300, 380, 210)}
    <text x="470" y="330" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">metal core</text>
    <text x="70" y="270" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">hot</text>
  </svg>`,

  GIANT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" class="w-full h-full">
    ${plate(600, 380)}
    <circle cx="250" cy="190" r="150" fill="#f1dfc1" stroke="${INK}" stroke-width="3"/>
    <path d="M 108 140 h 284 M 102 196 h 296 M 116 252 h 268" stroke="#d6b88e" stroke-width="14"/>
    <circle cx="250" cy="190" r="46" fill="#cfe8ff" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="250" cy="190" r="21" fill="#8b5a3c" stroke="${INK}" stroke-width="2"/>
    ${leader(430, 76, 350, 104)}
    <text x="420" y="50" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}">huge gas</text>
    <text x="420" y="74" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}">layer</text>
    ${leader(430, 300, 282, 214)}
    <text x="420" y="326" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}">ice and rock</text>
    <text x="420" y="350" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}">core</text>
    <text x="60" y="360" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">cold</text>
  </svg>`,

  HL_TAU: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="40" y="40" width="760" height="420" rx="16" fill="#0a0d1c"/>
    <ellipse cx="420" cy="250" rx="330" ry="190" fill="#ff8a2a" opacity="0.18"/>
    <ellipse cx="420" cy="250" rx="300" ry="172" fill="none" stroke="#ff9d3a" stroke-width="22" opacity="0.55"/>
    <ellipse cx="420" cy="250" rx="250" ry="143" fill="none" stroke="#ffb35a" stroke-width="20" opacity="0.7"/>
    <ellipse cx="420" cy="250" rx="196" ry="112" fill="none" stroke="#ffc46e" stroke-width="22" opacity="0.8"/>
    <ellipse cx="420" cy="250" rx="140" ry="80" fill="none" stroke="#ffd690" stroke-width="22" opacity="0.85"/>
    <ellipse cx="420" cy="250" rx="80" ry="46" fill="#ffe2a8" opacity="0.9"/>
    <circle cx="420" cy="250" r="16" fill="#fffbe8"/>
    ${leader(660, 500, 560, 372)}
    <text x="560" y="514" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">a dark gap</text>
    ${leader(180, 500, 420, 250)}
    <text x="40" y="514" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">a young star</text>
    <text x="420" y="545" font-family="${FONT}" font-size="17" fill="${MUTED}" text-anchor="middle">drawn from the ALMA telescope's photo, 2014</text>
  </svg>`,

  // ── Half-life and carbon dating ───────────────────────────────────────────
  HALVING: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <line x1="70" y1="440" x2="800" y2="440" stroke="${INK}" stroke-width="3"/>
    <rect x="100" y="80" width="120" height="360" rx="8" fill="${KEY}"/>
    <rect x="280" y="260" width="120" height="180" rx="8" fill="${KEY}" opacity="0.85"/>
    <rect x="460" y="350" width="120" height="90" rx="8" fill="${KEY}" opacity="0.7"/>
    <rect x="640" y="395" width="120" height="45" rx="8" fill="${KEY}" opacity="0.55"/>
    <text x="160" y="66" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">100</text>
    <text x="340" y="246" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">50</text>
    <text x="520" y="336" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">25</text>
    <text x="700" y="381" font-family="${FONT}" font-size="30" font-weight="bold" fill="${INK}" text-anchor="middle">12.5</text>
    <text x="160" y="480" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">start</text>
    <text x="340" y="480" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">1 half-life</text>
    <text x="520" y="480" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">2 half-lives</text>
    <text x="700" y="480" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">3 half-lives</text>
    <text x="420" y="530" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">each step: half of what was left</text>
  </svg>`,

  CARBON_TWO: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <circle cx="190" cy="200" r="90" fill="#eef1f4" stroke="${INK}" stroke-width="3"/>
    <text x="190" y="218" font-family="${FONT}" font-size="54" font-weight="bold" fill="${INK}" text-anchor="middle">C</text>
    <text x="190" y="340" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">ordinary carbon</text>
    <text x="190" y="372" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">stays the same</text>
    <text x="190" y="400" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">for ever</text>
    <circle cx="540" cy="200" r="98" fill="#fbe1c8" stroke="${C14}" stroke-width="4"/>
    <text x="540" y="218" font-family="${FONT}" font-size="54" font-weight="bold" fill="${C14}" text-anchor="middle">C</text>
    <text x="582" y="182" font-family="${FONT}" font-size="22" font-weight="bold" fill="${C14}">14</text>
    <path d="M 432 150 l -14 -8 M 440 120 l -12 -14 M 650 150 l 14 -8 M 642 120 l 12 -14" stroke="${C14}" stroke-width="3" stroke-linecap="round"/>
    <text x="540" y="340" font-family="${FONT}" font-size="25" font-weight="bold" fill="${C14}" text-anchor="middle">carbon-14</text>
    <text x="540" y="372" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">heavier and unstable</text>
    ${arrow(650, 250, 720, 300, MUTED, 4, 16)}
    <circle cx="760" cy="350" r="46" fill="#e4ecf4" stroke="${N14}" stroke-width="3"/>
    <text x="760" y="366" font-family="${FONT}" font-size="40" font-weight="bold" fill="${N14}" text-anchor="middle">N</text>
    <text x="760" y="432" font-family="${FONT}" font-size="21" font-weight="bold" fill="${N14}" text-anchor="middle">nitrogen</text>
    <text x="610" y="470" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">one day, at a random moment,</text>
    <text x="610" y="498" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">it breaks down</text>
  </svg>`,

  C14_CYCLE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    <rect x="24" y="24" width="1072" height="150" rx="14" fill="#e9f1fa"/>
    <text x="44" y="58" font-family="${FONT}" font-size="20" font-weight="bold" fill="${BLUE}">HIGH IN THE AIR</text>
    ${sun(90, 120, 26)}
    ${arrow(130, 112, 230, 112, '#e8a317', 4, 16)}
    <text x="180" y="150" font-family="${FONT}" font-size="17" fill="${MUTED}" text-anchor="middle">rays from space</text>
    <circle cx="275" cy="112" r="30" fill="#e4ecf4" stroke="${N14}" stroke-width="3"/>
    <text x="275" y="126" font-family="${FONT}" font-size="34" font-weight="bold" fill="${N14}" text-anchor="middle">N</text>
    ${arrow(315, 112, 395, 112, INK, 4, 16)}
    <circle cx="440" cy="112" r="32" fill="#fbe1c8" stroke="${C14}" stroke-width="3"/>
    <text x="440" y="126" font-family="${FONT}" font-size="34" font-weight="bold" fill="${C14}" text-anchor="middle">C</text>
    <text x="440" y="164" font-family="${FONT}" font-size="17" fill="${MUTED}" text-anchor="middle">carbon-14 is made</text>
    ${arrow(482, 112, 560, 112, INK, 4, 16)}
    <text x="660" y="104" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}" text-anchor="middle">carbon dioxide</text>
    <text x="660" y="132" font-family="${FONT}" font-size="17" fill="${MUTED}" text-anchor="middle">a little has carbon-14 in it</text>
    ${arrow(760, 112, 840, 112, INK, 4, 16)}
    <text x="960" y="104" font-family="${FONT}" font-size="22" font-weight="bold" fill="${GREEN}" text-anchor="middle">into plants</text>
    <text x="960" y="132" font-family="${FONT}" font-size="17" fill="${MUTED}" text-anchor="middle">they take in the gas</text>
    ${arrow(960, 180, 960, 236, INK, 4, 16)}
    <path d="M 930 380 q -10 -60 30 -110 q 40 50 30 110 z" fill="#7cc36a" stroke="${INK}" stroke-width="2.5"/>
    <line x1="960" y1="380" x2="960" y2="410" stroke="${INK}" stroke-width="5"/>
    <circle cx="944" cy="320" r="7" fill="#b3261e"/><circle cx="972" cy="336" r="7" fill="#b3261e"/>
    <text x="960" y="260" font-family="${FONT}" font-size="20" font-weight="bold" fill="${GREEN}" text-anchor="middle">a coffee plant</text>
    ${arrow(900, 340, 780, 340, INK, 4, 16)}
    <path d="M 690 316 h 64 l -8 54 q -2 10 -12 10 h -24 q -10 0 -12 -10 z" fill="#ffffff" stroke="${INK}" stroke-width="3"/>
    <rect x="696" y="322" width="52" height="12" fill="#6b3d1f"/>
    <text x="722" y="410" font-family="${FONT}" font-size="20" font-weight="bold" fill="${INK}" text-anchor="middle">food and coffee</text>
    ${arrow(660, 340, 540, 340, INK, 4, 16)}
    <circle cx="440" cy="290" r="32" fill="#f2c9a5" stroke="${INK}" stroke-width="3"/>
    <rect x="404" y="324" width="72" height="80" rx="20" fill="${BLUE}" stroke="${INK}" stroke-width="2.5"/>
    <text x="440" y="428" font-family="${FONT}" font-size="20" font-weight="bold" fill="${INK}" text-anchor="middle">Mr Bowen</text>
    <text x="200" y="290" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">Every living thing:</text>
    <text x="200" y="322" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">1 carbon-14</text>
    <text x="200" y="354" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">in every trillion</text>
    <text x="200" y="386" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}" text-anchor="middle">carbon atoms</text>
  </svg>`,

  DECAY_CURVE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <line x1="110" y1="460" x2="800" y2="460" stroke="${INK}" stroke-width="3"/>
    <line x1="110" y1="460" x2="110" y2="50" stroke="${INK}" stroke-width="3"/>
    <path d="M 110 80 C 220 290 330 380 440 412 S 680 452 790 457" fill="none" stroke="${C14}" stroke-width="5"/>
    <line x1="110" y1="270" x2="275" y2="270" stroke="${MUTED}" stroke-width="2" stroke-dasharray="6 6"/>
    <line x1="275" y1="270" x2="275" y2="460" stroke="${MUTED}" stroke-width="2" stroke-dasharray="6 6"/>
    <line x1="110" y1="365" x2="440" y2="365" stroke="${MUTED}" stroke-width="2" stroke-dasharray="6 6"/>
    <line x1="440" y1="365" x2="440" y2="460" stroke="${MUTED}" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="96" y="88" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">100%</text>
    <text x="96" y="278" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">50%</text>
    <text x="96" y="373" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="end">25%</text>
    <text x="275" y="492" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">5 700</text>
    <text x="440" y="492" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">11 400</text>
    <text x="800" y="530" font-family="${FONT}" font-size="21" font-weight="bold" fill="${INK}" text-anchor="end">years since it died</text>
    <text x="130" y="40" font-family="${FONT}" font-size="21" font-weight="bold" fill="${INK}">carbon-14 left</text>
    ${leader(520, 230, 300, 284)}
    <text x="532" y="228" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">1 half-life</text>
  </svg>`,

  ANS_DINO_YES: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${leftHand(BLUE)}
    <text x="452" y="130" font-family="${FONT}" font-size="96" font-weight="bold" fill="${BLUE}" text-anchor="middle">YES</text>
    <text x="452" y="236" font-family="${FONT}" font-size="34" font-weight="bold" fill="${BLUE}" text-anchor="middle">carbon dating</text>
    <text x="452" y="284" font-family="${FONT}" font-size="34" font-weight="bold" fill="${BLUE}" text-anchor="middle">works on it</text>
  </svg>`,

  ANS_DINO_NO: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" class="w-full h-full">
    ${plate(720, 320)}
    ${rightHand(KEY)}
    <text x="260" y="130" font-family="${FONT}" font-size="96" font-weight="bold" fill="${KEY}" text-anchor="middle">NO</text>
    <text x="260" y="236" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">it does not</text>
    <text x="260" y="284" font-family="${FONT}" font-size="34" font-weight="bold" fill="${KEY}" text-anchor="middle">work</text>
  </svg>`,

  TOO_OLD: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <line x1="60" y1="420" x2="800" y2="420" stroke="${INK}" stroke-width="3"/>
    <rect x="70" y="80" width="56" height="340" rx="6" fill="${C14}"/>
    <rect x="148" y="250" width="56" height="170" rx="6" fill="${C14}"/>
    <rect x="226" y="335" width="56" height="85" rx="6" fill="${C14}"/>
    <rect x="304" y="378" width="56" height="42" rx="6" fill="${C14}"/>
    <rect x="382" y="399" width="56" height="21" rx="4" fill="${C14}"/>
    <rect x="460" y="409" width="56" height="11" rx="3" fill="${C14}"/>
    <rect x="538" y="415" width="56" height="5" rx="2" fill="${C14}"/>
    <rect x="616" y="417" width="56" height="3" rx="1" fill="${C14}"/>
    <rect x="694" y="418" width="56" height="2" rx="1" fill="${C14}"/>
    <text x="98" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">0</text>
    <text x="176" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">1</text>
    <text x="254" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">2</text>
    <text x="332" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">3</text>
    <text x="410" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">4</text>
    <text x="488" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">5</text>
    <text x="566" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">6</text>
    <text x="644" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">7</text>
    <text x="722" y="452" font-family="${FONT}" font-size="20" fill="${MUTED}" text-anchor="middle">8</text>
    <text x="430" y="490" font-family="${FONT}" font-size="21" font-weight="bold" fill="${INK}" text-anchor="middle">half-lives</text>
    <text x="136" y="98" font-family="${FONT}" font-size="22" font-weight="bold" fill="${INK}">100%</text>
    ${leader(640, 300, 722, 412)}
    <text x="560" y="250" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">0.4% left</text>
    <text x="560" y="280" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">45 600 years</text>
    <text x="430" y="530" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">too little to measure after about 50 000 years</text>
  </svg>`,

  CLOCKS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 440" class="w-full h-full">
    ${plate(1120, 440)}
    <rect x="24" y="24" width="344" height="392" rx="16" fill="#fdf1e3" stroke="${RULE}" stroke-width="2"/>
    <rect x="388" y="24" width="344" height="392" rx="16" fill="#f2ecf7" stroke="${RULE}" stroke-width="2"/>
    <rect x="752" y="24" width="344" height="392" rx="16" fill="#e2f2f6" stroke="${RULE}" stroke-width="2"/>
    <path d="M 166 70 h 60 l -30 40 l 30 40 h -60 l 30 -40 z" fill="#fff6e8" stroke="${INK}" stroke-width="3"/>
    <path d="M 176 140 h 40 l -20 -18 z" fill="${C14}"/>
    <text x="196" y="190" font-family="${FONT}" font-size="26" font-weight="bold" fill="${C14}" text-anchor="middle">carbon-14</text>
    <text x="196" y="226" font-family="${FONT}" font-size="21" fill="${INK}" text-anchor="middle">half-life: 5 700 years</text>
    <text x="196" y="290" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">bones, wood, charcoal</text>
    <text x="196" y="320" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">things that were alive</text>
    <text x="196" y="384" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}" text-anchor="middle">up to 50 000 years</text>
    <path d="M 520 60 h 80 l -40 50 l 40 50 h -80 l 40 -50 z" fill="#f7f1fb" stroke="${INK}" stroke-width="3"/>
    <path d="M 534 150 h 52 l -26 -24 z" fill="${PURPLE}"/>
    <text x="560" y="190" font-family="${FONT}" font-size="26" font-weight="bold" fill="${PURPLE}" text-anchor="middle">potassium-40</text>
    <text x="560" y="226" font-family="${FONT}" font-size="21" fill="${INK}" text-anchor="middle">half-life: 1.25 billion years</text>
    <text x="560" y="290" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">volcanic rock and ash</text>
    <text x="560" y="320" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">around fossils</text>
    <text x="560" y="384" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}" text-anchor="middle">millions of years</text>
    <path d="M 874 50 h 100 l -50 60 l 50 60 h -100 l 50 -60 z" fill="#eef8fb" stroke="${INK}" stroke-width="3"/>
    <path d="M 890 160 h 68 l -34 -30 z" fill="${TEAL}"/>
    <text x="924" y="196" font-family="${FONT}" font-size="26" font-weight="bold" fill="${TEAL}" text-anchor="middle">uranium-238</text>
    <text x="924" y="230" font-family="${FONT}" font-size="21" fill="${INK}" text-anchor="middle">half-life: 4.5 billion years</text>
    <text x="924" y="290" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">crystals, the oldest rocks,</text>
    <text x="924" y="320" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">meteorites</text>
    <text x="924" y="384" font-family="${FONT}" font-size="21" font-weight="bold" fill="${KEY}" text-anchor="middle">billions of years</text>
  </svg>`,

  DINO_LAYERS: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <rect x="40" y="40" width="520" height="80" fill="#e7d8bf" stroke="${INK}" stroke-width="2"/>
    <rect x="40" y="120" width="520" height="40" fill="#9a9a9a" stroke="${INK}" stroke-width="2"/>
    <rect x="40" y="160" width="520" height="190" fill="#d9b98f" stroke="${INK}" stroke-width="2"/>
    <rect x="40" y="350" width="520" height="40" fill="#9a9a9a" stroke="${INK}" stroke-width="2"/>
    <rect x="40" y="390" width="520" height="120" fill="#c9a57a" stroke="${INK}" stroke-width="2"/>
    <path d="M 140 260 q 30 -30 70 -10 q 30 -10 60 0 q 60 -20 100 10 q 20 10 50 0 q -20 30 -60 24 q -40 10 -90 0 q -60 10 -110 -6 q -20 -4 -20 -18 z" fill="#f4ecdc" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="140" cy="262" r="16" fill="#f4ecdc" stroke="${INK}" stroke-width="2.5"/>
    <circle cx="418" cy="262" r="14" fill="#f4ecdc" stroke="${INK}" stroke-width="2.5"/>
    ${leader(600, 140, 520, 140)}
    <text x="612" y="134" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">volcanic ash</text>
    <text x="612" y="162" font-family="${FONT}" font-size="20" fill="${INK}">66 million years</text>
    ${leader(600, 270, 420, 270)}
    <text x="612" y="276" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">dinosaur fossil</text>
    ${leader(600, 370, 520, 370)}
    <text x="612" y="364" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">volcanic ash</text>
    <text x="612" y="392" font-family="${FONT}" font-size="20" fill="${INK}">68 million years</text>
  </svg>`,

  // ── The age of the Earth ──────────────────────────────────────────────────
  ZIRCON: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <path d="M 200 70 l 90 70 v 220 l -90 70 l -90 -70 v -220 z" fill="#fbe7d0" stroke="${INK}" stroke-width="3"/>
    ${dots(150, 170, 4, 6, 33, 9, () => '#3aa76d')}
    <text x="200" y="476" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">when it forms</text>
    <text x="200" y="508" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">uranium, no lead</text>
    ${arrow(330, 250, 480, 250, MUTED, 4, 18)}
    <text x="405" y="236" font-family="${FONT}" font-size="20" font-weight="bold" fill="${MUTED}" text-anchor="middle">time</text>
    <path d="M 620 70 l 90 70 v 220 l -90 70 l -90 -70 v -220 z" fill="#fbe7d0" stroke="${INK}" stroke-width="3"/>
    ${dots(570, 170, 4, 6, 33, 9, (k) => ([1, 4, 6, 9, 10, 13, 15, 16, 19, 20, 22].includes(k) ? '#6b7280' : '#3aa76d'))}
    <text x="620" y="476" font-family="${FONT}" font-size="25" font-weight="bold" fill="${INK}" text-anchor="middle">billions of years later</text>
    <text x="620" y="508" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">some uranium is now lead</text>
    <circle cx="716" cy="80" r="10" fill="#3aa76d" stroke="${INK}" stroke-width="1.2"/>
    <text x="732" y="87" font-family="${FONT}" font-size="19" fill="${INK}">uranium</text>
    <circle cx="716" cy="112" r="10" fill="#6b7280" stroke="${INK}" stroke-width="1.2"/>
    <text x="732" y="119" font-family="${FONT}" font-size="19" fill="${INK}">lead</text>
  </svg>`,

  METEORITE: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 560" class="w-full h-full">
    ${plate(840, 560)}
    <path d="M 160 120 q 120 -70 280 -40 q 170 30 200 160 q 30 140 -110 200 q -150 60 -300 0 q -150 -60 -140 -180 q 10 -90 70 -140 z" fill="#5d6168" stroke="${INK}" stroke-width="4"/>
    <circle cx="250" cy="200" r="9" fill="#9aa0a8"/><circle cx="330" cy="330" r="12" fill="#9aa0a8"/><circle cx="520" cy="190" r="10" fill="#9aa0a8"/><circle cx="560" cy="350" r="8" fill="#9aa0a8"/><circle cx="420" cy="420" r="9" fill="#9aa0a8"/>
    <circle cx="300" cy="260" r="6" fill="#9aa0a8"/><circle cx="460" cy="290" r="7" fill="#9aa0a8"/><circle cx="600" cy="250" r="6" fill="#9aa0a8"/>
    <path d="M 380 170 q 30 -20 54 4 q 10 30 -20 40 q -40 0 -34 -44 z" fill="#f4f1ea" stroke="${INK}" stroke-width="2"/>
    <path d="M 230 320 q 20 -24 50 -6 q 6 26 -24 32 q -30 -2 -26 -26 z" fill="#f4f1ea" stroke="${INK}" stroke-width="2"/>
    <path d="M 500 380 q 24 -18 44 0 q 4 22 -22 26 q -26 -4 -22 -26 z" fill="#f4f1ea" stroke="${INK}" stroke-width="2"/>
    ${leader(560, 90, 430, 180)}
    <text x="572" y="84" font-family="${FONT}" font-size="22" font-weight="bold" fill="${KEY}">white specks (CAIs)</text>
    <text x="572" y="112" font-family="${FONT}" font-size="20" fill="${INK}">4 567 million years old</text>
    <text x="420" y="520" font-family="${FONT}" font-size="21" fill="${MUTED}" text-anchor="middle">a cut meteorite, like the one that fell in Mexico in 1969</text>
  </svg>`,
}
