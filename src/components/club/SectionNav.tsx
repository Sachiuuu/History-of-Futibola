'use client'
import { useEffect, useState } from 'react'

export interface SectionItem {
  id: string
  label: string
}

interface SectionNavProps {
  sections: SectionItem[]
}

export default function SectionNav({ sections }: SectionNavProps) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach(({ id }) => {
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
  }, [sections])

  return (
    <nav
      aria-label="Club sections"
      className="sticky z-40"
      style={{
        top: 'var(--navbar-h)',
        background: 'color-mix(in srgb, var(--paper) 92%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--rule)',
      }}
    >
      <div style={{ position: 'relative' }}>
        <div
          className="max-w-[1280px] mx-auto flex gap-0 overflow-x-auto"
          style={{ padding: '0 32px', scrollbarWidth: 'none' }}
        >
          {sections.map(({ id, label }) => (
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
        {/* T-06: right-edge fade indicating overflow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: 48,
            background: 'linear-gradient(to right, transparent, var(--paper))',
            pointerEvents: 'none',
          }}
        />
      </div>
    </nav>
  )
}
