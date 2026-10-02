import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { companyInfo } from '../../data/site'
import { Phone, ArrowUpRight } from '../Icons'

export function FloatingCTA() {
  const scrolled = useScrollPosition(400)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (scrolled) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [scrolled])

  return (
    <>
      {/* Mobile bottom action bar */}
      <div className={`mobile-bar ${visible ? 'show' : ''}`}>
        <a href={`tel:${companyInfo.phoneRaw}`} className="mobile-bar-call">
          <Phone size={18} />
          <span>ПОЗВОНИТЬ</span>
        </a>
        <Link to="/#lead-form" className="mobile-bar-cta">
          <span>РАССЧИТАТЬ ПРОЕКТ</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <style>{`
        .mobile-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 90;
          display: none;
          gap: 8px;
          padding: 8px 8px max(8px, env(safe-area-inset-bottom)) 8px;
          background: rgba(44, 44, 46, 0.94);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid var(--c-border-dark);
          opacity: 0;
          transform: translateY(100%);
          transition: opacity var(--t-med), transform var(--t-med);
        }
        .mobile-bar.show {
          opacity: 1;
          transform: translateY(0);
        }
        .mobile-bar-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          border: 1px solid var(--c-border-dark);
          border-radius: 10px;
          color: var(--c-text-dark);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          flex: 0 0 auto;
        }
        .mobile-bar-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          background: var(--c-accent);
          color: var(--c-primary-dark);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-radius: 10px;
          flex: 1;
        }
        @media (max-width: 1024px) {
          .mobile-bar { display: flex; }
        }
      `}</style>
    </>
  )
}
