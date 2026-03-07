<template>
  <v-app-bar flat border="b">
    <v-app-bar-title>
      <span class="font-weight-bold">barbero</span>
      <span class="text-medium-emphasis text-body-2 ml-2 d-none d-sm-inline">
        {{ t('site.tagline') }}
      </span>
    </v-app-bar-title>

    <!-- Hamburger: visible only on mobile (below the navigation-drawer breakpoint) -->
    <template #prepend>
      <v-btn
        icon
        variant="text"
        class="d-flex d-lg-none"
        aria-label="Toggle navigation"
        @click="emit('toggle-drawer')"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>

    <template #append>
      <!-- NPM link -->
      <v-btn
        icon
        variant="text"
        :aria-label="t('header.npm')"
        href="https://www.npmjs.com/package/barbero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon>mdi-npm</v-icon>
      </v-btn>

      <!-- GitHub link -->
      <v-btn
        icon
        variant="text"
        :aria-label="t('header.github')"
        href="https://github.com/BhuannaichFhirinn/barbero"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>

      <!-- Language menu -->
      <v-menu max-height="400">
        <template #activator="{ props }">
          <v-btn icon variant="text" v-bind="props" :aria-label="t('header.language')">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list density="compact" nav>
          <v-list-item
            v-for="lang in languages"
            :key="lang.code"
            :title="lang.nativeName"
            :subtitle="lang.englishName"
            :append-icon="locale === lang.code ? 'mdi-check' : undefined"
            @click="setLocale(lang.code)"
          />
        </v-list>
      </v-menu>

      <!-- Theme menu -->
      <v-menu>
        <template #activator="{ props }">
          <v-btn icon variant="text" v-bind="props" :aria-label="t('header.theme')">
            <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
        </template>
        <v-list density="compact" nav>
          <v-list-item
            v-for="option in themeOptions"
            :key="option.value"
            :title="t(option.labelKey)"
            :prepend-icon="option.icon"
            :append-icon="preference === option.value ? 'mdi-check' : undefined"
            @click="preference = option.value"
          />
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useAppTheme } from '@/composables/useAppTheme'
import { useAppLocale } from '@/composables/useAppLocale'

const { t } = useI18n()
const { preference } = useAppTheme()
const { locale, setLocale } = useAppLocale()

const emit = defineEmits(['toggle-drawer'])

const themeOptions = [
  { labelKey: 'theme.light',  value: 'light',  icon: 'mdi-white-balance-sunny' },
  { labelKey: 'theme.dark',   value: 'dark',   icon: 'mdi-weather-night' },
  { labelKey: 'theme.system', value: 'system', icon: 'mdi-monitor' },
]

// Static — native names must always be visible regardless of the active locale
const languages = [
  { code: 'en',    nativeName: 'English',          englishName: 'English' },
  { code: 'fr',    nativeName: 'Français',          englishName: 'French' },
  { code: 'de',    nativeName: 'Deutsch',           englishName: 'German' },
  { code: 'es',    nativeName: 'Español',           englishName: 'Spanish' },
  { code: 'it',    nativeName: 'Italiano',          englishName: 'Italian' },
  { code: 'pt',    nativeName: 'Português',         englishName: 'Portuguese' },
  { code: 'nl',    nativeName: 'Nederlands',        englishName: 'Dutch' },
  { code: 'pl',    nativeName: 'Polski',            englishName: 'Polish' },
  { code: 'sv',    nativeName: 'Svenska',           englishName: 'Swedish' },
  { code: 'uk',    nativeName: 'Українська',        englishName: 'Ukrainian' },
  { code: 'ru',    nativeName: 'Русский',           englishName: 'Russian' },
  { code: 'ar',    nativeName: 'العربية',           englishName: 'Arabic' },
  { code: 'zh-CN', nativeName: '中文（简体）',       englishName: 'Chinese (Simplified)' },
  { code: 'zh-TW', nativeName: '中文（繁體）',       englishName: 'Chinese (Traditional)' },
  { code: 'ja',    nativeName: '日本語',             englishName: 'Japanese' },
  { code: 'ko',    nativeName: '한국어',             englishName: 'Korean' },
  { code: 'vi',    nativeName: 'Tiếng Việt',        englishName: 'Vietnamese' },
  { code: 'th',    nativeName: 'ภาษาไทย',           englishName: 'Thai' },
  { code: 'id',    nativeName: 'Bahasa Indonesia',  englishName: 'Indonesian' },
  { code: 'hi',    nativeName: 'हिन्दी',            englishName: 'Hindi' },
  { code: 'bn',    nativeName: 'বাংলা',             englishName: 'Bengali' },
  { code: 'ur',    nativeName: 'اردو',              englishName: 'Urdu' },
  { code: 'ta',    nativeName: 'தமிழ்',             englishName: 'Tamil' },
  { code: 'te',    nativeName: 'తెలుగు',            englishName: 'Telugu' },
  { code: 'mr',    nativeName: 'मराठी',             englishName: 'Marathi' },
  { code: 'gu',    nativeName: 'ગુજરાતી',           englishName: 'Gujarati' },
  { code: 'kn',    nativeName: 'ಕನ್ನಡ',             englishName: 'Kannada' },
  { code: 'ml',    nativeName: 'മലയാളം',            englishName: 'Malayalam' },
  { code: 'pa',    nativeName: 'ਪੰਜਾਬੀ',            englishName: 'Punjabi' },
  { code: 'sw',    nativeName: 'Kiswahili',         englishName: 'Swahili' },
  { code: 'am',    nativeName: 'አማርኛ',              englishName: 'Amharic' },
  { code: 'ha',    nativeName: 'Hausa',             englishName: 'Hausa' },
  { code: 'yo',    nativeName: 'Yorùbá',            englishName: 'Yoruba' },
  { code: 'ig',    nativeName: 'Igbo',              englishName: 'Igbo' },
  { code: 'zu',    nativeName: 'isiZulu',           englishName: 'Zulu' },
]
</script>
