<template>
  <div class="img-section">
    <div class="container">
      <div class="img-holder">
        <img
          v-if="img"
          :src="require('@/assets/images/' + img)"
          :alt="imgAlt"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImgSection',
  props: {
    img: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'ImgSection.scss';
</style>
