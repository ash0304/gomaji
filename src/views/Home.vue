<template>
  <v-container fluid>
    <!-- DropdownBlock -->
    <DropdownBlock />
    <!-- FullBanner -->
    <FullBanner />
    <!-- Search Block -->
    <SearchBlock />
    <!-- Promote Block -->
    <PromoteBlock />
    <!-- CategorySearch Block -->
    <CategorySearch />
    <!-- CategoryBall Block -->
    <CategoryBall />
    <!-- HotCity Block -->
    <HotCityBlock />
    <!-- Recent Browse Block -->
    <RecentBlock />
    <!-- Custom Recommend Block  -->
    <CustomCategoryBlock />
    <CustomCategoryBlock />
    <CustomCategoryBlock />
    <!-- Split Promotion Block -->
    <SplitPromoteBlock />
    <!-- Full Promotion Block -->
    <FullPromoteBlock />
    <!-- Recommend City Block -->
    <RecommendCity />
  </v-container>
</template>

<script>
import DropdownBlock from "@/components/home/DropdownBlock";
import FullBanner from "@/components/home/FullBanner";
import SearchBlock from "@/components/home/SearchBlock";
import CategorySearch from "@/components/home/CategorySearch";
import CategoryBall from "@/components/home/CategoryBall";
import PromoteBlock from "@/components/home/PromoteBlock";
import HotCityBlock from "@/components/home/HotCityBlock";
import RecentBlock from "@/components/home/RecentBlock";
import CustomCategoryBlock from "@/components/home/CustomCategoryBlock.vue";
import SplitPromoteBlock from "@/components/home/SplitPromoteBlock.vue";
import FullPromoteBlock from "@/components/home/FullPromoteBlock.vue";
import RecommendCity from "@/components/home/RecommendCity.vue";

export default {
  name: "Home",
  components: {
    DropdownBlock,
    FullBanner,
    SearchBlock,
    CategorySearch,
    CategoryBall,
    PromoteBlock,
    HotCityBlock,
    RecentBlock,
    CustomCategoryBlock,
    SplitPromoteBlock,
    FullPromoteBlock,
    RecommendCity,
  },
};
</script>
<style CustomCategoryBlocklang="scss" scoped></style>
