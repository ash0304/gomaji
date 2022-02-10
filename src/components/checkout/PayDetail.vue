<template>
  <div class="checkoutcard__container py-3">
    <v-row>
      <!-- Img -->
      <v-col cols="3" sm="2" md="2" lg="2">
        <div class="checkoutcard__imgbox">
          <div class="checkoutcard__img"></div>
        </div>
      </v-col>
      <!-- Info -->
      <v-col cols="9" sm="10" md="10" lg="7">
        <div class="checkoutcard__infobox">
          <div class="d-flex mb-1">
            <div class="text-sm-body-2 text-caption main text-no-wrap mr-1">
              名稱
            </div>
            <span class="checkoutcard__bold text-sm-body-2 text-caption">
              {{ item.name }}
            </span>
          </div>
          <div class="d-flex mb-1">
            <div class="text-sm-body-2 text-caption main text-no-wrap mr-1">
              方案
            </div>
            <span class="checkoutcard__bold text-sm-body-2 text-caption">
              {{ item.plan }}
            </span>
          </div>
          <div v-if="item.day" class="d-flex mb-1">
            <div class="text-sm-body-2 text-caption">天數:</div>
            <div class="text-sm-body-2 text-caption">{{ item.day }}</div>
          </div>
          <div v-if="item.spec" class="d-flex mb-1">
            <div class="text-sm-body-2 text-caption">商品規格:</div>
            <div class="text-sm-body-2 text-caption">{{ item.spec }}</div>
          </div>
          <div v-if="item.receive" class="d-flex mb-1">
            <div class="text-sm-body-2 text-caption">取件地:</div>
            <div class="text-sm-body-2 text-caption">{{ item.receive }}</div>
          </div>
          <div v-if="item.return" class="d-flex mb-1">
            <div class="text-sm-body-2 text-caption">還件地:</div>
            <div class="text-sm-body-2 text-caption">{{ item.return }}</div>
          </div>
          <div class="d-flex flex-wrap mb-1">
            <div v-if="item.date" class="d-flex align-start">
              <svg-icon iconClass="calendar" className="calendar mx-1" />
              <div class="text-sm-body-2 text-caption">{{ item.date }}</div>
            </div>
            <div v-if="item.time" class="d-flex align-start">
              <svg-icon iconClass="time" className="time mx-1" />
              <div class="text-sm-body-2 text-caption">{{ item.time }}</div>
            </div>
            <div v-if="item.shopping" class="d-flex align-start">
              <svg-icon iconClass="shopping" className="shopping mx-1" />
              <div class="text-sm-body-2 text-caption">
                個 x {{ item.shopping }}
              </div>
            </div>
            <div v-if="item.aldult" class="d-flex align-start">
              <svg-icon iconClass="person" className="person mx-1" />
              <div class="text-sm-body-2 text-caption">
                成人 x {{ item.aldult }}
              </div>
            </div>
            <div v-if="item.car" class="d-flex align-start">
              <svg-icon iconClass="car" className="car mx-1" />
              <div class="text-sm-body-2 text-caption">輛 x {{ item.car }}</div>
            </div>
          </div>
          <div class="d-flex d-lg-none justify-end">
            <div class="checkoutcard__pricebox d-flex align-center">
              <div class="d-flex font-weight-bold">
                <div
                  class="
                    checkoutcard__currency
                    text-subtitle-1
                    font-weight-bold
                  "
                >
                  TWD
                </div>
                <div
                  class="
                    checkoutcard__price
                    text-subtitle-1
                    font-weight-bold
                    ml-2
                  "
                >
                  {{ item.price }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <!-- price -->
      <v-col cols="0" sm="0" md="0" lg="3" class="d-none d-lg-block">
        <div class="checkoutcard__pricebox d-flex align-end justify-end">
          <div class="d-flex font-weight-bold">
            <div
              class="checkoutcard__currency text-subtitle-1 font-weight-bold"
            >
              TWD
            </div>
            <div
              class="checkoutcard__price text-subtitle-1 font-weight-bold ml-2"
            >
              {{ item.price }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "PayDetail",
  props: {
    item: {
      require: true,
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.checkoutcard__container {
  border-bottom: 1px solid #aeaeae;
  .checkoutcard__imgbox {
    .checkoutcard__img {
      width: 100%;
      height: 64px;
      background: blueviolet;
      border-radius: 6px;
    }
  }
  .checkoutcard__infobox {
    .main {
      color: #ff8800;
      font-weight: bold;
    }
    .checkoutcard__bold {
      font-weight: bold;
    }
  }
  .checkoutcard__pricebox {
    height: 100%;
    .checkoutcard__currency {
      color: black;
    }
    .checkoutcard__price {
      color: #ff2d55;
    }
  }
}

@media screen and (max-width: 600px) {
  .checkoutcard__container {
    .checkoutcard__imgbox {
      .checkoutcard__img {
        height: 48px;
      }
    }
  }
}
</style>
