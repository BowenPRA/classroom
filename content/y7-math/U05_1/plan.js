// content/y7-math/U05_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes — Monday 26 October, 23 slides. If you fall behind: skip slide 19 (the challenge) and one of the two word problems (20–21).',
  objective:
    'Students can find a missing angle on a straight line (180°), around a point (360°) and in a quadrilateral (360°); ' +
    'say what sum and quadrilateral mean; use the equal opposite angles of a parallelogram; and read the Workbook’s ' +
    'instruction words (calculate the value of, work out the size of, give a reason, the same size).',
  materials: [
    'Projector / TV for the lesson deck (EN / FR switch)',
    'Scrap paper, one sheet per student, for Tear Off the Corners (slide 12) — tearing works, no scissors needed',
    'Mini whiteboards and pens (slides 1, 4, 8, 14, 15, 17, 18, 23); maths notebooks',
  ],
  vocab: [
    { term: 'Sum · la somme', def: 'the total when you add numbers together; sounds exactly like “some”' },
    { term: 'Quadrilateral · le quadrilatère', def: 'a flat shape with four straight sides (quad = 4, lateral = side)' },
    { term: 'Straight line · la ligne droite', def: 'angles on it add up to 180°' },
    { term: 'Around a point · autour d’un point', def: 'angles round it add up to 360°, a full turn' },
    { term: 'Parallelogram · le parallélogramme', def: 'opposite angles are equal; next-door angles add up to 180°' },
    { term: 'Equilateral · équilatéral', def: 'all three sides equal, so every angle is 60° — spoken, not copied' },
    { term: 'Calculate / work out · calcule', def: 'both mean “find”; “the value of a” means “the number a”' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter and goals', detail: 'Slide 1: four numbers on whiteboards while they settle. Slide 2: read the big line and the three goals aloud; point at each picture. Slide 3: check the four numbers — 90, 180, 360, 180.' },
    { time: '5–12 min', phase: 'A straight line', detail: 'Slide 4: copy the fact; whiteboards for a, then reveal. Slide 5: vote, everyone at once. Slide 6: 178°, not 180° — it only looks straight.' },
    { time: '12–17 min', phase: 'Round a point', detail: 'Slide 7: why 45°? (360 ÷ 8). Slide 8: copy the fact; whiteboards for b.' },
    { time: '17–23 min', phase: 'Key words', detail: 'Slide 9: say “some” and “sum” — the same sound; copy SUM. Read the line underneath, do not copy it. Slide 10: quad = 4 (a quad bike has 4 wheels); copy QUADRILATERAL. Point at “any 4 sides”: it counts too.' },
    { time: '23–32 min', phase: 'Angles in a quadrilateral', detail: 'Slide 11: vote. Slide 12: everyone draws a strange quadrilateral, marks the corners a b c d, tears them off and puts the points together — a full turn. Slide 13: answer B; the diagonal makes two triangles; copy the fact. Slide 14: the class says each step before you reveal.' },
    { time: '32–40 min', phase: 'Practice and the English', detail: 'Slide 15: whiteboards, all three; ask which fact each used. Slide 16: read each Workbook phrase, the class reads the meaning. Slide 17: 360 − 150, then ÷ 3.' },
    { time: '40–46 min', phase: 'Parallelogram and challenge', detail: 'Slide 18: copy the fact; q = 65° first, then p and r. Slide 19: two right angles and a 60°.' },
    { time: '46–50 min', phase: 'Word problems and close', detail: 'Slides 20–21, deadpan. Slide 22: thumbs up or down for each item; notebook count. Slide 23: exit question on whiteboards.' },
  ],
  answers: [
    { q: 'Slide 1 — starter', a: 'Right angle 90°, straight line 180°, full turn 360°, triangle 180°.' },
    { q: 'Slide 4 — straight line', a: 'a = 180° − 130° = 50°.' },
    { q: 'Slides 5–6 — is XY straight?', a: 'B, no: 57° + 121° = 178°, not 180°.' },
    { q: 'Slide 7 — pizza', a: '360° ÷ 8 = 45°.' },
    { q: 'Slide 8 — round a point', a: '100° + 120° = 220°; b = 360° − 220° = 140°.' },
    { q: 'Slides 11–13 — every quadrilateral?', a: 'B, every one. The torn corners always make a full turn; a diagonal splits any quadrilateral into two triangles, 180° + 180°.' },
    { q: 'Slide 14 — worked example', a: '70 + 95 + 120 = 285; d = 360 − 285 = 75°.' },
    { q: 'Slide 15 — whiteboards', a: '1: x = 180 − 145 = 35°. 2: y = 360 − 150 − 85 = 125°. 3: z = 360 − 90 − 90 − 105 = 75°.' },
    { q: 'Slide 17 — three the same', a: '360 − 150 = 210; 210 ÷ 3 = 70° each.' },
    { q: 'Slide 18 — parallelogram', a: 'q = 65° (opposite); p = r = (360 − 130) ÷ 2 = 115°. Also 180 − 65 = 115.' },
    { q: 'Slide 19 — challenge', a: 'y = 360 − 90 − 90 − 60 = 120°.' },
    { q: 'Slide 20 — the chair', a: '2.5 × 360 = 900°. Two full turns bring him back to the board; the half turn leaves him facing the back of the room.' },
    { q: 'Slide 21 — the garden', a: '360 − 270 = 90°. The cat is irrelevant.' },
    { q: 'Slide 23 — exit', a: '85 + 100 + 110 = 295; 360 − 295 = 65°.' },
  ],
  notes:
    'NOTEBOOK COUNT (slide 22): 6 written panels — straight line 180° (4), around a point 360° (8), sum (9), quadrilateral (10), quadrilateral 360° (13), parallelogram (18). The lines under the panels on slides 9 and 19 are read, not copied.\n\n' +
    'WORKBOOK 5.1. Every number in the deck is new, so Exercise 5.1 (pp. 66–68) is still unspent: Focus 1–3 match slides 4, 8 and 14–15; Practice 4 is slides 5–6 (is it straight?); Practice 5 is slide 17; Practice 7 is slide 18; Challenge 8–9 are slide 19. Question 11 (the kite) needs a kite’s line of symmetry — one pair of equal angles — which slide 10 only names.\n\n' +
    'ASK BEFORE YOU TELL. The starter (1), both votes (5, 11), the pizza (7) and the worked example (14). The torn corners (12) settle vote 11 with the class’s own paper.\n\n' +
    'THE WORD PROBLEMS (20–21). Deadpan, never flagged as jokes. The chair: the half turn matters. The garden: the cat is irrelevant.\n\n' +
    'LANGUAGES: English and French; no Vietnamese. Diagrams are in English, as always.',
}
