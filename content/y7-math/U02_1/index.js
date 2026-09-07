// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-math',
    unit: '2.1',
    id: 'U02_1',
    title: 'Constructing Expressions',
    objective:
      'Use a letter for a number you do not know, leave an expression such as b + 2 unfinished without thinking it is wrong, and read the English that decides the answer — "h less than t" is written t − h, and "subtract 4" is not "subtract from 4".',
    order: 7,
  },
  slides,
  plan,
}
