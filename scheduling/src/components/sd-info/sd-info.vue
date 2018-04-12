<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      调度信息
    </x-header>
    <div v-for="(item , index) in list" class="cont">
      <p style="font-weight: bold;margin: 2vw 0 ">{{item.titlename}}</p>
      <div>{{item.itemcontent}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      XHeader
    },
    created () {
      this.getMessage()
    },
    data(){
      return {
        list: []
      }
    },
    methods: {
      back () {
        this.$router.push({name: 'main'})
      },
      getMessage() {
        ApiService.get('/api/v3/yuanmei/interface/findemergencydispatch').then(res => {
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
  .cont{
    padding: 3vw;
  }
</style>
