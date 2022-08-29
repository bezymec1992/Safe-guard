<template>
  <div class="video-scetion">
    <div class="video-holder">
      <video muted autoplay loop>
        <source :src="require(`@/assets/videos/${src}`)" type="video/mp4" />
      </video>
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
