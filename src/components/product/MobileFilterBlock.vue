<template>
  <div class="m__filterblock d-block d-lg-none">
    <!-- test -->
    <carousel
      id="filterblock__carousel"
      :responsive="responsiveObj"
      :dots="false"
      :nav="false"
      @drag="dragHandler"
    >
      <!-- 篩選 -->
      <div class="filterblock__slider" :class="{ prevent: isDragging }">
        <v-dialog
          v-model="showAll"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              class="m__filter__btn d-flex align-center justify-center"
              v-bind="attrs"
              v-on="on"
            >
              <svg-icon iconClass="filterPlus" className="icon mr-1" />
              <div class="text-body-2">篩選</div>
            </div>
          </template>
          <v-card>
            <ModalHead @close="closeHandler" :title="'篩選'" />
            <LocationSearch />
            <ModalCateTitle :title="'所有商品類別'" />
            <AllProductType />
            <ModalCateTitle :title="'出發日期'" />
            <ModalDatePick />
            <ModalCateTitle :title="'導覽語言'" />
            <TourLanguage />
            <ModalCateTitle :title="'價錢'" />
            <BudgetRange />
            <ModalCateTitle :title="'次分類'" />
            <SubCategory />
          </v-card>
        </v-dialog>
      </div>
      <!-- 目的地 -->
      <div class="filterblock__slider s-size" :class="{ prevent: isDragging }">
        <v-dialog
          v-model="showLocation"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              class="m__filter__btn d-flex align-center justify-center"
              v-bind="attrs"
              v-on="on"
            >
              <svg-icon iconClass="blacklocation" className="icon mr-1" />
              <div class="text-body-2">目的地</div>
            </div>
          </template>
          <v-card>
            <ModalHead @close="closeHandler" :title="'目的地'" />
            <LocationSearch />
          </v-card>
        </v-dialog>
      </div>

      <!-- 所有商品類別 -->
      <div class="filterblock__slider l-size" :class="{ prevent: isDragging }">
        <v-dialog
          v-model="showProduct"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              class="m__filter__btn d-flex align-center justify-center"
              v-bind="attrs"
              v-on="on"
            >
              <svg-icon iconClass="filter" className="icon mr-1" />
              <div class="text-body-2">所有商品類別</div>
            </div>
          </template>
          <v-card>
            <ModalHead @close="closeHandler" :title="'所有商品類別'" />
            <AllProductType />
          </v-card>
        </v-dialog>
      </div>

      <!-- 出發日期 -->
      <div class="filterblock__slider m-size" :class="{ prevent: isDragging }">
        <v-dialog
          v-model="showDate"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              class="m__filter__btn d-flex align-center justify-center"
              v-bind="attrs"
              v-on="on"
            >
              <svg-icon iconClass="blackschedule" className="icon mr-1" />
              <div class="text-body-2">出發日期</div>
            </div>
          </template>
          <v-card>
            <ModalHead @close="closeHandler" :title="'出發日期'" />
            <ModalDatePick />
          </v-card>
        </v-dialog>
      </div>

      <!-- 導覽語言 -->
      <div class="filterblock__slider m-size" :class="{ prevent: isDragging }">
        <v-dialog
          v-model="showLanguage"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              class="m__filter__btn d-flex align-center justify-center"
              v-bind="attrs"
              v-on="on"
            >
              <svg-icon iconClass="language" className="icon mr-1" />
              <div class="text-body-2">導覽語言</div>
            </div>
          </template>
          <v-card>
            <ModalHead @close="closeHandler" :title="'導覽語言'" />
            <TourLanguage />
          </v-card>
        </v-dialog>
      </div>

      <!-- 價錢 -->
      <div class="filterblock__slider" :class="{ prevent: isDragging }">
        <v-dialog
          v-model="showBudget"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              class="m__filter__btn d-flex align-center justify-center l-size"
              v-bind="attrs"
              v-on="on"
            >
              <svg-icon iconClass="price" className="icon mr-1" />
              <div class="text-body-2">價錢</div>
            </div>
          </template>
          <v-card>
            <ModalHead @close="closeHandler" :title="'價錢'" />
            <BudgetRange />
          </v-card>
        </v-dialog>
      </div>
      <!-- 次分類 -->
      <div class="filterblock__slider s-size" :class="{ prevent: isDragging }">
        <v-dialog
          v-model="showSub"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <div
              class="m__filter__btn d-flex align-center justify-center"
              v-bind="attrs"
              v-on="on"
            >
              <svg-icon iconClass="filter" className="icon mr-1" />
              <div class="text-body-2">次分類</div>
            </div>
          </template>
          <v-card>
            <ModalHead @close="closeHandler" :title="'次分類'" />
            <SubCategory />
          </v-card>
        </v-dialog>
      </div>
    </carousel>
    <!-- 搜尋結果 & 排序 -->
    <div
      class="
        m__filter__resultbox
        d-flex
        align-center
        justify-space-between
        px-3
        pt-3
      "
    >
      <div class="d-flex align-center justify-center">
        <div class="m__filter__resultnumber font-weight-black mr-1">3914</div>
        <div class="font-weight-black">項搜尋結果</div>
      </div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div
            class="d-flex align-center justify-center m__filter__sortbtn"
            v-bind="attrs"
            v-on="on"
          >
            <svg-icon iconClass="sort" className="icon mr-1" />
            <div class="text-body-2">排序</div>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n">
            <v-list-item-title>{{ `更多排序 ${n}` }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<script>
import ModalHead from "@/components/product/modal/ModalHead";
import ModalCateTitle from "@/components/product/modal/ModalCateTitle";
import ModalDatePick from "@/components/product/modal/ModalDatePick";
import AllProductType from "@/components/product/AllProductType";
import LocationSearch from "@/components/product/LocationSearch";
import TourLanguage from "@/components/product/TourLanguage";
import BudgetRange from "@/components/product/BudgetRange";
import SubCategory from "@/components/product/SubCategory";

import carousel from "vue-owl-carousel";

export default {
  name: "MobileFilterBlock",
  components: {
    ModalHead,
    ModalCateTitle,
    ModalDatePick,
    LocationSearch,
    AllProductType,
    TourLanguage,
    BudgetRange,
    SubCategory,
    carousel,
  },
  data() {
    return {
      isDragging: false,
      showAll: false,
      showLocation: false,
      showProduct: false,
      showDate: false,
      showLanguage: false,
      showBudget: false,
      showSub: false,
      responsiveObj: {
        0: { items: 6, dots: false, autoWidth: true },
        600: { items: 6, dots: false, autoWidth: true },
        960: { items: 6, dots: false, autoWidth: true },
        1264: { items: 6, dots: false, autoWidth: true },
      },
    };
  },
  methods: {
    dragHandler() {
      this.isDragging = true;
      setTimeout(() => {
        this.isDragging = false;
      }, 50);
    },
    closeHandler(value) {
      switch (value.title) {
        case "篩選":
          this.showAll = value.status;
          break;
        case "目的地":
          this.showLocation = value.status;
          break;
        case "所有商品類別":
          this.showProduct = value.status;
          break;
        case "出發日期":
          this.showDate = value.status;
          break;
        case "導覽語言":
          this.showLanguage = value.status;
          break;
        case "價錢":
          this.showBudget = value.status;
          break;
        case "次分類":
          this.showSub = value.status;
          break;
        default:
          return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#filterblock__carousel {
  position: relative;
  .filterblock__slider {
    width: 80px;
    .m__filter__btn {
      margin-right: 5px;
      margin-bottom: 5px;
      border: 0.5px solid #333;
      border-radius: 6px;
      padding: 2px 8px;
      flex: 0 0 auto;
      background: #fff;
    }
    &.s-size {
      width: 90px;
    }
    &.m-size {
      width: 110px;
    }
    &.l-size {
      width: 140px;
    }
    &.prevent {
      pointer-events: none;
    }
  }
}

.m__filter__resultbox {
  padding: 8px 0px;
  .m__filter__resultnumber {
    color: #ff8800;
  }
  .m__filter__sortbtn {
    width: auto;
    background: #fff;
    padding: 2px 8px;
    border: 0.5px solid #333;
    border-radius: 6px;
  }
}
.icon {
  width: 14px;
  height: 14px;
}
</style>
