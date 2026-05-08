'use client'
import { motion, AnimatePresence } from 'motion/react'
import type { TrophyEntry } from '@/types/club'

interface TrophyModalProps {
  entry: TrophyEntry | null
  onClose: () => void
}

export default function TrophyModal({ entry, onClose }: TrophyModalProps) {
  return (
    <AnimatePresence>
      {entry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--paper)',
              border: '2px solid var(--accent)',
              maxWidth: 720,
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              padding: 40,
            }}
          >
            <div className="kicker-accent">{entry.competition}</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>×{entry.count}</h2>
            <div
              style={{
                marginTop: 24,
                fontFamily: 'var(--mono)',
                fontSize: 13,
                lineHeight: 2.2,
                color: 'var(--ink)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 16px',
              }}
            >
              {entry.years.map((y) => (
                <span key={y}>{y}</span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="kicker-accent"
              style={{ marginTop: 32, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ← Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
