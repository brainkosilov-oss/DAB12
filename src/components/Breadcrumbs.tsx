import { Link } from 'react-router-dom'
import { ChevronDown } from './Icons'

interface Crumb {
  label: string
  to?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
  dark?: boolean
}

export function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className="breadcrumbs">
      <ol className={`breadcrumbs-list ${dark ? 'breadcrumbs-dark' : ''}`}>
        {items.map((item, i) => (
          <li key={i} className="breadcrumbs-item">
            {item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
            {i < items.length - 1 && <ChevronDown size={14} className="breadcrumbs-sep" />}
          </li>
        ))}
      </ol>
      <style>{`
        .breadcrumbs { padding: 24px 0; }
        .breadcrumbs-list { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
        .breadcrumbs-item { display: flex; align-items: center; gap: 4px; }
        .breadcrumbs-item a, .breadcrumbs-item span {
          font-size: 13px;
          font-weight: 500;
          color: var(--c-text-secondary);
          text-decoration: none;
          transition: color var(--t-fast);
        }
        .breadcrumbs-item a:hover { color: var(--c-text); }
        .breadcrumbs-dark .breadcrumbs-item a,
        .breadcrumbs-dark .breadcrumbs-item span { color: var(--c-text-dark-secondary); }
        .breadcrumbs-dark .breadcrumbs-item a:hover { color: var(--c-text-dark); }
        .breadcrumbs-sep { opacity: 0.5; transform: rotate(-90deg); }
      `}</style>
    </nav>
  )
}
