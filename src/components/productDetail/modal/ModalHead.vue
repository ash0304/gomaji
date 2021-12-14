<template>
  <div class="modal__header d-flex align-center justify-space-between pa-4">
    <div @click="emitClose" class="close__btn">
      <svg-icon iconClass="modalClose" className="modalClose" />
    </div>
    <div class="title"></div>
    <div class="clear__btn"></div>
  </div>
</template>
<script>
export default {
  name: "ModalHead",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    emitClose() {
      const obj = {
        status: false,
      };
      this.$emit("close", obj);
    },
  },
};
</script>
<style lang="scss" scoped>
.close__btn {
  cursor: pointer;
}
</style>
