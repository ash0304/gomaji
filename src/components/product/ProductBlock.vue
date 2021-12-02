<template>
  <div class="product__block pa-0 my-4">
    <!-- 第一區 -->
    <v-col
      v-for="(item, index) in 3"
      :key="index"
      cols="12"
      class="product__item pa-0 d-flex flex-column flex-lg-row my-4"
    >
      <!-- left-->
      <v-col cols="12" lg="5" class="product__left pa-0">
        <!-- img -->
        <div class="product__img">
          <v-col cols="12" class="d-flex align-center pa-0 d-lg-none">
            <v-col cols="10" class="d-flex">
              <div class="text-body-2 product__tick travel">國旅券適用</div>
              <div class="text-body-2 product__tick art">藝fun券適用</div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <svg-icon iconClass="love_full" className="love_full" />
            </v-col>
          </v-col>
        </div>
        <!-- tags -->
      </v-col>
      <!-- right detail -->
      <v-col cols="12" lg="7" class="product__right px-3 pt-3 pb-0">
        <!-- first -->
        <v-col cols="12" class="d-flex pa-0 mb-1">
          <v-col cols="11" class="pa-0 text-h7 font-weight-black">
            【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40 週年巡迴特展
          </v-col>
          <v-col cols="1" class="pa-0 d-flex align-start justify-end">
            <svg-icon
              iconClass="love_full"
              className="love_full d-none d-lg-block"
            />
          </v-col>
        </v-col>
        <!-- second -->
        <v-col cols="12" class="d-flex pa-0 mb-2">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2 product__tick instant">立即出票</div>
            <div class="text-body-2 product__tick instant">熱賣中</div>
            <div class="text-body-2 product__tick instant">即時確認</div>
          </v-col>
        </v-col>
        <!-- third -->
        <v-col cols="12" class="d-none pa-0 mb-2 d-lg-flex">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2">
              立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QR
              code輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松
            </div>
          </v-col>
        </v-col>
        <!-- fourth -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex align-center pa-0">
            <svg-icon iconClass="location" className="location mr-1" />
            <div class="text-caption mr-2">台中 苗栗</div>
            <svg-icon iconClass="location" className="location mr-1" />
            <div class="text-caption">最早可預訂日: 今日</div>
          </v-col>
        </v-col>
        <!-- fifth -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex align-end pa-0">
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
            <svg-icon iconClass="fire" className="fire ml-3" />
            <div class="text-caption">500+個已訂購</div>
          </v-col>
        </v-col>
        <!-- sixth -->
        <v-col cols="12" class="d-none pa-0 d-lg-flex">
          <v-col cols="12" class="d-flex pa-0 justify-end text-button">
            <div class="product__discountbtn">45%OFF</div>
          </v-col>
        </v-col>
        <!-- seventh -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex justify-end pa-0 text-body-2">
            <div class="text-button product__delprice">TWD 900</div>
            <div class="text-button ml-3 mr-1">TWD</div>
            <div class="text-h6 product__price">489</div>
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
      v-for="(item, index) in 2"
      :key="index + 3"
      cols="12"
      class="product__item pa-0 d-flex flex-column flex-lg-row my-4"
    >
      <!-- left-->
      <v-col cols="12" lg="5" class="product__left pa-0">
        <!-- img -->
        <div class="product__img">
          <v-col cols="12" class="d-flex align-center pa-0 d-lg-none">
            <v-col cols="10" class="d-flex">
              <div class="text-body-2 product__tick travel">國旅券適用</div>
              <div class="text-body-2 product__tick art">藝fun券適用</div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <svg-icon iconClass="love_full" className="love_full" />
            </v-col>
          </v-col>
        </div>
        <!-- tags -->
      </v-col>
      <!-- right detail -->
      <v-col cols="12" lg="7" class="product__right px-3 pt-3 pb-0">
        <!-- first -->
        <v-col cols="12" class="d-flex pa-0 mb-1">
          <v-col cols="11" class="pa-0 text-h7 font-weight-black">
            【預售8折】台北展覽 | Pingu企鵝家族的誕生: 40 週年巡迴特展
          </v-col>
          <v-col cols="1" class="pa-0 d-flex align-start justify-end">
            <svg-icon
              iconClass="love_full"
              className="love_full d-none d-lg-block"
            />
          </v-col>
        </v-col>
        <!-- second -->
        <v-col cols="12" class="d-flex pa-0 mb-2">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2 product__tick instant">立即出票</div>
            <div class="text-body-2 product__tick instant">熱賣中</div>
            <div class="text-body-2 product__tick instant">即時確認</div>
          </v-col>
        </v-col>
        <!-- third -->
        <v-col cols="12" class="d-none pa-0 mb-2 d-lg-flex">
          <v-col cols="12" class="d-flex pa-0">
            <div class="text-body-2">
              立即訂購奧萬大國家森林遊樂區門票，隨享免費停車！假日入園與平日同價，直接出示QR
              code輕鬆入場！春天賞櫻花尋螢火蟲、夏天避暑、秋天賞楓、冬天落羽松
            </div>
          </v-col>
        </v-col>
        <!-- fourth -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex align-center pa-0">
            <svg-icon iconClass="location" className="location mr-1" />
            <div class="text-caption mr-2">台中 苗栗</div>
            <svg-icon iconClass="location" className="location mr-1" />
            <div class="text-caption">最早可預訂日: 今日</div>
          </v-col>
        </v-col>
        <!-- fifth -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex align-end pa-0">
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
            <svg-icon iconClass="fire" className="fire ml-3" />
            <div class="text-caption">500+個已訂購</div>
          </v-col>
        </v-col>
        <!-- sixth -->
        <v-col cols="12" class="d-none pa-0 d-lg-flex">
          <v-col cols="12" class="d-flex pa-0 justify-end text-button">
            <div class="product__discountbtn">45%OFF</div>
          </v-col>
        </v-col>
        <!-- seventh -->
        <v-col cols="12" class="d-flex pa-0">
          <v-col cols="12" class="d-flex justify-end pa-0 text-body-2">
            <div class="text-button product__delprice">TWD 900</div>
            <div class="text-button ml-3 mr-1">TWD</div>
            <div class="text-h6 product__price">489</div>
          </v-col>
        </v-col>
      </v-col>
    </v-col>
    <v-pagination v-model="page" color="orange" :length="4"></v-pagination>
  </div>
</template>
<script>
export default {
  name: "ProductBlock",
  data() {
    return {
      page: 1,
      rating: 4.5,
    };
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
      .location {
        width: 10px;
        height: 10px;
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
}

@media screen and (max-width: 1264px) {
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
  }
}
</style>
