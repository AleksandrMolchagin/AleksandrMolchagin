<template>
  <v-app>
    <v-main>
      <Window/>
    </v-main>
  </v-app>
</template>

<script>
import Window from './components/Window';


export default {
  name: 'App',

  components: {
    Window
  },

  data: () => ({
    //
  }),
};
</script>
