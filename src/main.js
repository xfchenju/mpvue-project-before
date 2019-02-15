import Vue from 'vue'
import App from './App'
import './css/app.css'
import '../static/weui/weui.css'
import '@/http/config.js';

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
