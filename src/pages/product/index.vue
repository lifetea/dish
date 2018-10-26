<template>
  <div class="main-wrap">
    <!--<wan-search placeholder="请输入搜索关键词"   use-action-slot-->
                <!--:search="doSearch">-->
      <!--<view slot="action" @click="doSearch">搜索</view>-->
    <!--</wan-search>-->
    <!--<wan-search></wan-search>-->
    <div class="nav-control">
      <!--<van-search background="white" placeholder="请输入搜索关键词"   use-action-slot-->
                  <!--:v-model="searchContent"-->
                  <!--&gt;-->
        <!--<view slot="action" @click="doSearch">搜索</view>-->
      <!--</van-search>-->
      <wan-search :isFocus=true confirmType="search" :inputValue="searchContent" placeholder="请输入搜索商品" @input="searchChange" @confirm="doSearch"></wan-search>
      <wan-tabs @change='tabChange' :tabs="category"></wan-tabs>
      <van-tabs :active="activeTab" @change="tabOnChange">
        <van-tab  v-for="(c,k) in category" :key="k" :title="c.typeName"></van-tab>
      </van-tabs>
    </div>
    <div class="prod-wrap">
      <wan-card v-for="(p,k) in productList" :key="k"
        :title="p.name"
        :thumb="p.imgUrl+'?x-oss-process=style/c400'"
        num="2"
        price="2.00"
        view="100"
      />
    </div>
    <toast></toast>
  </div>
</template>

<script>
import product from '@/api/product'
import card from '@/components/card'
import tabs from '@/components/wan/tabs'
import search from 'mpvue-weui/src/searchbar'
import toast from 'mpvue-weui/src/toast'
export default {
  data () {
    return {
      category: {},
      categoryId: '',
      activeTab: 0,
      productList: [],
      product: product,
      pageNum: 1,
      lastPage: 100,
      nextPage: 1,
      pageSize: 4,
      searchContent: ''
    }
  },

  components: {
    'wan-card': card,
    'wan-search': search,
    toast,
    'wan-tabs': tabs
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    doSearch (e) {
      const that = this
      that.getProduct({type: 0, name: that.searchContent})
      console.log('商品查询', that.searchContent)
    },
    searchChange (e) {
      const that = this
      that.searchContent = e.mp.detail.value
    },
    tabOnChange (e) {
      const that = this
      const index = e.target.index
      const tab = that.category[index]
      that.categoryId = tab.id
      that.getProduct({type: 1})
    },
    tabChange (e) {
      console.log('父', e)
    },
    async getCategory () {
      const category = await product.getCategory()
      category.unshift({
        business_id: '1',
        id: '',
        typeId: 0,
        typeName: '全部'
      })
      this.category = category
    },
    async getProduct ({type = 0, name = ''}) {
      const that = this
      const productData = await product.getProduct({pageNum: that.pageNum, pageSize: that.pageSize, categoryId: that.categoryId, name: name})
      if (type === 0) {
        that.productList = productData.list
      } else {
        productData.list.forEach(e => {
          that.productList.push(e)
        })
      }
      that.lastPage = productData.lastPage
      that.pageNum = productData.pageNum
      that.nextPage = productData.nextPage
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  // 上拉加载
  async onReachBottom () {
    const that = this

    if (that.pageNum < that.lastPage) {
      that.pageNum = that.nextPage
      that.getProduct({type: 1})
    }
  },
  async onPullDownRefresh () {
    const that = this
    that.pageNum = 1
    that.getProduct({type: 0})
    console.log('hhhh')
    // to doing..
    // 停止下拉刷新
    wx.stopPullDownRefresh()
  },
  onLoad () {
    this.getCategory()
    this.getProduct({type: 0})
  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss">
  .main-wrap{
    padding-top: 184.5rpx;
  }
  .nav-control{
    position: fixed;
    top: 0;
    width: 100%;
  }
  .prod-wrap{
    display: flex;
    background: #f2f2f2;
    flex-wrap: wrap;
  }
  .weui-search-bar{
    /*border-top:1rpx solid #d7d6dc;*/
    /*border-bottom:1rpx solid #d7d6dc;*/
    border: none;
    /*background-color:#efeff4;*/
    background: #fff;
    .weui-search-bar__form{
      border: none;
    }
    .weui-search-bar__cancel-btn{
      font-size: 16px;
      color: #6d6d6d;
    }
  }
</style>
