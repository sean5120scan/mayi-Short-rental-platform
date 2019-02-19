import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Order from '@/components/Order'
import My from '@/components/My'
import Destination from '@/components/Destination'
import DatePicker from '@/components/DatePicker'

Router.prototype.goBack=()=>{
  this.isBack=true;
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
     {
      path: '/order',
      name: 'order',
      component: Order
    },
     {
      path: '/my',
      name: 'my',
      component: My
    },
      {
       path: '/destination',
       name: 'destination',
       component: Destination
     },
     {
       path: '/datePicker',
       name: 'datePicker',
       component: DatePicker
     },
  ]
})
