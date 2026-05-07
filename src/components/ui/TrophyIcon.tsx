interface TrophyIconProps {
  size?: number
  color?: string
}

export default function TrophyIcon({ size = 32, color = 'currentColor' }: TrophyIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 21h8M12 17v4M5 3H3a2 2 0 000 4c0 1.5.5 3 2 4M19 3h2a2 2 0 010 4c0 1.5-.5 3-2 4M6 3h12v7a6 6 0 01-12 0V3z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 21h8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
