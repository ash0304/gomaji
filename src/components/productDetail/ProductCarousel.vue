<template>
  <carousel
    id="productimg__carousel"
    :margin="5"
    :responsive="responsiveObj"
    :dots="false"
    :nav="false"
  >
    <div v-for="item in productImgList" :key="item.id" class="product__box">
      <div class="product__img" :style="styleObj(item)"></div>
    </div>
  </carousel>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "ProductCarousel",
  components: { carousel },
  data() {
    return {
      responsiveObj: {
        0: { items: 1, dots: true, autoWidth: false },
        600: { items: 1, dots: true, autoWidth: false },
        960: { items: 1, dots: true, autoWidth: false },
        1264: {
          items: 3,
          dots: true,
          autoWidth: true,
          startPosition: 1,
          center: true,
          margin: 30,
        },
      },
      productImgList: [
        {
          id: 0,
          url: require("@/assets/home/recent03.png"),
        },
        {
          id: 1,
          url: require("@/assets/home/recent04.png"),
        },
        {
          id: 2,
          url: require("@/assets/home/recent05.png"),
        },
        {
          id: 3,
          url: require("@/assets/home/recent06.png"),
        },
        {
          id: 4,
          url: require("@/assets/home/recent07.png"),
        },
        {
          id: 5,
          url: require("@/assets/home/recent08.png"),
        },
      ],
    };
  },
  methods: {
    styleObj(item) {
      return {
        background: `url(${item.url})`,
        "background-size": "cover",
        "background-position": "center center",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
#productimg__carousel {
  position: relative;
  .product__box {
    overflow: hidden;
    .product__img {
      position: relative;
      width: 740px;
      height: 416px;
      border-radius: 6px;
    }
  }
  /* 導覽點點 */
  ::v-deep .owl-dots {
    margin-top: 0;
    .owl-dot {
      position: relative;
      top: -30px;
      &.active {
        span {
          background: #fff;
        }
      }
    }
  }
}

@media screen and (max-width: 1264px) {
  #productimg__carousel {
    .product__box {
      .product__img {
        width: auto;
        height: 416px;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  #productimg__carousel {
    .product__box {
      .product__img {
        width: auto;
        height: 375px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  #productimg__carousel {
    .product__box {
      .product__img {
        width: auto;
        height: 281px;
      }
    }
  }
}
</style>
