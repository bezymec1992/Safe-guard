<template>
  <div class="timeline-section">
    <div class="container">
      <h2 class="h2">OUR HISTORY</h2>
      <div class="timeline-holder">
        <div class="row">
          <div class="col-lg-7 offset-lg-5 relative">
            <div class="history-timeline">
              <div class="timeline-progress" style="height: 0px"></div>
            </div>
            <div class="row relative">
              <div class="col">
                <strong class="date-label d-none d-lg-block">1997 years</strong>
                <span class="date-dot"></span>
                <strong class="date-label d-lg-none">1997 years</strong>
                <h3>Our management groups under the atest configuration</h3>
                <div class="text-holder">
                  <p>
                    We have set up our global footprint, working with partners
                    and other specialist in different regions of the world.
                  </p>
                </div>
              </div>
            </div>
            <div class="row relative">
              <div class="col">
                <strong class="date-label d-none d-lg-block">2001 years</strong>
                <span class="date-dot"></span>
                <strong class="date-label d-lg-none">2001 years</strong>
                <h3>The company grows to over 25 employees</h3>
                <div class="text-holder">
                  <p>The company grows to over 25 employees</p>
                </div>
              </div>
            </div>
            <div class="row relative">
              <div class="col">
                <strong class="date-label d-none d-lg-block">2004 years</strong>
                <span class="date-dot"></span>
                <strong class="date-label d-lg-none">2004 years</strong>
                <h3>Expanding our service offering with 2 more services</h3>
                <div class="text-holder">
                  <p>
                    Training/ Consultancy (Special Asset Management in the
                    financial sector) and delivering a preventive SCAN for our
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div class="row relative">
              <div class="col">
                <strong class="date-label d-none d-lg-block">2009 years</strong>
                <span class="date-dot"></span>
                <strong class="date-label d-lg-none">2009 years</strong>
                <h3>
                  First year ever we have retrieved over a 200 millions EURO
                </h3>
                <div class="text-holder">
                  <p>
                    Training/ Consultancy (Special Asset Management in the
                    financial sector) and delivering a preventive SCAN for our
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div class="row relative">
              <div class="col">
                <strong class="date-label d-none d-lg-block">2015 years</strong>
                <span class="date-dot"></span>
                <strong class="date-label d-lg-none">2015 years</strong>
                <h3>
                  Signing up with bigger financial firms and investments
                  companies
                </h3>
                <div class="text-holder">
                  <p>
                    After years of refining our service offering companies
                    started to hire us for training their staff and guiding them
                    in risk management. Not only on the theoretical side but
                    also in the operational day to day.
                  </p>
                </div>
              </div>
            </div>
            <div class="row relative">
              <div class="col">
                <strong class="date-label d-none d-lg-block">2017 years</strong>
                <span class="date-dot"></span>
                <strong class="date-label d-lg-none">2017 years</strong>
                <h3>
                  We have entered the digital world, our clients were more in
                  need of digital protection of their brand
                </h3>
                <div class="text-holder">
                  <p>
                    Trained our own staff to be more client centric and starting
                    to diversify our service offering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineSection",
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // console.log(event);
    },
    initHistoryTimeline() {
      var el = document.querySelectorAll(".history-timeline");

      Array.from(el).forEach(function (item) {
        var $timeline = item;
        var $progress = item.getElementsByClassName("timeline-progress")[0];

        setProgress($timeline, $progress);
        setActiveDate();

        // window.addEventListener(
        //   "scroll",
        //   setProgress($timeline, $progress),
        //   setActiveDate(),
        //   console.log("scroll")
        // );

        // window.addEventListener("scroll", function () {
        //   setProgress($timeline, $progress);
        //   setActiveDate();
        // });
      });

      function setProgress($timeline, $progress) {
        var winH = window.innerHeight,
          winScroll = window.scrollY,
          offset = $timeline.getBoundingClientRect().top + window.scrollY,
          height = $timeline.offsetHeight,
          pos = 0;

        pos = winScroll - offset + winH / 2;
        pos = pos < 0 ? 0 : pos > height ? height : pos;

        $progress.style.height = pos + "px";
      }

      function setActiveDate() {
        var el = document.querySelectorAll(".history-section .date-label");

        Array.from(el).forEach(function (item) {
          var $label = item;
          var winH = window.innerHeight;
          var winScroll = window.scrollY;
          var offset = $label.getBoundingClientRect().top + window.scrollY;
          var pos = winScroll + winH / 2;

          if (offset <= pos) {
            $label.classList.add("active");
          } else {
            $label.classList.remove("active");
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/components/TimelineSection/TimelineSection.scss";
</style>
