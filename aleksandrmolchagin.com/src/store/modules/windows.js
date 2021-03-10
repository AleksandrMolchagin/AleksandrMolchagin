const state = () => ({
    windowName: [],
    windowStatus: []
  })

  // getters
const getters = {
    
    getWindowState: (state, i) => {
        return state.windowStatus[i];
    },
    getWindowName: (state, i) => {
        return state.windowName[i];
    }
}
const actions = {

    changeWindowState ({state, commit}, i){
        if (this.getWindowState(state, i) == false)
            commit('setWindowState', i, true);
        else
            commit('setWindowState', i, false); 
    }
}

const mutations = {
    setWindowState (state, {i, newState}) {
      state.windowStatus[i] = newState; 
    },
  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }