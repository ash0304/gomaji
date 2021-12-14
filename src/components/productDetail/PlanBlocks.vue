<template>
  <v-col cols="12" class="planblocks__page py-10">
    <h2 id="h2__planblocks" class="planblocks__title mb-3 pl-3">選擇方案</h2>
    <v-col
      cols="12"
      v-for="(item, index) in planList"
      :key="index"
      class="planblocks__planitem pa-0 my-3"
    >
      <v-col cols="12" class="planblocks__header pa-3 d-flex">
        <!-- 資訊區 -->
        <v-col cols="9" lg="9" class="pa-0 py-3">
          <div
            class="
              d-flex
              flex-column flex-lg-row
              align-start align-lg-center
              mb-3
            "
          >
            <h4 class="mx-1">{{ item.title }}</h4>
            <div class="d-flex mt-1">
              <div class="planblocks__ticket mx-1 text-body-2 travel">
                國旅券適用
              </div>
              <div class="planblocks__ticket mx-1 text-body-2 art">
                藝fun券適用
              </div>
            </div>
          </div>
          <div class="d-flex d-lg-none align-center">
            <div class="text-caption mr-2">TWD</div>
            <div class="planblocks__price mr-2">{{ item.price }}</div>
            <div class="planblocks__delprice text-body-2 mr-2">
              TWD {{ item.delPrice }}
            </div>
            <div class="planblocks__discountbtn">{{ item.discount }}%OFF</div>
          </div>
          <div class="d-none d-lg-block">
            <div class="text-body-2 my-1">• 門票兩張</div>
            <div class="text-body-2 my-1">
              • 水族館獨家明信片一組（價值210元）
            </div>
          </div>
          <div
            class="planblocks__description d-block d-lg-none"
            :class="{ more: item.isMore }"
          >
            <div class="text-body-2 my-1">• 門票兩張</div>
            <div class="text-body-2 my-1">
              • 水族館獨家明信片一組（價值210元）
            </div>
          </div>
        </v-col>
        <!-- 選擇區 -->
        <v-col
          cols="3"
          lg="3"
          class="planblocks__choose d-flex justify-end pa-0 py-3"
        >
          <div class="d-none d-lg-block planblocks__discountbtn">
            {{ item.discount }}%OFF
          </div>
          <div class="d-none d-lg-flex flex-column ml-3">
            <div class="d-flex align-center">
              <div class="text-caption mr-2">TWD</div>
              <div class="planblocks__price">{{ item.price }}</div>
            </div>
            <div class="planblocks__delprice text-body-2">
              TWD {{ item.delPrice }}
            </div>
          </div>
          <div class="d-flex flex-column ml-3">
            <!-- Mobile用 (呼叫彈窗) -->
            <v-dialog
              v-model="item.isModal"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="
                    d-block d-lg-none
                    planblocks__chosebtn
                    font-weight-black
                  "
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ item.isModal ? "取消選擇" : "選擇" }}
                </div>
              </template>
              <v-card>
                <ModalHead @close="closeHandler(item, $event)" />
                <ModalDetail />
              </v-card>
            </v-dialog>
            <!-- PC用(向下展開) -->
            <div
              class="d-none d-lg-block planblocks__chosebtn font-weight-black"
              @click="expendHandler(item)"
            >
              {{ item.isExpended ? "取消選擇" : "選擇" }}
            </div>
            <div class="d-none d-lg-flex align-center mt-2">
              <svg-icon iconClass="schedule" className="schedule mr-2" />
              <div class="text-caption planblocks__reservedate">
                最早可預訂日:今日
              </div>
            </div>
          </div>
        </v-col>
      </v-col>
      <!-- 查看更多按鈕 -->
      <v-col
        cols="12"
        class="planblocks__morebox d-block d-lg-none"
        @click="moreHandler(item)"
      >
        <div class="planblocks__morebtn d-flex align-center justify-center">
          <div class="mr-2">查看更多此方案內容</div>
          <svg-icon iconClass="downarrow" className="downarrow" />
        </div>
      </v-col>
      <!-- PC向下展開項目 -->
      <v-col
        cols="12"
        class="planblocks__body pa-0 d-none d-lg-block"
        :class="{ expend: item.isExpended }"
      >
        <v-col cols="12" class="py-0">
          <div class="planblocks__about d-flex align-center text-body-2 pa-3">
            <div class="font-weight-black mr-10">關於此方案</div>
            <div class="d-flex">
              <svg-icon
                iconClass="moneyrecycle"
                className="moneyrecycle mx-1"
              />
              <div>免費取消 !</div>
            </div>
            <div class="d-flex ml-6">
              <svg-icon iconClass="orangeflash" className="orangeflash mx-1" />
              <div>立即確認</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-space-between py-0">
          <v-col cols="12" lg="5">
            <div class="font-weight-black mb-2">選擇日期、選項</div>
            <div class="text-body-2">請選擇使用日期</div>
            <v-date-picker
              v-model="item.date"
              no-title
              scrollable
              color="warning"
              full-width
              locale="zh-tw"
              :day-format="(date) => date.split('-')[2]"
            >
            </v-date-picker>
            <div class="planblocks__divider mt-2 mb-6"></div>
            <TimePicker />
          </v-col>
          <v-col cols="12" lg="6">
            <div class="planblocks__resetbox d-flex justify-end align-center">
              <svg-icon iconClass="reset" className="reset mr-2" />
              <div>全部重選</div>
            </div>
            <!-- 餐點標籤 -->
            <div class="planblocks__optionlabel text-body-2 mb-2 mt-4">
              餐點
            </div>
            <!-- 餐點選項 -->
            <div class="d-flex">
              <div class="planblocks__tribtn text-body-2 mr-2 active">早餐</div>
              <div class="planblocks__tribtn text-body-2 mr-2">下午茶</div>
            </div>
            <!-- 專案選擇標籤 -->
            <div class="planblocks__optionlabel text-body-2 mb-2 mt-4">
              專案選擇
            </div>
            <!-- 專案選擇選項 -->
            <div class="d-flex">
              <div class="planblocks__tribtn text-body-2 mr-2 active">
                一泊一食
              </div>
              <div class="planblocks__tribtn text-body-2 mr-2">景點輕鬆遊</div>
            </div>
            <!-- 數量標籤 -->
            <div class="planblocks__optionlabel text-body-2 mb-2 mt-4">
              選擇數量
            </div>
            <!-- 數量選項 -->
            <div
              v-for="(item, index) in headcountList"
              :key="index"
              class="d-flex align-center justify-space-between my-6"
            >
              <div class="d-flex align-end">
                <div class="text-body-1 font-weight-black mr-1">
                  {{ item.title }}
                </div>
                <div class="text-body-2 planblocks__supplement">
                  ({{ item.label }})
                </div>
              </div>
              <div class="d-flex align-end">
                <div class="planblocks__delprice text-body-2 mr-1">
                  {{ item.deletePrice }}
                </div>
                <div class="planblocks__price text-body-1">
                  TWD {{ item.price }} / 每組
                </div>
                <svg-icon
                  iconClass="reduce"
                  className="reduce mx-2"
                  :class="{ zero: item.count === 0 }"
                  @click="reduceHandler(item)"
                />
                <div class="mx-2">{{ item.count }}</div>
                <svg-icon
                  iconClass="increase"
                  className="increase mx-2"
                  @click="increaseHandler(item)"
                />
              </div>
            </div>
            <div class="planblocks__divider mt-2 mb-6"></div>
            <!-- 總金額 -->
            <div class="d-flex align-center justify-space-between mb-10">
              <div class="planblocks__optionlabel text-body-2">總金額</div>
              <div class="d-flex align-end">
                <div class="text-body-2 mr-2">TWD</div>
                <div class="planblocks__totalprice font-weight-black">720</div>
              </div>
            </div>
            <!-- 加入購物車 & 立即訂購 -->
            <div class="d-flex align-center justify-end">
              <div class="planblocks__addcartbtn ml-4">加入購物車</div>
              <div class="planblocks__buybtn ml-4">立即訂購</div>
            </div>
          </v-col>
        </v-col>
      </v-col>
    </v-col>
  </v-col>
