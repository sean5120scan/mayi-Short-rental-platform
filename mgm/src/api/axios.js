import axios from "axios"
import qs from "qs"
const axiosInstance=axios.create();

axiosInstance.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=UTF-8'

axiosInstance.defaults.baseURL="http:localhost:8989/api"
axiosInstance.interceptors.request.use((config)=>{
   	    if(config.method=='post'){
            
            // let sessionID=sessionStorage.getItem("sessionID");
            let tempdata=config.data;

            // let data={...tempdata,sessionID}
	    	
	    	config.data=qs.stringify(config.data);
	    }
	    return config;
	},(error)=>{
		return Promise.reject(error)
})

axiosInstance.interceptors.response.use((res)=>{  
    	return res
    
  },(error)=>{
  	  return Promise.reject(error)
})

export default axiosInstance

