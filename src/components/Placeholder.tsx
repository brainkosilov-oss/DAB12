interface PlaceholderProps {
  label?: string
  aspect?: string
  dark?: boolean
  className?: string
}

export function Placeholder({ label = 'ФОТО', aspect = '4/3', dark = false, className = '' }: PlaceholderProps) {
  return (
    <div
      className={`placeholder ${dark ? 'placeholder-dark' : ''} ${className}`}
      style={{ aspectRatio: aspect }}
      aria-label={`Изображение: ${label}`}
      role="img"
    >
      <div className="placeholder-inner">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{label}</span>
      </div>
      <style>{`
        .placeholder {
          width: 100%;
          background: ${dark ? '#1a1e22' : '#e8e9e7'};
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .placeholder-dark { background: #1a1e22; }
        .placeholder-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: ${dark ? '#3a3e43' : '#b8bbbd'};
        }
        .placeholder-inner span {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
