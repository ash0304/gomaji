<template>
  <div class="product__block pa-0 my-4">
    <!-- 第一區 -->
    <v-col
      v-for="(item, index) in productList1"
      :key="index"
      cols="12"
      class="product__item pa-0 d-flex flex-column flex-lg-row my-4"
    >
      <!-- left-->
      <v-col cols="12" lg="5" class="product__left pa-0">
        <!-- img -->
        <div class="product__img" :style="styleObj(item)">
          <v-col cols="12" class="d-flex align-center pa-0">
            <v-col cols="10" class="d-flex">
              <div class="text-body-2 product__tick travel">國旅券適用</div>
              <div class="text-body-2 product__tick art">藝fun券適用</div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end d-lg-none">
              <svg-icon iconClass="noBgLove" className="noBgLove" />
            </v-col>
          </v-col>
        </div>
        <!-- tags -->
      </v-col>
      <!-- right detail -->
      <v-col cols="12" lg="7" class="product__right px-3 pt-3 pb-0">
        <!-- first -->
        <v-col cols="12" class="d-flex pa-0 mb-1">
          <v-col
            cols="11"
            class="pa-0 text-h7 font-weight-black product__title"
          >
            {{ item.title }}
          </v-col>
          <v-col cols="1" class="pa-0 d-flex align-start justify-end">
            <svg-icon
              iconClass="love_full"
              className="love_full d-none d-lg-block"
            />
          </v-col>
        </v-col>
        <!-- second -->
        <v-col cols="12" class="d-flex px-0 py-2 mb-2">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2 product__tick instant">
              <svg-icon className="whitelighten" iconClass="whitelighten" />
              立即出票
            </div>
            <div class="text-body-2 product__tick instant">熱賣中</div>
            <div class="text-body-2 product__tick instant">即時確認</div>
          </v-col>
        </v-col>
        <!-- third -->
        <v-col cols="12" class="d-none pa-0 mb-2 d-lg-flex">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2 product__description">
              {{ item.description }}
            </div>
          </v-col>
        </v-col>
        <!-- fourth -->
        <v-col cols="12" class="d-flex pa-0 mb-2 mb-lg-0">
          <v-col cols="12" class="d-flex align-center pa-0">
            <svg-icon iconClass="location" className="location mr-1" />
            <div class="text-caption mr-2">{{ item.location }}</div>
            <svg-icon iconClass="schedule" className="schedule mr-1" />
            <div class="text-caption">最早可預訂日: {{ item.date }}</div>
          </v-col>
        </v-col>
        <!-- fifth -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex d-lg-none align-end pa-0">
            <svg-icon className="star pb-1" iconClass="star" />
            <div class="text-caption ml-2">(75)</div>
            <svg-icon iconClass="fire" className="fire ml-3 pb-1" />
            <div class="text-caption ml-1">500+個已訂購</div>
          </v-col>
        </v-col>
        <!-- sixth -->
        <v-col cols="12" class="d-none pa-0 d-lg-flex">
          <v-col
            cols="12"
            class="d-flex pa-0 justify-end text-button product__discountbox"
          >
            <div v-if="!item.isSold" class="product__discountbtn">
              {{ item.discount }}%OFF
            </div>
          </v-col>
        </v-col>
        <!-- seventh -->
        <v-col cols="12" class="d-flex align-center justify-space-between pa-0">
          <v-col cols="7" class="d-none d-lg-flex align-end pa-0">
            <v-rating
              v-model="rating"
              background-color="#ff8800"
              color="#ff8800"
              dense
              hover
              half-increments
              length="5"
              :size="18"
            ></v-rating>
            <div class="text-caption ml-2">(75)</div>
            <svg-icon iconClass="fire" className="fire ml-3 pb-1" />
            <div class="text-caption ml-1">500+個已訂購</div>
          </v-col>
          <v-col cols="12" lg="5" class="d-flex justify-end pa-0 text-body-2">
            <div v-if="!item.isSold" class="text-button product__delprice">
              TWD {{ item.deletePrice }}
            </div>
            <div v-if="!item.isSold" class="text-button ml-3 mr-1">TWD</div>
            <div v-if="!item.isSold" class="text-h6 product__price">
              {{ item.price }}
            </div>
            <div v-if="item.isSold" class="text-h6 product__soldout">
              已售鑿
            </div>
          </v-col>
        </v-col>
      </v-col>
    </v-col>
    <!-- 廣告 -->
    <v-col
      cols="12"
      class="
        product__promote
        pa-0
        d-flex
        flex-column
        align-center
        justify-center
        my-4
      "
    >
      <h2 class="mb-3">年末振興狂歡 訂房5折起</h2>
      <div class="product__promote__btn py-2 px-6">馬上前往</div>
    </v-col>
    <!-- 第二區 -->
    <v-col
      v-for="(item, index) in productList2"
      :key="index + 3"
      cols="12"
      class="product__item pa-0 d-flex flex-column flex-lg-row my-4"
    >
      <!-- left-->
      <v-col cols="12" lg="5" class="product__left pa-0">
        <!-- img -->
        <div class="product__img" :style="styleObj(item)">
          <v-col cols="12" class="d-flex align-center pa-0">
            <v-col cols="10" class="d-flex">
              <div class="text-body-2 product__tick travel">國旅券適用</div>
              <div class="text-body-2 product__tick art">藝fun券適用</div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end d-lg-none">
              <svg-icon iconClass="noBgLove" className="noBgLove" />
            </v-col>
          </v-col>
        </div>
        <!-- tags -->
      </v-col>
      <!-- right detail -->
      <v-col cols="12" lg="7" class="product__right px-3 pt-3 pb-0">
        <!-- first -->
        <v-col cols="12" class="d-flex pa-0 mb-1">
          <v-col
            cols="11"
            class="pa-0 text-h7 font-weight-black product__title"
          >
            {{ item.title }}
          </v-col>
          <v-col cols="1" class="pa-0 d-flex align-start justify-end">
            <svg-icon
              iconClass="love_full"
              className="love_full d-none d-lg-block"
            />
          </v-col>
        </v-col>
        <!-- second -->
        <v-col cols="12" class="d-flex px-0 py-2 mb-2">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2 product__tick instant">
              <svg-icon className="whitelighten" iconClass="whitelighten" />
              立即出票
            </div>
            <div class="text-body-2 product__tick instant">熱賣中</div>
            <div class="text-body-2 product__tick instant">即時確認</div>
          </v-col>
        </v-col>
        <!-- third -->
        <v-col cols="12" class="d-none pa-0 mb-2 d-lg-flex">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2 product__description">
              {{ item.description }}
            </div>
          </v-col>
        </v-col>
        <!-- fourth -->
        <v-col cols="12" class="d-flex pa-0 mb-2 mb-lg-0">
          <v-col cols="12" class="d-flex align-center pa-0">
            <svg-icon iconClass="location" className="location mr-1" />
            <div class="text-caption mr-2">{{ item.location }}</div>
            <svg-icon iconClass="schedule" className="schedule mr-1" />
            <div class="text-caption">最早可預訂日: {{ item.date }}</div>
          </v-col>
        </v-col>
        <!-- fifth -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex d-lg-none align-end pa-0">
            <svg-icon className="star pb-1" iconClass="star" />
            <div class="text-caption ml-2">(75)</div>
            <svg-icon iconClass="fire" className="fire ml-3 pb-1" />
            <div class="text-caption ml-1">500+個已訂購</div>
          </v-col>
        </v-col>
        <!-- sixth -->
        <v-col cols="12" class="d-none pa-0 d-lg-flex">
          <v-col
            cols="12"
            class="d-flex pa-0 justify-end text-button product__discountbox"
          >
            <div v-if="!item.isSold" class="product__discountbtn">
              {{ item.discount }}%OFF
            </div>
          </v-col>
        </v-col>
        <!-- seventh -->
        <v-col cols="12" class="d-flex align-center justify-space-between pa-0">
          <v-col cols="7" class="d-none d-lg-flex align-end pa-0">
            <v-rating
              v-model="rating"
              background-color="#ff8800"
              color="#ff8800"
              dense
              hover
              half-increments
              length="5"
              :size="18"
            ></v-rating>
            <div class="text-caption ml-2">(75)</div>
            <svg-icon iconClass="fire" className="fire ml-3 pb-1" />
            <div class="text-caption ml-1">500+個已訂購</div>
          </v-col>
          <v-col cols="12" lg="5" class="d-flex justify-end pa-0 text-body-2">
            <div v-if="!item.isSold" class="text-button product__delprice">
              TWD {{ item.deletePrice }}
            </div>
            <div v-if="!item.isSold" class="text-button ml-3 mr-1">TWD</div>
            <div v-if="!item.isSold" class="text-h6 product__price">
              {{ item.price }}
            </div>
            <div v-if="item.isSold" class="text-h6 product__soldout">
              已售鑿
            </div>
          </v-col>
        </v-col>
      </v-col>
    </v-col>
    <v-col cols="12">
      <ProductFullBanner />
    </v-col>
    <v-col cols="12" class="px-0">
      <div class="product__seemore d-block d-lg-none">查看更多</div>
      <v-pagination
        v-model="page"
        color="orange"
        class="d-none d-lg-block"
        :length="4"
      ></v-pagination>
    </v-col>
  </div>
