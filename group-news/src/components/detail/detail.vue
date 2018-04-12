<template>
  <div class="room">
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
    </x-header>
    <div class="info">
      <load-more tip="正在加载" v-show="onFetching"></load-more>
      <div style="font-size:20px;margin-bottom: 1vw;text-align: center">{{messageInfo.name}}</div>
      <div v-html="messageInfo.content" style="min-height: 100vw"></div>
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
        ApiService.get('/api/v2/groupNews/newsDetail?id=' + this.$route.params.oid).then(res => {
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

<style scoped lang="less" rel="stylesheet/less">
  @import '~vux/src/styles/close';

  .vux-header {
    background-color: #41619C;
  }

  .room {
    /*height: 100%;*/
    background-color: #fff;
    .info {
      padding: 2vw;
    }
  }

  .dialog-demo {
    .weui-dialog {
      border-radius: 8px;
      padding-bottom: 8px;
    }
    .dialog-title {
      line-height: 30px;
      color: #666;
    }
    .img-box {
      height: 350px;
      overflow: hidden;
    }
    .vux-close {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
</style>
