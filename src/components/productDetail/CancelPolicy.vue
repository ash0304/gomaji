<template>
  <v-col cols="12" class="cancelpolicy__page py-10">
    <h2 id="cancelpolicy" class="cancelpolicy__title mb-3 pl-3">取消政策</h2>
    <div class="text-body-2">
      <div>免費取消！</div>
      注意：由於站內商品來自全球各地，訂單取消時間將依該供應商所在時區判定。
      <br />
      供應商需 2-5
      個工作天進行取消流程，依照您購買的商品取消政策收取手續費，並於取消流程完成後14
      個工作天內退款。
    </div>
  </v-col>
</template>
<script>
export default {
  name: "CancelPolicy",
};
</script>
<style lang="scss" scoped>
.cancelpolicy__page {
  position: relative;
  .cancelpolicy__title {
    border-left: 3px solid #ff8800;
  }
}
</style>
