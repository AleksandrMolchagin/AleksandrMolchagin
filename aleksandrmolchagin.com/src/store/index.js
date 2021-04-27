import { createStore } from 'vuex'

export default createStore({
  state: {
    
    infobar_height: 3,
    appbar_height: 7.5,
    appbar_cube_height: 6,
    desktop_height: 88.5,

    apps: [
      //window
      { name: "REVENGE OF THE SITH",
        fullscreen: false,
        z_index: -1, },
      //terminal
      { name: "Terminal",
        fullscreen: false,
        z_index: 2, },

      { name: "TerminalTest",
        fullscreen: false,
        z_index: 3, }
        
    ]

  },
  mutations: {

    setFullScreen(state, array){
      this.state.apps[array[1]].fullscreen = array[0];
    },
    setZIndex(state, array){
      //alert('Send "' + this.state.apps[array[1]].name + '" to '+ array[0])
      this.state.apps[array[1]].z_index = array[0];
    },
    
  },

  actions: {

    setFullScreen(state, id){
      var newState = !this.state.apps[id].fullscreen;
      var array = [newState, id]
      state.commit('setFullScreen', array);
    },
    
    hide(state, id){
      var newIndex = -1;
      var array = [newIndex, id]; 
      state.commit('setZIndex', array);
    },

    openClose(state, id){
      var maxIndex = 2;
      for (var k = 0; k <= this.state.apps.length - 1; k++){
        if (this.state.apps[k].z_index > maxIndex)
          maxIndex = this.state.apps[k].z_index;
      }
      if (this.state.apps[id].z_index == maxIndex){
        this.dispatch('hide', id);

      }
      else if (this.state.apps[id].z_index == -1){
        var array2 = [maxIndex+1, id]; 
        state.commit('setZIndex', array2);
        this.dispatch('setNewZIndex', id);
      }
      else{
        this.dispatch('setNewZIndex', id);
      }
    },
    
    setNewZIndex(state, id){

      if (this.state.apps[id].z_index == -1)
        return;

      var currentIndex = this.state.apps[id].z_index;
      var maxIndex = -1;
      for (var k = 0; k <= this.state.apps.length - 1; k++){
        if (this.state.apps[k].z_index > maxIndex)
          maxIndex = this.state.apps[k].z_index;
      }

      for (var i = currentIndex; i < maxIndex; i++){
        for (var j = 0; j <= this.state.apps.length -1; j++) {
          if  (this.state.apps[j].z_index == i+1){
            var nId = j;
          }
        }
        var array = [i+1, id];
        state.commit('setZIndex', array);
        array = [i, nId]
        state.commit('setZIndex', array);
      }
    }

  },
  getters:{

    getCurrentFullScreen: (state) => (id) => {
      return state.apps[id].fullscreen;
    },
    getCurrentZIndex: (state) => (id) => {
      return state.apps[id].z_index;
    },
    getCurrentName: (state) => (id) => {
      return state.apps[id].name;
    }

  },
  modules: {
  }
})
