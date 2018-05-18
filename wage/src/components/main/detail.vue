<template>
  <div>
    <div class="listRoom">
      <div class="title">
        <p>{{list.yearMonth}}{{list.salaryName}}实发金额（元）</p>
        <p style="font-size: 30px;margin-top: 5vw">{{list.netSalary}}</p>
      </div>
    </div>
    <div>
      <div class="detail">
        <div class="top"></div>
        <div>
          <div class="list clearfix" v-for="(item,key) in list">
            {{key}}
            <p class="fr">{{item}}</p>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import * as ApiService from 'api/api'
  export default {
    components: {},
    data () {
      return {
        list:{
          '姓名':'西门',
          '工资':5000
        }
      }
    },
    created() {
      for(var i=0;i<this.list.length;i++){
        console.log(this.list[i])
      }
      ApiService.get('/api/v1/salaryUser/findDetails?salaryName=' + +'&yearMonth=' + this.$route.params.yearMonth).then(res => {
        if (res.data.resultCode === '1') {
          this.list = res.data.list
        }
      })
    },
    methods: {

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .listRoom{
    background: url(./images/bak.png) no-repeat;
    background-size: cover;
    .title{
      padding: 15vw 5vw;
      font-size: 3.2vw;
      color: #fff;
      text-align: center;
    }
  }
  .detail{
    font-size: 4vw;
    position: relative;
    .list{
      width: 90vw;
      margin: 0 auto;
      padding: 2vw;
      border-bottom: 1px solid #e0e0e0;
      background-color: #fff;
      &:last-child{
        border-bottom:none;
      }
    }
    .bottom{
      background: url(./images/bottom.png)  center bottom no-repeat;
      background-size: cover;
      height: 4vw;
      width: 94vw;
      margin: 0 auto;
    }
    .top{
      background: url(./images/top.png)  center top no-repeat;
      background-size: cover;
      height: 6vw;
      width: 98vw;
      position: absolute;
      top:-20px;
      right: 2px;
    }
  }
</style>
