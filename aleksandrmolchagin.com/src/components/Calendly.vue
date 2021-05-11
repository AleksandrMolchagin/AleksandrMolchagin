<template>
    <VueResizable class="resizable" :style="cssVars" v-on:click="bringToFront"
        ref="resizableComponent"
        :dragSelector="dragSelector"
        :active="handlers" :fit-parent="fit" :maximize="maximize"
        :max-width="maxW" :max-height="maxH"
        :min-width="minW" :min-height="minH"
        :width="width" :height="height"
        :left="left" :top="top"
        @mount="eHandler"
        @resize:move="eHandlerStart" @resize:start="eHandlerStart" @resize:end="eHandlerFinish"
        @drag:move="eHandlerStart" @drag:start="eHandlerStart" @drag:end="eHandlerFinish" @maximize="eHandlerFinish"
        > 
          <div class="resizable-content" :style="cssVars" v-if="true">
              <div class="tab">
                <button class = "btnHide" v-on:click="hide"></button>
                <button class = "btnMax" @mousedown="maximizeWindow"></button>
                <div class="dragme" @mousedown="minmizeWindow">
                <div class ="text">{{ name }}</div>
              </div>
                <div class = "container">
                    <div class="iframeToFront" v-on:click="bringToFront" ></div>
                    <iframe allowtransparency = "true" style="background: #FFFFFFce;" src="https://calendly.com/aleksandrmolchagin"></iframe>
                </div>  
              </div>
          </div>
    </VueResizable>
</template>

<script>
import VueResizable from 'vue-resizable';

