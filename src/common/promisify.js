export function promisify (api, options, ...params) {
  return new Promise((resolve, reject) => {
    api(Object.assign({}, options, {
      success: resolve,
      fail: reject
    }), ...params)
  }).catch(err => console.log(err))
}

export default{
  promisify
}
