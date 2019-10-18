import {devStage, webUrl} from './config'
import {promisify} from './promisify'

const request = ({url, methods, data}) => {
  if (devStage === 'dev') return requestMock(url)
  else return requestServer(url, methods, data)
}

// mock请求
/*
将假数据写在一个js里，而不是json
然后把引入写成一个promise，当然这里面不是异步
只是为了写成promise在之后改真实接口的时候，不需要改调用方法
*/
function requestMock (url) {
  let {data} = require('@/mock' + url + '.js')
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

// 请求真实接口
function requestServer (url, methods, data) {
  return new Promise((resolve, reject) => {
    let headerParam = {
      'Content-Type': 'application/json'
    }
    promisify(wx.request, {
      url: `${webUrl}${url}`,
      methods,
      data,
      header: headerParam
    }).then(res => {
      console.log(url + '接口返回数据', res)
      if (parseInt(res.data.code) === 200) {
        resolve(res.data)
      }
      reject(res.data)
    }).catch(err => console.log(err))
  })
}

export default{
  request
}
