export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
    >
      <path d="M15 4h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function HorseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="currentColor"
      className={className}
    >
      {/* Left ear */}
      <path d="M 95 75 Q 85 50 82 35 Q 80 28 90 38 Q 100 55 98 78 Z" fillOpacity="0.9" />

      {/* Right ear */}
      <path d="M 115 70 Q 125 45 130 28 Q 132 20 122 32 Q 110 55 112 76 Z" fillOpacity="0.9" />

      {/* Head profile */}
      <path d="M 85 90 Q 80 100 82 120 Q 85 140 95 155 L 105 160 Q 110 155 112 145 Q 115 125 118 110 Q 120 95 115 80 Q 108 70 100 68 Q 92 68 85 90 Z" />

      {/* Muzzle/Jaw */}
      <path d="M 95 155 Q 92 170 88 185 Q 86 195 82 205 L 102 208 Q 108 195 110 180 Q 112 165 107 160 Z" />

      {/* Nose line */}
      <line x1="92" y1="160" x2="88" y2="195" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      {/* Nostril */}
      <circle cx="86" cy="188" r="2.5" />

      {/* Eye - large and expressive */}
      <circle cx="110" cy="105" r="4.5" />
      <circle cx="111" cy="104" r="1.8" fill="white" />

      {/* Mane - thick flowing strokes */}
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Mane stroke 1 - top */}
        <path d="M 92 72 Q 88 55 90 35 Q 92 20 100 42" strokeWidth="4" />

        {/* Mane stroke 2 */}
        <path d="M 98 70 Q 96 50 100 28 Q 103 15 108 45" strokeWidth="4" />

        {/* Mane stroke 3 */}
        <path d="M 105 72 Q 105 50 110 25 Q 113 12 118 48" strokeWidth="4" />

        {/* Mane stroke 4 */}
        <path d="M 112 78 Q 115 55 120 32 Q 123 20 127 55" strokeWidth="4" />

        {/* Neck mane continuation */}
        <path d="M 115 95 Q 120 75 125 45 Q 128 30 132 65" strokeWidth="3.5" />

        <path d="M 117 110 Q 125 95 130 65 Q 133 48 135 80" strokeWidth="3.5" />
      </g>

      {/* Tail - flowing with multiple curves */}
      <g stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Tail flow 1 */}
        <path d="M 118 130 Q 140 118 165 105 Q 185 95 200 110" strokeWidth="4.5" />

        {/* Tail flow 2 */}
        <path d="M 120 145 Q 150 140 180 135 Q 200 132 215 155" strokeWidth="4.5" />

        {/* Tail flow 3 */}
        <path d="M 121 160 Q 155 165 185 170 Q 205 172 220 195" strokeWidth="4" />

        {/* Tail flow 4 */}
        <path d="M 120 175 Q 150 185 180 195 Q 205 205 222 228" strokeWidth="4" />

        {/* Tail flow 5 */}
        <path d="M 118 190 Q 145 205 175 220 Q 200 230 225 255" strokeWidth="3.5" />
      </g>

      {/* Neck line definition */}
      <g stroke="currentColor" fill="none" strokeWidth="2.5" strokeLinecap="round">
        <path d="M 106 155 Q 115 170 120 190" />
        <path d="M 102 160 Q 108 175 110 195" />
      </g>
    </svg>
  );
}
