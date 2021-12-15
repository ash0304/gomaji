<template>
  <div class="productcard__container d-none d-lg-block">
    <div
      class="
        productcard__box
        d-flex
        flex-column
        align-start
        justify-center
        pa-4
        mb-3
      "
    >
      <div class="text-button">
        TWD <span class="text-h6 productcard__price">300</span> 起
      </div>
      <div class="d-flex justify-center aling-end pa-0 my-1">
        <v-rating
          v-model="rating"
          background-color="#ff8800"
          color="#ff8800"
          class="pb-2"
          dense
          hover
          half-increments
          length="5"
          :size="18"
        ></v-rating>
        <div class="text-caption pt-1 ml-2">(75)</div>
        <div class="mx-2">|</div>
        <svg-icon iconClass="fire" className="fire ml-3 mt-1" />
        <div class="text-caption ml-1 pt-1">500+個已訂購</div>
      </div>
      <div class="productcard__planbtn" @click="scrollToTarget">選擇方案</div>
      <div class="d-flex mt-3">
        <svg-icon iconClass="orangeflash" className="orangeflash" />
        <div class="text-caption">立即出票</div>
      </div>
    </div>
    <div class="productcard__promote"></div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  data() {
    return {
      rating: 4,
    };
  },
  methods: {
    scrollToTarget() {
      const targetView = document.getElementById("h2__planblocks");
      targetView.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.productcard__box {
  border: 0.5px solid #707070;
  border-radius: 6px;
  .productcard__price {
    color: #ff2d55;
    font-weight: bold;
  }
  .productcard__planbtn {
    width: 100%;
    text-align: center;
    color: #fff;
    background: #f80;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
  }
}
.productcard__promote {
  border-radius: 6px;
  background: url("../../assets/productDetail/promote.png") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 113px;
}
</style>
