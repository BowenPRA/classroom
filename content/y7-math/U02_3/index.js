// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
import { slides } from './slides.js'
import { plan } from './plan.js'

// No `dashboard` link yet: the Dashboard has no Y7_MATH U02_3 unit, and the
// pairing is added on both sides in the same commit or on neither (playbook §9).
export default {
  meta: {
    course: 'y7-math',
    unit: '2.3',
    id: 'U02_3',
    title: 'Collecting Like Terms',
    objective:
      'Say what a term and like terms are; simplify an expression by collecting like terms; ' +
      'know that x means 1x, so 8s − s = 7s; leave unlike terms such as 3a + 2b alone; ' +
      'recognise numbers and ab and ba as like terms, but not x and x²; ' +
      'and move each sign with its term, so 7x + 5y − 3x + y = 4x + 6y.',
    order: 9,
  },
  slides,
  plan,
}
