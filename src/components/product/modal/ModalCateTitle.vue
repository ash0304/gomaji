<template>
  <div class="title py-2 my-3">
    <h5>{{ title }}</h5>
  </div>
</template>
<script>
export default {
  name: "ModalCateTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  border: 1px solid #cacaca;
}
</style>
