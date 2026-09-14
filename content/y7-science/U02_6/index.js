import { slides } from './slides.js'
import { plan } from './plan.js'

// No `dashboard` link yet: the Dashboard has no 2.6 unit, and the pairing is
// added on both sides in the same commit or on neither (playbook §9).
export default {
  meta: {
    course: 'y7-science',
    unit: '2.6',
    id: 'U02_6',
    title: 'Compounds and Formulae',
    objective:
      'Explain the difference between an element and a compound; name compounds ' +
      'with -ide and -ate endings and the prefixes mono and di; draw particle ' +
      'diagrams; and read a formula to say which elements and how many atoms.',
    // 2.5 is 11; 10 is still free for 2.4 The water cycle.
    order: 12,
  },
  slides,
  plan,
}
