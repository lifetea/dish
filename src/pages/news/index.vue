<template>
  <div class="main-wrap">
    <div class="news-wrap">
      <wan-news v-for="(n,k) in newsList" :key="k"
        :title="n.title"
        :thumb="n.imgUrl+'?x-oss-process=style/cwh400'"
        num="2"
        zan="99"
        view="100"
      />
    </div>
  </div>
</template>

<script>
import apiNews from '@/api/news'
import wanNews from '@/components/news'
export default {
  data () {
    return {
      category: {},
      activeTab: 0,
      newsList: [],
      apiNews: apiNews,
      pageNum: 1,
      lastPage: 100,
      nextPage: 1,
      pageSize: 2
    }
  },

  components: {
    'wan-news': wanNews
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
    async getNews ({type = 0, name = ''}) {
      const that = this
      const result = await apiNews.getNews({pageNum: that.pageNum, pageSize: that.pageSize, categoryId: that.categoryId, name: name})
      const code = result.code
      const data = result.data
      if (code === 200) {
        if (type === 0) {
          that.newsList = data.list
        } else {
          data.list.forEach(e => {
            that.newsList.push(e)
          })
        }
        that.lastPage = data.lastPage
        that.pageNum = data.pageNum
        that.nextPage = data.nextPage
      } else {
        wx.showToast({
          title: '失败',
          icon: 'none',
          duration: 2000
        })
      }
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
      that.getNews({type: 1})
    }
  },
  // 下拉刷新
  async onPullDownRefresh () {
    const that = this
    that.pageNum = 1
    that.getNews({type: 0})
    // 停止下拉刷新
    wx.stopPullDownRefresh()
  },
  onLoad () {
    console.log('hh')
    this.getNews({})
  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss">
  .main-wrap{
    background: #f1f2f4;
  }
  .news-wrap{
    display: flex;
    background: #f1f2f4;
    flex-wrap: wrap;
  }
</style>
