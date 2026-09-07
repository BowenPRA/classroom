// content/y7-math/U02_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes',
  objective:
    'Students can use a letter to stand for a number they do not know, can leave an expression such as b + 2 unfinished without believing they have made a mistake, ' +
    'can turn the four English phrases of change — more than, fewer than, times as many, half as many — into +, −, × and ÷, ' +
    'and can handle the two pieces of English that decide the marks in Exercise 2.1: that "h less than t" is written t − h with the words reversed, ' +
    'and that "subtract 4" and "subtract from 4" give opposite answers.',
  materials: [
    'Projector / TV for the lesson deck',
    'Mini whiteboards + markers (one per pair)',
    'Student notebooks',
    'Workbook Unit 2, Section 2.1 (pages 20–23) for the homework',
  ],
  vocab: [
    { term: 'Expression', def: 'letters, and sometimes numbers, joined by operations — n + 7, 3s, t − 6. No equals sign, and it does not have to be worked out (Vietnamese: biểu thức)' },
    { term: 'Letter / variable', def: 'stands for a number we do not know yet. b is the NUMBER of balls, not a ball — this distinction is the one that unblocks the whole unit' },
    { term: 'More than / fewer than', def: 'add / subtract. "Fewer" is used for things you count, "less" for amounts, but the book uses both and means subtract either way' },
    { term: 'Times as many', def: 'multiply. "Three times as many as s" is 3s, and the number is always written in front of the letter' },
    { term: 'Subtract from', def: 'the preposition that flips the order. "Subtract 4" is 5x − 4; "subtract from 4" is 4 − 5x. Exercise 2.1 Q9 is built entirely on it' },
  ],
  timeline: [
    { time: '0–4 min', phase: 'Starter', detail: 'Title slide. 7 pens plus 2 more — trivial on purpose, but insist on the CALCULATION being written (7 + 2 = 9), not just the 9. The whole lesson is about writing the calculation when you cannot finish it.' },
    { time: '4–9 min', phase: 'The hook', detail: 'Slide 2, QUESTION ONLY: three bags, and nobody can see inside the third. Let pairs argue about it for a full two minutes. Some will say "you can\'t know" — that is the right answer and the door into slide 3. Do NOT supply the letter yourself.' },
    { time: '9–14 min', phase: 'Name it', detail: 'Slide 3: we call it b. First copy-down panel. Say the distinction out loud twice: b is the NUMBER of balls, not a ball. Students who read b as "ball" will write nonsense for the rest of the unit.' },
    { time: '14–21 min', phase: 'THE WALL', detail: 'Slide 4. The two known rows finish; the third does not. This is the sticking point of the whole section — the class believes an answer must be a single number. Say explicitly: "b + 2 is the finished answer. You are allowed to stop." Then slide 5 names it, second copy-down panel. Slide 6 is three quick ones on the same idea.' },
    { time: '21–29 min', phase: 'The four phrases', detail: 'Slide 7 is QUESTION ONLY — two more stickers than Mr Bowen, on whiteboards, before any list exists. Then slide 8 is the list and the third copy-down panel, and slide 9 drills it. Watch for c4 instead of 4c and correct it on the spot.' },
    { time: '29–35 min', phase: 'The order flips', detail: 'Slide 10 QUESTION ONLY: h − t or t − h? Take a show of hands and write the split on the board. Slide 11 settles it with NUMBERS first — "5 less than 12" is 7, which nobody disputes — and only then with letters. Fourth idea, copy-down panel.' },
    { time: '35–42 min', phase: 'Subtract from', detail: 'Slide 12 QUESTION ONLY: read both sentences aloud, ask whether one word can change the answer. Slide 13 shows 6 against −6. Fourth copy-down panel. Slide 14 is Marcus, which is Exercise 2.1 Q9 — let pairs explain it to each other before revealing. If the lesson is running late, this is the section to protect; cut the word problems instead.' },
    { time: '42–47 min', phase: 'Word problems', detail: 'Slide 15 the restaurant (4a + 5c) and slide 16 the crickets (6p, then 6p − 12). Read the crickets completely straight. Do not explain that it is a joke.' },
    { time: '47–50 min', phase: 'Recap + homework', detail: 'Four-point checklist and the copy-count: 4 written panels. Set Workbook 2.1, pages 20–23. Exit question: Mr Bowen has n pens and gives three away, which is n − 3.' },
  ],
  answers: [
    { q: 'Starter — 7 pens, buys 2 more', a: '7 + 2 = 9. Insist on the written calculation; it is the shape that survives into b + 2.' },
    { q: 'Hook — how many balls in the third bag?', a: 'Unknowable, and that is the correct answer. Accept "you can\'t tell" enthusiastically. If a student offers a specific number, ask how they know.' },
    { q: 'Slide 4 — add two balls to each bag', a: '2 + 2 = 4 · 4 + 2 = 6 · b + 2, which stays as b + 2. The third one is the whole section.' },
    { q: 'Slide 6 — Mr Bowen\'s box of t toys', a: 'a: t + 4 · b: t − 2 · c: t ÷ 2 (t/2 is equally acceptable). Every answer starts from t.' },
    { q: 'Slide 7 — two more stickers than Mr Bowen', a: 's + 2. Posed before the list of phrases exists, so expect some blanks; that is fine.' },
    { q: 'Slide 9 — Mr Bowen\'s c chairs', a: 'a: c + 5 · b: 4c · c: c − 10. The predictable error is c4 for part b. The number goes in front, always.' },
    { q: 'Slide 10 — h less than t', a: 't − h. Check it with numbers if anyone resists: 5 less than 12 is 12 − 5 = 7, not 5 − 12 = −7.' },
    { q: 'Slide 12/13 — subtract 4 against subtract from 4', a: '5x − 4 and 4 − 5x. With x = 2 they give 10 − 4 = 6 and 4 − 10 = −6. Opposite signs, from one word.' },
    { q: 'Slide 14 — is Marcus right?', a: 'No. His description, "multiply x by 5 then subtract 5", is 5x − 5. The expression 5 − 5x starts at 5, so the description needs "subtract FROM 5". This is Exercise 2.1 Q9 and is worth the time.' },
    { q: 'Problem 1 — four adults and five children', a: '4a + 5c. Two prices, two letters; 4a + 5c cannot be simplified into one term, and a student who writes 9ac has merged two different things.' },
    { q: 'Problem 2 — the crickets', a: 'a: 6p · b: 6p − 12. Two crickets take twelve legs. Read it deadpan.' },
    { q: 'Exit question — n pens, gives away three', a: 'n − 3.' },
  ],
  notes:
    'THIS DECK IS DELIBERATELY THIN — nineteen slides, one key word, four copy-down panels, and no arithmetic harder than 5 × 2. That is not underselling the section; it is the section. The book gives 2.1 a single margin key word, and the difficulty is entirely in reading English sentences, so any minute spent computing is a minute spent not reading. Resist adding worked numbers in the room. ' +
    'THE WALL IS SLIDE 4, AND IT IS THE LESSON. The obstacle is never "what does b mean". It is that b + 2 does not equal anything, so students assume they have failed and either invent a number or leave it blank. Say out loud, more than once, that leaving it is the correct answer. A class that believes this can do the whole of Unit 2; a class that does not will fight every exercise. ' +
    'FOUR SLIDES ARE QUESTION-ONLY — 2, 7, 10 and 12 — and none of them has an answer anywhere on it. Take the guesses, write the split on the board where it is a show of hands, and only then move on. On slide 10 especially, the disagreement between h − t and t − h is worth more than the correct answer handed over. ' +
    'THE ENGLISH SECTION IS THE ONE TO PROTECT. Slides 10 to 14 contain no new mathematics at all, and they are where Exercise 2.1 Q9 and Q11 are won. If you are behind, cut the restaurant and the crickets, not Marcus. ' +
    'TEST THE ORDER FLIP WITH NUMBERS FIRST. Slide 11 puts "5 less than 12" above "h less than t" on purpose: the class already knows the number answer is 7 and will not accept −7, so the letter version arrives as the same sentence rather than a new rule to memorise. ' +
    'THE PREDICTABLE ERRORS, in the order they appear: reading b as "a ball" rather than "the number of balls"; leaving b + 2 blank; writing c4 instead of 4c; writing h − t; and describing 5 − 5x as "multiply by 5 then subtract 5". Every one of them is a reading error, not a maths error, and every one has a slide pointed at it. ' +
    'THE CRICKETS ON SLIDE 16 are the deadpan one. Mr Bowen keeps them under his desk, two escape, and he would like them back. Read it completely straight and do not flag the joke. ' +
    'Anything students must copy is in an orange "Write This Down" panel; everything else is discussion. ' +
    'This deck has no photographs — all five figures are authored SVG in diagrams.js, so there is no images/CREDITS.json for 2.1. Expressions have no real-world object to photograph, and a decorative stock picture on a projector is one more thing between the class and the sentence.',
}
