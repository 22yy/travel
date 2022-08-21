<!--  -->
<template>
  <div class="wrapper">
     <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="item in imgURL" :key="item.id"><img :src='item.url'></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
name:'Swiper',
  data () {
    return {
      swiperOption:{
        loop:true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
         // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
      },
    },

    imgURL:[
      {id:'0001',url:'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'},
      {id:'0002',url:'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'}
    ]
  }
},
components:{
   swiper, swiperSlide
  },
}
</script>

<style  scoped lang='stylus'>
 .wrapper >>> .swiper-pagination-bullet-active
   background : #fff
 .wrapper
   width: 100%
   overflow hidden
   height 0
   padding-bottom 31.25%
  .swiper-slide img
    width: 100%;

</style>
//  height 0
//  padding-bottom 31.25%
//  解决网速较慢时图片加载过慢出现的抖动问题，先撑开一个高度
