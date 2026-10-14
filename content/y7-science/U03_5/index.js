// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// Science 3.5, the first energy lesson: Unit 3 turns from forces to energy
// here. English and French only (meta.vietnamese: false), one period.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-science',
    unit: '3.5',
    id: 'U03_5',
    title: 'Energy',
    subtitle: 'The joule, and the eight ways energy is stored and transferred',
    objective:
      'Describe energy as something that must be changed or transferred to do something, measured in joules; ' +
      'name, describe and give examples of the energy stores (kinetic, chemical, thermal, elastic potential, ' +
      'gravitational potential) and transfers (electrical, sound, light, and thermal); say what luminous means; ' +
      'and explain that some energy stores last much longer than others.',
    order: 19,
    french: true,
    vietnamese: false,
  },
  slides,
  plan,
}
