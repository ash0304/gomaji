<template>
  <div class="journey__block">
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
            class="journey__timeitem"
          >
            <v-checkbox
              :color="'#ff8800'"
              class="journey__checkbox"
              :ripple="false"
            ></v-checkbox>
            <v-list-item-content>
              <v-list-item-title
                v-text="child.title"
                class="journey__time"
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
  name: "JourneyTime",
  data() {
    return {
      items: [
        {
          items: [
            {
              title: "0小時 - 4小時",
            },
            {
              title: "4小時 - 1日",
            },
            {
              title: "1日 - 2日",
            },
            {
              title: "2日以上",
            },
          ],
          title: "行程時間",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.journey__block {
  background: #fff;
  border-radius: 6px;
  .journey__checkbox {
    height: 30px;
    position: relative;
    top: -8px;
  }
  .journey__timeitem {
    border-bottom: 1px solid #eee;
    &:hover {
      background: #f5f5f5;
      cursor: default;
    }
  }
}
</style>
