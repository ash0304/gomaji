<template>
  <v-container class="px-0 py-0 py-md-8 d-none d-lg-block">
    <v-row>
      <v-col cols="12" class="pr-0 pr-lg-3">
        <h3>熱門活動分類</h3>
        <carousel
          id="cate__carousel"
          :margin="5"
          :responsive="responsiveObj"
          :dots="false"
          :nav="false"
        >
          <!-- prev -->
          <Prev slot="prev" />
          <div
            v-for="item in categoryList"
            :key="item.id"
            class="carousel__item"
          >
            <div class="carousel__shadowbox">
              <img class="carousel__item__bg" :src="item.url" />
              <div class="carousel__item__title">{{ item.title }}</div>
            </div>
          </div>
          <!-- next -->
          <Next slot="next" />
        </carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import carousel from "vue-owl-carousel";
import Prev from "@/components/home/carousel/Prev";
import Next from "@/components/home/carousel/Next";

export default {
  name: "CategorySearch",
  components: { carousel, Prev, Next },
  data() {
    return {
      // owl carousel control setting
      responsiveObj: {
        0: { items: 2, stagePadding: 20 },
        600: { items: 3 },
        960: { items: 3 },
        1264: { items: 6 },
        1904: { items: 6 },
      },
      // fake data list
      categoryList: [
        {
          id: 0,
          title: "活動搜尋",
          url: require("@/assets/home/recent07.png"),
        },
        {
          id: 1,
          title: "活動搜尋",
          url: require("@/assets/home/recent08.png"),
        },
        {
          id: 2,
          title: "活動搜尋",
          url: require("@/assets/home/recent09.png"),
        },
        {
          id: 3,
          title: "活動搜尋",
          url: require("@/assets/home/recent10.png"),
        },
        {
          id: 4,
          title: "活動搜尋",
          url: require("@/assets/home/recent11.png"),
        },
        {
          id: 5,
          title: "活動搜尋",
          url: require("@/assets/home/recent12.png"),
        },
        {
          id: 6,
          title: "活動搜尋",
          url: require("@/assets/home/recent07.png"),
        },
        {
          id: 7,
          title: "活動搜尋",
          url: require("@/assets/home/recent08.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#cate__carousel {
  position: relative;
}
.carousel__item {
  overflow: hidden;
  padding: 14px 5px;
  .carousel__shadowbox {
    border-radius: 6px;
    box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 10%);
    .carousel__item__bg {
      border-top-right-radius: 6px;
      border-top-left-radius: 6px;
    }
    .carousel__item__title {
      padding: 10px;
      font-weight: 700;
    }
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 600px) {
  #cate__carousel {
    ::v-deep .owl-stage {
      right: 20px;
    }
  }
}
</style>
