<template>
  <v-container fluid id="checkout__page" class="pa-0">
    <v-container fluid class="custom__toolbar pa-0">
      <v-container class="pa-0">
        <CheckoutTabs />
      </v-container>
    </v-container>
    <v-container class="pt-16">
      <v-row>
        <v-col cols="12">
          <CheckoutCard />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import CheckoutTabs from "@/components/checkout/tabs/CheckoutTabs";

import CheckoutCard from "@/components/checkout/CheckoutCard";

export default {
  name: "CheckOut",
  components: { CheckoutTabs, CheckoutCard },
};
</script>
<style lang="scss" scoped>
#checkout__page {
  background: #f5f5f5;
}
.custom__toolbar {
  position: fixed;
  height: auto;
  background: white;
  width: 100%;
  z-index: 100;
  cursor: pointer;
}
</style>
