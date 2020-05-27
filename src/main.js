import Vue from 'vue'
import App from './App.vue'

//设置vue的提示功能
Vue.config.productionTip = true
//云开发数据库授权

//声明当前组件的类型 
App.mpType = 'app'//应用

wx.cloud.init({
    traceUser: true
  })

//生成应用的实例
const app = new Vue(App)

//挂载整个应用
app.$mount()
