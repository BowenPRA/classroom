import { Link } from 'react-router-dom'
import { ChevronRight, Printer } from 'lucide-react'
import SiteHeader from '../components/SiteHeader.jsx'
import { getCatalog } from '../../content/registry.js'
import { HOMEWORK } from '../../content/homework.js'
import { CourseIcon } from '../lib/courseIcons.js'

// The Homework button uses the packets' own orange, and is rendered as one more
// card in the course grid — but it links to /homework, not a lesson course.
const HW_COLOR = '#c25e12'

export default function Home() {
  const catalog = getCatalog()
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">Classroom Lessons</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-base sm:text-lg max-w-2xl">
            Projected, interactive lesson decks. Pick a course to browse its lessons.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {catalog.map((course) => {
            const count = course.lessons.length
            return (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span
                  className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white shadow-sm shrink-0"
                  style={{ backgroundColor: course.color }}
                >
                  <CourseIcon name={course.icon} className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-black text-lg sm:text-xl tracking-tight truncate">{course.title}</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-sm truncate">{course.subtitle}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-widest" style={{ color: course.color }}>
                    {count === 0 ? 'Coming soon' : `${count} lesson${count === 1 ? '' : 's'}`}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 transition-colors shrink-0" strokeWidth={2.5} />
              </Link>
            )
          })}

          <Link
            to="/homework"
            className="group relative flex items-center gap-4 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <span
              className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white shadow-sm shrink-0"
              style={{ backgroundColor: HW_COLOR }}
            >
              <Printer className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-black text-lg sm:text-xl tracking-tight truncate">Homework</h2>
              <p className="text-slate-500 dark:text-slate-400 font-bold text-sm truncate">Printable packets</p>
              <p className="mt-1 text-xs font-black uppercase tracking-widest" style={{ color: HW_COLOR }}>
                {`${HOMEWORK.length} packet${HOMEWORK.length === 1 ? '' : 's'}`}
              </p>
            </div>
            <ChevronRight className="w-6 h-6 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 transition-colors shrink-0" strokeWidth={2.5} />
          </Link>
        </div>
      </main>
    </div>
  )
}
