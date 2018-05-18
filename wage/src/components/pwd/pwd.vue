<template>
  <div class="loginWrap">
    <div class="loginForm">
      <div style="text-align: center;border-bottom: 1px solid #ccc;padding: 2vw 0;margin-top: 10vw;color: #fff">请输入密码
      </div>
      <input type="hidden" v-model="password"/>
      <div class="pay-pwd clearfix">
        <div class="fl"><input type="password" readonly :class="[pw1 ? active : '']"></div>
        <div class="fl"><input type="password" readonly :class="[pw2 ? active : '']"></div>
        <div class="fl"><input type="password" readonly :class="[pw3 ? active : '']"></div>
        <div class="fl"><input type="password" readonly :class="[pw4 ? active : '']"></div>
        <div class="fl"><input type="password" readonly :class="[pw5 ? active : '']"></div>
        <div class="fl"><input type="password" readonly :class="[pw6 ? active : '']"></div>
      </div>
      <!--<div style="text-align: right"><a href="#/resetPwd">忘记密码？</a></div>-->
      <keyboard :keyboard="password" @on-result-change="onResultChange"></keyboard>
    </div>
    <toast v-model="show" type="text" :time="800" is-show-mask :text="text" position="bottom"></toast>
  </div>
</template>
<script type="text/ecmascript-6">
  import * as ApiService from 'api/api'
  import {Toast} from 'vux'
  import * as types from 'src/store/mutation-types'
  import Keyboard from 'components/keyboard/keyboard'
  export default {
    components: {
      Toast,
      Keyboard
    },
    data () {
      return {
        text: '',
        show: false,
        password: '',
        pw1: '',
        pw2: '',
        pw3: '',
        pw4: '',
        pw5: '',
        pw6: '',
        active: 'active'
      }
    },
    methods: {
      submit: function () {
        ApiService.post('/api/v1/salaryUser/vaildationPw', {password: this.password}).then((res) => {
          if (res.data.resultCode === '0') {
            this.show = true
            this.text = res.data.resultDesc
          } else if (res.data.resultCode === '1') {
            this.$router.push('/wa-wageList')
          }
        })
      },
      onResultChange (val) {
        this.password = val
      },
    },
    watch: {
      password (val) {
        this.pw1 = val[0]
        this.pw2 = val[1]
        this.pw3 = val[2]
        this.pw4 = val[3]
        this.pw5 = val[4]
        this.pw6 = val[5]
        if (val.length >= 6) {
          this.text = val
          this.show = true
        }
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .loginWrap {
    background: url("./images/back.jpeg") no-repeat;
    background-size: cover;
    height: 100%;
    &:before {
      content: '';
      display: table;
    }
    .pay-pwd {
      width: 50vw;
      margin: 20vw auto 3vw;
      div {
        margin: 0 2vw;
        padding-bottom: 0;
      }
      input {
        width: 3vw;
        height: 3vw;
        border: 1px solid #fff;
        background-color: transparent;
        text-align: center;
        font-size: 30px;
        border-radius: 50% 50%;
        &.active {
          background-color: #fff;
        }
      }
    }
  }

</style>
