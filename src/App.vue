<script>
import app from '@/api/app'
export default {
  methods: {
    async getBanner () {
      const banners = await app.getBannerList()
      this.banners = banners
    },
    async getShopContact () {
      const shopInfo = await app.getShopContact()
      wx.setStorageSync('shopInfo', JSON.stringify(shopInfo))
    }
  },
  created () {
    // 设定shopInfo
    this.getShopContact()

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
