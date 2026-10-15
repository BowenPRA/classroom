// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// Science 3.6 Changes in energy: one period. English and French only — from
// 15 October the Year 7 lessons drop Vietnamese, so the deck's switch reads
// EN / FR.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-science',
    unit: '3.6',
    id: 'U03_6',
    title: 'Changes in Energy',
    subtitle: 'Follow the energy: from the fuel, through each change, to what it does',
    objective:
      'Explain that when something happens, energy is changed or transferred; give examples of energy ' +
      'changes (a cooking fire, walking upstairs, a gas power station, a hydropower dam, a typhoon); draw ' +
      'energy diagrams with a box for each energy and an arrow for each change; tell a process from an ' +
      'event; name the useful energy change in a device; and plan and evaluate the candle experiment.',
    order: 20,
    french: true,
    vietnamese: false,
  },
  slides,
  plan,
}
