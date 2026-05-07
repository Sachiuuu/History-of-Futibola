'use client'

import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      style={{
        background: isDark
          ? 'color-mix(in srgb, var(--accent) 10%, #0c0a09)'
          : 'color-mix(in srgb, var(--accent) 8%, #f7f3ed)',
        borderTop: '1px solid var(--rule)',
        transition: 'background 0.25s',
      }}
    >
      <div
        className="max-w-[1280px] mx-auto flex items-center gap-4"
        style={{ padding: '48px 32px' }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 13,
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
              fontSize: 12,
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
      </div>
    </footer>
  )
}
