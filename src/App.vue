<script>
export default {
  methods: {
  },
  onLaunch () {
    // const token = wx.getStorageSync('token')
    // console.log('初始化', token)
  },
  created () {
    // console.log('创建')
    // const that = this
    // that.doLogin()
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
  @import url(style/iconfont/iconfont.css);
  page {
    height: 100%;
  }
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
