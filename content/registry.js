import { COURSES } from './courses.js'

// Auto-discover every lesson. Each lesson lives at
//   content/<course>/<unit>/index.js
// and default-exports { meta, slides, plan? }. Adding a new folder with an
// index.js is all it takes for a lesson to appear — no list to maintain.
const modules = import.meta.glob('./*/*/index.js', { eager: true })

// lessons: [{ course, unit, id, title, objective, order, slug, slides, plan }]
const lessons = Object.entries(modules).map(([path, mod]) => {
  const data = mod.default || {}
  const meta = data.meta || {}
  // Fall back to the folder name for the course if meta omits it.
  const folderCourse = path.split('/')[1]
  const unitFolder = path.split('/')[2]
  return {
    course: meta.course || folderCourse,
    unit: meta.unit || unitFolder,
    id: meta.id || unitFolder,
    slug: unitFolder, // used in the URL: #/lesson/<course>/<slug>
    title: meta.title || unitFolder,
    subtitle: meta.subtitle || '',
    objective: meta.objective || '',
    order: meta.order ?? 999,
    slides: data.slides || [],
    plan: data.plan || null,
  }
})

const byOrder = (a, b) => a.order - b.order || a.slug.localeCompare(b.slug)

/** Courses joined with their lessons, in display order. */
export function getCatalog() {
  return COURSES.map((course) => ({
    ...course,
    lessons: lessons.filter((l) => l.course === course.id).sort(byOrder),
  }))
}

/** One course by id, or undefined. */
export function getCourse(courseId) {
  return getCatalog().find((c) => c.id === courseId)
}

/** One lesson by course id + slug, or undefined. */
export function getLesson(courseId, slug) {
  return lessons.find((l) => l.course === courseId && l.slug === slug)
}
