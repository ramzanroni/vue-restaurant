<template>
    <img class="logo" src="../assets/logo.png" alt="">
    <h2 style="text-align: center;">Sign Up</h2>
    <div class="register">
        <input type="text" name="name" id="name" v-model="name" placeholder="Enter Name">
        <input type="text" name="email" id="email" v-model="email" placeholder="Enter Email">
        <input type="text" name="password" id="password" v-model="password" placeholder="Enter Password">
        <button @click="signUp">Sign Up</button>
    </div>
</template>
<script>
export default{
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        signUp(){
            let re
            console.log(this.name, this.email, this.password);
        }
    }
}
</script>
<style scoped>
.logo{
    width: 300px;
    height: 300px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    border-bottom: 1px solid #f97839;
}
.register button{
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    background: #f75e01;
    cursor: pointer;
    color: white;
    font-weight: bold;
}
</style>