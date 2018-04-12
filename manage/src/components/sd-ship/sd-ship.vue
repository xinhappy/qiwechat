<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      人员定位
    </x-header>
    <div style="padding: 2vw">
      <selector style="border: 1px solid #ccc;height: 35px;line-height: 35px;border-radius:5px " v-model="value" :options="plainList" :value-map="['branchid','branchname']" @on-change="onChange"></selector>
    </div>
    <x-table full-bordered :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th>项目</th>
        <th style="width: 60vw">描述</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item , index) in list">
          <td>{{item.item}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, XTable, Selector} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      XHeader,
      XTable,
      Selector
    },
    data () {
      return {
        list: [],
        value: '',
        plainList: []
      }
    },
    created() {
      this.getMessage()
    },
    methods: {
      back() {
        this.$router.push({name: 'main'})
      },
      getMessage() {
        ApiService.get('/api/v3/yuanmei/interface/findbranchlist').then(res =>{
          this.plainList = res.data
        })
      },
      onChange(val){
        ApiService.get('/api/v3/yuanmei/interface/findlocationbybranchid?properValue=' + val).then(res =>{
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
