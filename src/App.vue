<template>
  <v-app>
    <SiteHeader @toggle-drawer="drawerOpen = !drawerOpen" />
    <AppSidebar v-model:open="drawerOpen" />
    <v-main>
      <RouterView />
    </v-main>
    <SiteFooter />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useAppTheme } from '@/composables/useAppTheme'
import { useAppLocale } from '@/composables/useAppLocale'

// Initialise theme and locale state at the root — no other component touches these directly
useAppTheme()
useAppLocale()

// Drawer open state — starts open; SiteHeader can toggle on mobile
const drawerOpen = ref(true)
</script>
