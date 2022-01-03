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
      <v-col cols="9" sm="10" md="10" lg="10">
        <div class="checkoutcard__infobox">
          <div class="d-flex mb-1">
            <div class="checkoutcard__title text-caption text-lg-body-2 main">
              名稱
            </div>
            <div class="checkoutcard__bold text-caption text-lg-body-2">
              {{ item.name }}
            </div>
          </div>
          <div class="d-flex mb-1">
            <div class="checkoutcard__title text-caption text-lg-body-2 main">
              方案
            </div>
            <div class="checkoutcard__bold text-caption text-lg-body-2">
              {{ item.plan }}
            </div>
          </div>
          <div v-if="item.day" class="d-flex mb-1">
            <div class="checkoutcard__title text-caption">天數:</div>
            <div class="text-caption">{{ item.day }}</div>
          </div>
          <div v-if="item.spec" class="d-flex mb-1">
            <div class="checkoutcard__title text-caption">商品規格:</div>
            <div class="text-caption">{{ item.spec }}</div>
          </div>
          <div v-if="item.receive" class="d-flex mb-1">
            <div class="checkoutcard__title text-caption">取件地:</div>
            <div class="text-caption">{{ item.receive }}</div>
          </div>
          <div v-if="item.return" class="d-flex mb-1">
            <div class="checkoutcard__title text-caption">還件地:</div>
            <div class="text-caption">{{ item.return }}</div>
          </div>
          <div class="d-flex flex-wrap mb-1">
            <div v-if="item.date" class="d-flex">
              <svg-icon iconClass="calendar" className="calendar mx-1" />
              <div class="text-caption">{{ item.date }}</div>
            </div>
            <div v-if="item.time" class="d-flex">
              <svg-icon iconClass="time" className="time mx-1" />
              <div class="text-caption">{{ item.time }}</div>
            </div>
            <div v-if="item.shopping" class="d-flex">
              <svg-icon iconClass="shopping" className="shopping mx-1" />
              <div class="text-caption">個 x {{ item.shopping }}</div>
            </div>
            <div v-if="item.aldult" class="d-flex">
              <svg-icon iconClass="person" className="person mx-1" />
              <div class="text-caption">成人 x {{ item.aldult }}</div>
            </div>
            <div v-if="item.car" class="d-flex">
              <svg-icon iconClass="car" className="car mx-1" />
              <div class="text-caption">輛 x {{ item.car }}</div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "PlanItem",
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
  border-bottom: 1px solid #555555;
  &:last-child {
    border-bottom: none;
  }
  .checkoutcard__imgbox {
    .checkoutcard__img {
      width: 100%;
      height: 64px;
      background: blueviolet;
      border-radius: 6px;
    }
  }
  .checkoutcard__infobox {
    .checkoutcard__title {
      width: 55px;
      &.main {
        color: #ff8800;
        font-weight: bold;
      }
    }
    .checkoutcard__bold {
      font-weight: bold;
    }
  }
  .checkoutcard__pricebox {
    .checkoutcard__currency {
      color: black;
    }
    .checkoutcard__price {
      color: #ff2d55;
    }
  }
}
</style>
