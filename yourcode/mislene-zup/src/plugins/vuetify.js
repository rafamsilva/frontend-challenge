import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VuePapaParse from 'vue-papa-parse'

Vue.use(Vuetify)
Vue.use(VuePapaParse)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF9F1C',
        secondary: '#f58532',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})
