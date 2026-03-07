// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'barberoLight',
    themes: {
      barberoLight: {
        dark: false,
        colors: {
          primary:    '#1867C0',
          secondary:  '#48A999',
          surface:    '#FFFFFF',
          background: '#F5F5F5',
          success:    '#4CAF50',
          error:      '#F44336',
          warning:    '#FB8C00',
        },
      },
      barberoDark: {
        dark: true,
        colors: {
          primary:    '#2196F3',
          secondary:  '#48A999',
          surface:    '#1E1E2E',
          background: '#121212',
          success:    '#66BB6A',
          error:      '#EF5350',
          warning:    '#FFA726',
        },
      },
    },
  },
})
