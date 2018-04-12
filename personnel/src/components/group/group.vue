<template>
  <div class="content">
    <scroller lock-x height="-90px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="10">
      <div>
        <!--
        <swiper auto loop dots-class="custom-bottom" :aspect-ratio="0.5" dots-position="center">
          <swiper-item class="swiper-demo-img" v-for="(item, index) in imgList" :key="index"><img class="img-responsive" :src="item.imgUrl"></swiper-item>
        </swiper>-->
        <div>
          <div v-for="(item,index) in list" class="item clearfix" @click="read(item.id)">
            <div class="fl" style="width: 95%">
              <div style="font-size: 16px;"><span>{{item.name}}</span></div>
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
  import {Swiper, SwiperItem, Scroller, Toast, LoadMore} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      Swiper,
      SwiperItem,
      Scroller,
      Toast,
      LoadMore
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
//      this.getImg()
    },
    filters : {
      newtel (value) {
        if(!value) return ''
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
      getImg () {
        ApiService.get('/api/v2/groupNews/imgList?categoryid=33&type=review').then(res => {
          this.imgList = res.data
        })
      },
      getMessage () {
        ApiService.get('/api/v2/groupNews/newsList?categoryid=33&type=review&page=' + this.page).then(res => {
          this.show = false
          if (res.data.length === 0 && this.page > 1) {
            this.showValue = true
            this.text = '暂无更多数据'
          } else {
            this.list.push.apply(this.list, res.data)
          }
        })
      },
      read (oid) {
        this.$router.push('/detail/' + oid)
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
