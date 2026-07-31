// content/y7-science/U01_1/diagrams.js
// Teaching diagrams for 1.1 Cells. House style: dark ink on light, sans-serif
// labels sitting in the margins (outside any <rect>) with short leader lines, so
// they pass `npm run audit:svg`. Colours read on both light and dark canvases.

const LEADER = '#94a3b8'

// Label helper: text + a short leader line, kept clear of the inner rects.
const label = (x, y, text, anchor, lx, ly, tx, ty, color = 'currentColor') => `
  <line x1="${lx}" y1="${ly}" x2="${tx}" y2="${ty}" stroke="${LEADER}" stroke-width="2"/>
  <circle cx="${tx}" cy="${ty}" r="3" fill="${LEADER}"/>
  <text x="${x}" y="${y}" font-family="sans-serif" font-size="16" font-weight="bold" fill="${color}" text-anchor="${anchor}">${text}</text>`

export const DIAGRAMS = {
  // ─────────────────────────────────────────────────────────────────────────
  // Animal cell: membrane, cytoplasm, nucleus (+ nucleolus), mitochondria.
  // ─────────────────────────────────────────────────────────────────────────
  ANIMAL_CELL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 470" class="w-full h-full drop-shadow-md">
    <ellipse cx="350" cy="235" rx="210" ry="150" fill="#f8fafc" stroke="#ec4899" stroke-width="4"/>
    <ellipse cx="350" cy="235" rx="200" ry="140" fill="#f1f5f9" stroke="#f9a8d4" stroke-width="1.5"/>
    <!-- Nucleus (Purple) -->
    <circle cx="360" cy="220" r="62" fill="#d8b4fe" stroke="#9333ea" stroke-width="3"/>
    <circle cx="378" cy="206" r="20" fill="#9333ea"/>
    <!-- Mitochondria -->
    <ellipse cx="220" cy="315" rx="42" ry="20" fill="#fecaca" stroke="#ef4444" stroke-width="2.5" transform="rotate(-20 220 315)"/>
    <path d="M 196 315 Q 220 305 244 315" fill="none" stroke="#ef4444" stroke-width="2"/>
    <ellipse cx="470" cy="150" rx="38" ry="18" fill="#fecaca" stroke="#ef4444" stroke-width="2.5" transform="rotate(25 470 150)"/>
    <path d="M 448 148 Q 470 140 492 152" fill="none" stroke="#ef4444" stroke-width="2"/>
    ${[[250,180],[300,320],[430,300],[470,235]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#cbd5e1"/>`).join('')}

    ${label(14, 70, 'Cell membrane', 'start', 108, 78, 178, 130)}
    ${label(14, 250, 'Cytoplasm', 'start', 92, 244, 200, 250)}
    ${label(686, 120, 'Nucleus', 'end', 620, 128, 400, 190)}
    ${label(686, 355, 'Mitochondria', 'end', 585, 348, 250, 320)}
  </svg>`,

  // ─────────────────────────────────────────────────────────────────────────
  // Plant cell: cell wall + membrane, big sap vacuole, nucleus, chloroplasts,
  // cytoplasm, mitochondria. Everything the animal cell has, plus the extras.
  // ─────────────────────────────────────────────────────────────────────────
  PLANT_CELL: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 470" class="w-full h-full drop-shadow-md">
    <!-- Cell Wall -->
    <rect x="150" y="70" width="400" height="330" rx="20" fill="#fef3c7" stroke="#d97706" stroke-width="4"/>
    <!-- Cell Membrane -->
    <rect x="164" y="84" width="372" height="302" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
    <!-- Sap Vacuole -->
    <rect x="222" y="120" width="273" height="230" rx="30" fill="#e0f2fe" stroke="#38bdf8" stroke-width="3"/>
    <!-- Nucleus -->
    <circle cx="188" cy="200" r="40" fill="#d8b4fe" stroke="#9333ea" stroke-width="3"/>
    <circle cx="199" cy="190" r="14" fill="#9333ea"/>
    <!-- Chloroplasts -->
    ${[[210,310],[250,335],[300,355],[410,110],[470,140],[455,200],[195,120],[440,310]].map(([x,y]) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="12" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
    <circle cx="${x-6}" cy="${y}" r="2" fill="#16a34a"/>
    <circle cx="${x+6}" cy="${y}" r="2" fill="#16a34a"/>
    <circle cx="${x}" cy="${y-4}" r="2" fill="#16a34a"/>`).join('')}
    <!-- Mitochondria -->
    <ellipse cx="380" cy="340" rx="30" ry="14" fill="#fecaca" stroke="#ef4444" stroke-width="2.5" transform="rotate(-15 380 340)"/>
    <path d="M 360 340 Q 380 330 400 340" fill="none" stroke="#ef4444" stroke-width="2"/>

    ${label(14, 62, 'Cell wall', 'start', 90, 66, 150, 80)}
    ${label(14, 150, 'Chloroplast', 'start', 108, 154, 195, 120)}
    ${label(14, 330, 'Cytoplasm', 'start', 92, 324, 175, 300)}
    ${label(686, 70, 'Cell membrane', 'end', 575, 78, 528, 92)}
    ${label(686, 190, 'Nucleus', 'end', 620, 190, 228, 200)}
    ${label(686, 260, 'Sap vacuole', 'end', 592, 260, 495, 235)}
    ${label(686, 350, 'Mitochondrion', 'end', 583, 344, 405, 345)}
  </svg>`,

  // ─────────────────────────────────────────────────────────────────────────
  // How a microscope magnifies: light travels up through the specimen, two
  // curved lenses bend it, and a much bigger image reaches your eye.
  // ─────────────────────────────────────────────────────────────────────────
  MICROSCOPE_LIGHT: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300" class="w-full h-full drop-shadow-md">
    <defs><marker id="mi-up" viewBox="0 0 10 10" refX="5" refY="2" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 10 L5 0 L10 10 z" fill="#f59e0b"/></marker></defs>
    <circle cx="150" cy="270" r="16" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
    <line x1="150" y1="252" x2="150" y2="228" stroke="#f59e0b" stroke-width="3" marker-end="url(#mi-up)"/>
    <rect x="96" y="198" width="108" height="18" rx="3" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="150" cy="207" r="5" fill="#0ea5e9"/>
    <line x1="150" y1="196" x2="150" y2="172" stroke="#f59e0b" stroke-width="3" marker-end="url(#mi-up)"/>
    <ellipse cx="150" cy="160" rx="52" ry="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
    <line x1="150" y1="146" x2="150" y2="104" stroke="#f59e0b" stroke-width="3" marker-end="url(#mi-up)"/>
    <ellipse cx="150" cy="92" rx="44" ry="12" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2.5"/>
    <line x1="150" y1="80" x2="150" y2="52" stroke="#f59e0b" stroke-width="3" marker-end="url(#mi-up)"/>
    <circle cx="150" cy="40" r="16" fill="#f8fafc" stroke="#334155" stroke-width="2.5"/>
    <circle cx="150" cy="40" r="6" fill="#334155"/>

    <text x="150" y="288" font-family="sans-serif" font-size="13" font-weight="bold" fill="currentColor" text-anchor="middle">light source</text>
    ${label(510, 207, 'specimen (the cell)', 'end', 300, 207, 206, 207)}
    ${label(510, 160, 'objective lens', 'end', 320, 160, 202, 160)}
    ${label(510, 92, 'eyepiece lens', 'end', 320, 92, 194, 92)}
    ${label(510, 40, 'your eye', 'end', 300, 40, 166, 40)}
  </svg>`,

  // ─────────────────────────────────────────────────────────────────────────
  // Etymology: a monk's bare "cella" (little room) next to the cells that
  // reminded early scientists of it.
  // ─────────────────────────────────────────────────────────────────────────
  TINY_ROOM: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" class="w-full h-full drop-shadow-md">
    <rect x="40" y="60" width="170" height="150" rx="6" fill="#faf5ff" stroke="#a855f7" stroke-width="3"/>
    <rect x="40" y="40" width="170" height="24" rx="4" fill="#a855f7"/>
    <rect x="150" y="150" width="40" height="60" fill="#ede9fe" stroke="#a855f7" stroke-width="2"/>
    <rect x="70" y="90" width="40" height="34" rx="3" fill="#ede9fe" stroke="#a855f7" stroke-width="2"/>
    <text x="125" y="57" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">cella</text>
    <text x="125" y="234" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">a monk's little room</text>

    <text x="260" y="130" font-family="sans-serif" font-size="30" font-weight="900" fill="#94a3b8" text-anchor="middle">≈</text>

    ${[[310,60],[400,60],[310,130],[400,130]].map(([x,y]) => `<rect x="${x}" y="${y}" width="88" height="66" rx="5" fill="#ecfdf5" stroke="#16a34a" stroke-width="3"/>`).join('')}
    <text x="392" y="234" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor" text-anchor="middle">rows of plant cells</text>
  </svg>`,
}
