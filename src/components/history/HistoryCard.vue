<template>
  <div class="history__page">
    <div class="history__main text-h5 font-weight-black mb-6">訂單已成立</div>
    <!-- 訂單資訊 -->
    <OrderInfo />
    <!-- 訂購人資料 -->
    <OrdererInfo />
    <!-- 電子票據取貨Email -->
    <EmailInfo />
    <!-- 購買商品 -->
    <PurchaseProduct />
    <!-- 金額 -->
    <TotalAmount />
    <div class="d-flex justify-end mt-3">
      <div class="history__backbtn">返回上一頁</div>
    </div>
  </div>
</template>
<script>
import OrderInfo from "@/components/history/OrderInfo";
import OrdererInfo from "@/components/history/OrdererInfo";
import EmailInfo from "@/components/history/EmailInfo";
import PurchaseProduct from "@/components/history/PurchaseProduct";
import TotalAmount from "@/components/history/TotalAmount";

export default {
  name: "HistoryCard",
  components: {
    OrderInfo,
    OrdererInfo,
    EmailInfo,
    PurchaseProduct,
    TotalAmount,
  },
};
</script>
<style lang="scss" scoped>
.history__page {
  position: relative;
  width: 100%;
  margin: auto;
  .history__main {
    text-align: center;
  }
  .history__backbtn {
    color: #fff;
    background: #ff2d55;
    width: 104px;
    height: 40px;
    line-height: 40px;
    padding: 4px 8px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
  }
}

@media screen and (min-width: 1264px) {
  .history__page {
    width: 750px;
  }
}
</style>
