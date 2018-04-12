<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      煤炭装运量
    </x-header>
    <x-table full-bordered :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th></th>
        <th></th>
        <th>铁运</th>
        <th>矿运</th>
        <th>洗煤</th>
        <th>精煤</th>
      </tr>
      </thead>
      <tbody v-for="(item , index) in list">
        <tr>
          <td rowspan="2" style="border-right: 1px solid #e0e0e0">{{item.cartype}}</td>
          <td>{{item.counttype}}</td>
          <td>{{item.tie}}</td>
          <td>{{item.kuang}}</td>
          <td>{{item.xi}}</td>
          <td>{{item.jing}}</td>
        </tr>
        <tr>
          <td>{{item.counttype_}}</td>
          <td>{{item.tie_}}</td>
          <td>{{item.kuang_}}</td>
          <td>{{item.xi_}}</td>
          <td>{{item.jing_}}</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, XTable} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      XHeader,
      XTable
    },
    data () {
      return {
        list: []
      }
    },
    created() {
      this.getMessage()
    },
    methods: {
      back () {
        this.$router.push({name: 'main'})
      },
      getMessage () {
        ApiService.get('/api/v3/yuanmei/interface/findcoalfreight ').then(res =>{
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
</style>
