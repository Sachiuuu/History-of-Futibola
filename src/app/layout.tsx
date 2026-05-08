import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import PageTransition from '@/components/layout/PageTransition'
import SmoothScroll from '@/components/layout/SmoothScroll'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Story of Futiball',
  description: 'Explore the history, legends and glory of the world\'s greatest football clubs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#overview"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100]"
          style={{ background: 'var(--accent)', color: '#fff', padding: '8px 14px', fontFamily: 'var(--mono)', fontSize: 12 }}
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ThemeProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
