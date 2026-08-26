// content/games/G02_jeopardy/images.js
// Every picture a clue can show, imported so Vite hashes it and respects the
// /classroom/ base. boards.js refers to these by key (`qImage: { src: IMAGES.giraffe }`),
// so a missing photo is one obvious hole here rather than a broken path buried
// in a thousand lines of clue data.
//
// Licences: images/CREDITS.json — all Wikimedia Commons, CC0 / CC BY / CC BY-SA.
// Every one of the CC BY(-SA) files needs its attribution kept, and the teacher
// plan lists the names alongside the music credits for the same reason.
//
// Pictures are the exception on a Jeopardy board, not the rule. A clue earns
// one when seeing the thing is part of the answer — an animal a Year 7 has read
// the English name of but never seen, or a leaf section whose four layers are
// the whole point. A photograph next to "What is 9²?" is decoration, and
// decoration on a projector is one more thing between the class and the maths.
import blueWhale from './images/blue-whale.jpg'
import peregrineFalcon from './images/peregrine-falcon.jpg'
import giraffe from './images/giraffe.jpg'
import octopus from './images/octopus.jpg'
import tardigrade from './images/tardigrade.jpg'
import leafCrossSection from './images/leaf-cross-section.jpg'

export const IMAGES = {
  blueWhale,
  peregrineFalcon,
  giraffe,
  octopus,
  tardigrade,
  leafCrossSection,
}
