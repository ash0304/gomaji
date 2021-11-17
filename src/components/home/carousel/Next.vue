<template>
  <span class="next d-md-block">&gt;</span>
</template>
<script>
export default {
  name: "Next",
};
</script>
<style lang="scss" scoped>
.next {
  display: none;
  width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 1.8rem;
  position: absolute;
  color: #666;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  right: -45px;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
  z-index: 5;
  cursor: pointer;
}
</style>
