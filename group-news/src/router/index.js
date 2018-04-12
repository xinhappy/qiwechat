import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import Current from 'src/components/current/current'
import Group from 'src/components/group/group'
import Detail from 'src/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          name: 'current',
          component: Current
        },
        {
          path: 'group',
          name: 'group',
          component: Group
        },
      ]
    },
    {
      path: '/detail/:oid',
      name: 'detail',
      component: Detail
    }
  ]
})
