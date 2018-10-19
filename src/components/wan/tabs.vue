<template>
  <div class="van-tabs van-tabs--line">
    <div class="van-tabs__wrap van-tabs__wrap--scrollable van-hairline--top-bottom">
      <scroll-view
        scroll-with-animation
        scroll-left="0"
      >
        <view class="van-tabs__nav van-tabs__nav--line">
          <view  class="van-tabs__line" style="transform: translateX(0px); transition-duration: 0.2s; " />
          <!--<view-->
            <!--wx:for="{{ tabs }}"-->
            <!--wx:key="index"-->
          <!--&gt;-->
            <!--&lt;!&ndash;<view class="van-ellipsis">{{ item.data.title }}</view>&ndash;&gt;-->
          <!--</view>-->
          <view class="van-tab van-tab van-tab--active van-tab--active">
            <view class="van-ellipsis van-ellipsis">全部</view>
          </view>
          <view class="van-tab van-tab van-tab--active van-tab--active">
            <view class="van-ellipsis van-ellipsis">全部</view>
          </view>
        </view>
      </scroll-view>
    </div>
    <view class="van-tabs__content">
      <slot />
    </view>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data () {
      return {
        inited: false,
        active: false,
        tabs: [],
        lineStyle: '',
        scrollLeft: 0
      }
    },
    props: {
      scrollable: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick () {
        console.log('hh')
      }
    }
  }
</script>

<style lang="scss">
  .van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom {
    position: relative
  }

  .van-hairline--bottom::after,.van-hairline--left::after,.van-hairline--right::after,.van-hairline--surround::after,.van-hairline--top-bottom::after,.van-hairline--top::after,.van-hairline::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    border: 0 solid #eee
  }

  .van-hairline--top::after {
    border-top-width: 1px
  }

  .van-hairline--left::after {
    border-left-width: 1px
  }

  .van-hairline--right::after {
    border-right-width: 1px
  }

  .van-hairline--bottom::after {
    border-bottom-width: 1px
  }

  .van-hairline--top-bottom::after {
    border-width: 1px 0
  }

  .van-hairline--surround::after {
    border-width: 1px
  }

  .van-tabs {
    position: relative;
    -webkit-tap-highlight-color: transparent
  }

  .van-tabs__wrap {
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    position: absolute
  }

  .van-tabs__wrap--page-top {
    position: fixed
  }

  .van-tabs__wrap--content-bottom {
    top: auto;
    bottom: 0
  }

  .van-tabs__wrap--scrollable .van-tab {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 22%;
    flex: 0 0 22%
  }

  .van-tabs__nav {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-user-select: none;
    user-select: none;
    position: relative;
    background-color: #fff
  }

  .van-tabs__nav--line {
    height: 100%
  }

  .van-tabs__nav--card {
    margin: 0 15px;
    border-radius: 2px;
    box-sizing: border-box;
    border: 1px solid #f44;
    height: 30px
  }

  .van-tabs__nav--card .van-tab {
    color: #f44;
    border-right: 1px solid #f44;
    line-height: 28px
  }

  .van-tabs__nav--card .van-tab:last-child {
    border-right: none
  }

  .van-tabs__nav--card .van-tab.van-tab--active {
    color: #fff;
    background-color: #f44
  }

  .van-tabs__line {
    z-index: 1;
    left: 0;
    bottom: 0;
    height: 2px;
    position: absolute;
    background-color: #f44
  }

  .van-tabs--line {
    padding-top: 44px
  }

  .van-tabs--line .van-tabs__wrap {
    height: 44px
  }

  .van-tabs--card {
    padding-top: 30px
  }

  .van-tabs--card .van-tabs__wrap {
    height: 30px
  }

  .van-tab {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    cursor: pointer;
    padding: 0 5px;
    font-size: 14px;
    position: relative;
    color: #333;
    line-height: 44px;
    text-align: center;
    box-sizing: border-box;
    background-color: #fff;
    min-width: 0
  }

  .van-tab span {
    display: block
  }

  .van-tab--active {
    color: #f44
  }

  .van-tab--disabled {
    color: #c9c9c9
  }
</style>
