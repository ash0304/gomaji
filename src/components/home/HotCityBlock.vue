<template>
  <v-container class="px-0 py-2 py-md-8">
    <v-row>
      <v-col cols="12" class="pr-0 pr-lg-3">
        <h3>探索熱門城市</h3>
        <div class="hotcity__container">
          <!-- Normal set  show view lower than md(960px) -->
          <div
            v-for="(item, index) in hotcityList"
            :key="index"
            :class="{ active: activeItem === index }"
            :style="styleObj(item)"
            class="hotcity__item d-lg-block"
            @mouseenter="activeItem = index"
          >
            <div
              class="
                hotcity__overlap
                d-flex
                flex-column
                justify-end
                align-start
              "
            >
              <h4 class="hotcity__location">{{ item.location }}</h4>
              <div class="hotcity__tags d-flex flex-nowrap">
                <div class="hotcity__tag">交通 & 旅遊必備</div>
                <div class="hotcity__tag">熱門票券</div>
              </div>
            </div>
          </div>
          <!-- Carousel component show view lower than md(960px) -->
          <carousel
            id="hotcity__carousel"
            class="d-lg-none"
            :margin="10"
            :nav="false"
            :responsive="responsiveObj"
          >
            <div
              v-for="item in hotcityList"
              :key="item.id"
              class="hotcity__carousel__item"
              :style="styleObj(item)"
            >
              <div
                class="
                  hotcity__carousel__overlap
                  d-flex
                  flex-column
                  justify-end
                  align-start
                "
              >
                <h4 class="hotcity__carousel__location">{{ item.location }}</h4>
              </div>
            </div>
          </carousel>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "HotCityBlock",
  components: { carousel },
  data() {
    return {
      activeItem: 0,
      responsiveObj: {
        0: { items: 2, dots: false, stagePadding: 20 },
        600: { items: 3, dots: false },
        960: { items: 5, dots: false },
      },
      hotcityList: [
        {
          id: 0,
          location: "桃園",
          url: "https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1345/20210422100805_RqSA6/jpg",
        },
        {
          id: 1,
          location: "新北市",
          url: "https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_863/20191115101123_jlH9Q/jpg",
        },
        {
          id: 2,
          location: "台北",
          url: "https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1345/20210204034847_MwMNE/jpg",
        },
        {
          id: 3,
          location: "新竹",
          url: "https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1345/20210111042931_MHkeq/jpg",
        },
        {
          id: 4,
          location: "平溪",
          url: "https://image.kkday.com/v2/image/get/w_628%2Ch_472%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1345/20210426065816_u8Tg2/jpg",
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
.hotcity__container {
  display: flex;
  padding: 14px 5px;
  /* Carousel */
  #hotcity__carousel {
    display: block;
    width: 100%;
    height: 218px;
    .hotcity__carousel__item {
      width: 100%;
      height: 218px;
      border-radius: 6px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
      .hotcity__carousel__overlap {
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.85));
        width: 100%;
        height: 100%;
        padding: 10px 10px 15px 10px;
        border-radius: 0 0 4px 4px;
        .hotcity__carousel__location {
          position: relative;
          color: white;
          font-size: 1.4rem;
          transition: 0.2s bottom ease-in-out;
        }
      }
    }
  }
  /* Normal set */
  .hotcity__item {
    display: none;
    position: relative;
    width: 16.67%;
    height: 270px;
    background: pink;
    margin: 0 7.5px;
    transition: 0.2s all ease-in-out;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
    .hotcity__overlap {
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.85));
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding: 10px 10px 15px 10px;
      border-radius: 0 0 4px 4px;
      .hotcity__location {
        position: relative;
        color: white;
        font-size: 1.4rem;
        bottom: -45px;
        transition: 0.2s bottom ease-in-out;
      }
      .hotcity__tags {
        position: relative;
        width: 400px;
        color: white;
        bottom: -45px;
        transition: 0.2s bottom ease-in-out;
        .hotcity__tag {
          font-size: 0.8rem;
          border: 1px solid white;
          border-radius: 100px;
          padding: 2px 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
          margin: 5px 2px;
          font-weight: 400;
          background: transparent;
        }
      }
    }
    &:hover {
      opacity: 0.8;
      .hotcity__overlap {
        .hotcity__location {
          bottom: 0px;
        }
        .hotcity__tags {
          bottom: 0px;
        }
      }
    }
    &.active {
      width: 33.3%;
      .hotcity__overlap {
        .hotcity__location {
          bottom: 0px;
        }
        .hotcity__tags {
          bottom: 0px;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .hotcity__container {
    #hotcity__carousel {
      ::v-deep .owl-stage {
        right: 20px;
      }
    }
  }
}
</style>
