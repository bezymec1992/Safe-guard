<template>
	<div class="home">
		<IntroSection :class="'with-scroll'" />
		<StatisticSection/>
	</div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue';
import StatisticSection from '../components/StatisticSection/StatisticSection.vue';

export default {
	name: "Home",
	components: {
		IntroSection,
    StatisticSection,
	}
};
</script>

<style lang="scss" scoped>
.intro-section{

}
</style>