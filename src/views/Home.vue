<template>
	<div class="home">
		<IntroSection :class="'with-scroll'" />
		<StatisticSection />
		<TxtBlock />
		<ListSection />
		<ServicesSection />
		<WWSection />
		<WFromSection />
		<ContactSection />
		<Footer />
	</div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import StatisticSection from "../components/StatisticSection/StatisticSection.vue";
import TxtBlock from "../components/TxtBlock/TxtBlock.vue";
import ListSection from "../components/ListSection/ListSection.vue";
import ServicesSection from "../components/ServicesSection/ServicesSection.vue";
import WWSection from "../components/WWSection/WWSection.vue";
import WFromSection from "../components/WFromSection/WFromSection.vue";
import ContactSection from "../components/ContactSection/ContactSection.vue";
import Footer from "../components/Footer/Footer.vue";

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
		ContactSection,
		Footer
	}
};
</script>

<style lang="scss" scoped></style>
