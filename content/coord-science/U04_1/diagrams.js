// content/coord-science/U04_1/diagrams.js
// Teaching diagrams for C4.01 Electrolysis, drawn to match the Cambridge IGCSE
// Coursebook: flat line art on paper-white, a thin ink outline on every shape,
// pale flat fills, and key words set in the book's orange sitting in the margin
// on a hairline leader line.
//
// House rules:
//  · every diagram opens with a white plate, so artwork is legible on a light
//    OR dark slide and never depends on the page's text colour;
//  · label <text> is written out literally (not built by a helper) so
//    `npm run audit:svg` can actually measure it — anything interpolated is
//    invisible to the audit;
//  · label text lives in the margins, never on top of the drawing;
//  · charge signs (+ / −) are drawn as line shapes, not text, so they stay
//    crisp and never depend on a font.

const INK = '#2b2b2b'
const KEY = '#c25e12' // the book's key-word orange
const LEAD = '#7c8a95'
const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"

// Shape palette.
const METAL_F = '#f2ded0', METAL_S = '#c98a5e' // copper-ish metal
const ELYTE_F = '#dbeafe', ELYTE_S = '#7ba7d4' // pale-blue electrolyte
const ELEC_F = '#4b5563', ELEC_S = '#2b2b2b' // dark graphite electrode
const POS_F = '#fde2e4', POS_S = '#c2185b' // positive ion (warm)
const NEG_F = '#dcefe4', NEG_S = '#2f8f5b' // negative ion (cool)
const ELECTRON = '#1a5fa8' // free electron
const LEAD_M = '#9aa3ad' // metallic lead (grey)
const BROMINE = '#a8571f' // brown bromine vapour

/** White paper plate + a hairline frame. Every diagram starts with this. */
const plate = (w, h) => `<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff"/>
    <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="13" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>`

/** A leader line from a label to the thing, ending in a small dot. */
const lead = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${LEAD}" stroke-width="1.4"/>
    <circle cx="${x2}" cy="${y2}" r="3" fill="${LEAD}"/>`

/** A plus sign drawn as two short strokes (not text). */
const plus = (x, y, s = 5, col = INK, w = 2.2) => `<line x1="${x - s}" y1="${y}" x2="${x + s}" y2="${y}" stroke="${col}" stroke-width="${w}"/>
    <line x1="${x}" y1="${y - s}" x2="${x}" y2="${y + s}" stroke="${col}" stroke-width="${w}"/>`

/** A minus sign drawn as one short stroke (not text). */
const minus = (x, y, s = 5, col = INK, w = 2.2) => `<line x1="${x - s}" y1="${y}" x2="${x + s}" y2="${y}" stroke="${col}" stroke-width="${w}"/>`

/** A small free electron: a dark dot carrying a minus. */
const electron = (x, y) => `<circle cx="${x}" cy="${y}" r="6" fill="${ELECTRON}"/>
    ${minus(x, y, 3, '#ffffff', 1.8)}`

/** A positive ion: warm circle with a plus. */
const posIon = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${POS_F}" stroke="${POS_S}" stroke-width="2"/>
    ${plus(x, y, r * 0.4, POS_S, 2)}`

