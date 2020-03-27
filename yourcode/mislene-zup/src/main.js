import Vue from 'vue'
import App from '@/screens/app/App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from '@/store'

Vue.config.productionTip = false
Vue.prototype.$globalStore = store

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
