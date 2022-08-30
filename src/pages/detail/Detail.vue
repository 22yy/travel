<!--  -->
<template>
  <div>
    <Banner></Banner>
    <Header></Header>
    <div class="div"></div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/banner.vue'
export default {
name:'Detail',
  components:{
    Banner,
    Header
  },
}
</script>

<style  scoped>
.div{
  height: 86rem;
}
</style>
