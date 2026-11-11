import { Link } from 'react-router-dom'
import { CalendarDays, ChevronRight, ExternalLink, Play, Printer } from 'lucide-react'
import PageShell from '../components/PageShell.jsx'
import { getCatalog } from '../../content/registry.js'
import { HOMEWORK } from '../../content/homework.js'
import { CourseIcon, Doodles } from '../lib/courseIcons.js'
import { homeworkSets, latestLesson, lessonHref, plural } from '../lib/listing.js'
import { mrBowenSvg } from '../lib/mrBowen.js'

// The Homework button uses the packets' own orange, and is rendered as one more
// card in the course grid — but it links to /homework, not a lesson course.
const HW_COLOR = '#c25e12'

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6]'

// Mr Bowen (src/lib/mrBowen.js) waving: his left hand, on the screen's right,
// raised, with two motion lines beside it. His soles sit on the viewBox's
// bottom edge, so he stands on the bottom of the welcome banner.
function WavingMrBowen({ className }) {
  return (
    <svg viewBox="-80 -48 205 316" className={className} aria-hidden>
      <path d="M 95 2 Q 104 14 97 29 M 107 -9 Q 120 12 109 37" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" opacity="0.9" />
      <g dangerouslySetInnerHTML={{ __html: mrBowenSvg({ handRight: [70, 22] }) }} />
    </svg>
  )
}

