<template>
  <div class="personal-center">
       
        <div class="header">我的订单</div>
        
        <div class="personal-Info" v-if="isLogin">
           
          个人中心

        </div>  
        <div class="login-box" v-else>
             <div class="Login-top-header">
                  <van-row gutter="10">
                    <van-col span="8">
                       <div class="login-avatar-box"><i class="iconfont icon-wode login-avatar "></i></div>
                    </van-col>
                    <van-col span="16">
                       <div class="login-txt">登录/注册</div>
                    </van-col>
                  </van-row>
             </div>
        </div>
        <div class="list-box">
          <div class="list">
             <Cell color="#2FD063">
                 <div slot="icon"><i class="iconfont icon-icon cell-icon"></i></div>
                 <div slot="content">我的订单</div>
             </Cell>
             <Cell color="#2FD063">
                 <div slot="icon"><i class="iconfont icon-youhuiquan cell-icon"></i></div>
                 <div slot="content">优惠券</div>
             </Cell>
          </div>
          <div class="list">
            <Cell color="#2FD063">
                <div slot="icon"><i class="iconfont icon-yijianfankui cell-icon"></i></div>
                <div slot="content">意见反馈</div>
            </Cell>
            <Cell color="#2FD063">
                <div slot="icon"><i class="iconfont icon-dianhua cell-icon"></i></div>
                <div slot="content">联系客服</div>
            </Cell>
          </div>          
          <div class="list">
              <Cell color="#2FD063">
                <div slot="icon"><i class="iconfont icon-fenxiangcopy cell-icon"></i></div>
                <div slot="content">发红包给好友</div>
            </Cell>
          </div>


        </div>
       
</div>
</template>

<script>
import Cell from "./Cell.vue"

export default {
  name: 'home',
  components:{Cell},
  data () {
    return {
        isLogin:false
    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{padding:20px;text-align:center;background: #fff;box-sizing: border-box;}
.Login-top-header{height: 20vh;background:#2FD063}
.login-avatar-box{width: 80px; height: 80px;border-radius: 50px; background:#fff;display:flex;justify-content: center;align-items: center;margin: 12px;}
.login-avatar{font-size:32px;color:#2FD063;}
.login-txt{color:#fff; height: 100px;line-height: 100px;font-size: 26px}
.list-box{width:100%;display: flex;justify-content:center;flex-direction: column;padding: 0 6px}
.list{width: 96%;box-sizing: border-box;box-shadow: 0 0 6px #eee;margin-bottom: 5px;}
</style>
