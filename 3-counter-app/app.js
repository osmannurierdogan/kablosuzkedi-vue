const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			counter2: 0,
		};
	},
	methods: {
		increaseCounter() {
			this.counter++;
		},
		decreaseCounter() {
			this.counter--;
		},
		increaseCounter2() {
			this.counter2++;
		},
		decreaseCounter2() {
			this.counter2--;
		},
		/* getCounterResult() {
      console.log("Counter 1 Calisti");
      return this.counter > 5 ? "Big" : "Small";
    },
    getCounterResult2() {
      console.log("Counter 2 Calisti");
      return this.counter2 > 5 ? "Big" : "Small";
    }, */
	},
	computed: {
		getCounterResult() {
			console.log("Counter 1 Calisti");
			return this.counter > 5 ? "Big" : "Small";
		},
		getCounterResult2() {
			console.log("Counter 2 Calisti");
			return this.counter2 > 5 ? "Big" : "Small";
		},
	},
	watch: {
		counter(newValue, oldValue) {
			console.log(`Counter => ${oldValue} => ${newValue}`);
		},
		counter2(newValue, oldValue) {
			console.log(`Counter2 => ${oldValue} => ${newValue}`);
		},
		getCounterResult(newValue, oldValue) {
			console.log(`getCounterResult => ${oldValue} => ${newValue}`);
		},
	},
});
app.mount("#app");
