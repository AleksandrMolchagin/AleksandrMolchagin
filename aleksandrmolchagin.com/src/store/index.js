import { createStore } from 'vuex'

export default createStore({
  state: {
    
    /*DESKTOP PARAMETERS */
    infobar_height: 3, 

    desktop_height: 88.5,
    DEFAULT_desktop_height: 88.5,            
      appbar_cube_height: 6,
      DEFAULT_app_margin_top: 0.2,
      DEFAULT_bottom_border_enabled: 0.8,

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

      /*FONTS*/
      infobar_font: "1rem",
      title_font: "1rem",
      main_font: "1rem",

      /*OTHER GLOBAL VALUES*/
      border_radius: "0.66rem",
      border_radius_icons: "25%",
      shadowDR: "2px",
      shadowUL: "8px",


    },

    apps: [
        /* TEST WINDOW, ID: 00  */
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
        left: 500,
        top: 200,

        margin_top: 0.2,
        bottom_border: 0
      },

        /* TERMINAL, ID: 01  */
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
        left: 800,
        top: 100,

        margin_top: 0.2,
        bottom_border: 0
       },

        /* CALENDLY, ID: 02 */
      { name: "Calendly - meet with me",
        fullscreen: false,
        z_index: -1,
        block: "visible",
        
        main_color: "",
        text_main_color: "",
        border_radius: "0.66rem",
        shadowDR: "2px",
        shadowUL: "8px",

        width: 400,
        height: 650,
        minW: 300,
        minH: 500,
        maxW: "",
        maxH: "",
        left: 8,
        top: 0,

        margin_top: 0.2,
        bottom_border: 0
      },

         /* RESUME, ID: 03 */ 
         { name: "Resume",
         fullscreen: false,
         z_index: -1,
         block: "visible",
         
         main_color: "",
         text_main_color: "",
         border_radius: "0.66rem",
         shadowDR: "2px",
         shadowUL: "6px",
 
         width: 400,
         height: 620,
         minW: 400,
         minH: 620,
         maxW: "",
         maxH: "",
         left: 500,
         top: 100,
 
         margin_top: 0.2,
         bottom_border: 0
       },

        /* Dogeminer, ID: 04 */ 
        { name: "Dogeminer",
        fullscreen: false,
        z_index: -1,
        block: "visible",
        
        main_color: "",
        text_main_color: "",
        border_radius: "0.66rem",
        shadowDR: "2px",
        shadowUL: "8px",

        width: 1100,
        height: 550,
        minW: 600,
        minH: 300,
        maxW: "",
        maxH: "",
        left: 50,
        top: 50,

        margin_top: 0.2,
        bottom_border: 0
      },

    ]
  },
  /*------------------------------------------------------------*/
  /*-----------------------ALL-MUTATIONS------------------------*/
  /*------------------------------------------------------------*/
  mutations: {

    setFullScreen(state, array){                                                //SET FULLSCREEN 
      this.state.apps[array[1]].fullscreen = array[0];                          //array[1] - id  //array[0] - new fullscreen value
      this.state.help.something_is_full = array[0];
    },                                                                         

    setAppMarginTop(state, array){                                              //SET TOP MARGIN
      this.state.apps[array[1]].margin_top = array[0];                          //array[1] - id  //array[2] - new value
    },

    setDesktopHeight(state, newValue){                                           //SET DESKTOP HEIGHT
      this.state.desktop_height = newValue;                          
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
    setVisibilityBlock(state, array){                                         //SET  VISIBILITY TO THE SPRCIFIC BLOCKING BLOCK
        this.state.apps[array[1]].block = array[0];       
        //alert(this.state.apps[i].block);
    },
    setNewBottomBorder(state, array){                                          //SET BOTTOM BORDER VALUE
        this.state.apps[array[1]].bottom_border = array[0];
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

    switchFullScreen(state, id){                                                //SWITCH FULLSCREEN
      var newState = !this.state.apps[id].fullscreen;
      var array = [newState, id]
      state.commit('setFullScreen', array);
    },
    switchAppMarginTop(state, id){                                              //SWITCH TOP MARGIN FOR AN APP
      var newValue;
      if (this.state.apps[id].margin_top == "0") {
        newValue = this.state.DEFAULT_app_margin_top;
      }
      else {
        newValue = "0";
      }
      var array = [newValue, id]
      state.commit('setAppMarginTop', array);
    },
    switchBottomBorder(state, id){                                              //SWITCH BOTTOM BORDER VALUE
      var newValue = 0;
      if (this.state.apps[id].bottom_border == 0)
        newValue = this.state.DEFAULT_bottom_border_enabled;
      var array = [newValue, id] 
      state.commit('setNewBottomBorder', array);
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

    switchVisibilityBlock(state, array){                                                  //Switch visibility block
      state.commit('setVisibilityBlock', array); 
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
    //FONTS
    getCurrentInfobarFont: (state) => () => {       //INFOBAR FONT
      return state.style.infobar_font;
    },
    getCurrenttTitleFont: (state) => () => {       //TITLE FONT
      return state.style.title_font;
    },
    getCurrentMainFont: (state) => () => {       //MAIN FONT
      return state.style.main_font;
    },
    getCurrentDesktopHeight: (state) => () => {       //DESKTOP FONT
      return state.desktop_height;
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
    getCurrentAppMarginTop: (state) => (id) => {      //SHADOW SIZE (UP-LEFT)
      return state.apps[id].margin_top;
    },
    getCurrentBottomBorder: (state) => (id) => {      //border bottom
      return state.apps[id].bottom_border;
    },
    /*------------------------------------------------------------*/

    /*GETTERS FOR SIZE PARAMETERS*/
    /*------------------------------------------------------------*/
    getCurrentHeight: (state) => (id) => {           //HEIGHT
      return state.apps[id].height;
    },
    getCurrentWidth: (state) => (id) => {            //WIDTH
      return state.apps[id].width;
    },
    getCurrentLocLeft: (state) => (id) => {        //Location LEFT
      return state.apps[id].left;
    },
    getCurrentLocTop: (state) => (id) => {           //Location TOP
      return state.apps[id].top;
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
