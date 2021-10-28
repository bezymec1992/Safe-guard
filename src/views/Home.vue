<template>
  <div class="home">
    <div class="home__header d-flex flex-row align-center">
      <div class="left">
        <h1>Never Caught Off-Guard Again</h1>
        <p>
          We are specialist in protecting your assets and reputation to make
          sure you operate risk-free and focus on your core business.
        </p>
      </div>
      <div class="right">
        <img
          src="@/assets/images/Home/space-helmetf.png"
          alt="space-helmetf.png"
        />
      </div>
      <div class="bg-header"></div>
    </div>
    <div class="statistic">
      <div class="statistic__item">
        <h3>3.5 Billions</h3>
        <p>
          Preventive measurements implemented (cost reduction, loss of
          investment).
        </p>
      </div>
      <div class="statistic__item">
        <h3>25+ Years</h3>
        <p>Of experience in minimizing risk and protecting assets.</p>
      </div>
      <div class="statistic__item">
        <h3>1.5 Billions</h3>
        <p>Of experience in minimizing risk and protecting assets.</p>
      </div>
    </div>
    <div class="who-we-are d-flex flex-row align-center justify-between">
      <div class="left">
        <img
          src="@/assets/images/Home/shutterstock.png"
          alt="shutterstock.png"
        />
      </div>
      <div class="right">
        <h3>Who We Are</h3>
        <p>
          With our global footprint and our specialized team members and
          partners we know what it takes to make sure that we can deliver a
          minimum risk environment for our clients.<span>
            We know that timing is key, when to accelerate and when to slow
            down. Having our clients brand top of mind, we make sure that
            communication, teamwork and quality reports is a given.</span
          >
        </p>
      </div>
    </div>
    <div class="redirect d-flex flex-row align-start justify-between">
      <div class="left">
        <h3>A team dedicated to protect your assets and reputation:</h3>
        <ul>
          <li>Of experience in minimizing risk and protecting assets</li>
          <li>Of experience in minimizing risk and protecting assets</li>
        </ul>
      </div>
      <div class="right d-flex flex-row align-center">
        <h3>What We Do</h3>
        <div class="arrow-div d-flex flex-row align-center justify-center">
          <img src="@/assets/icons/Arrow.png" alt="arrow" />
        </div>
      </div>
    </div>
    <OurOffer />
    <div class="why-we">
      <div class="top d-flex flex-row justify-start">
        <h3>Why We</h3>
        <p>
          A team dedicated to protect your assets and reputation. With our
          global footprint and our specialized team members and partners we know
          what it takes to make sure that we can deliver a minimum risk
          environment for our clients.
        </p>
      </div>
      <div class="bottom">
        <div class="bottom__item">
          <h3>25+</h3>
          <h5>years of experience</h5>
          <h6>In handling legal issues.</h6>
        </div>
        <div class="bottom__item">
          <h3>230+</h3>
          <h5>signature strategies</h5>
          <h6>Developed for our clients.</h6>
        </div>
        <div class="bottom__item">
          <h3>145</h3>
          <h5>corporate clients</h5>
          <h6>We helped thus far.</h6>
        </div>
        <div class="bottom__item">
          <h3>30</h3>
          <h5>employees working</h5>
          <h6>For your legal security.</h6>
        </div>
      </div>
    </div>
    <div class="what-we-do">
      <h3 class="title">What We Do</h3>
      <div class="container">
        <div class="what-we-do__item">
          <h3>Safeguarding our clients</h3>
          <p>
            Discretion is key, therefore we have converted all our case studies
            without mentioning our clients names.
          </p>
          <div class="wrapper d-flex flex-row align-center">
            <h3>Case Studies</h3>
            <div class="arrow-div d-flex flex-row align-center justify-center">
              <img src="@/assets/icons/Arrow.png" alt="arrow" />
            </div>
          </div>
        </div>
        <div class="what-we-do__item">
          <h3>Let's meet & explore options together</h3>
          <p>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
          <div class="wrapper d-flex flex-row align-center">
            <h3>Contact Us</h3>
            <div class="arrow-div d-flex flex-row align-center justify-center">
              <img src="@/assets/icons/Arrow.png" alt="arrow" />
            </div>
          </div>
        </div>
        <div class="what-we-do__item">
          <h3>Discover where we came from</h3>
          <p>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
          <div class="wrapper d-flex flex-row align-center">
            <h3>Our Timeline</h3>
            <div class="arrow-div d-flex flex-row align-center justify-center">
              <img src="@/assets/icons/Arrow.png" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OurOffer from "@/components/OurOffer";

export default {
  name: "Home",
  components: {
    OurOffer,
  },
};
</script>
