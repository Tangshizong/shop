import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import vant from './vant'
import 'vant/lib/index.css';

Vue.use(axios)
//引入样式
import './assets'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
