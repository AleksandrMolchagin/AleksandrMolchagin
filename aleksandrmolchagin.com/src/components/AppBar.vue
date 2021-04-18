<template>
    <div class="container" :style="cssVars">
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
//import { mapState, mapActions } from 'vuex'

export default {
    name: 'AppBar',
    components: {
    },
    data() {
        return {
            height: this.$store.state.appbar_height,
            cube_height: this.$store.state.appbar_cube_height,
        }
    },
    methods: {
    },
    computed: {
        cssVars() {
            return {
            '--height': this.height + 'vh',
            '--cube_height': this.cube_height + 'vh'
            }
        }
    },
};
</script>s
<style scoped>
    .container{
        position: absolute;
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        bottom: 0;
        height: var(--height);
        width: 100%;
        background: transparent;
        justify-content: center;
        z-index: 1;

    }
    .cube {
        display: inline-block;
        border-radius: 0.66rem;
        width: var(--cube_height);
        height: var(--cube_height);
        margin: 0.5vh;
        background: #bbc1c3;
        --color: rgb(100, 68, 177);
        box-shadow: 0px 0px 1px black;
    }
    #SWRoS{
        font-size: 1rem;
        background-image: url("../assets/1.jpg");
        background-position: center; 
        background-size: cover;
    }
</style>