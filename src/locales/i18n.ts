import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import de from './de/translation.json'
import en from './en/translation.json'
import uk from './uk/translation.json'
import ru from './ru/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      uk: { translation: uk },
      ru: { translation: ru },
    },
    fallbackLng: 'de',
    lng: 'de',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
