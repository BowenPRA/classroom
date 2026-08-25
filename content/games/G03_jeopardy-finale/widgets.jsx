// content/games/G03_jeopardy-finale/widgets.jsx
// This game has no widget of its own. Jeopardy is one engine — choose, wait,
// reveal, award — and a second copy of it would be a second thing to fix every
// time the board layout changes. So the engine stays in G02 and takes its
// clues as a prop; this file is only the wiring.
import { JeopardyGame } from '../G02_jeopardy/widgets.jsx'
import { BOARDS } from './boards.js'

export function JeopardyFinale(props) {
  return <JeopardyGame {...props} boards={BOARDS} />
}
