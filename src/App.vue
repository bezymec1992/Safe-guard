<template>
	<!-- <router-link to="/">Home</router-link> |
	<router-link to="/about">About</router-link> -->
	<Header />
	<router-view />
	<Footer />
</template>

<script>
import WebFontLoader from "webfontloader";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
	components: {
		Header,
		Footer
	},
	created() {
		WebFontLoader.load({
			google: {
				families: ["Saira:400,500,700", "Ubuntu:700"]
			},
			// custom: {
			// 	families: ["Rubik:n4,n5,n7"],
			// 	urls: ["/static/assets/fonts/stylesheet.css"]
			// },
			active: this.setFontLoaded
		});
	},
	methods: {
		setFontLoaded() {
			this.$emit("font-loaded");
		}
	}
};
</script>
