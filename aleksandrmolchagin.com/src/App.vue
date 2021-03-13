<template>
  <div class="main">
      <InfoBar/>
      <Desktop/>
      <Window/>
      <AppBar/>
  </div>
</template>

<script>
import InfoBar from './components/InfoBar';
import Window from './components/Window';
import Desktop from './components/Desktop';
import AppBar from './components/AppBar';
import Vue from 'vue'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core' // Import css here if you haven't elsewhere

Vue.use(VueAnimXYZ)

export default {
  name: 'App',

  components: {
    InfoBar,
    Desktop,
    Window,
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
<style >
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  * {
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;      
      font-size: 0.9rem;
  }
  html, body, #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url("assets/bg.jpg");
    background-size: 100% 100%;


}
  .main{
      height: 86.5%;
      width: 100%;
  }
#element::-webkit-scrollbar {
    display: none;
}
</style>