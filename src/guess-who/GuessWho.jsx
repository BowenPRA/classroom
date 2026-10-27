// src/guess-who/GuessWho.jsx
// Guess Who, the Halloween carnival game: #/guess-who is the board for the TV,
// #/guess-who/remote/<room> is Mr Bowen's remote. Unlisted, like the
// portfolio, and loaded as its own chunk, so a student opening a lesson never
// downloads the Supabase client it needs.
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Board from './Board.jsx'
import Remote from './Remote.jsx'
import './guess-who.css'

// Creepster for the big moments (the title, YES! / NO! / BOO!), Fredoka for
// everything a child has to read. Added on arrival rather than in index.html,
// so lessons never fetch them; the CSS falls back to system fonts offline.
const FONTS_ID = 'guess-who-fonts'
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Creepster&family=Fredoka:wght@500;600;700&display=swap'

export default function GuessWho() {
  useEffect(() => {
    if (document.getElementById(FONTS_ID)) return
    const link = document.createElement('link')
    link.id = FONTS_ID
    link.rel = 'stylesheet'
    link.href = FONTS_URL
    document.head.appendChild(link)
  }, [])

  return (
    <Routes>
      <Route index element={<Board />} />
      <Route path="remote" element={<Remote />} />
      <Route path="remote/:room" element={<Remote />} />
    </Routes>
  )
}
