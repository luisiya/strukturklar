import { useTranslation } from 'react-i18next'
import { HiGlobe } from 'react-icons/hi'

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
  }

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-700 transition-colors rounded-lg hover:bg-gray-100"
        aria-label="Change language"
      >
        <HiGlobe className="w-5 h-5" />
        <span className="text-sm font-medium hidden md:inline">{currentLanguage.flag}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              i18n.language === lang.code ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700'
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher
