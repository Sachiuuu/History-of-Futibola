'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({ isDark: false, toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('sof-theme')
    if (stored === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark-mode')
    }
  }, [])

  function toggle() {
    setIsDark((prev) => {
      const next = !prev
      localStorage.setItem('sof-theme', next ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark-mode', next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
