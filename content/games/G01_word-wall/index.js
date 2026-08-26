// content/games/G01_word-wall/index.js
// A game module, discovered by the registry exactly like a lesson. One "unit"
// in the games course is one game; the fourteen puzzles live inside it.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'games',
    unit: 'G1',
    id: 'G01',
    title: 'Word Wall',
    objective: 'Sixteen tiles hide four groups of four. Sort pictures and words into categories, first sounds and rhymes — twenty-six puzzles, from Kindergarten picture sorting through a Year 1 science-and-the-world set up to Year 7 wordplay.',
    order: 1,
  },
  slides,
  plan,
}
