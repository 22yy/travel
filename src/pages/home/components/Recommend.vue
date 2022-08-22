<!--  -->
<template>
  <div class="recommend">
   <div class="title">热销推荐</div>
   <ul>
    <li class="item border-bottom" v-for="item in itemList" :key="item.id">
      <img :src="item.imgURL" alt="" class="item-img">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
   </ul>
  </div>
</template>

<script>

export default {
name:'Recommend',
  data () {
    return {
      itemList :[{
        id:'0001',
        imgURL:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title:'大连生涯海洋世界',
        desc:'浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战'
      },
      {
        id:'0002',
        imgURL:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title:'大连生涯海洋世界',
        desc:'浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战'
      },
      {
        id:'0003',
        imgURL:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title:'大连生涯海洋世界',
        desc:'浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战浪漫大连首战，浪漫大连首战'
      }
      ]
    }
  },
  components:{
  },
}
</script>

<style  scoped lang='stylus'>
@import '~common/styles/mixins.styl'
 .title
  background #eee
  text-indent .2rem
  margin-top .2rem
  line-height .8rem
  font-size: .28rem
.item
  display: flex
  height 1.9rem
  overflow hidden
  .item-img
    padding: .2rem
  .item-info
    flex: 1
    min-width 0
    .item-title
      line-height .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height .48rem
      color: #ccc
      ellipsis()
    .item-button
      margin-top .16rem
      background-color #ff9300
      color #fff
      border-radius: .06rem
      padding: 0 .2rem
</style>
