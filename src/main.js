import { createApp } from 'vue'

// Styles
import '@/assets/main.css'

// Components
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import router from '@/router'

const app = createApp(App)

app.use(vuetify)
app.use(i18n)
app.use(router)

app.mount('#app')
