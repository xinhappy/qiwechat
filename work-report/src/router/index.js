import Vue from 'vue'
import Router from 'vue-router'
import Main from 'src/components/main/main'
import Report from 'src/components/report/report'
import Assess from 'src/components/assess/assess'
import Cite from 'src/components/cite/cite'
import Survey from 'src/components/survey/survey'
import Issue from 'src/components/issue/issue'
import Notice from 'src/components/notice/notice'
import Exchange from 'src/components/exchange/exchange'
import Material1 from 'src/components/exchange/material/material1'
import Material2 from 'src/components/exchange/material/material2'
import Material3 from 'src/components/exchange/material/material3'
import Material4 from 'src/components/exchange/material/material4'
import Material5 from 'src/components/exchange/material/material5'
import Material6 from 'src/components/exchange/material/material6'
import Material7 from 'src/components/exchange/material/material7'
import Material8 from 'src/components/exchange/material/material8'
import Material9 from 'src/components/exchange/material/material9'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/meet',
      name: 'main',
      component: Main
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    },
    {
      path: '/assess',
      name: 'assess',
      component: Assess
    },
    {
      path: '/cite',
      name: 'cite',
      component: Cite
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/issue',
      name: 'issue',
      component: Issue
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    },
    {
      path: 'material-1',
      name: 'material-1',
      component: Material1
    },
    {
      path: 'material-2',
      name: 'material-2',
      component: Material2
    },
    {
      path: 'material-3',
      name: 'material-3',
      component: Material3
    },
    {
      path: 'material-4',
      name: 'material-4',
      component: Material4
    },
    {
      path: 'material-5',
      name: 'material-5',
      component: Material5
    },
    {
      path: 'material-6',
      name: 'material-6',
      component: Material6
    },
    {
      path: 'material-7',
      name: 'material-7',
      component: Material7
    },
    {
      path: 'material-8',
      name: 'material-8',
      component: Material8
    },
    {
      path: 'material-9',
      name: 'material-9',
      component: Material9
    },
  ]
})
