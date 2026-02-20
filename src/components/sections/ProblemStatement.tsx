import { useTranslation } from 'react-i18next'
import Section from '../common/Section'
import Divider from '../common/Divider'

const ProblemStatement = () => {
  const { t } = useTranslation()

  return (
    <Section id="problem" backgroundColor="gray">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t('problem.heading')}
        </h2>

        <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
          <p>{t('problem.text1')}</p>
          <p className="font-medium">{t('problem.text2')}</p>

          <ul className="space-y-3 ml-6">
            {(t('problem.list', { returnObjects: true }) as string[]).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-2">
            <p className="text-xl font-medium text-gray-900">{t('problem.conclusion1')}</p>
            <p className="text-xl font-bold text-primary-700">{t('problem.conclusion2')}</p>
          </div>
        </div>
      </div>

      <Divider />
    </Section>
  )
}

export default ProblemStatement
