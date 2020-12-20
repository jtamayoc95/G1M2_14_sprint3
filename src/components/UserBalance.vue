<template>
    <div id="UserBalance">
        
        <h2>Nombre(s): <span> {{first_name}}</span> </h2>
        <h2>Apellido(s): <span> {{last_name}}</span> </h2>
        <h2>Correo: <span> {{email}}</span> </h2>
        <h2>Celular: <span> {{phone}}</span> </h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserBalance',
    data: function (){
        return {
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
        }
    },

    created: function(){
        this.username = this.$route.params.username
        let self = this

    axios.get("https://g1m2-14-sprint2.herokuapp.com/user/data/" + this.username)
        .then((result) => {
            self.first_name = result.data.first_name,
            self.last_name = result.data.last_name,
            self.email = result.data.email,
            self.phone = result.data.phone
        })
        .catch((error) => {
            alert("ERROR Servidor");
        });
    }
}
</script>

<style>
    #UserBalance{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #UserBalance h2{
        font-size: 50px;
        color: #000000;
    }
    #UserBalance span{
        color: rgb(7, 6, 66);
        font-weight: bold;
    }
</style>