// src/lib/deckControls.js
// The parts of a slide that the phone remote can reach, owned by Deck and
// handed down through context so the layouts and widgets need no new props:
//
//  - RevealContext: the current slide's answer box ("Check your answer"), open
//    or closed. Deck holds it, so the phone can open and close it; it closes
//    again whenever the slide changes, as it always has.
//  - SlideButtonsContext: the current slide's widget buttons. The shared `Btn`
//    (content/y7-science/U03_models/ui.jsx) registers itself here, so every
//    stepper built on it (Next step, Show, Undo …) can be pressed from the
//    phone with no change to the widget. Buttons outside the slide — the zoom
//    view, the toolbars — have no provider and register nothing.
//
// No provider (a page that is not a deck) means both fall back to what they
// did before: a reveal keeps its own state, a button registers nowhere.
import { createContext, useContext, useEffect, useId, useRef } from 'react'

export const RevealContext = createContext(null)
export const SlideButtonsContext = createContext(null)

// Longer labels are cut: the phone shows them on a button, and they travel in
// every state message.
const LABEL_MAX = 32

/**
 * The register Deck keeps of the current slide's buttons. `onChange` hears the
 * list as `[[id, label, disabled], …]` in the order the buttons sit on the
 * slide, and only when it really changed. The label is read from the button's
 * own text, so it follows the deck's language.
 */
export function createButtonRegistry(onChange) {
  const entries = new Map()
  let last = '[]'
  let queued = false
  const list = () =>
    [...entries.entries()]
      .filter(([, e]) => e.el?.isConnected)
      .sort(([, a], [, b]) => (a.el.compareDocumentPosition(b.el) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))
      .map(([id, e]) => [id, e.el.textContent.trim().replace(/\s+/g, ' ').slice(0, LABEL_MAX), e.el.disabled ? 1 : 0])
      .filter(([, label]) => label)
  const flush = () => {
    queued = false
    const next = list()
    const key = JSON.stringify(next)
    if (key === last) return
    last = key
    onChange(next)
  }
  const changed = () => {
    if (queued) return
    queued = true
    queueMicrotask(flush)
  }
  return {
    set(id, el, press) { entries.set(id, { el, press }); changed() },
    remove(id) { entries.delete(id); changed() },
    changed,
    press(id) {
      const e = entries.get(id)
      if (e?.el?.isConnected && !e.el.disabled) e.press()
    },
  }
}

/** Register a widget button (its element and its click handler) with the slide. */
export function useSlideButton(ref, onClick) {
  const registry = useContext(SlideButtonsContext)
  const id = useId()
  const handler = useRef(onClick)
  useEffect(() => { handler.current = onClick })
  useEffect(() => {
    if (!registry || !ref.current) return undefined
    registry.set(id, ref.current, () => handler.current?.())
    return () => registry.remove(id)
  }, [registry, id, ref])
  // The label or the disabled state may change on any render; the registry
  // reports only a real change.
  useEffect(() => { registry?.changed() })
}
