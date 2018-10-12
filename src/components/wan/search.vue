<template>
  <div class="wan-search">
    <div class="wan-search-field">
      <span class="wan-search-icon iconfont icon-search"></span>
      <input placeholder="请输入搜索关键词"/>
    </div>
  </div>
</template>
<script>
  import field from './field'
  export default {
    name: 'search',
    components: {
      'wan-field': field
    },
    props: {
      focus: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss">
  .wan-search {
    padding: 6rpx 20rpx;
  }

  .wan-search-field{
    position: relative;
    .wan-search-icon{
      position: absolute;
      top: 10rpx;
      left: 12rpx;
    }
    input{
      font-size: 13px;
      background: #f2f2f2;
      border-radius: 20rpx;
      height: 32rpx;
      padding-left: 50rpx;
      border:0;
      margin:0;
      width:100%;
      resize:none;
      display:block;
      text-align:left;
      box-sizing:border-box;
      line-height:inherit;
    }
  }
</style>
