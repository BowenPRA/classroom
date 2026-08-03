// content/y7-science/U00_1/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// Day One covers homeroom, the science period and the maths period of Tue 4
// Aug 2026. It is filed under Science because that is the period where most of
// it is taught; `order: 0` keeps it ahead of Unit 1.1.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-science',
    unit: 'Day 1',
    id: 'U00_1',
    title: 'Day One: Welcome to Year 7',
    subtitle: 'Homeroom · Science · Mathematics — Tue 4 Aug 2026',
    objective:
      'Get to know the class, walk through the expectation letter, set up binders and named Learner\'s Books, and sit the Stage 6 diagnostic.',
    order: 0,
  },
  slides,
  plan,
}
