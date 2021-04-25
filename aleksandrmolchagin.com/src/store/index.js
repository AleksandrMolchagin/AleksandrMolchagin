import { createStore } from 'vuex'

export default createStore({
  state: {
    
    infobar_height: 3,
    appbar_height: 7.5,
    appbar_cube_height: 6,
    desktop_height: 88.5,

    apps: [
      {
        state: 1,
        fullscreen: false,
        z_index: 2,
      }
    ]

  },
  mutations: {

    setFullScreen(state, array){
      this.state.apps[array[1]].fullscreen = array[0];
    },
    setZIndex(state, array){
      this.state.apps[array[1]].z_index = array[0];
    },
    
  },

  actions: {

    setFullScreen(state, id){
      var newState = !this.state.apps[id].fullscreen;
      var array = [newState, id]
      state.commit('setFullScreen', array);
    },
    setZIndex(state, id){
      var newIndex = -1;
      if (this.state.apps[id].z_index == -1){ newIndex = 2}
      var array = [newIndex, id]
      state.commit('setZIndex', array);
    } 

  },
  getters:{

    getCurrentFullScreen: (state) => (id) => {
      return state.apps[id].fullscreen;
    },
    getCurrentZIndex: (state) => (id) => {
      return state.apps[id].z_index;
    }

  },
  modules: {
  }
})
