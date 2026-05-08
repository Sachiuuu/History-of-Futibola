'use client'

import { useState } from 'react'
import type { Kit } from '@/types/season'

interface KitDisplayProps {
  home: Kit
  away: Kit
  third: Kit
}

const kits = [
  { key: 'home', label: 'Home' },
  { key: 'away', label: 'Away' },
  { key: 'third', label: 'Third' },
] as const

function swapExt(src: string): string {
  if (src.endsWith('.png')) return src.replace(/\.png$/, '.jpg')
  if (src.endsWith('.jpg') || src.endsWith('.jpeg')) return src.replace(/\.(jpg|jpeg)$/, '.png')
  return src
}

function KitImage({ src, alt, color }: { src: string; alt: string; color: string }) {
  const [imgSrc, setImgSrc] = useState(src)
  const [failed, setFailed] = useState(false)

  function handleError() {
    const alternate = swapExt(imgSrc)
    if (!failed && alternate !== imgSrc) {
      setImgSrc(alternate)
      setFailed(true)
    }
  }

  return (
    <div
      className="w-full overflow-hidden"
      style={{ aspectRatio: '3 / 4', background: color + '22', borderRadius: 8 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 8 }}
      />
    </div>
  )
}

export default function KitDisplay({ home, away, third }: KitDisplayProps) {
  const kitMap = { home, away, third }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
      {kits.map(({ key, label }) => {
        const kit = kitMap[key]
        return (
          <div
            key={key}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              padding: 12,
              border: '1px solid var(--rule)',
              background: 'var(--paper-2)',
            }}
          >
            <KitImage src={kit.image} alt={`${label} kit`} color={kit.primaryColor} />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 16, color: 'var(--ink)', letterSpacing: '-0.01em', margin: 0 }}>
                {label}
              </p>
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginTop: 3 }}>
                {kit.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
