import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FunctionView from '@/views/FunctionView.vue'

// Hash history so direct URL navigation (e.g. /#/core/isTruthy) works on GitHub
// Pages without a custom 404 redirect — the hash fragment is never sent to the server.
export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/:module/:function', component: FunctionView },
  ],
})
