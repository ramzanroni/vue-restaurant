import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
// createApp(App).use(router,vuex).mount('#app')

const app = createApp(App);

// Use Vuex and Vue Router if you have them
app.use(store);
app.use(router);

app.mount('#app');