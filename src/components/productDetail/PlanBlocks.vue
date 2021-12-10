<template>
  <v-col cols="12" class="planblocks__page py-10">
    <h2 id="h2__planblocks" class="planblocks__title mb-3 pl-3">選擇方案</h2>
    <v-col
      cols="12"
      v-for="(item, index) in planList"
      :key="index"
      class="planblocks__planitem pa-0"
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
            <div
              class="d-block d-lg-none planblocks__chosebtn font-weight-black"
            >
              取消選擇
            </div>
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
        class="planblocks__body pa-0"
        :class="{ expend: item.isExpended }"
      >
        <v-col cols="12">
          <div class="planblocks__about d-flex align-center text-body-2 pa-3">
            <div class="font-weight-black mr-10">關於此方案</div>
            <div class="d-flex">
              <svg-icon iconClass="fire" className="fire mx-1" />
              <div>免費取消 !</div>
            </div>
            <div class="d-flex ml-6">
              <svg-icon iconClass="fire" className="fire mx-1" />
              <div>立即確認</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12">
          <v-col cols="12" lg="5">
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
          </v-col>
          <v-col cols="12" lg="7"> </v-col>
        </v-col>
      </v-col>
    </v-col>
  </v-col>
</template>
<script>
export default {
  name: "PlanBlocks",
  data() {
    return {
      planList: [
        {
          id: 0,
          title: "紀念套票: kkday水族館雙人套組",
          isExpended: false,
          isMore: false,
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
      item.isExpended = !item.isExpended;
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
    .planblocks__delprice {
      text-decoration: line-through;
      color: grey;
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
      border: 1px solid red;
      height: 0px;
      overflow: hidden;
      &.expend {
        height: auto;
        overflow: auto;
      }
      .planblocks__about {
        background: #f5f5f5;
        border-radius: 6px;
        height: 65px;
      }
    }
  }
}
</style>
