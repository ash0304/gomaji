<template>
  <span class="prev d-md-block"></span>
</template>
<script>
export default {
  name: "Prev",
};
</script>
<style lang="scss" scoped>
.prev {
  display: none;
  width: 63px;
  height: 63px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -45px;
  z-index: 5;
  background: url("../../../assets/home/prev.png") no-repeat;
  background-size: cover;
  cursor: pointer;
}
</style>
