<template>
	
	<div class="cell-box">
		<div class="cell-inner">
			<div class="cell-icon-box"><slot name="icon"><i class="iconfont icon-youhuiquan cell-icon" :style="{'color':iconColor}"></i></slot></div> 
			<div class="cell-txt"><slot name="content">我的订单</slot></div> 
			<div class="cell-arrow"><slot name="arrow">&gt</slot></div> 
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
        
        name:"cell",
        props:{
          
          color:{
          	type:[String],
          	default:"#000"
          }

        },
        data(){
        	return{
        		iconColor:this.color
        	}
        }



	}

</script>
<style >
.cell-inner{padding: 10px;box-sizing: border-box;border-bottom: 1px solid #eee;display:flex;}
.cell-icon{font-size: 20px;}
.cell-icon-box,.cell-txt,.cell-arrow{padding: 10px;}
.cell-icon-box{flex:2;text-align: center}
.cell-txt{flex:6;color:#333;}
.cell-arrow{flex:2;text-align: right}
</style>