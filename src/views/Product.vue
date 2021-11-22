<template>
  <v-container fluid id="product__page">
    <CategoryBlock />
    <v-container class="px-0">
      <v-row>
        <v-col cols="3">
          <div class="test-content-a">
            <LocationSearch />
          </div>
        </v-col>
        <v-col cols="9">
          <div class="test-content-a">456</div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import CategoryBlock from "@/components/product/CategoryBlock";
import LocationSearch from "@/components/product/LocationSearch";

export default {
  name: "Product",
  components: { CategoryBlock, LocationSearch },
};
</script>
<style lang="scss" scoped>
#product__page {
  background: #f5f5f5;
}
.test-content-a {
  width: 100%;
  /* border: 1px solid pink; */
}
.test-content-b {
  width: 100%;
  border: 1px solid orange;
  /* height: 500px; */
}
</style>
