<template>
  <div
    class="listmode__block d-flex justify-center align-center pa-6"
    @click="changeMode('List')"
  >
    <div class="font-weight-black">條列模式</div>
  </div>
</template>
<script>
export default {
  name: "ListModeBlock",
  methods: {
    changeMode(mode) {
      this.$emit("changeMode", mode);
    },
  },
};
</script>
<style lang="scss" scoped>
.listmode__block {
  position: relative;
  cursor: pointer;
}
</style>
