<template>
  <div class="allproduct__block py-3">
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
            class="allproduct__productitem pl-3"
          >
            <v-checkbox
              :color="'#ff8800'"
              class="allproduct__checkbox"
              :ripple="false"
            ></v-checkbox>
            <v-list-item-content>
              <v-list-item-title
                v-text="
                  child.number
                    ? `${child.title} (${child.number})`
                    : child.title
                "
                class="allproduct__product"
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
  name: "AllProductType",
  data() {
    return {
      toggle: false,
      items: [
        {
          items: [
            { title: "全部" },
            { title: "景點門票", number: 2749 },
            { title: "博物館&展覽", number: 582 },
            { title: "主題樂園", number: 582 },
            { title: "運動賽事", number: 582 },
            { title: "特色表演", number: 582 },
          ],
          title: "熱門票券",
        },
        {
          items: [
            { title: "全部" },
            { title: "景點門票", number: 2749 },
            { title: "博物館&展覽", number: 582 },
            { title: "主題樂園", number: 582 },
            { title: "運動賽事", number: 582 },
            { title: "特色表演", number: 582 },
          ],
          title: "熱門票券",
        },
        {
          items: [
            { title: "全部" },
            { title: "景點門票", number: 2749 },
            { title: "博物館&展覽", number: 582 },
            { title: "主題樂園", number: 582 },
            { title: "運動賽事", number: 582 },
            { title: "特色表演", number: 582 },
          ],
          title: "熱門票券",
        },
        {
          items: [
            { title: "全部" },
            { title: "景點門票", number: 2749 },
            { title: "博物館&展覽", number: 582 },
            { title: "主題樂園", number: 582 },
            { title: "運動賽事", number: 582 },
            { title: "特色表演", number: 582 },
          ],
          title: "熱門票券",
        },
        {
          items: [
            { title: "全部" },
            { title: "景點門票", number: 2749 },
            { title: "博物館&展覽", number: 582 },
            { title: "主題樂園", number: 582 },
            { title: "運動賽事", number: 582 },
            { title: "特色表演", number: 582 },
          ],
          title: "熱門票券",
        },
        {
          items: [
            { title: "全部" },
            { title: "景點門票", number: 2749 },
            { title: "博物館&展覽", number: 582 },
            { title: "主題樂園", number: 582 },
            { title: "運動賽事", number: 582 },
            { title: "特色表演", number: 582 },
          ],
          title: "熱門票券",
        },
        {
          items: [
            { title: "全部" },
            { title: "景點門票", number: 2749 },
            { title: "博物館&展覽", number: 582 },
            { title: "主題樂園", number: 582 },
            { title: "運動賽事", number: 582 },
            { title: "特色表演", number: 582 },
          ],
          title: "熱門票券",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.allproduct__block {
  background: #fff;
  border-radius: 6px;
  .allproduct__checkbox {
    height: 30px;
    position: relative;
    top: -8px;
  }
  .allproduct__productitem {
    border-bottom: 1px solid #eee;
    &:hover {
      background: #f5f5f5;
      cursor: default;
    }
  }
}
</style>
