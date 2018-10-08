<template>
  <div class="body">
    <div class="user-wrap">
      <div class="userinfo" @click="handleViewTap">
        <div class="logo-wrap">
          <open-data class="logo"  type="userAvatarUrl"></open-data>
        </div>
        <div class="userinfo-nickname">
          <open-data  type="userNickName"></open-data>
        </div>
      </div>
    </div>
    <wan-cell-group>
      <wan-cell icon="book"  title="我的预约" is-link></wan-cell>
    </wan-cell-group>
    <wan-cell-group>
      <wan-cell icon="order-list"  title="我的订单" is-link></wan-cell>
      <wan-cell icon="shop-cart"  title="购物车" is-link></wan-cell>
      <wan-cell icon="gif" is-link>
        <div slot="title">
          <span class="van-cell-text">活动</span>
          <van-tag type="danger">热</van-tag>
        </div>
      </wan-cell>
    </wan-cell-group>
    <wan-cell-group>
      <wan-cell icon="qrcode" :isLink="true" title="二维码"></wan-cell>
      <wan-cell icon="address" :isLink="true"  title="收货地址"></wan-cell>
      <wan-cell icon="phone" :isLink="true"  title="手机号"></wan-cell>
    </wan-cell-group>
    <wan-cell-group>
      <wan-cell icon="wxapp" :isLink="true" title="我也要做小程序"></wan-cell>
    </wan-cell-group>
  </div>
</template>
<script>
  import icon from '@/components/icon'
  import cell from '@/components/cell'
  import cellGroup from '@/components/cellGroup'
  export default {
    components: {
      icon,
      'wan-cell': cell,
      'wan-cell-group': cellGroup
    },
    data () {
      return {
        logs: []
      }
    },
    created () {

    }
}
</script>

<style lang="scss">
  page{
    height: 100%;
    background: #f1f2f4;
  }
  .body{
    height: 100%
  }
  .user-wrap{
    background: white;
    height: 240rpx;
    padding-top: 40rpx;
    color: black;
  }

  .logo-wrap{
    width:140rpx;
    height:140rpx;
    box-shadow:0px 0px 10px #ffffff;
    border-radius: 50%;
    z-index: 2;
    overflow: hidden;
    animation: sway 10s ease-in-out infinite;
    opacity: .95;
  }

  .userinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2rem;
  }

  .userinfo-avatar {
    width: 140rpx;
    height: 140rpx;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #fa0000;
  }

  .userinfo-nickname {
    margin-top: 20rpx;
    margin-left: 20rpx;
    color: black;
    font-family: "PingFang SC";
    font-weight: bold;
    font-size: 18px;
  }

  .panel-wrap{
    width: 100%;
    margin: .8rem auto 0;
    min-height: 200rpx;
  }
  .panel-wrap .cell-panel{
    margin-top: 2rpx;
  }
  .panel-wrap .cell-panel .zan-cell {
    padding:18px 18px;
    display:flex;
    align-items:center;
    line-height:1.8;
    font-size:18px;
    font-family: "PingFang SC";
  }

  .btn-wrap{
    width: 90%;
    margin: 60rpx auto 60rpx;
  }

  .cell-panel{
    display: block;
    margin-top: 10rpx;
  }
  .zan-cell-icon-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .zan-cell-icon{
    display: inline-block;
    height: 42rpx;
    width: 42rpx;
    max-width: 100%;
  }
</style>
