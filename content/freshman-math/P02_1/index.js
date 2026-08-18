// content/freshman-math/P02_1/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// `unit` is rendered inside a small circular badge on the course page, so it
// has to stay short — hence 'P2' rather than 'Project 2'.
//
// order 4: it follows lesson 1.2 (order 3), which is where slope is taught.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'freshman-math',
    unit: 'P2',
    id: 'P02_1',
    title: 'Project: The Rectangle That Isn’t',
    objective:
      'An assessed project following lesson 1.2. Students are given two tilted quadrilaterals that share an edge and differ by a single grid square — one is a rectangle, one is not — and must decide which using slopes alone. ' +
      'They predict first, then derive the perpendicular rule physically by cutting out a slope triangle and turning it a quarter turn, discovering that rise and run swap while one changes sign. They state the parallel and ' +
      'perpendicular rules from their own data, test all eight edges, then use the distance formula from 1.1 to rule out a square. The investigation asks them to construct their own rectangle and square with no horizontal or ' +
      'vertical side, and to find the one perpendicular pair the multiply-to-−1 rule cannot handle. Marked out of 16. Worked solutions sit behind a stop slide, for after the projects are collected.',
    order: 4,
  },
  slides,
  plan,
}
