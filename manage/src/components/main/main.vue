<template>
  <div>
    <cell link="/ma-production" title="开拓进尺">
      <div slot="icon" style="background-color: rgb(254,198,80);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">开</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell link="/ma-washing" title="领导带班">
      <div slot="icon" style="background-color: rgb(250,79,41);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">领</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell link="/ma-ship" title="人员定位">
      <div slot="icon" style="background-color: rgb(140,194,255);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">人</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell link="/ma-outward" title="瓦斯抽放量">
      <div slot="icon" style="background-color: rgb(85,196,38);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">瓦</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <!--
    <cell link="/sd-total" title="动态瓦斯">
      <div slot="icon" style="background-color: rgb(47,134,213);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">动</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell  link="/sd-info" title="动态CO">
      <div slot="icon" style="background-color: rgb(80,76,195);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">co</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import {Cell} from 'vux'
  export default {
    components: {
      Cell
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .arr{
    height: 10px;
    width: 10px;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 15px;
    border-width: 2px 2px 0px 0px;
    border-color: rgb(223, 160, 51);
    border-style: solid;
  }
</style>
