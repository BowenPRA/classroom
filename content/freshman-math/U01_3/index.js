// content/freshman-math/U01_3/index.js
// A lesson module: default-exports { meta, slides, plan }. The registry
// auto-discovers this file (content/<course>/<unit>/index.js).
//
// `order` is 5, not 3: Project 1 (P01_1, the fly) holds order 2 and Project 2
// (P02_1, the rectangle) holds order 4, so the lessons run 1.1, P1, 1.2, P2, 1.3.
import { slides } from './slides.js'
import { plan } from './plan.js'

export default {
  meta: {
    course: 'freshman-math',
    unit: '1.3',
    id: 'U01_3',
    title: 'Circles, Compasses and Three Points',
    objective:
      'Define a circle as the set of points a fixed distance from a centre, and name the centre and radius; explain why a pair of compasses can only draw a circle; know that any three ' +
      'points that are not collinear lie on exactly one circle, and that three collinear points lie on none — justified both by a straight line meeting a circle at most twice and by the ' +
      'two perpendicular bisectors coming out parallel; construct the perpendicular bisector of a segment with compass and straight edge, and explain why two equal-radius arcs are enough; ' +
      'and construct the circle through three given points by intersecting two perpendicular bisectors. The lesson is framed as a conspiracy — three major European cities sit on a perfect ' +
      'circle, and so do three more — which the geometry then dismantles: any three places do, so the pattern was never evidence of anything. A printed map handout (homework/alg13) carries ' +
      'the class activity.',
    order: 5,
  },
  slides,
  plan,
}
