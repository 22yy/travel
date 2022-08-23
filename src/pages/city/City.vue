<!--  -->
<template>
  <div>
   <Header></Header>
   <Search></Search>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
export default {
name:'City',
  data () {
    return {
    }
  },
  components:{
    Header,
    Search
  },
}
</script>

<style  scoped>

</style>
