import { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, NavLink, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, Calculator, ChevronLeft, ChevronRight, CircleCheck, CircleDashed, CircleHelp,
  ExternalLink, FileText, FlaskConical, Hand, Image as ImageIcon, Languages, MapPin,
  MessageSquare, Mic, Moon, NotebookPen, Play, Presentation, Sun, Video, Workflow,
} from 'lucide-react'
import { useDarkMode } from '../lib/useDarkMode.js'
import { CAMBRIDGE } from '../components/layouts/helpers.jsx'
import { getCatalog, getCourse, getLesson } from '../../content/registry.js'
import { PHOTOS, PROFILE, PRINCIPLES, FEATURED, RECENT, MODULES, artifactById, artifactsFor } from './data.js'

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
          <NavLink to="/portfolio/maths-in-action" className={tab}>Math in Action</NavLink>
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
        <NavLink to="/portfolio/maths-in-action" className={tab}>Math</NavLink>
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
      <figure className="w-full md:w-[26rem] lg:w-[30rem]">
        <img
          src={PHOTOS.portrait.src}
          alt={PHOTOS.portrait.alt}
          width="1600"
          height="1200"
          className="block w-full aspect-[4/3] object-cover rounded-3xl border-2"
          style={{ borderColor: CAMBRIDGE.teal }}
        />
        <figcaption className="mt-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">{PHOTOS.portrait.caption}</figcaption>
      </figure>
    </section>
  )
}

