<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
    </x-header>
    <div>
      <div class="title" @click="open('http://qywx.pmcc.com.cn/meet/static/file/中平〔2018〕20号电子版.doc')">
        中平〔2018〕20号电子版
      </div>
      <div class="title" @click="open('http://qywx.pmcc.com.cn/meet/static/file/中平〔2018〕21号电子版.doc')">
        中平〔2018〕21号电子版
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  export default {
    components: {
      XHeader
    },
    methods : {
      back () {
        this.$router.replace({name: 'main'})
      },
      open (url) {
        window.open(url)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .title{
    padding: 4vw;
    border-bottom: 1px solid #ccc;
  }
</style>
