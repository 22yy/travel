// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 一像素边框
import './assets/styles/border.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
// 移动端300ms点击延迟
import fastclick from 'fastclick'

//组件+样式
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//注册
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

fastclick.attach(document.body)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})