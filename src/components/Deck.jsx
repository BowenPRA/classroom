import { useState, useEffect, useRef, useCallback, createElement } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ChevronRight, ChevronLeft, BookOpen, Scale, Target, MessageSquare,
  ShieldCheck, CheckCircle2, Maximize2, X, Pencil, MonitorPlay, Minimize2,
  Repeat, AlertTriangle, UserCheck, HelpCircle, Equal, Scissors, Users,
  Sun, Moon, ArrowLeft, FileText,
} from 'lucide-react'

import { SafeInlineMath, SafeBlockMath } from '../lib/SafeMath.jsx'
import WidgetRenderer, { WidgetErrorBoundary } from './WidgetRenderer.jsx'
import { useDarkMode } from '../lib/useDarkMode.js'
import { getLayout } from './layouts/index.js'

const IconMap = {
  BookOpen, Scale, Target, MessageSquare, ShieldCheck,
  Repeat, AlertTriangle, UserCheck, HelpCircle, Equal, Scissors, Users,
}

export default function Deck({ lesson, course }) {
  const slides = lesson.slides || []
  const bilingual = course?.bilingual !== false
  const navigate = useNavigate()
  const { isDark, toggle: toggleDark } = useDarkMode()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [zoomedImage, setZoomedImage] = useState(null)
  const [lang, setLang] = useState('en')
  const [isDisplayMode, setIsDisplayMode] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const containerRef = useRef(null)

  const goBack = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen()
    navigate(`/course/${course.id}`)
  }, [navigate, course.id])

  useEffect(() => {
    const onFsChange = () => { if (!document.fullscreenElement) setIsDisplayMode(false) }
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  // Hide the cursor / controls after a few idle seconds while projecting.
  useEffect(() => {
    let timeout
    const activity = () => {
      setIsIdle(false)
      clearTimeout(timeout)
      if (isDisplayMode) timeout = setTimeout(() => setIsIdle(true), 3000)
    }
    if (isDisplayMode) {
      activity()
      window.addEventListener('mousemove', activity)
      window.addEventListener('keydown', activity)
      window.addEventListener('touchstart', activity)
    }
    // When not projecting, isIdle is not read by any visible element, so it is
    // left as-is; entering display mode resets it via activity().
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('mousemove', activity)
      window.removeEventListener('keydown', activity)
      window.removeEventListener('touchstart', activity)
    }
  }, [isDisplayMode])

  const toggleDisplayMode = useCallback(async () => {
    if (!document.fullscreenElement) {
      try {
        await containerRef.current?.requestFullscreen()
        setIsDisplayMode(true)
      } catch (err) {
        console.error('Fullscreen failed:', err)
      }
    } else if (document.exitFullscreen) {
      await document.exitFullscreen()
      setIsDisplayMode(false)
    }
  }, [])

  const handleNext = useCallback(() => {
    if (currentIndex < slides.length - 1) setCurrentIndex((i) => i + 1)
    else goBack()
  }, [currentIndex, slides.length, goBack])
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1)
  }, [currentIndex])

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); handleNext() }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); handlePrev() }
      else if (e.key === 'Escape' && zoomedImage) setZoomedImage(null)
      else if (e.key.toLowerCase() === 'f') { e.preventDefault(); toggleDisplayMode() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleNext, handlePrev, toggleDisplayMode, zoomedImage])

  if (!slides.length) {
    return (
      <div className="h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 mb-4">Lesson has no slides yet</h2>
        <button onClick={goBack} className="px-6 py-3 bg-[#1cb0f6] text-white rounded-xl font-black uppercase tracking-widest border-b-4 border-[#1899d6] active:border-b-0 active:translate-y-1 transition-all">
          Back
        </button>
      </div>
    )
  }

  const s = slides[currentIndex]
  const pick = (en, vn) => (lang === 'vn' ? (vn || en) : en)
  const LayoutComp = getLayout(s.layout)
  const ctx = { lang, pick, isDisplayMode, bilingual, onZoom: setZoomedImage }
  const slideTitle = pick(s.title, s.titleVn)
  const slideSubtitle = pick(s.subtitle, s.subtitleVn)
  const slideObjective = pick(s.objective, s.objectiveVn)
  const slideWarmUp = pick(s.warmUp, s.warmUpVn)
  const slideContent = pick(s.content, s.contentVn)
  const slideExample = pick(s.example, s.exampleVn)

  const hasContent = !!slideContent
  const hasExample = !!slideExample
  const hasDiagram = !!s.widget || !!s.image || !!s.inlineSvg
  const showExampleOnRight = hasExample && !hasDiagram
  const rightPanelExists = hasDiagram || showExampleOnRight
  const displayLabel = pick(s.exampleLabel || 'Example', s.exampleLabelVn)

  const parseInlineText = (text) => {
    if (!text) return null
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const inner = part.slice(2, -2)
        const mathParts = inner.split(/(\$[\s\S]+?\$)/g)
        return (
          <strong key={`b-${i}`} className="font-black text-slate-900 dark:text-slate-100">
            {mathParts.map((m, j) =>
              m.startsWith('$') && m.endsWith('$')
                ? <SafeInlineMath key={`m-${j}`} math={m.slice(1, -1).trim()} />
                : <span key={`t-${j}`}>{m}</span>,
            )}
          </strong>
        )
      }
      const mathParts = part.split(/(\$[\s\S]+?\$)/g)
      return mathParts.map((m, j) =>
        m.startsWith('$') && m.endsWith('$')
          ? <SafeInlineMath key={`m-${i}-${j}`} math={m.slice(1, -1).trim()} />
          : <span key={`t-${i}-${j}`}>{m}</span>,
      )
    })
  }

  const renderContent = (text, isExample = false) => {
    if (!text || typeof text !== 'string') return null
    const blockParts = text.split(/(\$\$[\s\S]+?\$\$)/g)
    const elements = []
    let bumpers = []

    const flush = () => {
      if (bumpers.length) {
        elements.push(
          <div key={`bump-${elements.length}`} className={`my-4 bg-[#ffc800]/10 dark:bg-amber-900/10 border-l-[6px] border-[#ffc800] p-4 sm:p-5 rounded-r-2xl relative animate-in fade-in ${isDisplayMode ? 'ml-[clamp(1rem,1.5vw,1.5rem)]' : 'ml-0'}`}>
            <div className={`absolute ${isDisplayMode ? '-left-[18px]' : '-left-[14px]'} top-4 p-1.5 bg-[#ffc800] text-amber-950 rounded-full shadow-sm border-2 border-white dark:border-slate-900 z-10`}>
              <Pencil className={isDisplayMode ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={3} />
            </div>
            <div className="space-y-3 ml-3">
              {bumpers.map((line, idx) => (
                <p key={idx} className={`text-amber-950 dark:text-amber-200 font-bold leading-relaxed ${isDisplayMode ? 'text-[clamp(1.15rem,1.8vw,1.6rem)]' : 'text-sm sm:text-base lg:text-lg'}`}>
                  {parseInlineText(line)}
                </p>
              ))}
            </div>
          </div>,
        )
        bumpers = []
      }
    }

    blockParts.forEach((block, i) => {
      if (block.startsWith('$$') && block.endsWith('$$')) {
        flush()
        elements.push(
          <div key={`mb-${i}`} className={`w-full text-slate-800 dark:text-slate-100 ${isDisplayMode ? 'text-4xl' : 'text-xl lg:text-2xl'}`}>
            <SafeBlockMath math={block.slice(2, -2).trim()} />
          </div>,
        )
      } else {
        block.split('\n').forEach((line, j) => {
          if (!line.trim()) {
            flush()
            elements.push(<div key={`sp-${i}-${j}`} className={isDisplayMode ? 'h-[clamp(0.75rem,1.5vh,1.5rem)]' : 'h-3'} />)
          } else if (line.trim().startsWith('>')) {
            bumpers.push(line.replace('>', '').trim())
          } else {
            flush()
            elements.push(
              <p key={`p-${i}-${j}`} className={`${isExample ? 'mb-1' : 'mb-3'} text-slate-700 dark:text-slate-300 font-medium ${isDisplayMode ? 'text-[clamp(1rem,1.8vw,1.6rem)] leading-relaxed tracking-tight' : 'text-[15px] sm:text-base lg:text-lg leading-relaxed'}`}>
                {parseInlineText(line)}
              </p>,
            )
          }
        })
      }
    })
    flush()
    return elements
  }

  const langToggle = (small) => bilingual && (
    <div className={`flex bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 ${small ? 'p-1' : 'p-1 sm:p-1.5'}`}>
      {['en', 'vn'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 sm:px-5 py-1.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${lang === l ? 'bg-white dark:bg-slate-700 text-[#1cb0f6] shadow-sm border-2 border-slate-200 dark:border-slate-600' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 border-2 border-transparent'}`}
        >
          {l}
        </button>
      ))}
    </div>
  )

  return (
    <div
      ref={containerRef}
      className={`h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans overflow-hidden relative transition-colors duration-300 ${isDisplayMode && isIdle ? 'cursor-none' : ''}`}
    >
      {/* Top bar (hidden while projecting) */}
      {!isDisplayMode && (
        <div className="flex justify-between items-center p-3 sm:p-4 border-b-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm z-20 h-16 sm:h-20 shrink-0">
          <button onClick={goBack} className="flex items-center gap-2 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-xs sm:text-sm transition-colors active:scale-95">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="flex-1 mx-4 max-w-2xl hidden md:flex items-center gap-3">
            <span className="text-slate-700 dark:text-slate-200 font-black text-sm truncate">{lesson.title}</span>
            <div className="flex-1 bg-slate-200 dark:bg-slate-800 rounded-full h-3 border-2 border-slate-300 dark:border-slate-700 overflow-hidden">
              <div className="bg-[#58cc02] h-full transition-all duration-500" style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }} />
            </div>
            <span className="text-xs font-black text-slate-400 tabular-nums">{currentIndex + 1}/{slides.length}</span>
          </div>
          <div className="flex items-center gap-2">
            {langToggle(true)}
            <button onClick={toggleDark} className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 transition-colors active:scale-95 border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-700" title="Toggle dark mode">
              {isDark ? <Sun className="w-5 h-5 text-amber-400" strokeWidth={2.5} /> : <Moon className="w-5 h-5" strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      )}

      {/* Main slide area */}
      <div className={`flex-1 flex justify-center items-center z-10 overflow-hidden relative min-h-0 ${isDisplayMode ? 'p-0' : 'p-3 sm:p-6 lg:p-8'}`}>
        <div
          key={currentIndex}
          className={`w-full max-h-full flex flex-col bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500 animate-in fade-in zoom-in-[0.98]
          ${isDisplayMode ? 'h-full max-w-none rounded-none border-0' : `rounded-3xl lg:rounded-[2rem] shadow-sm border-2 border-slate-200 dark:border-slate-800 h-full ${LayoutComp || rightPanelExists ? 'max-w-7xl' : 'max-w-4xl'}`}`}
        >
          {/* Flexible layout (opt-in via slide.layout) */}
          {LayoutComp && createElement(LayoutComp, { slide: s, ctx })}

          {/* INTRO */}
          {!LayoutComp && s.type === 'intro' && (
            <div className={`flex-1 flex flex-col items-center justify-center p-8 sm:p-12 text-center text-white ${s.color || 'bg-[#1cb0f6]'} overflow-y-auto min-h-0`}>
              <div className={`bg-white/20 mx-auto rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border-4 border-white/30 ${isDisplayMode ? 'w-32 h-32' : 'w-24 h-24'}`}>
                <BookOpen className={isDisplayMode ? 'w-16 h-16' : 'w-12 h-12'} strokeWidth={2.5} />
              </div>
              {s.unit && (
                <div className={`inline-block bg-white/20 text-white font-black uppercase tracking-[0.2em] rounded-full mb-5 border border-white/30 shadow-inner ${isDisplayMode ? 'text-[clamp(0.9rem,1.4vw,1.4rem)] px-6 py-2' : 'text-xs sm:text-sm px-4 py-1.5'}`}>{s.unit}</div>
              )}
              <h1 className={`font-black tracking-tight mb-6 drop-shadow-md leading-tight ${isDisplayMode ? 'text-[clamp(3rem,6vw,7rem)]' : 'text-4xl lg:text-6xl'}`}>{slideTitle || 'Introduction'}</h1>
              {slideObjective ? (
                <div className={`bg-white/15 backdrop-blur-sm rounded-2xl border-2 border-white/25 shadow-inner max-w-3xl mx-auto ${isDisplayMode ? 'px-8 py-6' : 'px-5 py-4'}`}>
                  <div className={`font-black uppercase tracking-[0.2em] opacity-80 mb-1.5 ${isDisplayMode ? 'text-[clamp(0.8rem,1.1vw,1.1rem)]' : 'text-[10px] sm:text-xs'}`}>{lang === 'vn' ? 'Mục tiêu' : 'Objective'}</div>
                  <p className={`font-bold opacity-95 drop-shadow-sm leading-snug ${isDisplayMode ? 'text-[clamp(1.4rem,2.6vw,2.6rem)]' : 'text-lg lg:text-2xl'}`}>{slideObjective}</p>
                </div>
              ) : (
                <p className={`font-bold opacity-90 drop-shadow-sm max-w-4xl mx-auto ${isDisplayMode ? 'text-[clamp(1.5rem,3vw,3rem)]' : 'text-xl lg:text-2xl'}`}>{slideSubtitle}</p>
              )}
              {slideWarmUp && (
                <div className={`bg-white rounded-2xl shadow-xl border-2 border-amber-300 text-left max-w-3xl mx-auto ${isDisplayMode ? 'mt-8 px-8 py-6' : 'mt-6 px-5 py-4'}`}>
                  <div className={`flex items-center gap-2 text-amber-600 font-black uppercase tracking-[0.15em] mb-2 ${isDisplayMode ? 'text-[clamp(0.8rem,1.1vw,1.15rem)]' : 'text-[11px] sm:text-xs'}`}>
                    <Pencil className={isDisplayMode ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={3} />
                    {lang === 'vn' ? 'Khởi động · Làm ngay vào vở' : 'Warm-Up · Do this now in your book'}
                  </div>
                  <div className={`font-bold text-slate-800 leading-snug ${isDisplayMode ? 'text-[clamp(1.3rem,2.4vw,2.4rem)]' : 'text-lg lg:text-2xl'}`}>{parseInlineText(slideWarmUp)}</div>
                </div>
              )}
            </div>
          )}

          {/* CONCEPT */}
          {!LayoutComp && s.type === 'concept' && (() => {
            const themeColor = s.color || 'bg-[#1cb0f6]'
            return (
              <>
                <div className={`${themeColor} ${isDisplayMode ? 'p-2 sm:p-3 lg:p-4' : 'p-4 lg:p-6'} text-white flex items-center relative overflow-hidden flex-shrink-0 border-b-4 border-black/10`}>
                  <div className={`bg-white/20 rounded-xl mr-3 sm:mr-4 shadow-inner border border-white/30 z-10 ${isDisplayMode ? 'p-2' : 'p-2.5 lg:p-3'}`}>
                    {createElement(IconMap[s.icon] || BookOpen, { className: `drop-shadow-sm ${isDisplayMode ? 'w-6 h-6' : 'w-5 h-5 lg:w-8 lg:h-8'}`, strokeWidth: 2.5 })}
                  </div>
                  <h2 className={`font-black tracking-tight z-10 drop-shadow-md ${isDisplayMode ? 'text-[clamp(1.25rem,2vw,2rem)]' : 'text-xl sm:text-2xl lg:text-4xl'}`}>{slideTitle || 'Concept'}</h2>
                </div>
                <div className="flex flex-col lg:flex-row flex-1 min-h-0 overflow-hidden">
                  {(hasContent || (hasExample && hasDiagram)) && (
                    <div className={`flex-none h-[45%] lg:h-auto lg:flex-1 flex flex-col overflow-y-auto custom-scrollbar border-b-2 lg:border-b-0 border-slate-100 dark:border-slate-800 ${isDisplayMode ? 'p-[clamp(1.5rem,3vw,3rem)]' : 'p-4 sm:p-6 lg:p-10'} ${rightPanelExists ? 'lg:border-r-2 lg:w-[45%]' : 'w-full max-w-4xl mx-auto'}`}>
                      {hasContent && <div className={hasExample && hasDiagram ? 'pb-4 lg:pb-6' : ''}>{renderContent(slideContent)}</div>}
                      {hasExample && hasDiagram && (
                        <div className={`bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-2xl lg:rounded-3xl relative shadow-sm shrink-0 ${isDisplayMode ? 'mt-6 p-[clamp(1.25rem,2vw,2rem)]' : 'mt-6 lg:mt-8 p-4 lg:p-6'}`}>
                          <div className={`absolute -top-3.5 lg:-top-4 left-4 lg:left-6 ${themeColor} text-white font-black uppercase tracking-widest rounded-lg lg:rounded-xl shadow-sm ${isDisplayMode ? 'text-[clamp(0.75rem,1.1vw,1.1rem)] px-5 py-2' : 'text-[9px] lg:text-xs px-3 lg:px-4 py-1'}`}>{displayLabel}</div>
                          <div className={`font-bold text-slate-800 dark:text-slate-200 mt-1 lg:mt-2 leading-relaxed ${isDisplayMode ? 'text-[clamp(1.1rem,1.8vw,1.5rem)]' : 'text-sm sm:text-base lg:text-xl'}`}>{renderContent(slideExample, true)}</div>
                        </div>
                      )}
                    </div>
                  )}
                  {rightPanelExists && (
                    <div className={`flex-1 w-full ${hasContent ? 'lg:w-[55%]' : 'lg:w-full'} bg-slate-50/50 dark:bg-slate-900/50 flex flex-col items-center justify-center flex-shrink-0 min-h-0 ${isDisplayMode ? 'p-[clamp(1.5rem,3vw,3rem)]' : 'p-3 sm:p-4 lg:p-8'}`}>
                      {hasDiagram ? (
                        <div className={`relative w-full h-full bg-white dark:bg-slate-800 shadow-sm flex flex-col items-center justify-center overflow-hidden group transition-all ${isDisplayMode ? 'rounded-[2rem]' : 'rounded-2xl lg:rounded-[2rem]'} ${s.drawThis ? 'border-[3px] lg:border-[4px] border-[#ffc800]' : 'border-2 border-slate-200 dark:border-slate-700'}`}>
                          {s.drawThis && (
                            <div className={`absolute top-0 right-0 bg-[#ffc800] text-amber-950 font-black uppercase tracking-widest rounded-bl-2xl lg:rounded-bl-3xl z-20 shadow-sm flex items-center border-b-2 border-l-2 border-[#cca000] ${isDisplayMode ? 'text-[clamp(0.75rem,1vw,1.1rem)] px-5 py-2.5' : 'text-[9px] sm:text-xs px-3 lg:px-4 py-1.5 lg:py-2'}`}>
                              <Pencil className={isDisplayMode ? 'w-4 h-4 mr-2' : 'w-3 h-3 lg:w-4 lg:h-4 mr-1.5 lg:mr-2'} strokeWidth={3} />
                              {lang === 'vn' ? 'Vẽ Hình Này' : 'Draw This'}
                            </div>
                          )}
                          {s.widget ? (
                            <div className={`w-full h-full flex items-center justify-center ${isDisplayMode ? 'p-6' : 'p-2 sm:p-4'}`}>
                              <WidgetErrorBoundary><WidgetRenderer config={s.widget} /></WidgetErrorBoundary>
                            </div>
                          ) : s.inlineSvg ? (
                            <div className={`w-full h-full flex items-center justify-center ${isDisplayMode ? 'p-6' : 'p-3 sm:p-4'}`} dangerouslySetInnerHTML={{ __html: s.inlineSvg }} />
                          ) : (
                            <iframe src={s.image} title={slideTitle || 'Diagram'} className="absolute inset-0 w-full h-full pointer-events-none select-none dark:opacity-90" scrolling="no" />
                          )}
                          <button
                            onClick={() => setZoomedImage(s.widget ? { type: 'widget', config: s.widget } : s.inlineSvg ? { type: 'svg', content: s.inlineSvg } : { type: 'url', src: s.image })}
                            className="absolute top-2 lg:top-4 right-2 lg:right-4 p-2.5 lg:p-3 bg-white/90 backdrop-blur hover:bg-slate-100 text-slate-600 hover:text-[#1cb0f6] rounded-xl shadow-sm border-2 border-slate-200 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all z-30 active:scale-95 border-b-4 active:border-b-2 active:translate-y-0.5"
                            title="Expand"
                          >
                            <Maximize2 className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
                          </button>
                        </div>
                      ) : showExampleOnRight ? (
                        <div className="w-full h-full bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-200 dark:border-slate-700 rounded-2xl lg:rounded-[2rem] relative shadow-inner flex flex-col overflow-hidden">
                          <div className={`w-full ${themeColor} text-white font-black uppercase tracking-widest flex items-center shadow-md ${isDisplayMode ? 'text-[clamp(0.9rem,1.3vw,1.3rem)] px-8 py-5' : 'text-xs px-6 py-4'}`}>
                            <Target className="w-5 h-5 mr-3 opacity-80" />{displayLabel}
                          </div>
                          <div className={`flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-10 font-bold text-slate-800 dark:text-slate-200 leading-relaxed ${isDisplayMode ? 'text-[clamp(1.1rem,1.8vw,1.5rem)]' : 'text-base lg:text-xl'}`}>{renderContent(slideExample, true)}</div>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </>
            )
          })()}

          {/* WARMUP */}
          {!LayoutComp && s.type === 'warmup' && (() => {
            const themeColor = s.color || 'bg-[#ff9600]'
            return (
              <>
                <div className={`${themeColor} ${isDisplayMode ? 'p-3 lg:p-4' : 'p-4 lg:p-6'} text-white flex items-center relative overflow-hidden flex-shrink-0 border-b-4 border-black/10`}>
                  <div className={`bg-white/20 rounded-xl mr-3 sm:mr-4 shadow-inner border border-white/30 ${isDisplayMode ? 'p-2' : 'p-2.5 lg:p-3'}`}>
                    <Pencil className={`drop-shadow-sm ${isDisplayMode ? 'w-6 h-6' : 'w-5 h-5 lg:w-8 lg:h-8'}`} strokeWidth={2.5} />
                  </div>
                  <h2 className={`font-black tracking-tight drop-shadow-md ${isDisplayMode ? 'text-[clamp(1.25rem,2vw,2rem)]' : 'text-xl sm:text-2xl lg:text-4xl'}`}>{slideTitle || 'Do Now'}</h2>
                </div>
                <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
                  <div className={`flex-1 overflow-y-auto custom-scrollbar ${isDisplayMode ? 'p-[clamp(1.5rem,3vw,3rem)]' : 'p-4 sm:p-6 lg:p-10'} ${s.inlineSvg ? 'lg:w-[55%] lg:border-r-2 border-slate-100 dark:border-slate-800' : 'w-full max-w-4xl mx-auto'}`}>{renderContent(slideContent)}</div>
                  {s.inlineSvg && (
                    <div className={`flex-1 lg:w-[45%] bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-center flex-shrink-0 min-h-0 ${isDisplayMode ? 'p-[clamp(1.5rem,3vw,3rem)]' : 'p-3 sm:p-4 lg:p-8'}`}>
                      <div className="w-full h-full flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl lg:rounded-[2rem] border-2 border-slate-200 dark:border-slate-700 shadow-sm p-3 sm:p-4" dangerouslySetInnerHTML={{ __html: s.inlineSvg }} />
                    </div>
                  )}
                </div>
              </>
            )
          })()}

          {/* SUMMARY */}
          {!LayoutComp && s.type === 'summary' && (
            <div className={`flex-1 flex flex-col items-center justify-center p-8 sm:p-12 text-center text-white ${s.color || 'bg-[#58cc02]'} min-h-0 overflow-y-auto`}>
              <div className={`bg-white/20 mx-auto rounded-[2rem] flex items-center justify-center mb-8 shadow-inner border-4 border-white/30 ${isDisplayMode ? 'w-32 h-32' : 'w-24 h-24'}`}>
                <CheckCircle2 className={isDisplayMode ? 'w-16 h-16' : 'w-12 h-12'} strokeWidth={3} />
              </div>
              <h1 className={`font-black tracking-tight mb-6 drop-shadow-md leading-tight ${isDisplayMode ? 'text-[clamp(3rem,6vw,7rem)]' : 'text-4xl lg:text-6xl'}`}>{slideTitle || 'Complete'}</h1>
              <p className={`font-bold opacity-90 drop-shadow-sm max-w-4xl mx-auto ${isDisplayMode ? 'text-[clamp(1.5rem,3vw,3rem)]' : 'text-xl lg:text-2xl'}`}>{slideSubtitle}</p>
            </div>
          )}
        </div>
      </div>

      {/* Projector floating dock */}
      {isDisplayMode && (
        <div className={`absolute top-2.5 sm:top-3 right-3 sm:right-4 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl shadow-2xl border border-white/15 z-50 transition-all duration-500 ${isIdle ? 'opacity-0 -translate-y-4' : 'opacity-100'}`}>
          <button onClick={handlePrev} disabled={currentIndex === 0} className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"><ChevronLeft className="w-5 h-5" strokeWidth={3} /></button>
          {bilingual && (
            <div className="flex items-center gap-1 px-1.5 border-r border-l border-white/20">
              {['en', 'vn'].map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`px-2.5 py-1.5 rounded-lg font-black text-xs tracking-wider ${lang === l ? 'bg-[#1cb0f6] text-white' : 'text-white/50 hover:text-white'}`}>{l.toUpperCase()}</button>
              ))}
            </div>
          )}
          <button onClick={toggleDisplayMode} className="p-2 rounded-xl bg-white/10 text-slate-300 hover:bg-rose-500 hover:text-white" title="Exit (Esc)"><Minimize2 className="w-5 h-5" strokeWidth={2.5} /></button>
          <button onClick={handleNext} className="p-2 rounded-xl bg-[#58cc02] text-white hover:bg-[#46a802] ml-0.5"><ChevronRight className="w-5 h-5" strokeWidth={3} /></button>
        </div>
      )}
      {isDisplayMode && (
        <div className={`fixed bottom-0 left-0 right-0 h-1.5 bg-slate-200/20 z-50 transition-opacity duration-500 ${isIdle ? 'opacity-0' : 'opacity-100'}`}>
          <div className="h-full bg-[#58cc02] transition-all duration-500 shadow-[0_-1px_10px_rgba(88,204,2,0.4)]" style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }} />
        </div>
      )}

      {/* Bottom navigation */}
      {!isDisplayMode && (
        <div className="bg-white dark:bg-slate-900 border-t-2 border-slate-200 dark:border-slate-800 p-3 sm:p-5 z-20 flex-shrink-0">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-4">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl border-2 border-b-4 border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 active:border-b-2 active:translate-y-0.5 transition-all disabled:opacity-30 bg-white dark:bg-slate-900">
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={3} />
            </button>
            <div className="flex items-center gap-2 sm:gap-4">
              {langToggle(false)}
              <button onClick={toggleDisplayMode} className="hidden md:flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 hover:text-[#1cb0f6] transition-all border-2 border-slate-200 dark:border-slate-700 active:scale-95" title="Project to TV (F)">
                <MonitorPlay className="w-5 h-5 mr-2" strokeWidth={2.5} />
                <span className="text-xs font-black uppercase tracking-widest">Project</span>
              </button>
              {lesson.plan && (
                <button onClick={() => navigate(`/plan/${course.id}/${lesson.slug}`)} className="hidden lg:flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 hover:text-[#8b5cf6] transition-all border-2 border-slate-200 dark:border-slate-700 active:scale-95" title="Teacher lesson plan">
                  <FileText className="w-5 h-5 mr-2" strokeWidth={2.5} />
                  <span className="text-xs font-black uppercase tracking-widest">Plan</span>
                </button>
              )}
            </div>
            <button onClick={handleNext} className={`flex items-center px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-lg tracking-widest uppercase transition-all border-b-4 active:border-b-0 active:translate-y-1 ${currentIndex === slides.length - 1 ? 'bg-[#58cc02] border-[#58a700] text-white hover:bg-[#46a802]' : 'bg-[#1cb0f6] border-[#1899d6] text-white hover:bg-[#159bd9]'}`}>
              <span className="hidden sm:inline">{currentIndex === slides.length - 1 ? 'Finish' : 'Continue'}</span>
              <span className="sm:hidden">{currentIndex === slides.length - 1 ? 'End' : 'Next'}</span>
              {currentIndex !== slides.length - 1 && <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1 sm:ml-2 -mr-1 sm:-mr-2" strokeWidth={3} />}
            </button>
          </div>
        </div>
      )}

      {/* Zoom modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button onClick={() => setZoomedImage(null)} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 bg-white hover:bg-slate-100 text-slate-800 rounded-xl shadow-xl border-2 border-slate-200 active:scale-95 z-50 border-b-4 active:border-b-2 active:translate-y-0.5">
            <X className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={3} />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden p-2 sm:p-6 animate-in zoom-in-95 duration-300 border-4 border-slate-200 dark:border-slate-700">
            {zoomedImage.type === 'widget' ? (
              <WidgetErrorBoundary><WidgetRenderer config={zoomedImage.config} /></WidgetErrorBoundary>
            ) : zoomedImage.type === 'svg' ? (
              <div className="w-full h-full flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-sm" dangerouslySetInnerHTML={{ __html: zoomedImage.content }} />
            ) : zoomedImage.type === 'img' ? (
              <img src={zoomedImage.src} alt="Expanded" className="w-full h-full object-contain rounded-xl bg-white dark:bg-slate-800 p-4" draggable={false} />
            ) : (
              <iframe src={zoomedImage.src} title="Expanded" className="w-full h-full pointer-events-none rounded-xl bg-white dark:bg-slate-800" scrolling="no" />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
