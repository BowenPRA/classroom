import { slides } from './slides.js'
import { plan } from './plan.js'

// No `dashboard` link yet: the Dashboard has no 2.5 unit, and the pairing is
// added on both sides in the same commit or on neither (playbook §9).
export default {
  meta: {
    course: 'y7-science',
    unit: '2.5',
    id: 'U02_5',
    title: 'Atoms, Elements and the Periodic Table',
    objective:
      'Explain what an atom and an element are, describe how atoms join together, ' +
      'find periods, groups, metals and non-metals in the first 20 elements of the ' +
      'Periodic Table, and write element symbols correctly.',
    // 2.3 is 9; 10 is left free for 2.4 The water cycle.
    order: 11,
  },
  slides,
  plan,
}
