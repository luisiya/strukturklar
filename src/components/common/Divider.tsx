import { useTranslation } from 'react-i18next'

const Divider = () => {
  const { t } = useTranslation()

  return (
    <div className="text-center text-2xl md:text-3xl text-gray-400 my-8 md:my-12">
      {t('divider')}
    </div>
  )
}

export default Divider
