<!--  -->
<template>
  <div>
    <Header/>
    <Swiper/>
    <Icons/>
    <Recommend/>
    <Weekend/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Icons from './components/Icons.vue'
import Recommend from './components/Recommend.vue'
import Swiper from './components/Swiper.vue'
import Weekend from './components/Weekend.vue'
export default {
name:'Home',
  data () {
    return {
    }
  },
  components:{
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
}
</script>

<style  scoped>

</style>
