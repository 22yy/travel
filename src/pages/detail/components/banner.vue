<!--  -->
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe606;</span>
          39
          </div>
      </div>
    </div>
    <CommonGallary v-show="showGallary" :img='img' @close='handleGallaryClose'></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from '@/commons/gallary/Gallary.vue'
export default {
name:'banner',
  data () {
    return {
      showGallary:false,
      img:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],

    }
  },
  components:{
    CommonGallary,
  },
  methods:{
    handleBannerClick(){
      this.showGallary=true
    },
    handleGallaryClose(){
      this.showGallary=false
    }
  }
}
</script>

<style  scoped lang='stylus'>
.banner
 position: relative
 height 0
 padding-bottom 55%
 overflow : hidden
 .banner-img
   width:100%
 .banner-info
  display: flex 
  position: absolute
  line-height: .6rem
  left: 0
  bottom: 0
  right: 0
  color: #fff
  background-image: linear-gradient(top,rgba(0,0,0,0,),rgba(0,0,0,.8))
  .banner-title
   flex: 1
   padding-left: .2rem
   font-size: .32rem
 .banner-number
   padding 0 .4rem
   height .32rem
   line-height .32rem
   background rgba(0,0,0,.8)
   border-radius : .2rem
   font-size: .24rem
   margin-top: .14rem
   .banner-icon
    font-size: .24rem


</style>
