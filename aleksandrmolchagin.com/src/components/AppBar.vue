<template>
    <div class="container">
        <div class="cube"></div>
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

export default {
    name: 'AppBar',
    components: {
    },
    data() {
    },
    methods: {

    },
};
</script>
<style scoped>
    .container{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 11%;
        text-align: center;
        vertical-align: bottom;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cube {
        padding: 1em;
        display: inline-block;
        border-radius: 0.66rem;
        width: 4.5rem;
        height:  4.5rem;
        margin: 4px;
        background: #eee;
        --color: rgb(100, 68, 177);
    }
</style>