<template>
    <Header></Header>
    <h1>Hello {{ name }}, Welcome to Update Restaurant page</h1>
</template>
<script>
import Header from './Header.vue';
export default{
    name:"Update",
    components:{
        Header,
    },
    data(){
        return{
            name:'',
        }
    },
    methods:{

    },
    mounted(){
        let user=localStorage.getItem('user-info');
        this.name=JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'Login'});
        }
    },
}
</script>