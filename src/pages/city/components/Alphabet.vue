<!--  -->
<template>
  <ul class="list">
    <li class="item"
     v-for='item of letters' 
     :key="item" 
     :ref="item"
     @click="handleLetterClick"
     @touchstart='handleTouchStart'
     @touchmove='handleTouchMove' 
     @touchend='handleTouchEnd'>{{item}}</li>
  </ul>
</template>

<script>
export default {
name:'Alphabet',
props:{
  cities:Object
},
data(){
  return {
    touchStatus:false,
    startY:0,
    timer:null
  }
},
updated(){
  this.startY=this.$refs['A'][0].offsetTop
},
computed:{
  letters () {
     let letters=[]
     for(let i in this.cities){
      letters.push(i)
     }
    //  console.log(letters);
     return letters
  }
},
methods:{
  handleLetterClick(e){
    // console.log(e.target);
    this.$emit('change',e.target.innerText)
  },
  handleTouchStart(){
    this.touchStatus=true
  },
  handleTouchMove(e){
    if(this.touchStatus){
      if(this.timer){
        this.timer=null
      }
      this.timer=setTimeout(()=>{
        // console.log(e.touches);
      const touchY=e.touches[0].clientY-79
      const index=Math.floor((touchY-this.startY)/20)
      // console.log(index);
       if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
      },16)
      
    }
  },
  handleTouchEnd(){
    this.touchStatus=false
  }
}
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
