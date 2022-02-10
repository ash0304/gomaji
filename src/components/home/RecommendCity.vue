<template>
  <div class="recommend__white__bar d-none d-lg-block pa-10">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="recommend__box">
            <h3 class="recommend__label">美國熱門城市</h3>
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
            <h3 class="recommend__label">國內旅遊懶人包</h3>
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
  .recommend__box {
    .recommend__label {
      color: #333333;
    }
    .recommend__hotcity {
      padding: 20px 0px;
      .recommend__hotcity__item {
        position: relative;
        font-size: 0.9rem;
        width: auto;
        height: 18px;
        padding: 0;
        margin: 13px 10px;
        color: #6d6c6c;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          background: #707070;
          width: 0.5px;
          height: 14px;
        }
        &:last-child {
          &::before {
            width: 0px;
          }
        }
      }
    }
    .recommend__hotspot {
      padding: 20px 0px;
      .recommend__hotspot__item {
        position: relative;
        font-size: 0.9rem;
        width: auto;
        height: 18px;
        padding: 0;
        margin: 13px 10px;
        color: #6d6c6c;
        cursor: pointer;
        &::before {
          content: "";
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          background: #707070;
          width: 0.5px;
          height: 14px;
        }
        &:last-child {
          &::before {
            width: 0px;
          }
        }
      }
    }
  }
}
</style>
