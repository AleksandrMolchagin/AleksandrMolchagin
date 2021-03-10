<template>
    <div class="container">
        <div class="cube" id="SWRoS"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>   
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'AppBar',
    components: {
    },
    data() {
    },
    methods: {
    },

    
};
</script>s
<style scoped>
    .container{
        position: absolute;
        bottom: 0;
        height: 9%;
        width: 100%;
        height: 5.5em;
        text-align: center;
        vertical-align: bottom;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;

    }
    .cube {
        padding: 1em;
        display: inline-block;
        border-radius: 0.66rem;
        width: 4.5em;
        height: 4.5em;
        margin: 4px;
        background: #eee;
        --color: rgb(100, 68, 177);
        box-shadow: 0px 0px 3px grey;
    }
    #SWRoS{
        background-image: url("../assets/1.jpg");
        background-position: center; 
        background-size: cover;
    }
</style>