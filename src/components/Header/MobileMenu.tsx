import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { companyInfo } from '../../data/site'
import { Close, Phone, ArrowUpRight } from '../Icons'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const navItems = [
    { label: 'Работы', to: '/works' },
    { label: 'Производство', to: '/production' },
    { label: 'О компании', to: '/about' },
    { label: 'Услуги', to: '/services' },
    { label: 'Доставка и монтаж', to: '/delivery-installation' },
    { label: 'Документы', to: '/documents' },
    { label: 'Контакты', to: '/contacts' },
  ]

  return (
    <>
      <div className={`mobile-menu-overlay ${open ? 'open' : ''}`} onClick={onClose} aria-hidden="true" />
      <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-logo">METLIGHT</span>
          <button onClick={onClose} aria-label="Закрыть меню" className="mobile-menu-close">
            <Close size={24} />
          </button>
        </div>
        <div className="mobile-menu-body">
          <div className="mobile-menu-section">
            <span className="label mobile-menu-label">Каталог</span>
            <div className="mobile-menu-cats">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/catalog/${cat.slug}`} className="mobile-menu-cat" onClick={onClose}>
                  {cat.shortName}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </div>
          <div className="mobile-menu-section">
            <nav className="mobile-menu-nav">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="mobile-menu-nav-link" onClick={onClose}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mobile-menu-section">
            <a href={`tel:${companyInfo.phoneRaw}`} className="mobile-menu-phone">
              <Phone size={18} />
              {companyInfo.phone}
            </a>
            <Link to="/#lead-form" className="btn btn-primary mobile-menu-cta" onClick={onClose}>
              ПОЛУЧИТЬ РАСЧЁТ <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 200;
          opacity: 0;
          visibility: hidden;
          transition: opacity var(--t-med), visibility var(--t-med);
        }
        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(380px, 88vw);
          background: var(--c-primary-dark);
          color: var(--c-text-dark);
          z-index: 201;
          transform: translateX(100%);
          transition: transform var(--t-med);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--c-border-dark);
          flex-shrink: 0;
        }
        .mobile-menu-logo {
          font-size: 20px;
          font-weight: 800;
        }
        .mobile-menu-close {
          color: var(--c-text-dark);
          padding: 4px;
        }
        .mobile-menu-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          flex: 1;
        }
        .mobile-menu-label {
          color: var(--c-accent);
          margin-bottom: 12px;
          display: block;
        }
        .mobile-menu-cats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .mobile-menu-cat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          font-size: 15px;
          font-weight: 600;
          color: var(--c-text-dark-secondary);
          border-bottom: 1px solid var(--c-border-dark);
          transition: color var(--t-fast);
        }
        .mobile-menu-cat:hover { color: var(--c-accent); }
        .mobile-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .mobile-menu-nav-link {
          font-size: 16px;
          font-weight: 500;
          color: var(--c-text-dark);
          padding: 12px 0;
          border-bottom: 1px solid var(--c-border-dark);
        }
        .mobile-menu-phone {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 700;
          color: var(--c-text-dark);
          margin-bottom: 16px;
        }
        .mobile-menu-cta {
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </>
  )
}
