<template>
  <div class="news-wrap">
    <div class="head">
      <h1 class="title">伊利公开举报原创始人郑俊怀:多名高官充当保护伞 .</h1>
      <div class="info">
        <span class="time js-time">2018-10-24 12:01</span>
        <span class="source js-source">北京青年报</span>
      </div>
    </div>
    <div class="content">
      <p>10月24日上午，伊利公司在企业官方网站发出举报信，公开举报郑俊怀等人，声称郑俊怀索要巨额犯罪所得不成，动用最高检某原副检察长等人施压，长期造谣迫害伊利，多位省部级、厅局级领导均充当郑俊怀保护伞，人为抹掉2.4亿犯罪事实，运作假减刑，14年来无人敢处理。</p>
      <p><b>以下为伊利集团官网原文：</b></p>
      <p>1、今年3月谣言案案发前，郑俊怀北京密会刘成昆，诋毁伊利的谣言文章随即出炉；</p>
      <p>2、索要巨额犯罪所得不成，造谣伊利套路十几年如出一辙；</p>
      <p>3、原国家级领导、多位省部级领导、厅局级领导充当郑俊怀保护伞，人为抹掉郑俊怀数亿元犯罪事实，运作假减刑；</p>
      <p>4、郑俊怀6年刑期，被人为操纵以“发明假节水设备专利”和“表现好”为由减刑2年半，实际服刑过程中如住宾馆可随时回家；</p>
    </div>
  </div>
</template>

<script>
import apiNews from '@/api/news'
import wanNews from '@/components/news'
export default {
  data () {
    return {
      imageURL: '//fuss10.elemecdn.com/2/71/bc2cb7ce587d61b90174b5f89e171jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
      motto: 'Hello World',
      userInfo: {},
      category: {},
      activeTab: 0,
      newsList: [],
      apiNews: apiNews
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
    async getNewsDetail ({type = 0, name = ''}) {
      const that = this
      const data = await apiNews.getNewsDetail({pageNum: that.pageNum, pageSize: that.pageSize, categoryId: that.categoryId, name: name})
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
    console.log('hh')
  },
  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style lang="scss">
  .news-wrap{
    padding: 0 .3rem .4rem;
    border-bottom: 1px solid #e6e6e6;
    background-color: #f6f6f6;
    .head {
      font-weight: 400;
      padding: .54rem 0 0;
      .title {
        font-size: .46rem;
        font-weight: 700;
        padding: 0 0 .2rem;
        color: #404040;
      }
      .info {
        font-size: .28rem;
        font-weight: 400;
        margin: 0 0 .12rem;
        color: #888;
        .source {
          padding-left: .2rem;
        }
      }
    }
    .content {
      font-size: .36rem;
      line-height: 1.5em;
      word-break: break-all;
      color: #404040;
      p {
        margin: .6rem 0;
        text-align: justify;
        text-indent: 2em;
      }
    }
  }
</style>
