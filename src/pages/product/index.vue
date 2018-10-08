<template>
  <div class="main-wrap">
    <van-search placeholder="请输入搜索关键词"   use-action-slot
                :search="doSearch">
      <view slot="action" @click="doSearch">搜索</view>
    </van-search>
    <van-tabs>
      <van-tab title="全部"></van-tab>
      <van-tab title="污水处理"></van-tab>
      <van-tab title="农田排灌"></van-tab>
      <van-tab title="工业应用"></van-tab>
      <van-tab title="生活供水"></van-tab>
      <van-tab title="增压类"></van-tab>
      <van-tab title="暖通类"></van-tab>
    </van-tabs>
    <div class="prod-wrap">
      <card
        title="IRG、IRW、立卧式管道离心泵"
        :thumb="imageURL"
        desc="描述"
        num="2"
        price="2.00"
      />
      <card
        title="IRG、IRW、立卧式管道离心泵"
        :thumb="imageURL"
        desc="描述"
        num="2"
        price="2.00"
      />
      <card
        title="标题"
        :thumb="imageURL"
        desc="描述"
        num="2"
        price="2.00"
      />
      <card
        title="标题"
        :thumb="imageURL"
        desc="描述"
        num="2"
        price="2.00"
      />
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import m from '@/data/menu.js'
export default {
  data () {
    return {
      imageURL: '//fuss10.elemecdn.com/2/71/bc2cb7ce587d61b90174b5f89e171jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
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
    doSearch () {
      console.log('商品查询')
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

<style lang="scss">
  .prod-wrap{
    display: flex;
    flex-wrap: wrap;
  }
</style>
