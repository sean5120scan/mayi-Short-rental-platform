import React,{Component} from "react";
import {message,Button} from "antd"
import {url} from "../../api/api.js"
import qs from "qs"
import "./register.css"



const success=()=>{

   message.success('注册成功')
}
const error=(errInfo)=>{

   message.error(errInfo)
}

class Register extends Component{

    constructor(props){
     super(props)
     this.state={
        username:"",
        password:"",
        mobile:"",
        email:""
     }
     
     this.submit=this.submit.bind(this)
     this.getInptval=this.getInptval.bind(this)

    }
   
    submit(){
      console.log(this.state)
    let  { username,password,mobile,email}=this.state;
     var data={
         username,
         password,
         mobile,
         email
     }
     
     fetch(url+"/register",
     {
        method:"post",
        headers:{
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
       body:qs.stringify(data)
     }).then(res=>{return res.json()}).then(data=>{
        console.log("结果:",data)
        console.log("this.props.history:",this.props.history)
        if(data.result){
            success()
            this.props.history.push("/main")
        }else{
            
            error(data.errInfo)
        }
     }).catch(err=>{
        console.log(err)
     })

    }
    getInptval(e){
       
       console.log("e:",e.target.value);
       var val=e.target.value;
       switch (e.target.name){

           case "username":
           this.setState({
                username:val               
           })
           break;
           case "password":
           this.setState({
                password:val               
           })
           break;
           case "mobile":
           this.setState({
                mobile:val               
           })
           break;
            case "email":
           this.setState({
                email:val               
           })
           break;
           default:
           return 
       }
        

    }

    render(){
       return(

          <div className="register-box">
               <p>用户名:<input type="text" name="username" onInput={this.getInptval}/></p>
               <p>密码:<input type="password" name="password" onInput={this.getInptval}/></p>
               <p>手机号:<input type="text" name="mobile" onInput={this.getInptval}/></p>
               <p>邮箱:<input type="email" name="email" onInput={this.getInptval}/></p>
               <p><Button type="primary" onClick={this.submit}>注册</Button></p>
           </div>
       )
        
    }

}
export default Register;