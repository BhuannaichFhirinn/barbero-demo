import { ref, watchEffect } from 'vue'
import { useTheme } from 'vuetify'

const STORAGE_KEY = 'barbero-demo-theme'
const VALID_PREFS = ['light', 'dark', 'system']

function getSystemTheme () {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'barberoDark'
    : 'barberoLight'
}

function resolveThemeName (pref) {
  if (pref === 'dark') return 'barberoDark'
  if (pref === 'light') return 'barberoLight'
  return getSystemTheme()
}

export function useAppTheme () {
  const vuetifyTheme = useTheme()
  const storedPref = localStorage.getItem(STORAGE_KEY)
  const preference = ref(VALID_PREFS.includes(storedPref) ? storedPref : 'system')

  watchEffect(() => {
    vuetifyTheme.global.name.value = resolveThemeName(preference.value)
    localStorage.setItem(STORAGE_KEY, preference.value)
  })

  // Keep system mode in sync when OS preference changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    if (preference.value === 'system') {
      vuetifyTheme.global.name.value = getSystemTheme()
    }
  })

  return { preference }
}
