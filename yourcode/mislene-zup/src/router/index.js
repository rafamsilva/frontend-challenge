import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  Public,
  Movies,
  MovieDetails
} from '@/screens'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Public',
    redirect: '/movies',
    component: Public,
    beforeEnter: (to, from, next) => {
      /*
      if (Vue.prototype.$globalStore.getters.getterAccount && Object.keys(Vue.prototype.$globalStore.getters.getterAccount).length > 0) {
        next({ name: 'Private' })
      } else {
        */
      next()
      // }
    },
    children: [
      {
        path: '/movies',
        name: 'Movie',
        component: Movies
      },
      {
        path: '/movie/:id',
        name: 'MovieDetails',
        component: MovieDetails,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
