<template>
  <div class="main" :style="cssVars">
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
import { createApp } from 'vue'
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core' // Import css here if you haven't elsewhere
import App from './App.vue' // Your entry component

const app = createApp(App)

app.use(VueAnimXyz)

export default {
  name: 'App',

  components: {
    InfoBar,
    Desktop,
    Window,
    AppBar
  },
  computed: {
    cssVars() {
      return {
        '--desktop_height': this.$store.state.desktop_height + 'vh',
      }
    }
  },
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
      height: var(--desktop_height);
      width: 100%;
  }

  #element::-webkit-scrollbar {
      display: none;
  }

</style>