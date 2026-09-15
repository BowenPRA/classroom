// content/games/G03_which-is/slides.js
// A game unit is one slide: the `game` layout hands the whole slide to the
// widget. The four mini lessons live inside the game, in front of each stage,
// so the class goes lesson → play → lesson without the teacher leaving the board.
import { WhichIsGame } from './widgets.jsx'

export const slides = [
  {
    layout: 'game',
    title: 'Which Is…?',
    titleVn: 'Cái Nào…?',
    widget: WhichIsGame,
  },
]
