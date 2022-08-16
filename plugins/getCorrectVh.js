import Vue from 'vue'
Vue.mixin({
	methods: {
		getCorrectVh() {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", vh + "px");
		}
	}
})

