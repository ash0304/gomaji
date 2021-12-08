<template>
  <v-col cols="12" class="purchasenotice__page py-10">
    <h2 id="purchasenotice" class="purchasenotice__title mb-3 pl-3">
      購買注意事項
    </h2>
    <v-col cols="12">
      <v-col cols="12" lg="7">
        <div class="purchasenotice__contentbox text-body-2 mt-5">
          ‧ 領有身心障礙手冊者，及陪同人員一名，需出示文件證明免票。
          <br />
          <br />
          ‧ 白沙鄉居民需出示證明免票。
          <br />
          <br />
          ‧ 未滿6歲及以下兒童免票。
          <br />
          <br />
          ‧ 身高未達110公分者免票。
        </div>
      </v-col>
      <v-col cols="12" lg="5"> </v-col>
    </v-col>
  </v-col>
</template>
<script>
export default {
  name: "PurchaseNotice",
};
</script>
<style lang="scss" scoped>
.purchasenotice__page {
  position: relative;
  .purchasenotice__title {
    border-left: 3px solid #ff8800;
  }
  .purchasenotice__contentbox {
    width: 100%;
    padding: 40px;
    background: #ffdbdd;
    border-radius: 6px;
  }
}
</style>
