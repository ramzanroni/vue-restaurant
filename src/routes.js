import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';
import ContentLoader from './components/ContentLoaderRe.vue';
const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Add',
        path: '/add',
        component: Add
    }, 
    {
        name: 'Update',
        path: '/update/:id',
        component: Update
    },
    {
        name:'ContentLoader',
        path: '/content-loader',
        component: ContentLoader
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
