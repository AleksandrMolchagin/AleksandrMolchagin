<template>
    <!-- <div class="container" :style="cssVars"> -->
      <!-- <div class ="title" @click="openMenu()">{{menu}}</div> -->
      <!-- <div class="time">{{date}}</div> -->
      <!-- <div class="menu" v-if="menuVisibile">
        <div class ="element">{{element1}}</div>
        <div  class ="element">{{element2}}</div>
        <div  class ="element" @click="lock()" >{{element3}}</div>
      </div> -->
    <!-- </div> -->
    <div class="Container" :style="cssVars">
    <el-row :gutter="12">
        <el-col :span="6">
            <div>
            <el-dropdown>
                <el-button class="Button" size="small" type="primary"> Menu </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item class="ForceFont">About this website</el-dropdown-item>
                    <el-dropdown-item class="ForceFont">Preferences</el-dropdown-item>
                    <el-dropdown-item class="ForceFont" @click="lock()">Log out</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="Container-element-clock">
                    <div>{{date}}</div>
            </div>
        </el-col>
     </el-row>
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
            menu: '   Menu   ',
            date: new Date(),
            element1: '   About This Website   ',
            element2: '   Preferences   ',
            element3: '   Log Out   ',
            
        }
    },
    methods: {
        openMenu(){
            if (this.menuVisibile == true)
                this.closeMenu()
            else
                this.$store.dispatch('openMenu');
        },
        closeMenu(){
            this.$store.dispatch('closeMenu');
        },
        lock(){
            this.$store.dispatch('lockTaggle');
        }
    },
    computed: {
        cssVars() {
            var main_color =  this.$store.getters.getCurrentTitleColor() +  this.$store.getters.getCurrentTransperency();
            return {
            '--height': this.height + 'px',
            '--text-title-color': this.$store.getters.getCurrentTextTitleColor(),
            '--title-color': this.$store.getters.getCurrentTitleColor(),
            '--second-title-color': this.$store.getters.getCurrentSecondTitleColor(),
            '--left-margin': (this.height - 2.5) + 'vh',
            '--top-margin': (this.height + 0.25) +'vh',
            '--border': this.$store.getters.getCurrentMenuBorderRadius(),
            '--main-color': main_color,
            '--border-width': this.$store.getters.getCurrentBorderWidth(),
            '--font-name': this.$store.getters.getCurrentFontName(),
            }
        },
        menuVisibile: function () {
            return this.$store.getters.getCurrentMenuVisibility();
    },
   
    },
    created: function () {
        var self = this
        setInterval(function () {
        self.date = moment().format('   ddd MMM D YYYY\th:mm A   ');
        }, 1000)
    },
};
</script>
<style scoped>
    * {    
        z-index: 999;
    }
    .ForceFont{
        font-family: "Nunito";      
    }
    .Container{
        background-color: var(--title-color);
        color: white;
        height: var(--height);
    }
    .Container-element{
        height: var(--height);
        padding: 5px;
    }
    .Container-element-clock{
        height: var(--height);
        padding: 7px;
        position: absolute;
        display: block;
        right: 0;
        margin-right: 15px;
    }
    .Button{
        height: 10px !important;
    }
    .Calendar{
        zoom: 75%;
        font-size: 1.2rem
    }

    /* .container{
        position: relative;
        height: var(--height);
        width: 100%;
        text-align: center;
        background: var(--main-color);
        color: var(--text-title-color);
        align-items: center;
        user-select: none;

    }
    .title{
        white-space: pre-wrap;
        position: absolute;
        left: 0;
        margin-left: 0.5rem;
        text-align: center;
    }
    .title:hover{
        cursor: pointer;
        background-color: grey;
        border-radius: var(--border);
    }
    .time{
        white-space: pre-wrap;
        position: absolute;
        right: 0;
        margin-right: 0.5rem;
        text-align: center;
     }
    .menu{
        white-space: pre-wrap;
        top: var(--top-margin);
        left: var(--left-margin);
        position: relative;
        text-align: left;
        width: max-content;
        background-color: var(--main-color);
        border-radius: var(--border);
        border-color: gray;
        border-style: solid;
        border-width: var(--border-width);
        visibility: visible;
    }
    .element{
        font-size: 0.8rem;
        margin: 0.25rem;
        padding: 0.25rem;
        white-space: pre-wrap;
    }
    .element:hover{
        cursor: pointer;
        background-color: grey;
        border-radius: var(--border);
    } */
</style>