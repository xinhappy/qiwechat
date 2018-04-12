import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import SdWashing from 'src/components/sd-washing/sd-washing'
import SdProduction from 'src/components/sd-production/sd-production'
import Father from 'src/components/sd-production/father/father'
import Year from 'src/components/sd-production/father/year/year'
import Month from 'src/components/sd-production/father/month/month'
import Trend from 'src/components/sd-production/father/trend/trend'
import Child from 'src/components/sd-production/child/child'
import SdShip from 'src/components/sd-ship/sd-ship'
import SdInfo from 'src/components/sd-info/sd-info'
import SdTotal from 'src/components/sd-total/sd-total'
import SdOutward from 'src/components/sd-outward/sd-outward'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sd-home',
      name: 'main',
      component: Main
    },
    {
      path: '/sd-production',
      name: 'sd-production',
      component: SdProduction,
      children: [
        {
          path: '',
          name: 'father',
          component: Father,
          children: [
            {
              path: 'year',
              name: 'year',
              component: Year,
            },
            {
              path: 'month',
              name: 'month',
              component: Month,
            },
            {
              path: 'trend',
              name: 'trend',
              component: Trend,
            },
          ]
        },
        {
          path: 'child',
          name: 'child',
          component: Child
        },
      ]
    },
    {
      path: '/sd-washing',
      name: 'sd-washing',
      component: SdWashing
    },
    {
      path: '/sd-ship',
      name: 'sd-ship',
      component: SdShip
    },
    {
      path: '/sd-info',
      name: 'sd-info',
      component: SdInfo
    },
    {
      path: '/sd-total',
      name: 'sd-total',
      component: SdTotal
    },
    {
      path: '/sd-outward',
      name: 'sd-outward',
      component: SdOutward
    },
  ]
})
