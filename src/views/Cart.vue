<template>
  <v-container fluid id="cart__page">
    <v-container>
      <v-row>
        <v-col cols="12">
          <CartCard />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import CartCard from "@/components/cart/CartCard";

export default {
  name: "Cart",
  components: { CartCard },
};
</script>
<style lang="scss" scoped>
#cart__page {
  background: #f5f5f5;
}
</style>
