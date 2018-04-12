<template>
  <div class="small">
    <div id="charts" style="width:'100%',height:'15rem'">
      <div id="main" :style="{width:'100%',height:'15rem'}"></div>
    </div>
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th>日期</th>
        <th>日计划</th>
        <th>日完成</th>
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
        let over = 0, wei = 0 , all = 0
        for (var i = 0; i < res.data.length; i++) {
          over += res.data[i].todayComp
          all += res.data[i].ddPlan
        }
        wei = all - over
        myChart.setOption({
          title: {
            text: '全年数据'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              itemStyle: {
                normal: {
                  // 阴影的大小
                  shadowBlur: 200,
                  // 阴影水平方向上的偏移
                  shadowOffsetX: 0,
                  // 阴影垂直方向上的偏移
                  shadowOffsetY: 0,
                  // 阴影颜色
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data: [
                {value: over, name: '当月完成' + over},
                {value: wei, name: '未完成' + wei},
              ]
            }
          ]
        })
      })
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
