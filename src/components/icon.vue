<template>
  <div
    class="icon iconfont van-cell-icon"
    :class="[ icon ? 'icon-'+icon:'']"
    style=""
    @click="onClick"
  >
    <!--<view wx:if="{{ info !== null }}" class="van-icon__info">{{ info }}</view>-->
  </div>

</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: null
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
  @import "../style/base.scss";
  .iconfont.icon{
    font-size: $theme-icon-size;
  }
.van-icon{position:relative;display:inline-block;font:normal normal normal 14px/1 vant-icon;font-size:inherit;text-rendering:auto}.van-icon__info{color:#fff;left:100%;top:-.5em;font-size:.5em;padding:0 .3em;text-align:center;min-width:1.2em;line-height:1.2;position:absolute;border-radius:.6em;box-sizing:border-box;background-color:#f44;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-family:PingFang SC,Helvetica Neue,Arial,sans-serif}.van-icon::before{display:inline-block}
</style>
