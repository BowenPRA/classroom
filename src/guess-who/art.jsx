// src/guess-who/art.jsx
// The game's pictures: the night sky behind the board, the Riverbucks token,
// the ghost on a flipped card, a face for any person or monster, and the QR
// code that brings the phone in. All drawn here in SVG or CSS, so there is
// nothing to source or credit.
import { useMemo } from 'react'
import { encode } from 'uqr'

/** A Riverbucks amount as a flat gold token: the one way the game shows a prize. */
export function Bucks({ n, className = '' }) {
  return <span className={`gw-bucks ${n ? '' : 'is-zero'} ${className}`}>{n}</span>
}

/** The friendly ghost on the back of a flipped-down card. */
export function Ghost({ className = '' }) {
  return (
    <svg viewBox="0 0 100 110" className={className} aria-hidden="true">
      <path d="M18 104 L18 48 C18 24 32 8 50 8 C68 8 82 24 82 48 L82 104 L71 94 L61 104 L50 94 L39 104 L29 94 Z" fill="#f5f0ff" />
      <path d="M70 18 C78 26 82 36 82 48 L82 104 L71 94 L68 97 C76 80 78 50 70 18 Z" fill="#d8ccf5" />
      <ellipse cx="38" cy="46" rx="6" ry="8" fill="#2e1065" />
      <ellipse cx="62" cy="46" rx="6" ry="8" fill="#2e1065" />
      <ellipse cx="50" cy="64" rx="6" ry="7" fill="#2e1065" />
      <ellipse cx="29" cy="58" rx="5" ry="3" fill="#f9a8d4" opacity="0.6" />
      <ellipse cx="71" cy="58" rx="5" ry="3" fill="#f9a8d4" opacity="0.6" />
    </svg>
  )
}

function Bat({ className = '', style }) {
  return (
    <svg viewBox="0 0 120 50" className={className} style={style} aria-hidden="true">
      <g className="gw-bat-wings" fill="#05020a">
        <path d="M60 22 C50 6 30 4 10 12 C20 16 22 22 18 30 C28 26 36 30 40 36 C46 28 54 28 60 34 Z" />
        <path d="M60 22 C70 6 90 4 110 12 C100 16 98 22 102 30 C92 26 84 30 80 36 C74 28 66 28 60 34 Z" />
      </g>
      <ellipse cx="60" cy="26" rx="7" ry="10" fill="#05020a" />
      <path d="M55 17 L54 10 L58 15 Z M65 17 L66 10 L62 15 Z" fill="#05020a" />
    </svg>
  )
}

/** Moon, stars, bats and fog. Sits behind everything and never takes a tap. */
export function Sky() {
  return (
    <div className="gw-sky" aria-hidden="true">
      <div className="gw-stars" />
      <div className="gw-moon" />
      <Bat className="gw-bat" style={{ '--y': '9vh', '--d': '38s', '--delay': '-6s', '--s': '1' }} />
      <Bat className="gw-bat" style={{ '--y': '22vh', '--d': '52s', '--delay': '-30s', '--s': '0.7' }} />
      <Bat className="gw-bat" style={{ '--y': '4vh', '--d': '61s', '--delay': '-44s', '--s': '0.55' }} />
      <div className="gw-fog gw-fog-1" />
      <div className="gw-fog gw-fog-2" />
    </div>
  )
}

const initials = (name) =>
  String(name || '?')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

// Initials tiles take a colour from the name, so the same child is always
// the same colour, and a board of them is not a wall of one purple.
const TILE_COLOURS = ['#f97316', '#a855f7', '#22c55e', '#ec4899', '#06b6d4', '#eab308', '#ef4444', '#6366f1']
const tileColour = (name) => TILE_COLOURS[[...String(name)].reduce((n, c) => n + c.codePointAt(0), 0) % TILE_COLOURS.length]

/** A person's photo, a monster's emoji, or (no photo) big initials. Fills its box. */
export function Face({ person, className = '' }) {
  if (!person) return <div className={`gw-face-fill gw-face-loading ${className}`} />
  if (person.emoji) {
    return (
      <div className={`gw-face-fill gw-face-emoji ${className}`}>
        <span>{person.emoji}</span>
      </div>
    )
  }
  if (person.photo) {
    return <img src={person.photo} alt="" draggable={false} className={`gw-face-fill object-cover ${className}`} />
  }
  return (
    <div className={`gw-face-fill gw-face-initials ${className}`} style={{ '--tile': tileColour(person.name) }}>
      <span>{initials(person.name)}</span>
    </div>
  )
}

/** A QR code drawn as one SVG path, dark on a white tile so any phone reads it. */
export function QrCode({ text, className = '' }) {
  const d = useMemo(() => {
    const { data, size } = encode(text, { ecc: 'M', border: 0 })
    let path = ''
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (data[y][x]) path += `M${x} ${y}h1v1h-1z`
    return { path, size }
  }, [text])
  return (
    <svg viewBox={`-3 -3 ${d.size + 6} ${d.size + 6}`} className={className} shapeRendering="crispEdges" role="img" aria-label="QR code for the remote">
      <rect x="-3" y="-3" width={d.size + 6} height={d.size + 6} fill="#fff" rx="2" />
      <path d={d.path} fill="#140a24" />
    </svg>
  )
}
