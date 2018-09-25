<template>
  <div class="main-wrap">
    <div style="height: 100%;overflow: hidden">
      <div class="menuview-menuview_2hUkG index-2yB8n">
        <!---->
        <div class="menuview-menuviewMain_17K3g">
          <div class="menuview-main_i6fQ3">
            <div class="menu-category menu-nav">
              <ul class="menu-wrap">
                <li v-for="(m,k) in menu"  :class="[m.type == 1 ? 'menu-hasicon': '','m'+m.id == activeMenu? 'menu-active':'']" @click="triggerMenu(m.id)" class="menu-item" :key="k">
                  <img v-if="m.type == 1" class="menu-icon" src="//fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png?imageMogr/format/webp/thumbnail/26x/" />
                  <span class="menu-name">{{m.name}}</span>
                </li>
              </ul>
            </div>
            <div class="scroller-wrap menuview-menuList_JqDMu">
              <scroll-view ref="scroll" scroll-y class="scroller" :scroll-into-view="activeMenu" style="height: 100%;">
                <dl v-for="(m,k) in menu" :key="k" :id="'m'+m.id">
                  <dt role="heading" aria-label="热销，大家喜欢吃，才叫真好吃。">
                    <div class="category-title">
                      <strong class="category-name">{{m.name}}</strong>
                      <span class="category-desc">{{m.desc}}</span>
                    </div>
                  </dt>
                  <dd v-for="(d,i) in m.children" :key="i" role="menuitem" class="">
                    <div class="fooddetails-root_2HoY2">
                    <span class="fooddetails-logo_2Q0S7">
                      <img mode="widthFix" :src="d.img">
                    </span>
                    <section class="fooddetails-info_1fBtn">
                      <p class="food-name">
                        <span class="food-name-text">{{d.name}}</span>
                       </p>
                      <p class="food-sales">
                        <span>月售{{d.sales}}份</span>
                        <!--<span>好评率97%</span>-->
                      </p>
                      <div class="food-unit">
                        <span>单位:{{d.unit}}</span>
                      </div>
                      <span class="salesInfo-price_3_oc1_0 fooddetails-salesInfo_MPG41" style="color: rgb(255, 83, 57);">
                        <!--<span>2</span>-->
                      </span>
                      <div class="fooddetails-button">
                        <span class="iconfont addition_fill">
                        </span>
                      </div>
                    </section>
                    </div>
                  </dd>
                </dl>
              </scroll-view>
            </div>
          </div>
          <!--<div z-index="10">-->
            <!--<button type="button" class="index-essentialTip_vf4aS_0" style="display: none;">去点必选品</button>-->
            <!--<footer class="cartview-cartview_xUNA6">-->
              <!--<div class="cartview-cartmask_3rV-M" style="z-index: 10; display: none;"></div>-->
              <!--<div class="cartview-cartbody_15r9z" style="z-index: 11;">-->
                <!--<section class="discount-tip-discountTip_1IcZ7_0">-->
                  <!--<span style="color: #333333;">满25减2元，满35减3元，满55减4元</span>-->
                <!--</section>-->
                <!--<div style="opacity: 0;">-->
                  <!--<div class="cartview-cartheader_342ET">-->
                    <!--<div class="cartview-headerText_3abxn">-->
                      <!--<span>已选商品</span>-->
                      <!--&lt;!&ndash;&ndash;&gt;-->
                      <!--&lt;!&ndash;&ndash;&gt;-->
                    <!--</div>-->
                    <!--<a href="javascript:" ubt-click="101179" class="cartview-cartheaderRemove_2WfO3">-->
                      <!--<svg>-->
                        <!--<use xlink:href="#cart-remove"></use>-->
                      <!--</svg> <span>清空</span></a>-->
                  <!--</div>-->
                  <!--<div class="entityList-cartbodyScroller_GxeX__0">-->
                    <!--&lt;!&ndash;&ndash;&gt;-->
                    <!--<ul class="entityList-cartlist_-pDz7_0">-->
                    <!--</ul>-->
                    <!--&lt;!&ndash;&ndash;&gt;-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="bottomNav-cartfooter_1qvQh_0" style="z-index: 11;">-->
        <!--<span role="button" aria-label="购物车" attr-quantity="0" class="bottomNav-carticon_2xfrl_0 bottomNav-empty_-atZ2_0">-->
         <!--&lt;!&ndash;&ndash;&gt;</span>-->
                <!--<div role="button" aria-label="购物车有商品0件，共0元，另需配送费2元。" class="bottomNav-cartInfo_135aa_0">-->
                  <!--<p class="bottomNav-carttotal_1nOFY_0"><span class="bottomNav-carttotalOriginal_3vq21_0">未选购商品</span>-->
                    <!--&lt;!&ndash;&ndash;&gt;</p>-->
                  <!--<p class="bottomNav-cartdelivery_Gsj2c_0">另需配送费2元</p>-->
                <!--</div>-->
                <!--<a role="button" href="javascript:;" class="submit-btn-submitbutton_1dW2t_0 submit-btn-disabled_3y1tV_0"><span>&yen;15起送</span></a>-->
              <!--</div>-->
            <!--</footer>-->
            <!--&lt;!&ndash;&ndash;&gt;-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <!--<div class="userinfo" @click="bindViewTap">-->
      <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />-->
      <!--<div class="userinfo-nickname">-->
        <!--<card :text="userInfo.nickName"></card>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="usermotto">-->
      <!--<div class="user-motto">-->
        <!--<card :text="motto"></card>-->
      <!--</div>-->
    <!--</div>-->

    <!--<form class="form-scroller-wrap">-->
      <!--<input type="text" class="form-control" v-model="motto" placeholder="v-model" />-->
      <!--<input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />-->
    <!--</form>-->
    <!--<a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card'
import m from '@/data/menu.js'
export default {
  data () {
    return {
      motto: 'Hello World',
      menu: m,
      userInfo: {},
      activeMenu: 'm4'
    }
  },

  components: {
    card
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
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
  .main-wrap{
    height: 100%;

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
  width: 40rpx;
  height: 40rpx;
  background: red;
}
.fooddetails-button span{
  display: inline-block;
  width: 100%;
  height: 100%;
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