// The button along the foot of a card that opens the newest thing in it, so
// today's deck is one click from the home page. `href` is a PDF (new tab);
// `to` is a route.
function NewestButton({ newest }) {
  const className = `group/newest accent-tint hover:accent-tint-strong dark:hover:accent-tint-stronger flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors ${focusRing}`
  const body = (
    <>
      <span className="accent-fill accent-edge flex items-center justify-center w-9 h-9 rounded-xl border-b-[3px] shrink-0 group-hover/newest:scale-110 transition-transform">
        {newest.href ? <ExternalLink className="w-4 h-4" strokeWidth={2.75} /> : <Play className="w-4 h-4 fill-current" strokeWidth={2.5} />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="accent-text block text-[11px] font-extrabold uppercase tracking-[0.1em]">Newest · {newest.label}</span>
        <span className="mt-0.5 block truncate text-sm font-bold text-slate-800 dark:text-slate-100">{newest.title}</span>
      </span>
      <ChevronRight className="accent-text w-4 h-4 shrink-0 group-hover/newest:translate-x-0.5 transition-transform" strokeWidth={3} />
    </>
  )
  return newest.href ? (
    <a href={newest.href} target="_blank" rel="noopener noreferrer" className={className} title={`Open ${newest.label} (PDF, new tab)`}>
      {body}
    </a>
  ) : (
    <Link to={newest.to} className={className} title={`Open ${newest.label} ${newest.title}`}>
      {body}
    </Link>
  )
}

// A course: its colour banner and subject symbols, the icon on a white tile
// that tips when the card is hovered, and the newest-lesson button. Cards rise
// into place one after another when the page opens.
function CourseCard({ index, to, color, doodles, icon, title, subtitle, countLabel, newest }) {
  return (
    <article
      className="group/card relative flex flex-col rounded-3xl bg-white dark:bg-slate-900 border-2 border-b-[6px] border-slate-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/[0.08] dark:hover:shadow-black/40 transition-[transform,box-shadow] duration-200 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-500 fill-mode-backwards"
      style={{ '--accent': color, animationDelay: `${index * 70}ms` }}
    >
      <Link to={to} className={`relative block rounded-t-[1.35rem] ${focusRing}`}>
        <div className="accent-banner-bright relative h-20 sm:h-24 rounded-t-[1.35rem] overflow-hidden">
          <Doodles name={doodles} />
          <span className="absolute top-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-extrabold text-slate-700 shadow-sm">{countLabel}</span>
        </div>
        <span className="accent-text absolute left-5 top-11 sm:top-[3.75rem] flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border-2 border-b-4 border-slate-200 dark:border-slate-700 shadow-md group-hover/card:-rotate-6 group-hover/card:scale-110 transition-transform duration-300">
          {icon}
        </span>
        <div className="px-5 pt-11 pb-4">
          <h2 className="text-lg font-extrabold tracking-tight leading-snug text-slate-900 dark:text-white">{title}</h2>
          <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
      </Link>
      <div className="mt-auto px-4 pb-4 sm:px-5 sm:pb-5">
        {newest ? (
          <NewestButton newest={newest} />
        ) : (
          <p className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 px-3 py-3 text-center text-sm font-bold text-slate-400">Coming soon</p>
        )}
      </div>
    </article>
  )
}

export default function Home() {
  const catalog = getCatalog()
  const now = new Date()
  const today = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  const hour = now.getHours()
  const greeting = hour < 12 ? 'Good morning!' : hour < 17 ? 'Good afternoon!' : 'Good evening!'
  const packet = homeworkSets(HOMEWORK)[0]?.[0]

  return (
    <PageShell>
      {/* The welcome: a greeting for the time of day, and Mr Bowen waving from
          the right (from `sm` up — a phone has no room beside the words). */}
      <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 dark:from-indigo-700 dark:via-blue-700 dark:to-sky-600 text-white border-b-[6px] border-indigo-900/40 shadow-xl shadow-blue-900/15">
        <Doodles name="Hello" scale={1.7} className="text-white/15" />
        <div className="relative flex items-end justify-between gap-4">
          <div className="min-w-0 px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-bold backdrop-blur-sm">
              <CalendarDays className="w-4 h-4" strokeWidth={2.5} />
              {today}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight [text-shadow:0_2px_12px_rgb(30_27_75/0.25)]">{greeting}</h1>
            <p className="mt-3 max-w-md text-lg sm:text-xl font-semibold text-white/90">Pick your class and open today’s lesson.</p>
          </div>
          <div className="relative hidden sm:block shrink-0 self-end pr-6 lg:pr-14 pt-12">
            <div className="pop-in absolute -left-16 lg:-left-24 top-2 -rotate-3 rounded-2xl bg-white px-4 py-2 text-base lg:text-lg font-extrabold text-slate-800 shadow-lg whitespace-nowrap">
              {/* A straight apostrophe: the curly one reads as an accent in
                  this weight. */}
              {"Let's learn!"}
              <span aria-hidden className="absolute -bottom-1.5 right-5 w-4 h-4 rotate-45 rounded-sm bg-white" />
            </div>
            <WavingMrBowen className="bob block h-48 lg:h-60 w-auto" />
          </div>
        </div>
      </section>

      <h2 className="mt-10 sm:mt-14 mb-4 sm:mb-5 px-1 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">Courses</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.map((course, i) => {
          const lesson = latestLesson(course)
          return (
            <CourseCard
              key={course.id}
              index={i}
              to={`/course/${course.id}`}
              color={course.color}
              doodles={course.icon}
              icon={<CourseIcon name={course.icon} className="w-7 h-7" strokeWidth={2.25} />}
              title={course.title}
              subtitle={course.subtitle}
              countLabel={plural(course.lessons.length, 'lesson')}
              newest={lesson && { label: lesson.unit, title: lesson.title, to: lessonHref(course.id, lesson) }}
            />
          )
        })}
        <CourseCard
          index={catalog.length}
          to="/homework"
          color={HW_COLOR}
          doodles="Printer"
          icon={<Printer className="w-7 h-7" strokeWidth={2.25} />}
          title="Homework"
          subtitle="Printable packets"
          countLabel={plural(HOMEWORK.length, 'packet')}
          newest={packet && { label: packet.label, title: packet.title, href: packet.pdf }}
        />
      </div>
    </PageShell>
  )
}
