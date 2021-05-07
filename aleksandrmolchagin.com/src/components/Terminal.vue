<template>
    <VueResizable class="resizable" :style="cssVars"  v-on:click="bringToFront"
        ref="resizableComponent"
        :dragSelector="dragSelector"
        :active="handlers" :fit-parent="fit" :maximize="maximize"
        :max-width="maxW" :max-height="maxH"
        :min-width="minW" :min-height="minH"
        :width="width" :height="height"
        :left="left" :top="top"
        @mount="eHandler"
        @resize:move="eHandler" @resize:start="eHandler" @resize:end="eHandler"
        @drag:move="eHandler" @drag:start="eHandler" @drag:end="eHandler" @maximize="eHandler"
        > 
          <div class="resizable-content" :style="cssVars" v-if="true">
              <div class="tab">
                <button class = "btnHide" v-on:click="hide"></button>
                <button class = "btnMax" v-on:click="maximizeWindow"></button>
                <div class="dragme" v-on:click="minmizeWindow">
                <div class ="text">{{ name }}</div>
                </div>
                  <section class = "card-text">
                    aleksandrmolchagin.com: ~$ welcome to the terminal
                  </section>
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
    const tW = window.screen.availWidth;
    const tH = window.screen.availHeight;
      return {
          //App ID
            id: 1,

          //Resizing handlers and drag object
          handlers: ['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt'],
          dragSelector: ".dragme",

          //Location
          left: `calc(${tW}px - ${tW / 2}px - 150px)`, 
          top: `calc(${tH}px - ${tH / 2}px - 150px)`,


          //Other appereance parameters
          fit: true, 
          show: true,
          cursor: 'move',
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
        '--second-title-color': this.$store.getters.getCurrentSecondTitleColor(),
        '--text-title-color': this.$store.getters.getCurrentTextTitleColor(),
        '--title-color': this.$store.getters.getCurrentTitleColor(),
        '--hide-btn-color': this.$store.getters.getCurrentHideBtnColor(),
        '--fullscreen-btn-color': this.$store.getters.getCurrentFlscreenBtnColor(),
        '--main-color': main_color,
        '--text-main-color': this.$store.getters.getCurrentMainTextColor(this.id),
      }
    },
    maximize: function () {
      return this.$store.getters.getCurrentFullScreen(this.id);
    },
    name: function(){
      return this.$store.getters.getCurrentName(this.id);
    },

    width: function () {
      return this.$store.getters.getCurrentWidth(this.id);
    },
    height: function () {
      return this.$store.getters.getCurrentHeight(this.id);
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
    hide(){
        this.$store.dispatch('hide', this.id);
    },
    maximizeWindow() {
      if (this.maximize == false) {
        this.$store.dispatch('switchBorderRadius', this.id);
        this.$store.dispatch('switchWindowShadows', this.id);
        this.$store.dispatch('switchFullScreen', this.id);
        this.$store.dispatch('switchInfobarMargin');
        this.$store.dispatch('disableTransparency');
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
        this.$store.dispatch('switchInfobarMargin');
        this.$store.dispatch('enableTransparency');
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
  }
  .resizable-content {
      height: 100%;
      width: 100%;
      color: var(--text-main-color);
      background: var(--main-color);
      border-radius: var(--border) var(--border) var(--border) var(--border);
      box-shadow: var(--shadowDR) var(--shadowDR) var(--shadowUL) rgba(0, 0, 0, 0.45);
      z-index: var(--index);
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
</style>
