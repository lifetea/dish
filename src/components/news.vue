<template>
  <div @click="newsDetail" class="custom-class news-card">
    <div class="news-category">
        <span class="iconfont icon-xian"/>
        <span class="category-name">新闻</span>
        <span class="iconfont icon-xian"/>
    </div>
    <div class="van-card__thumb">
      <img v-if="thumb" mode="widthFix" :src="thumb" class="img" />
      <!--<slot wx:else name="thumb" />-->
      <div v-else slot="thumb" />
    </div>
    <div class="content">
      <div v-if="title" class="">
        <view v-if="title" class="van-card__title">{{ title }}</view>
      </div>
      <!--<slot wx:else name="title" />-->
      <div v-else slot="title" />
      <div v-if="view || num " class="view-wrp">
        <span v-if="view" class="view-item">
          <span class="iconfont icon-view"></span>
          <span class="news-view view-text">{{ view }}</span>
        </span>
        <span v-if="num" class="view-item">
          <span class="iconfont icon-pinglun"></span>
          <span class="news-comment view-text">{{ num }}</span>
        </span>
        <span v-if="zan" class="view-item right">
          <span class="iconfont icon-zan"></span>
          <span class="news-zan view-text">{{ zan }}</span>
        </span>

      </div>
      <div v-else slot="view" />
      <div  slot="tags" />
    </div>
    <div class="van-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    num: {
      type: String,
      default: null
    },
    view: {
      type: String,
      default: null
    },
    zan: {
      type: String,
      default: null
    },
    thumb: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    centered: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    }
  },
  methods: {
    newsDetail () {
      const url = '../news/detail/main'
      wx.navigateTo({ url })
    }
  }
}
</script>

<style lang="scss">
  .news-card {
    color: #333;
    font-size: 14px;
    background: #fafafa;
    box-sizing: border-box;
    width: calc(100% - 40rpx);
    margin: 16rpx 15rpx 16rpx 15rpx;
    /*flex-direction: row;*/
    /*&:nth-child(odd){*/
      /*margin: 5rpx 5rpx 5rpx 10rpx;*/
    /*}*/
    /*&:nth-child(even){*/
      /*margin: 5rpx 10rpx 5rpx 5rpx;*/
    /*}*/
    .right{
      float: right;
    }

    .news-category{
      padding: 8rpx 0;
      text-align: center;
      color: #9d9d9d;
      .category-name{
        padding: 0 10rpx;
      }
    }

    .content {
      width: 92%;
      margin: 0 auto;
      box-sizing: padding-box;
      padding:0 16rpx;
      overflow: hidden;
      /*background: red;*/
    }

    .content--center {
      height: 90px;
      /*-webkit-box-align: center;*/
      /*-webkit-align-items: center;*/
      /*align-items: center*/
    }

    .van-card--center,.van-card__thumb {
      /*-webkit-box-align: center;*/
      /*-webkit-align-items: center;*/
      /*align-items: center;*/
      /*-webkit-box-pack: center;*/
      /*-webkit-justify-content: center;*/
      /*justify-content: center*/
    }

    .van-card__thumb {
      width: 100%;
      height: 360rpx;
      overflow: hidden;
      .img {
        border: none;
        width: 100%;
        max-width:100%;
        max-height:100%;

      }
    }

    .view-wrp{
      color: #333333;
      .view-item{
        padding: 0 8rpx;
        .view-text{
          padding-left: 8rpx;
          vertical-align: text-top;
        }
      }
      .news-view,news-comment,news-zan{
        padding: 0 4rpx;
        font-size: 12px;
      }
    }
  }

  .news-view,.van-card__title {
    line-height: 20px;
    white-space: nowrap;
  }

  .van-card__title {
    height: 50rpx;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 2;*/
    /*-webkit-box-orient: vertical*/
  }

  .news-view {
    color: #666;
    font-size: 12px;
    max-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }

  .news-comment, .news-zan {
    color: #666;
    font-size: 12px
  }

  .van-card__footer {
    right: 15px;
    bottom: 5px;
    position: absolute
  }

  .van-card__footer .van-button {
    margin-left: 5px
  }
</style>
