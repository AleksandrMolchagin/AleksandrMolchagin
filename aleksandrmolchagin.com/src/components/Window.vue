<template>
    <VueResizable class="resizable" :style="cssVars"  
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
                <div class ="text">REVENGE OF THE SITH</div>
                </div>
                  <section class = "card-text">
                  War! The Republic is crumbling
                  under attacks by the ruthless
                  Sith Lord, Count Dooku.
                  There are heroes on both sides.
                  Evil is everywhere.

                  In a stunning move, the
                  fiendish droid leader, General
                  Grievous, has swept into the
                  Republic capital and kidnapped
                  Chancellor Palpatine, leader of
                  the Galactic Senate.

                  As the Separatist Droid Army
                  attempts to flee the besieged
                  capital with their valuable
                  hostage, two Jedi Knights lead a
                  desperate mission to rescue the
                  captive Chancellor…
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
            id: 0,

          //Resizing handlers and drag object
          handlers: ['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt'],
          dragSelector: ".dragme",

          //Location
          left: `calc(${tW}px - ${tW / 2}px - 190px)`, 
          top: `calc(${tH}px - ${tH / 2}px - 190px)`,

          //Size
          height: 380, width: 380,
          minW: 380, minH: 380,
          maxW: 10000, maxH: 10000,

          //Other appereance parameters
          fit: true, 
          show: true,
          cursor: 'move',
          border: 0.66,
          shadow: 2,
          shadow_size: 8,
          back_color: "#bbc1c3ea",
      };
    },
  computed: {
    cssVars() {
      return {
        //Appereance paramaters for CSS
        '--border': this.border + 'rem',
        '--cursor': this.cursor,
        '--shadow': this.shadow + "px",
        '--shadow-size': this.shadow_size + "px",
        '--back-color': this.back_color,
        '--index': this.$store.getters.getCurrentZIndex(this.id),
      }
    },
    maximize: function () {
      return this.$store.getters.getCurrentFullScreen(this.id);
    },
  },
  methods: {
    hide(){
        this.$store.dispatch('hide', this.id);
    },
    maximizeWindow() {
      if (this.maximize == false) {
        this.$store.dispatch('setFullScreen', this.id);
        this.border = 0;
        this.shadow = 0;
        this.shadow_size = 0;
        this.back_color = "#bbc1c3";
        this.show = !this.show;
      }
      else 
        this.minmizeWindow();
    },
    minmizeWindow() {
      if (this.maximize == true) {
        this.$store.dispatch('setFullScreen', this.id);
        this.border = 0.66;
        this.shadow = 2;
        this.shadow_size = 5;
        this.back_color = "#bbc1c3ea";
      }
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
      color: black;
      background: var(--back-color);
      border-radius: var(--border) var(--border) var(--border) var(--border);
      box-shadow: var(--shadow) var(--shadow) var(--shadow-size) rgba(0, 0, 0, 0.45);
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
    background:#585c5f;
    border-radius: var(--border) var(--border) 0rem 0rem;
    color: white;
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
    border: 0.5em solid #bbc1c3;
    z-index: calc(var(--index) + 1);
  }
  .btnHide:hover{
    border: 0.275em solid #d5d826;
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
    border: 0.5em solid #bbc1c3;
    z-index: calc(var(--index) + 1);
  }
  .btnMax:hover{
    border: 0.275em solid #3fd347;
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
