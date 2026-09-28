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
    objective: 'Teams pick a category and a value, argue in English, and the teacher reveals — eleven boards. Seven are Year 7: Mathematics 1.1–1.3, Science 1.1–1.3, a revision board drawn from all six units, a Unit 1 finale covering Maths 1.4–1.6, Science 1.4 and two rounds of classroom trivia, Science Unit 2 (2.1–2.7) with a photograph, symbol or particle diagram on almost every clue, Mathematics Unit 2 with 3.1–3.2, and Science 2.4 + 2.8 (the water cycle, acids and alkalis). Two are for the Teens class and are the hardest: IGCSE chemistry and physics, word history, pop songs and big numbers, then a second board of all trivia: myth or fact, celebrity couples, famous covers, geography and accidental inventions. One is for Kindergarten and Year 1 — cooking and first science, read aloud by the teacher, with a photograph on almost every answer. The last is Year 1 only: twenty-five picture clues in five columns — In the Kitchen, Food, Dishes from the World, Claps and Which Is…?',
    order: 2,
  },
  slides,
  plan,
}
