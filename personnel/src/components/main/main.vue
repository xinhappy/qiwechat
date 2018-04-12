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
  import {Tab, TabItem} from 'vux'
  export default {
    components: {
      Tab,
      TabItem
    },
    data () {
      return {
        imgList: '',
        checked: this.$router.history.current.name,
        list: [
          {
            name: 'pe-current',
            title: '工作动态'
          },
          {
            name: 'pe-group',
            title: '通知公告'
          },
          {
            name: 'pe-recruit',
            title: '文件下载'
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
      color: #ddd;
      font-size: 16px;
      &.vux-tab-selected{
        color: #eee;
        border-bottom: 3px solid #ccc;
      }
    }

  }
</style>
