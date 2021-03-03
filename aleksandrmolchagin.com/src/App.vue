<template>
  <v-app>
    <v-main>
      <GridApp/>
      <Window/>
    </v-main>
  </v-app>
</template>

<script>
import Window from './components/Window';
import GridApp from './components/GridApp';


export default {
  name: 'App',

  components: {
    Window,
    GridApp
  },

  data: () => ({
    //
  }),
};
</script>
