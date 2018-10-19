<template>
  <div class="main-wrap">
    <div class="prod-wrap">
      <wan-card v-for="(p,k) in productList" :key="k"
        :title="p.name"
        :thumb="product.ossUrl+p.simpleUrl+'?x-oss-process=style/c400'"
        num="2"
        price="2.00"
        view="100"
      />
    </div>
  </div>
</template>

<script>
import product from '@/api/product'
import card from '@/components/card'
import search from '@/components/wan/search'
export default {
  data () {
    return {
      imageURL: '//fuss10.elemecdn.com/2/71/bc2cb7ce587d61b90174b5f89e171jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
      motto: 'Hello World',
      userInfo: {},
      category: {},
      activeTab: 0,
      productList: [],
      product: product
    }
  },

  components: {
    'wan-card': card,
    'wan-search': search
    // 'wan-field': field
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
    async getProduct () {
      const productList = await product.getProduct(0)
      this.productList = productList
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
  created () {
    // 调用应用实例的方法获取全局数据
    // this.getProduct()
  }
}
</script>

<style lang="scss">
  .main-wrap{

  }
  .prod-wrap{
    display: flex;
    background: #f2f2f2;
    flex-wrap: wrap;
  }
</style>
