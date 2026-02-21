import { useTranslation } from 'react-i18next'

const ForWhom = () => {
  const { t } = useTranslation()

  const items = t('forWhom.items', { returnObjects: true }) as string[]

  return (
    <section id="for-whom" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          {t('forWhom.heading')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center">
            {t('forWhom.intro')}
          </p>

          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-700 text-2xl mr-4 flex-shrink-0">•</span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ForWhom
