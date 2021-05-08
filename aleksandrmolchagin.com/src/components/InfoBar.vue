<template>
    <div class="container" :style="cssVars">
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
            '--text-title-color': this.$store.getters.getCurrentTextTitleColor(),
            '--title-color': this.$store.getters.getCurrentTitleColor(),
            }
        }
    },
};
</script>
<style scoped>
    .container{
        position: relative;
        height: var(--height);
        width: 100%;
        text-align: center;
        background: var(--title-color);
        color: var(--text-title-color);
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