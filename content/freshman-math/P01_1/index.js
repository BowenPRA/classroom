// content/freshman-math/P01_1/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// `unit` is rendered inside a small circular badge on the course page, so it
// has to stay short — hence 'P1' rather than 'Project 1'.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'freshman-math',
    unit: 'P1',
    id: 'P01_1',
    title: 'Project: The Flight of the Fly',
    objective:
      'An assessed project following lesson 1.1. Students predict a 3D distance, build a scale model of a room by folding a notebook to 90° and measure the path with twine, ' +
      'calculate the flight both by chaining two right triangles and in one step, then investigate the harder case — a spider that must walk the surfaces — by unfolding the room ' +
      'into a flat net, comparing all three unfoldings and stating a general rule for a room a × b × c. They finish by measuring a real room and writing the work up. Marked out of 16.',
    order: 2,
  },
  slides,
  plan,
}
