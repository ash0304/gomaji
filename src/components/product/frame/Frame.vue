<template>
  <div class="frame__block px-3 my-4 d-none d-lg-block">
    <div v-if="title" class="title pt-3">{{ title }}</div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Frame",
  props: {
    title: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.frame__block {
  background: #fff;
  border-radius: 6px;
  .title {
    font-family: "NotoSansTC-Bold";
    font-weight: bold;
  }
}
</style>
