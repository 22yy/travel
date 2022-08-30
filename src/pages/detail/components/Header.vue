<!--  -->
<template>
  <div>
    <div class="header-abs" v-show='showAbs'>
    <router-link to='/' tag="div">
      <div class="header-abs-back iconfont">&#xe624;</div>
    </router-link>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style='opacityStyle'>
      <router-link to='/'>
       <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      <span class="title">景点详情</span>
    </div>
  </div>
</template>

<script>
export default {
name:'Header',
  data () {
    return {
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll(){
      console.log('scroll');
      const top=document.documentElement.scrollTop
      if(top>60){
        let opacity=top / 140
        opacity=opacity>1 ? 1 :opacity
        this.opacityStyle={
          opacity
        }
        this.showAbs=false
      }else{
        this.showAbs=true
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll)
  },
  // 不能影响外部组件
  deactivated() {
    window.removeEventListener('scroll',this.handleScroll)
  },
}
</script>

<style  scoped lang='stylus'>
@import '~common/styles/varibles.styl' 
 .header-abs
  height .8rem
  line-height 0.8rem
  background: rgba(0, 0, 0, .6)
  width 0.8rem
  text-align: center
  border-radius: .4rem
  position: absolute
  top .2rem
  left .2rem
  color:#fff
.header-fixed
  height .86rem
  line-height .86rem
  position fixed
  top 0
  left: 0
  right 0
  background-color $bgColor
  .header-fixed-back
    width: .64rem
    height 0.8rem
    line-height .8rem
    color: #fff
    padding-left .2rem
    font-size: .4rem
    text-align: center
  .title
    position: absolute
    left 50%
    transform: translateX(-50%)
    font-size: .32rem
    color: #fff
    top 0
</style>
