import { useEffect } from 'react'
import { Routes, Route, Link, NavLink, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Calculator, ChevronRight, CircleCheck, CircleDashed, CircleHelp,
  ExternalLink, FileText, FlaskConical, Hand, Image as ImageIcon, Languages, MapPin,
  MessageSquare, Mic, Moon, NotebookPen, Presentation, Sun, Video, Workflow,
} from 'lucide-react'
import { useDarkMode } from '../lib/useDarkMode.js'
import { CAMBRIDGE } from '../components/layouts/helpers.jsx'
import { getCourse, getLesson } from '../../content/registry.js'
import { PHOTOS, PROFILE, PRINCIPLES, FEATURED, MODULES, artifactsFor } from './data.js'

// The Moreland teaching portfolio. Unlisted: reachable only at #/portfolio,
// never linked from the classroom pages, and marked noindex while open.
// It uses the decks' Cambridge visual language: flat boxes, a solid header
// strip over a tinted body, no gradients or drop shadows.

const PRINCIPLE_ICONS = { Languages, CircleHelp, Hand, NotebookPen }
const KIND = {
  video: { icon: Video, label: 'Video' },
  audio: { icon: Mic, label: 'Audio' },
  image: { icon: ImageIcon, label: 'Visual' },
  presentation: { icon: Presentation, label: 'Presentation' },
  flowchart: { icon: Workflow, label: 'Flowchart' },
  doc: { icon: FileText, label: 'Document' },
  post: { icon: MessageSquare, label: 'Discussion post' },
}
const STATUS = {
  complete: { label: 'Complete', color: CAMBRIDGE.green, tint: CAMBRIDGE.greenTint },
  current: { label: 'Now', color: CAMBRIDGE.teal, tint: CAMBRIDGE.tealTint },
  progress: { label: 'In progress', color: CAMBRIDGE.orange, tint: CAMBRIDGE.orangeTint },
  upcoming: { label: 'Coming up', color: '#64748b', tint: '#f1f5f9' },
}

const page = 'min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors'
const wrap = 'max-w-5xl mx-auto px-4 sm:px-8'
const eyebrow = 'text-xs font-black uppercase tracking-widest'
const h2 = 'text-2xl sm:text-3xl font-black tracking-tight'
const prose = 'text-slate-600 dark:text-slate-300 font-medium leading-relaxed'

// A Cambridge-book box: a solid strip for the heading over a pale body.
function Box({ color, tint, head, children, className = '' }) {
  return (
    <section className={`rounded-2xl overflow-hidden border-2 dark:border-slate-800 ${className}`} style={{ borderColor: color }}>
      <div className="px-4 sm:px-5 py-2.5 text-white font-black tracking-tight flex items-center gap-2" style={{ backgroundColor: color }}>
        {head}
      </div>
      <div className="p-4 sm:p-5 h-full bg-[var(--tint)] dark:bg-slate-900" style={{ '--tint': tint }}>
        {children}
      </div>
    </section>
  )
}

function StatusPill({ status }) {
  const s = STATUS[status]
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-black uppercase tracking-widest bg-white/90 dark:bg-slate-800" style={{ color: s.color }}>
      {s.label}
    </span>
  )
}

function Header() {
  const { isDark, toggle } = useDarkMode()
  const tab = ({ isActive }) =>
    `px-3 py-1.5 rounded-xl text-sm font-black tracking-tight transition-colors whitespace-nowrap ${
      isActive ? 'bg-[#e2f2f6] text-[#00697f] dark:bg-slate-800 dark:text-sky-300' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100'
    }`
  return (
    <header className="sticky top-0 z-20 border-b-2 border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur">
      <div className={`${wrap} flex items-center gap-3 h-16`}>
        <Link to="/portfolio" className="flex items-center gap-2.5 min-w-0">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl text-white font-black text-sm shrink-0" style={{ backgroundColor: CAMBRIDGE.teal }}>SB</span>
          <span className="font-black tracking-tight truncate">Spencer Bowen</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          <NavLink end to="/portfolio" className={tab}>Overview</NavLink>
          <NavLink to="/portfolio/maths-in-action" className={tab}>Maths in Action</NavLink>
          <NavLink to="/portfolio/literacy-guide" className={tab}>Literacy Guide</NavLink>
        </nav>
        <button
          onClick={toggle}
          className="ml-auto md:ml-2 p-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="Toggle dark mode"
        >
          {isDark ? <Sun className="w-5 h-5 text-amber-400" strokeWidth={2.5} /> : <Moon className="w-5 h-5" strokeWidth={2.5} />}
        </button>
      </div>
      <nav className={`${wrap} md:hidden flex gap-1 pb-2 -mt-1`}>
        <NavLink end to="/portfolio" className={tab}>Overview</NavLink>
        <NavLink to="/portfolio/maths-in-action" className={tab}>Maths</NavLink>
        <NavLink to="/portfolio/literacy-guide" className={tab}>Literacy</NavLink>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t-2 border-slate-200 dark:border-slate-800 mt-16">
      <div className={`${wrap} py-8 text-sm text-slate-500 dark:text-slate-400 font-medium flex flex-col sm:flex-row gap-2 sm:justify-between`}>
        <span>{PROFILE.program}</span>
        <span>{PHOTOS.credit}</span>
      </div>
    </footer>
  )
}

