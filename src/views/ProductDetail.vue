<template>
  <v-container fluid id="productdetail__page" class="pa-0">
    <v-container fluid v-if="showTab" class="custom__toolbar pa-0">
      <v-container class="pa-0">
        <DetailTabs />
      </v-container>
    </v-container>
    <!-- 全版商品圖片輪播 -->
    <v-container fluid class="pa-0 d-block d-lg-none">
      <v-col cols="12" class="pa-0 d-block d-lg-none">
        <ProductCarousel />
      </v-col>
    </v-container>
    <v-container>
      <!-- 麵包屑導覽 -->
      <BreadCrumbs />
      <!-- 非全版且置中商品圖片輪播 -->
      <v-col cols="12" class="d-none d-lg-block px-0">
        <ProductCarousel />
      </v-col>
      <!-- 商品資(名稱、價格、評價、方案選擇) -->
      <v-row>
        <!-- 商品資訊(左側) -->
        <v-col cols="12" lg="8">
          <ProductInfo />
        </v-col>
        <!-- 商品資訊(右側) -->
        <v-col cols="12" lg="4">
          <ProductCard />
        </v-col>
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 細項列表 -->
    <v-container id="detailtabs">
      <v-row>
        <DetailTabs />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 選擇方案 -->
    <v-container id="planblocks">
      <v-row>
        <PlanBlocks />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 商品說明 -->
    <v-container id="productinstruction">
      <v-row>
        <ProductInstruction />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 購買注意事項 -->
    <v-container id="purchasenotice">
      <v-row>
        <PurchaseNotice />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 使用說明 -->
    <v-container id="usedescription">
      <v-row>
        <UseDescription />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 取消政策 -->
    <v-container id="cancelpolicy">
      <v-row>
        <CancelPolicy />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 體驗地點 -->
    <v-container id="experiencelocation">
      <v-row>
        <ExperienceLocation />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 旅客評價 -->
    <v-container id="passengerreviews">
      <v-row>
        <PassengerReviews />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 廣告 -->
    <v-container>
      <v-row>
        <DetailPromoteBlock />
      </v-row>
    </v-container>
    <div class="gap" />
    <!-- 更多推薦行程 -->
    <v-container>
      <v-row>
        <CustomCategoryBlock />
      </v-row>
    </v-container>
    <div class="gap" />
  </v-container>
</template>
<script>
import DetailTabs from "@/components/productDetail/Tabs/DetailTabs";

import BreadCrumbs from "@/components/productDetail/BreadCrumbs";
import ProductCarousel from "@/components/productDetail/ProductCarousel";
import ProductInfo from "@/components/productDetail/ProductInfo";
import ProductCard from "@/components/productDetail/ProductCard";
import PlanBlocks from "@/components/productDetail/PlanBlocks";
import ProductInstruction from "@/components/productDetail/ProductInstruction";
import PurchaseNotice from "@/components/productDetail/PurchaseNotice";
import UseDescription from "@/components/productDetail/UseDescription";
import CancelPolicy from "@/components/productDetail/CancelPolicy";
import ExperienceLocation from "@/components/productDetail/ExperienceLocation";
import PassengerReviews from "@/components/productDetail/PassengerReviews";
import DetailPromoteBlock from "@/components/productDetail/DetailPromoteBlock";

import CustomCategoryBlock from "@/components/home/CustomCategoryBlock.vue";

export default {
  name: "ProductDetail",
  components: {
    DetailTabs,
    BreadCrumbs,
    ProductCarousel,
    ProductInfo,
    ProductCard,
    PlanBlocks,
    ProductInstruction,
    PurchaseNotice,
    UseDescription,
    CancelPolicy,
    ExperienceLocation,
    PassengerReviews,
    DetailPromoteBlock,
    CustomCategoryBlock,
  },
  data() {
    return {
      showTab: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      const here = document.getElementById("detailtabs");

      if (window.scrollY >= here.offsetTop + here.offsetHeight) {
        this.showTab = true;
      } else {
        this.showTab = false;
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>
<style lang="scss" scoped>
.custom__toolbar {
  position: fixed;
  height: auto;
  background: white;
  width: 100%;
  z-index: 100;
  cursor: pointer;
}
#productdetail__page {
  background: #fff;
  .gap {
    width: 100%;
    height: 20px;
    background: #f5f5f5;
  }
}
</style>
