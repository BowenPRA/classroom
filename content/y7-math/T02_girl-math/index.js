// content/y7-math/T02_girl-math/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// `unit` is rendered inside a small circular badge on the course page, so it
// has to stay short — hence 'T2' rather than 'Task 2'.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y7-math',
    unit: 'T2',
    id: 'T02',
    title: 'Girl Math',
    objective:
      'A standalone task: a set of girls share a number of pieces of rice paper under rules like "Carrot gets twice as many as Erica" and "Nam gets 3 more than Su", and students find every share before the clock runs out. ' +
      'The method is the bar model, not algebra — draw a box for the smallest share, turn "twice as many" into two boxes, take any "more than" extra off the total before dividing, count the boxes, divide, then add the answers back up to check. ' +
      'Ten rounds, from two girls and one rule up to all eight girls in an arithmetic staircase, each worth more rolls than the last. ' +
      'The three phrases the whole task turns on are "twice as many as", "more than" and "fewer than" — this is a reading task with arithmetic attached, which is exactly the difficulty this class actually has.',
    order: 91,
  },
  slides,
  plan,
}
