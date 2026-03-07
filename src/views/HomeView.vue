<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-2">{{ t('site.title') }}</h1>
    <p class="text-body-1 text-medium-emphasis mb-8">{{ t('site.tagline') }}</p>

    <v-row>
      <v-col
        v-for="module in modules"
        :key="module.slug"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-card
          :to="`/${module.slug}/${module.functions[0].slug}`"
          height="100%"
          rounded="lg"
          variant="outlined"
          hover
        >
          <v-card-title class="pt-4">{{ t(`modules.${module.slug}.name`) }}</v-card-title>
          <v-card-text>
            <p class="text-body-2 text-medium-emphasis">
              {{ t(`modules.${module.slug}.description`) }}
            </p>
            <p class="text-caption mt-3">{{ module.functions.length }} functions</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { modules } from '@/data/functions.js'

const { t } = useI18n()
</script>
