<template>
  <div class="loginWrap">
    <div class="loginForm">
      <form @submit.prevent="submit">
        <div class="input"><!--<img src="../../assets/icon_login_name.png" alt="">-->
          <input v-model="identityCode" type="text" placeholder="身份证号">
        </div>
        <div class="save">
          <p style="color: red;padding-left: 2vw">*首次使用请绑定身份证号</p>
          <button type="submit">立即绑定</button>
        </div>
      </form>
    </div>
    <toast v-model="show" type="text" width="20rem" :time="800" is-show-mask :text="text" position="bottom"></toast>
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
        identityCode: '',
        text: '',
        show: false
      }
    },
    methods: {
      submit: function () {
        if(this.testCid(this.identityCode)){
          ApiService.post('/api/v1/salaryUser/bindUser', {identityCode: this.identityCode}).then((res) => {
            if (res.data.resultCode === '0') {
              this.show = true
              this.text = res.data.resultDesc
            } else if (res.data.resultCode === '1') {
              this.$router.push('/wa-setPwd')
            }
          })
        }
      },
      testCid:function(code) {

        let city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " }
        let pass = true
        if (!code || !/^[1-9]\d{5}((1[89]|20)\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dx]$/i.test(code)) {
          this.text = "身份证号格式错误！"
          this.show = true
          pass = false
        }

        else if (!city[code.substr(0, 2)]) {
          this.text = "地址编码错误！"
          this.show = true
          pass = false
        }
        else {
          //18位身份证需要验证最后一位校验位
          if (code.length == 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
            //校验位
            let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
            let sum = 0
            let ai = 0
            let wi = 0
            for (let i = 0; i < 17; i++) {
              ai = code[i]
              wi = factor[i]
              sum += ai * wi
            }
            let last = parity[sum % 11]
            if (parity[sum % 11] != code[17]) {
              this.text = "身份证号错误！"
              this.show = true
              pass = false
            }
          }
        }

        return pass;
      }
    },
    watch: {
      identityCode (val) {
        this.identityCode = val.replace(/[^\d]/g, '')
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
