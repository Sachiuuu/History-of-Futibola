'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer
      className="mt-24 py-10 transition-colors duration-300"
      style={{
        background: isDark ? 'rgba(10,10,10,0.95)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: `2px solid var(--club-primary)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`text-sm font-medium ${isDark ? 'text-white/60' : 'text-gray-500'}`}>
          Story of Futiball — Built for football lovers worldwide
        </p>
      </div>
    </footer>
  )
}
