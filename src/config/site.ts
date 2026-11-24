// Rollout order after German: English, Ukrainian, Russian
export const LANGUAGES = ['de', 'en', 'uk', 'ru'] as const
export type Lang = (typeof LANGUAGES)[number]

export const DEFAULT_LANG: Lang = 'de'

// Languages whose page texts have been editorially reviewed. Only these get
// hreflang entries and their own canonical URL; the others fall back to German.
export const PUBLISHED_LANGUAGES: Lang[] = ['de']

export const LANGUAGE_NAMES: Record<Lang, string> = {
  de: 'Deutsch',
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
}

export const site = {
  name: 'StrukturKlar',
  // Public origin used for canonical, hreflang, sitemap and Open Graph URLs.
  url: (import.meta.env.VITE_SITE_URL ?? 'https://strukturklar.com').replace(/\/$/, ''),
  ogImage: '/og-image.png',
  // Preview builds for review: every page gets noindex
  noindex: import.meta.env.VITE_NOINDEX === 'true',
  person: {
    name: 'Anastasiia Gurina',
    city: 'Leipzig',
    email: 'Anastasiia@strukturklar.com',
    // Shown only in the Impressum, as the second quick contact channel until the form sends by itself
    phone: '+49 176 60836128',
    phoneHref: '+4917660836128',
  },
  address: {
    street: 'Gorkistraße 109',
    postalCode: '04347',
    city: 'Leipzig',
    country: 'Deutschland',
  },
  // Empty entries are not rendered. Instagram exists but has no content yet;
  // TikTok is planned (name "Denberstadt") but not created.
  social: [
    { key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/anastasiia-gurina-24200b326' },
    { key: 'instagram', label: 'Instagram', url: '' },
    { key: 'tiktok', label: 'TikTok', url: '' },
  ],
  // Web3Forms access key for the contact form; without it the form opens the visitor's mail program.
  // Create the key for Anastasiia@strukturklar.com: Web3Forms delivers to the key's address.
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY ?? '',
  // Mailbox host per the MX record (parkmail.dynadot.com); named in the Datenschutz text, confirm with the owner
  mailProvider: 'Dynadot, USA',
}
