import type { Lang } from '../config/site'
import { localePath, type PageKey } from './paths'

type Translate = (key: string) => string

// Home → section page → optional detail page
export const breadcrumbs = (t: Translate, lang: Lang, page: PageKey, detail?: { name: string; slug: string }) => {
  const sectionName = t(`nav.${page}`) === `nav.${page}` ? t(`meta.${page}.title`) : t(`nav.${page}`)
  const trail = [
    { name: t('nav.home'), path: localePath(lang) },
    { name: sectionName, path: localePath(lang, page) },
  ]
  if (detail) trail.push({ name: detail.name, path: localePath(lang, page, detail.slug) })
  return trail
}
