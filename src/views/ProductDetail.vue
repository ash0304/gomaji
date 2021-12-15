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
        <DetailCategoryBlock />
      </v-row>
    </v-container>
    <div class="gap" />
    <div
      v-if="showChose"
      class="bottom__div d-flex d-lg-none align-center px-3"
    >
      <div class="productdetail__lovebox d-flex justify-center align-center">
        <svg-icon iconClass="love_line" className="love_line" />
      </div>
      <div class="productdetail__chosebtn" @click="scrollToTarget">
        選擇方案
      </div>
    </div>
  </v-container>
</template>
<script>
import DetailTabs from "@/components/productDetail/tabs/DetailTabs";

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
import DetailCategoryBlock from "@/components/productDetail/DetailCategoryBlock.vue";

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
    DetailCategoryBlock,
  },
  data() {
    return {
      showTab: false,
      showChose: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.scrollHandler);
    document.addEventListener("scroll", this.scrollHandler2);
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
    scrollHandler2() {
      const here = document.getElementById("planblocks");

      if (window.scrollY >= here.offsetTop + here.offsetHeight) {
        this.showChose = true;
      } else {
        this.showChose = false;
      }
    },
    scrollToTarget() {
      const targetView = document.getElementById("h2__planblocks");
      targetView.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollHandler);
    document.removeEventListener("scroll", this.scrollHandler2);
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
  .bottom__div {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.43);
    .productdetail__lovebox {
      width: 10%;
      .love_line {
        width: 20px;
        height: 20px;
      }
    }
    .productdetail__chosebtn {
      width: 90%;
      border-radius: 2px;
      padding: 8px 12px;
      background: #ff8800;
      color: white;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
