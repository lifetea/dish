import Vue from 'vue'
import App from './App'
import Shop from '../config/shop'
import 'mpvue-weui/src/style/weui.css'
// import mwSdk from './utils/mw-sdk.min.js'
Vue.config.productionTip = false
Vue.prototype.shop = Shop
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
