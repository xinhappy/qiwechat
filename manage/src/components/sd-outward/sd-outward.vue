<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      瓦斯抽放量
    </x-header>
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr style="background-color: #F7F7F7">
        <th>单位</th>
        <th>当日完成</th>
        <th>累计完成</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item , index) in list">
        <td>{{item.unitname}}</td>
        <td>{{item.today}}</td>
        <td>{{item.total}}</td>
      </tr>
      </tbody>
    </x-table>
    <load-more tip="正在加载" v-show="show"></load-more>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XTable, XHeader, LoadMore } from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      XTable,
      XHeader,
      LoadMore
    },
    data () {
      return {
        list: [],
        show: true
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
        ApiService.get('/api/v3/yuanmei/interface/findgasdrainage').then(res =>{
          if(res.data.length > 0){
            this.show = false
          }
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
