<template>
  <div class="history__order__info px-6 py-3 my-3">
    <div class="history__title text-h6 font-weight-black my-4 pl-2">
      訂單資訊
    </div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4">
        <div class="history__label text-body-2 mb-2">訂單編號</div>
        <div class="history__value">#123456789</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6">
        <div class="history__label text-body-2 mb-2">訂單狀態</div>
        <div class="history__value">ATM付款</div>
        <div class="history__value">銀行代碼:004 付款帳號:testaccount12345</div>
        <div class="history__deadline">繳款期限: 12/31/2021 12:00:00 AM</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" sm="4" md="4" lg="4">
        <div class="history__label text-body-2 mb-2">金流狀態</div>
        <div class="history__value">等待付款</div>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4">
        <div class="history__label text-body-2 mb-2">物流狀態</div>
        <div class="history__value">等待出貨</div>
      </v-col>
    </v-row>
    <div class="history__divide my-4"></div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <div
          class="
            d-flex
            flex-column flex-lg-row
            justify-space-around
            align-center
          "
        >
          <svg-icon iconClass="qrcode" className="qrcode my-3" />
          <div class="d-flex flex-column align-center my-3">
            <svg-icon iconClass="barcode" className="barcode" />
            <div style="color: #333">ABC7991579899</div>
          </div>
          <div class="d-flex flex-column align-center my-3">
            <div>憑證號</div>
            <div>ABC7991579899</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12">
        <div class="d-flex justify-center">
          <div class="history__writeoff">自主核銷</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "OrderInfo",
};
</script>
<style lang="scss" scoped>
.history__order__info {
  background: #fff;
  border-radius: 5px;
  .history__title {
    border-left: 3px solid #ff8800;
    color: #444444;
  }
  .history__divide {
    border: 1px dashed #afafaf;
  }
  .history__label {
    color: #6d6c6c;
  }
  .history__value {
    color: #333333;
  }
  .history__deadline {
    color: #ee7c76;
  }
  .qrcode {
    width: 100px;
    height: 100px;
  }
  .barcode {
    width: 145px;
    height: 43px;
  }
  .history__writeoff {
    background: #ff8800;
    border-radius: 4px;
    color: #fff;
    padding: 4px 8px;
    cursor: pointer;
    width: 104px;
    text-align: center;
  }
}
</style>
