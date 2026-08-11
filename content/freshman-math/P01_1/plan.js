// content/freshman-math/P01_1/plan.js
// One-page teacher plan for the project, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: 'Two 45-minute lessons in class, plus the write-up finished at home. Follows Algebra Track 1.1.',
  objective:
    'Students predict a three-dimensional distance, build a scale model of a room by folding a notebook to 90° and test the path with twine, then calculate the flight two ways — ' +
    'chaining two right triangles, and in one step with √(x² + y² + z²) — and show the two agree. They then investigate the harder case: a spider that must walk the surfaces. ' +
    'Unfolding the room into a flat net turns the walk back into a straight line, and comparing all three unfoldings leads to a general rule (pair the two smallest dimensions) ' +
    'that they state in their own words and test. They finish by measuring a real room, judging whether their answer is reasonable, and writing the whole thing up. Marked out of 16.',
  materials: [
    'Projector / TV for the project brief',
    'Student notebooks — the notebook IS the 3D model (Part 2)',
    'Twine or string, about 60 cm per pair',
    'Scissors and sticky tape (one set per pair)',
    'Rulers — 30 cm, with millimetres',
    'A tape measure or metre stick for Part 5 (or let them pace it out and say so)',
    'CALCULATORS — needed from Part 4 onwards, where the answers stop being whole numbers',
  ],
  vocab: [
    { term: 'Net', def: 'the flat shape you get by cutting a solid open and laying it out. Unfolding the room into a net is the whole trick of Part 4' },
    { term: 'Space diagonal', def: 'the straight line from one corner of a box to the opposite corner, passing through the inside. The fly\'s path' },
    { term: 'Scale', def: 'the fixed ratio between the model and the real thing, e.g. 1 square = 1 foot. A model without a stated scale cannot be checked' },
    { term: 'Component', def: 'how far a journey goes along one axis on its own. Part 3.6 asks for the x, y and z components of the first 3 seconds' },
    { term: 'Reasonable', def: 'an answer you can defend by comparing it to something you know the size of. Part 5.4 is asking for this, not for more decimal places' },
    { term: 'General rule', def: 'a statement that holds for ANY room, not just the one you were given. Part 4.5 is where the investigation marks are' },
  ],
  timeline: [
    { time: 'Lesson 1 · 0–8 min', phase: 'Brief and rubric', detail: 'Slides 1–5. Read the driving question, then the room and the six parts (students copy the six-part list). Then STOP on the rubric — slides 4 and 5 — and read all four strands aloud before any work. Publishing how it is marked before they start is most of what makes this a project rather than a long exercise. Point out that "got the right number" is not one of the four strands.' },
    { time: 'Lesson 1 · 8–15 min', phase: 'Part 1 · Predict', detail: 'Slide 6. Predictions written in silence, no calculating. Collect a spread of estimates on the board — most guess well under 17 ft. Tell them explicitly not to go back and edit these later; the comparison in 6.2 is worth marks.' },
    { time: 'Lesson 1 · 15–30 min', phase: 'Part 2 · Build the model', detail: 'Slides 7–8. Pairs: one holds the notebook square while the other runs the twine. Watch for a sagging string (it measures long) and for models with no stated scale. At 1 square = 1 foot on 5 mm paper the twine should cut to about 8.5 cm.' },
    { time: 'Lesson 1 · 30–45 min', phase: 'Part 3 · The flight', detail: 'Slides 9–10. Both routes on paper BEFORE the stepper widget is pressed. The floor diagonal is 15 ft, the flight is 17 ft, and 3.4 asks them to say why the one-step formula never needs the 15. Then time (5 s) and the 3-second components (10.2 ft; 7.2, 5.4, 4.8).' },
    { time: 'Lesson 2 · 0–5 min', phase: 'Part 4 hook', detail: 'Slide 11: the spider cannot fly. Take suggestions for how you would even start. Do not accept "use the formula" — the formula measures a path through the air, and the spider is not in the air.' },
    { time: 'Lesson 2 · 5–20 min', phase: 'Part 4 · Unfold one way', detail: 'Slide 12. The idea to land is that a flat surface makes Pythagoras legal again. Floor + far wall unfolds to a 12 by 17 rectangle, giving √433 ≈ 20.8 ft. Calculators come out here — this is the first answer in the whole track that is not a whole number, and that is worth naming out loud.' },
    { time: 'Lesson 2 · 20–35 min', phase: 'Part 4 · The investigation', detail: 'Slide 13, and this is the part that earns the Investigation marks. Do NOT show slide 14 until pairs have hunted for their own unfoldings. Most find two and need a nudge for the third. Then 4.5: the rule is to pair the two SMALLEST dimensions. Push for it in words, and push for a test on a room they invent.' },
    { time: 'Lesson 2 · 35–45 min', phase: 'Parts 5 and 6 set', detail: 'Slide 14 to check the three routes, then slides 15–17. Measure the classroom together as a worked example of Part 5 so they know what "say how you measured" means. Set the write-up, and walk through the ten-point checklist on slide 18 before they leave.' },
  ],
  answers: [
    { q: 'Part 2.1 — the twine', a: 'Should measure 17 ft at scale. On 5 mm squares at 1 square = 1 foot that is 8.5 cm; within about 3 mm is a good result. Short usually means the string sagged.' },
    { q: 'Part 3.1 — floor diagonal', a: '√(12² + 9²) = √225 = 15 ft. A 9-12-15 triangle.' },
    { q: 'Part 3.2 — up to the ceiling corner', a: '√(15² + 8²) = √289 = 17 ft. The floor diagonal is now a LEG of the second triangle.' },
    { q: 'Part 3.3 — one step', a: '√(12² + 9² + 8²) = √289 = 17 ft. The same answer.' },
    { q: 'Part 3.4 — why the 15 disappears', a: 'Because f² = x² + y², so substituting into d² = f² + z² gives d² = x² + y² + z². You would square the floor diagonal immediately after taking its square root, so the root never needed doing.' },
    { q: 'Part 3.5 — time', a: '17 ÷ 3.4 = 5 seconds.' },
    { q: 'Part 3.6 — the first 3 seconds', a: '3 × 3.4 = 10.2 ft, which is 3/5 of the trip. Every component shrinks by the same factor 0.6: x = 7.2 ft, y = 5.4 ft, z = 4.8 ft.' },
    { q: 'Part 3.7 — the check', a: '√(7.2² + 5.4² + 4.8²) = √(51.84 + 29.16 + 23.04) = √104.04 = 10.2 ✓' },
    { q: 'Part 4.1 — the unfolded rectangle', a: 'Floor (12 by 9) plus the far wall (12 by 8) unfolds to a rectangle 12 by 17.' },
    { q: 'Part 4.2 — the walk', a: '√(12² + 17²) = √(144 + 289) = √433 ≈ 20.81 ft.' },
    { q: 'Part 4.3 — all three unfoldings', a: 'Pair 9 + 8 = 17 against 12 → √(12² + 17²) = √433 ≈ 20.81. Pair 12 + 8 = 20 against 9 → √(20² + 9²) = √481 ≈ 21.93. Pair 12 + 9 = 21 against 8 → √(21² + 8²) = √505 ≈ 22.47.' },
    { q: 'Part 4.4 — the shortest', a: '√433 ≈ 20.81 ft, the 12 by 17 rectangle. Most students try this one first by accident, so ask them to justify it rather than assume it.' },
    { q: 'Part 4.5 — the general rule', a: 'For a room a × b × c, ADD THE TWO SMALLEST dimensions and pair that sum against the largest: shortest walk = √((sum of two smallest)² + (largest)²). Here 8 + 9 = 17 paired with 12. Why: comparing (a+b)² + c² with (a+c)² + b² cancels down to comparing 2ab with 2ac, so the smaller of b and c should be the one INSIDE the bracket. Accept any correct wording; the reasoning is a bonus, not a requirement.' },
    { q: 'Part 4.6 — how much further', a: '20.81 − 17 = 3.81 ft further, which is 3.81 ÷ 17 ≈ 22% further. Accept 20.8 and "about 3.8 ft" or "about 22%".' },
    { q: 'Part 5 — a real room', a: 'Answers vary. A typical classroom of about 8 m × 6 m × 3 m gives a flight of √(64 + 36 + 9) ≈ 10.4 m and a walk of √((3+6)² + 8²) = √145 ≈ 12.0 m. Mark the METHOD, the units and the stated measuring technique, not the number.' },
    { q: 'Part 6.3 — real-world 3D distance', a: 'Accept anything defended: aircraft separation (two planes can be close on a map and safely apart in altitude), drone delivery, lift shafts, sonar and submarines, a crane on a site, mining, a camera in a video game, GPS satellites. The key point is that a flat map answer understates the true distance.' },
  ],
  notes:
    'RUBRIC — four strands, 4 marks each, 16 total. Students see this on slides 4 and 5; the full descriptors are here.\n' +
    '· THE MODEL (4): room drawn to scale with the scale STATED, start and finish marked, twine measurement recorded with units and converted correctly. 4 = the model is accurate and they comment on its accuracy. 3 = complete and correct. 2 = built but no stated scale, or units missing. 1 = an attempt at a drawing.\n' +
    '· THE MATHEMATICS (4): correct method carried out accurately, each distance justified by a right triangle that is drawn. 4 = both routes agree AND 3.4 is explained properly. 3 = correct throughout with small slips. 2 = one route correct, or the right method with errors that change the answer. 1 = a relevant start.\n' +
    '· THE INVESTIGATION (4): more than the given case, plus a general rule. 4 = all three unfoldings, the shortest identified with a reason, a rule stated in their own words AND tested on a room of their own. 3 = all three found and the rule stated. 2 = two unfoldings, or three with no rule. 1 = tried a second case.\n' +
    '· THE WRITE-UP (4): followable by a classmate who was absent. 4 = every distance has a labelled diagram, units throughout, conclusions in full sentences, predictions revisited. 3 = clear and complete. 2 = readable but with gaps or missing units. 1 = answers only, no working.\n\n' +
    'The four question-only moments (slides 2, 6, 11, and the hunt on 13) carry no method on purpose. Slide 14 is an ANSWER slide — hold it back until pairs have found their own unfoldings, because the whole Investigation strand collapses if you show it early.\n\n' +
    'The most valuable thing in this project is the contrast in Part 4: the flight comes out at exactly 17 ft because the room was CHOSEN so it would, and the walk comes out at √433 ≈ 20.8 because nobody arranged it. Say that out loud. Students who have only ever met tidy textbook answers read an ugly number as a mistake, and they need to stop doing that before anything harder.\n\n' +
    'Expect two specific errors. First, adding 12 + 9 + 8 = 29 for the walk — walking the three edges is A route, but not the shortest, and it is worth showing on the model. Second, using √(x² + y² + z²) for the spider; the formula measures a straight line through the air, and the spider is on the surface. Both are good whole-class discussions rather than corrections.\n\n' +
    'Part 5 is where the project stops being about this one room. If time is short in lesson 2, measure the classroom together and let them finish 5 and 6 at home — but do not cut Part 4.5, which is the only place a general rule gets stated.\n\n' +
    'This project was split out of Algebra Track 1.1, which teaches the mathematics it uses (components, the distance formula, and chaining two right triangles into three dimensions). Do not run it before that lesson.\n\n' +
    'Image sources and licences are in content/freshman-math/P01_1/images/CREDITS.json — one photograph, CC BY-SA.',
}
