import Vue from 'vue'
import Vuex from 'vuex'
import windows from './modules/windows'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    windows
    },

})