/** A negative ion: cool circle with a minus. */
const negIon = (x, y, r = 12) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${NEG_F}" stroke="${NEG_S}" stroke-width="2"/>
    ${minus(x, y, r * 0.4, NEG_S, 2)}`

// ───────────────────────────────────────────────────────────────────────────
// 1 · Conductivity in a metal: fixed positive ions, free electrons drifting.
//     The point of the picture is that the metal itself does not change.
// ───────────────────────────────────────────────────────────────────────────
const METAL_CONDUCTION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" class="w-full h-full">
    ${plate(300, 200)}
    <!-- the metal block -->
    <rect x="55" y="70" width="190" height="88" rx="8" fill="${METAL_F}" stroke="${METAL_S}" stroke-width="2.5"/>
    <!-- fixed metal ions in a lattice -->
    ${[80, 130, 180, 220].map((x) => [96, 132].map((y) => posIon(x, y, 11)).join('')).join('')}
    <!-- free electrons drifting between them -->
    ${electron(108, 84)}${electron(158, 84)}${electron(206, 120)}${electron(108, 146)}${electron(200, 84)}
    <!-- direction of flow -->
    <line x1="70" y1="180" x2="228" y2="180" stroke="${ELECTRON}" stroke-width="2.4"/>
    <path d="M 228 180 l -9 -5 l 0 10 z" fill="${ELECTRON}"/>
    <text x="150" y="26" font-family="${FONT}" font-size="14" font-weight="700" fill="${INK}" text-anchor="middle">A metal conducts — but stays the same metal</text>
    <text x="150" y="46" font-family="${FONT}" font-size="12" fill="${KEY}" text-anchor="middle">no chemical change</text>
    <text x="66" y="197" font-family="${FONT}" font-size="11.5" fill="${ELECTRON}">electrons flow</text>
    <text x="253" y="100" font-family="${FONT}" font-size="11" fill="${KEY}">metal</text>
    <text x="253" y="114" font-family="${FONT}" font-size="11" fill="${KEY}">ions</text>
    <text x="253" y="140" font-family="${FONT}" font-size="11" fill="${ELECTRON}">free</text>
    <text x="253" y="154" font-family="${FONT}" font-size="11" fill="${ELECTRON}">electrons</text>
  </svg>`

// ───────────────────────────────────────────────────────────────────────────
// 2 · The same ionic compound, solid: ions locked in a fixed lattice.
// ───────────────────────────────────────────────────────────────────────────
const SOLID_LATTICE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 210" class="w-full h-full">
    ${plate(260, 210)}
    <rect x="46" y="58" width="168" height="120" rx="8" fill="#f6f8fa" stroke="#cbd5e1" stroke-width="2"/>
    <!-- alternating + / − ions, held in a grid -->
    ${[78, 130, 182].map((x, i) => [90, 146].map((y, j) => (i + j) % 2 === 0 ? posIon(x, y) : negIon(x, y)).join('')).join('')}
    <!-- bond lines showing they cannot move -->
    <line x1="78" y1="90" x2="130" y2="90" stroke="#b6c0cc" stroke-width="1.6"/>
    <line x1="130" y1="90" x2="182" y2="90" stroke="#b6c0cc" stroke-width="1.6"/>
    <line x1="78" y1="146" x2="130" y2="146" stroke="#b6c0cc" stroke-width="1.6"/>
    <line x1="130" y1="146" x2="182" y2="146" stroke="#b6c0cc" stroke-width="1.6"/>
    <line x1="78" y1="90" x2="78" y2="146" stroke="#b6c0cc" stroke-width="1.6"/>
    <line x1="130" y1="90" x2="130" y2="146" stroke="#b6c0cc" stroke-width="1.6"/>
    <line x1="182" y1="90" x2="182" y2="146" stroke="#b6c0cc" stroke-width="1.6"/>
    <text x="130" y="30" font-family="${FONT}" font-size="15" font-weight="700" fill="${INK}" text-anchor="middle">Solid</text>
    <text x="130" y="49" font-family="${FONT}" font-size="12" fill="${KEY}" text-anchor="middle">ions locked in place — cannot conduct</text>
  </svg>`

// ───────────────────────────────────────────────────────────────────────────
// 3 · Molten or dissolved: the same ions, now free to move.
// ───────────────────────────────────────────────────────────────────────────
const MOLTEN_IONS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 210" class="w-full h-full">
    ${plate(260, 210)}
    <rect x="46" y="58" width="168" height="120" rx="8" fill="${ELYTE_F}" stroke="${ELYTE_S}" stroke-width="2"/>
    <!-- ions scattered, each with a little motion arrow -->
    ${posIon(80, 86)}${negIon(140, 78)}${posIon(186, 100)}
    ${negIon(72, 148)}${posIon(128, 150)}${negIon(184, 152)}
    <path d="M 96 82 l 14 -5" stroke="${INK}" stroke-width="1.4" fill="none"/><path d="M 110 77 l -6 -1 l 3 5 z" fill="${INK}"/>
    <path d="M 156 84 l 12 8" stroke="${INK}" stroke-width="1.4" fill="none"/><path d="M 168 92 l -1 -6 l -5 3 z" fill="${INK}"/>
    <path d="M 128 136 l -8 -12" stroke="${INK}" stroke-width="1.4" fill="none"/><path d="M 120 124 l 0 6 l 5 -3 z" fill="${INK}"/>
    <text x="130" y="30" font-family="${FONT}" font-size="15" font-weight="700" fill="${INK}" text-anchor="middle">Molten or dissolved</text>
    <text x="130" y="49" font-family="${FONT}" font-size="12" fill="${KEY}" text-anchor="middle">ions free to move — can conduct</text>
  </svg>`

