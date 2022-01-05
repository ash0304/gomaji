<template>
  <div class="history__orderer__info px-6 py-3 my-3">
    <div class="history__title text-h6 font-weight-black my-4 pl-2">
      訂購人資料
    </div>
    <v-row>
      <v-col cols="4" sm="4" md="4" lg="4">
        <div class="history__label text-body-2 mb-2">名字</div>
        <div class="history__value">小明</div>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4">
        <div class="history__label text-body-2 mb-2">姓氏</div>
        <div class="history__value">王</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" sm="4" md="4" lg="4">
        <div class="history__label text-body-2 mb-2">國家/地區</div>
        <div class="history__value">台灣</div>
      </v-col>
      <v-col cols="8" sm="8" md="8" lg="8">
        <div class="history__label text-body-2 mb-2">連絡電話</div>
        <div class="history__value">+886 0912345678</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" sm="6" md="6" lg="6">
        <div class="history__label text-body-2 mb-2">電子郵件信箱</div>
        <div class="history__value">example@gmail.com</div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "OrdererInfo",
};
</script>
<style lang="scss" scoped>
.history__orderer__info {
  background: #fff;
  border-radius: 5px;
  .history__title {
    border-left: 3px solid #ff8800;
    color: #444444;
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
}
</style>
