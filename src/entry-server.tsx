import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { HeadCollector, type Head } from './lib/seo'
import { LANGUAGES, PUBLISHED_LANGUAGES, site, type Lang } from './config/site'
import { PAGES, localePath, type PageKey } from './lib/paths'
import { contentSlugs, getArticle, getModel, getProject } from './content'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export const render = (url: string) => {
  const collector: { head?: Head } = {}
  const html = renderToString(
    <StrictMode>
      <HeadCollector.Provider value={collector}>
        <StaticRouter location={basename + url} basename={basename}>
          <App />
        </StaticRouter>
      </HeadCollector.Provider>
    </StrictMode>,
  )
  return { html, head: collector.head }
}

type Getter = (slug: string, lang: Lang) => { fallback: boolean } | undefined

const detailPages: [PageKey, () => string[], Getter][] = [
  ['projects', contentSlugs.projects, getProject],
  ['models', contentSlugs.models, getModel],
  ['workshop', contentSlugs.articles, getArticle],
]

// Every page in every language; `indexed` marks the ones that belong in the sitemap.
export const routes = () =>
  LANGUAGES.flatMap((lang) => {
    const indexed = PUBLISHED_LANGUAGES.includes(lang)
    const pages = (Object.keys(PAGES) as PageKey[]).map((page) => ({ path: localePath(lang, page), lang, indexed }))
    const details = detailPages.flatMap(([page, slugs, get]) =>
      slugs().map((slug) => ({
        path: localePath(lang, page, slug),
        lang,
        // A detail page only counts for a language it is actually written in
        indexed: indexed && !get(slug, lang)?.fallback,
      })),
    )
    return [...pages, ...details]
  })

export const siteUrl = site.url
