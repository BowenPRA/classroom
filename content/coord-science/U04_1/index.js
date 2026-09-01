// content/coord-science/U04_1/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'coord-science',
    unit: 'C4.01',
    id: 'U04_1',
    title: 'Electrolysis',
    objective:
      'Define electrolysis and electrolytes, explain why compounds must be molten or dissolved, read the lead(II) bromide equation and its half-equations, and predict the products of molten binary salts.',
    order: 1,
  },
  slides,
  plan,
}
