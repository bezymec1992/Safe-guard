<template>
  <div class="video-scetion">
    <div class="video-holder">
      <video autoplay loop playsinline muted>
        <source :src="require(`@/assets/videos/${src}`)" type="video/mp4" />
      </video>
      <p class="text-wrapp">{{txt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    txt: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.video-scetion {
  padding-bottom: 11rem;

  @include media-breakpoint-down(md) {
    padding-bottom: 5rem;
  }

  .video-holder {
    position: relative;
    max-width: 124rem;
    margin: auto;
    min-height: 48rem;

    @include media-breakpoint-up(xl) {
      min-height: 68rem;
    }
    .text-wrapp {
      position: absolute;
      bottom: 65px;
      left: 50%;
      transform: translate(-50%);
      color: white;
      width: 826px !important;
      max-width: 100%;
      font-weight: 500;
      font-size: 40px;
      line-height: 60px;
      text-align: center;
      text-transform: uppercase;

    }

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
