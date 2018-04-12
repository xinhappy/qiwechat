import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import Current from 'src/components/current/current'
import Detail from 'src/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pt-home',
      name: 'main',
      component: Main
    },
    {
      path: '/pt-current/:id/:name',
      name: 'pt-current',
      component: Current
    },
    {
      path: '/pt-detail/:oid',
      name: 'detail',
      component: Detail
    }
  ]
})
