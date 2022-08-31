<!--  -->
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe606;</span>
          {{this.bannerImg.length}}
          </div>
      </div>
    </div>
    <fade-animation>
    <CommonGallary v-show="showGallary" :img='gallaryImgs' @close='handleGallaryClose'></CommonGallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from '@/commons/gallary/Gallary.vue'
import FadeAnimation from '../../../commons/fade/fadeAnimation.vue'
export default {
name:'banner',
props:{
  bannerImg:String,
  sightName:String,
  gallaryImgs:Array
},
  data () {
    return {
      showGallary:false,
    }
  },
  components:{
    CommonGallary,
    FadeAnimation
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
