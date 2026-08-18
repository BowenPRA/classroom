// content/freshman-math/U01_2/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// `order` is 3, not 2: Project 1 (P01_1, the fly) sits between lesson 1.1 and
// this one and already holds order 2.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'freshman-math',
    unit: '1.2',
    id: 'U01_2',
    title: 'Lines and Slope',
    objective:
      'Re-derive the distance between two points by drawing the right triangle rather than recalling the formula; define a line, a line segment and a ray, and know that any two ' +
      'different points determine exactly one line; define slope as rise over run and know it is the same wherever it is measured on a line; use m = (y₂ − y₁)/(x₂ − x₁) with a ' +
      'consistent direction of travel; classify a slope as positive, negative, zero or undefined, distinguishing zero slope from no slope; and read a slope as a rate — a fraction, ' +
      'a decimal or a percentage gradient. The lesson closes with a hands-on team task: students draw a scaled right triangle on a classroom mirror, measure it, find the slope of its hypotenuse, and construct and justify the perpendicular bisector of that hypotenuse.',
    order: 3,
  },
  slides,
  plan,
}
