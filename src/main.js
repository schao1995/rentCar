// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/all.css'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// 引入axios
import axios from 'axios';
Vue.prototype.$axios=axios;
// axios.defaults.baseURL="http://localhost:8080/LeastCar";
Vue.prototype.HOME = '/api';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
