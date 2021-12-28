<template>
  <div>
    <v-row>
      <v-col cols="12" class="py-0">
        <div class="d-flex align-center">
          <v-checkbox
            v-model="isAllSelect"
            color="orange"
            value="orange"
          ></v-checkbox>
          <div>全選(3)</div>
          <div class="px-3">|</div>
          <div class="cartfoot__delectall">刪除已選項目</div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="0" lg="5" class="d-none d-lg-block"> </v-col>
      <v-col cols="12" lg="7">
        <div class="cartfoot__points pa-3">你將獲得額外 888 Gomaji Points</div>
        <div class="d-flex justify-end align-center pa-3 pr-0">
          <div class="d-flex flex-column align-end">
            <div class="d-flex align-center">
              <div class="text-caption mr-1">3件商品合計</div>
              <div class="font-weight-black text-body-1 mr-1">TWD</div>
              <div class="cartfoot__price font-weight-black text-body-1">
                22,400
              </div>
            </div>
            <div class="d-flex align-center">
              <div class="text-caption mr-1">Gomaji Points</div>
              <svg-icon iconClass="fire" className="fire mr-1" />
              <div class="font-weight-black text-body-1">983</div>
            </div>
          </div>
          <div class="cartfoot__checkout py-3 px-6 ml-3">前往結帳</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "CartFoot",
  data() {
    return {
      isAllSelect: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.cartfoot__delectall {
  cursor: pointer;
}
.cartfoot__points {
  background: rgb(112, 73, 0);
  color: #ff8800;
}
.cartfoot__price {
  color: #ff2d55;
}
.cartfoot__checkout {
  background: #ff2d55;
  color: #fff;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
}
</style>
