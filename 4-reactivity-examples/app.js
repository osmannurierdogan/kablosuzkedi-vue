const app = Vue.createApp({
	data() {
		return {
			search: "",
			itemList: ["elma", "armut", "cilek", "kiraz", "portakal"],
			//filteredList: [],
		};
	},
	methods: {
		searchList() {
			/* const filteredItemList = this.itemList.filter((i) => i.includes(this.search));
      //console.log('filteredItemList :>> ', filteredItemList);
      this.filteredList = filteredItemList; */
    },
	},
	computed: {
		filteredList() {
			return this.itemList.filter((i) => i.includes(this.search));
		},
	},
});
app.mount("#app");
