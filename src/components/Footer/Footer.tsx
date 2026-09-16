import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { companyInfo } from '../../data/site'
import { Phone, Mail, MapPin, Send } from '../Icons'

export function Footer() {
  const navLinks = [
    { label: 'Каталог', to: '/catalog' },
    { label: 'Работы', to: '/works' },
    { label: 'Производство', to: '/production' },
    { label: 'О компании', to: '/about' },
    { label: 'Услуги', to: '/services' },
    { label: 'Доставка и монтаж', to: '/delivery-installation' },
    { label: 'Документы', to: '/documents' },
    { label: 'Контакты', to: '/contacts' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">METLIGHT</Link>
            <p className="footer-tagline body-sm">Производство металлоконструкций</p>
            <p className="footer-loc body-sm">{companyInfo.location}</p>
          </div>

          <div className="footer-col">
            <span className="label footer-col-label">Каталог</span>
            <ul className="footer-links">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/catalog/${cat.slug}`}>{cat.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="label footer-col-label">Навигация</span>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="label footer-col-label">Контакты</span>
            <ul className="footer-contacts">
              <li>
                <a href={`tel:${companyInfo.phoneRaw}`} className="footer-contact-item">
                  <Phone size={16} />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${companyInfo.email}`} className="footer-contact-item">
                  <Mail size={16} />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`https://t.me/${companyInfo.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                  <Send size={16} />
                  <span>{companyInfo.telegram}</span>
                </a>
              </li>
              <li className="footer-contact-item footer-contact-addr">
                <MapPin size={16} />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy">Политика конфиденциальности</Link>
            <Link to="/consent">Согласие на обработку персональных данных</Link>
          </div>
          <span className="footer-copy body-sm">© {new Date().getFullYear()} METLIGHT</span>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--c-primary-dark);
          color: var(--c-text-dark);
          padding: 80px 0 32px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--c-border-dark);
        }
        .footer-logo {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--c-text-dark);
        }
        .footer-tagline {
          color: var(--c-text-dark);
          margin-top: 12px;
          font-weight: 500;
        }
        .footer-loc {
          color: var(--c-text-dark-secondary);
          margin-top: 4px;
        }
        .footer-col-label {
          color: var(--c-text-dark-secondary);
          margin-bottom: 16px;
          display: block;
        }
        .footer-links li a {
          font-size: 14px;
          color: var(--c-text-dark-secondary);
          transition: color var(--t-fast);
          line-height: 2.1;
        }
        .footer-links li a:hover { color: var(--c-accent); }
        .footer-contacts li { margin-bottom: 12px; }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--c-text-dark-secondary);
          transition: color var(--t-fast);
        }
        .footer-contact-item:hover { color: var(--c-text-dark); }
        .footer-contact-addr { opacity: 0.7; }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 32px;
        }
        .footer-legal {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-legal a {
          font-size: 13px;
          color: var(--c-text-dark-secondary);
          transition: color var(--t-fast);
        }
        .footer-legal a:hover { color: var(--c-text-dark); }
        .footer-copy { color: var(--c-text-dark-secondary); }
        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 640px) {
          .footer-top { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
