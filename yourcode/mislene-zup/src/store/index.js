import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createModule } from 'vuex-toast'
import 'vuex-toast/dist/vuex-toast.css'
import Movies from '@/store/modules/movies'
Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  modules: {
    Movies,
    // Account,
    // Queries,
    // Databases,
    // ExecuteQuery,
    toast: createModule({
      dismissInterval: 5000
    })
  },
  strict: false,
  plugins: [
    createPersistedState({
      key: 'vuex-zup'
    })
  ]
})
