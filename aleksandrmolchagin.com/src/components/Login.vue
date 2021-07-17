<template>
    <div :style="cssVars" class="main-container" v-if="locked">
        <div class = "center-container">
          <div class = "language-container">
                <div class = "language-container-buttons">
                    <a class="Button-language" @click="setEnglish()">English</a>
                    <a></a>
                    <a class="Button-language" @click="setAurebesh()">Aurebesh</a>
                </div>
            </div>
          <div class = "card">
            <div class = "center-container-elements"> 
                  <a>
                      <img class = "image" src="../assets/Login/Avatar.png">
                  </a>
              <div class = "name">Guest</div>
                  <el-button plain class="Button-login" size="mini" round @click="unlock()">login</el-button> 
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
            '--avatar-half': "75px",
            '--avatar-full': "150px",
            '--font-name': this.$store.getters.getCurrentFontName(),
          }
        },
        locked: function () {
            return this.$store.getters.getLockStatus();
        },
    },
    methods: {
        unlock(){
            this.$store.dispatch('lockTaggle');
        },
        setEnglish(){
            this.$store.dispatch('changeFont', "Nunito")
        },
        setAurebesh(){
            this.$store.dispatch('changeFont', "Aurebesh")
        }
    },
};
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: var(--font-name), sans-serif;      
    font-size: var(--font);
  }
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
    width: var(--avatar-full);
    height: var(--avatar-full);
    border-radius: var(--avatar-half);
    border: 2px solid white
  }
  .name{
    color: white;
    padding: 1rem;
  }
  .Button-login{
    width: 100%
  }
  .language-container{
    position: fixed;
    width: inherit;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    top: 0;
    color: white;
    border-radius: 0 0 var(--border) var(--border);
    background-color: var(--main-color);
    box-shadow: var(--shadowDR) var(--shadowDR) var(--shadowUL) rgba(0, 0, 0, 0.45);
  }
  .language-container-buttons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
  }
  .Button-language{
    width: var(--avatar-half);
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    cursor: pointer;
  }
</style>