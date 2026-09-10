// content/y7-math/T02_girl-math/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes',
  objective:
    'Students can read a sharing problem written in words and turn it into a bar model: a box for the smallest share, two boxes for "twice as many", three for "three times as many", and a box plus a loose number for "more than"; '
    + 'can take a "more than" extra off the total (or add a "fewer than" shortfall on) BEFORE dividing; '
    + 'can count the boxes, divide the adjusted total by that number to find one box, and then work out every share; '
    + 'can check an answer by adding the shares back up to the original total; '
    + 'and can do all of this at speed, under a clock, for problems with up to eight shares and four rules.',
  materials: [
    'Projector / TV for the lesson deck',
    'Mini whiteboards + markers — one per student if possible, otherwise one per pair',
    'Student notebooks for the three orange panels',
    'A packet of rice paper on the desk, if you have one. It costs nothing and it lands.',
    'Nothing to print. The game keeps its own score.',
  ],
  vocab: [
    { term: 'Twice as many as · three times as many as', def: 'the phrase that becomes two boxes, or three. Say it, then say "so how many boxes altogether?" — the answer is always one MORE than the number in the phrase, and that is the mistake' },
    { term: 'More than · fewer than', def: 'the second phrase, and the one that costs the most. "Nam gets 3 more than Su" is a box PLUS 3, not 3. Drill the difference between "3 more than Su" and "3 times Su" out loud; in Vietnamese they are not similar and in English they are' },
    { term: 'The same as', def: 'quietly the easiest and quietly missed — it is simply one more box of the same size' },
    { term: 'Share · altogether · each · left over', def: 'the four question words. "Altogether" is the total to divide up; "each" is what the question wants back' },
    { term: 'Bar model · box', def: 'we say box, not bar, all lesson. It is a drawing, not a technique with a name to remember' },
    { term: 'Roll (the prize) · bánh tráng', def: 'the answers are counted in PIECES and the prizes in ROLLS, deliberately, so the two numbers can never be confused on the board' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter', detail: 'Title slide. 10 pieces, Lily gets four times as many as Ana. Sixty seconds on whiteboards. Answer: Ana 2, Lily 8. Expect several answers of "Ana 10, Lily 40" and several of "2.5" — both are readings of the sentence, not arithmetic failures, and both are the reason for the next two slides.' },
    { time: '5–13 min', phase: 'Twice as many', detail: 'Slide 2, FIRST panel. Draw the boxes on the board yourself before you show the diagram. The sentence to repeat: "twice as many means TWO boxes, so there are THREE boxes altogether". Ask for "three times as many" and "the same as" as boxes before moving on.' },
    { time: '13–21 min', phase: 'More than', detail: 'Slide 3, SECOND panel, and this is the one that decides the lesson. Contrast "3 more than Su" with "3 times Su" on the board, out loud, twice. Then the move: take the extra off the TOTAL first, divide what is left, put the extra back at the end. Mention "fewer than" adds on instead — round 5 of the game needs it.' },
    { time: '21–27 min', phase: 'Both at once', detail: 'Slide 4, THIRD panel — the five-step order, and the check. Insist on step 5: add the shares back up. Every wrong answer in the game will be caught by it, and the game shows that line on screen after every round.' },
    { time: '27–30 min', phase: 'Set the game up', detail: 'Slide 5. Split the class into 2, 3 or 4 teams and choose the same number on the game menu. Say the two rules that matter: whiteboards up together, and nobody shouts. Rolls are the prize; pieces are the answer.' },
    { time: '30–47 min', phase: 'GIRL MATH', detail: 'Slide 6. Read each round aloud in English, then let the clock run. Rounds 1–4 should take about 90 seconds each of real thinking; from round 5 give the whole clock and use +30 without hesitation. Reveal one girl at a time and ask WHICH RULE gave that number before you press again. Expect to reach round 7 or 8; the deck is written so stopping there costs nothing.' },
    { time: '47–50 min', phase: 'Close', detail: 'Finish the round you are on, read the scores, then the last slide. Exit question: 34 pieces, Su three times Ana, Tess 4 more than Ana. They must draw the boxes, not just answer.' },
  ],
  answers: [
    { q: 'Starter — 10 pieces, Lily four times Ana', a: 'Ana 2, Lily 8. Five boxes altogether, 10 ÷ 5 = 2.' },
    { q: 'Round 1 — 12 pieces · Carrot twice Erica · 2 rolls', a: 'Erica 4, Carrot 8. Three boxes, 12 ÷ 3 = 4.' },
    { q: 'Round 2 — 15 pieces · Nam 3 more than Su · 2 rolls', a: 'Su 6, Nam 9. Take the 3 off first: 15 − 3 = 12, two boxes, 12 ÷ 2 = 6.' },
    { q: 'Round 3 — 20 pieces · Tess twice Lily · Ana same as Lily · 3 rolls', a: 'Lily 5, Tess 10, Ana 5. Four boxes, 20 ÷ 4 = 5. "The same as" is the box people forget to draw.' },
    { q: 'Round 4 — 22 pieces · Carrot twice Erica · Nam 2 more than Erica · 3 rolls', a: 'Erica 5, Carrot 10, Nam 7. 22 − 2 = 20, four boxes, 20 ÷ 4 = 5.' },
    { q: 'Round 5 — 36 pieces · Su three times Amada · Tess 6 fewer than Su · 4 rolls', a: 'Amada 6, Su 18, Tess 12. The first "fewer than": ADD the 6 on, 36 + 6 = 42, seven boxes, 42 ÷ 7 = 6. Tess is 18 − 6 = 12.' },
    { q: 'Round 6 — 30 pieces · a line of four, each 1 more than the one in front · 4 rolls', a: 'Erica 6, Tess 7, Ana 8, Lily 9. The extras are 1 + 2 + 3 = 6, so 30 − 6 = 24, four boxes, 24 ÷ 4 = 6.' },
    { q: 'Round 7 — 32 pieces · Nam twice Su · Carrot twice Nam · Amada same as Su · 5 rolls', a: 'Su 4, Nam 8, Carrot 16, Amada 4. Carrot is FOUR boxes, not two — that is the whole round. Eight boxes, 32 ÷ 8 = 4.' },
    { q: 'Round 8 — 43 pieces · Mr Bowen eats 4 · Su twice Tess · Lily 3 more than Tess · 6 rolls', a: 'Tess 9, Su 18, Lily 12, and Mr Bowen 4. Take BOTH off: 43 − 4 − 3 = 36, four boxes, 36 ÷ 4 = 9. Two things to remove from the total is the new difficulty.' },
    { q: 'Round 9 — 45 pieces · Ana twice Erica · Su same as Erica · Nam 3 more than Ana · Tess 1 fewer than Nam · 7 rolls', a: 'Erica 5, Su 5, Ana 10, Nam 13, Tess 12. Nam is two boxes + 3; Tess is two boxes + 2. Extras total 5, so 45 − 5 = 40, eight boxes, 40 ÷ 8 = 5.' },
    { q: 'Round 10 — 60 pieces · all eight, each 1 more than the one before · 8 rolls', a: 'Erica 4, Nam 5, Carrot 6, Su 7, Tess 8, Lily 9, Ana 10, Amada 11. Extras 1+2+3+4+5+6+7 = 28, so 60 − 28 = 32, eight boxes, 32 ÷ 8 = 4.' },
    { q: 'Exit question — 34 pieces, Su three times Ana, Tess 4 more than Ana', a: 'Ana 6, Su 18, Tess 10. 34 − 4 = 30, five boxes, 30 ÷ 5 = 6. Check: 6 + 18 + 10 = 34.' },
  ],
  notes:
    'THE POINT IS THE BOX, NOT THE ANSWER. Every round here is a linear equation this class cannot yet solve — 3e = 12, 4e + 2 = 22, 8e + 5 = 45. Drawn as boxes not one of them is an equation: it is a picture with a division under it. Do not let the lesson drift into letters. The algebra arrives later and lands better on a class that has already seen the picture. '
    + 'THE THREE PHRASES ARE THE WHOLE DIFFICULTY. "Twice as many as", "more than", "fewer than". A student who reads "Nam gets 3 more than Su" as "Nam gets 3" has misread a sentence, not failed at maths, and that is the same diagnosis as every other lesson in this unit. Say all three phrases out loud on slides 2 and 3, and keep saying them between rounds. '
    + 'THE COUNTING ERROR TO WATCH FOR is "twice as many, so two boxes altogether". It is three. Round 7 is built on the harder version of the same slip: Carrot is twice Nam and Nam is twice Su, so Carrot is FOUR boxes. Ask for the box count out loud before anybody divides. '
    + 'THE CLOCK IS DELIBERATELY GENEROUS and there is a +30 button. Use it. A class that runs out of time on round 6 has learned that the game is unfair, not that the maths is hard, and once that happens the rest of the period is spent arguing about the clock. '
    + 'REVEAL ONE GIRL AT A TIME, AND ASK WHICH RULE. The reveal is built that way so a student who got Erica right and Nam wrong gets credit for the half they had, and so the class has to say which sentence produced each number. Pressing straight through to the check line throws away the best three minutes of each round. '
    + 'PIECES AND ROLLS ARE DIFFERENT WORDS ON PURPOSE. The answers are counted in pieces; the prizes are counted in rolls. If both were "pieces" the board would have two unrelated numbers with the same name on it within thirty seconds. '
    + 'THE SILLINESS IS DOING WORK. The reasons attached to the rules are deadpan nonsense — Amada was on the phone, Tess ate six on the way, Mr Bowen calls it a quality check — and this class works visibly harder on a silly problem than on a sensible one. The maths underneath is identical. Read the reason out; do not skip it as decoration. '
    + 'YOU WILL NOT FINISH TEN ROUNDS, and that is fine. Rounds 8, 9 and 10 exist so that a fast class is never left waiting, not because the lesson needs them. Stop where the period stops, read the scores, and set the exit question. '
    + 'This deck has no photographs — the three figures are authored SVG in diagrams.js, so there is no images/CREDITS.json for this task.',
}
