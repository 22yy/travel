<!--  -->
<template>
  <div>
    <Header/>
    <Swiper/>
    <Icons/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Icons from './components/Icons.vue'
import Swiper from './components/Swiper.vue'
export default {
name:'Home',
  data () {
    return {
    }
  },
  components:{
    Header,
    Swiper,
    Icons
  },
}
</script>

<style  scoped>

</style>
