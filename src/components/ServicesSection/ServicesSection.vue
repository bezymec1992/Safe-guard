<template>
<div class="services-section">
<div class="container">
 <h2 class="h1">What We Do</h2>
 <div class="rows">
    <div class="row g-0 row-item">
   <div class="col-md-6">
    <div class="gradient-block d-md-flex justify-content-md-center">
      <div class="punching-bag">
       <img src="@/assets/images/img-03.png" alt="#">
      </div>
    </div>
   </div>
   <div class="col-md-6 col-txt">
     <div class="content-holder">
 <span class="item-number">/01</span>
     <h3 class="h2">Training and <br> Implementation</h3>
     <a href="#" class="btn btn-dark">Read More</a>
     </div>
   </div>
 </div>
<div class="row g-0 row-item">
   <div class="col-md-6">
    <div class="gradient-block d-md-flex justify-content-md-center">
      <div class="phone-wrapper">
        <div class="phone-holder">
          <img src="#" alt="#">
          <div class="msg-holder msg-1">
            <img src="#" alt="#">
          </div>
           <div class="msg-holder msg-2">
            <img src="#" alt="#">
          </div>
        </div>
       
      </div>
    </div>
   </div>
   <div class="col-md-6 col-txt">
     <div class="content-holder">
   <span class="item-number">/02</span>
     <h3 class="h2">Cyber <br> Consultants</h3>
     <a href="#" class="btn btn-dark">Read More</a>
     </div>
   </div>
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
