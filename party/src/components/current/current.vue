<template>
  <div class="content">
    <x-header style="background-color: #41619C" @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      {{title}}
    </x-header>
    <scroller lock-x height="-46px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom"
              :scroll-bottom-offst="40">
      <div>
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
  import {Swiper, SwiperItem, Scroller, Toast, LoadMore, XHeader} from 'vux'
  import * as ApiService from 'api/api'
  export default {
    components: {
      Swiper,
      SwiperItem,
      Scroller,
      Toast,
      LoadMore,
      XHeader
    },
    data () {
      return {
        imgList: '',
        list: [],
        onFetching: false,
        page: 1,
        showValue: false,
        text: '',
        show: true,
        title: this.$route.params.name
      }
    },
    created() {
      this.getMessage()
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
        ApiService.get('/api/v2/groupNews/newsList?categoryid=' + this.$route.params.id + '&type=party&page=' + this.page).then(res => {
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
          this.$router.push('/pt-detail/' + oid)
      },
      back () {
        this.$router.push({name:'main'})
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
