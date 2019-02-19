<template>
    
  <div class="date-pick-wrap">
  	  <div class="header"><span>2019</span>年<span>1</span>月</div>
      <div class="title">
      	  <div class="title-cell" v-for="week in weekArr">{{week}}</div>
      </div>
      <div class="day-cell-box">
      	   <div class="day-cell" v-for="cell in count">{{cell}}</div>
      </div>


      
  </div>

 

</template>
<script type="text/javascript">
    
    import {getTotalDays,getFirstWeekDay} from "../untils/untils.js"

	export default{
        name:"datePicker",
      	data(){
              
            return{
            	weekArr:["日","一","二","三","四","五","六"],
            	count:31,
            	year:new Date().getFullYear(),
            	month:new Date().getMonth(),
            	today:new Date().getDate()
            }              

        },
        methods:{
            
            fillDate(y,m){
                  // //获取当月总天数
                  // let countDays=  getTotalDays(y,m);
                  // //获取当前月份的第一天是星期几
                  // let firstWeekDay= getFirstWeekDay(y,m);
                // console.log(getTotalDays(new Date().getFullYear(),new Date().getMonth()));



                  // let countCells=(countDays)             
               




            },




        }




	}


</script>
<style scoped>
.date-pick-wrap{padding: 0 18px 0 18px;box-sizing: border-box;}
.header{text-align: center;padding: 10px}
.title-cell,.day-cell{width: 13%;float: left;padding:5px;text-align: center;height: 34px;line-height: 34px;box-sizing: border-box;font-size: 14px;}
</style>