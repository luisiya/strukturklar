import { useTranslation } from 'react-i18next'
import Section from '../common/Section'
import Divider from '../common/Divider'

const ProfessionalStance = () => {
  const { t } = useTranslation()

  return (
    <Section id="stance" backgroundColor="gray">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('stance.heading')}
        </h2>

        <div className="text-lg text-gray-700 space-y-6 leading-relaxed text-center">
          <p className="font-medium text-xl">{t('stance.text1')}</p>
          <p className="text-xl">{t('stance.text2')}</p>
          <p className="font-bold text-2xl text-primary-700">{t('stance.text3')}</p>

          <p className="mt-12 text-base italic text-gray-600">
            {t('stance.responsibility')}
          </p>
        </div>
      </div>

      <Divider />
    </Section>
  )
}

export default ProfessionalStance
