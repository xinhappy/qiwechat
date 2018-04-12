<template>
  <div>
    <cell link="/sd-production" title="原煤产量">
      <div slot="icon" style="background-color: rgb(250,79,41);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">原</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell link="/sd-washing" title="洗精煤产量">
      <div slot="icon" style="background-color: rgb(140,194,255);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">洗</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell link="/sd-ship" title="煤炭装运量">
      <div slot="icon" style="background-color: rgb(254,198,80);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">炭</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell link="/sd-outward" title="原煤外运量">
      <div slot="icon" style="background-color: rgb(85,196,38);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">运</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell link="/sd-total" title="总进尺">
      <div slot="icon" style="background-color: rgb(47,134,213);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">尺</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
    <cell  link="/sd-info" title="调度信息">
      <div slot="icon" style="background-color: rgb(80,76,195);padding:10px;color: #fff;font-size: 28px;margin-right: 10px">调</div>
      <div slot="child"><div class="arr"></div></div>
    </cell>
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
