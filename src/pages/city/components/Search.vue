<!--  -->
<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
name:'Search',
  data () {
    return {
    }
  },
  components:{
  },
}
</script>

<style  scoped lang='stylus'>
@import '~common/styles/varibles.styl'
.search
  background-color $bgColor
  height .86rem
  padding 0 0.1rem
  .search-input
    width 100%
    height 0.62rem
    border-radius: .06rem
    padding 0 0.1rem
    box-sizing: border-box
</style>
