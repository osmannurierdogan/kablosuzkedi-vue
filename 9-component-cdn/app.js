const app = Vue.createApp({
	data() {
		return {};
	},
	meethods: {},
});
app.component("counter-item", {
	data() {
		return {
			counter: 0,
		};
	},
	template: `<div
						class="col-sm-3 card py-2 d-flex align-items-center justify-content-between flex-column"
					>
						<h3 class="text-center">{{ counter }}</h3>
						<div>
							<button class="btn btn-success btn-sm me-1" @click="counter++">
								+
							</button>
							<button class="btn btn-danger btn-sm" @click="counter--">
								-
							</button>
						</div>
					</div>`,
});
app.mount("#app");
