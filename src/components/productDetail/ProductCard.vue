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
          readonly
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
    <carousel
      id="productcard__promote"
      :responsive="responsiveObj"
      :dots="false"
      :nav="false"
      :autoplay="true"
    >
      <div
        v-for="item in promoteList"
        :key="item.id"
        class="productcard__promote__item"
        :style="styleObj(item)"
      ></div>
    </carousel>
  </div>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "ProductCard",
  components: { carousel },
  data() {
    return {
      rating: 4,
      responsiveObj: {
        0: { items: 1, dots: true },
        600: { items: 1, dots: true },
        960: { items: 1, dots: true },
        1264: { items: 1, dots: true },
        1904: { items: 1, dots: true },
      },
      promoteList: [
        {
          id: 0,
          url: require("@/assets/productDetail/promote.png"),
        },
        {
          id: 1,
          url: require("@/assets/productDetail/promote.png"),
        },
        {
          id: 2,
          url: require("@/assets/productDetail/promote.png"),
        },
        {
          id: 3,
          url: require("@/assets/productDetail/promote.png"),
        },
        {
          id: 4,
          url: require("@/assets/productDetail/promote.png"),
        },
        {
          id: 5,
          url: require("@/assets/productDetail/promote.png"),
        },
      ],
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
    styleObj(item) {
      return {
        background: `url(${item.url})`,
        "background-size": "cover",
        "background-position": "50%",
      };
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
#productcard__promote {
  position: relative;
  .productcard__promote__item {
    height: 113px;
  }
  ::v-deep .owl-dots {
    margin-top: 0;
    .owl-dot {
      span {
        width: 30px;
        height: 5px;
      }
      &.active {
        span {
          background: #afafaf;
          width: 30px;
          height: 5px;
        }
      }
    }
  }
}
</style>
