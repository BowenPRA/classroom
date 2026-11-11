import { createElement } from 'react'
import {
  Atom, Battery, BookOpen, Calculator, Crown, Dice5, Divide, Dna, Equal, Eraser, FlaskConical, FlaskRound,
  Gamepad2, Ghost, Hash, Highlighter, Infinity as InfinityIcon, Leaf, Lightbulb, Magnet, Microscope, Minus,
  Music, NotebookPen, Orbit, Paperclip, Pencil, Percent, Pi, Plus, Puzzle, Radical, Ruler, Sigma, Sparkles,
  Spline, Star, Telescope, Thermometer, Triangle, Trophy, Waves, X, Zap,
} from 'lucide-react'

// Map a course's `icon` string (from content/courses.js) to a lucide icon.
const MAP = { Calculator, FlaskConical, Sigma, BookOpen, Gamepad2, Zap }

// Render a course icon by name. Using createElement (rather than aliasing the
// looked-up component to a capitalised variable in JSX) keeps the linter happy
// and avoids remounting on every render.
export function CourseIcon({ name, ...props }) {
  return createElement(MAP[name] || BookOpen, props)
}

// The subject's symbols, scattered faintly over a course's colour banner,
// keyed like MAP by the course's icon name. 'Printer' is the homework shelf
// and 'Hello' the home page's welcome.
const DOODLES = {
  Calculator: [Plus, Divide, Pi, Percent, Triangle, Minus, Equal, X],
  FlaskConical: [Atom, Magnet, Orbit, Microscope, Leaf, Dna, Telescope, Zap],
  Gamepad2: [Dice5, Puzzle, Trophy, Star, Sparkles, Ghost, Crown, Music],
  Sigma: [Pi, InfinityIcon, Radical, Spline, Sigma, Equal, Triangle, Hash],
  Zap: [Atom, Battery, Magnet, FlaskRound, Waves, Thermometer, Zap, Orbit],
  BookOpen: [BookOpen, Pencil, Star, Lightbulb, Sparkles, Ruler, Hash, Equal],
  Printer: [Pencil, BookOpen, Ruler, NotebookPen, Highlighter, Paperclip, Eraser, Star],
  Hello: [Plus, Atom, Star, Pi, Sparkles, Divide, Orbit, Lightbulb],
}

// Where the eight sit: [left %, top %, size px, turn in degrees]. Fixed, so
// every banner has the same loose scatter and nothing moves between renders.
const SPOTS = [
  [5, 12, 22, -12], [22, 60, 18, 10], [38, 6, 16, 18], [53, 50, 26, -8],
  [68, 14, 18, 14], [82, 58, 22, -16], [93, 8, 15, 6], [12, 82, 14, 20],
]

/** The scatter itself: absolutely placed, behind the banner's content. */
export function Doodles({ name, scale = 1, className = 'text-white/25' }) {
  const icons = DOODLES[name] || DOODLES.BookOpen
  return createElement(
    'div',
    { 'aria-hidden': true, className: 'pointer-events-none absolute inset-0 overflow-hidden' },
    SPOTS.map(([left, top, size, turn], i) =>
      createElement(icons[i % icons.length], {
        key: i,
        strokeWidth: 2.25,
        className: `absolute ${className}`,
        style: { left: `${left}%`, top: `${top}%`, width: size * scale, height: size * scale, transform: `rotate(${turn}deg)` },
      }),
    ),
  )
}
