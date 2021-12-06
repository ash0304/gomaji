<template>
  <div class="modal__header d-flex align-center justify-space-between pa-4">
    <div @click="emitClose" class="close__btn">
      <svg-icon iconClass="modalClose" className="modalClose" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="clear__btn">
      <div>清除</div>
    </div>
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
        title: this.title,
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
.clear__btn {
  border: 1px solid #919191;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 6px;
}
</style>
