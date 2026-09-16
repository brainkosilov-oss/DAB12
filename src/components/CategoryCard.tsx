import { Link } from 'react-router-dom'
import type { Category } from '../data/types'
import { Placeholder } from './Placeholder'
import { ArrowUpRight } from './Icons'

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={`/catalog/${category.slug}`} className="cat-card">
      <div className="cat-card-image">
        <Placeholder label={category.shortName.toUpperCase()} aspect="3/4" />
      </div>
      <div className="cat-card-info">
        <div className="cat-card-header">
          <span className="cat-card-num">{category.id}</span>
          <ArrowUpRight size={18} className="cat-card-arrow" />
        </div>
        <h3 className="cat-card-title">{category.shortName}</h3>
      </div>
      <style>{`
        .cat-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: transform var(--t-med);
        }
        .cat-card:hover { transform: translateY(-4px); }
        .cat-card-image {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }
        .cat-card-image .placeholder {
          transition: transform var(--t-med);
        }
        .cat-card:hover .cat-card-image .placeholder {
          transform: scale(1.04);
        }
        .cat-card-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .cat-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cat-card-num {
          font-size: 11px;
          font-weight: 600;
          color: var(--c-text-secondary);
          letter-spacing: 0.1em;
        }
        .cat-card-arrow {
          color: var(--c-text-secondary);
          transition: transform var(--t-fast), color var(--t-fast);
        }
        .cat-card:hover .cat-card-arrow {
          color: var(--c-accent);
          transform: translate(2px, -2px);
        }
        .cat-card-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--c-text);
        }
      `}</style>
    </Link>
  )
}
