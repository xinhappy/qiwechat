<template>
  <ul class="keyboard clearfix">
    <li v-for="(key,index) in keyList" :class="{active:index === ins}" @touchstart="start(index)" @touchend="end" :key="index" v-text="key" @click="clickKey(key)"></li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['keyboard'],
    data() {
      return {
        keyList: [],
        myKeyList: this.keyboard,
        active: 'active',
        ins: ''
      }
    },
    watch: {
      keyboard (val) {
        this.myKeyList = val
      },
      myKeyList (val) {
        this.$emit('on-result-change', val)
      }
    },
    methods: {
      clickKey(key) {
        switch (key) {
          case '←':
            let kbt = this.myKeyList
            this.myKeyList = kbt.length ? kbt.substring(0, kbt.length - 1) : kbt
            break

          default:
            this.myKeyList += key.toString()
            break
        }
      },
      start(index) {
        this.ins = index
      },
      end() {
        this.ins = ''
      }
    },
    mounted() {
      this.keyList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '0', '←']
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .keyboard {
    width: 65%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    user-select: none;
    &.clearfix {
      &:after {
        content: '';
        display: block;
        clear: both;
      }
    }
    li {
      float: left;
      width: 12vw;
      height: 12vw;
      line-height: 12vw;
      text-align: center;
      background: transparent;
      color: #fff;
      border: 1px solid #fff;
      margin: 2vw 4vw;
      border-radius: 50% 50%;
      font-size: 6vw;
      &.active{
        background-color: rgba(255,255,255,0.3);
      }
    }
  }
</style>
