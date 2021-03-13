<template>
    <div class="container">
      <div class ="title">Menu</div>
      <div class ="time">EN | 7:55AM</div>
    </div>
</template>
<script>

export default {
    name: 'InfoBar',
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
        position: relative;
        top: 0;
        width: 100%;
        height: 1.5rem;
        text-align: center;
        background: #585c5f;
        color: white;
        display: flex;
        align-items: center;
        user-select: none;
    }
      .title{
        position: absolute;
        left: 0;
        margin-left: 0.5rem;
        text-align: center;
    }
        .timeAleks{
        position: absolute;
        right: 0;
        margin-right: 10rem;
        text-align: center;
    }
        .time{
        position: absolute;
        right: 0;
        margin-right: 0.5rem;
        text-align: center;
    }
</style>