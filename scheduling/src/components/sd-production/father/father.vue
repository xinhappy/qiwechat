<template>
  <div>
    <div>
      <label v-for="(item, index) in list">
        <input type="radio" :selected="checked === item.name" v-model="checked" :value="item.name">{{item.title}}
      </label>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        checked: this.$router.history.current.name === 'father' ? 'year' : this.$router.history.current.name,
        list: [
          {
            name: 'year',
            title: '全年数据'
          },
          {
            name: 'month',
            title: '本月数据'
          },
          {
            name: 'trend',
            title: '本月走势'
          },
        ]
      }
    },
    created() {
      if (this.checked === 'year') {
        this.$router.push({name: 'year'})
      }
    },
    watch: {
      checked (newVal) {
        this.$router.push({name: newVal})
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
