export function SystemsStackHero({ className = '' }) {
  return (
    <svg
      viewBox="0 0 460 460"
      className={`float-slow ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* connecting line */}
      <line x1="230" y1="70" x2="230" y2="390" stroke="#4453C4" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.5" />

      {/* DATA panel (back, brass) */}
      <g transform="translate(60, 260)">
        <rect x="0" y="0" width="340" height="110" rx="14" fill="#14162B" opacity="0.04" />
        <rect x="0" y="0" width="340" height="110" rx="14" fill="none" stroke="#C98A2B" strokeWidth="1.5" />
        <rect x="0" y="0" width="340" height="110" rx="14" fill="#C98A2B" opacity="0.06" />
        <text x="24" y="34" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2" fill="#A66F1E" fontWeight="600">DATA</text>
        <rect x="24" y="52" width="180" height="8" rx="4" fill="#C98A2B" opacity="0.35" />
        <rect x="24" y="70" width="120" height="8" rx="4" fill="#C98A2B" opacity="0.25" />
        <rect x="24" y="88" width="150" height="8" rx="4" fill="#C98A2B" opacity="0.18" />
      </g>

      {/* LOGIC panel (middle, ink) */}
      <g transform="translate(40, 155)">
        <rect x="0" y="0" width="340" height="110" rx="14" fill="#14162B" opacity="0.9" />
        <rect x="0" y="0" width="340" height="110" rx="14" fill="none" stroke="#14162B" strokeWidth="1.5" />
        <text x="24" y="34" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2" fill="#E9EAFB" fontWeight="600">LOGIC</text>
        <rect x="24" y="52" width="160" height="8" rx="4" fill="#4453C4" opacity="0.8" />
        <rect x="24" y="70" width="200" height="8" rx="4" fill="#4453C4" opacity="0.55" />
        <rect x="24" y="88" width="110" height="8" rx="4" fill="#4453C4" opacity="0.4" />
      </g>

      {/* INTERFACE panel (front, surface) */}
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="340" height="110" rx="14" fill="#FFFFFF" stroke="#E3E5EE" strokeWidth="1.5" />
        <text x="24" y="34" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2" fill="#4453C4" fontWeight="600">INTERFACE</text>
        <rect x="24" y="52" width="140" height="8" rx="4" fill="#14162B" opacity="0.12" />
        <rect x="24" y="70" width="220" height="8" rx="4" fill="#14162B" opacity="0.08" />
        <circle cx="300" cy="30" r="6" fill="#C98A2B" />
      </g>

      {/* connection dots */}
      <circle cx="230" cy="160" r="4" fill="#4453C4" />
      <circle cx="230" cy="265" r="4" fill="#4453C4" />
    </svg>
  )
}

export function SystemsStackMark({ className = '' }) {
  return (
    <svg viewBox="0 0 60 44" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="0" width="44" height="12" rx="3" fill="#FFFFFF" stroke="#E3E5EE" strokeWidth="1.2" />
      <rect x="4" y="16" width="44" height="12" rx="3" fill="#14162B" />
      <rect x="10" y="32" width="44" height="12" rx="3" fill="none" stroke="#C98A2B" strokeWidth="1.2" />
      <line x1="30" y1="12" x2="30" y2="16" stroke="#4453C4" strokeWidth="1" />
      <line x1="26" y1="28" x2="26" y2="32" stroke="#4453C4" strokeWidth="1" />
    </svg>
  )
}
