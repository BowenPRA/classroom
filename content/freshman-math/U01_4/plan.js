// content/freshman-math/U01_4/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration:
    'About 75 minutes — two periods, or one long block. The natural split is after slide 12 ("Where You Are So Far"): period 1 is plotting y = x² and the a and k sliders, period 2 is x² + 2x and ' +
    'the bracket. Do NOT split between slides 13 and 17 — the prediction they box at slide 13 has to be checked in the same room.',
  objective:
    'Students can plot y = x² by hand from a table of values and name its vertex and axis of symmetry; state and use the effect of each of the three constants in y = a(x − h)² + k — k slides the ' +
    'curve vertically, a changes its width and, when negative, opens it downwards, and h slides it horizontally; plot a parabola from its vertex outwards using symmetry rather than a full table; ' +
    'explain why (x − 2)² moves the curve to the RIGHT by solving for the x that makes the bracket zero; recognise x² + 2x + 1 as (x + 1)²; and read the vertex (h, k) straight off a vertex-form ' +
    'equation without any working.',
  materials: [
    'Projector / TV for the lesson deck',
    'SQUARED PAPER, at least two sheets per student — plain paper makes the plotting a chore and the symmetry invisible',
    'Rulers, one each, for the axes',
    'Sharp pencils and erasers — every curve in this lesson is drawn freehand and redrawn',
    'Coloured pencils, two per student, so x² and the moved curve stay apart on the same axes',
    'NO CALCULATORS. Every value in this lesson is a small square or a doubling, and reaching for a calculator is how (−3)² becomes −9',
  ],
  vocab: [
    { term: 'Parabola', def: 'the curve you get from squaring. Not a U and not a V: the bottom is smooth and the arms keep getting steeper. Say the word often — students will call it "the U shape" all lesson otherwise' },
    { term: 'Vertex', def: 'the turning point of the parabola — the bottom if it opens up, the top if it opens down. Plural: vertices. The whole lesson is about finding this one point' },
    { term: 'Axis of symmetry', def: 'the vertical mirror line through the vertex. Every point on the curve has a twin the same distance the other side of it, which is what makes plotting from the vertex outwards twice as fast' },
    { term: 'Coefficient', def: 'the number multiplying a term — the a in ax². Worth naming here because "the number in front" stops working the moment it is a fraction' },
    { term: 'Transformation', def: 'a move that changes where a graph is without changing what it fundamentally is. Slide, stretch, flip' },
    { term: 'Vertex form', def: 'y = a(x − h)² + k. Called that because the vertex (h, k) can be read straight out of it. Contrast with x² + 2x, which hides its vertex completely' },
    { term: 'Maximum / minimum', def: 'the highest or lowest value the curve reaches. A positive a gives a minimum at the vertex, a negative a gives a maximum. Needed at slide 11 and again in the exit question' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter and the guess', detail: 'Title slide: axes on squared paper, x from −5 to 5 and y from −2 to 10. Slide 2 shows only "y = x²" and asks for a SKETCH, in pairs, before anything is worked out. Collect two or three guesses on the board — most classes offer a straight line and a U. Do not correct either one yet.' },
    { time: '5–18 min', phase: 'Plotting y = x²', detail: 'Slide 3: the table, x from −3 to 3, worked on paper. Circulate for the two left-hand columns — (−3)² is the entire trap and about a third of the room writes −9. Then they plot and join with a smooth curve. Slide 4 is the check, slide 5 names the parts (copy down: parabola, vertex, axis of symmetry). Insist the joining curve is smooth; a seven-point dot-to-dot is not a parabola.' },
    { time: '18–26 min', phase: 'The k slider', detail: 'Slide 6 asks them to PREDICT y = x² + 1 without plotting — every y gets 1 added, so the whole curve rises. Slide 7 shows it with the gap measured at three places. Copy the rule. Slide 8 is the first slider: drag k slowly and have the class call the vertex out BEFORE you stop. The grey dashed curve is y = x², left behind on purpose.' },
    { time: '26–36 min', phase: 'The a slider', detail: 'Slide 9 poses 3x² and −x² and asks which is which. Slide 10 is the slider — go past 1 first (narrower), then towards 0 (wider), then below zero and let the class react. Slide 11 gives the reason rather than the rule: multiplying every y by 3 lifts the arms, multiplying by a negative sends them all below the axis, so the vertex becomes a MAXIMUM. Copy. Slide 12 names what is still missing: sideways.' },
    { time: '36–48 min', phase: 'y = x² + 2x — the turn of the lesson', detail: 'Slide 13: they theorise, in writing, in a box, before any plotting. Take predictions out loud — "same curve moved up 2" is the common one and it is wrong, which is the point. Slide 14 is the table, worked in two rows (x² and 2x) then added, so the −1 column is visibly 1 + (−2). Slide 15 shows both curves: same shape, but the vertex is at (−1, −1), off the y-axis AND below the x-axis. Let them check their boxed prediction themselves.' },
    { time: '48–54 min', phase: 'Lifting it onto the axis', detail: 'Slide 16 asks what to ADD so the bottom of the curve lands exactly on the x-axis. It is one below, so the answer is 1. Slide 17 makes the move and writes the new equation: y = x² + 2x + 1. This is the hinge of the whole lesson — the +1 the class chose for a picture reason is the same +1 that turns the expression into a perfect square on the next slide. Do not hand them the 1; wait for it.' },
    { time: '54–66 min', phase: 'The bracket', detail: 'Slide 18 asks where x² + 2x + 1 has been seen before; the reveal is (x + 1)². Slide 19 gives the reason the bracket is worth having — a square is never negative, so the smallest y is 0 and it happens only when the bracket is zero. Copy. Slide 20 plots it from the vertex outwards; slide 21 is the check, with the symmetric pairs tied together. This method replaces the table from here on.' },
    { time: '66–74 min', phase: 'The sign trap, then the form', detail: 'Slide 22 is their turn: y = (x − 2)², two minutes, no table. Slide 23 shows it going RIGHT and gives the only reliable method — solve the bracket, never read the sign. Copy. Slide 24 lets them check that live on the h slider. Slide 25 assembles the whole form with the vertex at (h, k); this is the copy-down that the lesson has been building to.' },
    { time: '74–80 min', phase: 'Build one, and close', detail: 'Slide 26: call out a vertex and have the class give you a, h and k before you touch a slider. Slide 27 is quick fire, four equations read aloud with no plotting. Then the checklist and the homework. If time is short, cut slide 26 — do NOT cut slide 27, which is the assessment.' },
  ],
  answers: [
    { q: 'Slide 2: what shape is y = x²?', a: 'A parabola. Expect a straight line (from students still thinking of y = x) and a V (from students who know the values but join them with a ruler). Both guesses are useful and neither should be corrected before slide 4 — the table settles it.' },
    { q: 'Slide 3: the table for y = x²', a: 'x = −3, −2, −1, 0, 1, 2, 3 gives y = 9, 4, 1, 0, 1, 4, 9. The error to hunt for is (−3)² written as −9; ask that student what −3 × −3 is and they usually correct themselves. The repeat of 9, 4, 1 on both sides IS the symmetry, so point at it.' },
    { q: 'Slide 6: what does + 1 do?', a: 'Adds 1 to every y, so the whole curve rises by 1 without changing shape or width. The vertex moves from (0, 0) to (0, 1). Watch for "it gets bigger" — push for a direction and a number.' },
    { q: 'Slide 9: 3x² and −x²', a: '3x² is the same way up but narrower, because every y is tripled. −x² is the same width but upside down, because every y has changed sign. Neither has moved sideways, and neither vertex has left the origin.' },
    { q: 'Slide 13: predict y = x² + 2x', a: 'There is no penalty for being wrong here and most predictions are. The common ones: "up 2" (confusing 2x with + 2) and "twice as steep". The truth is that it is the SAME parabola slid one left and one down, vertex at (−1, −1) — which is genuinely surprising, and is the reason the slide asks them to box it.' },
    { q: 'Slide 14: the table for y = x² + 2x', a: 'x = −4..2 gives y = 8, 3, 0, −1, 0, 3, 8. Two roots, at x = −2 and x = 0, and a minimum of −1 at x = −1. Note that the symmetry is still there — 8, 3, 0 on both sides — but it is now centred on x = −1 rather than x = 0.' },
    { q: 'Slide 16: what do you add to land it on the axis?', a: 'Add 1. The lowest point is at y = −1, so lifting every y by 1 puts the vertex at (−1, 0), touching the axis rather than crossing it. Watch for "move it up" without the number, and for students who want to move it sideways as well — sideways is not what the question asked, and cannot be done by adding anything to the end.' },
    { q: 'Slide 18: where have you seen x² + 2x + 1?', a: '(x + 1)². Check it by expanding: (x + 1)(x + 1) = x² + x + x + 1 = x² + 2x + 1. Some students will spot it immediately from the expanding work; for the rest, expand it on the board rather than asserting it.' },
    { q: 'Slide 19: why is the bracket useful?', a: 'A square is never negative, so (x + 1)² is at its smallest when it is exactly 0, and that happens only at x = −1. So the lowest point of the curve is at x = −1 without plotting a single value. This is the argument the whole of Part 5 rests on — do not skip it for the rule.' },
    { q: 'Slide 22: plot y = (x − 2)²', a: 'Vertex (2, 0). One step each way (x = 1 and x = 3) gives y = 1; two steps (x = 0 and x = 4) gives y = 4. Expect a large minority to shift it LEFT to (−2, 0), which is exactly the misconception slide 23 exists for.' },
    { q: 'Slide 23: why does minus 2 go right?', a: 'Because the vertex is wherever the bracket is zero, and x − 2 = 0 gives x = 2. Another way to say it, if a student wants more: to get the same output that x² gave at 0, this curve needs an x that is 2 bigger — so every point has moved 2 to the right. Never let "minus means left" survive the lesson.' },
    { q: 'Slide 27: read four vertices', a: '(4, 3); (−5, −2); (1, 0) and it opens downwards because a = −2, so the vertex is a maximum; (0, 6) — no bracket means h = 0, and a = 3 makes it narrow. That last one catches students who expect three visible numbers.' },
    { q: 'Homework 1: y = x² − 3 and y = (x − 3)²', a: 'Vertices (0, −3) and (3, 0). The pair is the whole point of the question: the same 3, in two different places in the equation, moves the curve in two different directions. Any student who draws both the same way has not read the bracket.' },
    { q: 'Homework 2: y = −(x + 2)² + 4', a: 'Vertex (−2, 4), opening downwards. Points: (−3, 3) and (−1, 3), then (−4, 0) and (0, 0). It crosses the x-axis at −4 and 0 — worth noticing, but not required.' },
    { q: 'Homework 3: vertex (2, −5), opens downwards', a: 'y = −(x − 2)² − 5, or any negative a: y = −3(x − 2)² − 5 is equally correct. If a student writes y = (x − 2)² − 5 they have ignored "downwards"; if they write (x + 2) they have hit the sign trap again.' },
    { q: 'Homework 4: expand (x − 3)², then find the vertex of y = x² − 6x + 9', a: '(x − 3)² = x² − 6x + 9, so the two equations are the same curve and the vertex is (3, 0). The "how you knew" is the mark: because x² − 6x + 9 IS (x − 3)² rewritten, and the bracket is zero at x = 3. This question is the bridge to completing the square, which is the next lesson.' },
    { q: 'Exit question: y = x² + 6x + 5', a: 'x² + 6x + 9 is (x + 3)², so x² + 6x + 5 is that same expression minus 4 — (x + 3)² − 4. Vertex (−3, −4), and the smallest y it ever reaches is −4. Students who see it get a preview of completing the square; students who plot it get the same answer, which is fine.' },
  ],
  notes:
    'THE ORDER IS THE LESSON: PLOT IT, LOOK AT IT, THEN NAME THE LETTER. Every transformation in this deck arrives that way, three times over, and the sliders always come AFTER the paper. If the class ' +
    'sees the k slider before it has plotted x² + 1 by hand, the slider becomes a video they watched rather than a check on something they already believe. Resist reordering for time. ' +
    'THE HINGE IS SLIDE 13. y = x² + 2x is the first equation in the course whose graph nobody predicts correctly, and the boxed prediction is what makes the plot at slide 15 land. It also sets up the ' +
    'only genuine motivation for vertex form: the expression x² + 2x contains the number −1 nowhere, and yet its vertex is at (−1, −1). Everything from slide 18 on is the search for a way of writing ' +
    'the same curve so that the vertex is visible. Say that out loud at slide 19. ' +
    'SLIDES 16–18 ARE ONE MOVE, NOT THREE. The class looks at a curve whose bottom is one below the axis, decides to add 1 to lift it on, and writes y = x² + 2x + 1 — and that expression turns out to be ' +
    '(x + 1)², which announces its own vertex. Nobody was taught to complete the square; they were asked to move a picture and the algebra followed. Keep the three slides together and do not hand them ' +
    'the 1 early — the whole chain depends on the class choosing it for a reason they can see. ' +
    'THE SIGN TRAP IS THE ERROR THAT SURVIVES THE LESSON UNLESS YOU KILL IT. "(x − 2)² so it moves left" will be written by good students on the homework a week later. The only defence that holds is ' +
    'the METHOD rather than the rule: ask what x makes the bracket zero. Slide 23 says it, slide 24 lets them check it, and every time a vertex is read out for the rest of the year, ask for the bracket ' +
    'first. Do not teach it as "the sign is opposite" — that is a rule to be misremembered rather than a reason. ' +
    'NO CALCULATORS, DELIBERATELY. Every number in the lesson is a small square or a doubling, and a calculator is how (−3)² becomes −9 without anybody noticing. It also destroys the pace: the table on ' +
    'slide 3 should take three minutes, not eight. ' +
    'ABOUT THE SLIDERS, AND WHY THIS DECK HAS FOUR OF THEM. The standing rule in this repo is to prefer the plain slide, and a widget must do one thing a static slide cannot. These do exactly one: they ' +
    'hold the curve on screen while a single number changes, so the class watches the SAME parabola move rather than comparing two pictures and re-finding the axes in between. Each slider is restricted ' +
    'to the letters that lesson beat is about — k alone, then a alone, then h alone — and only slide 26 has all three. Drive them slowly, and ask for the vertex BEFORE you stop dragging. The grey dashed ' +
    'y = x² never moves, on any of them, on purpose. ' +
    'DERIVE, DON\'T ASSERT (the standing rule for this course). Nothing here is given as a rule to memorise: + k is argued from "every y gets k added"; a is argued from "every y is multiplied"; the ' +
    'negative flip is argued from every y changing sign; the bracket is argued from "a square is never negative, so the smallest value is zero"; and the vertex (h, k) falls straight out of that. If ' +
    'time runs short, cut a practice slide, not a derivation. ' +
    'CONTINUITY. 1.1 gave them the plane and plotting from a table; 1.2 gave them the straight line and the idea that an equation controls a picture. This is the first curve, and the first time the SAME ' +
    'curve appears written two different ways — which is the idea the rest of the quadratics work depends on. ' +
    'WHAT COMES NEXT: completing the square, which is nothing more than doing on purpose what slide 18 did by recognition — turning x² + bx + c into (x + something)² plus a leftover. Homework 4 and the ' +
    'exit question are both deliberately built to be that lesson\'s starter. ' +
    'ON LAYOUT, FOR ANYONE EDITING THIS DECK: showcase, steps, compare and gallery silently DROP a slide-level notes array — nothing errors, the panel just never renders. Every copy-down item here is ' +
    'therefore on a split, statement, callout or stack, or is an orange ">" bumper inside a steps slide\'s content. The course is flagged bilingual:false in content/courses.js, so this deck is ' +
    'English-only and the EN/VN toggle is hidden.',
}
