import { createStore } from 'vuex'

export default createStore({
  state: {
    
    /*DESKTOP PARAMETERS */
    infobar_height: 3, 
      infobar_margin: "0.3%",
      infobar_margin_DEFAULT: "0.3%",
    desktop_height: 88.5,      
      appbar_cube_height: 6,
    appbar_height: 7.5,

    /*OTHER PARAMETERS*/
    help: {
      something_is_full: false,

    },

    style: {
      /*COLORS PARAMETERS*/
      /* TITLE */
      title_color: "#585c5f",
      second_title_color: "#bbc1c3",
      text_title_color: "#ffffff",
      hide_btn_color: "#d5d826",
      fullscreen_btn_color: "#3fd347",

      /* BODY */
      main_color: "#ffffff",
      text_main_color: "#000000",
      transperency: "ee",
      DEFAULT_transperency: "ee",  //should be the same as "transperency"

      /* WINDOW GLOBAL MAX SIZE */
      maxW: 10000,
      maxH: 10000,

      /*OTHER GLOBAL VALUES*/
      border_radius: "0.66rem",
      border_radius_icons: "25%",
      shadowDR: "2px",
      shadowUL: "8px",


    },

    apps: [
      /*  WINDOW {
            name,
            z-index,
            visibility of blocking block,

            custom main color,
            custom text color,

            width,
            height,
            min width,
            min height,
            max width,
            max height,
          }      
      */
      
          /* TEST WINDOW */
      { name: "REVENGE OF THE SITH",
        fullscreen: false,
        z_index: -1,
        block: "visible",
        
        main_color: "",
        text_main_color: "",
        border_radius: "0.66rem",
        shadowDR: "2px",
        shadowUL: "8px",

        width: 380,
        height: 380,
        minW: 380,
        minH: 380,
        maxW: "",
        maxH: "",
      },

          /* TERMINAL */
      { name: "Terminal",
        fullscreen: false,
        z_index: -1,
        block: "visible",
        
        main_color: "#000000",
        text_main_color: "red",
        border_radius: "0.66rem",
        shadowDR: "2px",
        shadowUL: "8px",

        width: 600,
        height: 400,
        minW: 600,
        minH: 400,
        maxW: "",
        maxH: "",

       },

         /* CALENDLY */
      { name: "Calendly - Meet with me",
        fullscreen: false,
        z_index: -1,
        block: "visible",
        
        main_color: "",
        text_main_color: "",
        border_radius: "0.66rem",
        shadowDR: "2px",
        shadowUL: "8px",

        width: 400,
        height: 620,
        minW: 400,
        minH: 620,
        maxW: "",
        maxH: "",
      },

    ]

  },
  /*------------------------------------------------------------*/
  /*-----------------------ALL-MUTATIONS------------------------*/
  /*------------------------------------------------------------*/
  mutations: {

    setFullScreen(state, array){                                                //SET FULLSCREEN 
      this.state.apps[array[1]].fullscreen = array[0];                          //array[1] - id  //array[2] - new fullscreen value
      this.state.help.something_is_full = array[0];
    },                                                                         

    setInfobarMargin(state, newValue){
      this.state.infobar_margin = newValue;
    },

    setZIndex(state, array){
      //alert('Send "' + this.state.apps[array[1]].name + '" to '+ array[0])
      this.state.apps[array[1]].z_index = array[0];
    },

    setNewVisibilityBlock(state, maxIndex){                                     //SET NEW VISIBILITY TO ALL BLOCKING BLOCK
      for (var i = 0; i <= this.state.apps.length - 1; i++){                    // maxIndex - top z-index
        if(this.state.apps[i].z_index == maxIndex)
          this.state.apps[i].block = "hidden";
        else  
          this.state.apps[i].block = "visible";
        //alert(this.state.apps[i].block);
      }
    },

    setNewTransparency(state, transparency){                                    //SET NEW TRANSPARENCY
      this.state.style.transperency = transparency;                             // transparency - transparency code ("ee", "ac"...)
    },

    setNewRadius(state, array){
      this.state.apps[array[1]].border_radius = array[0];
    },
    setNewShadows(state, array){
      this.state.apps[array[2]].shadowDR = array[0];
      this.state.apps[array[2]].shadowUL = array[1];
    },
  },
  /*------------------------------------------------------------*/
  /*-----------------------ALL-ACTIONS--------------------------*/
  /*------------------------------------------------------------*/
  actions: {

    switchFullScreen(state, id){                                                   //SET FULLSCREEN
      var newState = !this.state.apps[id].fullscreen;
      var array = [newState, id]
      state.commit('setFullScreen', array);
    },
    
    switchInfobarMargin(state){                                                 //SWITCH MARGIN (0.1% - 0%)
      var go = true;
      for (var i = 0; i <= this.state.apps.length - 1; i++) {
        if (this.state.apps[i].fullscreen == true && this.state.apps[i].z_index != -1)
          go = false;
      }
      if (go == true) {
        var newValue;
        if (this.state.infobar_margin == "0%")
          newValue = this.state.infobar_margin_DEFAULT;
      }
      else
        newValue = "0%";
      state.commit('setInfobarMargin', newValue);
    },

    hide(state, id){                                                            //HIDE A WINDOW
      var newIndex = -1;
      var array = [newIndex, id]; 
      state.commit('setZIndex', array);
    },

    openClose(state, id) {                                                      //OPEN OR CLOSE(hide) WINDOW
      var maxIndex = 2;                                        //find maximum index
      for (var k = 0; k <= this.state.apps.length - 1; k++){
        if (this.state.apps[k].z_index > maxIndex)
          maxIndex = this.state.apps[k].z_index;
      }

      if (this.state.apps[id].z_index == maxIndex){            //top window? -> close(hide) it
        this.dispatch('hide', id);

      }
      else if (this.state.apps[id].z_index == -1){             //hiden window -> open it
        var array2 = [maxIndex+1, id]; 
        state.commit('setZIndex', array2);
        this.dispatch('recalculateNewZIndex', id);
      }
      else {                                                    //neither top, nor hidden? -> put it on top
        this.dispatch('recalculateNewZIndex', id);
      }
      //alert(maxIndex)
      state.commit('setNewVisibilityBlock', maxIndex+1);          //visibility block on/off
      if (this.state.apps[id].fullscreen == true)
        this.dispatch('switchInfobarMargin');
    },
    
    recalculateNewZIndex(state, id){                                                    //RECALCULATE Z INDEXES

      if (this.state.apps[id].z_index == -1)                    //hidden window? -> return
        return;

      var currentIndex = this.state.apps[id].z_index;
      var maxIndex = -1;                                        //find maximum index               
      for (var k = 0; k <= this.state.apps.length - 1; k++){
        if (this.state.apps[k].z_index > maxIndex)
          maxIndex = this.state.apps[k].z_index;
      }

      if (this.state.apps[id].z_index == maxIndex)              //top window? -> return
        return;

      for (var i = currentIndex; i < maxIndex; i++){            //recalculate new index
        for (var j = 0; j <= this.state.apps.length -1; j++) {
          if  (this.state.apps[j].z_index == i+1){
            var nId = j;
          }
        }
        //commit new indexes
        var array = [i+1, id];                                  //new top index -> top                       
        state.commit('setZIndex', array);
        array = [i, nId]                                        //old top index -> bottom
        state.commit('setZIndex', array);
        state.commit('setZIndex', array);
        state.commit('setNewVisibilityBlock', maxIndex);        //old top index -> visibility block on
      }
    },      
    disableTransparency(state){                                                         //DISABLE TRANSPARENCY
      state.commit('setNewTransparency', "");
    },
    enableTransparency(state){                                                          //ENABLE TRANSPARENCY
      state.commit('setNewTransparency', this.state.style.DEFAULT_transperency);
    },


    switchBorderRadius(state, id){                                                      //BORDER RADIUS
      var newRadius;                                      
      if (this.state.apps[id].border_radius != 0)
        newRadius = 0;
      else
        newRadius = this.state.style.border_radius;
      var array = [newRadius, id]
      state.commit('setNewRadius', array);
    },
    switchWindowShadows(state, id){                                                      //SHADOWS SIZE
      var newShadowDR;  
      var newShadowUL; 
      //Shadow down - right                            
      if (this.state.apps[id].shadowDR != "0px")
        newShadowDR = "0px";
      else
        newShadowDR = this.state.style.shadowDR;
      //Shadow up - left
      if (this.state.apps[id].shadowUL != "0px")
        newShadowUL = "0px";
      else
        newShadowUL = this.state.style.shadowUL;
      var array = [newShadowDR, newShadowUL, id]
      state.commit('setNewShadows', array);
    },

  },
  /*------------------------------------------------------------*/
  /*-----------------------ALL-GETTERS--------------------------*/
  /*------------------------------------------------------------*/
  getters:{

    /*GLOBAK GETTERS*/
    /*------------------------------------------------------------*/
    getCurrentInfobarMargin: (state) => () => {       //INFOBAR MARGIN
      return state.infobar_margin;
    },
    /*------------------------------------------------------------*/
    /*KEY APP GETTERS*/
    /*------------------------------------------------------------*/
    getCurrentName: (state) => (id) => {              //APP NAME
      return state.apps[id].name;
    },
    getCurrentFullScreen: (state) => (id) => {        //FULLSCREEN BOOLEAN
      return state.apps[id].fullscreen;
    },
    getCurrentZIndex: (state) => (id) => {            //CURRENT Z-INDEX (top index = top window)
      return state.apps[id].z_index;
    },
    getCurrentVisibilityBlock: (state) => (id) => {   //VISIBILITY BLOCK = DIV OBJECT THAT
      return state.apps[id].block;                    //PROTECTS USER FROM ACCIDENTIAL CLICKS
    },


    /*GETTERS FOR COLORS, TRANSPARENCY PARAMETERS AND OTHER STYLING*/
    /*------------------------------------------------------------*/
    getCurrentTitleColor: (state) => () => {          //TITLE
      return state.style.title_color;
    },
    getCurrentSecondTitleColor: (state) => () => {    //TITLE(2)
      return state.style.second_title_color;
    },
    getCurrentTextTitleColor: (state) => () => {      //TITLE(TEXT)
      return state.style.text_title_color;
    },
    getCurrentHideBtnColor: (state) => () => {        //TITLE(HIDE)
      return state.style.hide_btn_color;
    },
    getCurrentFlscreenBtnColor: (state) => () => {    //TITLE(FULLSCREEN)
      return state.style.fullscreen_btn_color;
    },
    getCurrentMainColor: (state) => (id) => {         //BODY
      if (state.apps[id].main_color == "")
        return state.style.main_color;
      else
        return state.apps[id].main_color;
    },
    getCurrentMainTextColor: (state) => (id) => {     //BODY(TEXT)
      if (state.apps[id].main_color == "")
        return state.style.text_main_color;
      else
        return state.apps[id].text_main_color;
    },
    getCurrentTransperency: (state) => () => {        //TRANSPARENCY
      return state.style.transperency;
    },

    getCurrentBorderRadius: (state) => (id) => {       //BORDER RADIUS
      return state.apps[id].border_radius;
    },

    getCurrentShadowDR: (state) => (id) => {          //SHADOW SIZE (DOWN-RIGHT)
      return state.apps[id].shadowDR;
    },
    getCurrentShadowUL: (state) => (id) => {          //SHADOW SIZE (UP-LEFT)
      return state.apps[id].shadowUL;
    },
    /*------------------------------------------------------------*/
    

    /*GETTERS FOR SIZE PARAMETERS*/
    /*------------------------------------------------------------*/
    getCurrentWidth: (state) => (id) => {             //WIDTH
      return state.apps[id].width;
    },

    getCurrentHeight: (state) => (id) => {            //HEIGHT
      return state.apps[id].height;
    },

    getCurrentMINwidth: (state) => (id) => {          //MIN WIDTH
      return state.apps[id].minW;
    },

    getCurrentMINheight: (state) => (id) => {         //MIN HEIGHT
      return state.apps[id].minH;
    },

    getCurrentMAXwidth: (state) => (id) => {          //MAX WIDTH
      if (state.apps[id].maxW == "")
        return state.style.maxW;
      else
        return state.apps[id].maxW;
    },
    getCurrentMAXheight: (state) => (id) => {         //MAX HEIGHT
      if (state.apps[id].maxH == "")
        return state.style.maxH;
      else
        return state.apps[id].maxH;
    },
    /*------------------------------------------------------------*/
  },
})
