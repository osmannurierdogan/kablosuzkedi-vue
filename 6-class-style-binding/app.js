const app = Vue.createApp({
	data() {
		return {
			showBorder: false,
			redBg: true,
			greenBg: false,
			blueBg: false,
			bgColor: "cyan",
			border: "3px solid orangered",
		};
	},
	computed: {
		boxClasses() {
			return {
				border: this.showBorder,
				red: this.redBg,
				green: this.greenBg,
				blue: this.blueBg,
			};
		},
	},
});
app.mount("#app");
