import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ChevronRight, FileText, Presentation } from 'lucide-react'
import SiteHeader from '../components/SiteHeader.jsx'
import { getCourse } from '../../content/registry.js'
import { CourseIcon } from '../lib/courseIcons.js'

export default function CoursePage() {
  const { courseId } = useParams()
  const course = getCourse(courseId)
  if (!course) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-xs mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" strokeWidth={3} /> All courses
        </Link>

        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white shadow-sm shrink-0" style={{ backgroundColor: course.color }}>
            <CourseIcon name={course.icon} className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
          </span>
          <div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">{course.title}</h1>
            <p className="text-slate-500 dark:text-slate-400 font-bold">{course.subtitle}</p>
          </div>
        </div>

        {course.lessons.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-10 text-center">
            <p className="font-black text-slate-500 dark:text-slate-400 text-lg">Lessons coming soon</p>
            <p className="text-slate-400 text-sm font-medium mt-1">This course is set up and ready for its first lesson.</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {course.lessons.map((lesson) => (
              <li key={lesson.slug} className="rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="flex items-stretch">
                  <Link to={`/lesson/${course.id}/${lesson.slug}`} className="group flex-1 flex items-center gap-4 p-4 sm:p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors min-w-0">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-sm shrink-0" style={{ color: course.color }}>
                      {lesson.unit}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-black tracking-tight truncate">{lesson.title}</h3>
                      {lesson.objective && <p className="text-slate-500 dark:text-slate-400 text-sm font-medium truncate">{lesson.objective}</p>}
                    </div>
                    <span className="hidden sm:flex items-center gap-1 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-[#1cb0f6] transition-colors shrink-0">
                      <Presentation className="w-4 h-4" strokeWidth={2.5} /> Open
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0" strokeWidth={2.5} />
                  </Link>
                  {lesson.plan && (
                    <Link to={`/plan/${course.id}/${lesson.slug}`} title="Teacher lesson plan" className="flex items-center px-4 border-l-2 border-slate-100 dark:border-slate-800 text-slate-400 hover:text-[#8b5cf6] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <FileText className="w-5 h-5" strokeWidth={2.5} />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}
