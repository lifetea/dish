<template>
  <div class="custom-class van-cell-group" :class="border ? 'van-hairline--top-bottom' : ''">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
  .van-cell-group{
    margin: 14rpx 0;
  }
  .van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom::after,.van-hairline--left::after,.van-hairline--right::after,.van-hairline--surround::after,.van-hairline--top-bottom::after,.van-hairline--top::after,.van-hairline::after{content:'';position:absolute;top:0;left:0;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;border:0 solid #eee}.van-hairline--top::after{border-top-width:1px}.van-hairline--left::after{border-left-width:1px}.van-hairline--right::after{border-right-width:1px}.van-hairline--bottom::after{border-bottom-width:1px}.van-hairline--top-bottom::after{border-width:1px 0}.van-hairline--surround::after{border-width:1px}
</style>
