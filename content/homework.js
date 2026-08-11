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
]
