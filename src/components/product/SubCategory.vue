<template>
  <div class="subcategory__block">
    <v-list>
      <template v-for="(item, index) in items">
        <v-list-group :key="index" no-action :color="'#ff8800'">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
            :color="'#ff8800'"
            class="subcategory__item pl-3"
          >
            <v-checkbox
              :color="'#ff8800'"
              class="subcategory__checkbox"
              :ripple="false"
            ></v-checkbox>
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "SubCategory",
  data() {
    return {
      items: [
        {
          items: [
            {
              title: "Aa",
            },
            {
              title: "Bb",
            },
            {
              title: "Cc",
            },
          ],
          title: "次分類",
          value: false,
        },
      ],
    };
  },
  methods: {
    onTest() {},
  },
};
</script>
<style lang="scss" scoped>
.subcategory__block {
  background: #fff;
  border-radius: 6px;
  .subcategory__checkbox {
    height: 30px;
    position: relative;
    top: -8px;
  }
  .subcategory__item {
    border-bottom: 1px solid #eee;
    &:hover {
      background: #f5f5f5;
      cursor: default;
    }
  }
}
</style>
