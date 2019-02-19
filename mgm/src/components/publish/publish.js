import React,{Component} from "react";
import {message,Button} from "antd"
import "./publish.css"

class Publish extends Component{

    constructor(props){
     super(props)
     
     
     this.submit=this.submit.bind(this)
     this.getInptval=this.getInptval.bind(this)

    }
   
    submit(){
      console.log(this.state)
    // let  { username,password,mobile,email}=this.state;     

    }
    getInptval(e){
       
       console.log("e:",e.target.value);
       var val=e.target.value;
    }

    render(){
       return(

          <div className="publishBox">
               <p>用户名:<input type="text" name="username" onInput={this.getInptval}/></p>
               <p>密码:<input type="password" name="password" onInput={this.getInptval}/></p>
               <p>手机号:<input type="text" name="mobile" onInput={this.getInptval}/></p>
               <p>邮箱:<input type="email" name="email" onInput={this.getInptval}/></p>
               <p><Button type="primary" onClick={this.submit}>注册</Button></p>
           </div>
       )
        
    }

}
export default Publish;