// content/freshman-math/U01_2/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '75 minutes (or two 45-minute periods — break after slide 11, "Measure It Anywhere", which is the end of the conceptual half).',
  objective:
    'Students can find the distance between two points by drawing the right triangle rather than recalling the formula; define a line, a line segment and a ray, and state that ' +
    'any two different points determine exactly one line; define slope as rise over run and explain why a straight line has the same slope wherever it is measured; use ' +
    'm = (y₂ − y₁)/(x₂ − x₁) with a consistent direction of travel; classify a slope as positive, negative, zero or undefined and explain why zero slope is not the same as no ' +
    'slope; and convert a slope between a fraction, a decimal and a percentage gradient.',
  materials: [
    'Projector / TV for the lesson deck',
    'Student notebooks — squared paper for the sketches',
    'Rulers (one each; the two-points-one-line demonstration needs them)',
    'Mini whiteboards + markers (one per pair)',
  ],
  vocab: [
    { term: 'Line', def: 'perfectly straight, no thickness, and never ending — it runs on for ever in BOTH directions. The arrowheads on the diagram are not decoration; they are the definition' },
    { term: 'Line segment', def: 'the piece of a line between two points. It has two ends. This is what a ruler actually draws, and what students have been calling a "line" all their lives' },
    { term: 'Ray', def: 'starts at one point and goes on for ever in one direction only' },
    { term: 'Slope', def: 'how far a line rises for each step across: rise ÷ run. Written m. The same at every point along a straight line' },
    { term: 'Rise', def: 'the change in y — how far up (or down). Negative if the line falls' },
    { term: 'Run', def: 'the change in x — how far across. Negative if you travel leftwards' },
    { term: 'Gradient', def: 'the same thing as slope. The word used on road signs, in engineering, and in British textbooks' },
    { term: 'Subscript', def: 'the small number in x₁ or y₂. A LABEL saying which point you mean — not a power and not multiplication. Students read it as multiplication constantly' },
    { term: 'Delta (Δ)', def: 'the Greek capital letter used to mean "the change in". Δy is the rise, Δx is the run' },
    { term: 'Undefined', def: 'what a vertical line\'s slope is. Not infinite, not zero, not very large — there is NO number that answers the question, because the run is 0' },
    { term: 'Rate', def: 'so much of one thing per one of another. A slope is a rate: metres up per metre across' },
  ],
  timeline: [
    { time: '0–6 min', phase: 'Starter', detail: 'Title slide. Students plot A(−4, −2) and B(4, 4), join them, and draw the right triangle underneath. This is the SAME pair as lesson 1.1, and that is deliberate — the whole deck is built on asking a second question of one triangle. Slide 2 then removes the formula and asks whether they can still do it. Collect the word "triangle" from the room before moving on.' },
    { time: '6–20 min', phase: 'Retread: distance', detail: 'Slide 3 is the retread, and the point of it is the THIRD CORNER: they were given two points, a triangle needs three, so they add one. Copy the distance formula and say out loud that the formula IS the triangle written down. Slide 4 is the three-move procedure, with the freshman\'s dream as the reveal. Slide 5 is two quick distances (3-4-5 and 5-12-13). Keep this section moving — it is a retread, not a re-teach, and the new material starts at slide 6.' },
    { time: '20–34 min', phase: 'What a line is', detail: 'Slide 6 asks students to define "line" and most cannot, which is the point; the lunch-queue comparison is there to make the everyday meaning visible so it can be set aside. Then line / segment / ray (copy, Draw This) — over-teach SEGMENT, because that is what they have always drawn and called a line. Slide 8 needs rulers ON DESKS: one dot, spin the ruler, infinitely many; add a second dot, it locks. Say "two points determine a line" and copy it. This is the fact the rest of the course runs on.' },
    { time: '34–52 min', phase: 'Slope', detail: 'Slide 9 poses the ramp-versus-cliff question with no numbers. Slide 10 redraws the SAME triangle and throws the hypotenuse away: slope compares the two legs (copy, Draw This). Slide 11 is the one to protect time for — two identical 4-across-3-up steps land on the line, so 3/4 and 6/8 are the same answer, and a straight line has ONE slope. That is what "straight" means. Then the symbols: subscripts, Δ, and m (copy). Slide 13 is the consistency rule (copy) — either order is fine, mixing them is not.' },
    { time: '52–64 min', phase: 'The four kinds, and slope as a rate', detail: 'Slide 14: predict the sign by eye, reading left to right (copy, Draw This). Slide 15 separates ZERO from UNDEFINED and both columns get copied — this is the confusion that costs the most marks, so do not rush it. Say explicitly that 8 ÷ 0 is not a big number, it is not a number. Slide 16 takes slope outside: a 25% road sign is a fraction (copy). Slide 17 is the engagement beat — order three real slopes by instinct first, then by decimal. Most classes rank 12% as the steepest because 12 is the biggest number on the slide; it is the gentlest.' },
    { time: '64–75 min', phase: 'Scaffolded practice', detail: 'Slide 18 is the four-move procedure (copy). Slide 19 is Mr Bowen\'s worked example, P(−2, 5) and Q(4, −4) — make them commit to "negative" from the sketch BEFORE the arithmetic. Slide 20 is the drill, with a horizontal and a vertical hidden in it. Slide 21 is the find-the-mistake slide; the answer they must give is a line NUMBER plus the sketch-based reason, not just a corrected value. Finish on the checklist and the exit question.' },
  ],
  answers: [
    { q: 'Starter / slide 3: distance from A(−4, −2) to B(4, 4)', a: 'Legs 8 across and 6 up, so d = √(64 + 36) = √100 = 10. Same pair, same answer as lesson 1.1.' },
    { q: 'Slide 4 reveal: why never add the sides?', a: '√(x² + y²) ≠ x + y. Here 8 + 6 = 14, which is the distance you walk going across AND THEN up. A straight line is always shorter than the corner route, so 14 was impossible before checking.' },
    { q: 'Slide 5: C(−3, 2) to D(1, 5)', a: 'across 4, up 3, d = √25 = 5. A 3-4-5 triangle.' },
    { q: 'Slide 5: E(−5, −1) to F(7, 4)', a: 'across 12, up 5, d = √169 = 13. A 5-12-13 triangle.' },
    { q: 'Slide 6: what is a line?', a: 'Perfectly straight, no thickness, never ending in either direction. A queue of people has a first and last person and is not straight; a ruler mark has two ends and a measurable thickness. Accept anything that reaches "goes on for ever".' },
    { q: 'Slide 8: how many lines through one point? Through two?', a: 'Through one point, infinitely many — the ruler can still spin. Through two different points, exactly one. Have them try it with a ruler rather than telling them.' },
    { q: 'Slide 9: what number tells a ramp from a cliff?', a: 'Anything that compares how far UP with how far ACROSS. Accept "how much it goes up for each step along" — that is the definition, and slide 10 only gives it a name.' },
    { q: 'Slide 10: slope of the line through A and B', a: 'rise 6, run 8, so m = 6/8 = 3/4.' },
    { q: 'Slide 11: why is 3/4 the same as 6/8?', a: 'Because the line is straight, so the small 4-across-3-up step and the whole 8-across-6-up journey are similar triangles. Straightness IS constant slope; if the slope changed, the line would bend.' },
    { q: 'Slide 13: A to B versus B to A', a: '+6/+8 and −6/−8. Both are 3/4 — the two minus signs cancel. The error to hunt for is −6/+8, from swapping direction between the top and the bottom.' },
    { q: 'Slide 15: (−3, 4) and (3, 4)', a: 'rise 0, run 6, m = 0/6 = 0. A horizontal line HAS a slope, and it is zero.' },
    { q: 'Slide 15: (2, −1) and (2, 7)', a: 'rise 8, run 0, m = 8/0 is undefined. Not infinite, not zero — no number works. Vertical lines are the one case with no slope.' },
    { q: 'Slide 16: what does a 25% road sign mean?', a: '25 up for every 100 along, so 1 up for every 4 along: m = 1/4 = 0.25. Same slope written three ways.' },
    { q: 'Slide 17: order 1 in 5, 12%, and 18 cm per 28 cm', a: '1/5 = 0.2; 12/100 = 0.12; 18/28 ≈ 0.64. Steepest first: C (the staircase), then A (the hill), then B (the road). Expect most of the class to rank B first because 12 is the biggest number written on the slide.' },
    { q: 'Slide 19: slope through P(−2, 5) and Q(4, −4)', a: 'run = 4 − (−2) = 6, rise = −4 − 5 = −9, so m = −9/6 = −3/2. Insist on the tidied form, and on "negative" being predicted from the sketch first.' },
    { q: 'Slide 20: the three slopes', a: 'A) (1,2) and (5,10): m = 8/4 = 2.   B) (−3,4) and (3,4): m = 0/6 = 0, horizontal.   C) (2,−1) and (2,7): m = 8/0, undefined, vertical. The standard wrong answer on C is 0 — 0 comes from the RISE vanishing, not the run.' },
    { q: 'Slide 21: Mr Bowen’s mistake', a: 'Line 2. The run was taken R → S but the rise was taken S → R. Consistently: rise = −3 − 3 = −6, so m = −6/6 = −1. The sketch already ruled out a positive answer, because the line falls to the right.' },
    { q: 'Homework 1', a: '(0,0) and (6,8): m = 8/6 = 4/3, d = 10.   (−4,7) and (2,−1): m = −8/6 = −4/3, d = 10.   (3,−5) and (3,6): m undefined (vertical), d = 11. The third one has no slope but still has a perfectly ordinary distance — that contrast is the point of including it.' },
    { q: 'Homework 2', a: '(1,1) and (9,1): zero — the y-values match, so it is horizontal. (−2,8) and (5,−6): negative — x increases while y decreases.' },
    { q: 'Homework 3: the 1 in 12 ramp', a: 'rise ÷ run = 1/12, and the rise is 40 cm, so the run is 40 × 12 = 480 cm = 4.8 m. Worth pausing on: this is a real building regulation, and it is why ramps take up so much space.' },
    { q: 'Homework 4: slope 2/3 through (1, 2)', a: 'Step 3 right and 2 up repeatedly: (4, 4), (7, 6), (10, 8). Going backwards works too — 3 left and 2 down gives (−2, 0). Any answer is acceptable if they can say which step they used and why.' },
    { q: 'Exit question: a line through (2, 3) with slope 5', a: 'Slope 5 is 5/1, so step 1 right and 5 up: (3, 8), then (4, 13). Backwards gives (1, −2). No formula required — that is the whole point of the question.' },
  ],
  notes:
    'THE ARCHITECTURE: one triangle, two questions. A(−4, −2) and B(4, 4) is the exact pair from lesson 1.1, so the class draws a triangle they have drawn before and then asks it ' +
    'something new — the hypotenuse is a distance (10), the two legs are a slope (3/4). Say that out loud at slide 10 and again at the closing slide. If the retread runs long, cut ' +
    'slide 5, not slide 3: the third-corner idea is what makes the rest work. ' +
    'The numbers were chosen so nothing needs a calculator. 8 and 6 give both a whole distance and a tidy slope; the two practice distances are 3-4-5 and 5-12-13; the only untidy ' +
    'number in the deck is 18/28 on slide 17, and it is untidy on purpose. ' +
    'PROTECT SLIDE 11. "A straight line has one slope" sounds obvious and is not — it is the reason a single number can describe an infinite line, and it is what makes every later ' +
    'slope question well-posed. The two identical staircase steps are there so students can SEE it rather than be told. ' +
    'PROTECT SLIDE 15. Zero versus undefined is the highest-cost confusion in this topic. Both columns get copied. Be explicit that 8 ÷ 0 is not a large number and not zero — there ' +
    'is no number that works. Meanwhile a horizontal line genuinely HAS a slope, and it is 0. Expect to come back to this next lesson. ' +
    'On the question-only slides (2, 6, 9): no numbers, no method, take guesses, write them on the board, and let them be wrong. Slide 6 in particular — most students cannot define ' +
    '"line", and discovering that they cannot is what makes the definition land. Slide 8 needs rulers actually in hands; the ruler spinning through one dot and jamming on two is a ' +
    'ten-second demonstration that no amount of explanation replaces. ' +
    'On vocabulary: the English is kept simple, the terminology is not. Line segment, ray, rise, run, gradient, subscript, delta, undefined and rate are all named properly, because ' +
    'these students meet every one of them in later textbooks. Two specific traps to watch: reading x₁ as x times 1, and saying "no slope" when they mean "slope of zero". ' +
    'There is deliberately NO widget in this deck. What the class needs in part 4 is time on paper, and every practice slide is a static question with a click-to-reveal answer. ' +
    'There are also no photographs — two Wikimedia candidates were tried for slide 16 and both were rejected (one illegible at projector size, one showing an identifiable person ' +
    'rather than a gradient), so SLOPE_AS_RATE draws the road sign instead and the hill is drawn to scale against its own number. ' +
    'The course is flagged bilingual:false in content/courses.js, so this deck is English-only and the EN/VN toggle is hidden. ' +
    'WHAT COMES NEXT: this lesson stops deliberately at slope as a number. The y-intercept and y = mx + b are lesson 1.3, and slide 8 ("two points determine a line") is the hinge ' +
    'that sets it up — if two points fix a line completely, an equation with two parameters is exactly what is needed to write it down.',
}
