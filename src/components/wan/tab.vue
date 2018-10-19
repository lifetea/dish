<template>
  <div
    v-if="inited"
    class="van-tab__pane"
    :style="active ? '' : 'display: none' "
  >
    <slot />
  </div>

</template>

<script>
  export default {
    data () {
      return {
        inited: false,
        active: false
      }
    },
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
  .van-tab {
    -webkit-box-flex:1;
    -webkit-flex:1;
    flex:1;
    cursor:pointer;
    padding:0 5px;
    font-size:14px;
    position:relative;
    color:#333;
    line-height:44px;
    text-align:center;
    box-sizing:border-box;
    background-color:#fff;
    min-width:0;
  }
  .van-tabs__wrap--scrollable .van-tab {
    -webkit-box-flex:0;
    -webkit-flex:0 0 22%;
    flex:0 0 22%;
  }
</style>
