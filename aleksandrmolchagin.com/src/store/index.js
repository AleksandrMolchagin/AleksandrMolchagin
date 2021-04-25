import { createStore } from 'vuex'

export default createStore({
  state: {
    infobar_height: 3,
    appbar_height: 7.5,
    appbar_cube_height: 6,
    desktop_height: 88.5,

    apps: {

      test: {
        state: 1,
        fullscreen: true,
        z_index: 2,
      },

      terminal: {
        state: 0,
        fullscreen: false,
        z_index: 2,
      }
    },

  },
  mutations: {
    setNewState(id, newState){
      this.apps.id.state = newState;
    },
    setFullScreen(state, newState){
      this.state.apps.test.fullscreen = newState;
    },
    setZIndex(name, newIndex){
      this.state.apps.test.z_index = newIndex;
    },
  },
  actions: {
    setFullScreen(state){
      var newState = !this.state.apps.test.fullscreen;
      state.commit('setFullScreen', newState);
    },
    setZIndex(state){
      var newIndex = -1;
      if (this.state.apps.test.z_index == -1){ newIndex = 2}
      state.commit('setZIndex', newIndex);
    }
  },
  getters:{
    getCurrentFullScreen: state => state.apps.test.fullscreen,
    getCurrentZIndex: state => state.apps.test.z_index
  },
  modules: {
  }
})
