<template>
  <div class="history__email__info px-6 py-3 my-3">
    <div class="history__title text-h6 font-weight-black my-4 pl-2">
      電子票據取貨Email
    </div>
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
  name: "EmailInfo",
};
</script>
<style lang="scss" scoped>
.history__email__info {
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
