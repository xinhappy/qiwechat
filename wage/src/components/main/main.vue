<template>
  <div>
    <div class="listRoom">
      <div class="title">
        <a class="left" @click="min" style="margin-left: 7vw"></a>
        {{year}}年
        <a class="right" @click="add"></a>
      </div>
      <img src="./images/d-right.png" alt="">
    </div>
    <div>
      <group gutter="0">
        <div v-for="(item, index) in list">
          <cell :arrow-direction="index0 === index ? 'up' : 'down'" :title="item.month" :value="'¥'+item.netSalary" is-link @click.native="go(item.list.length,index,item.yearMonth,item.salaryName)"></cell>
          <template v-if="index0 === index ">
            <cell v-for="(ite, idx) in item.list" class="sub-item" :title="ite.salaryName" :value="'¥'+ite.netSalary"
                  is-link @click.native="toPath(item.yearMonth, ite.salaryName)"></cell>
          </template>
        </div>
      </group>
    </div>
    <div id="charts" style="width:'100%',height:'20rem'">
      <div id="main" :style="{width:'100%',height:'20rem'}"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Group, Cell, CellBox} from 'vux'
  import * as ApiService from 'api/api'
  // 引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    components: {
      Group,
      Cell,
      CellBox
    },
    data () {
      return {
        year: new Date().getFullYear(),
        show: false,
        text: '',
        index0: '',
        list: []
      }
    },
    created() {
      this.getMessage()
    },
    methods: {
      add () {
        this.year++
      },
      min () {
        this.year--
      },
      getMessage(){
        ApiService.get('/api/v1/salaryUser/yearList?year=' + this.year).then(res => {
          if (res.data.resultCode === '1') {
            this.list = res.data.list
          }
        })
      },
      go(length, index, yearMonth, salaryName){
        if (length > 0) {
          if (this.index0 !== index) {
            this.index0 = index
          } else {
            this.index0 = ''
          }
        } else {
          this.$router.push('/wa-wageDetail/' + salaryName + '/' + yearMonth)
        }

      },
      toPath(yearMonth, salaryName){
        this.$router.push('/wa-wageDetail/' + salaryName + '/' + yearMonth)
      }
    },
    watch:{
      year(val){
        this.year = val
        this.getMessage()
        ApiService.get('/api/v1/salaryUser/yearList?year=' + this.year).then(res => {
          if(res.data.resultCode === '1'){
            let xData = [], yPlan = []
            for (var i = 0; i < res.data.list.length; i++) {
              xData[i] = res.data[i].yearMonth
              yPlan[i] = res.data[i].netSalary
            }
            myChart.setOption({
              tooltip: {},
              xAxis: {
                data: xData,
                name: '月份'
              },
              legend: {
                data: ['月工资']
              },
              yAxis: {
                name: '元',
                nameRotate: 90,
                max: parseInt(Math.max.apply(null, yPlan)) + 1000,
                min: parseInt(Math.min.apply(null, yPlan)) - 1000,
                interval: 1000,
                nameLocation: 'center',
                nameGap: 25,
                splitLine: {
                  show: false
                }
              },
              series: [
                {
                  name: '月工资',
                  type: 'bar',
                  data: yPlan
                }
              ]
            })
          }
        })
      }
    },
    mounted() {
      /*ECharts图表*/
      var myChart = echarts.init(document.getElementById('main'));
      ApiService.get('/api/v1/salaryUser/yearList?year=' + this.year).then(res => {
        if(res.data.resultCode === '1'){
          let xData = [], yPlan = []
          for (var i = 0; i < res.data.list.length; i++) {
            xData[i] = res.data[i].yearMonth
            yPlan[i] = res.data[i].netSalary
          }
          myChart.setOption({
            tooltip: {},
            xAxis: {
              data: xData,
              name: '月份'
            },
            legend: {
              data: ['月工资']
            },
            yAxis: {
              name: '元',
              nameRotate: 90,
              max: parseInt(Math.max.apply(null, yPlan)) + 1000,
              min: parseInt(Math.min.apply(null, yPlan)) - 1000,
              interval: 1000,
              nameLocation: 'center',
              nameGap: 25,
              splitLine: {
                show: false
              }
            },
            series: [
              {
                name: '月工资',
                type: 'bar',
                data: yPlan
              }
            ]
          })
        }
      })
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .weui-cell {
    padding: 20px 15px;
  }
  .sub-item {
    padding-left: 30px;
  }

  .listRoom {
    background: url(./images/bak.png) no-repeat;
    position: relative;
    background-size: cover;
    padding: 11vw 0;
    img {
      width: 35vw;
      position: absolute;
      right: 0;
      bottom: 17px;
    }
    .title {
      padding: 5vw;
      font-size: 30px;
      color: #fff;
      a {
        border: 1px solid #fff;
        border-radius: 50% 50%;
        width: 3vw;
        height: 3vw;
        display: inline-block;
        margin-bottom: 0.7vw;
        &.left:before {
          display: block;
          content: '';
          border: 1px solid #fff;
          border-right: none;
          border-top: none;
          width: 2vw;
          height: 2vw;
          transform: matrix(.5, .5, -.5, .5, 2, 1);
        }
        &.right:before {
          display: block;
          content: '';
          border: 1px solid #fff;
          border-left: none;
          border-bottom: none;
          width: 2vw;
          height: 2vw;
          transform: matrix(.5, .5, -.5, .5, 1, 1);
        }
      }
    }
  }
</style>
