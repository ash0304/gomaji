<template>
  <div class="map__block py-3">
    <div class="map__imgbox">
      <div class="map__img d-flex align-center justify-center">
        <svg-icon iconClass="redlocation" className="redlocation" />
      </div>
    </div>
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
  cursor: pointer;
  .map__imgbox {
    position: relative;
    overflow: hidden;
    .map__img {
      width: 100%;
      height: 85px;
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
      background: url("../../assets/product/map.png") no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      transition: all 0.3s ease-in-out;
      .redlocation {
        width: 40px;
        height: 30px;
      }
    }
  }
  .map__checkbtn {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  &:hover {
    .map__imgbox {
      .map__img {
        transform: scale(1.2);
        .redlocation {
          animation: float 0.7s infinite ease-in-out;
        }
      }
    }
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
