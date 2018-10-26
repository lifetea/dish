<template>
  <div class="van-tabs van-tabs--line">
    <div class="tabs-wrap tabs-wrap--scrollable van-hairline--top-bottom">
      <scroll-view
        scroll-x="true"
        scroll-with-animation
        :scroll-left="scrollLeft"
      >
        <div ref="tabs" class="van-tabs__nav van-tabs__nav--line">
          <div  class="van-tabs__line" :style="lineStyle" style="transition-duration: 0.2s;" />
          <div @click="handleChange(t,k)" v-for="(t,k) in tabs" :key="k" class="van-tab " :class="activeTab == k ? 'tab-active' : ''">
            <div class="van-ellipsis">{{t.typeName}}</div>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data () {
      return {
        inited: false,
        active: false,
        activeTab: 0,
        lineStyle: '',
        scrollLeft: 100
      }
    },
    props: {
      scrollable: {
        type: Boolean,
        default: true
      },
      tabs: {
        type: Array,
        default: []
      }
    },
    methods: {
      onClick () {
        console.log('hh')
      },
      trigger (eventName, index) {
        const that = this
        that.$emit(eventName, {
          index,
          title: this.data.tabs[index].data.title
        })
      },
      handleChange (t, k) {
        const that = this
        that.setActive(k)
        console.log('子', t, k)
        that.$emit('change', {test: 'hh'})
        // 将当前对象 evt 传递到父组件
      },
      setActive (active) {
        const that = this
        that.activeTab = active
        wx.createSelectorQuery().select('.van-tab').fields({
          dataset: true,
          size: true,
          scrollOffset: true,
          properties: ['scrollX', 'scrollY'],
          computedStyle: ['margin', 'backgroundColor']
        }, function (res) {
          that.lineStyle = 'transform: translateX(10px);'
          console.log(res.width)
        }).exec()
        this.setLine()
        // if (active !== this.data.active) {
        //   this.trigger('change', active)
        //   this.setData({ active })
        //   this.setActiveTab()
        //   this.setLine()
        //   this.scrollIntoView()
        // }
      },
      setLine () {
        // if (this.data.type !== 'line') {
        //   return
        // }

        // this.getRect('.van-tab', true).then(rects => {
        //   const rect = rects[this.data.active]
        //   const width = this.data.lineWidth || rect.width
        //   let left = rects
        //     .slice(0, this.data.active)
        //     .reduce((prev, curr) => prev + curr.width, 0)
        //   left += (rect.width - width) / 2
        //
        //   this.setData({
        //     lineStyle: `
        //     width: ${width}px;
        //     background-color: ${this.data.color};
        //     transform: translateX(${left}px);
        //     transition-duration: ${this.data.duration}s;
        //   `
        //   })
        // })
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
    -webkit-tap-highlight-color: transparent;
    .tabs-content{

    }
  }

  .tabs-wrap {
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    position: absolute
  }

  .tabs-wrap--page-top {
    position: fixed
  }

  .tabs-wrap--content-bottom {
    top: auto;
    bottom: 0
  }

  .tabs-wrap--scrollable .van-tab {
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

  .van-tabs__nav--card .van-tab.tab-active {
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

  .van-tabs--line .tabs-wrap {
    height: 44px
  }

  .van-tabs--card {
    padding-top: 30px
  }

  .van-tabs--card .tabs-wrap {
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

  .tab-active {
    color: #f44
  }

  .van-tab--disabled {
    color: #c9c9c9
  }
</style>
