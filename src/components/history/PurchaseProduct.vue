<template>
  <div class="history__purchase__product px-6 py-3 my-3">
    <div class="history__title text-h6 font-weight-black my-4 pl-2">
      購買商品
    </div>
    <ProductDetail
      v-for="(item, index) in productItem"
      :key="index"
      :item="item"
    />
  </div>
</template>
<script>
import ProductDetail from "@/components/history/ProductDetail";

export default {
  name: "PurchaseProduct",
  components: { ProductDetail },
  data() {
    return {
      productItem: [
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
          isSeoul: false,
          isExpand: false,
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
          isSeoul: false,
          isExpand: false,
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
          isSeoul: true,
          isExpand: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.history__purchase__product {
  background: #fff;
  border-radius: 5px;
  .history__title {
    border-left: 3px solid #ff8800;
    color: #444444;
  }
}
</style>
