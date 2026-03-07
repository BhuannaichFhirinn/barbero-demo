<template>
  <v-navigation-drawer :model-value="open" @update:model-value="emit('update:open', $event)">
    <v-list density="compact" nav>
      <v-list-item :title="t('site.title')" to="/" exact />

      <v-list-group
        v-for="module in modules"
        :key="module.slug"
        :value="module.slug"
      >
        <template #activator="{ props }">
          <v-list-item v-bind="props" :title="t(`modules.${module.slug}.name`)" />
        </template>

        <v-list-item
          v-for="fn in module.functions"
          :key="fn.slug"
          :title="fn.name"
          :to="`/${module.slug}/${fn.slug}`"
        />
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { modules } from '@/data/functions.js'

const { t } = useI18n()

defineProps({
  open: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:open'])
</script>
