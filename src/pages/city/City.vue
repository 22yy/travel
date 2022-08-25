<!--  -->
<template>
  <div>
   <Header></Header>
   <Search></Search>
   <List :cities='cities' :hotCities='hotCities' :letter='letter'></List>
   <Alphabet :cities='cities' @change="handleLetterChange"></Alphabet>
  </div>
</template>

<script>
import Alphabet from './components/Alphabet.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
import Search from './components/Search.vue'
import axios from 'axios'
export default {
name:'City',
  data () {
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  components:{
    Header,
    Search,
    List,
    Alphabet
  },
  mounted(){
    this.getCityInfo()
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res){
      // console.log(res);
      res=res.data
      if(res.ret && res.data){
        const data=res.data;
        this.cities=data.cities
        this.hotCities=data.hotCities
      }
    },
    handleLetterChange(letter){
      this.letter=letter
    }
  },
}
</script>

<style  scoped>

</style>
