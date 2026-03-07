<template>
  <v-footer border="t" class="d-flex align-center justify-space-between flex-wrap ga-2 py-3 px-4">
    <span class="text-caption text-medium-emphasis">
      {{ t('footer.version') }} {{ barberoVersion }}
    </span>
    <span class="text-caption text-medium-emphasis">
      {{ t('footer.license') }}
    </span>
    <a
      href="https://github.com/BhuannaichFhirinn/barbero"
      target="_blank"
      rel="noopener noreferrer"
      class="text-caption"
    >
      GitHub
    </a>
  </v-footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// barbero version — read from the package metadata bundled by Vite
import barberoPackage from 'barbero/package.json'
const barberoVersion = barberoPackage.version
</script>
