import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Define your application state here
    count: 0
  },
  mutations: {
    // Define your mutations here
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    }
  },
  actions: {
    // Define your actions here
    increment({ commit }) {
      commit('increment');
    },
    decrement({commit}) {
      commit('decrement')
    },
    reset({commit}) {
      commit('reset')
    }
  },
  getters: {
    // Define your getters here
    getCount: state => state.count
  }
});