</template>
<script>
import ProductFullBanner from "@/components/product/ProductFullBanner";

export default {
  name: "ProductBlock",
  components: { ProductFullBanner },
  data() {
    return {
      page: 1,
      rating: 4.5,
      productList1: [
        {
          id: 1,
          title:
            "【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40週年巡迴特展Pingu企鵝家族的誕生: 40 週年巡迴特展Pingu企鵝家族的誕生:40 週年巡迴特展",
          description:
            "立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QRcode輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松",
          location: "台中 苗栗",
          date: "今日",
          url: require("@/assets/product/product01.png"),
          price: 489,
          deletePrice: 900,
          discount: 45,
          isSold: false,
        },
        {
          id: 2,
          title:
            "【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40週年巡迴特展Pingu企鵝家族的誕生: 40 週年巡迴特展Pingu企鵝家族的誕生:40 週年巡迴特展",
          description:
            "立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QRcode輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松",
          location: "台中 苗栗",
          date: "今日",
          url: require("@/assets/product/product02.png"),
          price: 489,
          deletePrice: 900,
          discount: 45,
          isSold: true,
        },
        {
          id: 3,
          title:
            "【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40週年巡迴特展Pingu企鵝家族的誕生: 40 週年巡迴特展Pingu企鵝家族的誕生:40 週年巡迴特展",
          description:
            "立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QRcode輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松",
          location: "台中 苗栗",
          date: "今日",
          url: require("@/assets/product/product03.png"),
          price: 489,
          deletePrice: 900,
          discount: 45,
          isSold: false,
        },
      ],
      productList2: [
        {
          id: 4,
          title:
            "【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40週年巡迴特展Pingu企鵝家族的誕生: 40 週年巡迴特展Pingu企鵝家族的誕生:40 週年巡迴特展",
          description:
            "立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QRcode輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松",
          location: "台中 苗栗",
          date: "今日",
          url: require("@/assets/product/product04.png"),
          price: 489,
          deletePrice: 900,
          discount: 45,
          isSold: false,
        },
        {
          id: 5,
          title:
            "【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40週年巡迴特展Pingu企鵝家族的誕生: 40 週年巡迴特展Pingu企鵝家族的誕生:40 週年巡迴特展",
          description:
            "立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QRcode輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松",
          location: "台中 苗栗",
          date: "今日",
          url: require("@/assets/product/product05.png"),
          price: 489,
          deletePrice: 900,
          discount: 45,
          isSold: true,
        },
        {
          id: 6,
          title:
            "【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40週年巡迴特展Pingu企鵝家族的誕生: 40 週年巡迴特展Pingu企鵝家族的誕生:40 週年巡迴特展",
          description:
            "立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QRcode輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松",
          location: "台中 苗栗",
          date: "今日",
          url: require("@/assets/product/product06.png"),
          price: 489,
          deletePrice: 900,
          discount: 45,
          isSold: true,
        },
      ],
    };
  },
  methods: {
    styleObj(item) {
      return {
        background: `url(${item.url}) no-repeat`,
        "background-size": "cover",
        "background-position": "center center",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.product__block {
  position: relative;
  .product__item {
    width: 100%;
    height: auto;
    min-height: 150px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    .product__left {
      .product__img {
        width: 100%;
        height: 100%;
        background: url("../../assets/home/recent10.png") no-repeat;
        background-size: cover;
        background-position: center center;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      .noBgLove {
        width: 20px;
        height: 20px;
      }
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
      .product__tick {
        font-size: 0.8rem;
        padding: 0 7px;
        height: 22px;
        line-height: 22px;
        color: #fff;
        margin: 0px 2px;
        border-radius: 4px;
        &.art {
          background: #2548aa;
        }
        &.instant {
          background: #ff8800;
        }
        &.travel {
          background: #ff2d55;
        }
      }
    }
    .product__right {
      .product__title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .product__description {
        color: #6d6c6c;
      }
      .whitelighten {
        width: 15px;
        height: 15px;
      }
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
      .star {
        width: 18px;
        height: 18px;
      }
      .location {
        width: 12px;
        height: 12px;
      }
      .schedule {
        width: 12px;
        height: 12px;
      }
      .product__tick {
        font-size: 0.8rem;
        padding: 0 7px;
        height: 22px;
        line-height: 22px;
        color: #fff;
        margin: 0px 2px;
        &.instant {
          background: #ff8800;
        }
        &.travel {
          background: #ff2d55;
        }
      }
      .product__discountbox {
        height: 23px;
      }
      .product__discountbtn {
        height: 23px;
        line-height: 23px;
        padding: 1px 4px;
        font-weight: 400;
        color: #fff;
        text-shadow: 0 1px 2px #e18d0e;
        border-radius: 4px 4px 0 4px;
        background: linear-gradient(45deg, #ffaf1e, #ffd56e);
      }
      .product__delprice {
        text-decoration: line-through;
        color: grey;
      }
      .product__price {
        color: #ff2d55;
        font-weight: bold;
      }
      .product__soldout {
        font-weight: bold;
        color: #6d6c6c;
      }
    }
  }
  .product__promote {
    height: 265px;
    background: pink;
    border-radius: 6px;
    .product__promote__btn {
      background: #ff2d55;
      color: white;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .product__seemore {
    width: 100%;
    border: 0.5px solid #f80;
    border-radius: 5px;
    padding: 10px;
    color: #f80;
    text-align: center;
    cursor: pointer;
  }
}

@media screen and (max-width: 1264px) {
  .product__block {
    .product__item {
      .product__left {
        .product__img {
          height: 400px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          border-bottom-left-radius: 0px;
        }
      }
    }
    .product__promote {
      height: 400px;
    }
  }
}

@media screen and (max-width: 960px) {
  .product__block {
    .product__item {
      .product__left {
        .product__img {
          height: 300px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          border-bottom-left-radius: 0px;
        }
      }
    }
    .product__promote {
      height: 300px;
    }
  }
}

@media screen and (max-width: 600px) {
  .product__block {
    .product__item {
      .product__left {
        .product__img {
          height: 200px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          border-bottom-left-radius: 0px;
        }
      }
    }
    .product__promote {
      height: 200px;
    }
  }
}
</style>
