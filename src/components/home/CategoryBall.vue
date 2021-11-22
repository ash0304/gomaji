<template>
  <v-container class="px-0 py-0 d-block d-lg-none">
    <v-row>
      <v-col cols="12" class="pr-0 pr-lg-3">
        <div class="categoryball__box d-flex justify-space-around align-center">
          <template v-for="(item, index) in categoryList">
            <div
              v-if="index < 4"
              :key="index"
              class="
                categoryball__item
                d-flex
                flex-column
                align-center
                justify-center
              "
            >
              <img :src="item.url" />
              <div class="categoryball__text">{{ item.name }}</div>
            </div>
          </template>
        </div>
        <div class="categoryball__box d-flex justify-space-around align-center">
          <template v-for="(item, index) in categoryList">
            <div
              v-if="index > 3 && index < 8"
              :key="index"
              class="
                categoryball__item
                d-flex
                flex-column
                align-center
                justify-center
              "
            >
              <img :src="item.url" />
              <div class="categoryball__text">{{ item.name }}</div>
            </div>
          </template>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CategoryBall",
  data() {
    return {
      categoryList: [
        {
          name: "美食餐廳",
          url: "https://www.gomaji.com/images/channel/index_rs_icon.png?1623223370",
        },
        {
          name: "美食紓壓",
          url: "https://www.gomaji.com/images/channel/index_bt_icon.png?1623223370",
        },
        {
          name: "旅遊住宿",
          url: "https://www.gomaji.com/images/channel/index_es_icon.png?1623223370",
        },
        {
          name: "宅配美食",
          url: "https://www.gomaji.com/images/channel/index_delivery_icon.png?1623223370",
        },
        {
          name: "五倍券專區",
          url: "https://www.gomaji.com/images/channel/index_5000_icon.png?1633503018",
        },
        {
          name: "按摩",
          url: "https://www.gomaji.com/images/channel/index_5000_icon.png?1633503018",
        },
        {
          name: "泡湯休息",
          url: "https://www.gomaji.com/images/channel/index_hotelrest_icon.png?1623223370",
        },
        {
          name: "宅配購物+",
          url: "https://www.gomaji.com/images/channel/index_buy_icon.png?1623223370",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.categoryball__box {
  margin: 10px 0px;
  .categoryball__item {
    cursor: pointer;
    .categoryball__text {
      font-size: 0.9rem;
    }
    img {
      width: 61px;
      height: 61px;
    }
  }
}
</style>
