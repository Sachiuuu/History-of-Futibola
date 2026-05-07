import type { ClubTheme } from '@/types/club'

interface Props {
  theme: ClubTheme
}

function stripe(yTL: number, yBL: number): string {
  const xL = -200
  const xR = 1640
  const W = xR - xL        // 1840
  const slope = 0.5
  const amp = 68

  const x1 = xL + W * 0.30  // first control x
  const x2 = xL + W * 0.70  // second control x

  const d = (x: number) => (x - xL) * slope  // diagonal y-offset at x

  const yTR = yTL + d(xR)
  const yBR = yBL + d(xR)

  // Top edge: S-curve along diagonal (above then below baseline)
  // Bottom edge: reversed, same S-curve offset by stripe width
  return (
    `M${xL} ${yTL} ` +
    `C${x1} ${yTL + d(x1) - amp} ${x2} ${yTL + d(x2) + amp} ${xR} ${yTR} ` +
    `L${xR} ${yBR} ` +
    `C${x2} ${yBL + d(x2) + amp} ${x1} ${yBL + d(x1) - amp} ${xL} ${yBL} Z`
  )
}

export default function WavyBackground({ theme }: Props) {
  // 5 pattern repeats starting at these y values (at left edge x=-200).
  // slope=0.5, W=1840 → right-edge shift = 920px.
  // Repeats start at -950 so the first stripe covers y=0 on the right side.
  const starts = [-950, -520, -90, 340, 770]

  const WIDE = 370   // primary color stripe height
  const ACC  = 34    // accent stripe height
  const WHITE = 5    // white separator height

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base fill: club dark color */}
        <rect width="1440" height="900" fill={theme.darkColor} />

        {/* Wide primary stripes */}
        {starts.map((y, i) => (
          <path key={`p${i}`} d={stripe(y, y + WIDE)} fill={theme.primaryColor} />
        ))}

        {/* Accent / secondary stripes */}
        {starts.map((y, i) => (
          <path key={`a${i}`} d={stripe(y + WIDE + 4, y + WIDE + 4 + ACC)} fill={theme.secondaryColor} />
        ))}

        {/* Thin white separator lines */}
        {starts.map((y, i) => (
          <path
            key={`w${i}`}
            d={stripe(y + WIDE + 4 + ACC + 2, y + WIDE + 4 + ACC + 2 + WHITE)}
            fill="#FFFFFF"
            opacity={0.7}
          />
        ))}

        {/* Global depth overlay: light-to-dark gradient for 3D ribbon feel */}
        <defs>
          <linearGradient id="wbg-depth" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0%"   stopColor="white" stopOpacity="0.10" />
            <stop offset="45%"  stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.20" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#wbg-depth)" />
      </svg>
    </div>
  )
}
