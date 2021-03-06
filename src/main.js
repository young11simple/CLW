import Vue from 'vue'
import App from './App'
import store from './store/index'

// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'
// Vue.use(Antd)

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: ['pages/index/main', 'pages/register/main', 'pages/login/main', 'pages/user/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    }
  }
}
