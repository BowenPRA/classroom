// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// The last section of Unit 3 Forces and energy, one period. English and French
// only — from 15 October the Year 7 lessons drop Vietnamese, so the deck's
// switch reads EN / FR.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-science',
    unit: '3.7',
    id: 'U03_7',
    title: 'Where Does Energy Go?',
    subtitle: 'Useful and wasted energy: the motorbike, the lamp, the fire and the bouncing ball',
    objective:
      'Explain that when energy is changed or transferred, some of it is useful and some is wasted; ' +
      'name the wasted energy in a motorbike, a lamp and a cooking fire; describe dissipated energy as ' +
      'energy that spreads out where there is no use for it and cannot be recovered; and draw an energy ' +
      'diagram that shows the useful and the wasted energy.',
    order: 21,
    french: true,
    vietnamese: false,
  },
  slides,
  plan,
}
