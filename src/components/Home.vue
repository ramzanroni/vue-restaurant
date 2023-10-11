<template>
    <Header></Header>
    <h1>Hello {{ name }}, Welcome to Home Page</h1>
    <div class="">

    </div>
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="area text-center">
        <a href="#" class="card">
            <button class="favorit"><i class="la la-heart-o"></i></button>
            <img :src="restaurant.picture" class="img-fluid img" />
            <div class="card_detail text-left">
                <h4>{{ restaurant.name }}</h4>
                <p>
                    {{ restaurant.address }}
                </p>
                <div class="type">
                    <span href="#Italian">{{ restaurant.phone }}</span>
                    <span href="#Vegetarian">{{ restaurant.email }}</span>
                </div>
                <router-link class="updateBtn" :to="'/update/' + restaurant.id">Update</router-link>
                <button class="deleteBtn" @click="deleteRestaurant(restaurant.id)">Delete</button>
            </div>
        </a>
    </div>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: "Home",
    components: {
        Header,
    },
    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    methods: {
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: 'Login' });
            }

            let result = await axios.get('http://localhost:3000/restaurant');
            this.restaurants = result.data;
            // console.log(this.restaurants);
        },
        async deleteRestaurant(id) {
            let result = await axios.delete('http://localhost:3000/restaurant/' + id);
            if (result.status === 200) {
                this.loadData();
            }
        },

    },
    mounted() {
        this.loadData()
    },
}
</script>
<style scoped>
.area {
    font-family: 'Cairo', sans-serif;
    color: #7c7671;
    margin-top: 100px;
    float: left;
    margin: 15px;
    padding: 20px;
}

.card {
    max-width: 350px;
    margin: auto;
    cursor: pointer;
    position: relative;
    display: inline-block;
    color: unset;
}

.card:hover {
    color: unset;
    text-decoration: none;
}

.img {
    border-radius: 10px;
    width: 100%;
}

.favorit {
    background-color: #fff;
    border-radius: 8px;
    color: #fc9d52;
    position: absolute;
    right: 15px;
    top: 8px;
    padding: 3px 4px;
    font-size: 22px;
    line-height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    z-index: 1;
    border: 0;
}

.favorit:hover {
    background-color: #fc9d52;
    color: #fff;
    text-decoration: none;
}

.card_detail {
    box-shadow: 0 4px 15px rgba(175, 77, 0, 0.13);
    padding: 13px;
    border-radius: 8px;
    margin: -30px 10px 0;
    position: relative;
    z-index: 2;
    background-color: #fff;
}

.card_detail h4 {
    color: #474340;
    line-height: 100%;
    font-weight: bold;
}

.card_detail p {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 0.4rem;
}

.type span {
    background-color: #feefe3;
    padding: 5px 10px 7px;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    color: #fc9d52;
    font-weight: bold;
    line-height: 100%;
}

.detail {
    margin-top: 5px;
}

.detail i {
    font-size: 21px;
    display: inline-block;
    vertical-align: middle;
}

.detail i:nth-child(3) {
    margin-left: 15px;
}

.detail span {
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 2px;
}

.updateBtn {
    background-color: #fc9d52;
    border: none;
    color: white;
    padding: 4px 11px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 11px;
    cursor: pointer;
}

.deleteBtn {
    background-color: #fd3b3b;
    border: none;
    color: white;
    padding: 7px 11px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    margin-top: 11px;
    cursor: pointer;
    margin-left: 15px;
}
</style>