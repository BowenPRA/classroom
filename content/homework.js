// The printed homework packets shown under the Homework button on the home page,
// in display order (oldest first). These are PDFs to open or print, not lesson
// decks — they have no slides — so they live here rather than in the lesson
// registry.
//
// Only the STUDENT copy of each packet is linked. The teacher answer-key PDFs
// (homework/<packet>/<packet>-teacher.pdf) are deliberately NOT imported, so
// they never reach the deployed, public site.
//
// The PDFs are imported with `?url` so Vite fingerprints them and prefixes the
// `/classroom/` base automatically. Never hand-write a /homework/... path.
import hw01 from '../homework/hw01/hw01.pdf?url'
import hw02 from '../homework/hw02/hw02.pdf?url'
import alg13 from '../homework/alg13/alg13.pdf?url'

export const HOMEWORK = [
  {
    id: 'hw01',
    label: 'HW 1',
    title: 'Integers and Cells',
    subtitle: 'Maths 1.1 · Science 1.1',
    pdf: hw01,
  },
  {
    id: 'hw02',
    label: 'HW 2',
    title: 'Signs, Multiples and Cells',
    subtitle: 'Maths 1.2–1.3 · Science 1.2–1.3',
    pdf: hw02,
  },
  // Not a Year 7 packet: a single landscape sheet for the Algebra Track, handed
  // out DURING lesson 1.3 and used twice in it. It lives here because this is
  // the shelf everything printable is printed from. There is no teacher copy —
  // the student picks their own cities, so there is no key to print.
  {
    id: 'alg13',
    label: 'A1.3',
    title: 'The Circle Map',
    subtitle: 'Algebra Track 1.3 · one per student, in class',
    pdf: alg13,
  },
]
