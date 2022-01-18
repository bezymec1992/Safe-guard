<template>
	<div class="quote-section">
		<div class="container">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "QuoteSection",
	props: {},
	data: () => ({
		//
	}),
	methods: {
		//
	}
};
</script>

<style lang="scss">
@import "@/components/QuoteSection/QuoteSection.scss";
</style>
