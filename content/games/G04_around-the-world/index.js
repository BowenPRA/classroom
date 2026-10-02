// content/games/G04_around-the-world/index.js
// A game module, discovered by the registry exactly like a lesson.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'games',
    unit: 'G4',
    id: 'G04',
    title: 'Around the World',
    objective: 'Year 7 Maths revision as a race round the room. Choose the units, and one question at a time comes up big on the TV, in English or Vietnamese, from 420 questions on Maths 1.1–3.2. A student stands behind a seated one, whoever says the answer first moves on, and one key shows the answer, then the next question. No question repeats until the chosen units are used up.',
    order: 4,
  },
  slides,
  plan,
}
