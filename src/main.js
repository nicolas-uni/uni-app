import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Equipe from './components/pages/Equipe'
import Projets from './components/pages/Projets'
import Error from './components/pages/Error'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/equipe',
      name: 'Equipe',
      component: Equipe
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})

import App from './App.vue'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
