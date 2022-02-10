<template>
  <div class="mapguide__block pa-0 my-4">
    <div class="map__mapbox">
      <!-- start -->
      <!-- 項目樣式參考 -->
      <div v-for="item in mapBrowseList" :key="item.id" class="map__item">
        <div class="map__shadowbox d-flex justify-space-between">
          <!-- img -->
          <div class="map__img" :style="styleObj(item)"></div>
          <!-- detail -->
          <div class="map__detail">
            <!-- popover -->
            <!-- <div class="map__popover d-flex justify-start align-center">
              <svg-icon iconClass="lightning" className="lightning" />
              <div>立即確認</div>
            </div> -->
            <!-- top -->
            <div class="map__top d-flex">
              <!-- title -->
              <div class="map__title">
                <!-- lighten icon -->
                <div class="icon__flipbox">
                  <div class="icon__front">
                    <svg-icon iconClass="bigticket" className="bigticket" />
                  </div>
                  <div class="icon__back">
                    <svg-icon iconClass="bigticket_b" className="bigticket_b" />
                  </div>
                </div>
                {{ item.title }}
              </div>
            </div>
            <!-- bottom -->
            <div class="map__bottom d-flex flex-column">
              <!-- v-rating -->
              <div class="map__rating">
                <v-rating
                  v-model="item.startRating"
                  background-color="#ff8800"
                  color="#ff8800"
                  dense
                  readonly
                  hover
                  half-increments
                  length="5"
                  :size="18"
                ></v-rating>
                <div>({{ item.rating }})</div>
              </div>
              <div class="d-flex justify-space-between align-center">
                <!-- price -->
                <div class="map__pricebox">
                  TWD
                  <span class="map__price">
                    {{ item.price }}
                  </span>
                </div>
                <!-- 立即訂購 -->
                <div class="map__buybtn">立即訂購</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end -->
    </div>
  </div>
</template>
<script>
export default {
  name: "MapGuideBlock",
  data() {
    return {
      mapBrowseList: [
        {
          id: 0,
          title: "苗栗住宿 | 藍鵲渡假村 | 合掌村&小木屋&露",
          price: 150,
          rating: 75,
          url: require("@/assets/home/recent01.png"),
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
.mapguide__block {
  position: relative;
  .map__mapbox {
    height: 860px;
    background: url("../../assets/product/test.jpg") no-repeat;
    background-size: cover;
    .map__item {
      position: absolute;
      top: 30px;
      left: 30px;
      background: #fff;
      .map__shadowbox {
        width: 100%;
        height: 120px;
        padding: 8px;
        border-radius: 6px;
        box-shadow: 0 8px 20px 0 rgb(0 0 0 / 10%);
        .map__img {
          width: 30%;
          border-radius: 6px;
        }
        .map__detail {
          position: relative;
          width: 65%;
          /* .map__popover {
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
            } */
          .map__top {
            height: auto;
            padding-top: 5px;
            .map__title {
              width: 85%;
              height: 100%;
              color: #333;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
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
          }
          .map__bottom {
            height: 35%;
            .map__rating {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 0.8rem;
              color: #6d6c6c;
            }
            .map__pricebox {
              font-size: 0.5rem;
              font-weight: 500;
              color: #6d6c6c;
              .map__price {
                color: #ff2d55;
                font-size: 1rem;
                font-weight: 900;
              }
            }
            .map__buybtn {
              border: 1px solid #ff8800;
              border-radius: 4px;
              color: #ff8800;
              font-size: 12px;
              padding: 4px 8px;
            }
          }
        }
      }
      &:hover {
        opacity: 1;
        cursor: pointer;
        .map__shadowbox {
          .map__detail {
            .map__popover {
              transform: translateY(-30px);
              opacity: 1;
            }
            .map__top {
              .map__title {
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
}
</style>
