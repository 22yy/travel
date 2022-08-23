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
        {{ this.city }}
        <i class="iconfont arrow">&#xe600;</i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    city: String,
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style  scoped>
.header {
  display: flex;
  height: 0.86rem;
  color: #fff;
  line-height: 0.86rem;
  background-color: #00bcd4;
}
.header-left {
  width: 0.64rem;
  height: 0.86rem;
}
.iconfont {
  margin-left: 8px;
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
}
.header-right {
  font-size: 0.28rem;
  width: 1.24rem;
  height: 0.86rem;
  text-align: center;
  color: #fff;
}
.arrow {
  margin-right: 0.04rem;
  margin-left: 0.02rem;
}
</style>
