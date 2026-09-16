export interface Category {
  id: string
  name: string
  shortName: string
  slug: string
  description: string
  heroDescription: string
  keywords: string[]
  productTypes: ProductType[]
  faq: { q: string; a: string }[]
}

export interface ProductType {
  id: string
  name: string
  slug: string
  description: string
  characteristics: string[]
  dimensions: string
  weight: string
  material: string
  coating: string
  priceLabel: string
  keywords: string[]
}

export interface Work {
  id: string
  title: string
  category: string
  tab: string
  description: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface Service {
  id: string
  name: string
  description: string
}
