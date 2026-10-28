// content/games/G05_guess-who/index.js
// Guess Who is an app with its own route (src/guess-who/), not a deck: this
// entry only puts it on the Classroom Games list. `href` makes the row open
// the game; with no slides, it never opens as a lesson.
export default {
  meta: {
    course: 'games',
    unit: 'G5',
    id: 'G05',
    title: 'Guess Who? Halloween Edition',
    objective: 'The Halloween carnival game. Faces from your Class list, the whole school or 24 monsters fill the TV; the player types yes / no questions on the laptop and Mr Bowen answers on his phone. A right guess within 4, 7 or 9 questions wins 3, 2 or 1 Riverbucks.',
    order: 5,
    href: '/guess-who',
  },
  slides: [],
}
