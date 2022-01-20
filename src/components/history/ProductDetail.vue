<template>
  <div class="history__container py-3">
    <v-row>
      <!-- Img -->
      <v-col cols="3" sm="2" md="2" lg="2" class="pr-0">
        <div class="history__imgbox">
          <div class="history__img"></div>
        </div>
        <div class="d-flex align-center justify-center mt-3">
          <v-dialog
            v-model="item.dialog"
            :fullscreen="screenView"
            :width="width"
            transition="dialog-bottom-transition"
            content-class="map__modal"
          >
            <template v-slot:activator="{ on, attrs }">
              <div
                class="
                  history__judgebtn
                  text-caption
                  d-flex
                  justify-center
                  align-center
                "
                v-bind="attrs"
                v-on="on"
              >
                <div>我要評論</div>
              </div>
            </template>
            <!-- 彈窗內容 -->
            <v-card>
              <div class="d-flex justify-end pa-6">
                <svg-icon
                  iconClass="modalClose"
                  className="modalClose"
                  @click="item.dialog = false"
                />
              </div>
              <div class="d-flex flex-column align-center pa-6">
                <div>商品名稱</div>
                <div class="font-weight-black my-3">首爾市區 | 機票 & 租車</div>
                <div class="history__judgeimg my-6"></div>
                <v-rating
                  v-model="item.rating"
                  background-color="#ff8800"
                  color="#ff8800"
                  dense
                  hover
                  half-increments
                  length="5"
                  :size="25"
                ></v-rating>
                <v-col cols="12" class="px-3 px-lg-12">
                  <v-textarea
                    v-model="item.textarea"
                    outlined
                    dense
                    single-line
                    placeholder="請輸入留言評價文字"
                  ></v-textarea>
                </v-col>
                <div
                  class="history__confirmbtn d-flex align-center justify-center"
                  @click="item.dialog = false"
                >
                  <div>確認</div>
                </div>
              </div>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
      <!-- Info -->
      <v-col cols="9" sm="10" md="10" lg="7">
        <div class="history__infobox">
          <div class="d-flex mb-1">
            <div class="text-sm-body-1 text-caption main text-no-wrap mr-1">
              名稱
            </div>
            <span class="history__bold text-sm-body-1 text-caption">
              {{ item.name }}
            </span>
          </div>
          <div class="d-flex mb-1">
            <div class="text-sm-body-1 text-caption main text-no-wrap mr-1">
              方案
            </div>
            <span class="history__bold text-sm-body-1 text-caption">
              {{ item.plan }}
            </span>
          </div>
          <div class="d-flex flex-wrap mb-1">
            <div v-if="item.date" class="d-flex align-start">
              <svg-icon iconClass="calendar" className="calendar mx-1" />
              <div class="text-sm-body-1 text-caption">{{ item.date }}</div>
            </div>
            <div v-if="item.time" class="d-flex align-start">
              <svg-icon iconClass="time" className="time mx-1" />
              <div class="text-sm-body-1 text-caption">{{ item.time }}</div>
            </div>
            <div v-if="item.shopping" class="d-flex align-start">
              <svg-icon iconClass="shopping" className="shopping mx-1" />
              <div class="text-sm-body-1 text-caption">
                個 x {{ item.shopping }}
              </div>
            </div>
            <div v-if="item.aldult" class="d-flex align-start">
              <svg-icon iconClass="person" className="person mx-1" />
              <div class="text-sm-body-1 text-caption">
                成人 x {{ item.aldult }}
              </div>
            </div>
            <div v-if="item.car" class="d-flex align-start">
              <svg-icon iconClass="car" className="car mx-1" />
              <div class="text-sm-body-1 text-caption">輛 x {{ item.car }}</div>
            </div>
          </div>
          <div class="d-flex justify-space-between">
            <div
              class="history__expandbtn d-flex align-center"
              @click="expandHandler(item)"
            >
              <div class="text-body-1 font-weight-black">商品明細</div>
              <svg-icon iconClass="downarrow" className="downarrow mx-3" />
            </div>
            <div class="history__pricebox d-flex d-lg-none align-center">
              <div class="d-flex font-weight-bold">
                <div class="history__currency text-subtitle-1 font-weight-bold">
                  TWD
                </div>
                <div
                  class="history__price text-subtitle-1 font-weight-bold ml-2"
                >
                  {{ item.price }}
                </div>
              </div>
            </div>
          </div>
          <!-- 摺疊區 -->
          <div
            class="history__detailbox pl-2"
            :class="{ expand: item.isExpand }"
          >
            <!-- 一般資訊 -->
            <div v-if="!item.isSeoul" class="history__detail__info py-3">
              <div v-if="item.day" class="d-flex mb-1">
                <div class="text-caption">天數:</div>
                <div class="text-caption">{{ item.day }}</div>
              </div>
              <div v-if="item.receive" class="d-flex mb-1">
                <div class="text-caption">取件地:</div>
                <div class="text-caption">{{ item.receive }}</div>
              </div>
              <div v-if="item.return" class="d-flex mb-1">
                <div class="text-caption">還件地:</div>
                <div class="text-caption">{{ item.return }}</div>
              </div>
            </div>
            <!-- 寄送資料 -->
            <div v-if="!item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                寄送資料
              </div>
              <v-row>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">名字</div>
                  <div class="history__value text-caption">小明</div>
                </v-col>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">姓氏</div>
                  <div class="history__value text-caption">王</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">國家/地區</div>
                  <div class="history__value text-caption">台灣</div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">收件城市</div>
                  <div class="history__value text-caption">台北市</div>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">郵遞區號</div>
                  <div class="history__value text-caption">123</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">詳細地址</div>
                  <div class="history__value text-caption">
                    台北市XX區XX路123號1樓
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">連絡電話</div>
                  <div class="history__value text-caption">+886 12345678</div>
                </v-col>
              </v-row>
            </div>
            <!-- 旅客代表人 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                旅客代表人
              </div>
              <v-row>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">國家/地區</div>
                  <div class="history__value text-caption">台灣</div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">出生日期</div>
                  <div class="history__value text-caption">1999-01-01</div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">性別</div>
                  <div class="history__value text-caption">男性</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" sm="2" md="2" lg="2">
                  <div class="history__label text-caption">本國名</div>
                  <div class="history__value text-caption">小明</div>
                </v-col>
                <v-col cols="4" sm="2" md="2" lg="2">
                  <div class="history__label text-caption">本國姓</div>
                  <div class="history__value text-caption">王</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">台灣身份證字號</div>
                  <div class="history__value text-caption">A123456789</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">旅客身高</div>
                  <div class="history__value text-caption">175 CM</div>
                </v-col>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">旅客體重</div>
                  <div class="history__value text-caption">70 KG</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">眼鏡度數</div>
                  <div class="history__value text-caption">500</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">選擇餐食</div>
                  <div class="history__value text-caption">葷食</div>
                </v-col>
              </v-row>
            </div>
            <!-- 導覽語言 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                導覽語言
              </div>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">行程導覽語言</div>
                  <div class="history__value text-caption">中文</div>
                </v-col>
              </v-row>
            </div>
            <!-- 離開班機資訊 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                離開班機資訊
              </div>
              <v-row>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">航班類型</div>
                  <div class="history__value text-caption">直達航班</div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">出發機場</div>
                  <div class="history__value text-caption">桃園國際機場</div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">航廈</div>
                  <div class="history__value text-caption">第一航廈</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">航空公司</div>
                  <div class="history__value text-caption">華航</div>
                </v-col>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">航班編號</div>
                  <div class="history__value text-caption">CI123</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">航班出發時間</div>
                  <div class="history__value text-caption">
                    2022-01-01 12 時 30 分
                  </div>
                </v-col>
              </v-row>
            </div>
            <!-- 接送資料 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                接送資料
              </div>
              <v-row>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">接送日期</div>
                  <div class="history__value text-caption">2022-01-01</div>
                </v-col>
                <v-col cols="4" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">接送時間</div>
                  <div class="history__value text-caption">14:00</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">上車地點</div>
                  <div class="history__value text-caption">桃園國際機場</div>
                </v-col>
              </v-row>
            </div>
            <!-- 租車資料 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                租車資料
              </div>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">取車地點</div>
                  <div class="history__value text-caption">仁川國際機場</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">取車日期及時間</div>
                  <div class="history__value text-caption">
                    2022-01-01 16時 30分
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">
                    是否需要免費Wifi機
                  </div>
                  <div class="history__value text-caption">需要</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">是否需要免費GPS</div>
                  <div class="history__value text-caption">需要</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">還車地點</div>
                  <div class="history__value text-caption">仁川國際機場</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">還車日期及時間</div>
                  <div class="history__value text-caption">
                    2022-01-10 16時 30分
                  </div>
                </v-col>
              </v-row>
            </div>
            <!-- 乘客資料 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                乘客資料
              </div>
              <div class="history__label text-caption my-1">乘客數量</div>
              <v-row>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">
                    成人(18 - 99 歲)
                  </div>
                  <div class="history__value text-caption">1</div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">孩童(6 -17 歲)</div>
                  <div class="history__value text-caption">0</div>
                </v-col>
                <v-col cols="6" sm="4" md="4" lg="4">
                  <div class="history__label text-caption">
                    嬰幼兒(0 - 5 歲)
                  </div>
                  <div class="history__value text-caption">0</div>
                </v-col>
              </v-row>
              <div class="history__label text-caption my-1">行李數量</div>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">
                    手提行李(20吋以下)
                  </div>
                  <div class="history__value text-caption">1</div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">
                    手提行李(21吋以上)
                  </div>
                  <div class="history__value text-caption">0</div>
                </v-col>
              </v-row>
              <div class="history__label text-caption my-1">兒童座椅數量</div>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">店家提供</div>
                  <div class="history__value text-caption">0</div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">自備座椅</div>
                  <div class="history__value text-caption">0</div>
                </v-col>
              </v-row>
              <div class="history__label text-caption my-1">嬰兒座椅數量</div>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">店家提供</div>
                  <div class="history__value text-caption">0</div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">自備座椅</div>
                  <div class="history__value text-caption">0</div>
                </v-col>
              </v-row>
            </div>
            <!-- 寄送資料 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                寄送資料
              </div>
              <v-row>
                <v-col cols="4" sm="2" md="2" lg="2">
                  <div class="history__label text-caption">收件人名</div>
                  <div class="history__value text-caption">小明</div>
                </v-col>
                <v-col cols="4" sm="2" md="2" lg="2">
                  <div class="history__label text-caption">收件人姓</div>
                  <div class="history__value text-caption">王</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">連絡電話</div>
                  <div class="history__value text-caption">+886 12345678</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">寄送飯店名稱</div>
                  <div class="history__value text-caption">
                    首爾威斯汀朝鮮酒店
                  </div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">飯店電話</div>
                  <div class="history__value text-caption">+82 2-771-0500</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">飯店地址</div>
                  <div class="history__value text-caption">
                    Sogong-ro, 106 Jung-gu, Seoul, 南韓8
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">
                    訂房人英文名(同護照)
                  </div>
                  <div class="history__value text-caption">XIAO-MING</div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">
                    訂房人英文姓(同護照)
                  </div>
                  <div class="history__value text-caption">WANG</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">訂房人名</div>
                  <div class="history__value text-caption">小明</div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">訂房人姓</div>
                  <div class="history__value text-caption">王</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">訂房網站</div>
                  <div class="history__value text-caption">Booking.com</div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">訂房編號</div>
                  <div class="history__value text-caption">123456</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">入住日期</div>
                  <div class="history__value text-caption">2021-01-01</div>
                </v-col>
                <v-col cols="6" sm="6" md="6" lg="6">
                  <div class="history__label text-caption">退房日期</div>
                  <div class="history__value text-caption">2021-01-01</div>
                </v-col>
              </v-row>
            </div>
            <!-- 旅遊期間聯絡方式 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                旅遊期間聯絡方式
              </div>
              <v-row>
                <v-col cols="4" sm="2" md="2" lg="2">
                  <div class="history__label text-caption">聯絡人名</div>
                  <div class="history__value text-caption">小明</div>
                </v-col>
                <v-col cols="4" sm="2" md="2" lg="2">
                  <div class="history__label text-caption">聯絡人姓</div>
                  <div class="history__value text-caption">王</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">
                    旅遊期間連絡電話
                  </div>
                  <div class="history__value text-caption">+886 12345678</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption">
                    旅遊期間連絡電話
                  </div>
                  <div class="history__value text-caption">LINE 0912345678</div>
                </v-col>
              </v-row>
            </div>
            <!-- 訂單備註 -->
            <div v-if="item.isSeoul" class="history__detail__info py-3">
              <div class="history__title text-body-2 font-weight-black my-4">
                訂單備註
              </div>
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="12">
                  <div class="history__label text-caption"></div>
                  <div class="history__value text-caption">無</div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </v-col>
      <!-- price -->
      <v-col cols="0" sm="0" md="0" lg="3" class="d-none d-lg-block">
        <div class="history__pricebox d-flex align-start justify-end">
          <div class="d-flex font-weight-bold">
            <div class="history__currency text-subtitle-1 font-weight-bold">
              TWD
            </div>
            <div class="history__price text-subtitle-1 font-weight-bold ml-2">
              {{ item.price }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ProductDetail",
  // 展開顯示目前只用外層傳進來的item.isSeoul判斷是否顯示，請根據需求調整
  props: {
    item: {
      require: true,
      type: Object,
    },
  },
  methods: {
    expandHandler(item) {
      item.isExpand = !item.isExpand;
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
.history__container {
  border-bottom: 1px solid #aeaeae;
  .history__imgbox {
    .history__img {
      width: 100%;
      height: 64px;
      background: blueviolet;
      border-radius: 6px;
    }
  }
  .history__judgebtn {
    padding: 4px 8px;
    background: #ff8800;
    cursor: pointer;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
  }
  .history__infobox {
    .main {
      color: #ff8800;
      font-weight: bold;
    }
    .history__bold {
      font-weight: bold;
    }
  }
  .history__expandbtn {
    cursor: pointer;
    .downarrow {
      width: 12px;
      height: 5px;
    }
  }
  .history__pricebox {
    height: 100%;
    .history__currency {
      color: black;
    }
    .history__price {
      color: #ff2d55;
    }
  }
  .history__detailbox {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.7s ease-in-out;
    &.expand {
      max-height: 3000px;
    }
    .history__detail__info {
      border-bottom: 1px solid #afafaf;
      &:last-child {
        border-bottom: none;
      }
      .history__label {
        color: #6d6c6c;
      }
      .history__value {
        color: #333333;
      }
    }
  }
}

.history__judgeimg {
  width: 178px;
  height: 120px;
  background: purple;
  border-radius: 4px;
}
.modalClose {
  width: 10px;
  height: 10px;
  cursor: pointer;
}
.history__confirmbtn {
  background: #ff2d55;
  color: #fff;
  width: 150px;
  height: 44px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 12px;
}

@media screen and (max-width: 600px) {
  .history__container {
    .history__imgbox {
      .history__img {
        height: 48px;
      }
    }
  }
}
</style>
