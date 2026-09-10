import { Link } from 'react-router-dom'
import { ChevronRight, Printer, History } from 'lucide-react'
import SiteHeader from '../components/SiteHeader.jsx'
import { getCatalog, getLesson } from '../../content/registry.js'
import { HOMEWORK } from '../../content/homework.js'
import { CourseIcon } from '../lib/courseIcons.js'
import { loadRecent } from '../lib/recentLessons.js'

// The Homework button uses the packets' own orange, and is rendered as one more
// card in the course grid — but it links to /homework, not a lesson course.
const HW_COLOR = '#c25e12'

const cardClass =
  'group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 active:translate-y-0 transition-all'

function CourseCard({ to, color, icon, title, subtitle, countLabel }) {
  return (
    <Link to={to} className={cardClass}>
      <span
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl text-white shadow-sm shrink-0"
        style={{ backgroundColor: color }}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <h2 className="font-black text-base sm:text-lg tracking-tight leading-tight">{title}</h2>
        <p className="text-slate-500 dark:text-slate-400 font-bold text-xs sm:text-sm truncate">{subtitle}</p>
        <p className="mt-1 text-[11px] font-black uppercase tracking-widest" style={{ color }}>{countLabel}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 transition-colors shrink-0" strokeWidth={2.5} />
    </Link>
  )
}

export default function Home() {
  const catalog = getCatalog()
  // Only lessons that still exist; a deleted or renamed lesson drops out.
  const recent = loadRecent().filter((r) => getLesson(r.course, r.slug))

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-2">Classroom Lessons</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl">
            Projected, interactive lesson decks. Pick a course to browse its lessons.
          </p>
        </div>

        {recent.length > 0 && (
          <section className="mb-8 sm:mb-10">
            <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              <History className="w-4 h-4" strokeWidth={3} /> Recently opened
            </h2>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {recent.map((r) => (
                <Link
                  key={`${r.course}/${r.slug}`}
                  to={`/lesson/${r.course}/${r.slug}`}
                  className="group flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all min-w-0"
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-xl text-white font-black text-sm shrink-0"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.unit}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-black tracking-tight text-sm leading-tight line-clamp-2">{r.title}</p>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 truncate">{r.courseTitle}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 shrink-0 hidden sm:block" strokeWidth={2.5} />
                </Link>
              ))}
            </div>
          </section>
        )}

        <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">Courses</h2>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
          {catalog.map((course) => {
            const count = course.lessons.length
            return (
              <CourseCard
                key={course.id}
                to={`/course/${course.id}`}
                color={course.color}
                icon={<CourseIcon name={course.icon} className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />}
                title={course.title}
                subtitle={course.subtitle}
                countLabel={count === 0 ? 'Coming soon' : `${count} lesson${count === 1 ? '' : 's'}`}
              />
            )
          })}
          <CourseCard
            to="/homework"
            color={HW_COLOR}
            icon={<Printer className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />}
            title="Homework"
            subtitle="Printable packets"
            countLabel={`${HOMEWORK.length} packet${HOMEWORK.length === 1 ? '' : 's'}`}
          />
        </div>
      </main>
    </div>
  )
}
