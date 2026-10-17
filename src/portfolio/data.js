// Content for the Moreland teaching portfolio at #/portfolio. Unlisted: no
// page on the classroom site links here, and the page asks search engines not
// to index it. Everything a reader sees is in this file.
//
// Adding an artifact: set its `url` (a Drive/YouTube/Canva link, or a path
// on this site). Until then it shows as "In progress". Only finished,
// submitted work goes here — never a draft.

import prizeWinner from './images/march-mathness-prize.webp'
import cutShapes from './images/maths-cut-shapes.webp'
import natureWalk from './images/nature-walk-jetty.webp'
import m3Vlog from './media/m3u2a2-vlog.mp4'
import m3Representations from './media/m3-representations.png'
import m3Ebp from './media/m3u1a2-ebp.mp4'
import m3VlogPoster from './media/m3u2a2-vlog-poster.jpg'
import m3EbpPoster from './media/m3u1a2-ebp-poster.jpg'

// The cohort's shared Literacy Guide: one Google Doc with a section per module.
const LITERACY_GUIDE = 'https://docs.google.com/document/d/1Z9Tdh-OuZTgQ4LEkigYQtu0iWqQmhe0z/edit'

// Photos from Palm River Academy's About page, kept in ./images. See
// CREDITS.json for each one's source and the consent note.
export const PHOTOS = {
  portrait: {
    src: prizeWinner,
    alt: 'Mr. Bowen giving a thumbs-up beside the winner of the guess-how-many maths challenge at March Mathness',
    caption: 'March Mathness: the guess-how-many winner',
  },
  teaching: [
    {
      src: cutShapes,
      alt: 'Mr. Bowen working through a cut-and-fold shapes activity with a Primary maths group',
      caption: 'Cut-and-fold shapes with a Primary maths group',
    },
    {
      src: natureWalk,
      alt: 'Mr. Bowen and Secondary students on a river jetty during a nature walk',
      caption: 'A Secondary nature walk by the river',
    },
  ],
  credit: 'Photos: Palm River Academy',
}

export const PROFILE = {
  name: 'Spencer Bowen',
  goesBy: 'Bowen',
  headline: 'Teacher candidate · Secondary Mathematics 7–12',
  program: 'Moreland University · TEACH-NOW Teacher Preparation Certificate',
  role: 'Upper Secondary Coordinator, Palm River Academy',
  place: 'Hội An, Việt Nam',
  bio: [
    'I teach Year 7 Cambridge maths and science at Palm River Academy in Hội An, and I’m the Upper Secondary Coordinator there too. My students are Vietnamese, and they learn everything in English.',
    'I also have a student who arrived speaking only French. I translate all my slides into French using Claude, and when I have to tell the class no, that student says it for me: “Non !”',
    'The maths is usually fine. It’s the language that makes it hard, and subtraction shows it best. Put “Subtract 5 from 8” on the screen and I get 5 − 8, because English says the numbers backwards. So I teach the wording on purpose.',
    'I started out as an adjunct professor. I got into maths education through a GK-12 research program running Math Circles out of San Francisco State University, and later did outreach at the American Institute of Mathematics.',
    'This portfolio is my work for the Moreland University TEACH-NOW certificate, next to the lessons I teach every week.',
  ],
}

// Four habits that run through every deck, each pointing at a lesson that
// shows it. Source: docs/LESSON-PLAYBOOK.md §1.
export const PRINCIPLES = [
  {
    icon: 'Languages',
    title: 'Plain English first',
    body: 'One idea per slide, in short sentences. Every key word has its translation next to it, in Vietnamese or French.',
    lesson: ['y7-math', 'U02_3'],
  },
  {
    icon: 'CircleHelp',
    title: 'Ask before you tell',
    body: 'The question goes on a slide by itself, with no numbers on it, and the class guesses before we work anything out. The guesses go on the board, and then we find out how close they were.',
    lesson: ['y7-science', 'U01_1'],
  },
  {
    icon: 'Hand',
    title: 'Everyone answers',
    body: 'When there are two possible answers, everyone votes at once. Left hand for A, right hand for B. Nobody can copy a neighbour, and I can see the split straight away.',
    lesson: ['y7-math', 'U02_3'],
  },
  {
    icon: 'NotebookPen',
    title: 'Write it down',
    body: 'Anything they have to learn goes in an orange “Write This Down” note. The lesson ends with a count they can check, like “seven panels in your notebook today”.',
    lesson: ['y7-math', 'U02_3'],
  },
]

// Lessons shown under "From my classroom". Titles and units come from the
// registry, so they never drift from the decks themselves.
export const FEATURED = [
  { course: 'y7-math', slug: 'U02_3', why: '“Like terms” has nothing to do with “thích”. In maths, “like” means the same kind, and I say both meanings out loud.' },
  { course: 'y7-science', slug: 'U02_5', why: 'Period and group already mean something in everyday English: a lesson, and a group of friends. In the Periodic Table they’re a row and a column, so we learn both meanings side by side.' },
  { course: 'y7-math', slug: 'U04_1_4', why: 'One of the first decks I taught in English and French. We read decimals aloud digit by digit and check the multiplication with an estimate.' },
  { course: 'y7-science', slug: 'U03_1', why: 'Weight is a force, measured in newtons. Mass is the amount of matter, in kilograms. Everyday English uses “weight” for both, so the lesson keeps them apart.' },
]

