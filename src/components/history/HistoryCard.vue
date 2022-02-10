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
      <v-dialog
        v-model="dialog"
        :fullscreen="screenView"
        :width="width"
        transition="dialog-bottom-transition"
        content-class="map__modal"
      >
        <template v-slot:activator="{ on, attrs }">
          <div
            class="history__refundbtn d-flex align-center justify-center"
            :class="{ disable: !isRefund }"
            v-bind="attrs"
            v-on="on"
          >
            <div>退費</div>
          </div>
        </template>
        <!-- 彈窗內容 -->
        <v-card>
          <div class="history__modal py-12 font-weight-black">
            <div class="mb-3 px-12">
              <div class="history__modal__label text-body-1">訂單編號</div>
              <div class="history__modal__value text-body-1">#123456789</div>
            </div>
            <div class="mb-3 px-12">
              <div class="history__modal__label text-body-1">商品名稱</div>
              <div class="history__modal__value text-body-1">
                台灣 WIFI 分享器租借｜4G上網吃到飽｜14 天防疫隔離長租專案
              </div>
            </div>
            <div class="mb-3 px-12">
              <div class="history__modal__label text-body-1">商品名稱</div>
              <div class="history__modal__value text-body-1">
                台灣 WIFI 分享器租借｜4G上網吃到飽｜14 天防疫隔離長租專案
              </div>
            </div>
            <div class="mb-3 px-12">
              <div class="history__modal__label text-body-1">商品名稱</div>
              <div class="history__modal__value text-body-1">
                名稱 首爾市區 | 機票 & 租車
              </div>
            </div>
            <div class="history__modal__divide my-3"></div>
            <div
              class="history__modal__confirmbox d-flex flex-column align-center"
            >
              <div class="my-6">退款手續需3~4個工作天完成</div>
              <div class="d-flex">
                <div
                  class="
                    history__modal__cancelbtn
                    d-flex
                    justify-center
                    align-center
                    mx-3
                  "
                  @click="dialog = false"
                >
                  <div>取消</div>
                </div>
                <div
                  class="
                    history__modal__confirmbtn
                    d-flex
                    justify-center
                    align-center
                    mx-3
                  "
                  @click="dialog = false"
                >
                  <div>確認</div>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-dialog>

      <div class="history__backbtn d-flex align-center justify-center ml-3">
        <div>返回上一頁</div>
      </div>
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
  data() {
    return {
      isRefund: true,
      dialog: false,
    };
  },
  computed: {
    // 偵測視窗大小改變彈窗是否全版
    screenView() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
        case "xl":
          return false;
        default:
          return true;
      }
    },
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return undefined;
        case "sm":
          return undefined;
        case "md":
          return undefined;
        case "lg":
          return 750;
        case "xl":
          return 750;
        default:
          return undefined;
      }
    },
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
    /* font-family: "NotoSansTC-Medium"; */
  }
  .history__backbtn {
    color: #fff;
    background: #ff2d55;
    width: 104px;
    height: 40px;
    padding: 4px 8px;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
  }
  .history__refundbtn {
    background: #6d6c6c;
    color: #fff;
    width: 104px;
    height: 40px;
    padding: 4px 8px;
    border-radius: 2px;
    cursor: pointer;
    &.disable {
      background: #afafaf;
      cursor: auto;
    }
  }
}

.history__modal {
  .history__modal__label {
    color: #6d6c6c;
  }
  .history__modal__value {
    color: #333333;
  }
  .history__modal__divide {
    border: 1px dashed #afafaf;
    width: 100%;
  }
  .history__modal__confirmbox {
    .history__modal__cancelbtn {
      background: #6d6c6c;
      color: #fff;
      width: 104px;
      height: 40px;
      padding: 4px 8px;
      border-radius: 2px;
      cursor: pointer;
    }
    .history__modal__confirmbtn {
      color: #fff;
      background: #ff2d55;
      width: 104px;
      height: 40px;
      padding: 4px 8px;
      text-align: center;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 1264px) {
  .history__page {
    width: 750px;
  }
}
</style>
