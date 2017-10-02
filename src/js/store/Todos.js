import {firebaseMutations, firebaseAction} from 'vuexfire';

const Todos = {
  namespaced: true,
  state: {
    loading: true,
    todos: []
  },
  getters: {
    todos: state => state.todos,
    loading: state => state.loading,
  },
  actions: {
  	setTodosRef: firebaseAction(({bindFirebaseRef, state}, ref) => {
      bindFirebaseRef('todos', ref)
      state.loading = false;
    })
  }
}

export default Todos;