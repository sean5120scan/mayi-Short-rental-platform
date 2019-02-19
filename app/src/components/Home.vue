<template>
  <div class="home-wrap" >
         <div class="slide" touchable>
             
             <van-swipe :autoplay="3000" indicator-color="white">
                  <van-swipe-item v-for="(item,index) in bannerList" :key="index">
                     <img :src="item">
                  </van-swipe-item>
            </van-swipe>
         </div>
         <div class="postion-wrap">
              <div class="pos-header">
                <van-row gutter="10">

                    <van-col span="12" ><div @click="changeSite"><span id="location" ></span><span>{{city}}</span></div></van-col>
                    <van-col span="12"><div class="location-btn"><span class="small-font">全球名宿精选</span> <i class="iconfont icon-dingwei posicon"></i></div></van-col>
                </van-row>

              </div>
              <div class="pos-data">
                <van-row gutter="10">
                    <van-col span="10"><span @click="selectDate">1月17日</span> <span class="small-font"> 今天</span></van-col>
                    <van-col span="4"><div class="dayNum"><span class="small-font">1晚</span></div></van-col>
                    <van-col span="10"><div class="lastday"><span>1月18日</span> <span class="small-font">明天</span></div></van-col>
                </van-row>
              </div>
              <div class="pos-search-btn">
                    <div class="search-btn">搜索</div>
              </div>
         </div>

         <div class="plot-wrap">
               
               <van-row gutter="15">
                  <van-col span="8" v-for="(item,index) in plotImgArr" :key="index"><div class="plot-img"><img :src="item" alt=""></div></van-col>
              </van-row>

         </div>  

         <div class="info-wrap">
                  <van-row gutter="15">
                        <van-col span="6">
                              <div class="info-item">
                                  <div class="icon">
                                     <i class="iconfont icon-home "></i>
                                  </div>
                                   <div class="info-title">
                                      <p>真实房源</p>
                                   </div>
                                   <div class="info-sub">
                                      <p>上门实拍</p>
                                      <p>资质备案</p>
                                   </div>
                              </div>
                        </van-col>

                        <van-col span="6">
                              <div class="info-item">
                                  <div class="icon">
                                     <i class="iconfont icon-i-safe "></i>
                                  </div>
                                   <div class="info-title">
                                      <p>安心入住</p>
                                   </div>
                                   <div class="info-sub">
                                      <p>到店无房</p>
                                      <p>赔付首晚</p>
                                   </div>
                              </div>
                        </van-col>

                        <van-col span="6">
                              <div class="info-item">
                                  <div class="icon">
                                     <i class="iconfont icon-zhima "></i>
                                  </div>
                                   <div class="info-title">
                                      <p>芝麻信用</p>
                                   </div>
                                   <div class="info-sub">
                                      <p>房东房客</p>
                                      <p>实名认证</p>
                                   </div>
                              </div>
                        </van-col>

                        <van-col span="6">
                              <div class="info-item">
                                  <div class="icon">
                                     <i class="iconfont icon-kefu"></i>
                                  </div>
                                   <div class="info-title">
                                      <p>专业客服</p>
                                   </div>
                                   <div class="info-sub">
                                      <p>7*24小时</p>
                                      <p>在线客服</p>
                                   </div>
                              </div>
                        </van-col>
                  </van-row>  
         </div> 
         <div class="hot-wrap">
           <div class="hot-destination">热门目的地</div>

               <van-tabs v-model="active">
                    <van-tab title="三亚">
                               <div class="tab-item-wrap">
                                    <div class="tab-item" v-for="(tabItem,index) in hotCityArr" :key="index">
                                         
                                                    <div>
                                                       <img :src="tabItem.src" class="tab-item-img">
                                                    </div>
                                                    <div>{{tabItem.title}}</div>
                                                    <div class="assess-wrap">
                                                       <span class="score">{{tabItem.score}} 完美</span>
                                                       <span class="score-num">{{tabItem.scoreNum}}条评价|</span>
                                                       <span>{{tabItem.bedroom}}居</span>
                                                    </div>
                                         
                                    </div> 
                               </div>
                       
                    </van-tab>
                    <van-tab title="北京">北京</van-tab>
                    <van-tab title="香港">香港</van-tab>
                    <van-tab title="成都">成都</van-tab>
              </van-tabs>
         </div>

         <div class="more-wrap">
              <van-button type="default" round class="view-more-btn">查看更多</van-button>
         </div>
  </div>
