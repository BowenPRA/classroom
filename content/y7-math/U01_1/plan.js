// content/y7-math/U01_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes',
  objective: 'Students can add and subtract positive and negative integers by moving along a number line, including subtracting a negative by adding.',
  materials: [
    'Projector / TV for the lesson deck',
    'Mini whiteboards + markers (one per pair)',
    'Student notebooks',
  ],
  vocab: [
    { term: 'Integer', def: 'a whole number that is positive, negative, or zero' },
    { term: 'Positive / Negative', def: 'right of zero / left of zero on the number line' },
    { term: 'Inverse', def: 'the opposite of a number; the inverse of 5 is −5' },
    { term: 'Whole (natural) numbers', def: 'zero together with the positive integers' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Warm-up', detail: 'Title slide. Students write ≥3 things that can be negative in their books as they settle.' },
    { time: '5–12 min', phase: 'Team game', detail: 'Pairs list negatives against the 2-minute timer, then share. Cross out duplicates; most unique wins. Reveal the surprising examples.' },
    { time: '12–20 min', phase: 'Number line', detail: 'Define integer / positive / negative / zero and the whole numbers using the big number-line slide. Students copy the diagram (Draw This).' },
    { time: '20–30 min', phase: 'Direction + signs', detail: 'Framing ("right or left?") with the interactive jumper. Then the two-signs rule (same → +, different → −).' },
    { time: '30–42 min', phase: 'Worked examples', detail: 'Add, subtract, and subtract-a-negative slides. Students copy each and try on whiteboards.' },
    { time: '42–48 min', phase: 'Word problems', detail: 'Both word-problem slides: pairs solve on whiteboards first, then reveal the stepped breakdown and number line.' },
    { time: '48–50 min', phase: 'Recap + exit', detail: 'Recap slide into notebooks. Exit question: −4 − (−10).' },
  ],
  answers: [
    { q: 'Warm-up examples:', a: 'temperature below 0, debt/overdraft, below sea level, basements, golf under par…' },
    { q: 'Self-check a) 20 + (−5) =', a: '15' },
    { q: 'Self-check b) −10 − (−15) =', a: '5' },
    { q: 'Self-check c) −2 + (−13) =', a: '−15' },
    { q: 'Exit question −4 − (−10) =', a: '6' },
  ],
  notes:
    'Watch for the classic error of flipping a single "+ (−)" into "+". Only "− (−)" becomes "+". ' +
    'Emphasise the one question — "right or left?" — before any calculation. Keep the arithmetic light so the method is the focus.',
}
