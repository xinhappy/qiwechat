<template>
  <div class="loginWrap">
    <div class="loginForm">
      <form @submit.prevent="submit">
        <div class="input"><!--<img src="../../assets/icon_login_name.png" alt="">-->
          <input v-model="pwd" type="text" placeholder="请输入数字密码">
        </div>
        <div class="save">
          <p style="color: red;padding-left: 2vw">*首次使用请设置密码</p>
          <button type="submit">立即设置</button>
        </div>
      </form>
    </div>
    <toast v-model="show" type="text" :time="800" is-show-mask :text="text" position="bottom"></toast>
  </div>
</template>
<script type="text/ecmascript-6">
  import * as ApiService from 'api/api'
  import {Toast} from 'vux'
  import * as types from 'src/store/mutation-types'
  export default {
    components: {
      Toast
    },
    data () {
      return {
        pwd: '',
        text: '',
        show: false
      }
    },
    methods: {
      submit: function () {
        ApiService.post('/api/v1/salaryUser/save', {password: this.pwd}).then((res) => {
          if (res.data.resultCode === '0') {
            this.show = true
            this.text = res.data.resultDesc
          } else if (res.data.resultCode === '1') {
            this.$router.push('/wa-wageList')
          }
        })
      }
    },
    watch: {
      pwd (val) {
        this.pwd = val.replace(/[^\d]/g, '')
        if (val.length > 6) {
          this.pwd = val.substring(0, 6)
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
  }

  .loginForm {
    margin: 30vw auto 0;
    width: 60%;
    padding: 20vw 10vw 15vw;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .input {
    border-bottom: 1px solid #eee;
    width: 90%;
    margin: 0 auto 2vw;
    background: #fff;
    input {
      display: inline-block;
      height: 6vw;
      width: 75%;
      padding-left: 2vw;
    }
  }

  .save {
    text-align: center;
    margin-top: 5vw;
    button {
      width: 90%;
      margin: 0 auto;
      border: none;
      background-color: #2f86cc;
      height: 10vw;
      color: #fff;
      font-size: 4vw;
      border-radius: 3px;
      &:focus {
        outline: none;
      }
    }
  }

</style>
