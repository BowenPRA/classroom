// content/freshman-math/P03_1/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// `order` is 6: the course runs 1.1, P1, 1.2, P2, 1.3, P3, so each project sits
// immediately after the lesson it is built on. This one follows 1.3 and uses
// its circles, its compass construction and its collinear exception.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'freshman-math',
    unit: 'P3',
    id: 'P03_1',
    title: 'Project: Somebody Is 2.7 Kilometres Away',
    objective:
      'An assessed project following lesson 1.3. Mr Bowen is somewhere in Hoi An and will not say where; an app reports how far away he is, to the nearest tenth of a kilometre, from three ' +
      'places. Students construct the fix on a real 1:25 000 map with compass and straight edge, finding both places two readings allow before the third one decides, then quantify the ' +
      'uncertainty the rounding leaves — a patch about 130 m across — and answer the question the whole project is built for: the app never shared anybody\'s location, only their distance, ' +
      'and three distances are a location. After the maps are signed off they meet the two words for it, trilateration and triangulation, and what a phone actually does. Part 2 goes ' +
      'downstairs: each team hides a sticker, measures it from three reference points of their own choosing, and hands the three numbers to a class of five-year-olds who hunt for it with ' +
      'two tape measures — two tapes find two places, and the third clue is what picks one. Marked out of 16. A printed two-sided sheet (homework/alg13p3) carries the map and the write-up, ' +
      'and worked solutions sit behind a stop slide, for after the projects are collected.',
    order: 6,
  },
  slides,
  plan,
}
