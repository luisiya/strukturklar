import { useTranslation } from 'react-i18next'
import Section from '../common/Section'
import Divider from '../common/Divider'

const Approach = () => {
  const { t } = useTranslation()

  return (
    <Section id="approach">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('approach.heading')}
        </h2>

        <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
          <p className="font-semibold text-primary-700">{t('approach.text1')}</p>
          <p>{t('approach.text2')}</p>

          <p>
            {t('approach.text3')}<br />
            {t('approach.text4')}
          </p>

          <div className="mt-8">
            <p className="font-semibold text-gray-900 mb-4">{t('approach.focus')}</p>
            <ul className="space-y-3 ml-6">
              {(t('approach.list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-700 mr-3 text-xl">•</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm italic text-gray-600 mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
            {t('approach.disclaimer')}
          </p>
        </div>
      </div>

      <Divider />
    </Section>
  )
}

export default Approach
