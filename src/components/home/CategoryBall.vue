<template>
  <v-container class="px-0 py-0 d-block d-lg-none">
    <v-row>
      <v-col cols="12" class="pr-0 pr-lg-3">
        <div class="categoryball__box">
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_rs_icon.png?1623223370"
            />
            <div class="categoryball__text">美食餐廳</div>
          </div>
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_bt_icon.png?1623223370"
            />
            <div class="categoryball__text">美食紓壓</div>
          </div>
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_es_icon.png?1623223370"
            />
            <div class="categoryball__text">旅遊住宿</div>
          </div>
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_delivery_icon.png?1623223370"
            />
            <div class="categoryball__text">宅配美食</div>
          </div>
        </div>
        <div class="categoryball__box">
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_5000_icon.png?1633503018"
            />
            <div class="categoryball__text">五倍券專區</div>
          </div>
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_massage_icon.png?1623223370"
            />
            <div class="categoryball__text">按摩</div>
          </div>
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_hotelrest_icon.png?1623223370"
            />
            <div class="categoryball__text">泡湯休息</div>
          </div>
          <div class="categoryball__item">
            <img
              src="https://www.gomaji.com/images/channel/index_buy_icon.png?1623223370"
            />
            <div class="categoryball__text">宅配購物+</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CategoryBall",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.categoryball__box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px;
  .categoryball__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
