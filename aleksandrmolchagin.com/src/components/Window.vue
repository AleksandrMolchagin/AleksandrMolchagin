<template>
    <VueResizable class="resizable"
        ref="resizableComponent"
        :dragSelector="dragSelector"
        :active="handlers"
        :fit-parent="true"
        :min-width="350"
        :min-height="350"
        :width="350"
        :height="350"
        :left="100"
        :top="100"
        @mount="eHandler"
        @resize:move="eHandler"
        @resize:start="eHandler"
        @resize:end="eHandler"
        @drag:move="eHandler"
        @drag:start="eHandler"
        @drag:end="eHandler"
      >
    <div class="resizable-content">
        <div class="dragme">
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
    </VueResizable>
</template>

<script>
import VueResizable from 'vue-resizable';

export default {
  name: 'Window',
  components: {VueResizable},
  props: {
    msg: String
  },
  data() {
    return {
      dragSelector: ".dragme"
    };

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
    font-family: 'Source Code Pro', monospace;
    font-size: 0.9rem;
    font-weight: bold;
    height: 100%;
    width: 100%;
    background:rgba(255, 255, 255, 0.966);
    border-radius: 0.66rem 0.66rem 0.66rem 0.66rem;
    box-shadow: 0px 0px 3px grey;
}
.card {
    height:100%;

}
.card-text{
    max-width: max-content;
    margin: 1rem;
}
.dragme {
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
}
.text{
  text-align: center;
}
</style>
