// content/games/G02_jeopardy/index.js
// A game module, discovered by the registry exactly like a lesson. One "unit"
// in the games course is one game; the four boards live inside it.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'games',
    unit: 'G2',
    id: 'G02',
    title: 'Jeopardy',
    objective: 'Teams pick a category and a value, argue in English, and the teacher reveals — four boards of thirty clues: Mathematics 1.1–1.3, Science 1.1–1.3, a revision board drawn from all six units, and a Unit 1 finale covering Maths 1.4–1.6, Science 1.4 and two rounds of classroom trivia.',
    order: 2,
  },
  slides,
  plan,
}
