// content/y7-science/U02_3/diagrams.js
// Teaching diagrams for 2.3 Explaining changes of state. Same house style as
// 2.1 and 2.2: flat line art on paper-white, thin ink outlines (#2b2b2b), pale
// flat fills, key words in the Learner's Book orange, and every label <text>
// written out literally so `npm run audit:svg` can measure it.

const INK = '#2b2b2b'
const KEY = '#c25e12'
/* const RULE = '#b6c1c9' */
const WARM = '#c8102e'

const SOLID_F = '#ded7c6', SOLID_S = '#8a7f68'
const LIQ_F = '#bfe0f2', LIQ_S = '#2f7fb0'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

const arrowR = (x1, x2, y, c) => `<line x1="${x1}" y1="${y}" x2="${x2 - 11}" y2="${y}" stroke="${c}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M ${x2} ${y} l -13 -8 l 0 16 z" fill="${c}"/>`

// A single row of particles as circles. ox,oy = top-left of grid, cols×rows,
// spacing s, with an optional random jitter for the "vibrating more" version.
function particleGrid(ox, oy, cols, rows, s, fill, stroke, jitter = 0) {
  const r = s * 0.38
  let out = ''
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = ox + col * s + s / 2 + (jitter ? (Math.sin(col * 7 + row * 13) * jitter) : 0)
      const cy = oy + row * s + s / 2 + (jitter ? (Math.cos(col * 11 + row * 5) * jitter) : 0)
      out += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`
    }
  }
  return out
}

// Deterministic "random" positions for the liquid panel.
function liquidParticles(ox, oy, w, h, n, fill, stroke) {
  const r = 9
  const positions = []
  for (let i = 0; i < n; i++) {
    const angle = i * 2.39996
    const rr = 0.3 + (i * 0.618) % 0.6
    positions.push({
      cx: ox + w * 0.15 + (w * 0.7) * ((Math.sin(angle) * rr + 1) / 2),
      cy: oy + h * 0.15 + (h * 0.7) * ((Math.cos(angle * 1.3) * rr + 1) / 2),
    })
  }
  return positions.map(({ cx, cy }) =>
    `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`
  ).join('')
}

export const DIAGRAMS = {
  // The key diagram for 2.3: what happens to the particles when a solid is
  // heated until it melts. Three panels: cold solid → heated solid (expanding)
  // → liquid (melted). This is the chain the class copies into the notebook.
  HEATING_TO_MELTING: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 420" class="w-full h-full">
    ${plate(940, 420)}

    <text x="470" y="44" font-family="${FONT}" font-size="20" font-weight="bold" fill="${INK}" text-anchor="middle">What happens to the particles when a solid is heated</text>

    <!-- Panel 1: cold solid -->
    <rect x="30" y="70" width="240" height="230" rx="12" fill="${SOLID_F}" stroke="${SOLID_S}" stroke-width="2"/>
    ${particleGrid(50, 90, 5, 4, 42, '#6e8fa8', '#3d6580', 0)}
    <text x="150" y="328" font-family="${FONT}" font-size="18" font-weight="bold" fill="${INK}" text-anchor="middle">Solid</text>
    <text x="150" y="350" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">fixed pattern, particles</text>
    <text x="150" y="368" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">vibrate on the spot</text>

    <!-- Arrow 1 -->
    ${arrowR(278, 348, 185, WARM)}
    <text x="313" y="168" font-family="${FONT}" font-size="13" font-weight="bold" fill="${KEY}" text-anchor="middle">heat energy</text>
    <text x="313" y="184" font-family="${FONT}" font-size="13" font-weight="bold" fill="${KEY}" text-anchor="middle">transferred</text>

    <!-- Panel 2: heated solid (expanding) -->
    <rect x="355" y="70" width="240" height="230" rx="12" fill="${SOLID_F}" stroke="${SOLID_S}" stroke-width="2" stroke-dasharray="6 4"/>
    ${particleGrid(370, 82, 5, 4, 46, '#6e8fa8', '#3d6580', 4)}
    <text x="475" y="328" font-family="${FONT}" font-size="18" font-weight="bold" fill="${WARM}" text-anchor="middle">Expanding</text>
    <text x="475" y="350" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">particles vibrate more,</text>
    <text x="475" y="368" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">take up more space</text>

    <!-- Arrow 2 -->
    ${arrowR(603, 663, 185, WARM)}
    <text x="633" y="168" font-family="${FONT}" font-size="13" font-weight="bold" fill="${KEY}" text-anchor="middle">forces</text>
    <text x="633" y="184" font-family="${FONT}" font-size="13" font-weight="bold" fill="${KEY}" text-anchor="middle">can't hold</text>

    <!-- Panel 3: liquid (melted) -->
    <rect x="670" y="70" width="240" height="230" rx="12" fill="${LIQ_F}" stroke="${LIQ_S}" stroke-width="2"/>
    ${liquidParticles(680, 80, 220, 210, 20, '#6e8fa8', '#3d6580')}
    <text x="790" y="328" font-family="${FONT}" font-size="18" font-weight="bold" fill="${LIQ_S}" text-anchor="middle">Liquid</text>
    <text x="790" y="350" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">particles slide past</text>
    <text x="790" y="368" font-family="${FONT}" font-size="14" fill="${INK}" text-anchor="middle">each other — it melts</text>

    <!-- Key at the bottom -->
    <rect x="220" y="390" width="16" height="12" rx="3" fill="${KEY}"/>
    <text x="244" y="401" font-family="${FONT}" font-size="14" font-weight="bold" fill="${INK}">Key words: heat energy, transferred, attractive force, expand</text>
  </svg>`,
}
