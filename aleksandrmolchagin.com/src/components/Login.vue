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
                <button class="login-button" @click="unlock()">login</button> 
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
        z-index: 10001;
        width: 100%;
        height: 100%;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background-image: url("../assets/Login/Background.jpg");
        background-size: 100% 100%;
}
  .center-container{
    justify-items: center;
    position: relative;
    top: 10%;
    margin: 50px auto 50px;
  }
  .image-container{
    /*Coppied from 'https://telegram.me/AleksandrM09'*/
    text-align: center;
    margin-bottom: 15px;

  }
  .image{
    /*Coppied from 'https://telegram.me/AleksandrM09'*/
    width: 183px;
    height: 183px;
    border-radius: 91.5px;
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
    margin-top: 32px;
    line-height: 0;
  }
  .login-button{
    text-decoration: none;
    text-align: center;
       /*Coppied from 'https://telegram.me/AleksandrM09'*/
    font-size: 14px;
    font-weight: bold;
    line-height: 100%;
    background: grey;
    border-radius: 0.66rem;
    display: block-inline;
    padding: 6px 27px 6px;
    border: none;
    cursor: pointer;;
  }
  .login-button:hover{
    background: grey;
  } 
</style>