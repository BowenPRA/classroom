import { Link, useParams, Navigate } from 'react-router-dom'
import { ChevronRight, FileText, Play, Rocket } from 'lucide-react'
import PageShell, { PageTitle } from '../components/PageShell.jsx'
import { getCourse } from '../../content/registry.js'
import { CourseIcon } from '../lib/courseIcons.js'
import { dashboardUnitUrl } from '../lib/dashboardLink.js'
import { lessonHref, plural, unitGroups } from '../lib/listing.js'

// The secondary actions on a lesson row (teacher plan, self-study twin). They
// sit under the title on a phone and at the right edge of the row from `sm` up.
const chipClass =
  'inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-slate-300 dark:hover:ring-slate-600 hover:text-slate-900 dark:hover:text-white shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6]'

// One lesson. The title's link is stretched over the whole row (its ::before
// fills the <li>), so the row opens the deck from anywhere, while the action
// chips sit above it and still take their own clicks.
function LessonRow({ course, lesson, latest }) {
  const selfStudy = dashboardUnitUrl(lesson.dashboard)
  const blurb = lesson.subtitle || lesson.objective
  return (
    <li className="group relative flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 focus-within:bg-slate-50 dark:focus-within:bg-slate-800/40 transition-colors">
      <span className="accent-tint accent-text flex items-center justify-center self-start sm:self-center w-16 min-h-[2.75rem] px-1 py-1 rounded-xl text-[13px] font-bold leading-tight text-center tabular-nums shrink-0">
        {lesson.unit}
      </span>
      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-5">
        <div className="min-w-0 flex-1">
          <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] sm:text-base font-semibold leading-snug text-slate-900 dark:text-white">
            <Link
              to={lessonHref(course.id, lesson)}
              className="before:absolute before:inset-0 before:content-[''] focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset focus-visible:before:ring-[#1cb0f6]"
            >
              {lesson.title}
            </Link>
            {latest && <span className="accent-solid px-1.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">Latest</span>}
          </h3>
          {blurb && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 sm:line-clamp-1">{blurb}</p>}
        </div>
        {(lesson.plan || selfStudy) && (
          // Plan comes last so it lines up down the list whether or not a
          // row has a self-study link beside it.
          <div className="relative z-10 mt-3 sm:mt-0 flex items-center gap-2 shrink-0">
            {/* The self-study twin: the same section on the Dashboard, for a
                student catching up or practising at home. */}
            {selfStudy && (
              <a href={selfStudy} target="_blank" rel="noopener noreferrer" title="Self-study version on the Dashboard (new tab)" className={chipClass}>
                <Rocket className="w-3.5 h-3.5 text-[#58a700]" strokeWidth={2.5} />
                Self-study
              </a>
            )}
            {lesson.plan && (
              <Link to={`/plan/${course.id}/${lesson.slug}`} title="Teacher lesson plan" className={chipClass}>
                <FileText className="w-3.5 h-3.5 text-[#8b5cf6]" strokeWidth={2.5} />
                Plan
              </Link>
            )}
          </div>
        )}
      </div>
      {lesson.href ? (
        <Play className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors shrink-0" strokeWidth={2.5} />
      ) : (
        <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 group-hover:translate-x-0.5 transition shrink-0" strokeWidth={2.5} />
      )}
    </li>
  )
}

// "Unit 5" over the unit's name from content/courses.js, or the number alone.
function UnitHeading({ group }) {
  return (
    <div className="flex items-end justify-between gap-4 mb-3 sm:mb-4 px-1">
      {group.name ? (
        <div className="min-w-0">
          <p className="accent-text text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em]">Unit {group.unit}</p>
          <h2 className="mt-0.5 text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">{group.name}</h2>
        </div>
      ) : (
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white">Unit {group.unit}</h2>
      )}
      <p className="shrink-0 pb-0.5 text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-500">{plural(group.lessons.length, 'lesson')}</p>
    </div>
  )
}

export default function CoursePage() {
  const { courseId } = useParams()
  const course = getCourse(courseId)
  if (!course) return <Navigate to="/" replace />
  const count = course.lessons.length
  const groups = unitGroups(course)
  // Headings only help when there is more than one unit to tell apart.
  const headed = groups.length > 1 && groups.every((g) => g.unit != null)
  const newest = groups[0]?.lessons[0]

  return (
    <PageShell title={course.title} accent={course.color}>
      <PageTitle
        back={{ to: '/', label: 'All courses' }}
        icon={<CourseIcon name={course.icon} className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.25} />}
        kicker={course.subtitle}
        title={course.title}
        meta={count > 0 && `${plural(count, 'lesson')}${headed ? ` in ${plural(groups.length, 'unit')}` : ''} · newest first`}
      />

      {count === 0 ? (
        <div className="rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 px-6 py-14 text-center">
          <p className="font-bold text-lg text-slate-600 dark:text-slate-300">Lessons coming soon</p>
          <p className="mt-1 text-sm text-slate-400">This course is set up and ready for its first lesson.</p>
        </div>
      ) : (
        <div className="space-y-10 sm:space-y-12">
          {groups.map((group) => (
            <section key={group.unit ?? 'all'}>
              {headed && <UnitHeading group={group} />}
              <ul className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/90 dark:ring-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800/80 overflow-hidden">
                {group.lessons.map((lesson) => (
                  <LessonRow key={lesson.slug} course={course} lesson={lesson} latest={lesson === newest} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </PageShell>
  )
}
