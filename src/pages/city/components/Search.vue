<!--  -->
<template>
<div>
  <div class="search">
    <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
  </div>
  <div class="search-content" 
  v-show="keyword" 
  ref="search"
  >
     <ul>
      <li class="search-item border-bottom" 
       v-for='item in list'
       @click="handleChangeCity(item.name)"
       >{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasNoData">
        没有找到匹配数据
      </li>
     </ul>
  </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
import betterScroll from 'better-scroll'
export default {
name:'Search',
props:{
  cities:Object
},
methods:{
  handleChangeCity(city){
    this.changeCity(city)
    this.$router.push('/')
  },
  ...mapMutations(['changeCity'])
},
mounted(){
    this.scroll=new betterScroll(this.$refs.search)
  },
data () {
    return {
      keyword:'',
      list:[],
      timer:null
    }
  },
watch :{
    keyword(){
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list=[]
        return 
      }
      this.timer=setTimeout(()=>{
        const result=[];
        for(let i in this.cities){
          this.cities[i].forEach((value)=>{
            if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
              result.push(value)
            }
          })
        }
        this.list=result
      },100)
    },
    list(){
    this.$nextTick(function(){
      this.scroll.refresh()
    })
  },
  },
computed:{
  hasNoData(){
    return !this.list.length
    }
  },

}
</script>

<style  scoped lang='stylus'>
@import '~common/styles/varibles.styl'
.search
  background-color $bgColor
  height .86rem
  padding 0 0.1rem
  touch-action: none
  .search-input
    width 100%
    height 0.62rem
    border-radius: .06rem
    padding 0 0.1rem
    box-sizing: border-box
.search-content
   position absolute 
   top 1.58rem 
   right: 0
   left 0
   bottom 0
   z-index 1
   overflow: hidden
   .search-item
     line-height .62rem
     padding-left .2rem
     color: #666
     background-color #fff
</style>