function About() {
  return (
    <section className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <SectionTitle kicker="About me" title="Every class is English class" />
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

// The four habits, kept small at the foot of the overview.
function HowITeach() {
  return (
    <section className="mt-16 pt-8 border-t-2 border-slate-200 dark:border-slate-800">
      <p className={`${eyebrow} mb-3`} style={{ color: CAMBRIDGE.purple }}>How I teach: four things I do every lesson</p>
      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map((p) => {
          const Icon = PRINCIPLE_ICONS[p.icon]
          return (
            <li key={p.title} className="flex items-start gap-2 min-w-0">
              <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: CAMBRIDGE.purple }} strokeWidth={2.5} />
              <div className="min-w-0">
                <p className="text-sm font-black tracking-tight">{p.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-snug mt-0.5">{p.body}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

// The newest finished artifacts, each with its picture, linking to its module.
function LatestWork() {
  const items = RECENT.map(artifactById).filter((a) => a?.url)
  if (!items.length) return null
  return (
    <section className="mt-16">
      <SectionTitle kicker="Latest work" title="What I’ve made recently" color={CAMBRIDGE.orange} />
      <ul className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {items.map((a) => {
          const picture = a.poster ?? (a.kind === 'image' ? a.url : null)
          const Icon = KIND[a.kind].icon
          return (
            <li key={a.id} className="min-w-0">
              <Link to={`/portfolio/module/${a.module}`} className="group block h-full rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:-translate-y-0.5 transition-transform">
                <div className="relative aspect-video bg-slate-100 dark:bg-slate-800">
                  {picture && <img src={picture} alt="" loading="lazy" className="w-full h-full object-cover object-top" />}
                  {a.kind === 'video' && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center justify-center w-11 h-11 rounded-full bg-black/60 text-white">
                        <Play className="w-5 h-5 ml-0.5" strokeWidth={2.5} fill="currentColor" />
                      </span>
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className={`${eyebrow} !text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1`}>
                    <Icon className="w-3.5 h-3.5" strokeWidth={2.5} /> Module {a.module} · {KIND[a.kind].label}
                  </p>
                  <h3 className="font-black tracking-tight leading-snug mt-1 text-sm sm:text-base group-hover:underline">{a.title}</h3>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
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

// A sideways scroller of decks: a few highlights with a note on each, or a
// whole course in teaching order.
function LessonScroller() {
  const [tab, setTab] = useState('highlights')
  const rail = useRef(null)
  const catalog = getCatalog()
  const highlights = FEATURED.map((f) => {
    const lesson = getLesson(f.course, f.slug)
    return lesson && { ...lesson, note: f.why }
  }).filter(Boolean)
  const tabs = [
    { id: 'highlights', label: 'Highlights', lessons: highlights },
    ...['y7-math', 'y7-science'].map((id) => ({
      id,
      label: id === 'y7-math' ? 'Math' : 'Science',
      lessons: catalog.find((c) => c.id === id)?.lessons ?? [],
    })),
  ]
  const lessons = tabs.find((t) => t.id === tab).lessons
  const total = tabs.slice(1).reduce((n, t) => n + t.lessons.length, 0)

  useEffect(() => { rail.current?.scrollTo({ left: 0 }) }, [tab])
  const nudge = (dir) => rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.8, behavior: 'smooth' })

  const pill = (active) =>
    `px-3 py-1.5 rounded-xl text-sm font-black tracking-tight border-2 transition-colors ${
      active ? 'text-white border-transparent' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
    }`
  const arrow = 'p-2 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-slate-800 dark:hover:text-slate-100'

  return (
    <section className="mt-16">
      <SectionTitle kicker="From my classroom" title="Lessons I teach" color={CAMBRIDGE.blue} />
      <p className={`${prose} max-w-prose mb-5`}>
        {total} Year 7 decks I built and teach by projector, each with a Vietnamese or French switch.
      </p>
      <div className="flex items-center gap-2 mb-4">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} className={pill(t.id === tab)} style={t.id === tab ? { backgroundColor: CAMBRIDGE.blue } : undefined}>
            {t.label}
          </button>
        ))}
        <span className="ml-auto hidden sm:flex gap-2">
          <button onClick={() => nudge(-1)} className={arrow} title="Scroll left"><ChevronLeft className="w-4 h-4" strokeWidth={3} /></button>
          <button onClick={() => nudge(1)} className={arrow} title="Scroll right"><ChevronRight className="w-4 h-4" strokeWidth={3} /></button>
        </span>
      </div>
      <ul ref={rail} className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 custom-scrollbar">
        {lessons.map((l) => {
          const course = getCourse(l.course)
          const langs = ['EN', l.vietnamese && 'VN', l.french && 'FR'].filter(Boolean).join(' · ')
          return (
            <li key={`${l.course}/${l.slug}`} className="snap-start shrink-0 w-64 sm:w-72 rounded-2xl overflow-hidden border-2 bg-white dark:bg-slate-900 flex flex-col" style={{ borderColor: course.color }}>
              <div className="px-4 py-2 text-white flex items-center justify-between gap-2" style={{ backgroundColor: course.color }}>
                <span className="font-black tracking-tight text-sm truncate">{l.course === 'y7-math' ? 'Math' : 'Science'} {l.unit}</span>
                <span className="text-[11px] font-black uppercase tracking-widest opacity-90 shrink-0">{langs}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-black tracking-tight leading-snug">{l.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-snug mt-1.5 mb-4 line-clamp-3">{l.note ?? (l.objective || l.subtitle)}</p>
                <div className="mt-auto flex items-center gap-3 text-sm font-black">
                  <Link to={`/lesson/${l.course}/${l.slug}`} className="inline-flex items-center gap-1 hover:underline" style={{ color: CAMBRIDGE.blue }}>
                    Open the deck <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </Link>
                  {l.plan && (
                    <Link to={`/plan/${l.course}/${l.slug}`} className="text-slate-500 dark:text-slate-400 hover:underline">Plan</Link>
                  )}
                  <span className="ml-auto text-xs text-slate-400 dark:text-slate-500">{l.slides.length} slide{l.slides.length === 1 ? '' : 's'}</span>
                </div>
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
          <p className={prose}>My math methods work.</p>
        </Box>
      </Link>
      <Link to="/portfolio/literacy-guide" className="block hover:-translate-y-0.5 transition-transform">
        <Box color={CAMBRIDGE.green} tint={CAMBRIDGE.greenTint} head={<><FileText className="w-5 h-5" strokeWidth={2.5} />Literacy Guide</>}>
          <p className={prose}>My cohort’s shared literacy guide.</p>
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
      <LatestWork />
      <ModuleGrid />
      <LessonScroller />
      <Shortcuts />
      <HowITeach />
    </>
  )
}

function Artifact({ a, showModule = false }) {
  const kind = KIND[a.kind]
  const Icon = kind.icon
  const ready = Boolean(a.url)
  // A video served from this site plays in place; a Drive or YouTube link stays a link.
  const playable = ready && a.kind === 'video' && /\.(mp4|webm)$/i.test(a.url)
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
        {ready && a.kind === 'image' && (
          <a href={a.url} target="_blank" rel="noopener noreferrer" className="block mt-3">
            <img src={a.url} alt={a.alt ?? a.title} loading="lazy" className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-800" />
          </a>
        )}
        {playable && (
          <video
            src={a.url}
            poster={a.poster}
            controls
            playsInline
            preload="none"
            className="block w-full aspect-video mt-3 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-black"
          >
            <a href={a.url}>Download the video</a>
          </video>
        )}
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
                title="Secondary Math in Action"
                intro="Math methods work. Every piece comes from a lesson I’ve taught."
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
                intro="Each module, my cohort adds terms to one shared guide. These are my parts."
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
