<template>
    <div class="app">
        <div class="tab-title" >
            <ul>
                <li v-for="(title,index) in tabTitle" :key="index" 
                    @click="changeHeight(index)" :class="{active:cur==index}"><img v-bind:src="title"/>
                </li>
            </ul>
        </div>

        <div class="tab-content">
            <div class="fixedArea">            
                <div class="searchFriends">
                    <input v-model="searchName" name="search" id="search" type="text" placeholder="请输入名字或账号"/>
                    <div @click="searchFriends">
                        <img v-bind:src="imgOfSearch" alt="搜索"/>
                    </div>   
                </div>
            </div>  
            <div class="content">  
                <div class="cSub"  v-show="isChange">
                    <div v-if="cur===1">
                        <div class="userDiv" v-for="(user,n) in userList" :key="n">
                            <span id="cImg" ><img v-bind:src="user.img" /></span>
                            <span id="cName">{{user.name}}</span>
                        </div>
                    </div>
                    <div class="userInfo" v-else-if="cur===0">  
                        <div id="uImg"><img v-bind:src="userImg" alt="个人头像"/></div>
                        <div id="uName">用户昵称：{{userName}}</div>
                        <div id="uAccount">用户账号：{{userAccount}}</div>
                        <button>编辑</button>
                    </div>
                    <div v-else>  
                        <span id="cImg">添加好友</span>
                        <span id="cName">搜索</span>
                    </div>
                </div>
                <div class="searchInfo" v-show="!isChange">
                    <div class="userDiv" v-for="(user,n) in searchList" :key="n" v-show="isChange">
                            <span id="cImg" ><img v-bind:src="user.img" /></span>
                            <span id="cName">{{user.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      userImg: '/static/images/userImg.png',
      userName: '林文娜',
      userAccount: 201625050207,
      searchName: '',
      isChange: true,
      imgOfSearch: '/static/images/search.png',
      tabTitle: ['/static/images/userImg.png',
        '/static/images/friends.png',
        '/static/images/addFriends.png'
      ],
      cur: 1, // 默认选中第一个tab
      userList: [{img: '/static/images/userImg.png', name: '林文娜'},
        {img: '/static/images/userImg.png', name: '吴尉溶'},
        {img: '/static/images/userImg.png', name: '曹洁亮'},
        {img: '/static/images/userImg.png', name: '袁林清'},
        {img: '/static/images/userImg.png', name: '詹自耘'},
        {img: '/static/images/userImg.png', name: '许倩莹'},
        {img: '/static/images/userImg.png', name: '刘嘉丽'},
        {img: '/static/images/userImg.png', name: '张正扬'},
        {img: '/static/images/userImg.png', name: '钟金海'},
        {img: '/static/images/userImg.png', name: '林琳'}
      ],
      searchList: [{img: '', name: ''}],
      backup: []
    }
  },
  methods: {
    changeHeight: function (index) {
      this.cur = index
      this.searchName = ''
      this.isChange = true
    },
    searchFriends: function () {
      if (this.searchName !== null && this.searchName !== '') {
        var i = 0
        var j = 0
        this.isChange = false
        this.searchList = []
        for (i = 0; i < this.userList.length; i++) {
          if (this.userList[i].name.includes(this.searchName)) {
            this.searchList[j++] = this.userList[i]
          }
        }
      }
    }
  }
}
</script>

<style scoped>

.userInfo{
    width: inherit;
    height: inherit;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    margin-top: 100rpx;
}

.userInfo div{
    height: 60rpx;
    padding:10rpx 10rpx;
    background-color: gainsboro;
    margin: 20rpx auto;
}

#uImg,img{
    width: 200rpx;
    height: 200rpx;
}

.userInfo button{
    width: 160rpx;
    height: 100rpx;
    text-align: center;
    border-radius:20rpx; 
    background-color: gainsboro;
}
.userDiv{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    border: 1rpx solid gainsboro;
    background-color: gainsboro;
    margin-bottom: 10rpx;
}
#cImg img{
    width:80rpx;
    height:80rpx;
}
#cName{
    font-size: 40rpx;
    margin-left: 20rpx;
}
.app{
    width: 100vw;
    height: 100vh;
    background-color:#ccc;
    display: flex;
    flex-flow: row wrap;
    overflow: auto;
}

.app2{
    width: 100vw;
    height: 100vh;
    background-color:#ccc;
    display: flex;
    flex-flow: row wrap;
    overflow: auto;
}

.tab-tilte{
    width: 20%;
    height: 100%;
}

ul{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    background-color:darkslategray;
}

ul li{
    padding: 20rpx 20rpx;
    text-align: center;
    margin-bottom:30rpx;
    cursor: pointer;
}

li img{
    width: 60rpx;
    height: 60rpx;
}

     /* 点击对应的标题添加对应的背景颜色 */
.active{
    background-color:#ccc;
}

.tab-content{
    width: 80%;
    height: 100%;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    border: 0 0;
    margin: 0 20rpx;
}
.fixedArea{
    width: 80%;
    height: 10%;
    position: fixed;
    padding: 0 0;
}
.searchFriends{
    background-color: #ccc;
    width: 100%;
    height: 80%;   
    padding: 30rpx 0 0 0;  
    margin: 0 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-bottom: 1px solid gray;
}

.searchFriends div{
    width: 60rpx;
    height:60rpx;
    background-color: gainsboro;
}

.searchFriends div img{
    width: 50rpx;
    height:50rpx;
    margin:5rpx 5rpx;
}

.searchFriends input{
    
    width: 90%;
    height:60rpx;
    background-color: gainsboro;
    margin-right: 10rpx;
}

.content{
    height: 90%;
    margin-top: 140rpx;
}

</style>