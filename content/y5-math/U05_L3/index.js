// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// Year 5 Maths (Mr. David), Unit 5 Addition and subtraction, lesson 3:
// Below Zero in Words. Bigger jumps across zero, estimating first, and the
// English of word problems: rises / falls, floors below the ground, owing
// money, and "the difference between". The first deck built for a PRA teacher
// other than Mr Bowen: English only (the course is bilingual: false), Mr. David
// in the examples. See docs/TEACHER-COURSES.md.
//
// `unit` is '5 · Lesson 3', not a book section number: there is no Year 5
// Learner's Book or Workbook on the drive yet, so the lesson is numbered by
// its place in Mr. David's Unit 5 (lessons 1 and 2 are his own PowerPoints).
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'y5-math',
    unit: '5 · Lesson 3',
    id: 'U05_L3',
    title: 'Below Zero in Words',
    subtitle: 'Temperatures, floors below the ground, money owed and the difference between',
    objective:
      'Add and subtract whole numbers where one is negative, using zero as a bridge and estimating first; ' +
      'turn word problems about temperature, floors below the ground and money owed into number sentences; ' +
      'and find the difference between a negative and a positive number.',
    order: 3,
  },
  slides,
  plan,
}
