const app = Vue.createApp({
	data() {
		return {
			todoList: [
				{ id: 1, completed: false, title: "Todo 1" },
				{ id: 2, completed: false, title: "Todo 2" },
				{ id: 3, completed: false, title: "Todo 3" },
				{ id: 4, completed: false, title: "Todo 4" },
			],
		};
	},
	methods: {
		addTodo() {
			const newTodo = {
				id: this.todoList.length + 1,
				completed: false,
				title: this.todoText,
			};
			this.todoList.push(newTodo);
			this.todoText = "";
			//this.todoText.focus();
		},
		deleteTodo(todo) {
			this.todoList = this.todoList.filter((item) => item.id != todo.id);
		},
	},
	computed: {
		completedItemCount() {
			return this.todoList.filter((todo) => todo.completed).length;
		},
		uncompletedItemCount() {
			return this.todoList.filter((todo) => !todo.completed).length;
		},
	},
});
app.mount("#app");
