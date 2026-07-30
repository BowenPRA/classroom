// content/y7-math/U01_1/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-math',
    unit: '1.1',
    id: 'U01_1',
    title: 'Adding & Subtracting Integers',
    objective: 'Add and subtract positive and negative integers using a number line.',
    order: 1,
  },
  slides,
  plan,
}
