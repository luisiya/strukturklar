import { useTranslation } from 'react-i18next'
import Section from '../common/Section'
import Divider from '../common/Divider'

const Introduction = () => {
  const { t } = useTranslation()

  return (
    <Section id="introduction">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {t('introduction.heading')}
        </h2>

        <div className="text-lg md:text-xl text-gray-700 space-y-6 leading-relaxed">
          <p className="text-center font-medium">
            {t('introduction.text1')}
          </p>

          <div className="text-center mt-8">
            <p>{t('introduction.text2')}</p>
            <p className="font-medium">{t('introduction.text3')}</p>
            <p className="font-semibold text-primary-700">{t('introduction.text4')}</p>
          </div>
        </div>
      </div>

      <Divider />
    </Section>
  )
}

export default Introduction
