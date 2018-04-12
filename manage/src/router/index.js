import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import SdWashing from 'src/components/sd-washing/sd-washing'
import SdProduction from 'src/components/sd-production/sd-production'
import SdShip from 'src/components/sd-ship/sd-ship'
import SdInfo from 'src/components/sd-info/sd-info'
import SdTotal from 'src/components/sd-total/sd-total'
import SdOutward from 'src/components/sd-outward/sd-outward'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ma-home',
      name: 'main',
      component: Main
    },
    {
      path: '/ma-production',
      name: 'ma-production',
      component: SdProduction,
    },
    {
      path: '/ma-washing',
      name: 'ma-washing',
      component: SdWashing
    },
    {
      path: '/ma-ship',
      name: 'ma-ship',
      component: SdShip
    },
    {
      path: '/ma-outward',
      name: 'ma-outward',
      component: SdOutward
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
    }
  ]
})
