<template>
  <div class="frame__block px-3 my-4 d-none d-lg-block">
    <h4 v-if="title" class="pt-3">{{ title }}</h4>
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
}
</style>
