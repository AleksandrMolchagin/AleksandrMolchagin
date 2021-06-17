<template>
    <div class="container" :style="cssVars">
        <div class="cube" id="SWRoS" @click="openClose(0)"></div>
        <div class="cube" id="terminal" @click="openClose(1)"></div>
        <div class="cube" id="resume" @click="openClose(3)"></div>
        <div class="cube" id="calendly" @click="openClose(2)"></div>
        <div class="cube" id="dogeminer" @click="openClose(4)"></div>
        <div class="cube" id="telegram" @click="openClose(5)"></div>
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
        openClose(id){
            this.$store.dispatch('openClose', id);
        },
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
        border-radius: 25%;
        width: var(--cube_height);
        height: var(--cube_height);
        margin: 0.4vh;
        background: transparent;
        --color: rgb(10, 9, 12);
        box-shadow: 0px 0px 4px black;
        font-size: 1rem;
        -webkit-background-position-x: center;
        -webkit-background-position-y: center; 
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
    }
    #SWRoS{
        background-image: url("../assets/1.jpg");
    }
    #terminal{
        background-color: white;
        background-image: url("../assets/app_icons/terminal.png");
    }
    #calendly{
        background-color: white;
        background-image: url("../assets/app_icons/calendly.png");
    }
     #resume{
        background-color: black;
        background-image: url("../assets/app_icons/resume.png");
    }
    #dogeminer{
        background-color: black;
        background-image: url("../assets/app_icons/dogeminer.png");
    }
    #telegram{
        background-color: white;
        background-image: url("../assets/app_icons/telegram.png");
    }
</style>