<template>
    <div :style="cssVars" class="main-container" v-if="locked">
        <div class = "center-container">
          <div class = "language-container">
                <div :class = "language-container-buttons">
                  <el-popover :style="cssVars" class="ForceFont"
                    placement="left"
                    :width="160"
                    trigger="hover"
                    content="this is content, this is content, this is content">
                      <template #reference>
                        <a class="Button-english" @click="setEnglish()">English</a>
                      </template>
                      <div :style="cssVars" class="ForceFont">International <br> language at planet Earth.</div>
                    </el-popover>

                    <el-popover
                    placement="right"
                    :width="130"
                    trigger="hover"
                    content="this is content, this is content, this is content">
                      <template #reference>
                    <a class="Button-aurebesh" @click="setAurebesh()">Galactic Basic</a>
                      </template>
                      <div :style="cssVars" class="ForceFont">The most common <br> language in the Galaxy.</div>
                    </el-popover>
                     <a class="invisible">I am invisible</a>
                </div>
            </div>
          <div class = "card">
            <div class = "center-container-elements"> 
                  <a>
                      <img class = "image" src="../assets/Login/Avatar.png">
                  </a>
              <div class = "name">Guest</div>
                  <el-button plain class="Button-login" size="mini" round @click="unlock()">Login</el-button> 
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
        var opcaity_english = 1;
        var opacity_aurebesh = 0.5;

        if (this.$store.getters.getCurrentFontName() == "Aurebesh"){
          opcaity_english = 0.5;
          opacity_aurebesh = 1;
        }

        if (this.$store.getters.getCurrentFontName() == "Nunito"){
          opcaity_english = 1;
          opacity_aurebesh = 0.5;
        }

          return{
            '--title-color': this.$store.getters.getCurrentTitleColor(),
            '--main-color': main_color,
            '--border': this.$store.getters.getCurrentBorderRadius(-1),
            '--shadowDR': this.$store.getters.getCurrentShadowDR(-1),
            '--shadowUL': this.$store.getters.getCurrentShadowUL(-1),
            '--avatar-half': "75px",
            '--avatar-full': "150px",
            '--font-name': this.$store.getters.getCurrentFontName(),
            '--opacity-english': opcaity_english,
            '--opacity-aurebesh': opacity_aurebesh
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
            this.opcaity_english = 1
        },
        setAurebesh(){
            this.$store.dispatch('changeFont', "Aurebesh")
        }
    },
};
</script>
<style scoped>
 @font-face { 
    font-family: "aurebesh"; 
    src: url('../assets/Fonts/Aurebesh.otf');
    font-weight: 900;
    font-style: normal;
  } 
  .ForceFont{
        font-family: var(--font-name);
    }
  .main-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1000;
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
    width: 23rem;
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
    width: 40%
  }
  .language-container{
    position: fixed;
    width: 23rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-self: center;
    top: 0;
    color: white;
    border-radius: 0 0 var(--border) var(--border);
    background-color: var(--main-color);
    box-shadow: var(--shadowDR) var(--shadowDR) var(--shadowUL) rgba(0, 0, 0, 0.45);
  }
  .language-container-buttons{
    width: inherit;
    display: flex;
    flex-direction: row;
    text-align: center;
  }
  .Button-english{
    position: absolute;
    left: 0;
    padding-left: 2rem;
    cursor: pointer;
    opacity: var(--opacity-english);
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
  }
   .Button-aurebesh{
    position: absolute;
    right: 0;
    padding-right: 2rem;
    cursor: pointer;
    opacity: var(--opacity-aurebesh);
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
  }
  .Button-english:hover {
    opacity: 1;
  }
  .Button-aurebesh:hover {
    opacity: 1;
  }
  .invisible{
    text-align: center;
    color: transparent
  }
</style>