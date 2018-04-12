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
        <td>{{item.mmPlan}}</td>
        <td>{{item.sddComp}}</td>
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
      ApiService.get('/api/v3/yuanmei/yearData').then(res => {
        let xData = [],yPlan = [],yComp = []
        this.list = res.data
        for (var i = 0; i < res.data.length; i++) {
          xData[i] = res.data[i].tdate
          yPlan[i] = res.data[i].mmPlan / 10000
          yComp[i] = res.data[i].sddComp / 10000
        }
        myChart.setOption({
          tooltip: {},
          xAxis: {
//            data: ['01', '02', '03', '04', '05', '06']
            data: xData
          },
          legend: {
            data: ['月计划', '月完成']
          },
          yAxis: {
            name: '每月原煤产量（万吨）',
            nameRotate: 90,
            max: 300,
            min: 0,
            interval: 20,
            nameLocation: 'center',
            nameGap: 25,
            splitLine: {
              show: false
            }
          },
          series: [
            {
              name: '月计划',
              type: 'bar',
//              data: [50, 200, 36, 100, 100, 200]
              data: yPlan
            },
            {
              name: '月完成',
              type: 'bar',
//              data: [80, 220, 40, 150, 80, 90]
              data: yComp
            }
          ]
        })
      })
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  tr:nth-child(even){
    background-color: rgb(247, 247, 247);
  }
</style>
