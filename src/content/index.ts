import { DEFAULT_LANG, PUBLISHED_LANGUAGES, type Lang } from '../config/site'
import type { Article, Model, Project } from './types'
import content from 'virtual:content'

// Every file is named <slug>.<lang>.json; adding a file adds the page.
type Entry = { slug: string; lang: string }

// The CMS saves untouched optional fields as "", [] or {}; treat those as missing.
const clean = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    const list = value.map(clean).filter((v) => v !== undefined)
    return list.length ? list : undefined
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([k, v]) => [k, clean(v)] as const)
      .filter(([, v]) => v !== undefined)
    return entries.length ? Object.fromEntries(entries) : undefined
  }
  return value === '' || value === null ? undefined : value
}

// Only published entries arrive here; drafts are filtered at build time (vite.config.ts).
const collect = <T extends Entry>(entries: unknown[]): T[] =>
  entries.map((entry) => ({ sections: {}, ...(clean(entry) as object) }) as unknown as T)

const projects = collect<Project>(content.projects)
const models = collect<Model>(content.models)
const articles = collect<Article>(content.articles)

export interface Localized<T> {
  item: T
  // True when the requested language is missing and German is shown instead
  fallback: boolean
  // Published languages this item exists in, for hreflang
  languages: Lang[]
}

const localize = <T extends Entry>(all: T[], slug: string, lang: Lang): Localized<T> | undefined => {
  const variants = all.filter((e) => e.slug === slug)
  const item = variants.find((e) => e.lang === lang) ?? variants.find((e) => e.lang === DEFAULT_LANG)
  if (!item) return undefined
  const languages = PUBLISHED_LANGUAGES.filter((l) => variants.some((e) => e.lang === l))
  return { item, fallback: item.lang !== lang, languages }
}

const slugs = (all: Entry[]) => [...new Set(all.map((e) => e.slug))]

const list = <T extends Entry>(all: T[], lang: Lang) =>
  slugs(all).map((slug) => localize(all, slug, lang)!.item)

export const getProjects = (lang: Lang) => list(projects, lang).sort((a, b) => a.order - b.order)
// Home page shows projects marked "featured"; without any, all projects
export const getFeaturedProjects = (lang: Lang) => {
  const all = getProjects(lang)
  const featured = all.filter((p) => p.featured)
  return featured.length ? featured : all
}
export const getProject = (slug: string, lang: Lang) => localize(projects, slug, lang)

export const getModels = (lang: Lang) => list(models, lang).sort((a, b) => a.order - b.order)
export const getModel = (slug: string, lang: Lang) => localize(models, slug, lang)
export const hasModelPage = (model: Model) => !!model.sections && Object.keys(model.sections).length > 0

export const getArticles = (lang: Lang) =>
  list(articles, lang).sort((a, b) => b.date.localeCompare(a.date) || (a.order ?? 0) - (b.order ?? 0))
export const getArticle = (slug: string, lang: Lang) => localize(articles, slug, lang)

export const contentSlugs = {
  projects: () => slugs(projects),
  models: () => slugs(models.filter(hasModelPage)),
  articles: () => slugs(articles),
}
