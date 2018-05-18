<template>
  <div>
    <div class="center" style="background-color: #fff">
      <img class="img-responsive" src="./images/logo.jpg" alt="">
    </div>
    <div class="title clearfix" style="margin-top: 2px" @click="go('list0')">
      <div class="fl">
        <p style="font-size: 20px">2018年5月4号</p>
        <p style="font-size: 16px;color: #aaa">集团企业微信推广进度表</p>
      </div>
      <span class="fr" style="color: #aaa">查看</span>
    </div>
    <div class="title clearfix" style="margin-top: 2px" @click="go('list1')">
      <div class="fl">
        <p style="font-size: 20px">2018年5月10号</p>
        <p style="font-size: 16px;color: #aaa">集团企业微信推广进度表</p>
      </div>
      <span class="fr" style="color: #aaa">查看</span>
    </div>
    <div class="title clearfix" style="margin-top: 2px" @click="go('list2')">
      <div class="fl">
        <p style="font-size: 20px">2018年5月17号</p>
        <p style="font-size: 16px;color: #aaa">集团企业微信推广进度表</p>
      </div>
      <span class="fr" style="color: #aaa">查看</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {},
    data () {
      return {

      }
    },
    methods:{
      go(path){
        this.$router.push({name:path})
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .work{
    position: absolute;
    top:0;
    left:0;
    border: 1px solid #ddd;
    color: #777;
  }
  .title{
    margin: 0 auto;
    padding: 2vw 4vw;
    border: 1px solid #ccc;
    /*border-radius: 5px;*/
    background-color: #fff;
  }
</style>
