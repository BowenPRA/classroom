// content/y7-science/U02_3/plan.js
// Teacher plan for 2.3 Explaining changes of state.

export const plan = {
  duration: '50 min',
  objective:
    'Explain why each change of state happens using particle theory: heat energy ' +
    'is transferred to/from particles, changing how much they move, and either ' +
    'overcoming or being overcome by the attractive forces between them.',
  materials: [
    'Projector + deck',
    "Learner's Book (pages 41–43)",
    'Notebooks + rulers (for diagram)',
  ],
  vocab: [
    { term: 'heat energy', defn: 'the energy that makes particles move' },
    { term: 'transferred', defn: 'moved from one place to another' },
    { term: 'attractive force', defn: 'the force that holds particles together' },
    { term: 'expand', defn: 'get bigger' },
  ],
  timeline: [
    { t: '0–5', activity: 'Starter: write the five changes of state from memory (slide 1). Quick check — hands up for each one.' },
    { t: '5–7', activity: 'Bridge: you know WHAT happens — today we explain WHY (slide 2).' },
    { t: '7–12', activity: 'Key words: read through the four terms on slide 3. Students copy into notebooks (write note).' },
    { t: '12–22', activity: 'Diagram + explanation: walk through the three-panel heating-to-melting diagram (slide 4). Students copy it with rulers. Then read the written explanation on slide 5 — students copy the write note.' },
    { t: '22–27', activity: 'Boiling and the reverse (slide 6). Teacher-led — no copy-down, just make sure they see the same pattern repeating.' },
    { t: '27–40', activity: 'Explain It With Particles activity (slide 7). Students work individually or in pairs, ordering the explanation steps for each scenario.' },
    { t: '40–47', activity: 'Book questions 1–3 (slide 8). Written answers in notebooks. Reveal and mark.' },
    { t: '47–50', activity: 'Checklist (slide 9) + exit question about the bridge (slide 10). Collect answers verbally on the way out.' },
  ],
  answers: {
    'Book Q1': 'Heat energy is transferred to the particles. They vibrate more and take up more space, so the solid gets bigger (expands).',
    'Book Q2': 'In solids and liquids the particles are already touching. There is no space between them to squash into, so they cannot be compressed.',
    'Book Q3': 'In liquids the particles can slide past each other. In gases the particles are far apart and move freely. Both can flow because the particles are not locked in a fixed pattern.',
    'Exit Q': 'In summer more heat energy is transferred to the metal. The particles vibrate more and take up more space, so the bridge expands and gets longer.',
  },
  notes:
    'This lesson teaches one reasoning chain and then drills it across all five changes. ' +
    'Resist the urge to explain each one at length from the front — the widget does that work. ' +
    'The diagram copy-down takes time; circulate and check that grids look roughly regular.',
}
