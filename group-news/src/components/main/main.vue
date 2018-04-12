<template>
  <div>
    <div class="head"><img src="./images/logo.jpeg" alt=""></div>
    <tab bar-active-color="#ccc">
      <tab-item :selected="checked === item.name" v-for="(item, index) in list" @on-item-click="go(item.name)" :key="index">{{item.title}}</tab-item>
    </tab>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  export default {
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    },
    data () {
      return {
        imgList: '',
        checked: this.$router.history.current.name,
        list: [
          {
            name: 'current',
            title: '时政要闻'
          },
          {
            name: 'group',
            title: '集团新闻'
          },
        ]
      }
    },
    methods: {
      go (path) {
        this.checked = path
        this.$router.push({name: path})
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .head{
    text-align: center;
    background-color: #fff;
    img{
      width: 50%;
    }
  }
  .vux-tab{
    .vux-tab-item{
      background-color: #41619C;
      color: #999;
      font-size: 16px;
      &.vux-tab-selected{
        color: #ccc;
        border-bottom: 3px solid #ccc;
      }
    }

  }
  .vux-indicator.custom-bottom {
    bottom: 30px;
  }
  .swiper-demo-img img {
    width: 100%;
  }
</style>
