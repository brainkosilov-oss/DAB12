import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal'
import { CategoryCard } from '../../components/CategoryCard'
import { Search, ArrowRight } from '../../components/Icons'
import { searchCategories } from '../../data/categories'

export function Catalog() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchCategories(query), [query])

  return (
    <div className="catalog-page">
      <section className="catalog-hero dark">
        <div className="container">
          <Reveal>
            <span className="label label-accent">КАТАЛОГ</span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 catalog-hero-title">Металлоконструкции<br />под ваши задачи и размеры.</h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="catalog-search">
              <Search size={20} className="catalog-search-icon" />
              <input
                type="text"
                placeholder="Что вы хотите изготовить?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Поиск по каталогу"
              />
              {query && (
                <button onClick={() => setQuery('')} className="catalog-search-clear" aria-label="Очистить">×</button>
              )}
            </div>
          </Reveal>
        </div>
        <style>{`
          .catalog-hero { padding: 140px 0 48px; }
          .catalog-hero-title { margin-top: 16px; color: var(--c-text-dark); }
          .catalog-search {
            margin-top: 32px;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 0 20px;
            background: var(--c-dark-surface);
            border: 1px solid var(--c-border-dark);
            border-radius: 12px;
            max-width: 560px;
            transition: border-color var(--t-fast);
          }
          .catalog-search:focus-within { border-color: var(--c-accent); }
          .catalog-search-icon { color: var(--c-text-dark-secondary); flex-shrink: 0; }
          .catalog-search input {
            flex: 1;
            padding: 18px 0;
            background: none;
            border: none;
            color: var(--c-text-dark);
            font-size: 16px;
            outline: none;
          }
          .catalog-search input::placeholder { color: var(--c-text-dark-secondary); }
          .catalog-search-clear {
            color: var(--c-text-dark-secondary);
            font-size: 24px;
            padding: 4px 8px;
            transition: color var(--t-fast);
          }
          .catalog-search-clear:hover { color: var(--c-text-dark); }
        `}</style>
      </section>

      <section className="section">
        <div className="container">
          {results.length === 0 ? (
            <div className="catalog-empty">
              <p className="body-lg">Ничего не найдено по запросу «{query}».</p>
              <Link to="/#lead-form" className="btn btn-dark" style={{ marginTop: 16 }}>
                ПОЛУЧИТЬ РАСЧЁТ <ArrowRight size={18} />
              </Link>
            </div>
          ) : (
            <>
              <div className="catalog-grid">
                {results.map((cat, i) => (
                  <Reveal key={cat.id} delay={i * 50}>
                    <CategoryCard category={cat} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
        <style>{`
          .catalog-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
          }
          .catalog-empty {
            text-align: center;
            padding: 80px 0;
            color: var(--c-text-secondary);
          }
          @media (max-width: 1024px) { .catalog-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 768px) { .catalog-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 480px) { .catalog-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>
    </div>
  )
}
