<template>
	<header class="header">
		<div class="container">
			<strong class="logo">
				<router-link to="/">
					<img src="@/assets/images/logo.svg" alt="safeguard" />
				</router-link>
			</strong>
			<nav class="main-nav">
				<ul class="main-menu">
					<li><router-link to="/">About Us</router-link></li>
					<li><router-link to="/">What We Do</router-link></li>
					<li><router-link to="/">Contact Us</router-link></li>
				</ul>
			</nav>
			<nav class="additional-nav" :class="{ open: menuOpen }">
				<div class="container">
					<div class="nav-top">
						<strong class="logo">
							<router-link to="/">
								<img src="@/assets/images/logo.svg" alt="safeguard" />
							</router-link>
						</strong>
						<a class="open-menu d-block d-lg-none" href="#" @click.prevent="openMenu()">
							<span></span>
							<span></span>
							<span class="visually-hidden">Open Mobile Nav</span>
						</a>
					</div>
					<div class="nav-body">
						<ul class="additional-menu">
							<li><router-link to="/">Home</router-link></li>
							<li><router-link to="/">About Us</router-link></li>
							<li><router-link to="/">What We Do</router-link></li>
							<li><router-link to="/">Contact Us</router-link></li>
						</ul>
						<ul class="additional-menu">
							<li><router-link to="/">Terms and conditions</router-link></li>
							<li><router-link to="/">Terms of use</router-link></li>
							<li><router-link to="/">Privacy declaration</router-link></li>
						</ul>
					</div>
				</div>
			</nav>
			<a class="open-menu d-block d-lg-none" href="#" :class="{ open: menuOpen }" @click.prevent="openMenu()">
				<span></span>
				<span></span>
				<span class="visually-hidden">Open Mobile Nav</span>
			</a>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		// msg: String
	},
	data: () => ({
		menuOpen: false
	}),
	methods: {
		openMenu() {
			this.menuOpen = !this.menuOpen;

			if (this.menuOpen) {
				document.body.classList.add("menu-opened");
			} else {
				document.body.classList.remove("menu-opened");
			}

			// this.fadeInterval();
		}
		// fadeInterval() {
		// 	const menuLinks = document.querySelectorAll(".main-menu li");

		// 	function animate() {
		// 		menuLinks.forEach((element, i) => {
		// 			if (document.body.classList.contains("menu-opened")) {
		// 				setTimeout(function () {
		// 					element.classList.add("animate-fade");
		// 				}, i * 300);
		// 			} else {
		// 				setTimeout(function () {
		// 					element.classList.remove("animate-fade");
		// 				}, i * 100);
		// 			}
		// 		});
		// 	}
		// 	setTimeout(animate(), 2000);
		// }
	}
};
</script>

<style lang="scss">
@import "@/components/Header/Header.scss";
</style>
