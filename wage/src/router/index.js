import Vue from 'vue'
import Router from 'vue-router'
import Login from 'src/components/login/login'
import WageDetail from 'src/components/main/detail'
import WageList from 'src/components/main/main'
import SetPwd from 'src/components/pwd/set-pwd'
import Pwd from 'src/components/pwd/pwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/wa-login',
      name: 'login',
      component: Login
    },
    {
      path: '/wa-wageList',
      name: 'WageList',
      component: WageList
    },
    {
      path: '/wa-wageDetail/:name/:yearMonth',
      name: 'wageDetail',
      component: WageDetail
    },
    {
      path: '/wa-setPwd',
      name: 'setPwd',
      component: SetPwd
    },
    {
      path: '/wa-pwd',
      name: 'pwd',
      component: Pwd
    }
  ]
})
