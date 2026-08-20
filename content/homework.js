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
import hw03 from '../homework/hw03/hw03.pdf?url'
import hw03x from '../homework/hw03x/hw03x.pdf?url'
import alg13 from '../homework/alg13/alg13.pdf?url'
import alg13p3 from '../homework/alg13p3/alg13p3.pdf?url'

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
  {
    id: 'hw03',
    label: 'HW 3',
    title: 'Factors, Tests and Tissues',
    subtitle: 'Maths 1.4–1.5 · Science 1.4',
    pdf: hw03,
  },
  // Goes out with HW 3, for students who will get more out of Unit 1 with extra
  // practice on the two operations it runs on. Listed right after it rather
  // than at the end, because the two are handed out together.
  {
    id: 'hw03x',
    label: 'EX 3',
    title: 'The Two That Do the Work',
    subtitle: 'Extra · multiplication and division',
    pdf: hw03x,
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
  // The Project 3 working sheet. Two sides: the Hoi An map at 1 cm = 250 m on
  // the front, the write-up and the Early Years clue card on the back. Print
  // double-sided, one per student.
  {
    id: 'alg13p3',
    label: 'P3',
    title: 'Somebody Is 2.7 km Away',
    subtitle: 'Algebra Track Project 3 · print double-sided',
    pdf: alg13p3,
  },
]
