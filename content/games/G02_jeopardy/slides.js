// content/games/G02_jeopardy/slides.js
// A game unit is one slide: the `game` layout hands the whole slide to the
// widget. A header strip would eat the height the board needs, and the board
// already carries its own title, score strip and controls.
import { JeopardyGame } from './widgets.jsx'

export const slides = [
  {
    layout: 'game',
    title: 'Jeopardy',
    titleVn: 'Jeopardy',
    widget: JeopardyGame,
  },
]
