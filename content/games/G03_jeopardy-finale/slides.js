// content/games/G03_jeopardy-finale/slides.js
// A game unit is one slide: the `game` layout hands the whole slide to the
// widget. A header strip would eat the height the board needs, and the board
// already carries its own title, score strip and controls.
import { JeopardyFinale } from './widgets.jsx'

export const slides = [
  {
    layout: 'game',
    title: 'Jeopardy · Unit 1 Finale',
    titleVn: 'Jeopardy · Chung kết Chương 1',
    widget: JeopardyFinale,
  },
]
