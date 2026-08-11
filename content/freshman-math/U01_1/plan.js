// content/freshman-math/U01_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '90 minutes (or two 45-minute periods — break after slide 20, the practice pair)',
  objective:
    'Students can find the distance between two numbers as |a − b| and a midpoint as their average; plot ordered pairs on the Cartesian plane and name the four quadrants; ' +
    'split a slanted line into its x and y components and use those components to find both the midpoint and the distance between two points; define a dimension as the number ' +
    'of mutually perpendicular axes; derive the 3D distance formula by chaining two right triangles; and explain why √(x² + y²) ≠ x + y. They then test the 3D result physically ' +
    'by modelling a room in a folded notebook and measuring a length of twine against their calculation.',
  materials: [
    'Projector / TV for the lesson deck',
    'Student notebooks (one per student — the notebook IS the 3D model in the project)',
    'Twine or string, about 60 cm per pair',
    'Scissors and sticky tape (one set per pair)',
    'Rulers — 30 cm, with millimetres',
    'Mini whiteboards + markers (one per pair)',
  ],
  vocab: [
    { term: 'Difference', def: 'the gap between two numbers; bigger − smaller. The same thing as the distance between them on a number line' },
    { term: 'Absolute value', def: 'the distance of a number from zero, written |a|. Never negative. Also called the magnitude — the size with the direction thrown away. NOT "delete the minus sign", which is only what it looks like from outside' },
    { term: 'Midpoint', def: 'the point with an equal gap on each side, (a + b) / 2. The same calculation as the average (mean) of the two numbers' },
    { term: 'Coordinates / ordered pair', def: 'the pair (x, y) fixing a point — x across FIRST, then y up. "Ordered" matters: (4, 3) is not (3, 4)' },
    { term: 'Cartesian plane', def: 'the xy-plane, the coordinate plane — three names for the same object. Named after René Descartes (1596–1650), who joined algebra to geometry' },
    { term: 'Quadrant', def: 'one of the four regions the axes cut the plane into, numbered I–IV anticlockwise from (1, 0). A point on an axis is in no quadrant' },
    { term: 'Component', def: 'how far a line goes in one axis direction on its own — the x-component and the y-component. Each is a distance on a single number line' },
    { term: 'Hypotenuse', def: 'the longest side of a right triangle, opposite the right angle. The distance between two points is the hypotenuse of their component triangle' },
    { term: 'Dimension', def: 'the number of axes you can move along: 1D a line, 2D a plane, 3D space' },
    { term: 'Perpendicular', def: 'at right angles, 90°. Axes are always perpendicular to each other — a leaning axis would repeat one already there' },
    { term: 'Axis / axes', def: 'singular and plural. Said "AK-siss" and "AK-seez". Worth drilling — students write "axises" constantly' },
    { term: "Freshman's dream", def: 'the standard textbook name for wrongly splitting a root across a plus sign: √(x² + y²) ≠ x + y' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter', detail: 'Title slide. Students draw a number line −6 to 8, mark −3 and 5, and write in ONE SENTENCE how far apart they are and how they know. The sentence matters more than the 8 — you are collecting the words they reach for.' },
    { time: '5–18 min', phase: 'Distance on a line', detail: 'Slide 2 asks for the CALCULATION, not the answer. Then distance = difference = bigger − smaller (copy). Slide 4 is the deliberate trap: −3 − 5 = −8, so which is it? Let them argue before revealing that a distance is a size and sizes are not negative. Then absolute value as DISTANCE FROM ZERO (copy, Draw This), then |a − b| = |b − a| and the three-part drill. Watch for the C) answer 0 — cancelling signs instead of subtracting.' },
    { time: '18–26 min', phase: 'Midpoint', detail: 'Slide 7 poses it with no method; take guesses. Then the midpoint formula (copy). Slide 9 is the one to protect time for: the midpoint IS the average, and the two-line derivation from m − a = b − m shows the formula is forced rather than invented. This is the first taste of the deck arguing instead of asserting.' },
    { time: '26–44 min', phase: 'The plane', detail: 'Slide 10 asks how many numbers pin a point on the floor. Then: cross two number lines at 90° (copy, Draw This); ordered pairs and (4,3) ≠ (3,4) (copy); Descartes and the three names — xy-plane, Cartesian plane, coordinate plane — plus "I think, therefore I am"; the four quadrants (copy, Draw This); then the anticlockwise sweep from (1, 0). Flag the unit circle as a promise about trigonometry, and move on — do NOT teach angles today.' },
    { time: '44–60 min', phase: 'Components, midpoint, distance', detail: 'Slide 16 poses the slanted line with no formula. The key move is slide 17: you cannot measure the slant, but you CAN measure across and up, and those are number-line distances. Drop the corner in and a right triangle appears (copy, Draw This). Then midpoint by averaging each component (copy), then distance as the hypotenuse (copy). Slide 20 is the practice pair P(1,2), Q(7,10) — all three parts before anyone speaks. Natural break point here if splitting over two periods.' },
    { time: '60–75 min', phase: 'Dimensions and 3D', detail: 'Slide 21 asks students to define "dimension" — most cannot, which is the point. Then dimension = count of perpendicular axes (copy), the axis/axes plural, then the z-axis (copy). Slide 24 is the two-triangle method (Draw This): the first hypotenuse becomes a LEG of the second. Slide 25 is the payoff — substituting makes the root of f vanish and the formula just grows a square. Then the 3D formula (copy) and the freshman\'s dream (copy). Over-teach the last one; every class tries it.' },
    { time: '75–90 min', phase: 'The project', detail: 'Slide 28: guesses for the fly BEFORE any calculation, on the board — most come in low. Pairs compute 17 ft both ways, then the stepper widget checks it (nobody presses until every pair has a number). Time = 5 s. Then the 3-second question. Finally the notebook model: fold to 90°, draw the room to scale, tape and cut the twine, measure it against the calculation.' },
  ],
  answers: [
    { q: 'Starter / slide 2: distance from −3 to 5', a: '8. Either 5 − (−3) = 8, or |−3 − 5| = |−8| = 8.' },
    { q: 'Slide 4: is it 8 or −8?', a: '8. The −8 records the DIRECTION (backwards down the line); the size is 8 either way. There is no negative distance.' },
    { q: 'Slide 6 drill', a: 'A) |3 − 11| = 8   B) |−7 − (−2)| = |−5| = 5   C) |−6 − 6| = |−12| = 12. Expect 0 for C from cancelling signs.' },
    { q: 'Slide 7: midpoint of −3 and 5', a: '1. (−3 + 5) ÷ 2 = 1. Four steps each side.' },
    { q: 'Slide 9: why is the formula (a+b)/2?', a: 'Halfway means m − a = b − m. Rearranged: 2m = a + b, so m = (a+b)/2.' },
    { q: 'Slide 10: how many numbers to pin a point on the floor?', a: 'Two. One number only fixes a position along a single line; the chair could be anywhere on a whole line of positions.' },
    { q: 'Slide 17: components of A(−4, −2) and B(4, 4)', a: 'across |4 − (−4)| = 8, up |4 − (−2)| = 6.' },
    { q: 'Slide 18: midpoint of A(−4, −2) and B(4, 4)', a: '(0, 1). Averaging each component. It lands on the y-axis, so students can check it by eye.' },
    { q: 'Slide 19: distance from A to B', a: '√(8² + 6²) = √100 = 10. A 6-8-10 triangle.' },
    { q: 'Slide 20: P(1, 2) and Q(7, 10)', a: 'Components 6 and 8. Midpoint (4, 6). Distance √(36 + 64) = 10.' },
    { q: 'Slide 21: what is a dimension?', a: 'The number of axes — independent directions — you can move along. Accept anything that gets at "directions that cannot be built from the others".' },
    { q: 'Slide 26 check: (0,0,0) to (2, 3, 6)', a: '√(4 + 9 + 36) = √49 = 7.' },
    { q: 'Project Q1: how far does the fly travel?', a: '17 ft. Floor diagonal √(12² + 9²) = 15, then √(15² + 8²) = 17. One step: √(144 + 81 + 64) = √289 = 17.' },
    { q: 'Project Q2: how long does the flight take?', a: '17 ÷ 3.4 = 5 seconds.' },
    { q: 'Project Q3: the first 3 seconds', a: 'Distance 3 × 3.4 = 10.2 ft (three fifths of 17). Components 0.6 × (12, 9, 8) = (7.2, 5.4, 4.8). Check: √(51.84 + 29.16 + 23.04) = √104.04 = 10.2 ✓' },
    { q: 'Project: what should the twine measure?', a: 'At 1 square = 1 ft on standard 5 mm squares, 17 ft = 8.5 cm. Anything within about 3 mm is a good result; short usually means a sagging string.' },
    { q: 'Homework 1', a: 'All three pairs are 6-8-10, so every distance is 10. Midpoints: (6, 8); (1, 1); (−4, −3).' },
    { q: 'Homework 2', a: 'Components 3, 4, 12. √(9 + 16 + 144) = √169 = 13.' },
    { q: 'Homework 3: the 6 × 6 × 7 cupboard', a: '√(36 + 36 + 49) = √121 = 11 ft.' },
    { q: 'Homework 4: when is √(x² + y²) = x + y actually true?', a: 'Whenever one of them is 0 and the other is not negative — e.g. x = 0, y = 5 gives √25 = 5. It does not rescue the rule: a rule has to hold for ALL values, and one lucky case is not a proof. (Strictly: it needs xy = 0 with x + y ≥ 0.)' },
    { q: 'Exit question: 4 ft × 4 ft × 2 ft room', a: '√(16 + 16 + 4) = √36 = 6 ft. Friendly because the three squares happen to add to a perfect square — which is exactly why the numbers in this lesson were chosen, and why real-life answers are usually ugly.' },
  ],
  notes:
    'This is the first lesson of the Algebra Track and it sets the tone: the deck ARGUES for its formulas rather than issuing them. Resist the urge to shortcut to the boxed result — ' +
    'slides 9, 24 and 25 are derivations, and they are the reason the 3D formula is memorable instead of memorised. If time runs short, cut a practice slide, not a derivation. ' +
    'The six question-only slides (2, 7, 10, 16, 21, 28) carry no method on purpose. Take guesses, write them on the board, and let them be wrong — the gap between the guess and the ' +
    'answer is where the lesson happens. Slide 28 in particular: most students guess well under 17 ft. ' +
    'On vocabulary: this deck deliberately does NOT simplify away the real words. Absolute value, magnitude, ordered pair, quadrant, perpendicular, component, hypotenuse, dimension and ' +
    'anticlockwise are all used properly, because these students meet them in every later textbook. Say each one slowly the first time and write it up. The English is kept simple; the ' +
    'terminology is not. Watch two specific traps: "axises" for axes, and reading |a| as brackets. ' +
    'The freshman\'s dream (slide 27) deserves more time than it looks like it needs. Every algebra class Mr Bowen has taught has tried to split that root, and the 3-4-5 counterexample is ' +
    'the fastest cure — if it were true, the hypotenuse would equal the other two sides added together. ' +
    'The project is the assessment. A calculation students cannot check is just a hope; the twine is what turns 17 ft into something they believe. Expect the notebook not to stay at 90° on ' +
    'its own — that is why it is a pair task. Numbers throughout were chosen so the arithmetic never competes with the idea: the plane example is a 6-8-10, and the room chains 9-12-15 into ' +
    '15-8-17, so both steps land on whole numbers. ' +
    'The course is flagged bilingual:false in content/courses.js, so this deck is English-only and the EN/VN toggle is hidden. ' +
    'Image sources and licences are in content/freshman-math/U01_1/images/CREDITS.json — both openly licensed (public domain and CC BY-SA).',
}
