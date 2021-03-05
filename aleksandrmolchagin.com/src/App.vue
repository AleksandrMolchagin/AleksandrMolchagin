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
  html, body, #root {
    height: 100%;
    width: 100%;
    color: #333;
    background-image: url("assets/bg.jpg");
    background-size: 100% 100%;


}
  .main{
      height: 85.7%;
      width: 100%;
  }
#element::-webkit-scrollbar {
    display: none;
}
</style>