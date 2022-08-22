const app = Vue.createApp({
	data() {
		return {
			title: "Vue.js Bootcamp Day 1",
			content: "Lorem ipsum dolor sit amet...",
			eduflow: {
				href: "https://eduflow.kablosuzkedi.com",
				alt: "Mufredat ve aciklamalar icin ziyaret edin.",
				target: "_blank",
				owner: "Pogaca",
			},
      date: Date.now(),
		};
	},
	methods: {
    printDate(){
      this.date = Date.now();
    }
  },
}).mount("#app");
