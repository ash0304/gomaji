<template>
  <div class="cartcard__page">
    <!-- Breadcrumbs -->
    <div class="cartcard__breadcrumbs">
      <v-breadcrumbs :items="items" divider=">" class="pa-0 mb-3">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
            <span :class="item.class">
              {{ item.text }}
            </span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </div>
    <!-- Cart Container -->
    <div class="cartcard__container">
      <!-- head -->
      <div class="cartcard__head pa-3">購物車</div>
      <!-- body -->
      <div class="cartcard__body pa-3">
        <CartItems />
      </div>
      <!-- foot -->
      <div class="cartcard__foot pa-3 pt-0">
        <CartFoot />
      </div>
    </div>
    <div class="cartcard__continue d-flex justify-end">
      <div>繼續購物 ></div>
    </div>
  </div>
</template>
<script>
import CartItems from "@/components/cart/CartItems";
import CartFoot from "@/components/cart/CartFoot";

export default {
  name: "CartCard",
  components: { CartItems, CartFoot },
  data() {
    return {
      items: [
        {
          text: "購物車",
          disabled: false,
          href: "test",
          class: "active",
        },
        {
          text: "填寫付款方式",
          disabled: true,
          href: "test",
          class: "none",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: #ff8800;
}
.none {
  color: #707070;
}

.cartcard__page {
  width: 100%;
  .cartcard__breadcrumbs {
    width: 100%;
    margin: auto;
  }
  .cartcard__container {
    width: 100%;
    margin: auto;
    .cartcard__head {
      background: #ff8800;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      color: white;
      font-weight: bold;
    }
    .cartcard__body {
      background: white;
    }
    .cartcard__foot {
      background: white;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
  .cartcard__continue {
    width: 100%;
    margin: auto;
    color: #ff8800;
    cursor: pointer;
  }
}

@media screen and (min-width: 1264px) {
  .cartcard__page {
    .cartcard__breadcrumbs {
      width: 750px;
    }
    .cartcard__container {
      width: 750px;
    }
    .cartcard__continue {
      width: 750px;
    }
  }
}
</style>
