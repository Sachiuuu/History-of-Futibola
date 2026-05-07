import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Story of Futiball',
  description: 'Explore the history, legends and glory of the world\'s greatest football clubs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
