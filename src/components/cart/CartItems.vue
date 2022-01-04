<template>
  <div>
    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="cartitem__container py-3"
    >
      <v-row>
        <!-- Checkbox -->
        <v-col cols="1" sm="1" md="1" lg="1" class="pr-md-0">
          <div class="d-flex justify-center">
            <v-checkbox
              v-model="item.checkbox"
              color="orange"
              value="orange"
            ></v-checkbox>
          </div>
        </v-col>
        <!-- Img -->
        <v-col cols="3" sm="2" md="2" lg="2" class="pl-md-0">
          <div class="cartitem__imgbox">
            <div class="cartitem__img"></div>
          </div>
        </v-col>
        <!-- Info -->
        <v-col cols="8" sm="9" md="9" lg="6">
          <div class="cartitem__infobox">
            <div class="d-flex mb-1">
              <div class="text-sm-body-1 text-caption main text-no-wrap mr-1">
                名稱
              </div>
              <span class="checkoutcard__bold text-sm-body-1 text-caption">
                {{ item.name }}
              </span>
            </div>
            <div class="d-flex mb-1">
              <div class="text-sm-body-1 text-caption main text-no-wrap mr-1">
                方案
              </div>
              <span class="checkoutcard__bold text-sm-body-1 text-caption">
                {{ item.plan }}
              </span>
            </div>
            <div v-if="item.day" class="d-flex mb-1">
              <div class="text-sm-body-1 text-caption">天數:</div>
              <div class="text-sm-body-1 text-caption">{{ item.day }}</div>
            </div>
            <div v-if="item.spec" class="d-flex mb-1">
              <div class="text-sm-body-1 text-caption">商品規格:</div>
              <div class="text-sm-body-1 text-caption">{{ item.spec }}</div>
            </div>
            <div v-if="item.receive" class="d-flex mb-1">
              <div class="text-sm-body-1 text-caption">取件地:</div>
              <div class="text-sm-body-1 text-caption">{{ item.receive }}</div>
            </div>
            <div v-if="item.return" class="d-flex mb-1">
              <div class="text-sm-body-1 text-caption">還件地:</div>
              <div class="text-sm-body-1 text-caption">{{ item.return }}</div>
            </div>
            <div class="d-flex flex-wrap mb-1">
              <div v-if="item.date" class="d-flex align-start">
                <svg-icon iconClass="calendar" className="calendar mx-1" />
                <div class="text-sm-body-1 text-caption">{{ item.date }}</div>
              </div>
              <div v-if="item.time" class="d-flex align-start">
                <svg-icon iconClass="time" className="time mx-1" />
                <div class="text-sm-body-1 text-caption">{{ item.time }}</div>
              </div>
              <div v-if="item.shopping" class="d-flex align-start">
                <svg-icon iconClass="shopping" className="shopping mx-1" />
                <div class="text-sm-body-1 text-caption">
                  個 x {{ item.shopping }}
                </div>
              </div>
              <div v-if="item.aldult" class="d-flex align-start">
                <svg-icon iconClass="person" className="person mx-1" />
                <div class="text-sm-body-1 text-caption">
                  成人 x {{ item.aldult }}
                </div>
              </div>
              <div v-if="item.car" class="d-flex align-start">
                <svg-icon iconClass="car" className="car mx-1" />
                <div class="text-sm-body-1 text-caption">
                  輛 x {{ item.car }}
                </div>
              </div>
            </div>
            <div class="d-flex d-lg-none justify-end">
              <div class="cartitem__pricebox d-flex align-center">
                <div class="d-flex font-weight-bold">
                  <div
                    class="cartitem__currency text-subtitle-1 font-weight-bold"
                  >
                    TWD
                  </div>
                  <div
                    class="
                      cartitem__price
                      text-subtitle-1
                      font-weight-bold
                      ml-2
                    "
                  >
                    {{ item.price }}
                  </div>
                </div>
                <svg-icon iconClass="delete" className="delete ml-1" />
              </div>
            </div>
          </div>
        </v-col>
        <!-- Price & Delete -->
        <v-col cols="0" sm="0" md="0" lg="3" class="d-none d-lg-block">
          <div class="cartitem__pricebox d-flex align-center justify-end">
            <div class="d-flex font-weight-bold">
              <div class="cartitem__currency text-subtitle-1 font-weight-bold">
                TWD
              </div>
              <div
                class="cartitem__price text-subtitle-1 font-weight-bold ml-2"
              >
                {{ item.price }}
              </div>
            </div>
            <svg-icon iconClass="delete" className="delete ml-1" />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  data() {
    return {
      cartItems: [
        {
          id: 0,
          checkbox: false,
          imgUrl: "",
          name: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",
          plan: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",
          day: "雙週14天",
          spec: "",
          receive: "桃園機場|第一航廈",
          return: "桃園機場|第二航廈",
          date: "2021-12-02",
          time: "",
          shopping: 1,
          aldult: 0,
          car: 0,
          price: 1200,
        },
        {
          id: 1,
          checkbox: false,
          imgUrl: "",
          name: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",
          plan: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專",
          day: "雙週14天",
          spec: "",
          receive: "宅配",
          return: "宅配",
          date: "2021-12-02",
          time: "",
          shopping: 1,
          aldult: 0,
          car: 0,
          price: 1200,
        },
        {
          id: 2,
          checkbox: false,
          imgUrl: "",
          name: "首爾市區|機票 & 租車",
          plan: "首爾市區包車",
          day: "",
          spec: "商品規格內容",
          receive: "",
          return: "",
          date: "2021-12-02",
          time: "8:00",
          shopping: 0,
          aldult: 1,
          car: 1,
          price: 20000,
        },
        {
          id: 3,
          checkbox: false,
          imgUrl: "",
          name: "首爾市區|機票 & 租車",
          plan: "首爾市區包車",
          day: "",
          spec: "商品規格內容",
          receive: "",
          return: "",
          date: "2021-12-02",
          time: "8:00",
          shopping: 0,
          aldult: 1,
          car: 1,
          price: 20000,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep .v-input--selection-controls {
  margin-top: 0px;
}

.cartitem__container {
  border-bottom: 1px solid #555555;
  .cartitem__imgbox {
    .cartitem__img {
      width: 100%;
      height: 64px;
      background: blueviolet;
      border-radius: 6px;
    }
  }
  .cartitem__infobox {
    .main {
      color: #ff8800;
      font-weight: bold;
    }
    .cartitem__bold {
      font-weight: bold;
    }
  }
  .cartitem__pricebox {
    .cartitem__currency {
      color: black;
    }
    .cartitem__price {
      color: #ff2d55;
    }
  }
}

@media screen and (max-width: 600px) {
  .cartitem__container {
    .cartitem__imgbox {
      .cartitem__img {
        height: 48px;
      }
    }
  }
}
</style>
