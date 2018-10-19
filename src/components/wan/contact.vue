<template>
    <div class="contact-wrp">
      <div class="avater row-item">
        <div class="img-wrp">
          <image mode="widthFix" src="https://oss.wq1516.com/businessImage/lsy20181015130836.jpg?x-oss-process=style/w100" />
        </div>
      </div>
      <div class="info row-item">
        <p class="info-title">{{shopInfo.title}}</p>
        <p class="info-desc">{{shopInfo.slogan}}</p>
      </div>
      <div class="contact row-item">
        <span @click="callPhone" class="iconfont icon-tel"></span>
        <span open-type="contact"  class="iconfont icon-wechat">
          <button open-type="contact" />
        </span>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'contact',
    props: {
      shopInfo: {
        type: Object,
        default: {
          title: '',
          slogan: '',
          phone: ''
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      callPhone () {
        const that = this
        wx.makePhoneCall({
          phoneNumber: that.shopInfo.phone
        })
      }
    },
    created () {
      // 调用应用实例的方法获取全局数据
      // this.getUserInfo()
      // this.getBanner()
    }
  }
</script>

<style lang="scss">
  .contact-wrp{
    display: flex;
    width: 100%;
    margin: 10rpx 0;
    flex-direction: row;
    .row-item{
      width: 33.33%;
    }
    .avater{
      width: 200rpx;
      .img-wrp{
        overflow: hidden;
        border-radius: 50%;
        /*border: red 1px solid;*/
        width: 100rpx;
        height: 100rpx;
        margin: 15rpx auto 0;
        image{
          width: 100%;
        }
      }
    }
    .info{
      width: 70%;
      padding: 20rpx 0 0 40rpx;
      .info-title{
        font-size: 14px;
      }
      .info-desc{
        padding-top: 4rpx;
        font-size: 12px;
        color: #aaa;
      }

    }
    .contact{
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 30px;
        padding: 0 8rpx 0;
        &.icon-wechat{
          color: #59c112;
        }
        &.icon-tel{
          color: #6899e6;
        }
      }
    }
  }
</style>
