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
              <td id="input"><input type="number" name="id" id="id" placeholder="请输入账号（只限数字）"></td>
            </tr>
            <tr>
              <td id="label">密码</td>
              <td id="input"><input type="password" id="password" name="password" placeholder="请输入密码（不少于6位）"></td>
            </tr>
            <tr>
              <td id="button"><input type="button" name="submintForm" value="提交"/></td>
              <td id="button"><input type="button" name="reset" value="重置"/></td>
            </tr>
          </table>
        </form> 
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      img: '/static/images/JieBeiCounty.png',
      title: 'Welcome to CLW<br/>Please login first'
    }
  },
  methods: {
    checkUserInfo: function () {
      wx.navigateTo({
        url: '../user/main'
      })
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
  width: 100%;
  height: 40%;
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
    width: 15%;
    height: 65%;
    border: 1px solid #ddd;
    border-radius: 4px;
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