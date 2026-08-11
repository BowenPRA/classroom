// content/freshman-math/P01_1/plan.js
// One-page teacher plan for the project, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: 'Two 45-minute lessons in class, plus the write-up finished at home. Follows Algebra Track 1.1.',
  objective:
    'Students find two distances between the same pair of opposite corners of a 12 × 9 × 8 ft room: how far a fly FLIES through the air, and how far a spider WALKS across the surfaces. ' +
    'They predict both, build a scale model by folding a notebook to 90° and test the flight with twine, then calculate the flight two ways — chaining two right triangles, and in one step ' +
    'with √(x² + y² + z²) — and show the two agree. The walk is the investigation: unfolding the room into a flat net turns it back into a straight line, and comparing all three unfoldings ' +
    'leads to a general rule (pair the two smallest dimensions) that they state in their own words and test. They finish by measuring a real room, judging whether their answer is reasonable, ' +
    'and writing the whole thing up. Marked out of 16.',
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
    { term: 'Reasonable', def: 'an answer you can defend by comparing it to something you know the size of. Part 5.4 is asking for this, not for more decimal places' },
    { term: 'General rule', def: 'a statement that holds for ANY room, not just the one you were given. Part 4.5 is where the investigation marks are' },
  ],
  timeline: [
    { time: 'Lesson 1 · 0–8 min', phase: 'Brief and rubric', detail: 'Slides 1–5. The task is two distances and nothing else: how far the fly flies, how far the spider walks. Students copy the five-part list. Then STOP on the rubric (slides 4 and 5) and read all four strands aloud BEFORE any work — publishing the mark scheme first is most of what makes this a project rather than a long exercise. Point out that "got the right number" is not one of the four strands.' },
    { time: 'Lesson 1 · 8–14 min', phase: 'Part 1 · Predict', detail: 'Slide 6, in silence, no calculating. Collect a spread of both estimates on the board — most guess the fly well under 17 ft, and most assume the spider is only slightly further. Tell them explicitly not to go back and edit these; the comparison in 6.2 is worth marks.' },
    { time: 'Lesson 1 · 14–32 min', phase: 'Part 2 · Build the model', detail: 'Slides 7–9, and this is where to spend supervision. THE ERROR TO WATCH FOR: both ends of the twine taped to the flat page. The finish corner must be on the UPRIGHT page, so the string lifts off the paper and crosses the open air between the two pages — a string lying flat measures the floor diagonal (15 ft), not the flight. Also watch for a sagging string, which measures long, and for models with no stated scale. At 1 square = 1 foot on 5 mm paper the twine should cut to about 8.5 cm.' },
    { time: 'Lesson 1 · 32–45 min', phase: 'Part 3 · The fly', detail: 'Slide 10. Both routes on paper: floor diagonal 15 ft, then the flight 17 ft, then the same 17 ft in one step. Do NOT confirm the answer — the solutions are behind the stop slide and stay there until the projects are in. Circulate instead and ask "which triangle is that?"' },
    { time: 'Lesson 2 · 0–6 min', phase: 'Part 4 hook', detail: 'Slide 11: the spider cannot fly. Take suggestions for how you would even start. Do not accept "use the formula" — the formula measures a path through the air, and the spider is on the surface.' },
    { time: 'Lesson 2 · 6–20 min', phase: 'Part 4 · Unfold it', detail: 'Slide 12. The idea to land is that a flat surface makes Pythagoras legal again; the diagram shows the two surfaces laid out with the fold marked, but no diagonal and no answer. Floor + wall gives a 12 by 17 rectangle. Calculators come out here — this is the first answer in the whole track that is not a whole number, and that is worth naming out loud.' },
    { time: 'Lesson 2 · 20–34 min', phase: 'Part 4 · The investigation', detail: 'Slide 13, and this is where the Investigation marks are earned. Pairs hunt for the other unfoldings; most find two and need a nudge for the third. Then 4.5: the rule is to pair the two SMALLEST dimensions. Push for it in words, and push for a test on a room they invent. Resist every request for confirmation.' },
    { time: 'Lesson 2 · 34–45 min', phase: 'Parts 5 and 6 set', detail: 'Slides 14–16. Measure the classroom together as a worked example of Part 5 so they know what "say how you measured" means. Set the write-up and walk through the eight-point checklist on slide 16 before they leave.' },
    { time: 'After collection', phase: 'The solutions', detail: 'Slide 17 is a STOP slide; slides 18–23 are the worked answers and are only for after the projects are handed in. Run them as a marking review: the fly two ways and why the floor diagonal vanishes (stepper widget), the spider\'s 12 by 17 unfolding, all three routes drawn to scale, then the general rule and the 22% gap.' },
  ],
  answers: [
    { q: 'Part 2.1 — the twine', a: 'Should measure 17 ft at scale. On 5 mm squares at 1 square = 1 foot that is 8.5 cm; within about 3 mm is a good result. A reading near 15 ft (7.5 cm) means both ends were on the flat page — they measured the floor diagonal. Short of 8.5 cm usually means the string sagged.' },
    { q: 'Part 3.1 — floor diagonal', a: '√(12² + 9²) = √225 = 15 ft. A 9-12-15 triangle.' },
    { q: 'Part 3.2 — up to the ceiling corner', a: '√(15² + 8²) = √289 = 17 ft. The floor diagonal is now a LEG of the second triangle.' },
    { q: 'Part 3.3 — one step, and why it agrees', a: '√(12² + 9² + 8²) = √289 = 17 ft. It agrees because f² = x² + y², so substituting into d² = f² + z² gives d² = x² + y² + z². You would square the floor diagonal immediately after taking its square root, so the root never needed doing.' },
    { q: 'Part 4.1 — the unfolded rectangle', a: 'Floor (12 by 9) plus the wall (12 by 8) unfolds to a rectangle 12 by 17, because the 9 ft of floor and the 8 ft of wall lie end to end.' },
    { q: 'Part 4.2 — the walk', a: '√(12² + 17²) = √(144 + 289) = √433 ≈ 20.81 ft.' },
    { q: 'Part 4.3 — all three unfoldings', a: 'Pair 9 + 8 = 17 against 12 → √(12² + 17²) = √433 ≈ 20.81. Pair 12 + 8 = 20 against 9 → √(20² + 9²) = √481 ≈ 21.93. Pair 12 + 9 = 21 against 8 → √(21² + 8²) = √505 ≈ 22.47.' },
    { q: 'Part 4.4 — the shortest', a: '√433 ≈ 20.81 ft, the 12 by 17 rectangle. Many students try this one first by accident, so ask them to justify it rather than assume it.' },
    { q: 'Part 4.5 — the general rule', a: 'For a room a × b × c, ADD THE TWO SMALLEST dimensions and pair that sum against the largest: shortest walk = √((sum of two smallest)² + (largest)²). Here 8 + 9 = 17 paired with 12. Why: comparing (a+b)² + c² with (a+c)² + b² cancels down to comparing 2ab with 2ac, so the smaller of b and c belongs INSIDE the bracket. Accept any correct wording; the reasoning is a bonus, not a requirement.' },
    { q: 'Part 4.6 — how much further', a: '20.81 − 17 = 3.81 ft further, which is 3.81 ÷ 17 ≈ 22% further. Accept "about 3.8 ft" or "about 22%".' },
    { q: 'Part 5 — a real room', a: 'Answers vary. A typical classroom of about 8 m × 6 m × 3 m gives a flight of √(64 + 36 + 9) ≈ 10.4 m and a walk of √((3+6)² + 8²) = √145 ≈ 12.0 m. Mark the METHOD, the units and the stated measuring technique, not the number.' },
    { q: 'Part 6.3 — real-world 3D distance', a: 'Accept anything defended: aircraft separation (two planes can be close on a map and safely apart in altitude), drone delivery, lift shafts, sonar and submarines, a crane on a site, mining, a camera in a video game, GPS satellites. The key point is that a flat map answer understates the true distance.' },
  ],
  notes:
    'THE DECK IS IN TWO HALVES. Slides 1–16 are the project and contain no answers at all — the two room diagrams there are deliberately blank, showing the dimensions and the two end points but no ' +
    'lengths and no diagonal. Slide 17 is a STOP slide. Slides 18–23 are the worked solutions and must not be shown until the projects are collected. If you show slide 18 early you have given away ' +
    'Part 3, and if you show slide 21 early you have given away the entire Investigation strand.\n\n' +
    'RUBRIC — four strands, 4 marks each, 16 total. Students see this on slides 4 and 5; the full descriptors are here.\n' +
    '· THE MODEL (4): room drawn to scale with the scale STATED, start and finish marked, twine measurement recorded with units and converted correctly. 4 = accurate and they comment on its accuracy. 3 = complete and correct. 2 = built but no stated scale, or units missing. 1 = an attempt at a drawing.\n' +
    '· THE MATHEMATICS (4): correct method carried out accurately, each distance justified by a right triangle that is drawn. 4 = both routes agree AND the substitution in 3.3 is explained. 3 = correct throughout with small slips. 2 = one route correct, or the right method with errors that change the answer. 1 = a relevant start.\n' +
    '· THE INVESTIGATION (4): more than the given case, plus a general rule. 4 = all three unfoldings, the shortest identified with a reason, a rule stated in their own words AND tested on a room of their own. 3 = all three found and the rule stated. 2 = two unfoldings, or three with no rule. 1 = tried a second case.\n' +
    '· THE WRITE-UP (4): followable by a classmate who was absent. 4 = every distance has a labelled diagram, units throughout, conclusions in full sentences, predictions revisited. 3 = clear and complete. 2 = readable but with gaps or missing units. 1 = answers only, no working.\n\n' +
    'THE MODEL ERROR THAT MATTERS. The fly lands on a corner of the CEILING, so on the folded notebook that point sits on the UPRIGHT page, not the flat one. The twine therefore runs from a corner of ' +
    'the flat page to a corner of the upright page and lifts clear of the paper in between. Pairs who tape both ends to the flat page have modelled the floor diagonal and will measure 15 ft — which is ' +
    'a genuinely useful thing to hold up to the class, because 15 ft is also the first number of the correct method.\n\n' +
    'The most valuable thing in this project is the contrast in Part 4: the fly comes out at exactly 17 ft because the room was CHOSEN so it would, and the spider comes out at √433 ≈ 20.8 because ' +
    'nobody arranged it. Say that out loud. Students who have only ever met tidy textbook answers read an ugly number as a mistake, and they need to stop doing that before anything harder.\n\n' +
    'Expect two specific errors beyond the model one. First, adding 12 + 9 + 8 = 29 for the walk — walking three edges is A route, but not the shortest, and it is worth showing on the model. Second, ' +
    'using √(x² + y² + z²) for the spider; that formula measures a straight line through the air, and the spider is on the surface. Both are good whole-class discussions rather than corrections.\n\n' +
    'There is no speed, time or duration anywhere in this project. It asks for two distances. An earlier draft added a flight time and a "where is it after 3 seconds" part; it made the brief longer to ' +
    'read without making it richer to do, and it is gone.\n\n' +
    'Part 5 is where the project stops being about this one room. If time is short in lesson 2, measure the classroom together and let them finish 5 and 6 at home — but do not cut Part 4.5, which is ' +
    'the only place a general rule gets stated.\n\n' +
    'This project was split out of Algebra Track 1.1, which teaches the mathematics it uses (components, the distance formula, and chaining two right triangles into three dimensions). Do not run it ' +
    'before that lesson.\n\n' +
    'Image sources and licences are in content/freshman-math/P01_1/images/CREDITS.json — one photograph, CC BY-SA.',
}
