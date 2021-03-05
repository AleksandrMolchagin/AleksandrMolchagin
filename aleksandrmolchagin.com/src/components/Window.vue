<template>
    <VueResizable class="resizable"
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
    <div class="resizable-content" v-show="hide == false">
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
          hide: false
      };
    },
    methods: {
    maximizeWindow: function() {
      this.maximize = !this.maximize;
    },
    minmizeWindow: function(){
      this.maximize = false;
    },
    hideWindow: function(){
      this.hide = true;
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
  }
  .resizable-content {
      position: relative;
      font-family: 'Source Code Pro', monospace;
      font-size: 0.9rem;
      font-weight: bold;
      height: 100%;
      width: 100%;
      background:rgba(255, 255, 255, 0.966);
      border-radius: 0.66rem 0.66rem 0.66rem 0.66rem;
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
    z-index: 2;

  }
  .dragme {
    position: relative;
    width: 100%;
    height: 2rem;
    background:#af2929ec;
    border-radius: 0.66rem 0.66rem 0rem 0rem;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    z-index: 2;

  }
  .text{
    text-align: center;
    z-index: 2;

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
</style>
