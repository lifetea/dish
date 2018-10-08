<template>
  <div class="custom-class van-card">
    <div class="van-card__thumb">
      <image v-if="thumb" mode="widthFix" :src="thumb" class="van-card__img thumb-class" />
      <!--<slot wx:else name="thumb" />-->
      <div v-else slot="thumb" />
    </div>
    <div class="van-card__content">
      <view v-if="title || price || price === 0" class="van-card__row">
        <view v-if="title" class="van-card__title title-class">{{ title }}</view>
        <view v-if="price || price === 0" class="van-card__price price-class">{{ currency }} {{ price }}</view>
      </view>
      <!--<slot wx:else name="title" />-->
      <div v-else slot="title" />
      <view v-if="desc || num " class="van-card__row">
        <view v-if="desc " class="van-card__desc desc-class">{{ desc }}</view>
        <view v-if="num" class="van-card__num num-class">x {{ num }}</view>
      </view>
      <div v-else slot="desc" />
      <div  slot="tags" />
    </div>
    <view class="van-card__footer">
      <slot name="footer"></slot>
    </view>
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
    desc: {
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
    price: {
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
  }
}
</script>

<style lang="scss">
  .van-card {
    color: #333;
    font-size: 16px;
    background: #fafafa;
    position: relative;
    box-sizing: border-box;
    width: calc(50% - 20rpx);
    height: 200px;
    flex-direction: row;
    margin: 5rpx 10rpx;
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
    height: 180px;
    overflow: hidden;
  }

  .van-card__img {
    border: none;
    max-width: 100%;
    max-height: 100%
  }

  .van-card,.van-card__row,.van-card__thumb {
    /*display: -webkit-box;*/
    /*display: -webkit-flex;*/
    /*display: flex*/
  }

  .van-card__content {
    width: 100%;
    /*background: red;*/
  }

  .van-card__content--center {
    height: 90px;
    /*-webkit-box-align: center;*/
    /*-webkit-align-items: center;*/
    /*align-items: center*/
  }

  .van-card__desc,.van-card__title {
    line-height: 20px;
    white-space: nowrap;
  }

  .van-card__title {
    height: 40px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 2;*/
    /*-webkit-box-orient: vertical*/
  }

  .van-card__desc {
    color: #666;
    font-size: 12px;
    max-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }

  .van-card__num,.van-card__price {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 80px;
    line-height: 20px;
    text-align: right
  }

  .van-card__price {
    font-size: 14px
  }

  .van-card__num {
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
