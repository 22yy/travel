<!--  -->
<template>
  <div>
    <Header/>
    <Swiper/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Swiper from './components/Swiper.vue'
export default {
name:'Home',
  data () {
    return {
    }
  },
  components:{
    Header,
    Swiper
  },
}
</script>

<style  scoped>

</style>
