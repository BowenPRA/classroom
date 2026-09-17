// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
import { slides } from './slides.js'
import { plan } from './plan.js'

// No `dashboard` link yet: the Dashboard has no Y7_MATH U02_5 unit, and the
// pairing is added on both sides in the same commit or on neither (playbook §9).
export default {
  meta: {
    course: 'y7-math',
    unit: '2.5',
    id: 'U02_5',
    title: 'Constructing & Solving Equations',
    objective:
      'Say what an equation is and what solve means; check an answer by substituting it back in, so x − 4 = 6 gives x = 10 and not 2; ' +
      'use inverse operations and reverse the flow chart to solve one-step equations, written either way round; ' +
      'turn "I think of a number…" into an equation and solve it; ' +
      'and solve two-step equations by undoing the last step first, so 2a + 4 = 18 gives a = 7.',
    order: 11,
  },
  slides,
  plan,
}
