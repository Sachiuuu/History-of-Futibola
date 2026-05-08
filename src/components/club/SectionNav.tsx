'use client'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'trophies', label: 'Trophies' },
  { id: 'records', label: 'Records' },
  { id: 'history', label: 'History' },
  { id: 'seasons', label: 'Seasons' },
  { id: 'legends', label: 'Legends' },
]

export default function SectionNav() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div
      className="sticky z-40"
      style={{
        top: 68,
        background: 'color-mix(in srgb, var(--paper) 92%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div
        className="max-w-[1280px] mx-auto flex gap-0 overflow-x-auto"
        style={{ padding: '0 32px' }}
      >
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              padding: '14px 20px',
              color: active === id ? 'var(--accent)' : 'var(--muted)',
              borderBottom: active === id ? '2px solid var(--accent)' : '2px solid transparent',
              transition: 'color 0.2s, border-color 0.2s',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
