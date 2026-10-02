import { useEffect } from 'react'

interface SEOOptions {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useSEO({ title, description, keywords, canonical, ogImage }: SEOOptions) {
  useEffect(() => {
    document.title = title

    setMeta('name', 'description', description)

    if (keywords && keywords.length) {
      setMeta('name', 'keywords', keywords.join(', '))
    } else {
      const el = document.head.querySelector<HTMLMetaElement>('meta[name="keywords"]')
      if (el) el.remove()
    }

    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)

    if (canonical) {
      setLink('canonical', canonical)
    } else {
      const el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (el) el.remove()
    }

    if (ogImage) {
      setMeta('property', 'og:image', ogImage)
      setMeta('name', 'twitter:image', ogImage)
    }
  }, [title, description, keywords, canonical, ogImage])
}
