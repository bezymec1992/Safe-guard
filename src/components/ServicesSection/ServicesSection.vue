<template>
<div class="services-section">
<div class="container">
 <h2 class="h1">What We Do</h2>
 <div class="row row-item">
   <div class="col-md-6">
    <div class="gradient-block d-md-flex justify-content-md-center">
      <div class="punching-bag">
       <img src="@/assets/images/img-03.png" alt="#">
      </div>
    </div>
   </div>
   <div class="col-md-6 col-txt">
     <span class="item-number">01</span>
     <h3 class="h2">Training and <br> Implementation</h3>
     <a href="#" class="btn btn-dark">Read More</a>
   </div>
 </div>
</div>
</div>
</template>

<script>
export default {
	name: "ServicesSection",
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
@import "@/components/ServicesSection/ServicesSection.scss";
</style>
