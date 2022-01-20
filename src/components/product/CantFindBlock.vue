<template>
  <div class="cantfind__block d-flex flex-column align-center">
    <svg-icon iconClass="searchnothing" className="searchnothing" />
    <div class="cantfind__text mt-4 font-weight-black">
      抱歉! 我們找不到相關商品。
    </div>
  </div>
</template>
<script>
export default {
  name: "CantFindBlock",
};
</script>
<style lang="scss" scoped>
.cantfind__block {
  position: relative;
  .searchnothing {
    width: 160px;
    height: 160px;
  }
  .cantfind__text {
    color: #444444;
    font-size: 18px;
  }
}
</style>
