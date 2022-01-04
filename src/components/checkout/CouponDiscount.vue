<template>
  <div class="checkoutcard__discountarea pa-6">
    <div class="text-h6 font-weight-black mb-3">使用折扣</div>
    <div class="d-flex">
      <template>
        <v-dialog
          v-model="dialog"
          :fullscreen="screenView"
          :width="width"
          transition="dialog-bottom-transition"
          content-class="checkoutcard__couponmodal"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="
                checkoutcard__discountbtn
                d-flex
                align-center
                justify-center
              "
              :class="{ already: discount }"
            >
              <svg-icon
                v-if="!discount"
                iconClass="coupon"
                className="coupon mr-2"
              />
              <svg-icon
                v-if="discount"
                iconClass="whitecoupon"
                className="whitecoupon mr-2"
              />
              <div>
                {{ discount ? `已折抵 TWD 20` : "請選擇折價券" }}
              </div>
            </div>
          </template>
          <!-- 彈窗內容 -->
          <v-card>
            <div class="checkoutcard__content py-8 px-3 px-lg-10">
              <div class="d-flex justify-space-between">
                <div class="font-weight-black text-h5">使用折扣券</div>
                <div style="cursor: pointer" @click="dialog = false">
                  <svg-icon iconClass="modalClose" className="modalClose" />
                </div>
              </div>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="6">
                  <div class="checkoutcard__add__box d-flex mt-3">
                    <div class="checkoutcard__add__input">
                      <v-text-field dense outlined placeholder="請輸入折扣碼" />
                    </div>
                    <div class="checkoutcard__add__btn">增加</div>
                  </div>
                </v-col>
              </v-row>
              <!-- tabs -->
              <v-tabs v-model="tab" color="#ff8800">
                <v-tab v-for="item in items" :key="item">
                  {{ item }}
                </v-tab>
              </v-tabs>
              <!-- tab items -->
              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in itemObj" :key="item.label">
                  <div class="checkoutcard__tab__content d-flex flex-wrap py-6">
                    <!-- 折扣券 -->
                    <div
                      v-for="(obj, index) in item.obj"
                      :key="index"
                      class="checkoutcard__coupon__item py-7 pl-6 ma-3"
                      :class="[
                        { cantuse: obj.isUse || obj.isExpire },
                        { choose: obj.isActive },
                      ]"
                      @click="choseCoupon(obj)"
                    >
                      <div class="d-flex justify-space-between align-center">
                        <div
                          class="text-h5 font-weight-black"
                          :class="{ active: obj.isActive }"
                        >
                          95 折
                        </div>
                        <div
                          v-if="obj.isExpire"
                          class="text-body-2 checkoutcard__coupon__tag"
                        >
                          已過期
                        </div>
                        <div
                          v-if="obj.isUse"
                          class="text-body-2 checkoutcard__coupon__tag"
                        >
                          已使用
                        </div>
                        <div
                          v-if="!obj.isUse && !obj.isExpire"
                          class="text-body-2 checkoutcard__coupon__tag"
                          :class="{ choose: obj.isActive }"
                        >
                          {{ obj.isActive ? "已選擇" : "未選擇" }}
                        </div>
                      </div>
                      <div
                        class="text-body-2 font-weight-black"
                        :class="{ active: obj.isActive }"
                      >
                        訂購金額須滿 TWD 28
                      </div>
                      <div class="text-body-2 font-weight-black">
                        GOMAJI 獨家95折扣
                      </div>
                      <div class="text-caption mt-3">
                        有效期至:2022-01-31 00:00
                      </div>
                    </div>
                  </div>
                </v-tab-item>
              </v-tabs-items>
              <div class="checkoutcard__footer__blank"></div>
              <!-- 彈窗底部 -->
              <div
                class="
                  checkoutcard__footer
                  d-flex
                  align-center
                  justify-space-between
                "
              >
                <div class="text-body-2" style="color: #ff8800">
                  可折抵 TWD 0
                </div>
                <div class="d-flex">
                  <div
                    class="checkoutcard__footer__btn cancel mx-2"
                    @click="dialog = false"
                  >
                    取消
                  </div>
                  <div
                    class="checkoutcard__footer__btn confirm mx-2"
                    @click="dialog = false"
                  >
                    確定
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-dialog>
      </template>
      <div v-if="discount" class="checkoutcard__chancelbtn ml-3">清除</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CouponDiscount",
  data() {
    return {
      // 改變有無使用折扣變數
      discount: false,
      // 控制彈窗開關
      dialog: false,
      tab: null,
      items: ["可使用(2)", "已使用(2)", "無法使用"],
      itemObj: [
        {
          label: "可使用(2)",
          obj: [
            {
              id: 0,
              isExpire: false,
              isUse: false,
              isActive: false,
            },
            {
              id: 1,
              isExpire: false,
              isUse: false,
              isActive: false,
            },
          ],
        },
        {
          label: "已使用(2)",
          obj: [
            {
              id: 0,
              isExpire: false,
              isUse: true,
              isActive: false,
            },
            {
              id: 1,
              isExpire: false,
              isUse: true,
              isActive: false,
            },
          ],
        },
        {
          label: "無法使用",
          obj: [
            {
              id: 0,
              isExpire: true,
              isUse: false,
              isActive: false,
            },
            {
              id: 1,
              isExpire: true,
              isUse: false,
              isActive: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    choseCoupon(obj) {
      obj.isActive = !obj.isActive;
    },
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
.checkoutcard__couponmodal {
  z-index: 1000;
}

.active {
  color: #ff8800;
}

.checkoutcard__discountarea {
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  .checkoutcard__discountbtn {
    border: 1px solid #ff8800;
    color: #ff8800;
    border-radius: 2px;
    width: 160px;
    padding: 8px 4px;
    cursor: pointer;
    &.already {
      color: white;
      background: #ff8800;
    }
  }
  .checkoutcard__chancelbtn {
    border: 1px solid #afafaf;
    color: #afafaf;
    border-radius: 2px;
    width: 60px;
    padding: 8px 4px;
    cursor: pointer;
    text-align: center;
  }
}
.checkoutcard__content {
  position: relative;
  .checkoutcard__add__box {
    width: 100%;
    .checkoutcard__add__input {
      width: 100%;
    }
    .checkoutcard__add__btn {
      background: #ff8800;
      padding: 8px 12px;
      color: white;
      width: 90px;
      height: 40px;
      text-align: center;
      cursor: pointer;
    }
  }
  .checkoutcard__tab__content {
    height: 400px;
    overflow-y: auto;
    .checkoutcard__coupon__item {
      width: 300px;
      height: 163px;
      border: 1px solid #afafaf;
      border-radius: 2px;
      color: #6d6c6c;
      cursor: pointer;
      .checkoutcard__coupon__tag {
        width: 70px;
        padding: 4px;
        background: #afafaf;
        color: white;
        text-align: center;
        &.choose {
          background: #ff8800;
        }
      }
      &.cantuse {
        cursor: default;
        pointer-events: none;
      }
      &.choose {
        border: 1px solid #ff8800;
      }
    }
  }
  .checkoutcard__footer__blank {
    height: 52px;
  }
  .checkoutcard__footer {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0px;
    padding: 12px 28px;
    background: #fff;
    .checkoutcard__footer__btn {
      width: 80px;
      height: 44px;
      border-radius: 2px;
      padding: 8px 12px;
      text-align: center;
      cursor: pointer;
      &.confirm {
        background: #ff2d55;
        border: 1px solid #ff2d55;
        color: #fff;
      }
      &.cancel {
        background: #fff;
        border: 1px solid #afafaf;
        color: #afafaf;
      }
    }
  }
}

@media screen and (max-width: 1264px) {
  .checkoutcard__content {
    .checkoutcard__tab__content {
      height: 65vh;
      /* overflow-y: hidden; */
      .checkoutcard__coupon__item {
        width: 100%;
      }
    }
  }
}
</style>
