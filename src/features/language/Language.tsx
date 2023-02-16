import { useTranslation } from 'react-i18next'

type Props = {}

const Language = (props: Props) => {
  const { t, i18n } = useTranslation('common')
  return (
    <>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </>
  )
}

export default Language
