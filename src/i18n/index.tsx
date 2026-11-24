import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { DEFAULT_LANG, type Lang } from '../config/site'
import de from './de.json'
import en from './en.json'
import ru from './ru.json'
import uk from './uk.json'

type Dict = Record<string, unknown>

const dictionaries: Record<Lang, Dict> = { de, en, ru, uk }

const lookup = (dict: Dict, key: string): unknown =>
  key.split('.').reduce<unknown>((node, part) => (node as Dict | undefined)?.[part], dict)

// Missing keys fall back to German, so untranslated languages stay usable.
export const translate = (lang: Lang, key: string): unknown =>
  lookup(dictionaries[lang], key) ?? lookup(dictionaries[DEFAULT_LANG], key)

export const createT = (lang: Lang) => {
  const t = (key: string) => {
    const value = translate(lang, key)
    return typeof value === 'string' ? value : key
  }
  const tm = <T,>(key: string) => translate(lang, key) as T
  return { t, tm, lang }
}

type T = ReturnType<typeof createT>

const LangContext = createContext<T>(createT(DEFAULT_LANG))

export const LangProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => {
  const value = useMemo(() => createT(lang), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useT = () => useContext(LangContext)
