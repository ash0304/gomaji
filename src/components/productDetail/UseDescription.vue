<template>
  <v-col cols="12" class="usedescription__page py-10">
    <h2 id="h2__usedescription" class="usedescription__title mb-3 pl-3">
      使用說明
    </h2>
    <div class="text-body-2">
      憑證使用方式
      <br />
      • 現場請出示 QR code
      <br />
      • 於現場出示電子 QR code 憑證供人員掃碼，依購票人數入場。
      <br />
      <br />

      憑證兌換期限
      <br />
      • 需要按照預訂日期及當天開放時間內兌換，逾期失效
      <br />
      • 如需退票可免手續費取消。
      <br />
      <br />

      使用期限
      <br />
      • 需要按照預訂日期及當天開放時間內使用，逾期失效
      <br />
      • 如需退票可免手續費取消。
      <br />
    </div>
  </v-col>
</template>
<script>
export default {
  name: "UseDescription",
};
</script>
<style lang="scss" scoped>
.usedescription__page {
  position: relative;
  .usedescription__title {
    border-left: 3px solid #ff8800;
  }
}
</style>
