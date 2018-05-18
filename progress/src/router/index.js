import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import List0 from 'src/components/list/list-0'
import List1 from 'src/components/list/list-1'
import List2 from 'src/components/list/list-2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pr-meet',
      name: 'main',
      component: Main
    },
    {
      path: '/pr-list0',
      name: 'list0',
      component: List0
    },
    {
      path: '/pr-list1',
      name: 'list1',
      component: List1
    },
    {
      path: '/pr-list2',
      name: 'list2',
      component: List2
    }
  ]
})
