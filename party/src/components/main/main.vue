<template>
  <div class="content">
    <div class="head"><img src="./images/logo.jpeg" alt="" style="vertical-align: middle;padding: 2vw 0"></div>
    <scroller :bounce="false" lock-x height="-53px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="40">
      <div>
        <swiper auto loop dots-class="custom-bottom" :aspect-ratio="0.6" dots-position="center">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in imgList" :key="index"><img class="img-responsive" :src="item.imgUrl">
          </swiper-item>
        </swiper>
        <grid :cols="3">
          <grid-item label="组织建设" link="/pt-current/8/组织建设">
            <img slot="icon" src="./images/computer.png">
          </grid-item>
          <grid-item label="干部管理" link="/pt-current/9/干部管理">
            <img slot="icon" src="./images/label.png">
          </grid-item>
          <grid-item label="人才工作" link="/pt-current/10/人才工作">
            <img slot="icon" src="./images/people.png">
          </grid-item>
          <grid-item label="区队建设"  link="/pt-current/27/区队建设">
            <img slot="icon" src="./images/group.png">
          </grid-item>
          <grid-item label="政策法规"  link="/pt-current/6/政策法规">
            <img slot="icon" src="./images/send.png">
          </grid-item>
          <grid-item label="党建研究"  link="/pt-current/7/党建研究">
            <img slot="icon" src="./images/search.png">
          </grid-item>
        </grid>
        <div>
          <div v-for="(item,index) in list" class="item clearfix" @click="read(item.id)">
            <div class="fl" style="width: 95%">
              <div style="font-size: 16px;" class="fl"><span>{{item.name}}</span></div>
              <div style="margin-top: 2px"><span>{{item.addtime | newtel}}</span></div>
            </div>
          </div>
        </div>
        <load-more tip="正在加载" v-show="onFetching"></load-more>
        <load-more tip="正在加载" v-show="show"></load-more>
        <toast v-model="showValue" width="20em" type="text" :time="800" :text="text" position="bottom"></toast>
      </div>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Swiper, SwiperItem, Scroller, Toast, LoadMore, Grid, GridItem,} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      Swiper,
      SwiperItem,
      Scroller,
      Toast,
      LoadMore,
      Grid,
      GridItem
    },
    data () {
      return {
        imgList: '',
        list: [],
        onFetching: false,
        page: 1,
        showValue: false,
        text: '',
        show: true
      }
    },
    created() {
      this.getMessage()
      this.getImg()
    },
    filters: {
      newtel (value) {
        if (!value) return ''
        return value.split(' ')[0]
      }
    },
    methods: {
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
          this.$refs.scrollerBottom.reset()
        } else {
          this.onFetching = true
          setTimeout(() => {
            this.page++
            this.getMessage()
            this.onFetching = false
          }, 2000)
        }
      },
      getMessage () {
        ApiService.get('/api/v2/groupNews/newsList?categoryid=3&type=party&page=' + this.page).then(res => {
          this.show = false
          if (res.data.length === 0 && this.page > 1) {
            this.showValue = true
            this.text = '暂无更多数据'
          } else {
            this.list.push.apply(this.list, res.data)
          }
        })
      },
      getImg () {
        ApiService.get('/api/v2/groupNews/imgList?categoryid=2&type=party').then(res => {
          this.imgList = res.data
        })
      },
      read (oid) {
          this.$router.push('/pt-detail/' + oid)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content {
    background-color: #fff;
    .head{
      text-align: center;
      background-color: #fff;
      img{
        width: 50%;
      }
    }
    .item {
      padding: 4vw;
      border-bottom: 1px solid #eee;
    }
  }

</style>
