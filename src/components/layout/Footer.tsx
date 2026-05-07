'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="max-w-[1280px] mx-auto px-8 flex items-center gap-4"
      style={{
        padding: '48px 32px',
        borderTop: '1px solid var(--rule)',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
          }}
        >
          Story of Futiball
        </div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.04em',
            fontStyle: 'italic',
            color: 'var(--muted)',
            marginTop: 4,
          }}
        >
          Built for football lovers worldwide ·{' '}
          <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
        </div>
      </div>
    </footer>
  )
}
