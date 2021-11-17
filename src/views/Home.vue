<template>
  <v-container fluid>
    <!-- Collaborate -->
    <CollaborateBlock />
    <!-- DropdownBlock -->
    <DropdownBlock />
    <!-- Search Block -->
    <SearchBlock />
    <!-- CategorySearch Block -->
    <CategorySearch />
    <!-- Promote Block -->
    <PromoteBlock />
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
  </v-container>
</template>

<script>
import CollaborateBlock from "@/components/home/CollaborateBlock";
import DropdownBlock from "@/components/home/DropdownBlock";
import SearchBlock from "@/components/home/SearchBlock";
import CategorySearch from "@/components/home/CategorySearch";
import PromoteBlock from "@/components/home/PromoteBlock";
import HotCityBlock from "@/components/home/HotCityBlock";
import RecentBlock from "@/components/home/RecentBlock";
import CustomCategoryBlock from "@/components/home/CustomCategoryBlock.vue";
import SplitPromoteBlock from "@/components/home/SplitPromoteBlock.vue";
import FullPromoteBlock from "@/components/home/FullPromoteBlock.vue";

export default {
  name: "Home",
  components: {
    CollaborateBlock,
    DropdownBlock,
    SearchBlock,
    CategorySearch,
    PromoteBlock,
    HotCityBlock,
    RecentBlock,
    CustomCategoryBlock,
    SplitPromoteBlock,
    FullPromoteBlock,
  },
};
</script>
<style CustomCategoryBlocklang="scss" scoped></style>
