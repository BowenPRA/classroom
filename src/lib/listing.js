// How the home, course and homework pages order what they list: newest first.
// The registry and content/homework.js keep teaching order (oldest first),
// which the portfolio's course tabs still rely on, so the reversing happens
// here and nowhere else.

/** Where a lesson's row opens: its deck, or an app's own route (Guess Who). */
export const lessonHref = (courseId, lesson) => lesson.href || `/lesson/${courseId}/${lesson.slug}`

/** The newest lesson in a course, or null when it has none yet. */
export const latestLesson = (course) => course.lessons[course.lessons.length - 1] || null

/**
 * A course's lessons newest first, under a heading per textbook unit:
 * [{ unit, name, lessons }]. A lesson's unit is the leading number of its
 * `unit` label ('5.3', '3.1–3.2', '4 Review'); a label without one ('Models',
 * 'Lab 1', 'T1') belongs to the unit before it in teaching order. `unit` is
 * null for a course whose labels carry no numbers at all (the games).
 */
export function unitGroups(course) {
  let current = null
  const tagged = course.lessons.map((lesson) => {
    const match = /^(\d+)/.exec(lesson.unit)
    if (match) current = Number(match[1])
    return { lesson, unit: current }
  })
  const groups = []
  for (const { lesson, unit } of tagged.reverse()) {
    const last = groups[groups.length - 1]
    if (last && last.unit === unit) last.lessons.push(lesson)
    else groups.push({ unit, name: (unit != null && course.units?.[unit]) || null, lessons: [lesson] })
  }
  return groups
}

/**
 * The homework packets newest first, each with the sheets handed out beside it:
 * an EX (extra) or FR (French) packet joins the packet listed before it, so
 * HW 10 still leads EX 10, FR 10 and FR X10.
 */
export function homeworkSets(packets) {
  const sets = []
  for (const packet of packets) {
    const companion = /^(EX|FR)\b/.test(packet.label)
    if (companion && sets.length) sets[sets.length - 1].push(packet)
    else sets.push([packet])
  }
  return sets.reverse()
}

/** "1 lesson", "22 lessons". */
export const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`
