<template>
  <div
    class="visual-section"
    :style="{
      backgroundImage: bg ? `url(${require('@/assets/images/' + bg)})` : null,
    }"
  >
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TxtBlock",
  props: {
    bg: {
      type: String,
      default: null,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import "@/components/VisualSection/VisualSection.scss";
</style>
