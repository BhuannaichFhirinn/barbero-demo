import { createI18n } from 'vue-i18n'
import en from '@/locales/en.js'

const STORAGE_KEY = 'barbero-demo-locale'
const DEFAULT_LOCALE = 'en'

const storedLocale = localStorage.getItem(STORAGE_KEY) || DEFAULT_LOCALE

// vue-i18n v11 uses Composition API exclusively (no legacy option needed)
export default createI18n({
  locale: storedLocale,
  fallbackLocale: 'en',
  messages: { en }, // Only English is bundled — all others lazy-loaded on demand
})
