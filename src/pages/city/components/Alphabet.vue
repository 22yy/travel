<!--  -->
<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
name:'Alphabet',
}
</script>

<style  scoped lang='stylus'>
@import '~common/styles/varibles.styl'
  .list
    display flex
    flex-direction: column
    justify-content: center
    position: absolute
    right 0
    top 1.58rem
    width .4rem
    bottom 0
    .item
      line-height .4rem
      text-align center
      color: $bgColor

</style>
