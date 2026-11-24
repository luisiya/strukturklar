import { createContext, useContext, useEffect } from 'react'
import { DEFAULT_LANG, PUBLISHED_LANGUAGES, site, type Lang } from '../config/site'
import { switchLangPath } from './paths'

export interface SeoProps {
  lang: Lang
  path: string
  title: string
  description: string
  // Published languages this page exists in; defaults to all published ones
  languages?: Lang[]
  type?: 'website' | 'article'
  breadcrumbs?: { name: string; path: string }[]
  jsonLd?: object[]
  // Home page title is already complete and gets no " – StrukturKlar" suffix
  fullTitle?: boolean
  noindex?: boolean
}

export interface Head {
  title: string
  tags: string
}

const OG_LOCALE: Record<Lang, string> = { de: 'de_DE', en: 'en_GB', ru: 'ru_RU', uk: 'uk_UA' }

export const absoluteUrl = (path: string) => site.url + path

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const buildHead = (p: SeoProps): Head => {
  const languages = p.languages ?? PUBLISHED_LANGUAGES
  const canonicalLang = languages.includes(p.lang) ? p.lang : DEFAULT_LANG
  const canonical = absoluteUrl(switchLangPath(p.path, canonicalLang))
  const title = p.fullTitle ? p.title : `${p.title} – ${site.name}`
  const image = absoluteUrl(site.ogImage)

  const meta = (attr: 'name' | 'property', key: string, content: string) =>
    `<meta ${attr}="${key}" content="${escape(content)}" data-seo>`
  const link = (rel: string, href: string, hreflang?: string) =>
    `<link rel="${rel}"${hreflang ? ` hreflang="${hreflang}"` : ''} href="${escape(href)}" data-seo>`

  const jsonLd = [...(p.jsonLd ?? [])]
  if (p.breadcrumbs?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: p.breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: absoluteUrl(b.path),
      })),
    })
  }

  const indexing = p.noindex || site.noindex
    ? [meta('name', 'robots', 'noindex')]
    : [
        link('canonical', canonical),
        ...languages.map((l) => link('alternate', absoluteUrl(switchLangPath(p.path, l)), l)),
        link('alternate', absoluteUrl(switchLangPath(p.path, DEFAULT_LANG)), 'x-default'),
      ]

  const tags = [
    meta('name', 'description', p.description),
    ...indexing,
    meta('property', 'og:type', p.type ?? 'website'),
    meta('property', 'og:site_name', site.name),
    meta('property', 'og:title', title),
    meta('property', 'og:description', p.description),
    meta('property', 'og:url', canonical),
    meta('property', 'og:image', image),
    meta('property', 'og:locale', OG_LOCALE[canonicalLang]),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', p.description),
    meta('name', 'twitter:image', image),
    ...jsonLd.map(
      (data) => `<script type="application/ld+json" data-seo>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`,
    ),
  ].join('\n    ')

  return { title, tags }
}

// During prerendering the page writes its head here; in the browser it is applied on navigation.
export const HeadCollector = createContext<{ head?: Head } | null>(null)

export const Seo = (props: SeoProps) => {
  const collector = useContext(HeadCollector)
  const head = buildHead(props)
  if (collector) collector.head = head

  useEffect(() => {
    document.title = head.title
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove())
    const template = document.createElement('template')
    template.innerHTML = head.tags
    document.head.append(template.content)
  }, [head.title, head.tags])

  return null
}

const person = {
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.person.name,
  email: `mailto:${site.person.email}`,
  address: { '@type': 'PostalAddress', addressLocality: site.person.city, addressCountry: 'DE' },
  knowsLanguage: ['de', 'en', 'uk', 'ru'],
  sameAs: site.social.map((s) => s.url).filter(Boolean),
}

export const personSchema = { '@context': 'https://schema.org', ...person }

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: absoluteUrl('/favicon.svg'),
  email: `mailto:${site.person.email}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: 'DE',
  },
  founder: { '@id': person['@id'] },
  sameAs: site.social.map((s) => s.url).filter(Boolean),
}
