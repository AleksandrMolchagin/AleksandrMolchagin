<template>
  <Login/>
  <div class="main" :style="cssVars">
      <InfoBar/>
        <div class = "container">
        <Desktop/>
          <Window/><Terminal/><Calendly/><Resume/><Dogeminer/><Telegram/>
        </div>
      <AppBar/>
  </div>
</template>

<script>
import InfoBar from './components/InfoBar';
import Desktop from './components/Desktop';
import Window from './components/Window';
import Terminal from './components/Terminal';
import Calendly from './components/Calendly';
import Resume from './components/Resume';
import Dogeminer from './components/Dogeminer';
import Telegram from './components/Telegram';
import AppBar from './components/AppBar';
import Login from './components/Login'; 

export default {
  name: 'App',
  components: {
    Login,
    InfoBar,
      Desktop,
        Window, Terminal, Calendly, Resume, Dogeminer, Telegram, 
    AppBar,
  },
  data() {
    return {
    }
  },
  computed: {
    cssVars() {
      return {
        '--desktop_height': this.$store.getters.getCurrentDesktopHeight() + 'vh',
        '--font': this.$store.getters.getCurrentMainFont(),
      }
    },
  },
};
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Nunito&display=swap');
  * {
      margin: 0;
      padding: 0;
      font-family: 'Nunito', sans-serif;      
      font-size: var(--font);
  }

  html, body, #app {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-image: url("assets/snowy_dusk.jpg");
    background-size: 100% 100%;
  }

  .main{
      height: 100%;
      width: 100%;
  }

  #element::-webkit-scrollbar {
      display: none;
  }
  .container{
    height: var(--desktop_height);
    position: relative;
  }

</style>