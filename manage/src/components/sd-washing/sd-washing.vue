<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      领导带班
    </x-header>
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th>单位</th>
        <th>值班长</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , index) in list">
        <td>{{item.unitname}}</td>
        <td>{{item.leader}}</td>
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
        ApiService.get('/api/v3/yuanmei/interface/findleadershipclass').then(res =>{
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
