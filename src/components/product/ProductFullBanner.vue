<template>
  <v-row>
    <v-col cols="12" class="px-0 py-3 fullbanner d-lg-none">
      <carousel
        id="fullbanner__carousel"
        :margin="5"
        :responsive="responsiveObj"
        :dots="false"
        :nav="false"
        :slideBy="'page'"
        :autoplay="true"
      >
        <div
          v-for="item in promoteList"
          :key="item.id"
          class="fullbanner__item"
          :style="styleObj(item)"
        ></div>
      </carousel>
    </v-col>
  </v-row>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "ProductFullBanner",
  components: { carousel },
  data() {
    return {
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
          title: "精選台灣一日遊、景點、特色住宿&體驗",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 1,
          title: "精選台灣一日遊、景點、特色住宿&體驗",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1854/20211005072438_EaJJ4/png",
        },
        {
          id: 2,
          title: "精選台灣一日遊、景點、特色住宿&體驗",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 3,
          title: "精選台灣一日遊、景點、特色住宿&體驗",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 4,
          title: "精選台灣一日遊、景點、特色住宿&體驗",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
        {
          id: 5,
          title: "精選台灣一日遊、景點、特色住宿&體驗",
          url: "https://image.kkday.com/v2/image/get/w_647%2Ch_280%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1867/20211013104802_kyi42/png",
        },
      ],
    };
  },
  methods: {
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
.fullbanner {
  display: block;
}
#fullbanner__carousel {
  position: relative;
  .fullbanner__item {
    height: 400px;
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
          background: orange;
          width: 30px;
          height: 5px;
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  #fullbanner__carousel {
    position: relative;
    .fullbanner__item {
      height: 300px;
    }
  }
}

@media screen and (max-width: 600px) {
  #fullbanner__carousel {
    position: relative;
    .fullbanner__item {
      height: 230px;
    }
  }
}
</style>
