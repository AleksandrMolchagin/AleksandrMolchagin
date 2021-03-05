import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowVisible: false,
  },
  mutations: {
    makeWindowVisible(state){
      state.windowVisible = state;
      console.log("Window is visible: " + state.windowVisible);
    }

  },
  actions: {
  },
  modules: {
  }
})
