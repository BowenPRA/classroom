// content/freshman-math/U01_1/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'freshman-math',
    unit: '1.1',
    id: 'U01_1',
    title: 'The Cartesian Plane and Distance',
    objective:
      'Measure distance on a number line as |a − b| and find a midpoint as the average of two numbers; plot and name points on the Cartesian plane and its four quadrants; ' +
      'split a slanted line into x and y components and use them to find both a midpoint and a distance; define a dimension as a count of perpendicular axes, extend the ' +
      'distance formula to three dimensions by chaining two right triangles, and know that √(x² + y²) is not x + y.',
    order: 1,
  },
  slides,
  plan,
}
