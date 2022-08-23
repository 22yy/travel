<!--  -->
<template>
  <div class="wrapper">
     <swiper :options="swiperOption" ref="mySwiper" v-if='showSwiper'>
      <swiper-slide v-for="item in swiperList" :key="item.id"><img :src='item.imgUrl'></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
name:'Swiper',
props:{
  swiperList:Array
},
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
  }
},
components:{
   swiper, swiperSlide
  },
  computed:{
    showSwiper(){
      return this.swiperList.length
    }
  }
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