function SectionTitle({ kicker, title, color = CAMBRIDGE.teal }) {
  return (
    <div className="mb-5">
      <p className={eyebrow} style={{ color }}>{kicker}</p>
      <h2 className={h2}>{title}</h2>
    </div>
  )
}

function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-[1fr_auto] items-center pt-8 sm:pt-14">
      <div className="min-w-0">
        <p className={eyebrow} style={{ color: CAMBRIDGE.teal }}>Teaching portfolio</p>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mt-2">{PROFILE.name}</h1>
        <p className="text-lg sm:text-xl font-black text-slate-500 dark:text-slate-400 mt-1">
          Everyone calls me {PROFILE.goesBy}.
        </p>
        <ul className="mt-6 space-y-2 font-bold">
          <li className="flex items-start gap-2">
            <Calculator className="w-5 h-5 mt-0.5 shrink-0" style={{ color: CAMBRIDGE.teal }} strokeWidth={2.5} />
            <span>{PROFILE.headline}</span>
          </li>
          <li className="flex items-start gap-2">
            <FlaskConical className="w-5 h-5 mt-0.5 shrink-0" style={{ color: CAMBRIDGE.teal }} strokeWidth={2.5} />
            <span>{PROFILE.role}</span>
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-0.5 shrink-0" style={{ color: CAMBRIDGE.teal }} strokeWidth={2.5} />
            <span>{PROFILE.place}</span>
          </li>
        </ul>
      </div>
      <div className="mx-auto md:mx-0 w-56 sm:w-64 rounded-3xl overflow-hidden border-2" style={{ borderColor: CAMBRIDGE.teal, backgroundColor: CAMBRIDGE.tealTint }}>
        <img src={PHOTOS.portrait.src} alt={PHOTOS.portrait.alt} width="720" height="828" className="block w-full h-auto" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <SectionTitle kicker="About me" title="A maths teacher in a second language" />
        <div className="space-y-4 max-w-prose">
          {PROFILE.bio.map((p) => <p key={p.slice(0, 24)} className={prose}>{p}</p>)}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 self-end">
        {PHOTOS.teaching.map((ph) => (
          <figure key={ph.src} className="min-w-0">
            <img src={ph.src} alt={ph.alt} loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-slate-200 dark:border-slate-800" />
            <figcaption className="mt-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">{ph.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

function LessonLink({ course, slug }) {
  const lesson = getLesson(course, slug)
  if (!lesson) return null
  const subject = course === 'y7-math' ? 'Maths' : 'Science'
  return (
    <Link to={`/lesson/${course}/${slug}`} className="inline-flex items-center gap-1 text-sm font-black hover:underline" style={{ color: CAMBRIDGE.purple }}>
      See it in {subject} {lesson.unit}: {lesson.title} <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
    </Link>
  )
}

function Principles() {
  return (
    <section className="mt-16">
      <SectionTitle kicker="How I teach" title="Four habits in every lesson" color={CAMBRIDGE.purple} />
      <div className="grid gap-4 sm:grid-cols-2">
        {PRINCIPLES.map((p) => {
          const Icon = PRINCIPLE_ICONS[p.icon]
          return (
            <Box key={p.title} color={CAMBRIDGE.purple} tint={CAMBRIDGE.purpleTint} head={<><Icon className="w-5 h-5" strokeWidth={2.5} />{p.title}</>}>
              <p className={`${prose} mb-3`}>{p.body}</p>
              <LessonLink course={p.lesson[0]} slug={p.lesson[1]} />
            </Box>
          )
        })}
      </div>
    </section>
  )
}

function ModuleGrid() {
  return (
    <section className="mt-16">
      <SectionTitle kicker="The program" title="Moreland TEACH-NOW, module by module" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {MODULES.map((m) => {
          const s = STATUS[m.status]
          const open = m.status !== 'upcoming'
          const inner = (
            <>
              <div className="flex items-center justify-between px-4 py-2 text-white" style={{ backgroundColor: s.color }}>
                <span className="font-black tracking-tight">Module {m.n}</span>
                <StatusPill status={m.status} />
              </div>
              <div className="p-4 flex-1 flex flex-col bg-[var(--tint)] dark:bg-slate-900" style={{ '--tint': s.tint }}>
                <h3 className="font-black tracking-tight leading-snug">{m.title}</h3>
                {m.when && <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mt-1">{m.when}</p>}
                {open && (
                  <p className="mt-auto pt-3 text-xs font-black uppercase tracking-widest flex items-center gap-1" style={{ color: s.color }}>
                    {m.artifacts.length} artifact{m.artifacts.length === 1 ? '' : 's'} <ChevronRight className="w-4 h-4" strokeWidth={3} />
                  </p>
                )}
              </div>
            </>
          )
          const cls = 'flex flex-col rounded-2xl overflow-hidden border-2 dark:border-slate-800 min-h-[9.5rem]'
          return open ? (
            <Link key={m.n} to={`/portfolio/module/${m.n}`} className={`${cls} hover:-translate-y-0.5 transition-transform`} style={{ borderColor: s.color }}>
              {inner}
            </Link>
          ) : (
            <div key={m.n} className={`${cls} opacity-70`} style={{ borderColor: s.color }}>{inner}</div>
          )
        })}
      </div>
    </section>
  )
}

function Featured() {
  return (
    <section className="mt-16">
      <SectionTitle kicker="From my classroom" title="Lessons I teach" color={CAMBRIDGE.blue} />
      <p className={`${prose} max-w-prose mb-5`}>
        Every lesson is an interactive deck I build and project in class, with a printable teacher plan. These four show the habits above at work.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {FEATURED.map((f) => {
          const lesson = getLesson(f.course, f.slug)
          const course = getCourse(f.course)
          if (!lesson || !course) return null
          return (
            <li key={`${f.course}/${f.slug}`} className="rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 flex flex-col">
              <p className={eyebrow} style={{ color: course.color }}>{course.title} · {lesson.unit}</p>
              <h3 className="text-lg font-black tracking-tight mt-1">{lesson.title}</h3>
              <p className={`${prose} text-sm mt-2 mb-4`}>{f.why}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                <Link to={`/lesson/${f.course}/${f.slug}`} className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-black text-white" style={{ backgroundColor: CAMBRIDGE.blue }}>
                  Open the deck <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
                {lesson.plan && (
                  <Link to={`/plan/${f.course}/${f.slug}`} className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-black border-2" style={{ borderColor: CAMBRIDGE.blue, color: CAMBRIDGE.blue }}>
                    Teacher plan
                  </Link>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function Shortcuts() {
  return (
    <section className="mt-16 grid gap-4 sm:grid-cols-2">
      <Link to="/portfolio/maths-in-action" className="block hover:-translate-y-0.5 transition-transform">
        <Box color={CAMBRIDGE.orange} tint={CAMBRIDGE.orangeTint} head={<><Calculator className="w-5 h-5" strokeWidth={2.5} />Secondary Mathematics in Action</>}>
          <p className={prose}>My methods work for Secondary Mathematics 7–12, in one place.</p>
        </Box>
      </Link>
      <Link to="/portfolio/literacy-guide" className="block hover:-translate-y-0.5 transition-transform">
        <Box color={CAMBRIDGE.green} tint={CAMBRIDGE.greenTint} head={<><FileText className="w-5 h-5" strokeWidth={2.5} />Literacy Guide</>}>
          <p className={prose}>The guide my cohort builds together, one module at a time.</p>
        </Box>
      </Link>
    </section>
  )
}

function Overview() {
  return (
    <>
      <Hero />
      <About />
      <Principles />
      <ModuleGrid />
      <Featured />
      <Shortcuts />
    </>
  )
}

function Artifact({ a, showModule = false }) {
  const kind = KIND[a.kind]
  const Icon = kind.icon
  const ready = Boolean(a.url)
  return (
    <li className="rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 flex gap-4">
      <span className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0" style={{ backgroundColor: CAMBRIDGE.tealTint, color: CAMBRIDGE.tealDark }}>
        <Icon className="w-5 h-5" strokeWidth={2.5} />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`${eyebrow} text-slate-400 dark:text-slate-500`}>
          {showModule ? `Module ${a.module} · ` : ''}{a.activity} · {kind.label}
        </p>
        <h3 className="font-black tracking-tight text-lg leading-snug mt-0.5">{a.title}</h3>
        <p className={`${prose} text-sm mt-1`}>{a.blurb}</p>
        <div className="mt-3">
          {ready ? (
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-black text-white" style={{ backgroundColor: CAMBRIDGE.teal }}>
              Open <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-black text-slate-400 dark:text-slate-500">
              <CircleDashed className="w-4 h-4" strokeWidth={2.5} /> In progress
            </span>
          )}
        </div>
      </div>
    </li>
  )
}

function BackLink() {
  return (
    <Link to="/portfolio" className={`${eyebrow} inline-flex items-center gap-2 text-slate-400 hover:text-[#0087a8] transition-colors mt-8`}>
      <ArrowLeft className="w-4 h-4" strokeWidth={3} /> Portfolio
    </Link>
  )
}

function ModulePage() {
  const { n } = useParams()
  const index = MODULES.findIndex((m) => String(m.n) === n)
  const m = MODULES[index]
  if (!m || m.status === 'upcoming') return <Navigate to="/portfolio" replace />
  const s = STATUS[m.status]
  const prev = MODULES[index - 1]
  const next = MODULES[index + 1]
  return (
    <>
      <BackLink />
      <div className="mt-6 mb-8">
        <div className="flex items-center gap-3">
          <p className={eyebrow} style={{ color: s.color }}>Module {m.n}</p>
          {m.status === 'complete' && <CircleCheck className="w-4 h-4" style={{ color: s.color }} strokeWidth={3} />}
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">{m.title}</h1>
        {m.when && <p className="font-bold text-slate-500 dark:text-slate-400 mt-2">{m.when}</p>}
      </div>
      <ul className="space-y-3">
        {m.artifacts.map((a) => <Artifact key={a.id} a={a} />)}
      </ul>
      <nav className="mt-10 flex justify-between gap-3 text-sm font-black">
        {prev ? (
          <Link to={`/portfolio/module/${prev.n}`} className="inline-flex items-center gap-1 text-slate-500 hover:text-[#0087a8]">
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} /> Module {prev.n}
          </Link>
        ) : <span />}
        {next && next.status !== 'upcoming' && (
          <Link to={`/portfolio/module/${next.n}`} className="inline-flex items-center gap-1 text-slate-500 hover:text-[#0087a8]">
            Module {next.n} <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </Link>
        )}
      </nav>
    </>
  )
}

function CollectionPage({ kicker, color, title, intro, items }) {
  return (
    <>
      <BackLink />
      <div className="mt-6 mb-8">
        <p className={eyebrow} style={{ color }}>{kicker}</p>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-1">{title}</h1>
        <p className={`${prose} max-w-prose mt-3`}>{intro}</p>
      </div>
      <ul className="space-y-3">
        {items.map((a) => <Artifact key={a.id} a={a} showModule />)}
      </ul>
    </>
  )
}

// Keep the page out of search results and give it its own tab title while
// it is open; both are restored when the reader goes back to a lesson.
function useUnlisted() {
  useEffect(() => {
    const previousTitle = document.title
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    document.title = 'Spencer Bowen · Teaching Portfolio'
    return () => {
      meta.remove()
      document.title = previousTitle
    }
  }, [])
}

export default function Portfolio() {
  useUnlisted()
  return (
    <div className={page}>
      <Header />
      <main className={wrap}>
        <Routes>
          <Route index element={<Overview />} />
          <Route path="module/:n" element={<ModulePage />} />
          <Route
            path="maths-in-action"
            element={
              <CollectionPage
                kicker="Secondary Mathematics 7–12"
                color={CAMBRIDGE.orange}
                title="Mathematics in Action"
                intro="My methods work for my certification area. Each piece starts from a lesson I have taught, so the maths, the mistakes and the language support are real."
                items={artifactsFor('maths')}
              />
            }
          />
          <Route
            path="literacy-guide"
            element={
              <CollectionPage
                kicker="Built with my cohort"
                color={CAMBRIDGE.green}
                title="Literacy Guide"
                intro="Each module, my cohort adds the literacy terms we study to one shared guide. These are the sections I contributed to."
                items={artifactsFor('literacy')}
              />
            }
          />
          <Route path="*" element={<Navigate to="/portfolio" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
