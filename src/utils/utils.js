let util = {}

const ajaxUrl = process.env.NODE_ENV === 'development'
  // 测试接口地址
  ? 'http://39.96.10.247:8888/api/user/'
  // 线上接口地址
  : 'http://39.96.10.247:8888/api/user/'
util.API = ajaxUrl
util.oauthUrl = ajaxUrl

export default util
