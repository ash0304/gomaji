<template>
  <div>
    <div class="checkoutcard__payblock py-3">
      <div class="d-flex justify-space-between my-1">
        <div class="text-body-1 font-weight-black">總金額</div>
        <div class="text-body-1 font-weight-black">
          TWD
          <span class="text-body-1 font-weight-black" style="color: #ff2d55"
            >22400</span
          >
        </div>
      </div>
      <div class="d-flex justify-space-between my-1">
        <div class="text-body-1">折價券折扣金額</div>
        <div class="text-body-1 font-weight-black">
          -TWD
          <span class="text-body-1 font-weight-black" style="color: #ff2d55"
            >100</span
          >
        </div>
      </div>
      <div class="d-flex justify-space-between my-1">
        <div class="text-body-1">GOMAJI折扣金額</div>
        <div class="text-body-1 font-weight-black">
          -TWD
          <span class="text-body-1 font-weight-black" style="color: #ff2d55"
            >100</span
          >
        </div>
      </div>
      <div class="d-flex justify-space-between my-1">
        <div class="text-body-1">購物金折扣金額</div>
        <div class="text-body-1 font-weight-black">
          -TWD
          <span class="text-body-1 font-weight-black" style="color: #ff2d55"
            >100</span
          >
        </div>
      </div>
    </div>
    <div class="checkoutcard__payblock py-3">
      <div class="d-flex justify-space-between my-1">
        <div class="text-body-1 font-weight-black">支付金額</div>
        <div class="text-body-1 font-weight-black">
          TWD
          <span class="text-body-1 font-weight-black" style="color: #ff2d55"
            >22100</span
          >
        </div>
      </div>
    </div>
    <div class="checkoutcard__payblock no-bottom py-3">
      <div class="d-flex justify-space-between my-1">
        <div class="text-body-1 font-weight-black">訂單完成後回饋</div>
        <div class="text-body-1 font-weight-black">
          <svg-icon iconClass="gpoint" className="gpoint" />
          <span
            class="text-body-1 font-weight-black ml-2"
            style="color: #ff8800"
            >983</span
          >
        </div>
      </div>
    </div>
    <div class="my-6"></div>
    <v-row>
      <v-col cols="0" lg="5" class="d-none d-lg-block"> </v-col>
      <v-col cols="12" lg="7">
        <div class="checkoutcard__points pa-3">
          你將獲得額外 888 Gomaji Points
        </div>
        <div class="d-flex justify-end align-center pa-3 pr-0">
          <div class="checkoutcard__pricedetail d-flex flex-column align-end">
            <div class="d-flex align-center">
              <div class="text-caption mr-1">3件商品合計</div>
              <div
                class="font-weight-black text-body-1 mr-1"
                style="color: #444"
              >
                TWD
              </div>
              <div class="checkoutcard__price font-weight-black text-body-1">
                22100
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="text-caption mr-1">Gomaji Points</div>
              <svg-icon iconClass="gpoint" className="gpoint mr-1" />
              <div class="checkoutcard__point font-weight-black text-body-1">
                983
              </div>
            </div>
          </div>
          <div class="checkoutcard__checkout py-3 px-6 ml-3" @click="goHistory()">前往結帳</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "TotalAmount",
  methods: {
    goHistory() {
      this.$router.push({ name: 'History' })
    }
  }
};
</script>
<style lang="scss" scoped>
.checkoutcard__payblock {
  border-bottom: 1px solid #aeaeae;
  &.no-bottom {
    border-bottom: none;
  }
}

.checkoutcard__delectall {
  cursor: pointer;
}
.checkoutcard__points {
  background: #ffe4c5;
  color: #d2750a;
}
.checkoutcard__pricedetail {
  color: #6d6c6c;
  .checkoutcard__price {
    color: #ff2d55;
  }
  .checkoutcard__point {
    color: #ff8800;
  }
}

.checkoutcard__checkout {
  background: #ff2d55;
  color: #fff;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
}
</style>
