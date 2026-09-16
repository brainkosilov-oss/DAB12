import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { companyInfo } from '../../data/site'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { ChevronDown, Menu, Phone } from '../Icons'
import { MegaMenu } from './MegaMenu'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const scrolled = useScrollPosition(10)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openMega = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setMegaOpen(true)
  }
  const closeMega = () => {
    hoverTimer.current = setTimeout(() => setMegaOpen(false), 150)
  }

  const navItems = [
    { label: 'Каталог', action: 'mega', to: '/catalog' },
    { label: 'Работы', to: '/works' },
    { label: 'Производство', to: '/production' },
    { label: 'О компании', to: '/about' },
    { label: 'Контакты', to: '/contacts' },
  ]

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${megaOpen ? 'mega-open' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="header-logo" aria-label="METLIGHT">
            METLIGHT
          </Link>

          <nav className="header-nav" aria-label="Главная навигация">
            {navItems.map((item) =>
              item.action === 'mega' ? (
                <div
                  key={item.label}
                  className="header-nav-item header-nav-mega"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                >
                  <Link
                    to={item.to!}
                    className="header-nav-link"
                    aria-expanded={megaOpen}
                  >
                    {item.label}
                    <ChevronDown size={14} className="header-nav-chevron" />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={`header-nav-link ${location.pathname === item.to ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="header-actions">
            <a href={`tel:${companyInfo.phoneRaw}`} className="header-phone">
              <Phone size={16} />
              <span>{companyInfo.phone}</span>
            </a>
            <Link to="/#lead-form" className="btn btn-primary header-cta">
              РАССЧИТАТЬ
            </Link>
            <button
              className="header-burger"
              onClick={() => setMobileOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        <MegaMenu open={megaOpen} onClose={closeMega} onEnter={openMega} />
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: var(--header-h);
          background: var(--c-primary-dark);
          color: var(--c-text-dark);
          transition: height var(--t-med), background var(--t-med), border-color var(--t-med);
          border-bottom: 1px solid transparent;
        }
        .site-header.scrolled {
          height: var(--header-h-scrolled);
          background: rgba(11, 13, 15, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--c-border-dark);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 24px;
        }
        .header-logo {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--c-text-dark);
          flex-shrink: 0;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .header-nav-item { position: relative; }
        .header-nav-link {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 500;
          color: var(--c-text-dark-secondary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-radius: 6px;
          transition: color var(--t-fast);
        }
        .header-nav-link:hover, .header-nav-link.active {
          color: var(--c-text-dark);
        }
        .header-nav-chevron {
          transition: transform var(--t-fast);
        }
        .header-nav-mega:hover .header-nav-chevron {
          transform: rotate(180deg);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .header-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--c-text-dark);
          transition: opacity var(--t-fast);
        }
        .header-phone:hover { opacity: 0.75; }
        .header-cta {
          padding: 12px 22px;
          font-size: 13px;
        }
        .header-burger {
          display: none;
          color: var(--c-text-dark);
          padding: 8px;
          border-radius: 6px;
        }
        @media (max-width: 1024px) {
          .header-nav, .header-phone, .header-cta { display: none; }
          .header-burger { display: block; }
        }
      `}</style>
    </>
  )
}
