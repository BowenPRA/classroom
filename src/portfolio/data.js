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
import m2Modeling from './media/m2-modeling.png'
import m2Writing from './media/m2-writing.png'
import m2LiteracyPres from './media/m2-literacy-presentation.pdf?url'
import m2Flowchart from './media/m2-flowchart.pdf?url'
import m2Whiteboard from './media/m2u3a3-whiteboard.mp4'
import m2WhiteboardPoster from './media/m2u3a3-whiteboard-poster.jpg'
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
    alt: 'Mr. Bowen giving a thumbs-up beside the winner of the guess-how-many math challenge at March Mathness',
    caption: 'March Mathness: the guess-how-many winner',
  },
  teaching: [
    {
      src: cutShapes,
      alt: 'Mr. Bowen working through a cut-and-fold shapes activity with a Primary math group',
      caption: 'Cut-and-fold shapes with a Primary math group',
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
    'I teach math and science at Palm River Academy in Hội An, and I’m also the Upper Secondary Coordinator. Our students are here to learn English first, so I teach the words as much as the math.',
    'I started out as an adjunct professor. After that I ran Math Circles through a GK-12 program at San Francisco State and did outreach at the American Institute of Mathematics.',
  ],
}

// Four habits that run through every deck, each pointing at a lesson that
// shows it. Source: docs/LESSON-PLAYBOOK.md §1.
export const PRINCIPLES = [
  {
    icon: 'Languages',
    title: 'Plain English first',
    body: 'One idea per slide, and every key word comes with a translation.',
    lesson: ['y7-math', 'U02_3'],
  },
  {
    icon: 'CircleHelp',
    title: 'Ask before you tell',
    body: 'The question goes up on its own, and the class guesses before we work it out.',
    lesson: ['y7-science', 'U01_1'],
  },
  {
    icon: 'Hand',
    title: 'Everyone answers',
    body: 'When there are two answers, everyone votes at once with their hands.',
    lesson: ['y7-math', 'U02_3'],
  },
  {
    icon: 'NotebookPen',
    title: 'Write it down',
    body: 'Anything they need to learn goes in a note they copy into their notebooks.',
    lesson: ['y7-math', 'U02_3'],
  },
]

// Lessons shown under "From my classroom". Titles and units come from the
// registry, so they never drift from the decks themselves.
export const FEATURED = [
  { course: 'y7-math', slug: 'U02_3', why: 'In math, “like” means the same kind, so we go over both meanings.' },
  { course: 'y7-science', slug: 'U02_5', why: 'Period and group mean something else in everyday English, so we learn both.' },
  { course: 'y7-math', slug: 'U04_1_4', why: 'One of my first decks in English and French.' },
  { course: 'y7-science', slug: 'U03_1', why: 'Everyday English mixes up weight and mass. This lesson keeps them apart.' },
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
      { id: 'm2-modelling', activity: 'U1 · A1', kind: 'image', title: 'Modeling vs models in math', blurb: 'A one-page visual on the difference between the math modeling process and models in math.', page: 'maths', url: m2Modeling, alt: 'Poster: on the left, a model in math, shown as a box model for "twice as many" and as layers of centimeter cubes in a tank; on the right, the six stages of the modeling process worked through for "How far away is the storm?" with d = t ÷ 3; below, a table comparing the two.' },
      { id: 'm2-literacy-pres', activity: 'U2 · A2', kind: 'presentation', title: 'Promoting literacy in math', blurb: 'Why literacy matters in every subject, the signs of a struggling reader in Year 7 math, and a plan of action for PRA.', url: m2LiteracyPres },
      { id: 'm2-writing', activity: 'U2 · A3', kind: 'image', title: 'From letters to essays', blurb: 'An infographic on how writing develops, with interventions for my grade and subject.', url: m2Writing, alt: 'Infographic: six stages of writing development, from marks to letters through letter formation, letters and sounds, spelling by word parts and sentences to whole texts and essays, each beside what it looks like in my Grade 7 math room; then photos of two finished student posters, on integers and on HCF and LCM; below, signs a student is struggling and one more strategy to add.' },
      { id: 'm2-flowchart', activity: 'U3 · A1', kind: 'flowchart', title: 'Helping a struggling learner', blurb: 'The process I follow to identify and support a struggling student, including how I tell a language need from a learning disability, and when I bring in families.', url: m2Flowchart },
      { id: 'm2-whiteboard', activity: 'U3 · A3', kind: 'video', title: 'The freshman\'s dream, on the whiteboard', blurb: 'Two algebra problems worked aloud on a whiteboard: (2x − 3)² and √(x + 7) = x + 1. The mistake every one of my A level students has made, (a + b)² = a² + b², and how I help them out of it: write the brackets out, check with a number, and check every answer.', page: 'maths', url: m2Whiteboard, poster: m2WhiteboardPoster },
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
      { id: 'm3-ebp', activity: 'U1 · A2', kind: 'video', title: 'Three evidence-based practices', blurb: 'Solved problems with errors, comparing strategies, and keeping the cognitive demand high, with examples from my algebra unit.', page: 'maths', url: m3Ebp, poster: m3EbpPoster },
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
