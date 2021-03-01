<template>
<div>
    <VueResizable class="resizable"
        ref="resizableComponent"
        :dragSelector="dragSelector"
        :active="handlers"
        :fit-parent="fit"
        :max-width="1000"
        :max-height="600"
        :min-width="320"
        :min-height="320"
        :width="320"
        :height="320"
        :left="left"
        :top="top"
        @mount="eHandler"
        @resize:move="eHandler"
        @resize:start="eHandler"
        @resize:end="eHandler"
        @drag:move="eHandler"
        @drag:start="eHandler"
        @drag:end="eHandler"
      >
    <div class="resizable-content">
        <div class="dragme">REVENGE OF THE SITH</div>
        <v-card class tile = "card">
            <v-card-text class = "card-text">
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
            captive Chancellor.…
            </v-card-text>
        </v-card>
    </div>
    </VueResizable>
</div>
</template>

<script>
import VueResizable from 'vue-resizable'

export default {
  name: 'Window',
  components: {VueResizable},
  props: {
    msg: String
  },
  data() {
    const tW = 150;
    const tH = 150;
    return {
      left: `calc( 50% - ${tW / 2}px)`,
      top: `calc(50% - ${tH / 2}px)`,
      dragSelector: ".dragme"
    };
}
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.resizable-content {
    height: 100%;
    width: 100%;
}
.card {
    height:100%;

}
.card-text{
    max-width: max-content;
}
.dragme {
  width: 100%;
  height: 30dp;
  background:#af2929;
  color: white;
  text-align: center;
  cursor: pointer;
}
</style>
