import { createApp } from 'vue'

// Components
import App from './App.vue'
import vuetify from '@/plugins/vuetify'

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
