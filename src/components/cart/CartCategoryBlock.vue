<template>
  <v-col cols="12" class="pr-0 pr-lg-3">
    <div class="d-flex justify-space-between align-end pr-3">
      <h3>多數旅客還買了以下商品</h3>
      <h4 class="grey--text">查看更多</h4>
    </div>
    <carousel
      id="custom__carousel"
      :margin="5"
      :responsive="responsiveObj"
      :dots="false"
      :nav="false"
    >
      <!-- prev -->
      <Prev slot="prev" />
      <div v-for="item in customList" :key="item.id" class="custom__item">
        <div class="custom__shadowbox d-flex flex-column">
          <!-- img -->
          <div class="custom__img" :style="styleObj(item)">
            <!-- tagarea -->
            <div class="custom__tagarea d-flex justify-space-between">
              <!-- tags -->
              <div class="custom__tags d-flex">
                <div class="custom__tag travel">國旅券適用</div>
                <div class="custom__tag art">藝fun券適用</div>
              </div>
              <!-- heart -->
              <div class="custom__heartarea d-flex justify-center align-center">
                <svg-icon
                  :iconClass="item.heartStatus"
                  :className="item.heartStatus"
                />
              </div>
            </div>
          </div>
          <!-- popover -->
          <div class="custom__popover d-flex justify-start align-center">
            <svg-icon iconClass="lightning" className="lightning" />
            <div>立即確認</div>
          </div>
          <div class="custom__detail">
            <!-- title -->
            <div class="custom__title">
              <!-- lighten icon -->
              <div class="icon__flipbox">
                <div class="icon__front">
                  <svg-icon iconClass="bigticket" className="bigticket" />
                </div>
                <div class="icon__back">
                  <!-- <svg-icon iconClass="bigticket_b" className="bigticket_b" /> -->
                </div>
              </div>
              {{ item.title }}
            </div>
            <!-- status -->
            <div class="custom__status d-flex justify-start align-center">
              <div class="custom__status__item hot">熱賣中</div>
              <div class="custom__status__item instant">即時確認</div>
              <div
                class="
                  custom__status__count
                  d-flex
                  justify-space-between
                  align-center
                "
              >
                <svg-icon iconClass="fire" className="fire" />
                <span
                  style="color: #6d6c6c; font-size: 0.6rem; font-weight: 800"
                >
                  300+ 個已訂購
                </span>
              </div>
            </div>
            <!-- info -->
            <div class="custom__info d-flex justify-space-between align-center">
              <div class="custom__location">
                <svg-icon iconClass="location" className="location" />
                <span style="font-weight: 800">台灣 苗栗</span>
              </div>
              <div class="custom__delprice">TWD 500</div>
            </div>
            <!-- rating & price -->
            <div class="custom__bottom d-flex justify-space-between align-end">
              <!-- v-rating -->
              <div class="custom__rating d-flex justify-start align-center">
                <v-rating
                  v-model="item.startRating"
                  background-color="#ff8800"
                  color="#ff8800"
                  dense
                  hover
                  half-increments
                  length="5"
                  :size="18"
                ></v-rating>
                <span
                  class="ml-2"
                  style="color: #6d6c6c; font-size: 16px; font-weight: 500"
                  >({{ item.rating }})</span
                >
              </div>
              <!-- price -->
              <div class="custom__pricebox">
                TWD
                <span class="custom__price">
                  {{ item.price }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Next -->
      <Next slot="next" />
    </carousel>
  </v-col>
</template>
<script>
import carousel from "vue-owl-carousel";
import Prev from "@/components/home/carousel/Prev";
import Next from "@/components/home/carousel/Next";

export default {
  name: "CartCategoryBlock",
  components: { carousel, Prev, Next },
  data() {
    return {
      responsiveObj: {
        0: { items: 1, dots: false, stagePadding: 20 },
        600: { items: 2, dots: false },
        960: { items: 3, dots: false },
        1264: { items: 4, dots: false },
        1904: { items: 4, dots: false },
      },
      /**
       * 實心 love_full
       * 線 love_line
       * 空心 love_empty
       * */
      customList: [
        {
          id: 0,
          title:
            "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          deletPrice: 500,
          rating: 75,
          url: require("@/assets/home/recent03.png"),
          heartStatus: "love_empty",
          startRating: 4,
        },
        {
          id: 1,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          deletPrice: 500,
          rating: 75,
          url: require("@/assets/home/recent04.png"),
          heartStatus: "love_line",
          startRating: 3,
        },
        {
          id: 2,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          deletPrice: 500,
          rating: 75,
          url: require("@/assets/home/recent05.png"),
          heartStatus: "love_full",
          startRating: 5,
        },
        {
          id: 3,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          deletPrice: 500,
          rating: 75,
          url: require("@/assets/home/recent06.png"),
          heartStatus: "love_full",
          startRating: 3.5,
        },
        {
          id: 4,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          deletPrice: 500,
          rating: 75,
          url: require("@/assets/home/recent07.png"),
          heartStatus: "love_full",
          startRating: 4,
        },
        {
          id: 5,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          deletPrice: 500,
          rating: 75,
          url: require("@/assets/home/recent08.png"),
          heartStatus: "love_full",
          startRating: 4,
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
#custom__carousel {
  position: relative;
  .custom__item {
    overflow: hidden;
    padding: 30px 5px;
    .custom__shadowbox {
      position: relative;
      height: 320px;
      border-radius: 6px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
      .custom__img {
        width: 100%;
        height: 55%;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        .custom__tagarea {
          height: 30%;
          padding: 10px;
          .custom__tags {
            .custom__tag {
              font-size: 0.8rem;
              padding: 0 7px;
              border-radius: 4px;
              height: 22px;
              line-height: 22px;
              color: #fff;
              margin: 0px 2px;
              &.travel {
                background: #ff2d55;
              }
              &.art {
                background: #2548aa;
              }
            }
          }
          .custom__heartarea {
            width: 35px;
            height: 35px;
            border-radius: 100%;
            background: #fff;
            overflow: hidden;
            cursor: pointer;
            .love_full {
              width: 35px;
              height: 35px;
            }
            .love_line {
              width: 20px;
              height: 20px;
            }
            .love_empty {
              width: 35px;
              height: 35px;
            }
          }
        }
      }
      .custom__popover {
        position: absolute;
        padding: 4px 8px;
        left: 5px;
        background: #26bec9;
        border-radius: 6px;
        color: white;
        transform: translateY(170px);
        opacity: 0;
        transition: all 0.3s ease-in-out;
        font-size: 0.8rem;
        &::before {
          position: absolute;
          content: "";
          bottom: -8px;
          left: 10px;
          border-left: 5px solid transparent;
          border-right: 9px solid transparent;
          border-top: 9px solid #26bec9;
        }
        .lightning {
          background: #26bec9;
          width: 16px;
          height: 16px;
        }
      }
      .custom__detail {
        border: 1px solid #eaeaea;
        height: 45%;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
        padding: 8px;
        border: 0.5px solid rgba(112, 112, 112, 0.3);
        border-top: none;
        .custom__title {
          height: 40%;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 1rem;
          font-weight: 500;
          .icon__flipbox {
            position: relative;
            display: inline-block;
            perspective: 50px;
            width: 25px;
            height: 15px;
            .icon__front {
              width: 22px;
              height: 22px;
              position: absolute;
              top: 0;
              left: 0;
              transform: rotateX(0deg) rotateY(0deg);
              transform-style: preserve-3d;
              backface-visibility: hidden;
              transition: all 0.3s ease-in-out;
              z-index: 10;
              .bigticket {
                width: 22px;
                height: 22px;
              }
            }
            .icon__back {
              width: 22px;
              height: 22px;
              position: absolute;
              top: 0px;
              left: 0;
              transform: rotateX(-360deg) rotateY(-360deg);
              transform-style: preserve-3d;
              backface-visibility: hidden;
              transition: all 0.3s ease-in-out;
              z-index: 9;
              .bigticket_b {
                width: 22px;
                height: 22px;
              }
            }
          }
        }
        .custom__status {
          height: 20%;
          font-size: 0.6rem;
          .custom__status__item {
            padding: 1px 9px;
            margin-right: 8px;
            border-radius: 4px;
            font-weight: 800;
            &.hot {
              background: #ffdbdd;
              color: #f80606;
            }
            &.instant {
              background: #dedcde;
              color: #707070;
            }
          }
          .custom__status__count {
            color: #6d6c6c;
            .fire {
              width: 13px;
              height: 13px;
            }
          }
        }
        .custom__info {
          height: 20%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.6rem;
          color: #6d6c6c;
          .custom__location {
            .location {
              width: 12px;
              height: 12px;
              margin-right: 3px;
            }
          }
          .custom__delprice {
            text-decoration: line-through;
          }
        }
        .custom__bottom {
          height: 20%;
          .custom__rating {
            font-size: 0.8rem;
            color: #6d6c6c;
          }
          .custom__pricebox {
            font-size: 0.5rem;
            font-weight: 500;
            color: #6d6c6c;
            .custom__price {
              color: #ff2d55;
              font-size: 1rem;
              font-weight: 900;
            }
          }
        }
      }
    }
    &:hover {
      opacity: 0.8;
      cursor: pointer;
      .custom__shadowbox {
        .custom__popover {
          transform: translateY(150px);
          opacity: 1;
        }
        .custom__detail {
          .custom__title {
            .icon__flipbox {
              .icon__front {
                z-index: 9;
                transform: rotateY(720deg);
              }
              .icon__back {
                z-index: 10;
                transform: rotateY(0deg);
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  #custom__carousel {
    position: relative;
    ::v-deep .owl-stage {
      right: 20px;
    }
  }
}
</style>
