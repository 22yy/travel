<!--  -->
<template>
  <div>
   <Header></Header>
   <Search></Search>
   <List></List>
   <Alphabet></Alphabet>
  </div>
</template>

<script>
import Alphabet from './components/Alphabet.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Search from './components/Search.vue'
export default {
name:'City',
  data () {
    return {
    }
  },
  components:{
    Header,
    Search,
    List,
    Alphabet
  },
}
</script>

<style  scoped>

</style>
