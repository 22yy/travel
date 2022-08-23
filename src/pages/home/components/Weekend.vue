<!--  -->
<template>
  <div>
     <div class="title">周末去哪</div>
   <ul>
    <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
      <div class="item-img-wapper">
         <img :src="item.imgUrl" alt="" class="item-img">
      </div>
      
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
   </ul>
  </div>
</template>

<script>
export default {
name:'Weekend',
props:{
  weekendList:Array
},
}
</script>

<style  scoped lang='stylus'>
@import '~common/styles/mixins.styl'
.title
  background #eee
  text-indent .2rem
  line-height .8rem
  font-size: .28rem
.item-img-wrapper
  height 0
  padding-bottom 37.09%
  overflow hidden
  .item-img
    width 100%
.item-info
  padding .1rem
.item-title
  line-height .54rem
  font-size: .32rem
  ellipsis()
.item-desc
  line-height .48rem
  color: #ccc
  ellipsis()
</style>
