// content/y5-math/U05_L3/plan.js
// Mr. David's lesson plan, rendered by src/pages/Plan.jsx at #/plan/y5-math/U05_L3.
// Field names matter: vocab [{ term, def }], timeline [{ time, phase, detail }],
// answers [{ q, a }] (an array). Slide numbers match slides.js.
//
// One A4 page when printed (house rule; checked with headless Chrome, see
// docs/TEACHER-COURSES.md): one line a timeline row, every answer kept. The
// longer reasoning lives in the header comment of slides.js, not here.
import worksheet from '../../../homework/y5m05-l3/y5m05-l3.pdf?url'

export const plan = {
  duration: '50 minutes · 23 slides. Short of time: five rounds of the game (13), skip slide 21.',
  objective:
    'Add and subtract with one negative number: jump to zero, then the rest; estimate first; turn temperature, floor and money stories into number sentences; find the difference between a negative and a positive number. (5Ni.01, 5Nc.01; scheme of work 5.4 Topic 1.)',
  materials: [
    'Projector (slides 3 and 13 are interactive and work offline); mini whiteboards; maths notebooks',
    'Worksheet Y5 M5 L3, one each (answer key y5m05-l3-teacher.pdf, not on the site)',
  ],
  print: [
    { label: 'Worksheet: Below Zero in Words (Y5 M5 L3)', href: worksheet, note: '4 pages; hand out at the end' },
  ],
  vocab: [
    { term: 'rises, warmer / falls, colder', def: 'add / subtract' },
    { term: 'G, B1, B2', def: 'floor 0, −1, −2' },
    { term: 'owe', def: 'must pay back: a negative number' },
    { term: 'the difference between', def: 'the gap; never negative' },
    { term: 'subtract 5 from 2', def: '2 − 5 (the number after “from” comes first)' },
    { term: 'estimate', def: 'a quick answer with easy numbers' },
  ],
  timeline: [
    { time: '0–8', phase: 'Floors', detail: '1 starter on whiteboards. 2 goals. 3 lift: class says each floor, then Go! 4 reveal. 5 −2 is B2.' },
    { time: '8–13', phase: 'Temperature', detail: '6 copy the up and down words. 7 vote: left hand A, right hand B. 8 trace both jumps; copy.' },
    { time: '13–22', phase: 'Bigger numbers', detail: '9 whiteboards: to 0, then the rest. 10 estimate first; copy. 11 pairs find Mr. David’s two errors.' },
    { time: '22–30', phase: 'Money; game', detail: '12 bánh mì story; copy. 13 all stand: arms up add, down subtract. Rounds 5 and 8 are traps.' },
    { time: '30–35', phase: 'Difference', detail: '14 read both questions aloud. 15 vote. 16 count both parts of the gap; copy.' },
    { time: '35–50', phase: 'Practice; close', detail: '17–21 whiteboards, number sentence first; 20–21 deadpan. 22 checklist, 5 panels. 23 exit.' },
  ],
  answers: [
    { q: 'Slides 1–5', a: 'Starter 4 − 6 = −2 (B2). Lift: −2, 1, −3, 5, −2.' },
    { q: 'Slides 7–8', a: 'A: −3 + 8 = 5 °C. B (−11) keeps the minus sign, the usual slip.' },
    { q: 'Slides 9–11', a: '−9, 18, −35. Estimate 100, exact 105. Homework: a is −102, b is 4; c and d right.' },
    { q: 'Slides 12–16', a: '−5 000. Game: up, down, down, down, down, up, down, up. 2 − 5 = −3; gap 3. −4 and 5: 9 (B).' },
    { q: 'Slides 17–18', a: '3 °C, −6 °C, 26 °C, Harbin. Floor 5; owes 8 000 dong; 7, 3, −1.' },
    { q: 'Slides 19–23', a: 'Any story from 3 down 8 to −5. 5 °C; floor 1 (car on B3); sister owes him 20 000. Exit −7 °C, difference 12 °C.' },
  ],
  notes:
    'Follows Mr. David’s two Unit 5 PowerPoints. Say often: the number after “from” comes first; a difference is a gap; “deeper” and “colder” are down words. Slide 17c (19 and −7) is a gap: 7 to zero, then 19. Temperatures on slides 7 and 17 are made up. Next in the scheme of work: 5Nc.02, 5Nf.09.',
}
