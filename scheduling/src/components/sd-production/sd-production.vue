<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
      原煤产量
    </x-header>
    <tab bar-active-color="rgb(223, 160, 51)" active-color="rgb(223, 160, 51)">
      <tab-item :selected="checked === item.name" v-for="(item, index) in list" style="font-size: 18px" @on-item-click="go(item.name)" :key="index">{{item.title}}</tab-item>
    </tab>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, TabItem, XHeader} from 'vux'
  export default {
    components: {
      Tab,
      TabItem,
      XHeader
    },
    data () {
      return {
        checked: this.$router.history.current.name,
        list: [
          {
            name: 'father',
            title: '全公司'
          },
          {
            name: 'child',
            title: '子公司'
          },
        ]
      }
    },
    created() {
    },
    methods: {
      go (path) {
        this.checked = path
        this.$router.push({name: path})
      },
      back () {
        this.$router.push({name: 'main'})
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .vux-header {
    background-color: #41619C;
  }
</style>
