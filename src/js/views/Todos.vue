<template>
	<div>
		<v-text-field solo @keyup.enter="addTodo" v-model="title" label="Todo title"></v-text-field>
		<v-layout v-if="loading">
			<v-flex xs12 class="text-xs-center">
				<v-progress-circular indeterminate class="primary--text"></v-progress-circular>
			</v-flex>
		</v-layout>
		
		<v-list v-if="!loading">
			<template v-for="(todo, index) in todos" transition="slide-x-transition">
				<v-divider v-if="index"></v-divider>
				<v-list-tile>
					<v-list-tile-content>{{ todo.title }}</v-list-tile-content>
					<v-list-tile-action @click="removeTodo(todo)"><v-btn icon>
						<v-icon>delete</v-icon>
					</v-btn></v-list-tile-action>
				</v-list-tile>
			</template>
		</v-list>
	</div>
</template>

<script type="text/javascript">
import db from '../firebase';
import Vuex from 'vuex';

let todosRef = db.ref('todos');

export default {
	data() {
		return {
			title: ''
		}
	},

	computed: {
		...Vuex.mapGetters({
			todos: 'todos/todos',
			loading: 'todos/loading'
		})
	},
	created () {
    this.$store.dispatch('todos/setTodosRef', todosRef)
  },
	methods: {
		addTodo(e) {
			todosRef.push({
				title: this.title,
				createdAt: (new Date()).getTime(),
				editing: false
			});
			this.title = '';
			this.$emit('change');
		},
    updateTodoText: function (todo, newText) {
      todosRef.child(todo['.key']).child('title').set(newText);
    },
		removeTodo(todo) {
			todosRef.child(todo['.key']).remove();
		}
	}
}
</script>