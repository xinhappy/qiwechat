<template>
  <div class="room">
    <x-header style="background-color: #41619C" @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
    </x-header>
    <div class="info">
      <load-more tip="正在加载" v-show="onFetching"></load-more>
      <div style="font-size:20px;margin-bottom: 1vw;text-align: center">{{messageInfo.name}}</div>
      <div class="v_html" v-html="messageInfo.content" style="min-height: 100vw"></div>
    </div>
    <toast v-model="showValue" width="20em" type="text" :time="800" :text="text" position="bottom"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Toast, LoadMore} from 'vux'
  import * as ApiService from 'api/api'
  import * as config from 'common/config'
  export default {
    components: {
      XHeader,
      Toast,
      LoadMore
    },
    data () {
      return {
        messageInfo: '',
        showValue: false,
        text: '',
        onFetching: true
      }
    },
    filters: {
      newtel (value) {
        if (!value) return ''
        return value.split(' ')[0]
      }
    },
    created () {
      this.getMessage()
    },
    methods: {
      getMessage () {
        ApiService.get('/api/v2/groupNews/newsDetail?type=party&id=' + this.$route.params.oid).then(res => {
          if (res.data.name !== '') {
            this.onFetching = false
            this.messageInfo = res.data
          } else {
            this.showValue = true
            this.text = '没有更多数据'
          }
        })
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .room {
    /*height: 100%;*/
    background-color: #fff;
    .info {
      padding: 2vw;
      .v_html{
        img{
          display: none;
        }
      }
    }
  }
</style>
