<template>
  <div
  :style="customStyle"
  class="custom-class van-cell"
  :class="[ center ? 'van-cell--center' : '', required ? 'van-cell--required' : '', isLink || clickable ? 'van-cell--clickable' : '', border ? 'van-hairline' : '']"
  @click="onClick"
  >
    <div v-if="icon" class="van-cell__left-icon left-icon-class">
      <wan-icon  :icon="icon"/>
    </div>
    <div v-else slot="icon"></div>
    <div v-if="title" class="van-cell__title title-class" :style="titleWidth ? 'max-width: ' + titleWidth + ';min-width: ' + titleWidth : ''">
      {{ title }}
      <div v-show="label" class="van-cell__label label-class">{{ label }}</div>
    </div>
    <slot name="title">
    </slot>
    <!--<div slot="title"></div>-->

    <div class="van-cell__value value-class">
      <div v-if="value">{{ value }}</div>
      <!--<slot wx:else />-->
    </div>
    <wan-arrow v-if="isLink" :icon="'arrow-right'"/>
    <!--<arrow-->
      <!--v-if="isLink"-->
      <!--:icon="'arrow-right'"-->
      <!--custom-class="van-cell__right-icon right-icon-class"></arrow>-->
    <!--<div v-else slot="right-icon" />-->

    <div slot="extra" />
  </div>

</template>

<script>
    import wanIcon from './icon.vue'
    export default {
      name: 'cell',
      components: {
        'wan-icon': wanIcon,
        'wan-arrow': wanIcon
      },
      props: {
        center: {
          type: Boolean,
          default: true
        },
        required: {
          type: Boolean,
          default: false
        },
        isLink: {
          type: Boolean,
          default: false
        },
        clickable: {
          type: Boolean,
          default: true
        },
        border: {
          type: Boolean,
          default: true
        },
        customStyle: {
          type: String,
          default: ''
        },
        icon: {
          type: String,
          default: null
        },
        title: {
          type: String,
          default: null
        },
        label: {
          type: String,
          default: null
        },
        arrowDirection: {
          type: String,
          default: null
        },
        titleWidth: {
          type: String,
          default: null
        },
        value: {
          type: String,
          default: null
        }
      },
      data () {
        return {
        }
      }
    }
</script>
<style>
  .van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--bottom::after,.van-hairline--left::after,.van-hairline--right::after,.van-hairline--surround::after,.van-hairline--top-bottom::after,.van-hairline--top::after,.van-hairline::after{content:'';position:absolute;top:0;left:0;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;border:0 solid #eee}.van-hairline--top::after{border-top-width:1px}.van-hairline--left::after{border-left-width:1px}.van-hairline--right::after{border-right-width:1px}.van-hairline--bottom::after{border-bottom-width:1px}.van-hairline--top-bottom::after{border-width:1px 0}.van-hairline--surround::after{border-width:1px}.van-cell{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;padding:10px 15px;box-sizing:border-box;line-height:24px;position:relative;background-color:#fff;color:#333;font-size:14px}.van-cell::after{left:15px;right:0;width:auto;-webkit-transform:scale(1,.5);transform:scale(1,.5);border-bottom-width:1px}.van-cell-group{background-color:#fff}.van-cell__label{font-size:12px;line-height:1.2;color:#666}
  .van-cell__title,.van-cell__value{-webkit-box-flex:1;-webkit-flex:1;flex:1}
  .van-cell__value{overflow:hidden;text-align:right;vertical-align:middle}.van-cell__left-icon{font-size:16px;line-height:24px;margin-right:5px;vertical-align:middle}.van-cell__right-icon{color:#999;font-size:12px;line-height:24px;margin-left:5px}.van-cell__right-icon--left::before{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.van-cell__right-icon--up::before{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.van-cell__right-icon--down::before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.van-cell--clickable:active{background-color:#e8e8e8}.van-cell--required{overflow:visible}.van-cell--required::before{content:'*';position:absolute;left:7px;font-size:14px;color:#f44}.van-cell--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}
</style>
