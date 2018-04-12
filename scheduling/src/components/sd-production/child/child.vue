<template>
  <div>
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th>单位</th>
        <th>全月计划</th>
        <th>当日完成</th>
        <th>累计完成</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , index) in list">
        <td>{{item.subname}}</td>
        <td>{{item.monthplan}}</td>
        <td>{{item.todaycomplete}}</td>
        <td>{{item.accumulation}}</td>
      </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XTable} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
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
      getMessage() {
        ApiService.get('/api/v3/yuanmei/interface/findcoalproduction').then(res =>{
          this.list = res.data
        })
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