</template>
<script>
// import {getPosition} from "../untils/untils.js"
export default {
  name: 'home',
  mounted(){
    
    let self=this;  
    var map = new BMap.Map("loaction");
    // var point = new BMap.Point(116.331398,39.897445);
    // map.centerAndZoom(point,12);

    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        // console.log('您的位置：'+r.point.lng+','+r.point.lat);

        let lng=r.point.lng;
        let lat=r.point.lat;
        var point = new BMap.Point(lng,lat);

        var gc = new BMap.Geocoder();
        gc.getLocation(point, function(rs){
            var addComp = rs.addressComponents;
            console.log("addComp:",addComp)          
            self.$nextTick(function(){
                self.city=addComp.city;
                console.log("self.city",self.city);
            })
        })
      

      }
      else {
        alert('failed'+this.getStatus());
      }        
    });




  },
  data () {
    return {
       bannerList:['http://i1.mayi.com/mayi54/M78/HR/KK/XTRATQQPX9HP7DWXRYHZ74S6QL9DBQ.jpg',
                    'http://i1.mayi.com/mayi52/M18/MC/YS/8L533EFQ44UA8UD3RRNHUTCZ5PF7FL.jpg',
                    'http://i1.mayi.com/mayi95/M67/WH/ZR/VUJVW4KJQXG52KU32WUKT76ZE7ZED7.jpg'
                  ],
       plotImgArr:["../../static/p1.png","../../static/p2.png","../../static/p3.png"],
       active:"",
       hotCityArr:[
          { 
            src:"http://i1.mayi.com/mayi76/M75/QA/VY/WKMRSUG66WY9FZQH7VDKDZHH6UFLYD.jpg_/both/670x445/quality/65/unsharp/true/format/jpg",
            title:"背山面海逗猴套",
            score:5.0,
            scoreNum:125,
            bedroom:2,
            price:699
          },
          { 
            src:"http://i1.mayi.com//mayi11/M58/KZ/IC/GSP7XA7UUK2ZAQKPXAZQY52SCV7TBB.jpg_/both/670x445/quality/65/unsharp/true/format/jpg",
            title:"三亚大东海ＱQ高层海景两",
            score:5.0,
            scoreNum:125,
            bedroom:2,
            price:699
          },
          { 
            src:"http://i1.mayi.com/mayi38/M42/TS/MN/MTKZ674BVAYXUKCGWQU88CQ6JPTFAB.jpg_/both/670x445/quality/65/unsharp/true/format/jpg",
            title:"大东海D【静逸时光】精品",
            score:5.0,
            scoreNum:125,
            bedroom:2,
            price:699
          },
          { 
            src:"http://i1.mayi.com/mayi63/M14/GW/KD/LY86LE9NX99R5L9ELUP8DRTGK23PLE.jpg_/both/670x445/quality/65/unsharp/true/format/jpg",
            title:"近市中心·北欧休闲两居室",
            score:5.0,
            scoreNum:125,
            bedroom:2,
            price:699
          },


       ],
       city:""
    }


    },
      methods:{
          
          changeSite(){
              console.log(11)
              this.$router.push("/destination")
          },
          selectDate(){
              this.$router.push("/datePicker")
          }

      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-wrap{
  padding: 5px 18px 48px 18px;
  box-sizing: border-box;
 
}
.slide{height: 134px; background: #ddd;}
.slide img{width: 100%; height: 134px}
.postion-wrap{ width:100%; border-radius: 12px;box-shadow: 0 0 12px #ccc;padding:0 10px 12px 10px;box-sizing:border-box; }
.search-btn{width: 94%; height: 42px;line-height:42px;color:#fff;background:#21C48E;border-radius: 40px;box-shadow: 0 0 16px #ccc;}
.pos-header{border-bottom: 1px solid #ddd}
.pos-search-btn{padding:12px;text-align:center;}
.pos-header,.pos-data{padding:16px;font-size: 14px}
.small-font{font-size: 12px;}
.lastday{text-align: right;}
.dayNum{text-align: center}
.plot-wrap{margin-top: 20px}
.plot-img img{width:100%; height:100%}
.location-btn{text-align: right}
.info-wrap{background: #f7f7f7;padding:10px;border-radius: 10px;margin-top: 15px;}
.info-title{font-size: 16px;text-align: center;}
.info-sub{font-size: 12px;text-align:center;}
.icon{text-align: center}
.posicon{color:#21C48E;margin: 5px 3px}
.icon i{font-size: 26px;}
.hot-wrap{margin-top:12px;}
.hot-destination{font-size: 24px;}
.more-wrap{margin-bottom: 20px;text-align: center;}
.view-more-btn{background:#f8f8f8;width:46%;margin-top: 12px;}
.assess-wrap{font-size: 12px;}
.tab-item-wrap{display: flex; flex-wrap:wrap;}
.tab-item{padding:10px;box-sizing:border-box;flex:0 0  48%;}
.tab-item div{padding:3px;}
.tab-item-img{width: 100%; height: 100%;} 
.tab-item span{margin-left: 3px;}
.location{display:inline-block;width: 100px; height:24px}
</style>
