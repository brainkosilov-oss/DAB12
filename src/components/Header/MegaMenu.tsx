import { Link } from 'react-router-dom'
import { ArrowRight } from '../Icons'

interface MegaMenuItem {
  id: string
  shortName: string
  slug: string
}

interface MegaMenuProps {
  open: boolean
  onClose: () => void
  onEnter: () => void
  items: MegaMenuItem[]
  basePath: string
  allLinkText: string
}

export function MegaMenu({ open, onClose, onEnter, items, basePath, allLinkText }: MegaMenuProps) {
  return (
    <div
      className={`mega-menu ${open ? 'open' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onClose}
      aria-hidden={!open}
    >
      <div className="container">
        <div className="mega-menu-grid">
          <div className="mega-menu-cats">
            {items.map((cat) => (
              <Link
                key={cat.id}
                to={`${basePath}/${cat.slug}`}
                className="mega-menu-cat"
                onClick={onClose}
              >
                <span className="mega-menu-cat-num">{cat.id}</span>
                <span className="mega-menu-cat-name">{cat.shortName}</span>
                <ArrowRight size={16} className="mega-menu-cat-arrow" />
              </Link>
            ))}
          </div>
          <Link to={basePath} className="mega-menu-all" onClick={onClose}>
            <span>{allLinkText}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <style>{`
        .mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--c-dark-surface);
          border-bottom: 1px solid var(--c-border-dark);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: opacity var(--t-fast), transform var(--t-fast), visibility var(--t-fast);
          pointer-events: none;
        }
        .mega-menu::before {
          content: '';
          position: absolute;
          top: -16px;
          left: 0;
          right: 0;
          height: 16px;
        }
        .mega-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .mega-menu-grid {
          padding: 32px 0 40px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: end;
        }
        .mega-menu-cats {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 4px 24px;
        }
        .mega-menu-cat {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          color: var(--c-text-dark-secondary);
          transition: color var(--t-fast);
          border-bottom: 1px solid transparent;
        }
        .mega-menu-cat:hover {
          color: var(--c-accent);
        }
        .mega-menu-cat-num {
          font-size: 11px;
          font-weight: 600;
          color: var(--c-text-dark-secondary);
          opacity: 0.5;
          min-width: 18px;
        }
        .mega-menu-cat-name {
          font-size: 15px;
          font-weight: 600;
          flex: 1;
        }
        .mega-menu-cat-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity var(--t-fast), transform var(--t-fast);
        }
        .mega-menu-cat:hover .mega-menu-cat-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .mega-menu-all {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--c-text-dark);
          padding: 16px 24px;
          border: 1px solid var(--c-border-dark);
          border-radius: 8px;
          transition: all var(--t-fast);
          white-space: nowrap;
        }
        .mega-menu-all:hover {
          background: var(--c-accent);
          color: var(--c-primary-dark);
          border-color: var(--c-accent);
        }
        @media (max-width: 1024px) {
          .mega-menu { display: none; }
        }
        @media (max-width: 768px) {
          .mega-menu-cats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  )
}
