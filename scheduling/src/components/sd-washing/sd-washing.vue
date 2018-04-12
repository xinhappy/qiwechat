<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      洗精煤产量
    </x-header>
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th>单位</th>
        <th>全月计划</th>
        <th>当日完成</th>
        <th>累计完成</th>
      </tr>
      </thead>
      <tbody v-for="(item , index) in list" style="border-bottom: 1px solid #eee">
      <tr>
        <td>{{item.typename}}</td>
        <td>{{item.monthplan}}</td>
        <td>{{item.today}}</td>
        <td>{{item.total}}</td>
      </tr>
      <tr>
        <td colspan="4">
          <svg-progress-bar type="rect" :value="item.total * 100 / item.monthplan " :options="options"></svg-progress-bar>
        </td>
      </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XTable, XHeader } from 'vux'
  import svg from 'svg-progress-bar'
  import * as ApiService from 'api/api'
  export default {
    components: {
      XTable,
      XHeader,
      'svg-progress-bar': svg
    },
    data () {
      return {
        list: [],
        options: {
          rectRadius: 0,
          radius: 25,
          text: function (value) {
            return this.htmlifyNumber(value) + '<span style="font-size: 12px;">%</span>';
          },
          rectWidth:300,
          pathColors:['#eee','rgb(254, 198, 80)']
        }
      }
    },
    created () {
      this.getMessage()
    },
    methods: {
      back () {
        this.$router.push({name: 'main'})
      },
      getMessage () {
        ApiService.get('/api/v3/yuanmei/interface/findwashedcoal').then(res =>{
          this.list = res.data
        })
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .vux-header {
    background-color: #41619C;
  }
  .vux-table td:before{
    border-bottom: none;
  }
</style>
