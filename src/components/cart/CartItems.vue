<template>
  <div>
    <div
      v-for="(item, index) in cartItems"
      :key="index"
      class="cartitem__container py-3"
    >
      <v-row>
        <!-- Checkbox -->
        <v-col cols="1" lg="1">
          <v-checkbox
            v-model="item.checkbox"
            color="orange"
            value="orange"
          ></v-checkbox>
        </v-col>
        <!-- Img -->
        <v-col cols="2" lg="2">
          <div class="cartitem__imgbox">
            <div class="cartitem__img"></div>
          </div>
        </v-col>
        <!-- Info -->
        <v-col cols="9" lg="7">
          <div class="cartitem__infobox">
            <div class="d-flex mb-1">
              <div class="cartitem__title text-caption main">名稱</div>
              <div class="cartitem__bold text-caption">
                {{ item.name }}
              </div>
            </div>
            <div class="d-flex mb-1">
              <div class="cartitem__title text-caption main">方案</div>
              <div class="cartitem__bold text-caption">
                {{ item.plan }}
              </div>
            </div>
            <div v-if="item.day" class="d-flex mb-1">
              <div class="cartitem__title text-caption">天數:</div>
              <div class="text-caption">{{ item.day }}</div>
            </div>
            <div v-if="item.spec" class="d-flex mb-1">
              <div class="cartitem__title text-caption">商品規格:</div>
              <div class="text-caption">{{ item.spec }}</div>
            </div>
            <div v-if="item.receive" class="d-flex mb-1">
              <div class="cartitem__title text-caption">取件地:</div>
              <div class="text-caption">{{ item.receive }}</div>
            </div>
            <div v-if="item.return" class="d-flex mb-1">
              <div class="cartitem__title text-caption">還件地:</div>
              <div class="text-caption">{{ item.return }}</div>
            </div>
            <div class="d-flex mb-1">
              <div v-if="item.date" class="d-flex">
                <svg-icon iconClass="schedule" className="schedule mx-1" />
                <div class="text-caption">{{ item.date }}</div>
              </div>
              <div v-if="item.cart" class="d-flex">
                <svg-icon iconClass="cart" className="cart mx-1" />
                <div class="text-caption">個 x {{ item.cart }}</div>
              </div>
              <div v-if="item.aldult" class="d-flex">
                <svg-icon iconClass="cart" className="cart mx-1" />
                <div class="text-caption">成人 x {{ item.aldult }}</div>
              </div>
              <div v-if="item.car" class="d-flex">
                <svg-icon iconClass="cart" className="cart mx-1" />
                <div class="text-caption">輛 x {{ item.car }}</div>
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
                  <div class="cartitem__price text-subtitle-1 font-weight-bold">
                    {{ item.price }}
                  </div>
                </div>
                <svg-icon iconClass="delete" className="delete ml-1" />
              </div>
            </div>
          </div>
        </v-col>
        <!-- Price & Delete -->
        <v-col cols="0" lg="2" class="d-none d-lg-block">
          <div class="cartitem__pricebox d-flex align-center">
            <div class="d-flex font-weight-bold">
              <div class="cartitem__currency text-subtitle-1 font-weight-bold">
                TWD
              </div>
              <div class="cartitem__price text-subtitle-1 font-weight-bold">
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
          name: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專案",
          plan: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專案",
          day: "雙週14天",
          spec: "",
          receive: "桃園機場|第一航廈",
          return: "桃園機場|第二航廈",
          date: "2021-12-02",
          cart: 1,
          aldult: 0,
          car: 0,
          price: 1200,
        },
        {
          id: 1,
          checkbox: false,
          imgUrl: "",
          name: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專案",
          plan: "台灣WIFI分享器租借|4G上網吃到飽|14天防疫隔離長租專案",
          day: "雙週14天",
          spec: "",
          receive: "宅配",
          return: "宅配",
          date: "2021-12-02",
          cart: 1,
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
          cart: 1,
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
          cart: 1,
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
.cartitem__container {
  border-bottom: 1px solid #555555;
  .cartitem__imgbox {
    .cartitem__img {
      width: 100%;
      height: 70px;
      background: blueviolet;
      border-radius: 6px;
    }
  }
  .cartitem__infobox {
    .cartitem__title {
      width: 55px;
      &.main {
        color: #ff8800;
        font-weight: bold;
      }
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
</style>