export default {
  name: 'Window',
  components: {VueResizable},  
  data() {
      const id = 2;
      return {
          //App ID
          id: id,

          //Resizing handlers and drag object
          handlers: ['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt'],
          dragSelector: ".dragme",

          //Location
          left: this.$store.getters.getCurrentLocLeft(id), 
          top: this.$store.getters.getCurrentLocTop(id), 

          //Size
          height: this.$store.getters.getCurrentHeight(id),
          width: this.$store.getters.getCurrentWidth(id),
          
          //Other appereance parameters
          fit: true, 
          show: true,
          cursor: 'move',
          iframe: "visible",
      };
    },
  computed: {
    cssVars() {
      var main_color =  this.$store.getters.getCurrentMainColor(this.id) +  this.$store.getters.getCurrentTransperency();
      return {
        //Appereance paramaters for CSS
        '--border': this.$store.getters.getCurrentBorderRadius(this.id),
        '--cursor': this.cursor,
        '--shadowDR': this.$store.getters.getCurrentShadowDR(this.id),
        '--shadowUL': this.$store.getters.getCurrentShadowUL(this.id),
        '--index': this.$store.getters.getCurrentZIndex(this.id),
        '--height': (this.height -32) + "px",
        '--visibility': this.$store.getters.getCurrentVisibilityBlock(this.id),
        '--second-title-color': this.$store.getters.getCurrentSecondTitleColor(),
        '--text-title-color': this.$store.getters.getCurrentTextTitleColor(),
        '--title-color': this.$store.getters.getCurrentTitleColor(),
        '--hide-btn-color': this.$store.getters.getCurrentHideBtnColor(),
        '--fullscreen-btn-color': this.$store.getters.getCurrentFlscreenBtnColor(),
        '--main-color': main_color,
        '--text-main-color': this.$store.getters.getCurrentMainTextColor(this.id),
        '--margin-top': this.$store.getters.getCurrentAppMarginTop(this.id) +'vh',
        '--border-bottom': this.$store.getters.getCurrentBottomBorder(this.id) + 'vh solid ' + this.$store.getters.getCurrentTitleColor(),
      }
    },
    maximize: function () {
      return this.$store.getters.getCurrentFullScreen(this.id);
    },
    name: function(){
      return this.$store.getters.getCurrentName(this.id);
    },
    minW: function () {
      return this.$store.getters.getCurrentMINwidth(this.id);
    },
    minH: function () {
      return this.$store.getters.getCurrentMINheight(this.id);
    },
    maxW: function () {
      return this.$store.getters.getCurrentMAXwidth(this.id);
    },
    maxH: function () {
      return this.$store.getters.getCurrentMAXheight(this.id);
    },
  },
  methods: {
    eHandlerStart(data) {
      this.width = data.width;
      this.height = data.height;
      var array = ["visible", this.id];
      this.$store.dispatch('switchVisibilityBlock', array);
    },
    eHandlerFinish(data) {
      this.width = data.width;
      this.height = data.height;
      var array = ["hidden", this.id];
      this.$store.dispatch('switchVisibilityBlock', array);
    },
    hide(){
        this.$store.dispatch('hide', this.id);
    },
    maximizeWindow() {
      if (this.maximize == false) {
        this.$store.dispatch('switchBorderRadius', this.id);
        this.$store.dispatch('switchWindowShadows', this.id);
        this.$store.dispatch('switchFullScreen', this.id);
        this.$store.dispatch('switchAppMarginTop', this.id);
        this.$store.dispatch('disableTransparency');
        this.$store.dispatch('switchBottomBorder', this.id);

      }
      else 
        this.minmizeWindow();
    },
    minmizeWindow() {
      this.bringToFront();
      if (this.maximize == true) {
        this.$store.dispatch('switchBorderRadius', this.id);
        this.$store.dispatch('switchWindowShadows', this.id);
        this.$store.dispatch('switchFullScreen', this.id);
        this.$store.dispatch('switchAppMarginTop', this.id);
        this.$store.dispatch('enableTransparency');
        this.$store.dispatch('switchBottomBorder', this.id);
      }
    },
    bringToFront(){
      this.$store.dispatch('recalculateNewZIndex', this.id);
    },
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {    
      z-index: var(--index);
  }
  .resizable{
    position: absolute;
    margin-top: var(--margin-top);
  }
  .resizable-content {
      height: 100%;
      width: 100%;
      background: var(--main-color);
      border-radius: var(--border) var(--border) var(--border) var(--border);
      box-shadow: var(--shadowDR) var(--shadowDR) var(--shadowUL) rgba(0, 0, 0, 0.45);
      z-index: var(--index);
      border-bottom: var(--border-bottom);
  }
  .card {
      height:100%;
      

  }
  .card-text{
      max-width: max-content;
      margin: 1rem;

  }
  .tab{
    width: 100%;
    height: 0rem;

  }
  .dragme {
    position: relative;
    width: 100%;
    height: 2rem;
    background:var(--title-color);
    border-radius: var(--border) var(--border) 0rem 0rem;
    color: var(--text-title-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
  .text{
    margin-top: 0rem;
    text-align: center;

  }
  .btnHide {
    position: absolute;
    display:block;
    margin-top: 0.55em;
    margin-left: 0.55em;
    height: 1em;
    width: 1em;
    border-radius: 100%;
    border: 0.5em solid var(--second-title-color);
    z-index: calc(var(--index) + 1);
  }
  .btnHide:hover{
    border: 0.275em solid var(--hide-btn-color);
    transition: border 0.25s;
  }
   .btnMax {
    position: absolute;
    display:block;
    margin-top: 0.55em;
    margin-left: 1.8em;
    height: 1em;
    width: 1em;
    border-radius: 100%;
    border: 0.5em solid var(--second-title-color);
    z-index: calc(var(--index) + 1);
  }
  .btnMax:hover{
    border: 0.275em solid var(--fullscreen-btn-color);
    transition: border 0.25s;
  }
  .item-zoom {
    --xyz-opacity: 0;
    --xyz-scale-x: 2;
    --xyz-scale-y: 2;
    --xyz-scale-z: 2;
  }
  .trfull {
    transition: opacity 0.5s ease;
  }

  .container {
  height: var(--height);
  overflow: hidden;
  position: relative;
  }
  iframe {
    border-radius: 0rem 0rem var(--border) var(--border);
    border: 0;
    height: var(--height);
    width: 100%;
    left: 0;
    position: absolute;
    top: 0;
    z-index: var(--index)-1;
  }
  .iframeToFront{
    background-color: transparent;
    position: absolute;
    height: var(--height);
    width: 100%;
    left: 0;
    top: 0;;
    z-index: var(--index);
    visibility: var(--visibility);
  }
</style>
