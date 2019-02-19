<template>
  <div class="order-wrap">
       
   <div class="header">我的订单</div>
   <div class="cont-wrap">
   	    
   	    <div v-if="isLogin">
   	    	已登录

   	    </div>
        <div v-else class="unlogin-box">
        	     <div class="empty-box">
        	     	 <p><i class="iconfont icon-konghezi box-icon"></i></p>
        	     	 <p>哦呦,您还没登录哦！</p>
        	     </div>
        </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
       list:['../assets/1.jpg','../assets/2.jpg','../assets/3.jpg'],
       active:"",
       isLogin:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{height: 7vh;background: #fff;text-align: center;line-height: 7vh}
.cont-wrap{background:#f8f8f8; height: 100%;}
.unlogin-box {text-align: center;height: 90vh;}
.empty-box{display: flex;flex-direction: column;align-items: center;justify-content: center; height: 100%}
.box-icon{color:#02B00F;font-size: 10em;width:100%;height:40vh;}
</style>
