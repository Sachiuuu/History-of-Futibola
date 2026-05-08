'use client'

import { useMagnetic } from '@/hooks/useMagnetic'

export default function BackToTop() {
  const ref = useMagnetic(0.25)
  return (
    <button
      ref={ref}
      aria-label="Back to top"
      className="md:hidden fixed z-50"
      style={{
        bottom: 24,
        right: 24,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--accent)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.22)',
        fontSize: 20,
        lineHeight: 1,
        transition: 'transform 0.2s ease',
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}
