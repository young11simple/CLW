import Vue from 'vue'
import User from './user'

const app = new Vue(User)
app.$mount()

export default {
  config: {
    pages: ['pages/user/main', 'pages/userInfo/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    }
  }
}
