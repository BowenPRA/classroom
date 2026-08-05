// content/y7-science/U01_2/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes',
  objective: 'Students can name the four parts of an animal cell and what each does, name the three parts a plant cell has that an animal cell has not, explain why an animal cell has no fixed shape, decide from a photograph whether cells are plant or animal and give a reason, and put the steps of preparing a stained slide in the right order.',
  materials: [
    'Projector / TV for the lesson deck',
    'Student science notebooks',
    'Learner’s Book (Unit 1.2, pages 13–16)',
    'For the activity: 15 card ovals per group (5 red, 10 green), 1 grey circle, string or wool, wide tape, glue, a large sheet of paper',
    'Only if the lab kit has arrived: microscopes, slides, cover slips, cotton buds, methylene blue, dropper pipettes, safety glasses',
  ],
  vocab: [
    { term: 'Stain', def: 'a coloured dye added to a specimen to make its parts easier to see' },
    { term: 'Cell membrane / Cytoplasm / Mitochondria / Nucleus', def: 'the four parts an animal cell has — the same four every cell has' },
    { term: 'Cell wall / Chloroplast / Sap vacuole', def: 'the three parts a plant cell has and an animal cell has not' },
    { term: 'Similar', def: 'alike in some ways and different in others — NOT "the same"' },
    { term: 'Part vs substance', def: 'a part is something you can point to; a substance is what a part is made of (cellulose, chlorophyll)' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter', detail: 'Title slide. Two minutes: list the parts of a plant cell beginning with "c". Take the lists round the room.' },
    { time: '5–9 min', phase: 'The C words', detail: 'The book asks for five; the class will find six. Reveal the split — four PARTS (cell wall, cell membrane, cytoplasm, chloroplast) and two SUBSTANCES (cellulose, chlorophyll). This distinction is the point, not the count.' },
    { time: '9–14 min', phase: 'The hook — ask first', detail: 'Slide 3 gives the question ONLY: how many cells is Mr Bowen? Pairs, one number each, guesses on the board. THEN slide 4 with the step-through widget: 100 trillion → one per second → 3.17 million years. Slide 5 is the Milky Way payoff; slide 6 is the p.13 artwork.' },
    { time: '14–21 min', phase: 'Parts of an animal cell', detail: 'Copy the four parts. Reveal-check what each one does (recall from 1.1). Then Draw This: the p.14 figure, all four labels. Budget real drawing time here.' },
    { time: '21–28 min', phase: 'The difference', detail: 'Spot the Difference — unlabelled plant and animal cells side by side, two minutes, written down not called out. Then the answer gallery (wall, chloroplasts, sap vacuole) and why no wall means no fixed shape. Bonus: the nerve cell.' },
    { time: '28–33 min', phase: 'English + the photographs', detail: '"Similar" is not "the same" — copy the three comparing sentence patterns, then make someone finish the sentence out loud. Then the Plant or Animal widget: four real micrographs run as a class vote. Photograph C (onion, no chloroplasts) is the trap — let them get it wrong.' },
    { time: '33–41 min', phase: 'The practical', detail: 'Equipment and safety, then the key word "stain" on its own slide — copy the definition, then the English aside (a stain on your shirt is an accident; in a lab you stain something on purpose). Steps 1–4 make the slide; steps 5–7 set the microscope up, with the "look from the side" reveal; steps 8–10 find the cells. Then the real cheek-cell photograph. If the lab kit has arrived, run it for real here and let the rest of the deck wait for next lesson.' },
    { time: '41–46 min', phase: 'Group activity', detail: 'Build a plant cell from card and tape in threes, get it checked, then remove pieces to make it an animal cell. The reveal is p.15 Question 2.' },
    { time: '46–50 min', phase: 'The rule + recap + HW', detail: 'The one clue that always works: the cell wall, not the colour green. Summary checklist — 7 written items and 1 labelled drawing. Set homework (read pp. 13–16; copy and answer p.15 Q1 and Q2 in full sentences, "because" three times).' },
  ],
  answers: [
    { q: 'Getting started — the "c" words:', a: 'Parts: cell wall, cell membrane, cytoplasm, chloroplast. Substances: cellulose, chlorophyll. Six words, but only four are parts — which is why the book says five is arguable and worth arguing about.' },
    { q: 'Cells in one person:', a: 'About 100 trillion — 100 000 000 000 000' },
    { q: 'Time to count them at one per second:', a: '100 000 000 000 000 ÷ 60 ÷ 60 ÷ 24 ÷ 365 = about 3 170 000 years' },
    { q: 'An animal cell has:', a: 'cell membrane, cytoplasm, mitochondria, nucleus' },
    { q: 'A plant cell has these as well:', a: 'cell wall (made of cellulose), chloroplasts (containing chlorophyll), sap vacuole' },
    { q: 'p.15 Q1 — the four photographs in the widget:', a: 'A moss leaf = plant (straight walls + chloroplasts). B cheek cells = animal (soft, no straight edges). C onion = plant (straight walls, but NO chloroplasts — it grows underground). D blood = animal (round, separate, no wall).' },
    { q: 'p.15 Q2 — turning a plant-cell model into an animal one:', a: 'Remove the cell wall, the chloroplasts and the sap vacuole. Everything else stays.' },
    { q: 'The most reliable feature:', a: 'The cell wall — a straight, stiff edge with cells packed like bricks. "No green" does NOT mean animal.' },
    { q: 'Why look from the side (step 3):', a: 'With your eye at the eyepiece you cannot judge the gap; looking from the side is the only way to avoid driving the lens through the slide.' },
  ],
  notes:
    'The question slides come BEFORE the numbers on purpose — slide 3 (how many cells?) and slide 9 (spot the difference) both stop dead with no answer on them. Take guesses, write a few on the board, and resist filling the silence. ' +
    'The starter is worth the four minutes: the book asks for five "c" words and the class will find six, and sorting parts from substances is the kind of precision that costs marks later. ' +
    'Photograph C in the Plant or Animal widget is deliberately a trap. Students who have decided "green = plant" will call the onion an animal cell. Let that happen before you fix it — the slide after the widget is built on it. ' +
    'Push for full English sentences throughout, especially the word "because" in the homework. The comparing sentence patterns on the "Similar Is Not the Same" slide are the ones to drill. ' +
    'One slide is marked Draw This (the p.14 animal cell) — budget real drawing time. ' +
    'The practical is written as a method to learn, not a lab to run, because the kit may not have arrived. If it has, run it after slide 17 and let the rest of the deck wait for the next lesson. ' +
    'Anything students must copy appears in an orange "Write This Down" panel or an orange bumper; everything else is discussion. ' +
    'Image sources and licences are recorded in content/y7-science/U01_2/images/CREDITS.json — the lb-* figures are scans from the Learner’s Book and are for classroom use only.',
}
