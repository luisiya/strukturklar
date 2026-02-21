import { useTranslation } from 'react-i18next'

const Liability = () => {
  const { t } = useTranslation()

  return (
    <section id="liability" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
          {t('liability.heading')}
        </h3>

        <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700">
          <p>{t('liability.text1')}</p>
          <p>{t('liability.text2')}</p>
        </div>
      </div>
    </section>
  )
}

export default Liability
