const mapKey="5ThWKERs5YpBg4UBGGuGScXp";

// const getPosition=(id)=>{
  
// 	var map = new BMap.Map(id);
//     // var point = new BMap.Point(116.331398,39.897445);
//     // map.centerAndZoom(point,12);

//     var geolocation = new BMap.Geolocation();
//     geolocation.getCurrentPosition(function(r){
//       if(this.getStatus() == BMAP_STATUS_SUCCESS){
//         var mk = new BMap.Marker(r.point);
//         // console.log('您的位置：'+r.point.lng+','+r.point.lat);

//         let lng=r.point.lng;
//         let lat=r.point.lat;
//         var point = new BMap.Point(lng,lat);

//         var gc = new BMap.Geocoder();
//         gc.getLocation(point, function(rs){
//             var addComp = rs.addressComponents;
//            return addComp.city
//         })
      


//       }else {
//         alert('failed'+this.getStatus());
//       }        
//     });

// }


//得到当月总天数
var  getTotalDays=(y,m)=>{
          return new Date(y,m+1,0).getDate()
 }
//得到当月总天数
var  getFirstWeekDay=(y,m)=>{
         return new Date(y,m,1).getDay()
  }



export {mapKey,getPosition,getTotalDays,getFirstWeekDay}