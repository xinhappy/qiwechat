<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
    </x-header>
    <div class="title" @click="go('material-1')">
      2018年信息化工作会--建井一处发言材料
    </div>
    <div class="title" @click="go('material-2')">
      2018年信息化工作会--开封炭素发言材料
    </div>
    <div class="title" @click="go('material-3')">
      2018年信息化工作会--氯碱股份公司发言材料
    </div>
    <div class="title" @click="go('material-4')">
      2018年信息化工作会--尼龙科技公司发言材料
    </div>
    <div class="title" @click="go('material-5')">
      2018年信息化工作会--平宝公司发言材料
    </div>
    <div class="title" @click="go('material-6')">
      2018年信息化工作会--平煤股份八矿发言材料
    </div>
    <div class="title" @click="go('material-7')">
      2018年信息化工作会--平煤股份五矿发言材料
    </div>
    <div class="title" @click="go('material-8')">
      2018年信息化工作会--首山焦化发言材料
    </div>
    <div class="title" @click="go('material-9')">
      2018年信息化工作会--物资供应分公司发言材料
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  export default {
    components: {
      XHeader
    },
    methods : {
      back () {
        this.$router.replace({name: 'main'})
      },
      go (path) {
        this.$router.push({name:path})
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .title{
    padding: 4vw;
    border-bottom: 1px solid #ccc;
  }
</style>
