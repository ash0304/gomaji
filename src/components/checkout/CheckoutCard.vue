<template>
  <div class="checkoutcard__page">
    <div
      class="
        checkoutcard__fixbtn
        d-flex
        flex-column
        align-center
        justify-center
      "
      @click="navigatorToEdit"
    >
      <div class="font-no-wrap">編輯</div>
      <div class="font-no-wrap">名單</div>
    </div>
    <!-- Breadcrumbs -->
    <div class="checkoutcard__breadcrumbs">
      <v-breadcrumbs :items="items" divider=">" class="pa-0 mb-3">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
            <span :class="item.class">
              {{ item.text }}
            </span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </div>
    <div>購物明細</div>
    <v-expansion-panels v-model="expansion" multiple>
      <!-- 訂購人資料 -->
      <v-expansion-panel class="my-2" id="orderinfo">
        <v-expansion-panel-header :color="'orange'">
          <div class="checkoutcard__panelhead" id="h_orderinfo">訂購人資料</div>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <OrderInfo />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- WIFI分享器 -->
      <v-expansion-panel class="my-2" id="caseA">
        <v-expansion-panel-header :color="'orange'">
          <div class="checkoutcard__panelhead" id="h_caseA">WIFI分享器</div>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <!-- 方案詳情 -->
          <div class="checkoutcard__area">
            <PlanItem
              v-for="(item, index) in planItems1"
              :key="index"
              :item="item"
            />
          </div>
          <!-- 寄送資料 -->
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            寄送資料
          </div>
          <ShipInfo />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- 全旅包車自由行 -->
      <v-expansion-panel class="my-2" id="caseB">
        <v-expansion-panel-header :color="'orange'">
          <div class="checkoutcard__panelhead" id="h_caseB">全旅包車自由行</div>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <!-- 方案詳情 -->
          <div class="checkoutcard__area">
            <PlanItem
              v-for="(item, index) in planItems2"
              :key="index"
              :item="item"
            />
          </div>
          <!-- 旅客代表人 -->
          <RepresentCard />
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            導覽語言
          </div>
          <TourLanguage />
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            離開航班資訊
          </div>
          <FlightInfo />
          <!-- 接送資料 -->
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            接送資料
          </div>
          <PickupInfo />
          <!-- 租車資料 -->
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            租車資料
          </div>
          <RentcarInfo />
          <!-- 乘客資料 -->
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            乘客資料
          </div>
          <PassengerInfo />
          <!-- 寄送資料 -->
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            寄送資料
          </div>
          <ForeignShipInfo />
          <!-- 旅遊期間連絡方式 -->
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            旅遊期間連絡方式
          </div>
          <ConnectMethod />
          <!-- 訂單備註 -->
          <div class="checkoutcard__label text-h6 font-weight-black my-4 pl-2">
            訂單備註
          </div>
          <OrderMemo />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <div id="discount" style="width: 100%">
        <div id="h_discount" class="checkoutcard__scrolllabel text-h6 my-3">
          折價券折扣
        </div>
        <CouponDiscount />
      </div>
      <div id="points" style="width: 100%">
        <div id="h_points" class="checkoutcard__scrolllabel text-h6 my-3">
          GOMAJI POINT 折抵
        </div>
        <div class="checkoutcard__pointarea pa-6">
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
              <div class="text-h6 font-weight-black mb-3">已折抵 TWD 100</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
              <div class="d-flex">
                <div class="checkoutcard__pointinput">
                  <v-text-field
                    outlined
                    dense
                    value="TWD 100"
                    class="righted__input"
                  >
                  </v-text-field>
                </div>
                <div class="checkoutcard__selectall ml-3">全部使用</div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
              <div class="text-body-2 mb-3">可折抵點數 TWD 1,200</div>
            </v-col>
          </v-row>
        </div>
        <div></div>
      </div>
      <!-- 付款方式 -->
      <v-expansion-panel class="my-2" id="paymethod">
        <v-expansion-panel-header :color="'orange'">
          <div class="checkoutcard__panelhead" id="h_paymethod">付款方式</div>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <PayMethod />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- 電子票取貨Email -->
      <v-expansion-panel class="my-2">
        <v-expansion-panel-header :color="'orange'">
          <div class="checkoutcard__panelhead" id="h_paymethod">
            電子票取貨Email
          </div>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <EticketMail />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- 發票資訊 -->
      <v-expansion-panel class="my-2">
        <v-expansion-panel-header :color="'orange'">
          <div class="checkoutcard__panelhead" id="h_paymethod">發票資訊</div>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <BillInfo />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- 付款明細 -->
      <v-expansion-panel class="my-2" id="paydetail">
        <v-expansion-panel-header :color="'orange'">
          <div class="checkoutcard__panelhead" id="h_paydetail">付款明細</div>
          <template v-slot:actions>
            <v-icon color="white"> $expand </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <PayDetail
            v-for="(item, index) in planItems3"
            :key="index"
            :item="item"
          />
          <TotalAmount />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import OrderInfo from "@/components/checkout/OrderInfo";
