import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Play, Printer } from 'lucide-react'
import PageShell from '../components/PageShell.jsx'
import { getCatalog } from '../../content/registry.js'
import { HOMEWORK } from '../../content/homework.js'
import { CourseIcon } from '../lib/courseIcons.js'
import { homeworkSets, latestLesson, lessonHref, plural } from '../lib/listing.js'

// The Homework button uses the packets' own orange, and is rendered as one more
// card in the course grid — but it links to /homework, not a lesson course.
const HW_COLOR = '#c25e12'

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1cb0f6]'

// The strip along the foot of a card that opens the newest thing in it
// straight away: today's deck is one click from the home page. `href` is a PDF
// (opens in a new tab); `to` is a route.
function LatestStrip({ latest }) {
  const className = `group/latest relative flex items-center gap-3 border-t border-slate-100 dark:border-slate-800 px-5 sm:px-6 py-3.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors rounded-b-2xl ${focusRing}`
  const Icon = latest.href ? ExternalLink : latest.app ? Play : ArrowRight
  const body = (
    <>
      <span className="min-w-0 flex-1">
        <span className="accent-text block text-[11px] font-bold uppercase tracking-[0.12em]">Latest · {latest.label}</span>
        <span className="mt-0.5 block truncate font-medium text-slate-700 dark:text-slate-200">{latest.title}</span>
      </span>
      <Icon className="w-4 h-4 text-slate-400 group-hover/latest:text-slate-700 dark:group-hover/latest:text-slate-200 group-hover/latest:translate-x-0.5 transition shrink-0" strokeWidth={2.5} />
    </>
  )
  return latest.href ? (
    <a href={latest.href} target="_blank" rel="noopener noreferrer" className={className} title={`Open ${latest.label} (PDF, new tab)`}>
      {body}
    </a>
  ) : (
    <Link to={latest.to} className={className} title={`Open ${latest.label} ${latest.title}`}>
      {body}
    </Link>
  )
}

function CourseCard({ to, color, icon, title, subtitle, countLabel, latest }) {
  return (
    <article
      className="group/card relative flex flex-col rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/90 dark:ring-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-900/[0.07] dark:hover:shadow-black/40 hover:ring-slate-300 dark:hover:ring-slate-700 hover:-translate-y-0.5 transition duration-200"
      style={{ '--accent': color }}
    >
      <div aria-hidden className="accent-glow pointer-events-none absolute inset-0 rounded-2xl" />
      {/* On a phone the icon sits beside the title, to keep six cards short;
          from `sm` up it sits above it, with the count in the corner. */}
      <Link to={to} className={`relative flex-1 flex items-center gap-4 sm:flex-col sm:items-stretch sm:gap-0 p-5 sm:p-6 rounded-t-2xl ${focusRing}`}>
        <div className="flex items-start justify-between gap-3 shrink-0">
          <span className="accent-bg flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-md shadow-slate-900/10">{icon}</span>
          <span className="hidden sm:inline mt-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 px-2.5 py-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
            {countLabel}
          </span>
        </div>
        <div className="min-w-0 sm:mt-5">
          <h2 className="flex items-center gap-1.5 text-lg font-bold tracking-tight leading-snug text-slate-900 dark:text-white">
            {title}
            <ArrowRight className="hidden sm:block w-4 h-4 opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition text-slate-400" strokeWidth={2.5} />
          </h2>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
            <span className="sm:hidden"> · {countLabel}</span>
          </p>
        </div>
      </Link>
      {latest ? (
        <LatestStrip latest={latest} />
      ) : (
        <p className="relative border-t border-slate-100 dark:border-slate-800 px-5 sm:px-6 py-3.5 text-sm text-slate-400 dark:text-slate-500">Coming soon</p>
      )}
    </article>
  )
}

export default function Home() {
  const catalog = getCatalog()
  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  const packet = homeworkSets(HOMEWORK)[0]?.[0]

  return (
    <PageShell accent="#1cb0f6">
      <section className="pt-2 sm:pt-6 pb-8 sm:pb-12">
        <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{today}</p>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">Classroom Lessons</h1>
        <p className="mt-3 sm:mt-4 max-w-xl text-base sm:text-lg text-slate-500 dark:text-slate-400">
          Lesson decks for the projector, teacher plans and printable homework.
        </p>
      </section>

      <h2 className="sr-only">Courses</h2>
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {catalog.map((course) => {
          const lesson = latestLesson(course)
          return (
            <CourseCard
              key={course.id}
              to={`/course/${course.id}`}
              color={course.color}
              icon={<CourseIcon name={course.icon} className="w-6 h-6" strokeWidth={2.25} />}
              title={course.title}
              subtitle={course.subtitle}
              countLabel={plural(course.lessons.length, 'lesson')}
              latest={lesson && { label: lesson.unit, title: lesson.title, to: lessonHref(course.id, lesson), app: !!lesson.href }}
            />
          )
        })}
        <CourseCard
          to="/homework"
          color={HW_COLOR}
          icon={<Printer className="w-6 h-6" strokeWidth={2.25} />}
          title="Homework"
          subtitle="Printable packets"
          countLabel={plural(HOMEWORK.length, 'packet')}
          latest={packet && { label: packet.label, title: packet.title, href: packet.pdf }}
        />
      </div>
    </PageShell>
  )
}
