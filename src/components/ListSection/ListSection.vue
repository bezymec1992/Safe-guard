<template>
	<div class="list-section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2>
						A team dedicated to protect your <br />
						assets and reputation:
					</h2>
				</div>
				<div class="col-md-6">
					<ul>
						<li>Of experience in minimizing risk and protecting assets</li>
					</ul>
				</div>
				<div class="col-md-6">
					<ul>
						<li>Of experience in minimizing risk and protecting assets</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { gsapInit } from "@/helper/gsap-animations/ListSection.js";

export default {
	name: "ListSection",
	mounted() {
		gsapInit();
	}
};
</script>

<style lang="scss">
@import "@/components/ListSection/ListSection.scss";
</style>
