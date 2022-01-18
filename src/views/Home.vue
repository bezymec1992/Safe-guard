<template>
	<div class="home">
		<intro-section :class="'with-scroll'">
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-md-flex flex-column justify-content-center">
						<h1 class="h1">
							Never Caught <br />
							Off-Guard Again
						</h1>
						<div class="text-holder">
							<p>We are specialist in protecting your assets and reputation to make sure you operate risk-free and focus on your core business.</p>
						</div>
					</div>
					<div class="col-md-6 d-flex justify-content-center justify-content-md-end">
						<div class="img-holder">
							<img src="@/assets/images/img-01.png" alt="img description" />
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
		<StatisticSection />
		<TxtBlock />
		<ListSection />
		<ServicesSection :class="'w-btn'" />
		<WWSection />
		<WFromSection />
		<ContactSection />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import StatisticSection from "@/components/StatisticSection/StatisticSection.vue";
import TxtBlock from "@/components/TxtBlock/TxtBlock.vue";
import ListSection from "@/components/ListSection/ListSection.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";
import WWSection from "@/components/WWSection/WWSection.vue";
import WFromSection from "@/components/WFromSection/WFromSection.vue";
import ContactSection from "@/components/ContactSection/ContactSection.vue";

export default {
	name: "Home",
	components: {
		IntroSection,
		StatisticSection,
		TxtBlock,
		ListSection,
		ServicesSection,
		WWSection,
		WFromSection,
		ContactSection
	}
};
</script>

<style lang="scss" scoped></style>
