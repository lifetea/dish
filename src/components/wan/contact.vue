<template>
    <div class="contact-wrp">
      <div class="avater row-item">
        <div class="img-wrp">
          <image mode="widthFix" src="https://oss.wq1516.com/shopImage/201810111258041539233884372.png?x-oss-process=style/w100" />
        </div>
      </div>
      <div class="info row-item">
        <p>美妙生活 从奇峰开始</p>
        <p>专业解决各种用水问题</p>
      </div>
      <div class="contact row-item">
        <p>343434</p>
        <p>434343</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'contact'
  }
</script>

<style lang="scss">
  .contact-wrp{
    display: flex;
    width: 100%;
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
        width: 120rpx;
        height: 120rpx;
        margin: 10rpx auto 0;
        image{
          width: 100%;
        }
      }
    }
    .info{
      width: 70%;
      background: blue;
      p{
      }
    }
    .contact{
      background: red;
    }
  }
</style>
