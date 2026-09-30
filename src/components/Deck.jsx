import { useState, useEffect, useRef, useCallback, createElement } from 'react'
import { useNavigate } from 'react-router-dom'

import { dashboardUnitUrl } from '../lib/dashboardLink.js'
import { useStudentPicker } from '../lib/useStudentPicker.js'
import { useDarkMode } from '../lib/useDarkMode.js'
import { useDisplayMode } from '../lib/useDisplayMode.js'
import { RandomStudentModal } from './RandomStudent.jsx'
import { getLayout, resolveSlide } from './layouts/index.js'
import { TopBar, BottomBar, ProjectorDock, ZoomModal, UnknownLayout } from './DeckChrome.jsx'

// Keys that move the deck. A presenter clicker sends PageDown / PageUp (some
// send the arrows instead), and Space is the habit of anyone who has driven a
// PowerPoint, so all of them work.
const NEXT_KEYS = new Set(['ArrowRight', 'Enter', 'PageDown', ' '])
const PREV_KEYS = new Set(['ArrowLeft', 'PageUp'])

export default function Deck({ lesson, course }) {
  const slides = lesson.slides || []
  const bilingual = course?.bilingual !== false
  const navigate = useNavigate()
  const { isDark, toggle: toggleDark } = useDarkMode()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoomedImage, setZoomedImage] = useState(null)
  const [pickerOpen, setPickerOpen] = useState(false)
  const [lang, setLang] = useState('en')
  const picker = useStudentPicker()
  const containerRef = useRef(null)
  const { isDisplayMode, isIdle, toggle: toggleDisplay, exit: exitDisplay } = useDisplayMode(containerRef)

  const goBack = useCallback(() => {
    exitDisplay()
    navigate(`/course/${course.id}`)
  }, [exitDisplay, navigate, course.id])

  const handleNext = useCallback(() => {
    if (currentIndex < slides.length - 1) setCurrentIndex((i) => i + 1)
    else goBack()
  }, [currentIndex, slides.length, goBack])
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1)
  }, [currentIndex])

  // A `game` slide owns the keyboard: Enter and the arrows belong to the game,
  // and on a one-slide game deck Enter would otherwise walk straight out of the
  // lesson mid-round. Full screen (`f`) and the on-screen controls still work.
  const navLocked = slides[currentIndex]?.layout === 'game'

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      // Browser shortcuts (Ctrl+R, Ctrl+F …) are not ours.
      if (e.ctrlKey || e.metaKey || e.altKey) return
      // While the student picker is open it owns the keyboard (it handles its
      // own Escape); don't navigate the deck or toggle fullscreen underneath it.
      if (pickerOpen) return
      if (NEXT_KEYS.has(e.key)) { if (navLocked) return; e.preventDefault(); handleNext() }
      else if (PREV_KEYS.has(e.key)) { if (navLocked) return; e.preventDefault(); handlePrev() }
      else if (e.key === 'Escape') {
        // Real fullscreen leaves on Esc by itself; the windowed fallback needs this.
        if (zoomedImage) setZoomedImage(null)
        else if (isDisplayMode) exitDisplay()
      }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggleDisplay() }
      // R draws a random student, same as the Pick button; a fresh machine
      // with no list yet opens the editor instead.
      else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault()
        if (!picker.draw()) setPickerOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleNext, handlePrev, toggleDisplay, exitDisplay, isDisplayMode, zoomedImage, navLocked, pickerOpen, picker])

  if (!slides.length) {
    return (
      <div className="app-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-4">Lesson has no slides yet</h2>
        <button onClick={goBack} className="px-6 py-3 bg-[#1cb0f6] text-white rounded-xl font-black uppercase tracking-widest border-b-4 border-[#1899d6] active:border-b-0 active:translate-y-1 transition-all">
          Back
        </button>
      </div>
    )
  }

  const s = resolveSlide(slides[currentIndex])
  const LayoutComp = getLayout(s.layout)
  const pick = (en, vn) => (lang === 'vn' ? (vn || en) : en)
  const ctx = { lang, pick, isDisplayMode, bilingual, onZoom: setZoomedImage }
  const selfStudyUrl = dashboardUnitUrl(lesson.dashboard)

  const nav = {
    index: currentIndex, total: slides.length, bilingual, lang, setLang, picker,
    onManage: () => setPickerOpen(true), onPrev: handlePrev, onNext: handleNext,
  }

  return (
    <div
      ref={containerRef}
      className={`app-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans overflow-hidden relative transition-colors duration-300 ${isDisplayMode && isIdle ? 'cursor-none' : ''}`}
    >
      {!isDisplayMode && (
        <TopBar {...nav} title={lesson.title} isDark={isDark} onToggleDark={toggleDark} onBack={goBack} />
      )}

      {/* The slide */}
      <div className={`flex-1 flex justify-center items-center z-10 overflow-hidden relative min-h-0 ${isDisplayMode ? 'p-0' : 'p-2 sm:p-4 lg:p-8'}`}>
        <div
          key={currentIndex}
          className={`w-full h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden animate-in fade-in zoom-in-[0.98] duration-500 ${isDisplayMode ? 'max-w-none' : 'max-w-7xl rounded-2xl sm:rounded-3xl lg:rounded-[2rem] shadow-sm border-2 border-slate-200 dark:border-slate-800'}`}
        >
          {LayoutComp
            ? createElement(LayoutComp, { slide: s, ctx })
            : <UnknownLayout slide={s} index={currentIndex} />}
        </div>
      </div>

      {isDisplayMode
        ? <ProjectorDock {...nav} onExit={exitDisplay} idle={isIdle} />
        : (
          <BottomBar
            {...nav}
            onFullscreen={toggleDisplay}
            onPlan={lesson.plan ? () => navigate(`/plan/${course.id}/${lesson.slug}`) : null}
            selfStudyUrl={selfStudyUrl}
          />
        )}

      {/* Random-student picker (roster saved per-device; works in full screen) */}
      <RandomStudentModal open={pickerOpen} onClose={() => setPickerOpen(false)} lang={lang} picker={picker} />

      {zoomedImage && (
        <ZoomModal zoomed={zoomedImage} lang={lang} isDisplayMode={isDisplayMode} onClose={() => setZoomedImage(null)} />
      )}
    </div>
  )
}
