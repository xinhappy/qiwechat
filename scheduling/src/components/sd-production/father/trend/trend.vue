<template>
  <div class="small">
    <div id="charts" style="width:'100%',height:'20rem'">
      <div id="main" :style="{width:'100%',height:'20rem'}"></div>
    </div>
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th>月份</th>
        <th>月计划</th>
        <th>月完成</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , index) in list">
        <td>{{item.tdate}}</td>
        <td>{{item.ddPlan}}</td>
        <td>{{item.todayComp}}</td>
      </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XTable} from 'vux'
  import * as ApiService from 'api/api'
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    data() {
      return {
        list: []
      }
    },
    components: {
      XTable
    },
    mounted() {
      /*ECharts图表*/
      var myChart = echarts.init(document.getElementById('main'));
      ApiService.get('/api/v3/yuanmei/monthData').then(res => {
        this.list = res.data
        let xDate = [],yData = []
        for (var i = 0; i < res.data.length; i++) {
          xDate[i] = res.data[i].tdate
          yData[i] = res.data[i].todayComp / 10000
        }
        myChart.setOption({
          title: {
            text: '每日完成量走势图'
          },
          legend: {
            data: ['当日完成']
          },
          tooltip: {},
          xAxis: {
            data: xDate
          },
          yAxis: {
            name: '产量（万吨）',
            nameRotate: 90,
            nameLocation: 'center',
            nameGap: 25,
            min: parseInt(Math.min.apply(null, yData)) - 1,
            max: parseInt(Math.max.apply(null, yData)) + 1
          },
          series: [{
            name: '当日完成',
            type: 'line',
            data: yData
          }]
        })
      })

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
