<template>
<div class="destination-wrap">
  <div class="search-wrap">
  	   <van-search placeholder="搜索目的地或地标位置" v-model="value" />
           <div slot="left-icon"  color="#34CA4E"></div> 
       </van-search >
  </div> 
  <div class="located-box">
      <van-row>
        <van-col span="2"><span><i class="iconfont icon-location icon"></i></span></van-col>
        <van-col span="18"><span>搜索</span><span class="current-site">浦东新区</span>周边</van-col>
        <van-col span="4"><div class="right-arrow">&gt;</div></van-col>
      </van-row>
  </div>
  <div class="hot-recommend">
      <div class="hot-title">热门推荐</div>
      <div class="hot-item-box">
         <li v-for="(item,index) in hotData" class="item">{{item}}</li>
      </div>
  </div>
   <div class="all-citys">
      <div class="all-city-title">全部城市</div>
      <div class="all-city-box">
         <li v-for="(item,index) in letterData" class="letter-item" @click="getCityPosition" :key="item" > <a :href="`#${item}`">{{item}}</a></li>
      </div>
  </div>
  <div>
      <div class="city-list-item" v-for="(item,index) in cityList">
        <div class="city-list-title" :id="item.title">{{item.title}}</div>
        <div class="city-list-name" v-for="(cityItem,idx) in item.lists">{{cityItem}}</div>
      </div>

  </div>


</div>
</template>
<script>
  
  import cityArr from "../untils/citys.js"

	export default{

       name:"destination",
       data(){
         return{

              hotData:["北京","三亚","上海","成都","厦门"],
              letterData:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
              cityList:cityArr

         }

       },
       methods:{
           
           getCityPosition(){


           }

       }


	}

</script>
<style scoped>
  .destination-wrap{
  padding: 5px 18px 48px 18px;
  box-sizing: border-box;
  font-size: 14px
 
}
.icon{color:#ccc;}
a{text-decoration: none;color:#000;}
.right-arrow{text-align: right;color:#2DD150}
.located-box{border-bottom: 1px solid #ddd;padding: 10px;box-sizing:border-box;}
.located-box span{margin-right:8px;}
.current-site{color:#2DD150}
.hot-recommend,.all-citys{padding: 10px;margin-top: 10px;}
.hot-item-box{display: flex;margin-top: 10px;flex-wrap: wrap;flex-direction: space}
.item{border:1px solid #ccc;text-align: center;padding:5px;flex:0 0 23%;list-style: none;margin: 6px 6px 6px 0;box-sizing: border-box;justify-content:space-around;}
.all-city-title{padding: 10px}
.all-city-box{display:flex;justify-content:space-between;flex-wrap: wrap;}
.letter-item{padding:7px;flex:0 0 12.2%;background:#f7f7f7;list-style: none;margin:6px 6px 0 0 ;text-align: center;}
.city-list-title{padding: 8px;background: #ddd;}
.city-list-name{padding: 8px;border-bottom:1px solid #ccc}
</style>s