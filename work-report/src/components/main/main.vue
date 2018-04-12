<template>
  <div>
    <div class="center" style="background-color: #fff">
      <img class="img-responsive" src="./images/logo.jpg" alt="">
    </div>
    <grid :cols="3">
      <grid-item label="工作报告" link="/report">
        <img slot="icon" src="./images/computer.png">
      </grid-item>
      <grid-item label="评估报告" link="/assess">
        <img slot="icon" src="./images/label.png">
      </grid-item>
      <grid-item label="技术标准" link="/issue">
        <img slot="icon" src="./images/people.png">
      </grid-item>
      <grid-item label="光荣榜(表彰)" link="/cite">
        <img slot="icon" src="./images/group.png">
      </grid-item>
      <grid-item label="交流材料" link="/exchange">
        <img slot="icon" src="./images/send.png">
      </grid-item>
      <grid-item label="调查问卷" link="/survey">
        <img slot="icon" src="./images/search.png">
      </grid-item>
      <grid-item label="会议通知" link="/notice">
        <img slot="icon" src="./images/search.png">
      </grid-item>
    </grid>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Grid, GridItem, Swiper, SwiperItem} from 'vux'
  export default {
    components: {
      Grid,
      GridItem,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        imgList: ''
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  .weui-grid{
    padding: 35px 10px;
  }
  .swiper-demo-img img {
    width: 100%;
  }
  .work{
    position: absolute;
    top:0;
    left:0;
    border: 1px solid #ddd;
    color: #777;
  }
</style>
