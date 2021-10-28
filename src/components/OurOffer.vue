<template>
  <div class="our-offer">
    <div class="our-offer__item">
      <div class="blue-bg d-flex flex-row align-center">
        <img src="@/assets/images/Others/punchball.png" alt="punchball.png" />
        <div class="wrapper">
          <h4 class="numbr" v-if="number">/01</h4>
          <h2>Training and Implementation</h2>
          <p v-if="slogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
    <div class="our-offer__item reverse">
      <div class="blue-bg d-flex flex-row align-center">
        <img src="@/assets/images/Others/phone.png" alt="phone.png" />
        <div class="wrapper">
          <h4 class="numbr" v-if="number">/02</h4>
          <h2>Cyber Consultants</h2>
          <p v-if="slogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
    <div class="our-offer__item">
      <div class="blue-bg d-flex flex-row align-center">
        <div class="img-container">
          <img src="@/assets/images/Others/banana.png" alt="banana.png" class="banana"/>
          <img
            src="@/assets/images/Others/cloud1.png"
            alt="cloud1.png"
            class="cloud1"
          />
          <img
            src="@/assets/images/Others/cloud2.png"
            alt="cloud2.png"
            class="cloud2"
          />
        </div>
        <div class="wrapper">
          <h4 class="numbr" v-if="number">/03</h4>
          <h2>Consultancy and Brand Protection</h2>
          <p v-if="slogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
    <div class="our-offer__item reverse">
      <div class="blue-bg d-flex flex-row align-center">
        <img src="@/assets/images/Others/imac.png" alt="phone.png" />
        <div class="wrapper">
          <h4 class="numbr" v-if="number">/04</h4>
          <h2>Software</h2>
          <p v-if="slogan">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "OurOffer",
  components: {
    Button,
  },
  props: {
    number: {
      type: Boolean,
      required: false,
      default: true,
    },
    slogan: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
