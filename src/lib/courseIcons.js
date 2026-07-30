import { createElement } from 'react'
import { Calculator, FlaskConical, Sigma, BookOpen } from 'lucide-react'

// Map a course's `icon` string (from content/courses.js) to a lucide icon.
const MAP = { Calculator, FlaskConical, Sigma, BookOpen }

// Render a course icon by name. Using createElement (rather than aliasing the
// looked-up component to a capitalised variable in JSX) keeps the linter happy
// and avoids remounting on every render.
export function CourseIcon({ name, ...props }) {
  return createElement(MAP[name] || BookOpen, props)
}
