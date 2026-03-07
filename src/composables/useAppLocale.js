import { useI18n } from 'vue-i18n'

const STORAGE_KEY = 'barbero-demo-locale'

// Languages that read right-to-left
const RTL_LOCALES = new Set(['ar', 'ur'])

export function useAppLocale () {
  const { locale, setLocaleMessage } = useI18n()
  const loadedLocales = new Set(['en'])

  async function setLocale (lang) {
    if (!loadedLocales.has(lang)) {
      // Lazy-load locale file on demand — non-English locales are not bundled
      const messages = await import(`@/locales/${lang}.js`)
      setLocaleMessage(lang, messages.default)
      loadedLocales.add(lang)
    }
    locale.value = lang
    localStorage.setItem(STORAGE_KEY, lang)

    // Flip layout direction for RTL languages
    document.documentElement.setAttribute('dir', RTL_LOCALES.has(lang) ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', lang)
  }

  return { locale, setLocale }
}
