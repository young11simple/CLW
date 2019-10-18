<template>
    <div class="container">
      <div class="can1">
        <div class="can11"><img v-bind:src="img" alt="logo"/></div>
        <div class="can12"><h1 v-html="title"></h1></div>
      </div>
      <div class="can2">
        <form method="post" name="loginForm" onSubmit="return checkUserInfo()">
          <table>
            <tr>
              <td id="label">账号</td>
              <td id="input"><input type="number" name="id" id="id" placeholder="请输入账号（不少于11位）" v-model="aVal"></td>
            </tr>
            <tr v-show="aIsShow">
              <td id="tips">{{aTip}}</td>
            </tr>
            <tr>
              <td id="label">密码</td>
              <td id="input"><input type="password" id="password" name="password" placeholder="请输入密码（不少于6位）" v-model="pVal"></td>
            </tr>
            <tr v-show="pIsShow">
              <td id="tips">{{pTip}}</td>
            <tr>
            <tr>
              <td id="button"><input type="button" name="submintForm" value="登录" @click="checkUserInfo"/></td>
              <td id="button"><input type="button" name="reset" value="重置" @click="resetUserInfo"/></td>
            </tr>
          </table>
        </form> 
      </div>
    </div>
</template>

<script>
import md5 from 'md5'

export default {
  data () {
    return {
      img: '/static/images/JieBeiCounty.png',
      title: 'Welcome to CLW<br/>Please login first',
      aIsShow: false,
      pIsShow: false,
      aTip: '账号不能为空',
      pTip: '密码不能为空',
      aVal: '',
      pVal: ''
    }
  },
  methods: {
    loginSuccess: function (res) {
      console.log('登录成功', res)
    },
    loginFail: function (err) {
      console.log('登录失败', err)
    },
    checkUserInfo: function () {
      if (this.aVal === '') { this.aTip = '账号不能为空'; this.aIsShow = true } else { this.aIsShow = false }
      if (this.pVal === '') { this.pTip = '密码不能为空'; this.pIsShow = true } else { this.pIsShow = false }
      if (this.aVal.length < 11 && this.aVal.length > 0) { this.aTip = '账号不能少于11位'; this.aIsShow = true }
      if (this.pVal.length < 6 && this.pVal.length > 0) { this.pTip = '密码不能少于6位'; this.pIsShow = true }
      if ((!this.aIsShow) && (!this.pIsShow)) {
        const jsonData = {
          id: this.aVal,
          password: md5(this.pVal)
        }
        console.log('测试账号密码是否正确', jsonData)
        // loginTest(jsonData, this).then(res => this.loginSuccess(res))
          .catch(err => this.loginFail(err))
        /*
        wx.navigateTo({
          url: '../user/main'
        }) */
      }
    },
    resetUserInfo: function () {
      this.aVal = ''
      this.pVal = ''
    }
  }
}
</script>

<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
}

.can1{
  width: 100%;
  height: 30%;
  padding-top: 50rpx;
  text-align: center;
}

.can11{
  width: 120rpx;
  height: 120rpx;
  padding: 10rpx 10rpx;
  margin: auto auto;
}

.can12{
  width: 100%;
  height: 60%;
}

h1{
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin: 0rpx 10rpx 20rpx 10rpx; 
    letter-spacing: 3rpx;
    font-family: 'STXinwei';
    color:darkslategray;
}

img{
    margin-top: 20rpx;
    width: 110rpx;
    height:110rpx;
}

.can2{
  width: 100vw;
  margin: 20rpx 10rpx 20rpx 20rpx;
}

.can2 table{
  width: 100vw;
  height: 40%;
  margin-left: 10rpx;
}

.table tr{
  width:  90vw;
  height: 90rpx;
  
}

tr td{
  width: 15%;
  height:60rpx;
  text-align: center;
  background-color: gainsboro;
  padding: 18rpx 10rpx 10rpx 10rpx;
  border-radius: 16rpx;
  float: left;
  margin:20rpx 20rpx;
}

#tips{
  width: 65%;
  font-size: 30rpx;
  background-color: #ccc;
  color:rebeccapurple;
  clear: both;
  margin: 0 20rpx 0 150rpx;
  padding: 0 0 ;
}

table #input{
  width: 65%;
  text-align: left;
}

tr #button{
  width:150rpx;
  height:60rpx;
  border-radius: 15rpx;
  margin: 50rpx 100rpx;
  padding: 0 0;
}

#button input{
  font-size: 35rpx;
  background-color: gainsboro;
}

</style>