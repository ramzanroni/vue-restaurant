<template>
    <h1>Homepage</h1>
</template>
<script>
export default{
    name:"Home",
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'Login'});
        }
    },
}
</script>