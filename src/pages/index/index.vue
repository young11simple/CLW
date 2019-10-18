<template>
    <div class="container">
        <div class="head">
            <img v-bind:src="img" alt="logo"/>
            <h1 id="title" v-html="title"></h1>
        </div>
        <div class="btn" >
            <button class="btnSub" v-on:click="login">登录</button>
            <button class="btnSub" v-on:click="register">注册</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      img: '/static/images/JieBeiCounty.png',
      title: '欢迎来到CLW聊天室!<br/>如果已有账号请登录,<br/>没有请先注册，谢谢'
    }
  },
  methods: {
    register: function () {
      wx.navigateTo({
        url: '../register/main',
        success: function () {
          console.log('页面跳转成功')
        },
        fail: function () {
          console.log('页面跳转失败')
        }
      })
    },
    login: function () {
      wx.navigateTo({
        url: '../login/main',
        success: function () {
          console.log('页面跳转成功')
        },
        fail: function () {
          console.log('页面跳转失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.container{
    
    border:1px solid #ccc;  
    background-color: #ccc;
    width: 100vw;
    height: 100vh;
    padding: 10rpx 10rpx;
}

.head{
    width: 100vw;
    height: 50%;
    margin: 200rpx 0 0 0;
    text-align: center;
    padding: 10rpx 10rpx;
}
img{
    width: 120rpx;
    height:120rpx;
    margin-bottom: 10px;
    border-radius: 4px;
    padding: 5px;
}

#title{
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-top: 20px;
    letter-spacing: 3rpx;
    font-family: 'STXingkai','STXinwei';
    color:darkslategray;
}

.btn{
    height: 50%;
    margin: -200rpx 0 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    
}

.btnSub{
    width: 140rpx;
    height:70rpx;
    background-color:gainsboro;
    font-size: 30rpx;
    border-radius: 12px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color:dimgrey;
    padding-bottom: 30rpx;
}

</style>