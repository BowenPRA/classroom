// content/y7-math/U01_3/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes',
  objective:
    'Students can list the multiples of a number, find the common multiples of two numbers and pick out the lowest common multiple (LCM), ' +
    'explain that "common" in maths means shared (in both lists) rather than ordinary, and know that the LCM is usually smaller than the ' +
    'two numbers multiplied together — in particular that when one number divides the other, the LCM is just the bigger number.',
  materials: [
    'Projector / TV for the lesson deck',
    'Mini whiteboards + markers (one per pair)',
    'Student notebooks',
    'Workbook Section 1.3 (pages 12–13) for the homework',
  ],
  vocab: [
    { term: 'Multiple', def: 'the answer when you multiply a number by 1, 2, 3, 4, … The multiples of 4 are 4, 8, 12, 16, … (Vietnamese: bội số)' },
    { term: 'Common', def: 'in maths it means SHARED — belonging to both — not "ordinary" as in everyday English' },
    { term: 'Common multiple', def: 'a number that is a multiple of both numbers, i.e. it appears in both lists (bội số chung)' },
    { term: 'Lowest common multiple (LCM)', def: 'the smallest number that is a multiple of both numbers — the same as BCNN in Vietnamese maths' },
    { term: 'Multiple vs factor', def: 'a multiple is a number you land on (4, 8, 12 …); a factor divides in (1, 2, 4 …). Factors are next lesson (1.4)' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter', detail: 'Title slide. Write the first eight multiples of 4 and of 6. This produces the two lists the whole lesson is built on — do not skip keeping them.' },
    { time: '5–9 min', phase: 'The hook', detail: 'Slide 2, QUESTION ONLY: a red light every 4 s and a blue light every 6 s just flashed together — when do they next flash together? Guesses on the board, no method. It gets answered on slide 7. Do not solve it here.' },
    { time: '9–16 min', phase: 'The words', detail: 'Key word "multiple" (multiple = result, multiply = action; not a factor). Then the heart of the lesson, slide 4: "common" means ORDINARY in everyday English but SHARED in maths. Let them feel the difference — this is the whole ESL point.' },
    { time: '16–24 min', phase: 'Build the definition', detail: 'Common multiples = numbers in both lists (copy). Then lowest common multiple = the smallest of them (copy), flagged as the same idea as BCNN they already know. Then slide 7 pays off the flashing lights: they meet at 12 because 12 is the LCM of 4 and 6.' },
    { time: '24–32 min', phase: 'Method + drill', detail: 'Mr Bowen\'s method on the book\'s example, LCM of 6 and 9 = 18 — this is the Draw This, so budget copying time. Then the LCM-finder widget: five pairs, everyone writes the LCM before the reveal. Pairs chosen to cover the whole shape (two matches; coprime; one-divides-the-other; the book example; a plain search).' },
    { time: '32–36 min', phase: 'The trap', detail: 'Do not just multiply the two numbers. LCM of 4 and 8 is 8 (not 32) because 4 divides 8; LCM of 3 and 5 is 15 because they share no factor — multiplying is a lucky shortcut, not the rule. When in doubt, list them.' },
    { time: '36–46 min', phase: 'Word problems', detail: 'Run as many of the four as time allows, whiteboards, LCM before answer: the two buses (8, 12 → 24, so 7:24); the barbecue packs (6, 8 → 24, so 4 packs and 3 packs); the two taps (4, 12 → 12, the trap again); the two alarms (15 and 15 → 15, the deadpan one).' },
    { time: '46–50 min', phase: 'Recap + homework', detail: 'Five-point checklist and the copy-count. Set Workbook Section 1.3, pages 12–13. Exit question: LCM of 5 and 10 is 10, not 50, because 5 divides 10.' },
  ],
  answers: [
    { q: 'Starter: multiples of 4 and of 6', a: '4, 8, 12, 16, 20, 24, 28, 32  ·  6, 12, 18, 24, 30, 36, 42, 48' },
    { q: 'Hook: red every 4 s, blue every 6 s', a: 'Next together after 12 seconds (then 24, 36 …). 12 is the LCM of 4 and 6.' },
    { q: 'Common multiples of 4 and 6', a: '12, 24, 36, … (the numbers in both lists)' },
    { q: 'LCM of 4 and 6', a: '12 — the smallest common multiple.' },
    { q: 'Worked example: LCM of 6 and 9', a: '18. Multiples of 6: 6, 12, 18, …; of 9: 9, 18, …; first match is 18.' },
    { q: 'Widget pairs', a: 'LCM(4,6)=12  ·  LCM(3,5)=15  ·  LCM(4,8)=8  ·  LCM(6,9)=18  ·  LCM(8,12)=24' },
    { q: 'Trap A: LCM of 4 and 8', a: '8 (not 32) — 4 divides into 8, so the LCM is the bigger number.' },
    { q: 'Trap B: LCM of 3 and 5', a: '15 — here 3 × 5 works because 3 and 5 share no factor.' },
    { q: 'Problem 1, the two buses', a: 'LCM(8, 12) = 24, so 24 minutes later — 7:24.' },
    { q: 'Problem 2, the barbecue', a: 'LCM(6, 8) = 24. 24 of each: 4 packs of rolls, 3 packs of sausages.' },
    { q: 'Problem 3, the two taps', a: 'LCM(4, 12) = 12 (not 48), because 4 divides 12. Every 12 seconds.' },
    { q: 'Problem 4, the two alarms', a: 'LCM(15, 15) = 15. The numbers are equal, so they always ring together. A reading trap.' },
    { q: 'Exit question: LCM of 5 and 10', a: '10, not 50 — 5 divides into 10, so the LCM is the bigger number.' },
  ],
  notes:
    'The spine of this lesson is ENGLISH, not arithmetic. Most of the class already know this concept from Vietnamese school as bội số chung nhỏ nhất (BCNN), so the real work is attaching three English words to something they can already do: multiple, common, lowest common multiple. Slide 4 is the pivot — "common" means ORDINARY in everyday English and SHARED in maths. Give it time. ' +
    'Slide 2 (the flashing lights) is a question slide with no method on it; the guesses matter, and slide 7 is where it pays off. Do not work it out early. ' +
    'The list method on slide 8 (LCM of 6 and 9 = 18) is the Draw This and matches the book\'s worked example exactly — make them copy it properly. ' +
    'The recurring trap is multiplying the two numbers. It is worth over-teaching: the LCM is usually smaller, it equals the product only when the numbers share no factor, and it equals the bigger number when one divides the other. Problems 3 and 4 exist to catch the careless version. ' +
    'Problem 4 (the two alarms) is the deadpan one and should be read completely straight — both numbers are 15, so there is nothing to compute. Expect someone to try to "find the LCM" before they notice. ' +
    'Anything students must copy is in an orange "Write This Down" panel; everything else is discussion. ' +
    'Image sources and licences are in content/y7-math/U01_3/images/CREDITS.json — all openly licensed (CC0 / CC BY / CC BY-SA).',
}
