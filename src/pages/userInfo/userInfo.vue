<template>
    <div id="app">
        <div class="tab-title">
            <ul>
                <li v-for="(title,index) in tabTitle" :key="index" 
                    @click="cur=index" :class="{active:cur==index}"><img v-bind:src="title"/>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="searchFriends">
                <input name="search" id="search" type="text" placeholder="请输入名字或账号"/>
                <img v-bind:src="imgOfSearch" alt="搜索好友" />
            </div>
            <div v-for="(m,index) in tabMain" :key="index" v-show="cur==index">{{m}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imgOfSearch: '/static/images/search.png',
      tabTitle: ['/static/images/userImg.png',
        '/static/images/friends.png',
        '/static/images/addFriends.png'
      ],
      tabMain: ['内容一', '内容二', '内容三', '内容四'],
      cur: 0 // 默认选中第一个tab
    }
  }
}
</script>

<style scoped>
#app{
    width: 100vw;
    height: 100vh;
    background-color:#ccc;
    display: flex;
    flex-flow: row nowrap;
}

.tab-tilte{
    width: 20%;
    height: 100%;
}

ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    background-color:darkslategray;
}

ul li{
    padding: 20rpx 20rpx;
    text-align: center;
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
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    border: 0 0;
    margin: 0 20rpx;
}

.searchFriends{
    position: relative;
    width: 100%;
    height: 60rpx;
    margin: 10rpx 0rpx 20rpx 0rpx;
    padding: 10rpx 0rpx 30rpx 0rpx;
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: row;
}

.searchFriends input{
    width: 100%;
    height:100%;
    background-color: cornsilk;
}

.searchFriends img{
    position:absolute;
    right: 10rpx;
    top: 18rpx;
    width: 40rpx;
    height: 40rpx;
}

</style>