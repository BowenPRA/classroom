// content/games/G01_word-wall/slides.js
// A game unit is one slide: the `game` layout hands the whole slide to the
// widget, because a header strip would eat the height the board needs and the
// board already carries its own title, hint and controls.
//
// `remote` is the game's screen on Mr Bowen's phone (remote.jsx), drawn by the
// phone remote while this slide is up. Its own chunk: only the phone loads it.
import { lazy } from 'react'
import { WordWallGame } from './widgets.jsx'

export const slides = [
  {
    layout: 'game',
    title: 'Word Wall',
    titleVn: 'Bức Tường Từ',
    widget: WordWallGame,
    remote: lazy(() => import('./remote.jsx')),
  },
]