// ───────────────────────────────────────────────────────────────────────────
// 4 · A simple electrolytic cell: power supply, two inert electrodes dipping
//     into the electrolyte, anode (+) and cathode (−).
// ───────────────────────────────────────────────────────────────────────────
const ELECTROLYTIC_CELL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 240" class="w-full h-full">
    ${plate(320, 240)}
    <!-- power supply -->
    <rect x="120" y="20" width="80" height="30" rx="5" fill="#fff7ed" stroke="${KEY}" stroke-width="2"/>
    <line x1="150" y1="27" x2="150" y2="43" stroke="${INK}" stroke-width="3.4"/>
    <line x1="162" y1="31" x2="162" y2="39" stroke="${INK}" stroke-width="2"/>
    ${minus(139, 35, 5, INK, 2.4)}
    ${plus(178, 35, 5, INK, 2.4)}
    <!-- wires down to the electrodes -->
    <path d="M 130 50 L 130 78 L 108 78" fill="none" stroke="${INK}" stroke-width="2"/>
    <path d="M 190 50 L 190 78 L 212 78" fill="none" stroke="${INK}" stroke-width="2"/>
    <line x1="108" y1="78" x2="108" y2="96" stroke="${INK}" stroke-width="2"/>
    <line x1="212" y1="78" x2="212" y2="96" stroke="${INK}" stroke-width="2"/>
    <!-- beaker of electrolyte -->
    <path d="M 66 118 L 66 210 Q 66 220 76 220 L 244 220 Q 254 220 254 210 L 254 118" fill="${ELYTE_F}" stroke="${ELEC_S}" stroke-width="2.2"/>
    <path d="M 66 132 L 254 132" stroke="${ELYTE_S}" stroke-width="1.6"/>
    <!-- electrodes -->
    <rect x="101" y="96" width="14" height="96" rx="2" fill="${ELEC_F}" stroke="${ELEC_S}" stroke-width="1.6"/>
    <rect x="205" y="96" width="14" height="96" rx="2" fill="${ELEC_F}" stroke="${ELEC_S}" stroke-width="1.6"/>
    <!-- labels -->
    <text x="160" y="14" font-family="${FONT}" font-size="12.5" font-weight="700" fill="${KEY}" text-anchor="middle">power supply</text>
    ${lead(66, 70, 108, 110)}
    <text x="20" y="66" font-family="${FONT}" font-size="12" font-weight="700" fill="${INK}">cathode (−)</text>
    <text x="20" y="80" font-family="${FONT}" font-size="10.5" fill="${LEAD}">negative</text>
    ${lead(268, 70, 212, 110)}
    <text x="252" y="66" font-family="${FONT}" font-size="12" font-weight="700" fill="${INK}">anode (+)</text>
    <text x="252" y="80" font-family="${FONT}" font-size="10.5" fill="${LEAD}">positive</text>
    ${lead(276, 170, 244, 175)}
    <text x="264" y="150" font-family="${FONT}" font-size="11" fill="${KEY}">liquid</text>
    <text x="264" y="164" font-family="${FONT}" font-size="11" fill="${KEY}">electrolyte</text>
    <text x="160" y="212" font-family="${FONT}" font-size="10.5" fill="${LEAD}" text-anchor="middle">inert graphite electrodes</text>
  </svg>`

// ───────────────────────────────────────────────────────────────────────────
// 5 · Molten lead(II) bromide in the cell. Pb²⁺ ions travel to the cathode and
//     become lead; Br⁻ ions travel to the anode and become bromine.
// ───────────────────────────────────────────────────────────────────────────
const LEAD_BROMIDE_CELL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 250" class="w-full h-full">
    ${plate(320, 250)}
    <!-- power supply -->
    <rect x="120" y="18" width="80" height="30" rx="5" fill="#fff7ed" stroke="${KEY}" stroke-width="2"/>
    <line x1="150" y1="25" x2="150" y2="41" stroke="${INK}" stroke-width="3.4"/>
    <line x1="162" y1="29" x2="162" y2="37" stroke="${INK}" stroke-width="2"/>
    ${minus(139, 33, 5, INK, 2.4)}
    ${plus(178, 33, 5, INK, 2.4)}
    <path d="M 130 48 L 130 74 L 108 74" fill="none" stroke="${INK}" stroke-width="2"/>
    <path d="M 190 48 L 190 74 L 212 74" fill="none" stroke="${INK}" stroke-width="2"/>
    <line x1="108" y1="74" x2="108" y2="92" stroke="${INK}" stroke-width="2"/>
    <line x1="212" y1="74" x2="212" y2="92" stroke="${INK}" stroke-width="2"/>
    <!-- crucible of molten lead bromide -->
    <path d="M 60 116 L 60 216 Q 60 226 70 226 L 250 226 Q 260 226 260 216 L 260 116" fill="#fbeee0" stroke="${ELEC_S}" stroke-width="2.2"/>
    <path d="M 60 130 L 260 130" stroke="#e6c9a8" stroke-width="1.6"/>
    <!-- electrodes -->
    <rect x="101" y="92" width="14" height="108" rx="2" fill="${ELEC_F}" stroke="${ELEC_S}" stroke-width="1.6"/>
    <rect x="205" y="92" width="14" height="108" rx="2" fill="${ELEC_F}" stroke="${ELEC_S}" stroke-width="1.6"/>
    <!-- lead building up on the cathode -->
    <rect x="97" y="188" width="22" height="14" rx="3" fill="${LEAD_M}" stroke="#6b7280" stroke-width="1.4"/>
    <!-- bromine vapour at the anode -->
    <ellipse cx="212" cy="150" rx="15" ry="11" fill="${BROMINE}" opacity="0.45"/>
    <ellipse cx="212" cy="126" rx="12" ry="9" fill="${BROMINE}" opacity="0.30"/>
    <!-- ions moving to their electrodes -->
    ${posIon(150, 168, 11)}<path d="M 138 166 l -14 4" stroke="${POS_S}" stroke-width="1.6" fill="none"/><path d="M 124 170 l 7 1 l -3 -6 z" fill="${POS_S}"/>
    ${negIon(172, 176, 11)}<path d="M 183 174 l 14 -6" stroke="${NEG_S}" stroke-width="1.6" fill="none"/><path d="M 197 168 l -7 0 l 3 6 z" fill="${NEG_S}"/>
    <!-- labels -->
    ${lead(58, 66, 108, 96)}
    <text x="16" y="62" font-family="${FONT}" font-size="12" font-weight="700" fill="${INK}">cathode (−)</text>
    ${lead(300, 66, 212, 96)}
    <text x="256" y="62" font-family="${FONT}" font-size="12" font-weight="700" fill="${INK}">anode (+)</text>
    <text x="86" y="220" font-family="${FONT}" font-size="11" font-weight="700" fill="${INK}" text-anchor="middle">lead (Pb)</text>
    ${lead(300, 150, 227, 150)}
    <text x="252" y="146" font-family="${FONT}" font-size="11" font-weight="700" fill="${BROMINE}">bromine</text>
    <text x="252" y="160" font-family="${FONT}" font-size="11" font-weight="700" fill="${BROMINE}">Br₂ (gas)</text>
    <text x="160" y="245" font-family="${FONT}" font-size="11" fill="${KEY}" text-anchor="middle">Pb²⁺ ions → cathode      Br⁻ ions → anode</text>
  </svg>`

export const DIAGRAMS = {
  METAL_CONDUCTION,
  SOLID_LATTICE,
  MOLTEN_IONS,
  ELECTROLYTIC_CELL,
  LEAD_BROMIDE_CELL,
}
