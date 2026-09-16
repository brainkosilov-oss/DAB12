import { Link } from 'react-router-dom'
import { Reveal } from '../../components/Reveal'
import { SectionHeader } from '../../components/SectionHeader'
import { Placeholder } from '../../components/Placeholder'
import { LeadForm } from '../../components/LeadForm/LeadForm'
import { CategoryCard } from '../../components/CategoryCard'
import { FAQ } from '../../components/FAQ'
import { categories } from '../../data/categories'
import { stats, benefits, audienceBlocks, processSteps, faq, companyInfo } from '../../data/site'
import { ArrowUpRight, ArrowRight, Phone } from '../../components/Icons'

export function Home() {
  return (
    <>
      {/* SECTION 01 — HERO */}
      <section className="hero dark">
        <div className="hero-bg">
          <Placeholder label="ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ" aspect="auto" dark />
        </div>
        <div className="container hero-content">
          <Reveal>
            <span className="label label-accent hero-label">
              ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ
              <br />
              {companyInfo.location.toUpperCase()}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="h1 hero-title">
              МЕТАЛЛ,<br />
              КОТОРЫЙ<br />
              РАБОТАЕТ.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="body-lg hero-desc">
              Изготавливаем металлоконструкции под ваши размеры.
              <br />
              Собственное производство, доставка и монтаж.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-actions">
              <Link to="/#lead-form" className="btn btn-primary">
                ПОЛУЧИТЬ РАСЧЁТ <ArrowUpRight size={18} />
              </Link>
              <a href={`tel:${companyInfo.phoneRaw}`} className="btn btn-outline-dark">
                <Phone size={16} /> ПОЗВОНИТЬ
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="hero-stats">
              {stats.map((s) => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: flex-end;
            padding: 0 0 64px;
            overflow: hidden;
          }
          .hero-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
          }
          .hero-bg .placeholder {
            border-radius: 0;
            width: 100%;
            height: 100%;
            aspect-ratio: auto;
          }
          .hero-bg .placeholder::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(11,13,15,0.4) 0%, rgba(11,13,15,0.85) 70%, rgba(11,13,15,0.95) 100%);
          }
          .hero-content {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            gap: 24px;
            padding-bottom: 0;
          }
          .hero-label { line-height: 1.6; }
          .hero-title { font-size: clamp(48px, 9vw, 96px); }
          .hero-desc { color: var(--c-text-dark-secondary); max-width: 480px; }
          .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
          .hero-stats {
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: 48px;
            margin-top: 24px;
            padding-top: 32px;
            border-top: 1px solid var(--c-border-dark);
            max-width: 600px;
          }
          .hero-stat { display: flex; flex-direction: column; gap: 4px; }
          .hero-stat-value { font-size: clamp(28px, 3.5vw, 40px); font-weight: 800; letter-spacing: -0.02em; }
          .hero-stat-label { font-size: 13px; color: var(--c-text-dark-secondary); }
          @media (max-width: 640px) {
            .hero { min-height: 90vh; }
            .hero-stats { grid-template-columns: 1fr 1fr; gap: 24px; }
          }
        `}</style>
      </section>

      {/* SECTION 02 — MARQUEE */}
      <section className="marquee-section dark">
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="marquee-group">
                <span>METAL CONSTRUCTIONS</span>
                <span className="marquee-dot" />
                <span>CUSTOM PRODUCTION</span>
                <span className="marquee-dot" />
                <span>DELIVERY</span>
                <span className="marquee-dot" />
                <span>INSTALLATION</span>
                <span className="marquee-dot" />
                <span className="marquee-accent">METLIGHT</span>
                <span className="marquee-dot" />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .marquee-section { border-top: 1px solid var(--c-border-dark); border-bottom: 1px solid var(--c-border-dark); padding: 20px 0; overflow: hidden; }
          .marquee { overflow: hidden; }
          .marquee-track {
            display: flex;
            gap: 0;
            animation: marquee 30s linear infinite;
            white-space: nowrap;
            width: max-content;
          }
          .marquee-group {
            display: flex;
            align-items: center;
            gap: 32px;
            padding-right: 32px;
          }
          .marquee-group span {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--c-text-dark-secondary);
          }
          .marquee-accent { color: var(--c-accent) !important; }
          .marquee-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--c-border-dark) !important;
            flex-shrink: 0;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none; }
          }
        `}</style>
      </section>

      {/* SECTION 03 — CATALOG */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="КАТАЛОГ"
              title="ПРОИЗВОДИМ ПОД ЗАДАЧУ"
              description="От отдельных элементов до комплексных металлоконструкций. Изготавливаем по вашим размерам, эскизам и техническим заданиям."
            />
          </Reveal>
          <Reveal delay={100}>
            <Link to="/catalog" className="btn-arrow link-arrow section-header-link" style={{ marginTop: 24, display: 'inline-flex' }}>
              СМОТРЕТЬ КАТАЛОГ <ArrowRight size={18} className="arrow" />
            </Link>
          </Reveal>
          <div className="home-cats">
            {categories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 60}>
                <CategoryCard category={cat} />
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .home-cats {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
            margin-top: 48px;
          }
          @media (max-width: 1024px) { .home-cats { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 768px) { .home-cats { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 480px) { .home-cats { grid-template-columns: 1fr; } }
          .section-header-link { color: var(--c-text); }
        `}</style>
      </section>

      {/* SECTION 04 — CUSTOM PROJECTS */}
      <section className="section dark">
        <div className="container">
          <div className="custom-projects">
            <Reveal>
              <span className="label label-accent">ИНДИВИДУАЛЬНО</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="h2 custom-projects-title">НЕ НАШЛИ НУЖНОЕ?</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="body-lg custom-projects-text">
                Изготовим нестандартную конструкцию по вашим размерам,
                <br />
                эскизу или чертежу.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link to="/#lead-form" className="btn btn-primary">
                ОБСУДИТЬ ПРОЕКТ <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
        <style>{`
          .custom-projects {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
            max-width: 700px;
          }
          .custom-projects-title { color: var(--c-text-dark); }
          .custom-projects-text { color: var(--c-text-dark-secondary); }
        `}</style>
      </section>

      {/* SECTION 05 — NUMBERS */}
      <section className="section">
        <div className="container">
          <div className="home-numbers">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="home-number">
                  <span className="home-number-value">{s.value}</span>
                  <span className="home-number-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .home-numbers {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
          .home-number {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 32px 0;
            border-top: 2px solid var(--c-text);
          }
          .home-number-value {
            font-size: clamp(48px, 7vw, 88px);
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1;
          }
          .home-number-label {
            font-size: 15px;
            color: var(--c-text-secondary);
            text-transform: lowercase;
          }
          @media (max-width: 640px) {
            .home-numbers { grid-template-columns: 1fr; gap: 0; }
          }
        `}</style>
      </section>

      {/* SECTION 06 — WORKS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              title="РЕАЛЬНЫЕ ОБЪЕКТЫ. РЕАЛЬНОЕ ПРОИЗВОДСТВО."
            />
          </Reveal>
          <Reveal delay={100}>
            <Link to="/works" className="btn-arrow link-arrow" style={{ marginTop: 24, display: 'inline-flex', color: 'var(--c-text)' }}>
              СМОТРЕТЬ ВСЕ РАБОТЫ <ArrowRight size={18} className="arrow" />
            </Link>
          </Reveal>
          <div className="home-works">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Reveal key={i} delay={i * 80}>
                <div className={`home-work home-work-${i}`}>
                  <Placeholder label={`РАБОТА ${String(i + 1).padStart(2, '0')}`} aspect={i % 3 === 0 ? '4/5' : '4/3'} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .home-works {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: auto;
            gap: 16px;
            margin-top: 48px;
          }
          .home-work-0 { grid-column: span 2; grid-row: span 2; }
          .home-work-3 { grid-column: span 2; }
          .home-work img, .home-work .placeholder { transition: transform var(--t-med); }
          .home-work:hover .placeholder { transform: scale(1.02); }
          @media (max-width: 1024px) { .home-works { grid-template-columns: repeat(2, 1fr); } .home-work-0 { grid-column: span 2; grid-row: span 1; } }
          @media (max-width: 640px) { .home-works { grid-template-columns: 1fr; } .home-work-0, .home-work-3 { grid-column: span 1; } }
        `}</style>
      </section>

      {/* SECTION 07 — BENEFITS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader label="ПРЕИМУЩЕСТВА" title="ПОЧЕМУ METLIGHT" />
          </Reveal>
          <div className="home-benefits">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="home-benefit">
                  <span className="home-benefit-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h4 home-benefit-title">{b.title}</h3>
                  <p className="body home-benefit-desc">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .home-benefits {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            margin-top: 48px;
          }
          .home-benefit {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 32px 0;
            border-top: 1px solid var(--c-border);
          }
          .home-benefit-num {
            font-size: 13px;
            font-weight: 700;
            color: var(--c-accent);
            letter-spacing: 0.1em;
          }
          .home-benefit-title { color: var(--c-text); }
          .home-benefit-desc { color: var(--c-text-secondary); }
          @media (max-width: 1024px) { .home-benefits { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 640px) { .home-benefits { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* SECTION 08 — PRODUCTION */}
      <section className="section dark">
        <div className="container">
          <div className="home-production">
            <div className="home-production-left">
              <Reveal>
                <span className="label label-accent">ПРОИЗВОДСТВО</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="h2 home-production-title">
                  СВОЁ ПРОИЗВОДСТВО.<br />ПОЛНЫЙ КОНТРОЛЬ.
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="home-production-metric">
                  <span className="home-production-metric-value">300 м²</span>
                  <span className="home-production-metric-label">собственное производство</span>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <Link to="/production" className="btn-arrow link-arrow" style={{ color: 'var(--c-text-dark)' }}>
                  О ПРОИЗВОДСТВЕ <ArrowRight size={18} className="arrow" />
                </Link>
              </Reveal>
            </div>
            <div className="home-production-right">
              <Reveal delay={200}>
                <Placeholder label="ПРОИЗВОДСТВО" aspect="4/3" dark />
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .home-production {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
          .home-production-left { display: flex; flex-direction: column; gap: 24px; }
          .home-production-title { color: var(--c-text-dark); }
          .home-production-metric {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 32px 0;
            border-top: 1px solid var(--c-border-dark);
            border-bottom: 1px solid var(--c-border-dark);
          }
          .home-production-metric-value {
            font-size: clamp(48px, 6vw, 72px);
            font-weight: 800;
            letter-spacing: -0.03em;
            color: var(--c-accent);
            line-height: 1;
          }
          .home-production-metric-label { font-size: 14px; color: var(--c-text-dark-secondary); }
          @media (max-width: 768px) { .home-production { grid-template-columns: 1fr; gap: 32px; } }
        `}</style>
      </section>

      {/* SECTION 09 — PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader label="ПРОЦЕСС" title="ОТ ЗАДАЧИ ДО ГОТОВОЙ КОНСТРУКЦИИ" />
          </Reveal>
          <div className="home-process">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 60}>
                <div className="home-process-step">
                  <span className="home-process-num">{step.num}</span>
                  <span className="home-process-name">{step.name}</span>
                  <span className="home-process-desc">{step.description}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .home-process {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 0;
            margin-top: 48px;
          }
          .home-process-step {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 24px 16px 24px 0;
            border-top: 1px solid var(--c-border);
            position: relative;
          }
          .home-process-step::after {
            content: '';
            position: absolute;
            top: -1px;
            left: 0;
            width: 24px;
            height: 1px;
            background: var(--c-text);
          }
          .home-process-step:first-child::after { width: 0; }
          .home-process-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .home-process-name { font-size: 16px; font-weight: 700; }
          .home-process-desc { font-size: 13px; color: var(--c-text-secondary); }
          @media (max-width: 1024px) {
            .home-process { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 640px) {
            .home-process { grid-template-columns: 1fr; }
            .home-process-step { padding-left: 24px; }
            .home-process-step::after { width: 1px; height: 24px; top: 0; left: 0; }
          }
        `}</style>
      </section>

      {/* SECTION 10 — AUDIENCE */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader
              label="ДЛЯ КОГО"
              title="ДЛЯ ДОМА. ДЛЯ БИЗНЕСА. ДЛЯ СТРОИТЕЛЬСТВА."
            />
          </Reveal>
          <div className="home-audience">
            {audienceBlocks.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="home-audience-block">
                  <span className="home-audience-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h3 home-audience-title">{a.title}</h3>
                  <p className="body home-audience-desc">{a.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`
          .home-audience {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 48px;
          }
          .home-audience-block {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 40px 32px;
            background: var(--c-white);
            border: 1px solid var(--c-border);
            border-radius: 16px;
            transition: border-color var(--t-fast);
          }
          .home-audience-block:hover { border-color: var(--c-text); }
          .home-audience-num { font-size: 13px; font-weight: 700; color: var(--c-accent); }
          .home-audience-title { color: var(--c-text); }
          .home-audience-desc { color: var(--c-text-secondary); }
          @media (max-width: 768px) { .home-audience { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* SECTION 11 — LEAD FORM */}
      <section className="section dark" id="lead-form">
        <div className="container">
          <div className="home-lead">
            <div className="home-lead-left">
              <Reveal>
                <span className="label label-accent">ЗАЯВКА</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="h2 home-lead-title">
                  РАССКАЖИТЕ,<br />ЧТО НУЖНО<br />ИЗГОТОВИТЬ
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="body-lg home-lead-text">
                  Пришлите размеры, фото или чертёж.
                  <br />
                  Специалист изучит задачу и свяжется с вами.
                </p>
              </Reveal>
            </div>
            <div className="home-lead-right">
              <Reveal delay={200}>
                <LeadForm variant="dark" />
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .home-lead {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: start;
          }
          .home-lead-left { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 120px; }
          .home-lead-title { color: var(--c-text-dark); }
          .home-lead-text { color: var(--c-text-dark-secondary); }
          @media (max-width: 1024px) {
            .home-lead { grid-template-columns: 1fr; gap: 32px; }
            .home-lead-left { position: static; }
          }
        `}</style>
      </section>

      {/* SECTION 12 — FAQ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeader label="ВОПРОСЫ" title="ЧАСТЫЕ ВОПРОСЫ" />
          </Reveal>
          <Reveal delay={100}>
            <div className="home-faq">
              <FAQ items={faq} />
            </div>
          </Reveal>
        </div>
        <style>{`
          .home-faq { margin-top: 48px; max-width: 800px; }
        `}</style>
      </section>

      {/* SECTION 13 — CONTACTS */}
      <section className="section dark">
        <div className="container">
          <div className="home-contacts">
            <Reveal>
              <span className="label label-accent">КОНТАКТЫ</span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="h2 home-contacts-title">
                ОБСУДИМ<br />ВАШ ПРОЕКТ
              </h2>
            </Reveal>
            <div className="home-contacts-grid">
              <Reveal delay={200}>
                <div className="home-contacts-info">
                  <a href={`tel:${companyInfo.phoneRaw}`} className="home-contact-item">
                    <span className="label">Телефон</span>
                    <span className="home-contact-value">{companyInfo.phone}</span>
                  </a>
                  <a href={`mailto:${companyInfo.email}`} className="home-contact-item">
                    <span className="label">Email</span>
                    <span className="home-contact-value">{companyInfo.email}</span>
                  </a>
                  <a href={`https://t.me/${companyInfo.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="home-contact-item">
                    <span className="label">Telegram</span>
                    <span className="home-contact-value">{companyInfo.telegram}</span>
                  </a>
                  <div className="home-contact-item">
                    <span className="label">WhatsApp</span>
                    <span className="home-contact-value">{companyInfo.whatsapp}</span>
                  </div>
                  <div className="home-contact-item">
                    <span className="label">Адрес</span>
                    <span className="home-contact-value">{companyInfo.address}</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="home-contacts-map">
                  <Placeholder label="КАРТА" aspect="4/3" dark />
                </div>
              </Reveal>
            </div>
            <Reveal delay={400}>
              <Link to="/#lead-form" className="btn btn-primary" style={{ marginTop: 32 }}>
                ПОЛУЧИТЬ РАСЧЁТ <ArrowUpRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
        <style>{`
          .home-contacts { display: flex; flex-direction: column; gap: 20px; }
          .home-contacts-title { color: var(--c-text-dark); }
          .home-contacts-grid {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 48px;
            margin-top: 16px;
          }
          .home-contacts-info { display: flex; flex-direction: column; gap: 24px; }
          .home-contact-item { display: flex; flex-direction: column; gap: 4px; transition: color var(--t-fast); }
          .home-contact-item .label { color: var(--c-text-dark-secondary); }
          .home-contact-value { font-size: 18px; font-weight: 600; color: var(--c-text-dark); }
          .home-contact-item:hover .home-contact-value { color: var(--c-accent); }
          .home-contacts-map { border-radius: 12px; overflow: hidden; }
          @media (max-width: 768px) {
            .home-contacts-grid { grid-template-columns: 1fr; gap: 32px; }
          }
        `}</style>
      </section>
    </>
  )
}
