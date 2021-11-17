<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12">
        <h2>熱門活動分類</h2>
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
        0: { items: 2 },
        600: { items: 3 },
        960: { items: 3 },
        1264: { items: 6 },
        1904: { items: 6 },
      },
      // fake data list
      categoryList: [
        {
          id: 0,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
        },
        {
          id: 1,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
        },
        {
          id: 2,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
        },
        {
          id: 3,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
        },
        {
          id: 4,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
        },
        {
          id: 5,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
        },
        {
          id: 6,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
        },
        {
          id: 7,
          title: "防疫旅館",
          url: "https://image.kkday.com/v2/image/get/w_177.5%2Ch_133.125%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg",
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
</style>
