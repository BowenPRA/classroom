// The "recently opened" strip on the home page. A teacher opening the site at
// the start of a lesson wants today's deck in one tap, not course → list →
// lesson. Deck records itself on mount; Home reads the list.
//
// Saved on this device only (localStorage). Every read and write is wrapped:
// storage throws in private windows and preview contexts, and the home page
// must render with an empty strip rather than crash.
const KEY = 'classroom:recent-lessons'
const MAX = 4

export function loadRecent() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []
    const list = JSON.parse(raw)
    return Array.isArray(list) ? list.filter((r) => r && r.course && r.slug) : []
  } catch {
    return []
  }
}

export function recordRecent(course, lesson) {
  if (!course?.id || !lesson?.slug) return
  try {
    const entry = {
      course: course.id,
      slug: lesson.slug,
      unit: lesson.unit,
      title: lesson.title,
      courseTitle: course.title,
      color: course.color,
      icon: course.icon,
      at: Date.now(),
    }
    const rest = loadRecent().filter((r) => !(r.course === entry.course && r.slug === entry.slug))
    localStorage.setItem(KEY, JSON.stringify([entry, ...rest].slice(0, MAX)))
  } catch {
    /* storage blocked — the strip simply stays empty */
  }
}
