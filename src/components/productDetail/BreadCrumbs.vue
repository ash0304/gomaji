<template>
  <v-col cols="12 d-none d-lg-block">
    <v-breadcrumbs :items="items" divider=">" class="pa-0">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
          <span :class="item.class">
            {{ item.text }}
          </span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-col>
</template>
<script>
export default {
  name: "BreadCrumbs",
  data() {
    return {
      items: [
        {
          text: "台灣",
          disabled: false,
          href: "test",
          class: "active",
        },
        {
          text: "澎湖",
          disabled: false,
          href: "test",
          class: "active",
        },
        {
          text: "澎湖水族館門票 | 單人門票&雙人優惠套票 | 電子票券",
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
</style>
