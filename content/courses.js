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
    id: 'games',
    title: 'Classroom Games',
    subtitle: 'Play-to-learn · Kindergarten to Year 7',
    color: '#f59e0b',
    icon: 'Gamepad2',
    bilingual: true, // the game's own interface toggles EN/VN
  },
  {
    id: 'freshman-math',
    title: 'Freshman Mathematics',
    subtitle: 'High School',
    color: '#8b5cf6',
    icon: 'Sigma',
    bilingual: false,
  },
  {
    id: 'coord-science',
    title: 'Coordinated Science',
    subtitle: 'Cambridge IGCSE',
    color: '#4338ca',
    icon: 'Zap',
    bilingual: false, // English-only one-on-one lessons — EN/VN toggle hidden
  },
]
