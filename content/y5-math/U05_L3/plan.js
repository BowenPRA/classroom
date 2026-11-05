// content/y5-math/U05_L3/plan.js
// Mr. David's one-page lesson plan, rendered by src/pages/Plan.jsx.
// Field names matter: vocab [{ term, def }], timeline [{ time, phase, detail }],
// answers [{ q, a }] (an array). Slide numbers match slides.js.
import worksheet from '../../../homework/y5m05/y5m05.pdf?url'

export const plan = {
  duration: '50 minutes, one period — 23 slides. If you fall behind: play five rounds of Up or Down? (13) instead of eight, and skip slide 21.',
  objective:
    'Students add and subtract whole numbers where one number is negative, by jumping to zero first and then the rest (zero is a bridge), and estimate before they work it out. ' +
    'They turn word problems into number sentences — temperatures that rise or fall, floors below the ground (B2 = −2), money they owe — and find the difference between a negative and a positive number as the gap between them. ' +
    'Framework: 5Ni.01, 5Nc.01. Scheme of work: Unit 5.4 Topic 1.',
  materials: [
    'Projector / TV; slides 3 and 13 are interactive and work offline (press the orange button)',
    'Mini whiteboards and pens (slides 1, 9, 10, 17, 18, 20, 21, 23); maths notebooks',
    'Worksheet “Below Zero in Words” (Y5 M5 on the Homework page, 4 pages): one per student, for practice or homework. The answer key is y5m05-teacher.pdf in the repo, not on the site',
    'Optional: a counting stick or a long number line with 0 in the middle, for students who need to point',
  ],
  print: [
    { label: 'Worksheet: Below Zero in Words (Y5 M5)', href: worksheet, note: '4 pages, one per student; hand out after slide 23' },
  ],
  vocab: [
    { term: 'negative number', def: 'a number below zero, written with a minus sign: −3' },
    { term: 'rises, goes up, gets warmer', def: 'add: jump up or right' },
    { term: 'falls, drops, goes down, gets colder', def: 'subtract: jump down or left' },
    { term: 'ground floor (G), basement (B1, B2)', def: 'floor 0, and the floors under it: B1 = −1, B2 = −2' },
    { term: 'owe', def: 'to have to pay money back; money you owe is a negative number' },
    { term: 'the difference between', def: 'the gap between two numbers; never negative' },
    { term: 'subtract 5 from 2', def: '2 − 5: the number after “from” comes first' },
    { term: 'estimate', def: 'a quick answer with easy numbers, to check the real answer' },
  ],
  timeline: [
    { time: '0–4 min', phase: 'Starter and goals', detail: 'Slide 1: read the starter aloud once. Everyone writes a guess on a whiteboard; take three or four (expect 2, −2 and 10). Slide 2: read the big line, then the three goals, pointing at each picture.' },
    { time: '4–8 min', phase: 'Mr. David’s Lift', detail: 'Slide 3: before each Go!, the class reads the move aloud and says the floor together. The lift stops at G on the way: say “4 to the ground floor, then 2 more”. Slide 4: back to the starter guesses; reveal. Slide 5: point at −2 and at B2.' },
    { time: '8–13 min', phase: 'Up and down words; the vote', detail: 'Slide 6: Sa Pa is in Vietnam and can get snow. Read the up and down words aloud; copy the panel. Slide 7: everyone votes at once — left hand A, right hand B. Expect some B: that is the “treat −3 as 3” mistake from the scheme of work. Slide 8: trace the two jumps on the thermometer; copy the panel.' },
    { time: '13–19 min', phase: 'Bigger jumps; estimate', detail: 'Slide 9: whiteboards, one at a time; check “to 0, then the rest” is on the boards. Slide 10: ask for an estimate before any working; copy the panel; reveal. Ask one student why 105 is a sensible answer.' },
    { time: '19–22 min', phase: 'Mr. David’s homework', detail: 'Slide 11: pairs have one minute to find the wrong answers. Deadpan: he is proud of his 4/4. Take answers, then reveal.' },
    { time: '22–25 min', phase: 'Owe', detail: 'Slide 12: tell the bánh mì story with the jumps on the money line; copy the panel.' },
    { time: '25–30 min', phase: 'Up or Down?', detail: 'Slide 13: everyone stands. Read each sentence, count “3, 2, 1”, arms up for add, arms down for subtract, then Show the answer. Wrong: sit down. Rounds 5 (deeper) and 8 (pays back) are the traps.' },
    { time: '30–35 min', phase: 'The difference between', detail: 'Slide 14: read both questions aloud; the class says which is a gap. Slide 15: vote at once. Slide 16: count the two parts of the gap on the line; copy the panel.' },
    { time: '35–45 min', phase: 'Put it to work', detail: 'Slide 17: whiteboards, a to d, reveal after each. Slide 18: insist on the number sentence first, then the answer. Slide 19: pairs write one story in two minutes; read two aloud. Slides 20–21: whiteboards; read each problem aloud, completely deadpan.' },
    { time: '45–50 min', phase: 'Close', detail: 'Slide 22: thumbs up or down for each line; check the notebook count (5 panels). Slide 23: exit question on whiteboards. Hand out the worksheet.' },
  ],
  answers: [
    { q: 'Slides 1, 3, 4 — the lift', a: 'Starter: 4 − 6 = −2, floor B2. Lift moves: 4 − 6 = −2; −2 + 3 = 1; 1 − 4 = −3; −3 + 8 = 5; 5 − 7 = −2.' },
    { q: 'Slides 7–8 — Sa Pa', a: 'A: −3 + 8 = 5 °C (3 to zero, then 5 more). B (−11 °C) is the mistake of adding 3 and 8 and keeping the minus sign.' },
    { q: 'Slide 9 — bigger jumps', a: 'a 6 − 15 = −9. b −12 + 30 = 18. c 40 − 75 = −35.' },
    { q: 'Slide 10 — estimate', a: 'About −100 + 200 = 100. Exactly −98 + 203 = 105 (98 to zero, then 105 more). Any estimate between 90 and 120 with easy numbers is fine.' },
    { q: 'Slide 11 — Mr. David’s homework', a: 'a wrong: 4 − 106 = −102. b wrong: −5 + 9 = 4. c right (0). d right (−7). He scores 2 out of 4.' },
    { q: 'Slide 12 — money', a: '20 000 − 25 000 = −5 000: he owes 5 000 dong.' },
    { q: 'Slide 13 — Up or Down?', a: '1 up, 2 down, 3 down, 4 down, 5 down (trap: deeper is further down), 6 up, 7 down, 8 up (trap: paying back what you owe takes you up towards zero).' },
    { q: 'Slides 14–16 — difference', a: 'Subtract 5 from 2: 2 − 5 = −3. The difference between 2 and 5: 3. The difference between −4 and 5: 4 + 5 = 9 (B). A (1) comes from 5 − 4, ignoring the minus sign.' },
    { q: 'Slide 17 — the table', a: 'a −7 + 10 = 3 °C. b −2 − 4 = −6 °C. c 19 − (−7): 7 to zero, then 19 more = 26 °C. d Harbin, −21 °C. The temperatures are made up for the lesson.' },
    { q: 'Slide 18 — number sentences', a: 'a −2 + 7 = 5 (floor 5). b 12 000 − 20 000 = −8 000 (he owes 8 000 dong). c 15, 11, 7, 3, −1.' },
    { q: 'Slide 19 — story', a: 'Any story that starts at 3, goes down 8 and ends at −5: a temperature that falls, a lift that goes down from floor 3 to B5, or 3 000 dong and spending 8 000 dong (owing 5 000).' },
    { q: 'Slides 20–21 — word problems', a: 'Freezer: −18 + 23 = 5 °C. Car park: −3 + 7 = 4, 4 − 5 = −1, −1 + 2 = 1: floor 1; his car is on B3. Sister: −30 000 + 50 000 = 20 000: his sister now owes him 20 000 dong.' },
    { q: 'Slide 23 — exit', a: '5 − 12 = −7 °C. The difference is 12 °C.' },
  ],
  notes:
    'NOTEBOOK COUNT (slide 22): 5 written panels — up and down words (6), zero is a bridge (8), estimate (10), owe (12), the difference between (16). No drawings. Only the orange panel is copied; the line under it is read aloud.\n\n' +
    'WHERE IT SITS. After your two Unit 5 lessons (Subtracting into Negative Numbers; Adding & Subtracting with Negative Numbers), which used small numbers on a drawn line. This lesson keeps your method — jump to zero, then the rest — and adds bigger numbers, estimating, and the English of word problems. The scheme of work’s next steps in Unit 5 are shapes standing for two unknown numbers (5Nc.02) and adding and subtracting decimals (5Nf.09); the problem bank (problem-bank.md, beside this file) already has items for both.\n\n' +
    'THE ENGLISH IS THE LESSON. The class can count back past zero; what stops them is the sentence. Three things to say out loud whenever they come up: “subtract 5 from 2” is 2 − 5 (the number after from comes first); “the difference between” is a gap and is never negative; “deeper” and “colder” are down words even though they sound like more.\n\n' +
    'FOR THE OBSERVER. The goals are on slide 2 in everyday words and checked on slide 22 with the key words. Ask before you tell: the starter (1), the lift (3), two votes (7, 15), the estimate (10), the homework (11). Everyone answers at once on 7, 13 and 15; whiteboards on 9, 10, 17, 18, 20, 21 and 23 show who has it. Real photographs: lift panels (5) and snow in Sa Pa (6).\n\n' +
    'MR. DAVID. The examples use your name, deadpan (the homework you marked 4/4, the lost car, paying your sister too much). There are no student names anywhere in the deck. English only: no language switch.\n\n' +
    'NOT ON THE SLIDES. Subtracting a negative number (19 − (−7)) is not in the Stage 5 framework; slide 17c is worked as a gap (7 to zero, then 19), and that is how to explain it if a student writes 19 − 7 = 12.',
}
