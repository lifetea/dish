<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 744971 */
    src: url('//at.alicdn.com/t/font_744971_imgaks5rqj.eot');
    src: url('//at.alicdn.com/t/font_744971_imgaks5rqj.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_744971_imgaks5rqj.woff') format('woff'),
    url('//at.alicdn.com/t/font_744971_imgaks5rqj.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_744971_imgaks5rqj.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family:'iconfont';
    font-size:16px;
    font-style: normal;
    color: #9e9595;
  }
  page{
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
