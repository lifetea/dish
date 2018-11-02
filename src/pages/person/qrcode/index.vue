<template>
  <div class="body">
    <view class="payment-wrap">
      <view class="qrcode-wrap">
        <view class="payment-title">名片二维码</view>
        <view class="sub-title">请向业务员出示二维码以便获得更优质的专属顾问服务</view>
        <view class="img-wrap">
          <image :src="qrCodeUrl" mode="widthFix"></image>
        </view>
        <!--<button class="save-file">保存到图库</button>-->
      </view>
      <view class="btn-wrap">
        <!--<button wx:if="{{isPay == 0}}" @tap="payHandler">支付99元意向金</button>-->
        <!--<button wx:else @tap="goListHandler">查看订单</button>-->
        <!--<button @tap="orderHandler">查看订单</button>-->
      </view>
    </view>
  </div>
</template>

<script>
import personApi from '@/api/person'
export default {
  data () {
    return {
      imageURL: '//fuss10.elemecdn.com/2/71/bc2cb7ce587d61b90174b5f89e171jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
      motto: 'Hello World',
      userInfo: {},
      category: {},
      activeTab: 0,
      personApi: personApi,
      qrCodeUrl: ''
    }
  },

  components: {
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    doSearch () {
      console.log('商品查询')
    },
    onChange () {
      console.log('hhh111')
    },
    async getCardCode () {
      const that = this
      const result = await personApi.getCardCode({width: 400})
      that.qrCodeUrl = result.data
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  async onPullDownRefresh () {
    console.log('hhhh')
    // to doing..
    // 停止下拉刷新
    wx.stopPullDownRefresh()
  },
  onLoad () {
    const that = this
    that.getCardCode()
  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss">
  page{
    background: #323233;
  }
  .body{
    height: 100%
  }
  .payment-wrap{
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding-top: 140rpx;
    flex-direction: column;
    justify-content: center;
  }
  .qrcode-wrap{
    padding: 2rem 0;
    min-height: 200rpx;
    background: white;
    border-radius: 10rpx;
  }

  .payment-title{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
  .sub-title{
    margin: 0 auto;
    text-align: center;
    width: 60%;
    font-size: 12px;
    color: #d5d5d5;
    padding: 1rem 0;
  }

  .img-wrap{
    margin: 0 auto;
    width: 80%;
  }
  .img-wrap image{
    width: 100%;
  }

  .save-file{
    width: 200rpx;
    font-size: 14px;
    height: 60rpx;
    border-width: 0;
    border-radius: 30rpx;
  }

  .btn-wrap{
    margin-top: 1.6rem;
  }

  .btn-wrap button{
    background: #ff4614;
    color: white;
    height: 100rpx;
    width: 100%;
    border-radius: 50rpx;
    font-size: 14px;
    line-height: 100rpx;
    font-weight: bold;
  }

</style>
