<template>
    <div class="signUp">
        <img class="logo" src="../assets/logo.png" alt="">
        <h2 style="text-align: center;">Sign Up</h2>
        <div class="register">
            <input type="text" name="name" id="name" v-model="name" placeholder="Enter Name">
            <input type="text" name="email" id="email" v-model="email" placeholder="Enter Email">
            <input type="text" name="password" id="password" v-model="password" placeholder="Enter Password">
            <button @click="signUp">Sign Up</button>
            <p>
                <router-link to="/login">Login</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            if (this.name != '' && this.email != '' && this.password != '') {
                let result = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                if (result.status == 201) {
                    localStorage.setItem('user-info', JSON.stringify(result.data));
                    this.$router.push({ name: 'Home' });

                }
            } else {
                alert("Empty field doesn't allowed");
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' });
        }
    },
}
</script>
<style scoped>
.signUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.logo {
    width: 250px;
}

.register input {
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

.register button {
    width: 300px;
    height: 40px;
    border: 1px solid skyblue;
    background: #f75e01;
    cursor: pointer;
    color: white;
    font-weight: bold;
}</style>