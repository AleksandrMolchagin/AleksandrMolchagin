<template>
    <div :style="cssVars" class="main-container" v-if="locked">
        <div class = "center-container">
          <div class = "card">
            <div class = "center-container-elements"> 
                  <a>
                      <img class = "image" src="../assets/Login/Avatar.png">
                  </a>
              <div class = "name">Guest</div>
                  <el-button plain class="Button" size="mini" round @click="unlock()">login</el-button> 
            </div>
          </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Login',
    components: {
    },
    data() {
        return{
        }
    },
    computed:{
        cssVars(){
        var main_color =  this.$store.getters.getCurrentTitleColor() +  this.$store.getters.getCurrentTransperency();
          return{
            '--title-color': this.$store.getters.getCurrentTitleColor(),
            '--main-color': main_color,
            '--border': this.$store.getters.getCurrentBorderRadius(-1),
            '--shadowDR': this.$store.getters.getCurrentShadowDR(-1),
            '--shadowUL': this.$store.getters.getCurrentShadowUL(-1),
          }
        },
        locked: function () {
            return this.$store.getters.getLockStatus();
        },
    },
    methods: {
        unlock(){
            this.$store.dispatch('lockTaggle');
        }
    },
};
</script>
<style scoped>
  .main-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 10001;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("../assets/Login/Background.jpg");
    background-size: cover;
}
  .center-container{
    margin: auto;
    position: relative;
    
  }
  .card{
    padding-left: 7rem;
    padding-right: 7rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-radius: var(--border);
    background-color: var(--main-color);
    box-shadow: var(--shadowDR) var(--shadowDR) var(--shadowUL) rgba(0, 0, 0, 0.45);
  }
  .center-container-elements{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image{
    /*Coppied from 'https://telegram.me/AleksandrM09'*/
    width: 122px;
    height: 122px;
    border-radius: 61px;
    border: 2px solid white
  }
  .name{
    color: white;
    padding: 1rem;
  }
  .Button{
    width: 100%
  }

</style>