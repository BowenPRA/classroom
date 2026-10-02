// content/games/G04_around-the-world/slides.js
// A game unit is one slide: the `game` layout hands the whole slide to the
// widget, and the keyboard with it. The questions come from the maths bank in
// content/banks/y7-math, not from this folder.
import { AroundTheWorldGame } from './widgets.jsx'

export const slides = [
  {
    layout: 'game',
    title: 'Around the World',
    titleVn: 'Vòng quanh thế giới',
    widget: AroundTheWorldGame,
  },
]
