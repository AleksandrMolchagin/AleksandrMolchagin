<template>
    <div class="main-container" v-if="locked">
        <div class = "center-container">
            <div class = "image-container">
                <a>
                    <img class = "image" src="../assets/Login/Avatar.png">
                </a>
            </div>
            <div class = "name">Guest</div>
            <div class="button-container">
                <el-button plain class="Button" size="mini" round @click="unlock()">login</el-button> 
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
          return{
            '--title-color': this.$store.getters.getCurrentTitleColor(),
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
  .main-container{
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
  .image-container{
    /*Coppied from 'https://telegram.me/AleksandrM09'*/
    margin-top: -150px;
    margin-bottom: 15px;

  }
  .image{
    /*Coppied from 'https://telegram.me/AleksandrM09'*/
    width: 122px;
    height: 122px;
    border-radius: 61px;
  }
    .name{
    color: white;
    font-size: 22px;
    line-height: 32px;
    font-weight: bold;
    text-align: center;
  }
    .button-container{
        text-align: center;
        margin-top: 16px;
        line-height: 0;
  }
  .Button{
    text-decoration: none;
    text-align: center;
       /*Coppied from 'https://telegram.me/AleksandrM09'*/
    line-height: 100%;
    display: block-inline;
    padding: 3px 27px 3px;
    border: none;
    cursor: pointer;;
  }

</style>