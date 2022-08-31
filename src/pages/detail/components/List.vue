<!--  -->
<template>
  <div class="list">
     <div class="item"  v-for='(item,index) in categoryList' :key="index">
        <div class="item-title">
         <span class="item-title-icon"></span>
          {{item.title}}
        </div>
      <div class="item-children" v-if='item.children'>
           <List :categoryList='item.children'></List>
      </div>
     </div>
  </div>
</template>
<script>
export default {
name:'List',
props:{
  categoryList:Array
}
 
}
</script>

<style  scoped lang='stylus'>
.item-title
 font-size: .32rem
 line-height .8rem
 padding 0 .2rem
 .item-title-icon
  position: relative
  top .06rem
  display inline-block
  width 0.36rem
  height 0.36rem
  background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
  background-size: .4rem 3rem
.item-children
  padding 0 .2rem
</style>
