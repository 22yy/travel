<!--  -->
<template>
  <div class="header">
    <router-link to='/'>
       <div class="header-back"><i class="iconfont">&#xe624;</i></div>
    </router-link>
    <span class="title"> 城市选择</span>
  </div>
</template>

<script>
export default {
name:'Header',
}
</script>

<style  scoped lang='stylus'>
@import '~common/styles/varibles.styl'
.header
  position relative
  height 0.86rem
  line-height .86rem
  background-color $bgColor
  overflow: hidden
  .header-back
    position: absolute
    margin-left .2rem
    width .48rem
    color: #fff
    font-size: .32rem
  .title
    position: absolute
    left 50%
    transform: translateX(-50%)
    font-size: .32rem
    color: #fff
</style>
