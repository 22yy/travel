<!--  -->
<template>
  <div class="header">
      <div class="header-left"><i class="iconfont">&#xe624;</i></div>
      <div class="header-input">
        <i class="iconfont">&#xe632;</i>
        输入城市/景点/游玩主题
        </div>
      <div class="header-right">
        {{this.city}}
        <i class="iconfont arrow">&#xe600;</i>
        </div>
  </div>
</template>

<script>
export default {
name:'Header',
props:{
  city:String
},
  data () {
    return {
    }
  },
  components:{
  },
}
</script>

<style  scoped>
.header{
  display: flex;
  height: .86rem;
  color: #fff;
  line-height: .86rem;
  background-color: #00bcd4;
}
.header-left{
  width: .64rem;
  height: .86rem;
}
.iconfont{
  margin-left: 8px;
}
.header-input{
  flex: 1;
  height: .64rem;
  line-height: .64rem;
  background: #fff;
  color: #ccc;
  border-radius: .1rem;
  margin-top: .12rem;
  margin-left: .2rem;

}
.header-right{
  font-size: .28rem;
  width: 1.24rem;
  height: .86rem;
  text-align: center;
}
.arrow{
  margin-right: .04rem;
  margin-left: .02rem;
}
</style>
