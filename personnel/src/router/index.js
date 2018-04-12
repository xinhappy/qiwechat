import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import Current from 'src/components/current/current'
import Group from 'src/components/group/group'
import Recruit from 'src/components/recruit/recruit'
import Detail from 'src/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pe-home',
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          name: 'pe-current',
          component: Current
        },
        {
          path: 'pe-group',
          name: 'pe-group',
          component: Group
        },
        {
          path: 'pe-recruit',
          name: 'pe-recruit',
          component: Recruit
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
