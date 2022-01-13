<template>
	<div class="intro-section">
	<div class="container">
    <div class="row">
      <div class="col-md-6 d-md-flex flex-column justify-content-center">
        <h1 class="h1">Never Caught <br> Off-Guard Again</h1>
        <div class="text-holder">
          <p>We are specialist in protecting your assets and reputation to make sure you operate risk-free and focus on your core business.</p>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center justify-content-md-end">
        <div class="img-holder">
          <img src="@/assets/images/img-01.png" alt="img description">
        </div>
      </div>
    </div>
    <div class="scroll-down">
      <a href="#">
        <img src="@/assets/images/icon-01.svg" alt="#">
      </a>
    </div>
  </div>
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
