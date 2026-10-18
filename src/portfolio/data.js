// Content for the Moreland teaching portfolio at #/portfolio. Unlisted: no
// page on the classroom site links here, and the page asks search engines not
// to index it. Everything a reader sees is in this file.
//
// Adding an artifact: set its `url` (a Drive/YouTube/Canva link, or a path
// on this site). Until then it shows as "In progress". Only finished,
// submitted work goes here — never a draft.

import cutShapes from './images/maths-cut-shapes.webp'
import natureWalk from './images/nature-walk-jetty.webp'

// Photos from Palm River Academy's About page. The teaching shots live in
// ./images; the portrait is still linked from the school's site. See
// CREDITS.json for each one's source and the consent note.
export const PHOTOS = {
  portrait: {
    src: 'https://pra.edu.vn/assets/img/team/bowen-720.webp',
    alt: 'Spencer Bowen',
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
    'I teach Year 7 Cambridge Lower Secondary maths and science at Palm River Academy in Hội An, where I am also the Upper Secondary Coordinator. My students learn in English; their first language is Vietnamese.',
    'I started out as an adjunct professor, moved into maths education through a GK-12 research program running Math Circles out of San Francisco State University, and later did outreach at the American Institute of Mathematics.',
    'This portfolio holds my work for the Moreland University TEACH-NOW certificate, next to the lessons I teach every week.',
  ],
}

// Four habits that run through every deck, each pointing at a lesson that
// shows it. Source: docs/LESSON-PLAYBOOK.md §1.
export const PRINCIPLES = [
  {
    icon: 'Languages',
    title: 'Plain English first',
    body: 'My students’ arithmetic is fine; the barrier is the English of the question. Each slide carries one idea in short sentences, and every key word comes with its translation.',
    lesson: ['y7-math', 'U02_3'],
  },
  {
    icon: 'CircleHelp',
    title: 'Ask before you tell',
    body: 'The question gets a slide of its own, with no numbers on it, before anything works it out. The gap between the class’s guess and the answer is the lesson.',
    lesson: ['y7-science', 'U01_1'],
  },
  {
    icon: 'Hand',
    title: 'Everyone answers',
    body: 'When the class chooses between two answers, everyone votes at once: left hand for A, right hand for B. Nobody copies a neighbour, and I see the split at a glance.',
    lesson: ['y7-math', 'U02_3'],
  },
  {
    icon: 'NotebookPen',
    title: 'Write it down',
    body: 'Anything students must learn sits in an orange “Write This Down” note, and each lesson ends with a count they can check: seven panels in your notebook today.',
    lesson: ['y7-math', 'U02_3'],
  },
]

// Lessons shown under "From my classroom". Titles and units come from the
// registry, so they never drift from the decks themselves.
export const FEATURED = [
  { course: 'y7-math', slug: 'U02_3', why: 'Everyday words with a maths meaning (“like” is not “thích”), a hands-up vote, and algebra pyramids at three levels of challenge.' },
  { course: 'y7-science', slug: 'U02_5', why: 'Period and group mean something else in everyday English, so the lesson teaches both meanings side by side.' },
  { course: 'y7-math', slug: 'U04_1_4', why: 'Among the first decks taught in English and French. Decimals read aloud digit by digit, and multiplication checked with an estimate.' },
  { course: 'y7-science', slug: 'U03_1', why: 'Weight is a force, measured in newtons; mass is the amount of matter, measured in kilograms. The lesson keeps the two apart.' },
]

// kind → icon, in Artifact.jsx
export const MODULES = [
  {
    n: 1,
    title: 'Program Orientation',
    when: 'September 2026',
    status: 'complete',
    artifacts: [
      { id: 'm1-literacy', activity: 'U1 · A3', kind: 'doc', title: 'Cohort Literacy Guide: Module 1', blurb: 'The definition and elements of literacy, built with my cohort.', page: 'literacy' },
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
      { id: 'm3-representations', activity: 'U1 · A1', kind: 'image', title: 'One standard, five representations', blurb: 'CCSS 7.EE.A.1 shown physically, visually, symbolically, verbally and in context, all from my Collecting Like Terms lesson.', page: 'maths' },
      { id: 'm3-ebp', activity: 'U1 · A2', kind: 'audio', title: 'Three evidence-based practices', blurb: 'Solved problems with errors, comparing strategies, and keeping the cognitive demand high, with examples from my algebra unit.' },
      { id: 'm3-vlog', activity: 'U2 · A2', kind: 'video', title: 'Understanding multilingual learners', blurb: 'A short vlog: scaffolding discussion, using the home language as a resource, and teaching academic vocabulary.' },
      { id: 'm3-literacy', activity: 'U1 · A1', kind: 'doc', title: 'Cohort Literacy Guide: Module 3', blurb: 'Module 3 literacy terms, built with my cohort.', page: 'literacy' },
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
