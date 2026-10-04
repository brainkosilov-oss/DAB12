import { useEffect } from 'react'

export function JsonLd({ data }: { data: object | object[] }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    script.setAttribute('data-jsonld', 'dynamic')
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

import { companyInfo } from '../data/site'
import { categories } from '../data/categories'
import { serviceCategories } from '../data/serviceCategories'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyInfo.name,
    telephone: companyInfo.phoneRaw,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. 2-я Пролетарская',
      addressLocality: 'Верхняя Пышма',
      addressRegion: 'Свердловская область',
      addressCountry: 'RU',
    },
    areaServed: 'Россия',
    description: 'Производство металлоконструкций: навесы, ворота, заборы, лестницы, перила, беседки. Екатеринбург.',
  }
}

export function buildFAQSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `https://строительные-решения.рф${item.path}`,
    })),
  }
}

export const SITE_URL = 'https://строительные-решения.рф'

export function buildSitemapUrls() {
  const staticUrls = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/catalog', priority: '0.9', changefreq: 'weekly' },
    { path: '/works', priority: '0.8', changefreq: 'monthly' },
    { path: '/production', priority: '0.7', changefreq: 'monthly' },
    { path: '/about', priority: '0.6', changefreq: 'monthly' },
    { path: '/services', priority: '0.9', changefreq: 'weekly' },
    { path: '/delivery-installation', priority: '0.7', changefreq: 'monthly' },
    { path: '/documents', priority: '0.5', changefreq: 'monthly' },
    { path: '/contacts', priority: '0.8', changefreq: 'monthly' },
  ]

  const categoryUrls = categories.map((c) => ({
    path: `/catalog/${c.slug}`,
    priority: '0.8',
    changefreq: 'weekly',
  }))

  const serviceUrls = serviceCategories.map((s) => ({
    path: `/services/${s.slug}`,
    priority: '0.8',
    changefreq: 'weekly',
  }))

  return [...staticUrls, ...categoryUrls, ...serviceUrls]
}
