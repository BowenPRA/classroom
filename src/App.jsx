import { Routes, Route, useParams, useNavigate, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CoursePage from './pages/CoursePage.jsx'
import HomeworkPage from './pages/HomeworkPage.jsx'
import Plan from './pages/Plan.jsx'
import Deck from './components/Deck.jsx'
import { getCourse, getLesson } from '../content/registry.js'

function LessonView() {
  const { courseId, slug } = useParams()
  const course = getCourse(courseId)
  const lesson = getLesson(courseId, slug)
  if (!course || !lesson) return <Navigate to="/" replace />
  // Key by lesson so navigating straight from one deck's URL to another's
  // remounts at slide 1. Without it the slide index carries over, which lands
  // you mid-deck — and crashes outright if the new deck has fewer slides.
  return <Deck key={`${courseId}/${slug}`} lesson={lesson} course={course} />
}

function PlanView() {
  const { courseId, slug } = useParams()
  const navigate = useNavigate()
  const course = getCourse(courseId)
  const lesson = getLesson(courseId, slug)
  if (!course || !lesson) return <Navigate to="/" replace />
  return <Plan lesson={lesson} course={course} onBack={() => navigate(`/course/${courseId}`)} />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homework" element={<HomeworkPage />} />
      <Route path="/course/:courseId" element={<CoursePage />} />
      <Route path="/lesson/:courseId/:slug" element={<LessonView />} />
      <Route path="/plan/:courseId/:slug" element={<PlanView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
