import Vue from 'vue'
import Vuetify from 'vuetify'
import theme from './theme'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import de from 'vuetify/es5/locale/de'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme,
  lang: {
    locales: { de },
    current: 'de'
  }
})
