import React,{Component} from "react";
import {url} from "../../api/api.js"
import qs from "qs"
import "./login.css"
import{Link,Switch}from "react-router-dom"
import{Button} from "antd";

class Login extends Component{

    constructor(props){
     super(props)
     this.login=this.login.bind(this)
     this.getInptval=this.getInptval.bind(this);
     this.state={
          username:"",
          password:"",
          errInfo:""
     }
    }
    getInptval(e){
       var val=e.target.value;
       if(e.target.name=="username"){
          this.setState({
               username: val
          })  
       }else{
          this.setState({
               password: val
          })  
       }
    }
   
    login(){
     var data={
          username:this.state.username,
          password:this.state.password
     }
     fetch(url+"/login",{
        method:"post",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
     body:qs.stringify(data)
     })
     .then(res=>{return res.json()})
     .then(data=>{
          if(data.result){               
              this.props.history.push("/main")
          }else{
               this.setState({
                 errInfo: data.errInfo    
               })
          }
     })
    }

    render(){
         let {errInfo}=this.state;
         return(
          <div className="loginBox">
               <p>用户名:<input type="text" name="username" onInput={this.getInptval}/></p>
               <p>密码:<input type="password" name="password" onInput={this.getInptval}/></p>
               <p  className="errtip">{errInfo}</p>
               <p><Button type="primary" onClick={this.login}>登录</Button></p>
               <div className="login-tip">
                 <div><Link to="/modifyPassword">忘记密码</Link></div>
                 <div><Link to="/register">注册</Link></div>
               </div>
          </div>


         )
    }
                  
         

}
export default Login;