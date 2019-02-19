<template>
  <div id="app">

         	         <transition :name="transitionName">
                     
                     <router-view class="Router"> </router-view>

                   </transition>

         	         <van-tabbar
      							  v-model="active"
      							  active-color="#07c160"
      							  @change="changBar"
                      :z-index="999"
						      	>
							  <van-tabbar-item icon="home-o" to="/Home">首页</van-tabbar-item>
							  <van-tabbar-item icon="orders-o" to="/Order">订单</van-tabbar-item>
							  <van-tabbar-item icon="manager-o" to="/My">我的</van-tabbar-item>
					 </van-tabbar>
  </div>
</template>

<script>

import Home from "./components/Home.vue"	

export default {
  name: 'App',
  components:{Home},
  data(){
    return{
          
          active:0,
          transitionName:"slide-right"
    }

  },
  watch:{
    
    $route(to,from){
           
           let isBack=this.$router.isBack;
           if(isBack){
              this.transitionName="slide-right"
           }else{

              this.transitionName="slide-left"
           }
           this.$router.isBack=false
    }



  },
  methods:{
  	changBar(num){
  		console.log(num)
  	}
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    min-height:100vh;overflow-y:auto;
}

.tab-wrap{position:fixed;bottom: 0;left: 0;width:100%; height: 100vh;}
/*.Router{position: absolute;left:0;top:0;width: 100%; height:100%;-webkit-transform: translate3d(100%,0,0);transform:translate3d(100%,0,0);}*/
.slide-left-leave-active,.slide-right-enter{opacity: 0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);}
</style>
