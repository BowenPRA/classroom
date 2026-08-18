// content/freshman-math/P02_1/plan.js
// One-page teacher plan for the project, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: 'Two 45-minute lessons in class, plus the write-up finished at home. Follows Algebra Track 1.2.',
  objective:
    'Students are given two tilted quadrilaterals that share the edge AB and differ by a single grid square at C — Shape P is a rectangle, Shape Q is not — and must decide which, using slopes ' +
    'alone. They predict first, then DERIVE the perpendicular rule physically: draw a slope triangle, cut it out, turn it a quarter turn, and record what happens. Rise and run swap and one changes ' +
    'sign, which is the rule rather than a mnemonic for it. From their own table they state the parallel rule and the perpendicular rule, test all eight edges of the two shapes, and then use the ' +
    'distance formula from Lesson 1.1 to decide whether the rectangle is also a square. The investigation asks them to CONSTRUCT their own rectangle and square with no horizontal or vertical side, ' +
    'and to find the one perpendicular pair the multiply-to-−1 rule cannot handle. Marked out of 16.',
  materials: [
    'Projector / TV for the project brief',
    'Squared paper — several sheets each; both shapes get replotted by hand',
    'SCISSORS, one pair between two — Part 2 does not work without them',
    'Rulers — 30 cm',
    'Calculators for Part 4.4 onwards, where the side lengths stop being whole numbers',
    'A protractor is deliberately NOT on this list. If one appears, the project has been short-circuited',
  ],
  vocab: [
    { term: 'Parallel', def: 'two lines running in the same direction that never meet. On a grid: equal slopes' },
    { term: 'Perpendicular', def: 'two lines meeting at exactly 90°. On a grid: slopes that multiply to −1 — with one exception (see 5.3)' },
    { term: 'Negative reciprocal', def: 'flip the fraction over and change its sign. The perpendicular of 2/3 is −3/2. This is what a quarter turn does to a slope' },
    { term: 'Parallelogram', def: 'a quadrilateral with two pairs of parallel sides. BOTH shapes in this project are parallelograms — that is why the test cannot stop there' },
    { term: 'Rectangle', def: 'a parallelogram whose corners are all exactly 90°. Slopes can prove this on their own' },
    { term: 'Square', def: 'a rectangle whose sides are all equal. Slopes can NEVER prove this — it needs the distance formula too' },
    { term: 'Vertex / vertices', def: 'a corner of a shape, and its plural. Said "VER-tiss" and "VER-tiss-eez". Students write "vertexes" constantly' },
    { term: 'Counterexample', def: 'a single case that shows a rule does not always hold. Part 5.3 is asking for one' },
  ],
  timeline: [
    { time: 'Lesson 1 · 0–10 min', phase: 'Brief and rubric', detail: 'Slides 1–6. Show the two shapes on slide 3 and TAKE A VOTE by show of hands before saying anything — the split is usually close to even, which is the whole hook. Students copy the five-part list. Then stop on the rubric (slides 5 and 6) and read all four strands aloud BEFORE any work; publishing the mark scheme first is most of what makes this a project rather than a long exercise. Point out that "picked the right shape" is not one of the four strands — a lucky guess with no slopes scores almost nothing.' },
    { time: 'Lesson 1 · 10–16 min', phase: 'Part 1 · Predict', detail: 'Slide 7, in silence, no rulers and no calculating. Record the class vote and the confidence scores on the board and leave them there for the whole project. Tell them explicitly not to edit these later; 4.6 compares against them and is worth marks.' },
    { time: 'Lesson 1 · 16–38 min', phase: 'Part 2 · Cut it out and turn it', detail: 'Slides 8–10, and this is where to spend supervision. THIS IS THE PROJECT — without it the whole thing is a worksheet. Every student draws a run-3-rise-1 triangle, cuts it out, and turns it a quarter turn with the corner pinned under a pencil. THE ERROR TO WATCH FOR: turning it a half turn, which gives back the same slope and teaches nothing — make them keep one corner fixed and stop at a quarter. Second error: recording the new run as +1. It is −1, and the sign is the entire point. Insist on a three-row table before anyone moves on, then use slide 10 to make them put the pattern into words before Part 3 names it.' },
    { time: 'Lesson 1 · 38–45 min', phase: 'Part 3 · Parallel', detail: 'Slide 11, the easy rule, done quickly so it is out of the way. 3.3 is the check that matters: 6/8 and 3/4 ARE the same slope, so those lines are parallel. Expect some students to say no because the fractions look different.' },
    { time: 'Lesson 2 · 0–14 min', phase: 'Part 3 · Perpendicular', detail: 'Slide 12. They multiply the before-and-after slopes from their own Part 2 table and get −1 every time. Do NOT hand them the rule — the evidence is already in their books, and letting them state it is the difference between a 3 and a 4 on the Mathematics strand. Watch for students who multiplied a slope by its reciprocal and got +1 because they dropped the sign.' },
    { time: 'Lesson 2 · 14–30 min', phase: 'Part 4 · The verdict', detail: 'Slides 13–14. Eight slopes, all shown. Both shapes come out as parallelograms, which is the trap: several students will stop there and declare both rectangles. The separating step is the multiplication — 1/2 × (−2) = −1 for P, and 1/2 × (−4/3) = −2/3 for Q. Then 4.4 brings back the distance formula from 1.1 to rule out a square. Do not confirm anything; the solutions stay behind the stop slide until the projects are in.' },
    { time: 'Lesson 2 · 30–45 min', phase: 'Part 5 set, and the write-up', detail: 'Slides 15–17. Read 5.1 out and let them start — constructing a rectangle is much harder than checking one, and the good students will discover the step-and-turn method themselves. Flag 5.3 explicitly as the one worth full marks without saying what the answer is. Walk through the eight-point checklist on slide 17 before they leave.' },
    { time: 'After collection', phase: 'The solutions', detail: 'Slide 18 is a STOP slide; slides 19–25 are worked answers and are only for after the projects are handed in. Run them as a marking review: what the turn does, the two rules, the two shapes side by side with the verdict, why the eye lost, the 0-and-undefined exception, and finally how to build a rectangle from nothing.' },
  ],
  answers: [
    { q: 'Part 2.1 — turning a run-3, rise-1 triangle', a: 'New run −1, new rise 3, so the new slope is 3 ÷ (−1) = −3. The original was 1/3. The two numbers have swapped places and one has changed sign.' },
    { q: 'Part 2.2 — the other two rows', a: 'Run 2, rise 5 (m = 5/2) turns into run −5, rise 2, so m = −2/5. Their own choice should behave the same way. Any row where the sign did not change is a half turn, not a quarter.' },
    { q: 'Part 2.3 — the sentence', a: 'Accept anything equivalent to "the rise and the run swap over, and one of them changes sign". "It flips upside down and goes negative" is fine — the words matter less than the two ideas both being present.' },
    { q: 'Part 3.2 — the parallel rule', a: 'Parallel lines have equal slopes. Push for a full sentence, not just "same m".' },
    { q: 'Part 3.3 — 6/8 and 3/4', a: 'Parallel. 6/8 simplifies to 3/4, so the slopes are equal. This one catches students who compare fractions by eye instead of simplifying.' },
    { q: 'Part 3.4 — multiplying the pairs', a: '1/3 × (−3) = −1. 5/2 × (−2/5) = −1. Every row gives −1.' },
    { q: 'Part 3.6 — perpendicular to −2/5', a: '5/2. Check: −2/5 × 5/2 = −10/10 = −1. A common wrong answer is −5/2, from flipping but forgetting to change the sign.' },
    { q: 'Part 4.1 — Shape P slopes', a: 'AB = 1/2, BC = −2, CD = 1/2, DA = −2.' },
    { q: 'Part 4.1 — Shape Q slopes', a: 'AB = 1/2, BC = −4/3, CD = 1/2, DA = −4/3.' },
    { q: 'Part 4.2 — parallelograms?', a: 'BOTH are. Each has two pairs of equal opposite slopes. This is the step where careless work stops, so it is worth marking hard.' },
    { q: 'Part 4.3 — rectangles?', a: 'Only P. For P, 1/2 × (−2) = −1, so adjacent edges are perpendicular. For Q, 1/2 × (−4/3) = −2/3, which is not −1 — its corners are 79.7° and 100.3°.' },
    { q: 'Part 4.4 and 4.5 — is P a square?', a: 'No. AB = √(6² + 3²) = √45 ≈ 6.7 and BC = √(2² + 4²) = √20 ≈ 4.5. Different, so it is a rectangle and not a square. Watch for students who compare AB with CD (both √45) and conclude "equal, so square" — those are OPPOSITE sides, which are equal in any parallelogram.' },
    { q: 'Part 4.6 — why the eye finds it hard', a: 'Q is only about 10° off square, and the shapes are tilted, so there is no horizontal or vertical edge to judge against. On an upright shape the page edge does the work for you; here nothing does.' },
    { q: 'Part 5.1 — build a rectangle', a: 'Pick a slope, say 2/3; its perpendicular is −3/2. From any start, step (3, 2), then (2, −3), then (−3, −2) to close. Example: (0,0), (3,2), (5,−1), (2,−3). Sides √13 and √13 — careful, that one IS a square; to avoid it the two step vectors must have different lengths, e.g. (6,4) and (2,−3).' },
    { q: 'Part 5.2 — build a square', a: 'Use two perpendicular steps of EQUAL length, e.g. (3,2) and (2,−3), both √13. Example: (0,0), (3,2), (5,−1), (2,−3). Slopes 2/3 and −3/2 multiply to −1, and all four sides are √13.' },
    { q: 'Part 5.3 — the pair the rule cannot reach', a: 'A horizontal line and a vertical line. The horizontal has m = 0 and the vertical has no slope at all, so the product is meaningless — you cannot multiply 0 by something that is not a number. They are still perpendicular; the rule just has to name this case separately. Full Investigation marks for finding it unprompted.' },
    { q: 'Part 6.3 — who needs this?', a: 'Anything built from coordinates rather than measured on site: screen and game graphics, collision detection, robot arms, CNC and laser cutting, surveying, CAD. Accept any answer where the shape exists as numbers before it exists as an object.' },
  ],
  notes:
    'WHAT MAKES THIS A PROJECT AND NOT A WORKSHEET IS PART 2. Cutting out a slope triangle and turning it a quarter turn is the equivalent of the twine in Project 1: it is where the perpendicular ' +
    'rule is discovered rather than received. If time gets short, cut Part 3.1–3.3 or trim the write-up — do not cut the scissors. A student who has turned the triangle themselves will remember ' +
    '"flip it and change the sign" for years; a student who was told it will have lost it by the next unit. ' +
    'THE HOOK IS THAT THE TWO SHAPES DIFFER BY ONE GRID SQUARE. C is at (4,−3) in P and (5,−3) in Q, and everything else follows. Both are parallelograms, neither is a square, and Q is only 10° off ' +
    'square. Take the vote on slide 3 before any discussion and write the tally on the board — the value of the whole project comes from students having publicly committed to an answer their eyes gave them. ' +
    'NO PROTRACTORS. The entire point is proving a right angle without measuring one. If a protractor appears, the assessment has been bypassed, and it is worth saying so out loud at the start. ' +
    'The two traps that cost the most marks: (1) stopping at "it is a parallelogram" and assuming that settles it — both shapes pass that test, which is exactly why it was chosen; (2) proving a square ' +
    'by finding two equal sides, when the two they found are opposite sides and are equal in every parallelogram. Mark both hard, because both look like correct work. ' +
    'On 5.3: most classes walk past it. It is the clearest Investigation mark in the project, so it is flagged on the brief as "a case the rule fails to cover" without being given away. A student who ' +
    'finds it has understood that a rule can be true and still incomplete, which is worth more than the rule. ' +
    'This project also quietly reuses Lesson 1.1 — Part 4.4 needs the distance formula, and students who have forgotten it will need to go back rather than be reminded. That is deliberate. ' +
    'The course is flagged bilingual:false in content/courses.js, so this deck is English-only and the EN/VN toggle is hidden. There are no photographs and no widget in this project: the one thing a ' +
    'widget could show is the turning triangle, and a student turning a real piece of paper beats watching one turn on a screen.',
}
