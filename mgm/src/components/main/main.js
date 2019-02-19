import React,{Component} from "react";
// import{Row,Col,Icon}from "antd";
import{Icon} from "antd";

import{BrowserRouter,NavLink,Switch,Route} from "react-router-dom"

import Publish from "../publish/publish.js"
import My from "../my/my.js"

import "./main.css"

const Main=(props)=>(
   
      <div className="mainBox">
               <div className="header">
                 <div className="logoinfo">蚂蚁短租后台管理平台</div>
                 <div className="loginout">退出</div>
                 
               </div>
                <div className="mainInner">
                     <div className="sider">
                        <li><NavLink to="/main/my" activeClassName="active"> <Icon type="user" />我是房东</NavLink> </li>
                        <li><NavLink to="/main/publish" ><Icon type="project" /> 我的发布</NavLink> </li>
                     </div>
               
                     <div className="content">
                          
                                 <Switch>
                                       <Route path="/main/my" component={My} /> 
                                       <Route path="/main/publish" component={Publish}/> 
                                    </Switch>
                          
                     </div >
  

                </div>
              
      </div>







)


// class Main extends Component{

//     constructor(props){
//      super(props)
//     }
     
//     render(){
//        return(
//           <div >
//                 <div>阿萨德静安</div>
//           </div>
//        )
//     }
// }
export default Main;