import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import goods from './modules/goods'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    home,
    goods
  }
})
