// One content block; every field is optional and rendered in this order.
export interface Block {
  text?: string[]
  items?: string[]
  // Horizontal chain: A → B → C
  flow?: string[]
  // Vertical diagram of stages, each with optional bullet points
  stages?: { title: string; items?: string[] }[]
  note?: string
}

// Marks what kind of work a project is, so concepts are never shown as implemented client work.
export type ProjectStatus = 'conceptualAnalysis' | 'scenarioAnalysis' | 'practicalCoordination' | 'implemented'

// Sections follow the fixed project template; missing ones are skipped.
export const PROJECT_SECTIONS = [
  'ausgangslage',
  'fragestellung',
  'ist',
  'analyse',
  'struktur',
  'risiken',
  'optionen',
  'modell',
  'beitrag',
  'wirkung',
  'status',
  'weiterentwicklung',
] as const

// Fields every content type shares. Only entries with "published": true reach the site;
// "internalNote" is for the author and is removed at build time.
interface Publishable {
  published?: boolean
  internalNote?: string
}

export interface Project extends Publishable {
  slug: string
  lang: string
  order: number
  title: string
  subtitle?: string
  summary: string
  status: ProjectStatus
  category?: string
  // Shown among the project cards on the home page
  featured?: boolean
  tags?: string[]
  sections: Partial<Record<(typeof PROJECT_SECTIONS)[number], Block>>
  models?: string[]
}

export const MODEL_SECTIONS = [
  'ausgangsproblem',
  'denkfrage',
  'modell',
  'elemente',
  'anwendung',
  'beispiel',
  'wirkung',
  'grenzen',
  'weiterentwicklung',
] as const

export interface Model extends Publishable {
  slug: string
  lang: string
  order: number
  title: string
  summary: string
  sections?: Partial<Record<(typeof MODEL_SECTIONS)[number], Block>>
  // Link the card to a project page instead of (or in addition to) its own page
  project?: string
}

export const ARTICLE_SECTIONS = ['hauptgedanke', 'analyse', 'modell', 'beispiel', 'ziel'] as const

export interface Article extends Publishable {
  slug: string
  lang: string
  // Order among articles with the same date
  order?: number
  title: string
  date: string
  category: string
  intro: string
  sections: Partial<Record<(typeof ARTICLE_SECTIONS)[number], Block>>
  video?: { platform: string; url: string }
  project?: string
  model?: string
  cta?: string
}
