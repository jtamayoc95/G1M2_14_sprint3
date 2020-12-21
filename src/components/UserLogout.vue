<template>
    <div id="UserLogout">
        <h1 class="UserLogout"> Cierre de Sesión exitoso!</h1>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'UserLogout',
    data: function (){
        return prueba
    },

    created: function(){
        this.username = this.$route.params.username
        let self = this

    axios.get("https://g1m2-14-sprint2.herokuapp.com/logout")
        .catch((error) => {
            alert("ERROR Servidor");
        });
    }
}
</script>
<style>
    #UserLogout{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #UserLogout h1{
        font-size: 50px;
        color: #000000;
    }
    #UserLogout span{
        color: rgb(7, 6, 66);
        font-weight: bold;
    }
</style>