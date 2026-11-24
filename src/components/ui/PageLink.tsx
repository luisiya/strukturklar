import { Link } from 'react-router-dom'
import type { ComponentProps } from 'react'
import { useT } from '../../i18n'
import { localePath, type PageKey } from '../../lib/paths'

type Props = Omit<ComponentProps<typeof Link>, 'to'> & {
  page: PageKey
  slug?: string
  hash?: string
}

// Link to a page in the current language.
const PageLink = ({ page, slug, hash, ...rest }: Props) => {
  const { lang } = useT()
  return <Link to={localePath(lang, page, slug) + (hash ? `#${hash}` : '')} {...rest} />
}

export default PageLink
