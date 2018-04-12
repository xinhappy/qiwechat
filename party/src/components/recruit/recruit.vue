<template>
  <div class="content">
      <div>
        <div class="item clearfix" @click="read()">
          <div class="fl" style="width: 95%">
            <div style="font-size: 16px;"><span>中国平煤神马集团内部公开招聘报名表</span></div>
            <div style="margin-top: 2px"><span>2017/9/14</span></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as ApiService from 'api/api'
  export default {
    methods: {
      read () {
        window.location.href = 'http://qywx.pmcc.com.cn:8082/file/中国平煤神马集团内部公开招聘报名表.doc'
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content {
    background-color: #fff;
    .item {
      padding: 4vw;
      border-bottom: 1px solid #eee;
    }
  }

</style>
