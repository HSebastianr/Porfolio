import portugues from '@/i18n/pt.json'
import spanish from '@/i18n/es.json'

const LANGUAGES = {
  PROTUGUES: 'pt',
  SPANISH: 'es'
}

export const getI18N = ({
  currentLocale = 'es'
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANGUAGES.PROTUGUES) return portugues
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  return spanish
}
