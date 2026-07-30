// The list of courses shown on the home page, in display order.
// A course appears here even before it has any lessons (shows "coming soon").
// `id` must match the folder name under content/<id>/ and each lesson's meta.course.
export const COURSES = [
  {
    id: 'y7-math',
    title: 'Year 7 Mathematics',
    subtitle: 'Cambridge Lower Secondary',
    color: '#1cb0f6',
    icon: 'Calculator',
    bilingual: true, // lessons offer an EN/VN toggle
  },
  {
    id: 'y7-science',
    title: 'Year 7 Science',
    subtitle: 'Cambridge Lower Secondary',
    color: '#14b8a6',
    icon: 'FlaskConical',
    bilingual: true,
  },
  {
    id: 'freshman-math',
    title: 'Freshman Mathematics',
    subtitle: 'High School',
    color: '#8b5cf6',
    icon: 'Sigma',
    bilingual: false,
  },
]
