import Vue from 'vue';
import Vuex from 'vuex';
import Todos from './store/Todos';
import {firebaseMutations} from 'vuexfire';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todos: Todos
  },
  mutations: {
  	...firebaseMutations
  },
})

export default store;