// kind → icon, in Artifact.jsx
export const MODULES = [
  {
    n: 1,
    title: 'Program Orientation',
    when: 'September 2026',
    status: 'complete',
    artifacts: [
      { id: 'm1-literacy', activity: 'U1 · A3', kind: 'doc', title: 'Cohort Literacy Guide: Module 1', blurb: 'The definition and elements of literacy, built with my cohort.', page: 'literacy', url: LITERACY_GUIDE },
    ],
  },
  {
    n: 2,
    title: 'The Culture of Schooling',
    when: '13 September – 3 October 2026',
    status: 'progress',
    artifacts: [
      { id: 'm2-law', activity: 'U1 · A2', kind: 'video', title: 'A law that shapes teaching', blurb: 'A 4–5 minute video on one law or policy: what it says, where it came from, its strengths and weaknesses, and what it changes in a classroom.' },
      { id: 'm2-modelling', activity: 'U1 · A1', kind: 'image', title: 'Modelling vs models in mathematics', blurb: 'A one-page visual on the difference between the mathematical modelling process and models in mathematics.', page: 'maths' },
      { id: 'm2-literacy-pres', activity: 'U2 · A2', kind: 'presentation', title: 'Promoting literacy in maths', blurb: 'Why literacy matters in every subject, the signs of a struggling reader in Year 7 maths, and a plan of action for my school.' },
      { id: 'm2-writing', activity: 'U2 · A3', kind: 'image', title: 'From letters to essays', blurb: 'An infographic on how writing develops, with interventions for my grade and subject.' },
      { id: 'm2-flowchart', activity: 'U3 · A1', kind: 'flowchart', title: 'Helping a struggling learner', blurb: 'The process I follow to identify and support a struggling student, including how I tell a language need from a learning disability, and when I bring in families.' },
      { id: 'm2-whiteboard', activity: 'U3 · A3', kind: 'video', title: 'Solving it on the whiteboard', blurb: 'Two Year 7 algebra problems, solved aloud, with the mistakes my students really make and a second strategy for each.', page: 'maths' },
      { id: 'm2-literacy', activity: 'U3 · A3', kind: 'doc', title: 'Cohort Literacy Guide: Module 2', blurb: 'Literacy terms and definitions, built with my cohort.', page: 'literacy' },
    ],
  },
  {
    n: 3,
    title: 'The Learner and Learning in a Digital Age',
    when: '4 – 31 October 2026',
    status: 'current',
    artifacts: [
      { id: 'm3-representations', activity: 'U1 · A1', kind: 'image', title: 'One standard, five representations', blurb: 'CCSS 7.EE.A.1 shown physically, visually, symbolically, verbally and in context, all from my Collecting Like Terms lesson.', page: 'maths', url: m3Representations, alt: 'Poster: the standard CCSS 7.EE.A.1 written out in full, with 7x + 5y − 3x + y = 4x + 6y shown five ways: paper strips, sorting baskets, find-move-collect steps, sentence frames with Vietnamese key words, and two word problems.' },
      { id: 'm3-ebp', activity: 'U1 · A2', kind: 'video', title: 'Three evidence-based practices', blurb: 'Solved problems with errors, comparing strategies, and keeping the cognitive demand high, with examples from my algebra unit.', url: m3Ebp, poster: m3EbpPoster },
      { id: 'm3-vlog', activity: 'U2 · A2', kind: 'video', title: 'Understanding multilingual learners', blurb: 'A short vlog: scaffolding discussion, using the home language as a resource, and teaching academic vocabulary.', url: m3Vlog, poster: m3VlogPoster },
      { id: 'm3-literacy', activity: 'U1 · A1', kind: 'doc', title: 'Cohort Literacy Guide: Module 3', blurb: 'Module 3 literacy terms, built with my cohort. My entry: academic vocabulary.', page: 'literacy', url: LITERACY_GUIDE },
    ],
  },
  { n: 4, title: 'Managing the Learning Environment', status: 'upcoming', artifacts: [] },
  { n: 5, title: 'Student Assessments', status: 'upcoming', artifacts: [] },
  { n: 6, title: 'Planning and Preparation for Learning', status: 'upcoming', artifacts: [] },
  { n: 7, title: 'Introduction to Clinical Practice', status: 'upcoming', artifacts: [] },
  { n: 8, title: 'Teaching Practice and Proficiency', status: 'upcoming', artifacts: [] },
]

/** Every artifact tagged for a page (`maths` or `literacy`), with its module. */
export function artifactsFor(page) {
  return MODULES.flatMap((m) =>
    m.artifacts.filter((a) => a.page === page).map((a) => ({ ...a, module: m.n })),
  )
}
