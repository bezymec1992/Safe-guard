<template>
	<div class="services-project">
		<intro-section class="cyber-consultants">
			<div class="container">
				<router-link to="/services" class="back-link">
					<span class="icon-holder">
						<img src="@/assets/images/img-017.svg" alt="#" />
					</span>
					Back</router-link
				>
				<div class="row">
					<div class="col-md-6 text-col d-md-flex flex-column justify-content-center">
						<h1 class="h1">
							Cyber <br />
							Consultants
						</h1>
						<div class="text-holder">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum lacus, aliquam id eros id.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex flex-md-row flex-column justify-content-center justify-content-md-end">
						<div class="phone-wrapper">
							<div class="phone-holder">
								<img src="@/assets/images/img-022.png" class="desktop" alt="#" />
								<img src="@/assets/images/img-013.png" class="mobile" alt="#" />
								<div class="msg-holder msg-1">
									<img src="@/assets/images/img-023.svg" alt="#" />
								</div>
								<div class="msg-holder msg-2">
									<img src="@/assets/images/img-024.svg" alt="#" />
								</div>
							</div>
						</div>
						<div class="text-holder mobile">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum lacus, aliquam id eros id, consectetur efficitur neque.</p>
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
		<txt-block :class="'style1'">
			<div class="col d-md-none">
				<h3 class="h2 text-capitalize">
					Assessment and <br />
					Awareness
				</h3>
				<div class="text-holder">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere massa sed magna condimentum, eu gravida urna varius.</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="img-holder">
					<img src="@/assets/images/img-025.png" alt="#" />
				</div>
			</div>
			<div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
				<h3 class="h2 text-capitalize">
					Assessment and <br />
					Awareness
				</h3>
				<div class="text-holder">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere massa sed magna condimentum, eu gravida urna varius. Aenean neque orci</p>
				</div>
			</div>
			<div class="col d-md-none">
				<div class="text-holder">
					<p>Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis suscipit justo. Vestibulum at turpis euismod, fermentum</p>
				</div>
			</div>
		</txt-block>
		<visual-section>
			<h2 class="h1 text-center">ADVICE AND PROTECT</h2>
		</visual-section>
		<txt-block :class="'style2 reverse'">
			<div class="col d-md-none">
				<h3 class="h2 text-capitalize">Practical</h3>
				<div class="text-holder">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere massa sed magna condimentum, eu gravida urna varius.</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="img-holder">
					<img src="@/assets/images/img-021.jpg" alt="#" />
				</div>
			</div>
			<div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
				<h3 class="h2 text-capitalize">Practical</h3>
				<div class="text-holder">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere massa sed magna condimentum, eu gravida urna varius. Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis suscipit justo. Vestibulum at turpis euismod, fermentum</p>
				</div>
			</div>
			<div class="col d-md-none">
				<div class="text-holder">
					<p>Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis suscipit justo. Vestibulum at turpis euismod, fermentum</p>
				</div>
			</div>
		</txt-block>
		<quote-section>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
				Suspendisse vitae imperdiet nibh.
			</p>
		</quote-section>
		<div class="buttons-section">
			<div class="container">
				<a href="#" class="btn btn-arrow" @click.prevent="$router.push({ name: 'Services' })">
					All Services
					<span class="arrow-wrapper">
						<span class="icon-holder">
							<img src="@/assets/images/icon-02.svg" alt="#" />
						</span>
					</span>
				</a>
				<a href="#" class="btn btn-arrow" @click.prevent="$router.push({ name: 'CopyWriting' })">
					Next Service
					<span class="arrow-wrapper">
						<span class="icon-holder">
							<img src="@/assets/images/icon-02.svg" alt="#" />
						</span>
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import TxtBlock from "@/components/TxtBlock/TxtBlock.vue";
import VisualSection from "@/components/VisualSection/VisualSection.vue";
import QuoteSection from "@/components/QuoteSection/QuoteSection.vue";

export default {
	name: "Training",
	components: {
		IntroSection,
		TxtBlock,
		VisualSection,
		QuoteSection
	}
};
</script>

<style lang="scss">
@import "@/views/ServicesProjects/ServicesProjects.scss";
</style>
