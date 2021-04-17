<template>
    <div class="container" :style="cssVars">
      <div class ="title">Menu</div>
      <div class ="time">EN | 7:55AM</div>
    </div>
</template>
<script>

export default {
    name: 'InfoBar2',
    components: {
    },
    data() {
        return {
            height: this.$store.state.infobar_height,
        }
    },
    methods: {

    },
    computed: {
        cssVars() {
            return {
            '--height': this.height + 'vh',
            }
        }
    },
};
</script>
<style scoped>
    .container{
        position: absolute;
        bottom: 0;
        height: var(--height);
        width: 100%;
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