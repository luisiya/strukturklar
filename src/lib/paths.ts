import { LANGUAGES, type Lang } from '../config/site'

export const PAGES = {
  home: '',
  about: 'ueber-mich',
  models: 'denkmodelle',
  projects: 'projects',
  workshop: 'denkwerkstatt',
  development: 'in-entwicklung',
  contact: 'kontakt',
  scope: 'leistungsabgrenzung',
  impressum: 'impressum',
  datenschutz: 'datenschutz',
} as const

export type PageKey = keyof typeof PAGES

export const isLang = (value: string | undefined): value is Lang =>
  !!value && (LANGUAGES as readonly string[]).includes(value)

// Router path without the deploy base, always with a trailing slash: /de/projects/slug/
export const localePath = (lang: Lang, page: PageKey = 'home', slug?: string) =>
  '/' + [lang, PAGES[page], slug].filter(Boolean).join('/') + '/'

// Same page in another language; keeps everything after the language segment.
export const switchLangPath = (pathname: string, lang: Lang) => {
  const rest = pathname.split('/').filter(Boolean).slice(1)
  return '/' + [lang, ...rest].join('/') + '/'
}
