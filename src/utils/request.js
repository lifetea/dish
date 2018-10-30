import wx from 'wx'
import Fly from 'flyio'

const request = new Fly()

request.interceptors.request.use((request) => {
  // if (request.method === 'POST' && typeof request.body === 'object') {
  //   let data = ''
  //   for (let key in request.body) {
  //     if (data) {
  //       data += '&'
  //     }
  //     data += encodeURIComponent(key) + '=' + encodeURIComponent(request.body[key])
  //   }
  //   request.body = data
  // }
  wx.showNavigationBarLoading()
  const token = wx.getStorageSync('token')
  request.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json',
    'token': token
  }
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  },
  (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request
