// content/games/G03_jeopardy-finale/index.js
// A game module, discovered by the registry exactly like a lesson. This one is
// a single board rather than three: the second half of Unit 1, plus two rounds
// of trivia. The engine is shared with G02 — see widgets.jsx.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'games',
    unit: 'G3',
    id: 'G03',
    title: 'Jeopardy · Unit 1 Finale',
    objective: 'One board of thirty clues: factors and the HCF (Maths 1.4), tests for divisibility (1.5), squares, cubes and roots (1.6), cells to organisms (Science 1.4), and two rounds of classroom trivia — animal records, and numbers big enough to be funny.',
    order: 3,
  },
  slides,
  plan,
}
