<template>
  <div class="recommend__white__bar d-md-block">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="recommend__box">
            <h3>美國熱門城市</h3>
            <div
              class="
                recommend__hotcity
                d-flex
                flex-wrap
                justify-start
                align-center
              "
            >
              <div v-for="n in 18" :key="n" class="recommend__hotcity__item">
                關島
              </div>
            </div>
            <h3>國內旅遊懶人包</h3>
            <div
              class="
                recommend__hotspot
                d-flex
                flex-wrap
                justify-start
                align-center
              "
            >
              <div v-for="n in 18" :key="n" class="recommend__hotspot__item">
                台北景點
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "RecommendCity",
};
</script>
<style lang="scss" scoped>
.recommend__white__bar {
  width: 100%;
  height: auto;
  background: white;
  display: none;
  .recommend__box {
    .recommend__hotcity {
      padding: 20px 0px;
      .recommend__hotcity__item {
        font-size: 0.9rem;
        width: auto;
        height: 30px;
        padding: 5px 15px;
        margin: 8px;
        border-right: 1px solid #6d6c6c;
        color: #6d6c6c;
        cursor: pointer;
      }
    }
    .recommend__hotspot {
      padding: 20px 0px;
      .recommend__hotspot__item {
        font-size: 0.9rem;
        width: auto;
        height: 30px;
        padding: 5px 15px;
        margin: 8px;
        border-right: 1px solid #6d6c6c;
        color: #6d6c6c;
        cursor: pointer;
      }
    }
  }
}
</style>
