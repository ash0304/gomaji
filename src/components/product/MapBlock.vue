<template>
  <div class="map__block py-3">
    <div class="map__img"></div>
    <div class="map__checkbtn py-2">檢視地圖</div>
  </div>
</template>
<script>
export default {
  name: "MapBlock",
};
</script>
<style lang="scss" scoped>
.map__block {
  background: #fff;
  border-radius: 6px;
  .map__img {
    width: 100%;
    height: 80px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    background: pink;
    background-size: cover;
    background-position: 50% 50%;
  }
  .map__checkbtn {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
}
</style>
