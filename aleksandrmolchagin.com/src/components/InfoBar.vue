<template>
    <div class="container" :style="cssVars">
      <div class ="title">Menu</div>
      <div class ="time">{{date}}</div>
    </div>
</template>
<script>
import moment from 'moment'

export default {
    name: 'InfoBar',
    components: {
    },
    data() {
        return {
            height: this.$store.state.infobar_height,
            date: new Date(),
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
        },
   
    },
    created: function () {
        var self = this
        setInterval(function () {
        self.date = moment().format('ddd MMM D YYYY\th:mm A');
        }, 1000)
    },
};
</script>
<style scoped>
    * {    
        z-index: 999;
    }
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
        white-space: pre-wrap;
        position: absolute;
        right: 0;
        margin-right: 0.5rem;
        text-align: center;
    }
</style>