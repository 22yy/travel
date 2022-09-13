<!--  -->
<template>
  <div>
    <Header></Header>
    <Swiper :swiperList='swiperList'></Swiper>
    <Icons :iconList='iconList'></Icons>
    <Recommend :recommendList='recommendList'></Recommend>
    <Weekend :weekendList='weekendList'></Weekend>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Icons from './components/Icons.vue'
import Recommend from './components/Recommend.vue'
import Swiper from './components/Swiper.vue'
import Weekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
name:'Home',
  data () {
    return {
      lastcity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  components:{
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  methods:{
    
     getHomeInfo(){
      axios.get('/static/mock/index.json?city='+this.city).then(this.getHomeInfoSucc)
     },
     getHomeInfoSucc(res){
      console.log(res);
      res=res.data;
      if(res.ret){
        const data=res.data
        this.swiperList=data.swiperList;
        this.iconList=data.iconList;
        this.recommendList=data.recommendList;
        this.weekendList=data.weekendList
      }
     }
  },
  mounted(){
    this.lastcity=this.city
    this.getHomeInfo();
  },
  computed:{
    ...mapState(['city'])
  },
  activated(){
    if(this.lastcity!==this.city){
      this.lastcity=this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style  scoped>

</style>
