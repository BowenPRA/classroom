// content/games/G02_jeopardy/images.js
// Every picture a clue can show, imported so Vite hashes it and respects the
// /classroom/ base. boards.js refers to these by key (`aImage: { src: IMAGES.cow }`),
// so a missing photo is one obvious hole here rather than a broken path buried
// in a thousand lines of clue data.
//
// Licences: images/CREDITS.json — all Wikimedia Commons, CC0 / PD / CC BY /
// CC BY-SA. Every CC BY(-SA) file needs its attribution kept, and the teacher
// plan lists the names alongside the music credits for the same reason.
//
// TWO KINDS OF PICTURE LIVE HERE, and they are sized differently on purpose.
//
//   · The Year 7 reveals (blue whale, falcon, giraffe, octopus, tardigrade,
//     leaf) are 1280px photographs. They were sourced for this board.
//   · Everything from `chopsticks` down is a Kindergarten/Year 1 picture, and
//     most are BYTE-IDENTICAL COPIES of a Word Wall tile at 500px. That is not
//     an oversight. The clue image renders about 470 CSS px wide even on a
//     fullscreen 1920 projector, so 500px is already 1:1 there — and because
//     the bytes match G01's file exactly, Vite emits one asset for both games
//     and the copy costs nothing in the bundle. Re-fetching them larger would
//     add roughly a megabyte and change nothing the class can see.
//
// The copies are copies rather than cross-folder imports so each game keeps its
// own images/ folder and its own CREDITS.json, which is the rule everywhere
// else in this repo.
//
// A clue earns a picture when seeing the thing is part of the answer. On the
// Year 7 boards that is six clues out of 120. On the Kindergarten board it is
// 29 out of 30, because a five-year-old who has just said "chopsticks" out loud
// has not finished the clue until they have seen a pair.
import blueWhale from './images/blue-whale.jpg'
import peregrineFalcon from './images/peregrine-falcon.jpg'
import giraffe from './images/giraffe.jpg'
import octopus from './images/octopus.jpg'
import tardigrade from './images/tardigrade.jpg'
import leafCrossSection from './images/leaf-cross-section.jpg'

// ── Kindergarten / Year 1 ───────────────────────────────────────────────────
// Copied from the Word Wall, so the picture on the board is the same picture
// the class sorted earlier in the week.
import chopsticks from './images/chopsticks.jpg'
import pan from './images/pan.jpg'
import pot from './images/pot.jpg'
import fridge from './images/fridge.jpg'
import toaster from './images/toaster.jpg'
import rice from './images/rice.jpg'
import bread from './images/bread.jpg'
import cake from './images/cake.jpg'
import springroll from './images/springroll.jpg'
import friedegg from './images/friedegg.jpg'
import banana from './images/banana.jpg'
import cow from './images/cow.jpg'
import hen from './images/hen.jpg'
import milk from './images/milk.jpg'
import bee from './images/bee.jpg'
import dog from './images/dog.jpg'
import spoon from './images/spoon.jpg'
import tree from './images/tree.jpg'
import carrot from './images/carrot.jpg'

// Sourced for the Kindergarten board — nothing in the Word Wall covers them.
import riceField from './images/rice-field.jpg'
import eye from './images/eye.jpg'
import ears from './images/ears.jpg'
import lemon from './images/lemon.jpg'
import ice from './images/ice.jpg'
import meltingIcecream from './images/melting-icecream.jpg'
import boilingPot from './images/boiling-pot.jpg'
import seedling from './images/seedling.jpg'

export const IMAGES = {
  // Year 7
  blueWhale,
  peregrineFalcon,
  giraffe,
  octopus,
  tardigrade,
  leafCrossSection,
  // Kindergarten / Year 1
  chopsticks,
  pan,
  pot,
  fridge,
  toaster,
  rice,
  bread,
  cake,
  springroll,
  friedegg,
  banana,
  cow,
  hen,
  milk,
  bee,
  dog,
  spoon,
  tree,
  carrot,
  riceField,
  eye,
  ears,
  lemon,
  ice,
  meltingIcecream,
  boilingPot,
  seedling,
}
