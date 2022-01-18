<template>
	<div class="intro-section">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "IntroSection",
	props: {
		// msg: String
	},
	data: () => ({
		//
	}),
	methods: {
		//
	}
};
</script>

<style lang="scss">
@import "@/components/IntroSection/IntroSection.scss";
</style>
