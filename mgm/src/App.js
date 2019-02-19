import React, { Component } from 'react';
import{BrowserRouter,Switch,Route} from "react-router-dom";

import Login from "./components/login/login.js"
import Register from "./components/register/register.js"
import Main from "./components/main/main.js"
import Publish from "./components/publish/publish.js"
import My from "./components/my/my.js"

import zhCN from 'antd/lib/locale-provider/zh_CN';

import "antd/dist/antd.css";
import "./index.css";


import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
           <BrowserRouter>
             <Switch>
                  <Route path="/" component={Login} exact/>  
                  <Route path="/login" component={Login} />  
                  <Route path="/register" component={Register} />  
                  <Route path="/main" component={Main} />  
                  <Route path="/publish" component={Publish}/>  
                  <Route path="/My" component={My}/>  
             </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
