<template>
  <span class="next d-md-block"></span>
</template>
<script>
export default {
  name: "Next",
};
</script>
<style lang="scss" scoped>
.next {
  display: none;
  width: 63px;
  height: 63px;
  position: absolute;
  top: 50%;
  transform: translateY(-38%);
  right: -45px;
  z-index: 5;
  background: url("../../../assets/home/next.png") no-repeat;
  background-size: cover;
  cursor: pointer;
}
</style>
