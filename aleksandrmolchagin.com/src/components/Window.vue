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
        <XyzTransition appear xyz="fade flip-up flip-left duration-10">
        <div class="resizable-content" :style="cssVars" v-if="windowNotHide">
            <div class="tab">
              <button class = "btnHide" v-on:click="hideWindow"></button>
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
      </XyzTransition>
    </VueResizable>
</template>

<script>
import VueResizable from 'vue-resizable';

export default {
  name: 'Window',
  components: {VueResizable},  
  data() {
    const tW = 150;
    const tH = 150;
      return {
          handlers: ['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt'],
          left: `calc( 50% - ${tW / 2}px)`, top: `calc(50% - ${tH / 2}px)`,
          height: tH, width: tW,
          maxW: 10000, maxH: 10000,
          minW: 350, minH: 350,
          fit: true, maximize: false, event: '',
          dragSelector: ".dragme",
          hide: false,
          border: 0.66,
          cursor: 'move',
          windowNotHide: true,
          index: "2"
      };
    },
  computed: {
    cssVars() {
      return {
        '--border': this.border + 'rem',
        '--cursor': this.cursor,
        '--index': this.index,
      }
    }
  },
  methods: {
    maximizeWindow: function() {
      if (this.border == 0.66) {
        this.maximize = true;
        this.border = 0;
      }
      else 
        this.minmizeWindow();
    },
    minmizeWindow: function(){
      this.maximize = false;
      this.border = 0.66;
    },
    hideWindow: function(){
      this.windowNotHide = false;
      setTimeout(() => this.index = "-1", 1000);
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap');
  * {
      margin: 0;
      padding: 0;
      z-index: var(--index);
  }
  .resizable-content {
      position: relative;
      font-family: 'Source Code Pro', monospace;
      font-size: 0.9rem;
      font-weight: bold;
      height: 100%;
      width: 100%;
      background:rgba(255, 255, 255, 0.966);
      border-radius: var(--border) var(--border) var(--border) var(--border);
      box-shadow: 0px 0px 3px grey;
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
    background:#af2929ec;
    border-radius: var(--border) var(--border) 0rem 0rem;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

  }
  .text{
    text-align: center;

  }
  .btnHide {
    position: fixed;
    display:block;
    margin-top: 0.5em;
    margin-left: 0.5em;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    border: 0.4em solid orange;
    z-index: 3;
  }
   .btnMax {
    position: fixed;
    display:block;
    margin-top: 0.5em;
    margin-left: 1.75em;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    border: 0.4em solid greenyellow;
    z-index: 3;
  }
  .item-zoom {
    --xyz-opacity: 0;
    --xyz-scale-x: 2;
    --xyz-scale-y: 2;
    --xyz-scale-z: 2;
  }
</style>
