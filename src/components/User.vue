<template>
    <div id="User">
        <h2>Hola <span> {{first_name}}, </span> ¡Bienvenido!</h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'User',
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
    #User{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #User h2{
        font-size: 50px;
        color: #283747;
    }
    #User span{
        color: rgb(7, 6, 66);
        font-weight: bold;
    }
</style>