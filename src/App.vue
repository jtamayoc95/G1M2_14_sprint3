<template>
  <div id="app" class="app">
    <div class="header">
      <h1>Midas</h1>
      <nav>
        <button v-on:click="init" > Inicio </button>
        <button v-if="is_auth" v-on:click="getBalance" > Información </button>
        <button v-if="is_auth" > Cambiar contraseña </button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>
    
    <div class="footer">
      <h2>G1M2_14</h2>
    </div>

  </div>
</template>

<script>
import vueRouter from 'vue-router'
export default {
  name: 'App',

  components: {},

  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  
  methods: {
    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false)
        self.$router.push({name: "user_auth"})

      else{
        let username = localStorage.getItem("current_username")
        self.$router.push({name: "user", params:{ username: username }})
      }  
    },



    init: function(){
      localStorage.setItem('current_username', 'cabe')
      localStorage.setItem('isAuth', true)
      this.updateAuth()
      if(this.$route.name != "user"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user", params:{ username: username }})
      }
    },

    getBalance: function(){
    if(this.$route.name != "user_balance"){
      let username = localStorage.getItem("current_username")
      this.$router.push({ name:"user_balance", params:{ username: username }})
    }
  },

    logIn: function(username){
        localStorage.setItem('current_username', username)
        localStorage.setItem('isAuth', true)
        this.updateAuth()
      },

    logOut: function(){
        localStorage.removeItem('isAuth')
        localStorage.removeItem('current_username')
        this.updateAuth()
        this.$router.push({name: "user_logout", params:{}})
      },
    

    
  },

  beforeCreate: function(){
    localStorage.setItem('current_username', 'cabe')
    localStorage.setItem('isAuth', true)

  },

  created: function(){
    this.$router.push({name: "root"})
    this.updateAuth()
  }

  
}
</script>



<style>
  body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #dbd038 ;
    color:#000000 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
    font-size: 40px;
    font-weight: bolder;
    font-style: italic;
  }
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    font-family: sans-serif;
  }
  .header nav button{
    color: #000000;
    background: #dbd038;
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #ffffff;
    background: #99922a;
    border: 1px solid #000000;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE ;
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #dbd038;
    color: #000000;
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>