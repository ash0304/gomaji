<template>
  <v-container fluid id="product__page">
    <SearchProductInput />
    <CategoryBlock />
    <v-container class="px-3">
      <v-row>
        <v-col cols="12" lg="3" class="pb-0 px-0 pt-3 pt-lg-3">
          <Frame :title="'篩選目的地'">
            <LocationSearch />
          </Frame>
          <Frame :title="'所有商品類別'">
            <AllProductType />
          </Frame>
          <Frame>
            <DatePickBlock />
          </Frame>
          <Frame>
            <TourLanguage />
          </Frame>
          <Frame :title="'價錢(TWD)'">
            <BudgetRange />
          </Frame>
          <Frame>
            <JourneyTime />
          </Frame>
          <Frame>
            <SubCategory />
          </Frame>
          <Frame>
            <MapBlock @changeMode="changeMode" />
          </Frame>
          <Frame>
            <ListModeBlock @changeMode="changeMode" />
          </Frame>
          <MobileFilterBlock @changeMode="changeMode" />
        </v-col>
        <v-col cols="12" lg="9" class="px-0 px-lg-3">
          <ChipsBlock />
          <!-- 自行判斷顯示 -->
          <template v-if="searchMode === 'List'">
            <CantFindBlock />
            <ProductBlock />
          </template>
          <template v-else>
            <MapGuideBlock />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
// Frame
import Frame from "@/components/product/frame/Frame";

// Left (PC)
import SearchProductInput from "@/components/product/SearchProductInput";
import CategoryBlock from "@/components/product/CategoryBlock";
import LocationSearch from "@/components/product/LocationSearch";
import AllProductType from "@/components/product/AllProductType";
import DatePickBlock from "@/components/product/DatePickBlock";
import TourLanguage from "@/components/product/TourLanguage";
import BudgetRange from "@/components/product/BudgetRange";
import JourneyTime from "@/components/product/JourneyTime";
import SubCategory from "@/components/product/SubCategory";
import MapBlock from "@/components/product/MapBlock";
import ListModeBlock from "@/components/product/ListModeBlock";
import MobileFilterBlock from "@/components/product/MobileFilterBlock";
// Left(Mobile)

// Right
import ChipsBlock from "@/components/product/ChipsBlock";
import ProductBlock from "@/components/product/ProductBlock";
import MapGuideBlock from "@/components/product/MapGuideBlock";
import CantFindBlock from "@/components/product/CantFindBlock";

export default {
  name: "Product",
  components: {
    Frame,
    SearchProductInput,
    CategoryBlock,
    LocationSearch,
    AllProductType,
    DatePickBlock,
    TourLanguage,
    BudgetRange,
    JourneyTime,
    SubCategory,
    MapBlock,
    ListModeBlock,
    MobileFilterBlock,
    ChipsBlock,
    ProductBlock,
    MapGuideBlock,
    CantFindBlock,
  },
  data() {
    return {
      // List or Map
      searchMode: "List",
    };
  },
  methods: {
    changeMode(mode) {
      this.searchMode = mode;
    },
  },
};
</script>
<style lang="scss" scoped>
#product__page {
  background: #f5f5f5;
}
</style>
