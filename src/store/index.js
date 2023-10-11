import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      message: "This is from Vuex",
    };
  },
  mutations: {
    // Your mutations go here
  },
  actions: {
    // Your actions go here
  },
  getters: {
    // Your getters go here
  },
});