<template>
	<div class="services-project">
		<intro-section>
			<div class="container">
				<router-link to="/services" class="back-link">
					<span class="icon-holder">
						<img src="@/assets/images/img-017.svg" alt="#" />
					</span>
					Back</router-link
				>
				<div class="row">
					<div class="col-md-6 d-md-flex flex-column justify-content-center">
						<h1 class="h1">Services</h1>
						<div class="text-holder">
							<p>We make it so that nothing catches you by surprise.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex flex-md-row flex-column justify-content-center justify-content-md-end">
						<div class="watch-holder">
							<img src="@/assets/images/img-014.png" alt="img description" />
							<div class="msg-holder hld-1">
								<img src="@/assets/images/img-015.svg" alt="img description" />
							</div>
							<div class="msg-holder hld-2">
								<img src="@/assets/images/img-016.svg" alt="img description" />
							</div>
						</div>
						<div class="text-holder mobile">
							<p>We make it so that nothing catches you by surprise.</p>
						</div>
					</div>
				</div>
				<div class="scroll-down">
					<a href="#">
						<img src="@/assets/images/icon-01.svg" alt="#" />
					</a>
				</div>
			</div>
		</intro-section>
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";

export default {
	name: "Training",
	components: {
		IntroSection
	}
};
</script>

<style lang="scss">
@import "@/views/ServicesProjects/ServicesProjects.scss";
</style>
