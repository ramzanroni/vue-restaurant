<template>
    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <router-link to="/update">Update Restaurant</router-link>
        <a @click="logout" href="#" class="split">Logout</a>
    </div>
</template>
<script>
export default{
    name:'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'});
        }
    }
}
</script>
<style scoped>
.topnav {
    overflow: hidden;
    background-color: #333;
  }
  
  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }
  .topnav a.split {
    float: right;
    background-color: #aa0404;
    color: white;
  }
</style>