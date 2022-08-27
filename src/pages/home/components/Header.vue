<!--  -->
<template>
  <div class="header">
    <div class="header-left"><i class="iconfont">&#xe624;</i></div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city}}
        <i class="iconfont arrow">&#xe600;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Header",
 computed:{
  ...mapState(['city'])
 }
};
</script>

<style  scoped>
.header {
  display: flex;
  color: #fff;
  line-height: 0.86rem;
  background-color: #00bcd4;
}
.header-left {
  width: 0.64rem;
  float: left;
}
.iconfont {
  text-align: center;
  font-size: .4rem;
}
.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  background: #fff;
  color: #ccc;
  border-radius: 0.1rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  padding-left: .2rem;
}
.header-right {
  min-width: 1.04rem;
  padding: 0 .1rem;
  float: right;
  text-align: center;
  color: #fff;
}
.arrow {
  margin-left: -0.04rem;
  font-size: .24rem;
}
</style>
