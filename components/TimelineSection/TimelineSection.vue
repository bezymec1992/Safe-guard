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
                <strong class="date-point date-label active">1997 years</strong>
                <h3 class="date-point">
                  Our management groups under the atest configuration
                </h3>
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
                <strong class="date-point date-label">2001 years</strong>
                <h3 class="date-point">
                  The company grows to over 25 employees
                </h3>
                <div class="text-holder">
                  <p>The company grows to over 25 employees</p>
                </div>
              </div>
            </div>
            <div class="row relative">
              <div class="col">
                <strong class="date-point date-label">2004 years</strong>
                <h3 class="date-point">
                  Expanding our service offering with 2 more services
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
                <strong class="date-point date-label">2009 years</strong>
                <h3 class="date-point">
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
                <strong class="date-point date-label">2015 years</strong>
                <h3 class="date-point">
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
                <strong class="date-point date-label">2017 years</strong>
                <h3 class="date-point">
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
  name: 'TimelineSection',
  mounted() {
    this.initHistoryTimeline()
  },
  methods: {
    initHistoryTimeline() {
      const el = document.querySelectorAll('.history-timeline')

      Array.from(el).forEach((item) => {
        const $timeline = item
        const $progress = item.getElementsByClassName('timeline-progress')[0]

        this.setProgress($timeline, $progress)
        this.setActiveDate()

        window.addEventListener('scroll', () => {
          this.setProgress($timeline, $progress)
          this.setActiveDate()
        })
      })
    },
    setProgress($timeline, $progress) {
      const winH = window.innerHeight
      const winScroll = window.scrollY
      const offset = $timeline.getBoundingClientRect().top + window.scrollY
      const height = $timeline.offsetHeight
      let pos = 0

      pos = winScroll - offset + winH / 2
      pos = pos < 0 ? 0 : pos > height ? height : pos

      $progress.style.height = pos + 'px'
    },
    setActiveDate() {
      const el = document.querySelectorAll('.timeline-holder .date-point')

      Array.from(el).forEach(function (item) {
        const $label = item
        const winH = window.innerHeight
        const winScroll = window.scrollY
        const offset = $label.getBoundingClientRect().top + window.scrollY
        const pos = winScroll + winH / 2

        if (offset <= pos) {
          $label.classList.add('active')
        } else {
          $label.classList.remove('active')
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/components/TimelineSection/TimelineSection.scss';
</style>
