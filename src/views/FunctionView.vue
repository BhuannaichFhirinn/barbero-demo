<template>
  <!-- Function found -->
  <v-container v-if="fnDef" class="py-8" style="max-width: 720px;">
    <h1 class="text-h4 font-weight-bold mb-2">{{ fnDef.name }}</h1>
    <code class="signature mb-4">{{ fnDef.signature }}</code>
    <p class="text-body-1 mb-6">{{ fnDef.description }}</p>

    <v-text-field
      v-for="(input, i) in fnDef.inputs"
      :key="i"
      v-model="inputValues[i]"
      :label="input.label"
      :placeholder="input.placeholder"
      density="compact"
      variant="outlined"
      class="mb-3"
      @input="evaluate"
    />

    <div class="mb-6">
      <span class="text-caption text-medium-emphasis mr-2">{{ t('card.result') }}</span>
      <v-chip :color="chipColor" label size="large">
        {{ chipLabel }}
      </v-chip>
    </div>

    <pre class="example-code">{{ fnDef.example }}</pre>
  </v-container>

  <!-- Function not found -->
  <v-container v-else class="py-8">
    <p class="text-body-1 text-medium-emphasis">Function not found.</p>
  </v-container>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { modules } from '@/data/functions.js'

const route = useRoute()
const { t } = useI18n()

// Resolve the function definition from route params
const fnDef = computed(() => {
  const mod = modules.find(m => m.slug === route.params.module)
  return mod?.functions.find(f => f.slug === route.params.function) ?? null
})

const inputValues = ref([])
const result = ref(null)
const error = ref(null)

// Evaluate each input field as a JavaScript expression.
// Uses new Function() — safe for a static, no-backend site with no stored user data.
function evaluate () {
  if (!fnDef.value) return
  try {
    const args = inputValues.value.map(v => new Function('return ' + v)()) // eslint-disable-line no-new-func
    result.value = fnDef.value.fn(...args)
    error.value = null
  } catch (e) {
    result.value = null
    error.value = e.message
  }
}

function resetInputs () {
  if (!fnDef.value) return
  inputValues.value = fnDef.value.inputs.map(i => i.placeholder)
  evaluate()
}

// Re-initialise when navigating to a different function
watch(() => route.params, resetInputs, { immediate: false })

onMounted(resetInputs)

const chipColor = computed(() => {
  if (error.value) return 'warning'
  if (result.value === true) return 'success'
  if (result.value === false) return 'error'
  return 'surface-variant'
})

const chipLabel = computed(() => {
  if (error.value) return t('card.errorLabel')
  if (result.value === true) return 'true'
  if (result.value === false) return 'false'
  return '—'
})
</script>
