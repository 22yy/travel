<!--  -->
<template>
  <div>
    <Banner :bannerImg='bannerImg' :sightName='sightName' :gallaryImgs='gallaryImgs'></Banner>
    <Header></Header>
    <div class="content">
      <List :categoryList='categoryList'></List>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Banner from './components/banner.vue'
import List from './components/List.vue'
import axios from 'axios'
export default {
name:'Detail',
components:{
    Banner,
    Header,
    List
  },
data () {
  return {
    bannerImg:'',
    sightName:'',
    categoryList:[],
    gallaryImgs:[]  
  }
},
mounted(){
  this.getDetailInfo()
},
methods:{
  getDetailInfo(){
    axios.get('/static/mock/detail.json',{
      id:this.$route.params.id
    }).then(this.getDetailInfoSucc)
  },
  getDetailInfoSucc(res){
      // console.log(res);
      res=res.data
      if(res.ret && res.data){
        let data=res.data
        this.bannerImg=data.bannerImg
        this.sightName=data.sightName
        this.categoryList=data.categoryList
        this.gallaryImgs=data.gallaryImgs
      }
  }
}
}
</script>

<style  scoped>
.content{
  height: 86rem;
}
</style>