import PlanItem from "@/components/checkout/PlanItem";
import ShipInfo from "@/components/checkout/ShipInfo";
import RepresentCard from "@/components/checkout/RepresentCard";
import TourLanguage from "@/components/checkout/TourLanguage";
import FlightInfo from "@/components/checkout/FlightInfo";
import PickupInfo from "@/components/checkout/PickupInfo";
import RentcarInfo from "@/components/checkout/RentcarInfo";
import PassengerInfo from "@/components/checkout/PassengerInfo";
import ForeignShipInfo from "@/components/checkout/ForeignShipInfo";
import ConnectMethod from "@/components/checkout/ConnectMethod";
import CouponDiscount from "@/components/checkout/CouponDiscount";
import OrderMemo from "@/components/checkout/OrderMemo";
import PayMethod from "@/components/checkout/PayMethod";
import EticketMail from "@/components/checkout/EticketMail";
import BillInfo from "@/components/checkout/BillInfo";
import PayDetail from "@/components/checkout/PayDetail";
import TotalAmount from "@/components/checkout/TotalAmount";

export default {
  name: "CheckoutCard",
  components: {
    OrderInfo,
    PlanItem,
    ShipInfo,
    RepresentCard,
    TourLanguage,
    FlightInfo,
    PickupInfo,
    RentcarInfo,
    PassengerInfo,
    ForeignShipInfo,
    ConnectMethod,
    CouponDiscount,
    OrderMemo,
    PayMethod,
    EticketMail,
    BillInfo,
    PayDetail,
    TotalAmount,
  },
  data() {
    return {
      expansion: [0, 1, 2, 3, 4, 5, 6],
      textarea: "",
      dialog: false,
      // breadcrumbs
      items: [
        {
          text: "購物車",
          disabled: false,
          href: "test",
          class: "active",
        },
        {
          text: "填寫付款方式",
          disabled: true,
          href: "test",
          class: "none",
        },
      ],
      // tabs
      tabList: [
        {
          id: 0,
          name: "訂購人資料",
          target: "planblocks",
          headertarget: "h2__planblocks",
        },
        {
          id: 1,
          name: "WIFI分享器",
          target: "productinstruction",
          headertarget: "h2__productinstruction",
        },
        {
          id: 2,
          name: "全旅包車自由行",
          target: "purchasenotice",
          headertarget: "h2__purchasenotice",
        },
        {
          id: 3,
          name: "折價券折抵",
          target: "usedescription",
          headertarget: "h2__usedescription",
        },
        {
          id: 4,
          name: "GOMAJI POINTS 折抵",
          target: "cancelpolicy",
          headertarget: "h2__cancelpolicy",
        },
        {
          id: 5,
          name: "付款方式",
          target: "experiencelocation",
          headertarget: "h2__experiencelocation",
        },
        {
          id: 6,
          name: "付款明細",
          target: "passengerreviews",
          headertarget: "h2__passengerreviews",
        },
      ],
      // plans
      planItems1: [
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
      ],
      planItems2: [
        {
          id: 0,
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
      planItems3: [
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
      ],
    };
  },
  methods: {
    navigatorToEdit() {
      this.$router.push("/edit");
    },
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: #ff8800;
}
.none {
  color: #707070;
}
.checkoutcard__area {
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
}

.checkoutcard__representcard {
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16);
  .checkoutcard__addtraveler {
    color: #ff8800;
    border: 1px solid #ff8800;
    border-radius: 2px;
    padding: 8px 16px;
  }
}

.checkoutcard__page {
  position: relative;
  width: 100%;
  margin: auto;
  .checkoutcard__fixbtn {
    position: fixed;
    z-index: 100;
    color: #ff8800;
    background: #fff;
    font-weight: bold;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    padding: 15px 18px;
    box-shadow: 1px 4px 9px 0 rgba(0, 0, 0, 0.16);
    bottom: 3%;
    right: 1%;
    cursor: pointer;
  }
  .checkoutcard__breadcrumbs {
    width: 100%;
    margin: auto;
  }
  .checkoutcard__panelhead {
    color: #fff;
    font-weight: bold;
  }
  .checkountcard__hint {
    color: #c3cace;
  }
  .checkoutcard__label {
    border-left: 3px solid #ff8800;
  }
  .checkoutcard__scrolllabel {
    color: #666666;
  }

  .checkoutcard__pointarea {
    background: #fff;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    .checkoutcard__pointinput {
      width: 100%;
      .righted__input {
        ::v-deep input {
          text-align: right;
          color: #ff8800;
          font-weight: bold;
        }
      }
    }

    .checkoutcard__selectall {
      padding: 8px 12px;
      background: #ff8800;
      border-radius: 2px;
      color: #fff;
      width: 120px;
      height: 40px;
      cursor: pointer;
      text-align: center;
    }
  }
}

::v-deep .v-expansion-panel--active > .v-expansion-panel-header {
  min-height: 30px;
}

::v-deep .v-expansion-panel-content__wrap {
  padding: 24px;
}

@media screen and (min-width: 1264px) {
  .checkoutcard__page {
    width: 750px;
    .checkoutcard__fixbtn {
      right: 50%;
      bottom: 30%;
      transform: translate(calc(50% + 430px), 50%);
    }
  }
}
</style>
