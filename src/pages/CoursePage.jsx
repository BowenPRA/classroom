import { Link, useParams, Navigate } from 'react-router-dom'
import { ChevronRight, FileText, Play, Rocket, Sparkles } from 'lucide-react'
import PageShell, { PageBanner } from '../components/PageShell.jsx'
import { getCourse } from '../../content/registry.js'
import { CourseIcon } from '../lib/courseIcons.js'
import { dashboardUnitUrl } from '../lib/dashboardLink.js'
import { bannerButtonClass } from '../lib/layout.js'
import { lessonHref, plural, unitGroups } from '../lib/listing.js'

// The secondary actions on a lesson row (teacher plan, self-study twin), as
// small chunky buttons. They sit under the title on a phone and at the right
// edge of the row from `sm` up.
const chipClass =
  'inline-flex items-center gap-1.5 h-8 px-2.5 rounded-xl border-2 border-b-4 text-xs font-bold active:border-b-2 active:translate-y-[2px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6]'
const planChip = `${chipClass} bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/30 dark:hover:bg-violet-500/20`
const selfStudyChip = `${chipClass} bg-lime-50 text-[#3f7f00] border-lime-200 hover:bg-lime-100 dark:bg-lime-500/10 dark:text-lime-300 dark:border-lime-500/30 dark:hover:bg-lime-500/20`

// One lesson. The title's link is stretched over the whole row (its ::before
// fills the <li>), so the row opens the deck from anywhere, while the action
// chips sit above it and still take their own clicks.
function LessonRow({ course, lesson, newest }) {
  const selfStudy = dashboardUnitUrl(lesson.dashboard)
  const blurb = lesson.subtitle || lesson.objective
  return (
    <li className="group relative flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-4 hover:accent-wash focus-within:accent-wash transition-colors">
      <span className="accent-tint accent-text accent-edge-soft flex items-center justify-center self-start sm:self-center w-16 min-h-[2.75rem] px-1 py-1 rounded-xl border-2 border-b-4 text-[13px] font-extrabold leading-tight text-center tabular-nums shrink-0 group-hover:-rotate-3 transition-transform">
        {lesson.unit}
      </span>
      <div className="min-w-0 flex-1 sm:flex sm:items-center sm:gap-5">
        <div className="min-w-0 flex-1">
          <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] sm:text-base font-bold leading-snug text-slate-900 dark:text-white">
            <Link
              to={lessonHref(course.id, lesson)}
              className="before:absolute before:inset-0 before:content-[''] focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset focus-visible:before:ring-[#1cb0f6]"
            >
              {lesson.title}
            </Link>
            {newest && (
              <span className="accent-solid inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" strokeWidth={2.5} /> New
              </span>
            )}
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
              <a href={selfStudy} target="_blank" rel="noopener noreferrer" title="Self-study version on the Dashboard (new tab)" className={selfStudyChip}>
                <Rocket className="w-3.5 h-3.5" strokeWidth={2.5} />
                Self-study
              </a>
            )}
            {lesson.plan && (
              <Link to={`/plan/${course.id}/${lesson.slug}`} title="Teacher lesson plan" className={planChip}>
                <FileText className="w-3.5 h-3.5" strokeWidth={2.5} />
                Plan
              </Link>
            )}
          </div>
        )}
      </div>
      <span className="flex items-center justify-center w-8 h-8 rounded-full text-slate-300 dark:text-slate-600 group-hover:accent-fill transition-colors shrink-0">
        {lesson.href ? <Play className="w-4 h-4" strokeWidth={2.5} /> : <ChevronRight className="w-5 h-5" strokeWidth={2.75} />}
      </span>
    </li>
  )
}

// A coloured "Unit 5" tag beside the unit's name from content/courses.js.
function UnitHeading({ group }) {
  return (
    <div className="flex items-center gap-3 mb-3 sm:mb-4 px-1">
      <span className="accent-solid shrink-0 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm -rotate-2">
        Unit {group.unit}
      </span>
      {group.name && <h2 className="min-w-0 text-lg sm:text-xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">{group.name}</h2>}
      <p className="ml-auto shrink-0 text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500">{plural(group.lessons.length, 'lesson')}</p>
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
      <PageBanner
        back={{ to: '/', label: 'All courses' }}
        icon={<CourseIcon name={course.icon} className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.25} />}
        doodles={course.icon}
        kicker={course.subtitle}
        title={course.title}
        stats={count > 0 ? [plural(count, 'lesson'), ...(headed ? [plural(groups.length, 'unit')] : []), 'Newest first'] : []}
        action={
          newest && (
            <Link to={lessonHref(course.id, newest)} className={bannerButtonClass}>
              <span className="accent-fill flex items-center justify-center w-7 h-7 rounded-lg">
                <Play className="w-3.5 h-3.5 fill-current" strokeWidth={2.5} />
              </span>
              Newest
              <span className="accent-ink-tint accent-ink rounded-lg px-2 py-0.5 text-sm tabular-nums">{newest.unit}</span>
            </Link>
          )
        }
      />

      {count === 0 ? (
        <div className="rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 px-6 py-14 text-center">
          <p className="font-extrabold text-lg text-slate-600 dark:text-slate-300">Lessons coming soon</p>
          <p className="mt-1 text-sm text-slate-400">This course is set up and ready for its first lesson.</p>
        </div>
      ) : (
        <div className="space-y-10 sm:space-y-12">
          {groups.map((group) => (
            <section key={group.unit ?? 'all'}>
              {headed && <UnitHeading group={group} />}
              <ul className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-b-[5px] border-slate-200 dark:border-slate-800 divide-y-2 divide-slate-100 dark:divide-slate-800/80 overflow-hidden">
                {group.lessons.map((lesson) => (
                  <LessonRow key={lesson.slug} course={course} lesson={lesson} newest={lesson === newest} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </PageShell>
  )
}
