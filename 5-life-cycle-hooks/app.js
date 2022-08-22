const app = Vue.createApp({
	data() {
		return {
			title: "Test baslik.",
      itemList: [],
		};
	},
	beforeCreate() {
		console.log("beforeCreate is running :>>");
	},
	created() {
		console.log("created is running :>>");
		setTimeout(() => {
			this.itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		}, 2000);
	},
	beforeMount() {
		console.log("beforeMount is running :>>");
	},
	mounted() {
		console.log("mounted is running :>>");
	},
	beforeUpdate() {
		console.log("beforeUpdate is running :>>");
	},
	updated() {
		console.log("updated is running :>>");
	},
});
app.mount("#app");
