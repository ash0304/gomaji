<template>
  <div class="m__filterblock d-block d-lg-none">
    <div class="m__filter__box d-flex flex-nowrap">
      <!-- 篩選 -->
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
            <svg-icon iconClass="fire" className="icon mr-1" />
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
      <!-- 目的地 -->
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
            <svg-icon iconClass="location" className="icon mr-1" />
            <div class="text-body-2">目的地</div>
          </div>
        </template>
        <v-card>
          <ModalHead @close="closeHandler" :title="'目的地'" />
          <LocationSearch />
        </v-card>
      </v-dialog>
      <!-- 所有商品類別 -->
      <v-dialog
        v-model="showProduct"
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
            <svg-icon iconClass="fire" className="icon mr-1" />
            <div class="text-body-2">所有商品類別</div>
          </div>
        </template>
        <v-card>
          <ModalHead @close="closeHandler" :title="'所有商品類別'" />
          <AllProductType />
        </v-card>
      </v-dialog>

      <!-- 出發日期 -->
      <v-dialog
        v-model="showDate"
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
            <svg-icon iconClass="fire" className="icon mr-1" />
            <div class="text-body-2">出發日期</div>
          </div>
        </template>
        <v-card>
          <ModalHead @close="closeHandler" :title="'出發日期'" />
          <ModalDatePick />
        </v-card>
      </v-dialog>

      <!-- 價錢 -->
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
            <svg-icon iconClass="fire" className="icon mr-1" />
            <div class="text-body-2">價錢</div>
          </div>
        </template>
        <v-card>
          <ModalHead @close="closeHandler" :title="'價錢'" />
          <BudgetRange />
        </v-card>
      </v-dialog>
      <!-- 次分類 -->
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
            <svg-icon iconClass="location" className="icon mr-1" />
            <div class="text-body-2">次分類</div>
          </div>
        </template>
        <v-card>
          <ModalHead @close="closeHandler" :title="'次分類'" />
          <SubCategory />
        </v-card>
      </v-dialog>
    </div>
    <div class="m__filter__resultbox d-flex align-center justify-space-between">
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
            <svg-icon iconClass="fire" className="icon mr-1" />
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
  },
  data() {
    return {
      showAll: false,
      showLocation: false,
      showProduct: false,
      showDate: false,
      showBudget: false,
      showSub: false,
    };
  },
  methods: {
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
.m__filter__box {
  position: relative;
  overflow-x: auto;
  .m__filter__btn {
    width: auto;
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid #4d4c4c;
    border-radius: 6px;
    padding: 2px 8px;
    flex: 0 0 auto;
    &.l-size {
      width: auto;
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
    padding: 2px 8px;
    border: 1px solid #4d4c4c;
    border-radius: 6px;
  }
}
.icon {
  width: 14px;
  height: 14px;
}
</style>
