<template>
  <div class="txt-block">
    <div class="container">
      <div class="row">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TxtBlock",
};
</script>

<style lang="scss">
@import "@/components/TxtBlock/TxtBlock.scss";
</style>
