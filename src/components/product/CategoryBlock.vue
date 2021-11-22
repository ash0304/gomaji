<template>
  <v-container class="px-0 pt-4 pt-md-8">
    <v-row>
      <v-col cols="12" class="pr-0 pr-lg-3">
        <carousel
          id="categoryblock__carousel"
          :margin="5"
          :responsive="responsiveObj"
          :dots="false"
          :nav="false"
        >
          <!-- prev -->
          <Prev slot="prev" />
          <div
            v-for="item in promoteList"
            :key="item.id"
            class="carousel__item"
          >
            <div class="carousel__shadowbox">
              <img class="carousel__item__bg" :src="item.url" />
              <div
                class="
                  carousel__item__detail
                  d-flex
                  flex-column
                  justify-center
                  align-center
                "
              >
                <div>{{ item.title }}</div>
              </div>
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
  name: "CategoryBlock",
  components: { carousel, Prev, Next },
  data() {
    return {
      responsiveObj: {
        0: { items: 1, dots: false },
        600: { items: 2, dots: false },
        960: { items: 3, dots: false },
        1264: { items: 3, dots: false },
        1904: { items: 3, dots: false },
      },
      promoteList: [
        {
          id: 0,
          title: "分類A",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 1,
          title: "分類B",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1854/20211005072438_EaJJ4/png",
        },
        {
          id: 2,
          title: "分類C",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 3,
          title: "分類D",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 4,
          title: "分類E",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 5,
          title: "分類F",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#categoryblock__carousel {
  position: relative;
}
.carousel__item {
  overflow: hidden;
  padding: 14px 5px;
  .carousel__shadowbox {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    .carousel__item__bg {
      border-radius: 6px;
      transition: all 0.3s ease-in;
    }
    .carousel__item__detail {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border-radius: 6px;
      padding: 0 10%;
      opacity: 0;
      transition: all 0.3s ease-in;
    }
    &:hover {
      cursor: pointer;
      .carousel__item__bg {
        filter: blur(10px);
      }
      .carousel__item__detail {
        opacity: 100;
      }
    }
  }
}
</style>
