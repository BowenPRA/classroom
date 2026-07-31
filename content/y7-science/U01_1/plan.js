// content/y7-science/U01_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes',
  objective: 'Students can define a cell and organelle, describe the scale of a cell, name the shared and plant-only organelles and their jobs, and explain what a microscope does and its limitations.',
  materials: [
    'Projector / TV for the lesson deck',
    'Empty soda cans (one per pair)',
    'Rulers',
    'Student science notebooks',
    'Textbook (Unit 1.1, pages 8–12)',
  ],
  vocab: [
    { term: 'Cell', def: 'the smallest basic unit of all living organisms' },
    { term: 'Organelle', def: 'a tiny structure inside a cell that does a specific job' },
    { term: 'Cell membrane / Nucleus / Cytoplasm / Mitochondria', def: 'the four organelles shared by animal and plant cells' },
    { term: 'Cell wall / Chloroplast / Sap vacuole', def: 'the plant-only extras (wall = cellulose, chloroplast = chlorophyll)' },
    { term: 'Microscope', def: 'a tool that uses lenses to bend light and magnify a tiny image' },
    { term: 'Limitations', def: 'the differences/weaknesses between a model and the real object' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter', detail: 'Title slide. Students write a full sentence describing how small a cell is, using a measurement or comparison.' },
    { time: '5–15 min', phase: 'Soda-can challenge', detail: 'Pairs get a can. Reveal the cell size (0.02 mm); students derive the scale factor (120 ÷ 0.02 = 6000×) themselves, then apply it to Mr Bowen (178 cm → 10.68 km, taller than Everest). Use the Scale Challenge widget.' },
    { time: '15–20 min', phase: 'Define + etymology', detail: 'Copy the definition of "cell". Latin "cella" = little room (every class is an English class). Reveal card.' },
    { time: '20–30 min', phase: 'Organelles', detail: 'Analogy (classroom furniture / body organs). Copy "organelle". Explore the interactive cell (tap each part). Copy the four shared organelles.' },
    { time: '30–40 min', phase: 'Animal vs plant', detail: 'Compare the labelled diagrams, then the real micrographs (cheek vs onion). Copy the five plant-only parts (green). Real chloroplast micrograph. Bonus: the ER.' },
    { time: '40–47 min', phase: 'Microscopy', detail: 'Why we need microscopes; copy the definition; how the light path magnifies (Draw This). Discuss electron microscopes.' },
    { time: '47–50 min', phase: 'Models + recap + HW', detail: 'Mr Seth model-building link and "limitations". Summary checklist. Set homework (read pp. 8–12; copy + answer the 2 questions on p. 9).' },
  ],
  answers: [
    { q: 'Scale factor (can ÷ cell):', a: '120 mm ÷ 0.02 mm = 6000×' },
    { q: 'Mr Bowen magnified 6000×:', a: '178 cm × 6000 = 10,680 m = 10.68 km (taller than Everest, 8.85 km)' },
    { q: 'Origin of "cell":', a: 'Latin "cella" — a small room / monk’s cell' },
    { q: 'Shared organelles:', a: 'cell membrane, nucleus, cytoplasm, mitochondria' },
    { q: 'Plant-only organelles:', a: 'cell wall (cellulose), chloroplast (chlorophyll), sap vacuole' },
  ],
  notes:
    'The soda-can task is the hook — resist giving the scale factor; make pairs derive 6000× from the numbers. ' +
    'Push for full English sentences throughout (starter and homework). Emphasise that plant cells have everything animal cells have, PLUS three extras. ' +
    'Real micrographs are credited in content/y7-science/U01_1/images/CREDITS.json (Wikimedia Commons).',
}
