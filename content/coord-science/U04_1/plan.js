// content/coord-science/U04_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '45–55 minutes (one-on-one)',
  objective:
    'The student can define electrolysis and an electrolyte, explain why a compound must be molten or dissolved, label an electrolytic cell, read the molten lead(II) bromide equation symbol by symbol, write and add both half-equations, define a binary substance and a half-equation, predict the products of any molten binary salt, and answer the three C4.01 discussion questions.',
  materials: [
    'Projector / screen for the deck',
    'Student notebook + pen',
    'IGCSE Coordinated Sciences Coursebook (Chapter C4, C4.01)',
    'Optional demo photos/video: molten lead bromide electrolysis (brown bromine vapour, silvery lead)',
  ],
  vocab: [
    { term: 'Electrical conductor / insulator', def: 'lets / does not let electricity pass through' },
    { term: 'Electrolyte', def: 'a liquid or solution that conducts electricity and is broken down by it (has free ions)' },
    { term: 'Non-electrolyte', def: 'a liquid with no free ions — does not conduct' },
    { term: 'Electrolysis', def: 'breakdown of an ionic compound, molten or aqueous, by an electric current' },
    { term: 'Electrolytic cell', def: 'the apparatus: power supply, two electrodes, electrolyte' },
    { term: 'Inert electrode', def: 'graphite or platinum — carries current without reacting' },
    { term: 'Cathode / Anode', def: 'negative (−) / positive (+) electrode' },
    { term: 'Cation / Anion', def: 'positive ion (→ cathode) / negative ion (→ anode)' },
    { term: 'Reduction / Oxidation', def: 'gain of electrons (cathode) / loss of electrons (anode)' },
    { term: 'Binary substance', def: 'made of only two different elements' },
    { term: 'Half-equation', def: 'ionic equation for one electrode, showing electrons gained or lost' },
  ],
  timeline: [
    { time: '0–4 min', phase: 'Starter', detail: 'Title slide. Student writes one sentence: how is the way a copper wire carries electricity different from salty water? Take the guess; do not correct yet.' },
    { time: '4–10 min', phase: 'Conductivity', detail: 'Slide 2: metals and graphite conduct with free electrons and DO NOT change. Copy conductor/insulator. Slide 3 (question only): why does the liquid change when the wire does not? Let them predict before slide 4.' },
    { time: '10–18 min', phase: 'Electrolytes & the word', detail: 'Slide 4: electrolytes vs non-electrolytes (Table C4.01) — copy both definitions. Slide 5: the definition of electrolysis (electro- + -lysis). Slide 6: solid lattice vs molten/dissolved — this IS the answer to discussion Q1; copy the "free to move" rule.' },
    { time: '18–26 min', phase: 'The cell + electrodes', detail: 'Slide 7 (Draw This): label the electrolytic cell — power supply, inert graphite electrodes, electrolyte. Slide 8: cathode (−)/cation and anode (+)/anion; reduction vs oxidation; metal vs non-metal. Copy the four key words.' },
    { time: '26–38 min', phase: 'Lead(II) bromide — the core', detail: 'Slide 9: molten PbBr₂ → lead + bromine; copy the overall equation. Slide 10: read the notation one symbol at a time (subscript 2, state symbols, Br₂ pairs, charges) — copy the state-symbol key. Slides 11 & 12: predict, then reveal each half-equation (Pb²⁺ + 2e⁻ → Pb; 2Br⁻ → Br₂ + 2e⁻). Slide 13: binary substance + half-equation; add the two, electrons cancel, overall Pb²⁺ + 2Br⁻ → Pb + Br₂.' },
    { time: '38–44 min', phase: 'Predict + discussion Qs', detail: 'Slide 14: the rule (metal→cathode, non-metal→anode); predict NaCl, KI, ZnCl₂. Slides 15–17: the three C4.01 discussion questions — student attempts each in a full sentence before the reveal.' },
    { time: '44–50 min', phase: 'Recap', detail: 'Slide 18 checklist. Student should leave with ~13 key words, 3 equations, 1 labelled diagram.' },
  ],
  answers: [
    { q: 'Starter — how are they different?', a: 'Metal: free ELECTRONS move and the metal is unchanged. Electrolyte: IONS move and the compound is broken down into new substances.' },
    { q: 'Overall equation for molten lead(II) bromide:', a: 'PbBr₂(l) → Pb(l) + Br₂(g)' },
    { q: 'Cathode half-equation:', a: 'Pb²⁺ + 2e⁻ → Pb  (reduction — gain of electrons)' },
    { q: 'Anode half-equation:', a: '2Br⁻ → Br₂ + 2e⁻  (oxidation — loss of electrons)' },
    { q: 'Predict — NaCl / KI / ZnCl₂:', a: 'Na + Cl₂ / K + I₂ / Zn + Cl₂ (metal at cathode, non-metal at anode)' },
    { q: 'Q1 — why molten or dissolved?', a: 'Ions are locked in a solid lattice; only when molten or dissolved are they free to move and carry charge.' },
    { q: 'Q2 — electrolysis of brine (aqueous NaCl):', a: 'Chlorine at the anode, hydrogen at the cathode (from water, not sodium), sodium hydroxide left in solution.' },
    { q: 'Q3 — economic importance:', a: 'Extracting reactive metals (Al, Na); chlorine + NaOH from brine; electroplating; hydrogen fuel cells replacing petrol.' },
  ],
  notes:
    'This is a one-on-one lesson, so the "predict" slides (3, 11, 12, 14, 15–17) are conversation, not silent work: ask, wait, let the student commit to an answer out loud, THEN reveal. The whole point of C4.01 is the difference between electron conduction (metals, no change) and ion conduction (electrolytes, broken down) — keep returning to it. ' +
    'The notation slide (10) is the one the student specifically wanted: slow down and name every symbol — the subscript 2, the state symbols, the Br₂ pair, the ion charges. ' +
    'Q2 (brine) deliberately goes beyond molten salts to aqueous solution; it is a predict-and-be-surprised moment (hydrogen, not sodium; chlorine; NaOH). It also closes the loop with the salty-water starter. ' +
    'Anything the student must copy is in an orange "Write This Down" panel or an orange > bumper; everything else is discussion. Slide 7 is the one Draw This (the cell). ' +
    'Diagrams are authored in diagrams.js; there are no third-party image files in this unit, so there is no CREDITS.json to maintain.',
}
