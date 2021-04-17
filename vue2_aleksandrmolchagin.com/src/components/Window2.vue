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
        <transition @trfull="maximizeWindow">
          <XyzTransition appear xyz="fade down duration-8">
          <div class="resizable-content" :style="cssVars" v-if="windowNotHide">
              <div class="tab">
                <button class = "btnHide" v-on:click="hideWindow"></button>
                <button class = "btnMax" v-on:click="maximizeWindow"></button>
                <div class="dragme" v-on:click="minmizeWindow">
                <div class ="text">Terminal</div>
                </div>
 
                </div>
          </div>
        </XyzTransition>
      </transition>
    </VueResizable>
</template>

<script>
import VueResizable from 'vue-resizable';

export default {
  name: 'Window2',
  components: {VueResizable},  
  data() {
    const tW = 50;
    const tH = 50;
      return {
          handlers: ['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt'],
          left: 0, top: 0,
          height: tH, width: tW,
          maxW: 10000, maxH: 10000,
          minW: 350, minH: 350,
          fit: true, maximize: false, event: '',
          dragSelector: ".dragme",
          hide: false,
          border: 0.66,
          cursor: 'move',
          windowNotHide: true,
          index: "3",
          shadow: 2,
          shadow_size: 8,
          back_color: "black",
          show: true
      };
    },
  computed: {
    cssVars() {
      return {
        '--border': this.border + 'rem',
        '--cursor': this.cursor,
        '--index': this.index,
        '--shadow': this.shadow + "px",
        '--shadow-size': this.shadow_size + "px",
        '--back-color': this.back_color
      }
    }
  },
  methods: {
    maximizeWindow() {
      if (this.border == 0.66) {
        this.maximize = true;
        this.border = 0;
        this.shadow = 0;
        this.shadow_size = 0;
        this.back_color = "black";
        this.show = !this.show;
      }
      else 
        this.minmizeWindow();
    },
    minmizeWindow() {
      this.maximize = false;
      this.border = 0.66;
      this.shadow = 2;
      this.shadow_size = 5;
      this.back_color = "black";
    },
    hideWindow() {
      this.windowNotHide = false;
      setTimeout(() => this.index = "-1", 800);
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {    
      z-index: var(--index);
  }
  .resizable-content {
      position: relative;
      height: 100%;
      width: 100%;
      color: black;
      background: var(--back-color);
      border-radius: var(--border) var(--border) var(--border) var(--border);
      box-shadow: var(--shadow) var(--shadow) var(--shadow-size) rgba(0, 0, 0, 0.45);
      z-index: 2;
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
