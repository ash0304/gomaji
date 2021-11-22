<template>
  <v-container class="px-0 py-0 py-md-8">
    <v-row>
      <v-col cols="12" class="pr-0 pr-lg-3">
        <div class="d-flex justify-space-between align-end pr-3">
          <h3>最近瀏覽</h3>
          <h4 class="grey--text">查看更多</h4>
        </div>
        <carousel
          id="recent__carousel"
          :margin="5"
          :responsive="responsiveObj"
          :dots="false"
          :nav="false"
        >
          <!-- prev -->
          <Prev slot="prev" />
          <div
            v-for="item in recentBrowseList"
            :key="item.id"
            class="recent__item"
          >
            <div class="recent__shadowbox d-flex justify-space-between">
              <!-- img -->
              <div class="recent__img" :style="styleObj(item)"></div>
              <!-- detail -->
              <div class="recent__detail">
                <!-- popover -->
                <div class="recent__popover d-flex justify-start align-center">
                  <svg-icon iconClass="lightning" className="lightning" />
                  <div>立即確認</div>
                </div>
                <!-- top -->
                <div class="recent__top d-flex justify-space-between">
                  <!-- title -->
                  <div class="recent__title">
                    <!-- lighten icon -->
                    <div class="icon__flipbox">
                      <div class="icon__front">
                        <svg-icon iconClass="bigticket" className="bigticket" />
                      </div>
                      <div class="icon__back">
                        <svg-icon
                          iconClass="bigticket_b"
                          className="bigticket_b"
                        />
                      </div>
                    </div>
                    {{ item.title }}
                  </div>
                  <!-- heart -->
                  <div class="recent__heart">
                    <svg-icon
                      :iconClass="item.heartStatus"
                      :className="item.heartStatus"
                    />
                  </div>
                </div>
                <!-- bottom -->
                <div class="recent__bottom flex-column flex-md-row">
                  <!-- v-rating -->
                  <div class="recent__rating">
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
                    <div>({{ item.rating }})</div>
                  </div>
                  <!-- price -->
                  <div class="recent__pricebox">
                    TWD
                    <span class="recent__price">
                      {{ item.price }}
                    </span>
                  </div>
                </div>
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
  name: "RecentBlock",
  components: { carousel, Prev, Next },
  data() {
    return {
      rating: 4,
      responsiveObj: {
        0: { items: 1, dots: false, stagePadding: 20 },
        600: { items: 2, dots: false },
        960: { items: 2, dots: false },
        1264: { items: 3, dots: false },
        1904: { items: 3, dots: false },
      },
      /**
       * 實心 love_full
       * 線 love_line
       * 空心 love_empty
       * */
      recentBrowseList: [
        {
          id: 0,
          title:
            "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          rating: 75,
          url: require("@/assets/home/recent01.png"),
          heartStatus: "love_empty",
          startRating: 4,
        },
        {
          id: 1,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          rating: 75,
          url: require("@/assets/home/recent02.png"),
          heartStatus: "love_line",
          startRating: 4,
        },
        {
          id: 2,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          rating: 75,
          url: require("@/assets/home/recent01.png"),
          heartStatus: "love_full",
          startRating: 4,
        },
        {
          id: 3,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露營車",
          price: 150,
          rating: 75,
          url: require("@/assets/home/recent02.png"),
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
#recent__carousel {
  position: relative;
  .recent__item {
    overflow: hidden;
    padding: 30px 5px;
    .recent__shadowbox {
      width: 100%;
      height: 120px;
      /* border: 1px solid pink; */
      padding: 8px;
      border-radius: 6px;
      box-shadow: 0 8px 20px 0 rgb(0 0 0 / 10%);
      .recent__img {
        width: 30%;
        border-radius: 6px;
      }
      .recent__detail {
        width: 65%;
        .recent__popover {
          position: absolute;
          padding: 4px 8px;
          left: 35%;
          background: #26bec9;
          border-radius: 6px;
          color: white;
          transform: translateY(0px);
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
        .recent__top {
          height: 65%;
          padding-top: 5px;
          .recent__title {
            width: 85%;
            height: 100%;
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-size: 0.9rem;
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
          .recent__heart {
            width: 10%;
            .love_full {
              width: 30px;
              height: 30px;
            }
            .love_empty {
              width: 30px;
              height: 30px;
            }
            .love_line {
              width: 18px;
              height: 18px;
            }
          }
        }
        .recent__bottom {
          height: 35%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .recent__rating {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 0.8rem;
            color: #6d6c6c;
          }
          .recent__pricebox {
            font-size: 0.5rem;
            font-weight: 500;
            color: #6d6c6c;
            .recent__price {
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
      .recent__shadowbox {
        .recent__detail {
          .recent__popover {
            transform: translateY(-30px);
            opacity: 1;
          }
          .recent__top {
            .recent__title {
              .icon__flipbox {
                .icon__front {
                  z-index: 9;
                  transform: rotateY(360deg);
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
}

@media screen and (max-width: 600px) {
  #recent__carousel {
    position: relative;
    ::v-deep .owl-stage {
      right: 10px;
    }
  }
}
</style>
