<template>
  <v-container fluid v-if="showModel" class="py-0">
    <v-row class="cookiecheck" style="z-index: 99">
      <v-col>
        <v-container>
          <v-row>
            <v-col cols="12">
              <h2 class="pb-3">本網站使用cookie</h2>
              <h4>
                點擊「允許所有Cookies」，即表示您同意我們在您的瀏覽器儲存所有Cookies，我們將用於維護網站安全性、改善網站效能、分析使用情形，並用於廣告或行銷。若要調整或查看更多資訊，請點擊「顯示詳情」，或詳見Cookie政策說明。
              </h4>
              <div class="choose__block d-flex justify-start align-center">
                <div class="choose__btnbox d-flex">
                  <div class="choose__btn partallow" @click="handleClose">
                    僅使用必要Cookies
                  </div>
                  <div class="choose__btn allow" @click="handleClose">
                    允許所有Cookies
                  </div>
                </div>
              </div>
              <div
                class="choose__detail__block d-flex justify-end align-center"
              >
                <div
                  class="
                    choose__detail
                    d-flex
                    align-center
                    justify-space-around
                  "
                  @click="handleDetail"
                  :class="{ show: showDetail === true }"
                >
                  <div>顯示詳情</div>
                  <div class="arrow"></div>
                </div>
              </div>
              <div
                class="choose__detailbox"
                :class="{ show: showDetail === true }"
              >
                <!-- 第一層控制項 -->
                <v-tabs color="gray" v-model="tab" grow dark>
                  <v-tab>Cookie聲明</v-tab>
                  <v-tab>關於</v-tab>
                </v-tabs>
                <!-- 第一層頁面組 -->
                <v-tabs-items
                  v-model="tab"
                  color="gray"
                  class="grey darken-1"
                  touchless
                >
                  <!-- 第一層-聲明 -->
                  <v-tab-item>
                    <!-- 第二層控制項 -->
                    <v-tabs vertical color="gray" dark v-model="tab2">
                      <v-tab v-for="n in 5" :key="n"> 必要的(22) </v-tab>
                      <!-- 移走 -->
                      <v-tabs-items
                        v-model="tab2"
                        color="gray"
                        class="grey darken-1"
                        touchless
                      >
                        <v-tab-item v-for="n in 5" :key="n">
                          <v-card
                            flat
                            height="240"
                            class="overflow-y-auto grey darken-3"
                          >
                            <v-card-text>
                              <p style="color: white">
                                必要的cookie能夠通過啟用諸如網頁導航獲訪問網站的安全領域等基本功能已使網站可用,
                                若沒有這些cookie, 網站將無法恰當運行
                              </p>
                              <v-simple-table dark>
                                <template v-slot:default>
                                  <thead>
                                    <tr>
                                      <th class="text-left">姓名</th>
                                      <th class="text-left">供應商</th>
                                      <th class="text-left">目的</th>
                                      <th class="text-left">期滿</th>
                                      <th class="text-left">類別</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      v-for="(item, index) in fakeDate"
                                      :key="index"
                                    >
                                      <td>{{ item.name }}</td>
                                      <td>{{ item.provider }}</td>
                                      <td>{{ item.target }}</td>
                                      <td>{{ item.expire }}</td>
                                      <td>{{ item.type }}</td>
                                    </tr>
                                  </tbody>
                                </template>
                              </v-simple-table>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>
                      </v-tabs-items>
                    </v-tabs>
                    <!-- 第二層頁面組 -->
                  </v-tab-item>
                  <!-- 第一層-關於 -->
                  <v-tab-item class="grey darken-3">
                    <div class="more__info">
                      更多資訊, 請見Cookie政策. 您的同意適用於以下網域: xxx.com,
                      www.xxx.com
                    </div>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CookieCheck",
  data() {
    return {
      showModel: false,
      showDetail: false,
      items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
      tab: null,
      tab2: null,
      fakeDate: [
        {
          name: "GOMAJI",
          provider: "www.gomaji.com",
          target: "給訂ID策是測試策是",
          expire: "1年",
          type: "HTTP",
        },
        {
          name: "GOMAJI",
          provider: "www.gomaji.com",
          target: "給訂ID策是測試策是",
          expire: "1年",
          type: "HTTP",
        },
        {
          name: "GOMAJI",
          provider: "www.gomaji.com",
          target: "給訂ID策是測試策是",
          expire: "1年",
          type: "HTTP",
        },
        {
          name: "GOMAJI",
          provider: "www.gomaji.com",
          target: "給訂ID策是測試策是",
          expire: "1年",
          type: "HTTP",
        },
        {
          name: "GOMAJI",
          provider: "www.gomaji.com",
          target: "給訂ID策是測試策是",
          expire: "1年",
          type: "HTTP",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.showModel = false;
    },
    handleDetail() {
      this.showDetail = !this.showDetail;
    },
  },
};
</script>
<style lang="scss" scoped>
.cookiecheck {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  .choose__block {
    margin: 20px 0px;
    .choose__btnbox {
      font-size: 0.8rem;
      .choose__btn {
        padding: 7px 15px 5px;
        border-radius: 4px;
        margin-right: 20px;
        cursor: pointer;
        &.partallow {
          background: #6d6c6c;
        }
        &.allow {
          background: #26bec9;
        }
      }
    }
  }
  .choose__detail__block {
    margin-bottom: 20px;
    .choose__detail {
      .arrow {
        width: 20px;
        height: 20px;
        background: url("../../assets/home/arrow.png");
        background-size: cover;
        margin-left: 20px;
        transform: rotate(180deg);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
      &.show {
        .arrow {
          transform: rotate(0deg);
        }
      }
    }
  }
  .choose__detailbox {
    max-width: 650px;
    margin: 0px auto 0 auto;
    height: 0;
    transition: height 0.3s ease-in-out;
    overflow: hidden;
    &.show {
      height: 280px;
    }
    .more__info {
      height: 220px;
      padding: 12px;
    }
  }
}
</style>
