// content/freshman-math/U01_4/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// order 7: it follows Project 3 (order 6).
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'freshman-math',
    unit: '1.4',
    id: 'U01_4',
    title: 'Parabolas and the Vertex Form',
    objective:
      'Students plot y = x² by hand from a table, name the parabola, its vertex and its axis of symmetry, and then discover the three transformations one at a time — k slides it up, a changes its ' +
      'width and can flip it, and a bracket slides it sideways. The turn of the lesson is y = x² + 2x: they predict it, plot it, find its vertex one below the axis at (−1, −1), and decide to add 1 to lift ' +
      'it onto the axis — which is how x² + 2x + 1 arrives, and it turns out to be (x + 1)². They finish able to read the vertex (h, k) straight off y = a(x − h)² + k, sign trap included.',
    order: 7,
  },
  slides,
  plan,
}
