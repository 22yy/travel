<!--  -->
<template>
  <div class="gallary" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption" ref='mySwiper'>
        <swiper-slide v-for="(item,index) in img" :key="id=index"><img class='gallary-img' :src='item'></swiper-slide>
      <span class="swiper-pagination" slot="pagination"></span>
    </swiper>
    </div>
     
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
name:'Gallary',
props:{
  img:Array
},

data () {
  return {
     swiperOption:{
         // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
          type:'fraction'
      },
      observer: true,  //开启动态检查器，监测swiper和slide
      observeParents: true,  //监测Swiper 的祖/父元素
    }
  }
},
components:{
  swiper,
  swiperSlide
},
methods:{
  handleGallaryClick(){
    this.$emit('close')
  }
}
}
</script>

<style  scoped lang='stylus'>
.gallary >>> .swiper-container
  overflow: inherit
.gallary
 z-index: 99
 display: flex
 flex-direction: column
 justify-content: center
 position fixed
 top 0 
 left 0
 right 0
 bottom 0
 background #000
.wrapper
 width 100%
 height 0
 padding-bottom 100%
 .gallary-img
   width: 100%
  .swiper-pagination
   color: #fff
   bottom: -1rem
</style>
