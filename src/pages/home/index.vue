<template>
  <div class="main-wrap">
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
      <block v-for="(item, index) in banners" :index="index" :key="key">
        <swiper-item>
          <image :src="item.imageUrl" class="slide-image" mode="widthFix"/>
        </swiper-item>
      </block>
    </swiper>
    <wan-contact :shopInfo="shopInfo"></wan-contact>
    <div class="info-content">
      <wx-parse :content="shopRich" :imageProp="{mode:'widthFix'}" />
    </div>
  </div>
</template>

<script>
import home from '@/api/home'
import contact from '@/components/wan/contact'
import m from '@/data/menu.js'
import wxParse from 'mpvue-wxparse'

export default {
  data () {
    // const shopInfo = JSON.parse(wx.getStorageSync('shopInfo'))
    return {
      motto: 'Hello World',
      menu: m,
      userInfo: {},
      activeMenu: 'm4',
      banners: [],
      shopInfo: {},
      shopRich: '',
      code: ''
    }
  },

  components: {
    'wan-contact': contact,
    'wx-parse': wxParse
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    triggerMenu (id) {
      this.activeMenu = 'm' + id
      console.log('hh')
    },
    async getBanner () {
      const result = await home.getBannerList()
      this.banners = result.data
    },
    async getShopRich () {
      const result = await home.getShopRich()
      this.shopRich = result.data.imageUrl
    },
    async getShopContact () {
      const that = this
      const reslut = await home.getShopContact(that.shop.SHOP_ID)
      that.shopInfo = reslut.data
    },
    async doLogin (callback) {
      // 调用登录接口
      console.log('调用login')
      await wx.login({
        success: async (res) => {
          const result = await home.doLogin(res.code)
          const token = result.data['token']
          wx.setStorageSync('token', token)
          callback()
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  onLoad () {

  },
  created () {
    const that = this
    that.doLogin(() => {
      that.getBanner()
      that.getShopRich()
      that.getShopContact()
    })

    // 调用应用实例的方法获取全局数据
    // this.getShopContact()
  }
}
</script>

<style lang="scss">
  .main-wrap{
    height: 100%;
    .swiper{
      .slide-image{
        width: 100%;
      }
    }
  }
  .info-content{
    .wxParse{
      width: 100%;
    }
    .img{
      width: 100% !important;
    }
  }
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.menuview-main_i6fQ3{
  display: -webkit-flex;
  display: flex;
  height: 100%;
}

.menu-name{
  font-size:14px;
}

.menu-category {
  overflow-y: auto;
  height: 100%;
  background-color: white;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 1.066667rem;
  padding-bottom: 10.666667vw;
}
.menu-nav {
  width: 2.053333rem;
  width: 20.533333vw;
  height: 100%;
}
.menuview-menuview_2hUkG ul {
  -webkit-flex: none;
  flex: none;
}
.menu-wrap {
  position: relative;
  z-index: 0;
}
ol, ul {
  list-style: none;
}
.menuview-menuviewMain_17K3g{
  height: 100%;
}
.menu-item.menu-active {
  color: #333;
  background-color: #f8f8f8;
  text-align: center;
}
.menu-item {
  position: relative;
  padding:45rpx 20rpx;
  font-size: .32rem;
  color: #666;
  text-align: center;
}
.menuview-menuview_2hUkG img {
  max-width: 100%;
}
.menu-icon {
  width: .346667rem;
  width: 3.466667vw;
  height: .346667rem;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: .08rem;
  margin-right: .8vw;
}
img {
  max-width: 100%;
}
a, img {
  -webkit-touch-callout: none;
}
.scroller-wrap{
  position: relative;
  height: 100%;
}
.menuview-menuList_JqDMu {
  height: 100%;
  width: 7.946667rem;
  width: 79.466667vw;
}
  .index-2yB8n {
    height: 100%;
    position: relative;
    z-index: 3;
  }
.scroller-wrap .scroller {
  height: 100%;
  padding-bottom: 1.066667rem;
  padding-bottom: 10.666667vw;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
*, :after, :before {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
dl{
  margin: 0;
}

dt {
  position: relative;
  margin-left: .266667rem;
  margin-left: 2.666667vw;
  padding: .2rem .8rem .2rem 0;
  padding: 2vw 8vw 2vw 0;
}
.category-name{
  margin-right: .133333rem;
  margin-right: 1.333333vw;
  font-weight: 700;
  font-size: .32rem;
  color: #666;
  -webkit-flex: none;
  flex: none;
}

.category-title span{
  -webkit-flex: 1;
  flex: 1;
  color: #999;
  font-size: .266667rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.category-title {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
}
.fooddetails-root_2HoY2 {
  padding: .266667rem 0;
  padding: 2.666667vw 0;
  margin-bottom: .013333rem;
  margin-bottom: .133333vw;
  display: -webkit-flex;
  display: flex;
  min-height: 2.746667rem;
  min-height: 27.466667vw;
  position: relative;
}
.fooddetails-logo_2Q0S7 {
  width: 2.533333rem;
  width: 25.333333vw;
  height: 2.533333rem;
  height: 25.333333vw;
  -webkit-flex: none;
  flex: none;
  margin-right: .266667rem;
  margin-right: 2.666667vw;
  position: relative;
  overflow: hidden;
}
.fooddetails-logo_2Q0S7 img {
  width: 100%;
  border-radius: .053333rem;
  border-radius: .533333vw;
}
.menuview-menuview_2hUkG img {
  max-width: 100%;
}
img {
  max-width: 100%;
}
a, img {
  -webkit-touch-callout: none;
}
.fooddetails-info_1fBtn {
  -webkit-flex: 1;
  flex: 1;
  position: relative;
  padding-bottom: .666667rem;
  padding-bottom: 6.666667vw;
  padding-right: .4rem;
  padding-right: 4vw;
}
.food-name {
  position: relative;
  padding-right: .4rem;
  padding-right: 4vw;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: start;
  align-items: start;
}
.food-name-text {
  font-weight: 700;
  overflow: hidden;
  font-size: .4rem;
  white-space: nowrap;
  width: 4rem;
  width: 40vw;
  text-overflow: ellipsis;
}
.fooddetails-desc_3tvBJ {
  margin: .133333rem 0;
  margin: 1.333333vw 0;
  font-size: .266667rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 4.266667rem;
  width: 42.666667vw;
}

.food-unit{
  margin: .173333rem 0!important;
  margin: 1.733333vw 0!important;
  color: #999;
  font-size: .266667rem;
  line-height: 1;
  min-height: 1em;
}

  .food-unit span {
    vertical-align: middle;
  }
  .food-unit>span:not(:first-child) {
    margin-left: .106667rem;
    margin-left: 1.066667vw;
    vertical-align: middle;
  }
  .food-unit span {
    vertical-align: middle;
  }

.food-sales {
  margin: .173333rem 0!important;
  margin: 1.733333vw 0!important;
  color: #999;
  font-size: .266667rem;
  line-height: 1;
  min-height: 1em;
}
.food-sales span {
  vertical-align: middle;
}
.food-sales>span:not(:first-child) {
  margin-left: .106667rem;
  margin-left: 1.066667vw;
  vertical-align: middle;
}
.food-sales span {
  vertical-align: middle;
}

.fooddetails-button {
  position: absolute;
  right: 40rpx;
  bottom: 40rpx;
  /*width: 40rpx;*/
  /*height: 40rpx;*/
  color: #2a94ec;
}
.fooddetails-button span{
  font-size: 30px;
}
.cartbutton-entitybutton_2u6UF {
    display: -webkit-inline-flex;
    display: inline-flex;
    font-size: .346667rem;
    -webkit-align-items: center;
    align-items: center;
  }
  .cartbutton-entitybutton_2u6UF a {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
  }

  .cartbutton-entitybutton_2u6UF a[disabled] svg {
    fill: #ccc!important;
  }
  .cartbutton-entitybutton_2u6UF svg {
    width: .586667rem;
    width: 5.866667vw;
    height: .586667rem;
    height: 5.866667vw;
    vertical-align: middle;
    fill: #2396ff;
  }

</style>
