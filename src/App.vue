<template>
	<div class="wrapper">
		<Header />
		<main class="main">
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script>
import WebFontLoader from "webfontloader";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import { gsapInit } from "@/helper/gsap-animations.js";

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
			active: this.setFontLoaded
		});
	},
	methods: {
		setFontLoaded() {
			this.$emit("font-loaded");
		}
	},
	mounted() {
		window.addEventListener("load", () => {
			console.log("All resources finished loading!");
			gsapInit();
		});
	}
};
</script>
