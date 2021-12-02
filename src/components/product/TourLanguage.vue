<template>
  <div class="tourlan__block">
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
            class="tourlan__lanitem"
          >
            <v-checkbox
              :color="'#ff8800'"
              class="tourlan__checkbox"
              :ripple="false"
            ></v-checkbox>
            <v-list-item-content>
              <v-list-item-title
                v-text="child.title"
                class="tourlan__lan"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "TourLanguage",
  data() {
    return {
      items: [
        {
          items: [
            {
              title: "全部",
            },
            {
              title: "中文",
            },
            {
              title: "English",
            },
            {
              title: "日本語",
            },
            {
              title: "廣東話",
            },
            {
              title: "Deutsch",
            },
            {
              title: "Italiano",
            },
          ],
          title: "導覽語言",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.tourlan__block {
  background: #fff;
  border-radius: 6px;
  .tourlan__checkbox {
    height: 30px;
    position: relative;
    top: -8px;
  }
  .tourlan__lanitem {
    border-bottom: 1px solid #eee;
    &:hover {
      background: #f5f5f5;
      cursor: default;
    }
  }
}
</style>
