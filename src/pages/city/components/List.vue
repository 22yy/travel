<!--  -->
<template> 
<div class="list" ref="wrapper">
    <div>
     <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
     </div>
     <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
     </div>
     <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
      </div>
     </div>
       <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
      </div>
     </div>
       <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
          <div class="item border-bottom">北京</div>
      </div>
     </div>
</div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
name:'List',
mounted(){
  this.scroll = new BetterScroll(this.$refs.wrapper)
}

}
</script>

<style  scoped lang='stylus'>
.border-topbottom::before
  border-color: #666
.border-topbottom::after
  border-color: #666
.border-bottom::before
  border-color: #666
.list
  overflow hidden
  position absolute
  top :1.58rem
  left 0
  right 0
  bottom 0
 .title
   line-height .54rem
   background #eee
   padding-left .2rem
   font-size: .26rem
 .button-list
   overflow hidden
   padding .1rem .6rem .1rem .1rem
   .button-wrapper
     width 33.33%
     float left
     .button
       margin .1rem
       padding .1rem  0
       border-radius: .06rem 
       border: 1px solid #ccc
       text-align center
 .item-list
   .item
     line-height .76rem
     padding-left .2rem
     
 
</style>