</template>
<script>
import TimePicker from "@/components/productDetail/timePicker/TimePicker";
import ModalHead from "@/components/productDetail/modal/ModalHead";
import ModalDetail from "@/components/productDetail/modal/ModalDetail";

export default {
  name: "PlanBlocks",
  components: { TimePicker, ModalHead, ModalDetail },
  data() {
    return {
      headcountList: [
        {
          id: 0,
          title: "成人",
          label: "7歲以上",
          count: 0,
          price: 720,
          deletePrice: "TWD 810",
        },
        {
          id: 1,
          title: "兒童",
          label: "3-7歲",
          count: 0,
          price: 150,
          deletePrice: "",
        },
        {
          id: 2,
          title: "嬰幼兒",
          label: "0-3歲",
          count: 0,
          price: 150,
          deletePrice: "",
        },
      ],
      planList: [
        {
          id: 0,
          title: "紀念套票: kkday水族館雙人套組",
          isExpended: false,
          isMore: false,
          isModal: false,
          isSold: false,
          price: 720,
          delPrice: 810,
          discount: 28,
          date: "",
        },
        {
          id: 1,
          title: "澎湖水族館門票",
          isExpended: false,
          isMore: false,
          isModal: false,
          isSold: false,
          price: 720,
          delPrice: 810,
          discount: 28,
          date: "",
        },
        {
          id: 2,
          title: "萬聖節幽暗城堡歷險記",
          isExpended: false,
          isMore: false,
          isModal: false,
          isSold: true,
          price: 720,
          delPrice: 810,
          discount: 28,
          date: "",
        },
      ],
    };
  },
  methods: {
    moreHandler(item) {
      item.isMore = !item.isMore;
    },
    expendHandler(item) {
      if (item.isExpended) {
        item.isExpended = !item.isExpended;
      } else {
        this.planList.forEach((plan) => {
          plan.isExpended = false;
        });
        item.isExpended = !item.isExpended;
      }
    },
    closeHandler(item, value) {
      item.isModal = value.status;
    },
    increaseHandler(item) {
      item.count++;
    },
    reduceHandler(item) {
      if (item.count === 0) return;
      item.count--;
    },
  },
};
</script>
<style lang="scss" scoped>
.planblocks__page {
  position: relative;
  .planblocks__title {
    border-left: 3px solid #ff8800;
  }
  .planblocks__planitem {
    height: auto;
    border: 1px solid #afafaf;
    border-radius: 6px;
    .planblocks__header {
      height: auto;
      .planblocks__ticket {
        padding: 0 7px;
        height: 22px;
        line-height: 22px;
        color: #fff;
        margin: 0px 2px;
        border-radius: 4px;
        &.art {
          background: #2548aa;
        }
        &.travel {
          background: #ff2d55;
        }
      }
    }

    .planblocks__discountbtn {
      height: 23px;
      line-height: 23px;
      padding: 1px 4px;
      font-weight: 400;
      color: #fff;
      text-shadow: 0 1px 2px #e18d0e;
      border-radius: 4px 4px 0 4px;
      background: linear-gradient(45deg, #ffaf1e, #ffd56e);
    }
    .planblocks__price {
      color: #ff2d55;
      font-weight: bold;
    }
    .reduce,
    .increase {
      width: 28px;
      height: 28px;
      cursor: pointer;
      &.zero {
        opacity: 0.5;
        pointer-events: none;
      }
    }
    .planblocks__delprice {
      text-decoration: line-through;
      color: grey;
    }
    .planblocks__totalprice {
      color: #ff2d55;
    }
    .planblocks__addcartbtn {
      padding: 8px 12px;
      color: white;
      background: #ff8800;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
    }
    .planblocks__buybtn {
      padding: 8px 12px;
      color: white;
      background: #ff2d55;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
    }
    .planblocks__chosebtn {
      font-size: 0.8rem;
      border: 1px solid #ff8800;
      border-radius: 6px;
      color: #ff8800;
      padding: 8px 8px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: #ff8800;
        color: white;
      }
    }
    .schedule {
      width: 12px;
      height: 12px;
    }
    .planblocks__reservedate {
      color: #6d6c6c;
    }

    .planblocks__description {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
      &.more {
        max-height: 100px;
        overflow: auto;
      }
    }
    /* 查看更多按鈕 */
    .planblocks__morebox {
      cursor: pointer;
      border-top: 1px solid #afafaf;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    .planblocks__body {
      height: 0px;
      overflow: hidden;
      transition: height 0.3s ease-in-out;
      &.expend {
        height: 650px;
        overflow: auto;
      }
      .planblocks__about {
        background: #f5f5f5;
        border-radius: 6px;
        height: 65px;
      }
      .planblocks__divider {
        opacity: 0.5;
        border: 1px solid #707070;
      }
      .planblocks__resetbox {
        cursor: pointer;
        color: #ff8800;
        .reset {
          width: 15px;
          height: 15px;
        }
        &:hover {
          .reset {
            animation: reset 1s infinite ease-in;
          }
        }
      }
      .planblocks__optionlabel {
        color: #555555;
      }
      .planblocks__supplement {
        color: #999999;
      }
      .planblocks__delprice {
        text-decoration: line-through;
        color: #999999;
      }
      .planblocks__price {
        color: #6d6c6c;
      }

      .planblocks__tribtn {
        position: relative;
        padding: 8px 16px;
        border-radius: 2px;
        border: 2px solid #eaeaea;
        color: #555555;
        cursor: pointer;
        &.active {
          color: #fff;
          background: #ff8800;
          &::before {
            position: absolute;
            content: "";
            width: 0;
            height: 0;
            border-color: transparent white;
            border-width: 0 10px 10px 0;
            border-style: solid;
            right: 2px;
            top: 2px;
          }
        }
        &:hover {
          color: #fff;
          background: #ff8800;
          &::before {
            position: absolute;
            content: "";
            width: 0;
            height: 0;
            border-color: transparent white;
            border-width: 0 10px 10px 0;
            border-style: solid;
            right: 2px;
            top: 2px;
          }
        }
      }
    }
  }
}

@keyframes reset {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
