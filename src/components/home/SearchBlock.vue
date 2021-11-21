<template>
  <v-row class="text-center searchblock d-lg-block">
    <!-- bg -->
    <v-col cols="12" class="home__banner pa-0">
      <!-- overlap -->
      <div class="home__overlap d-flex justify-center align-center">
        <div
          class="
            home__search__content
            d-flex
            flex-column
            justify-center
            align-center
          "
        >
          <h1 class="home__search__title">全世界最棒的旅遊體驗</h1>
          <h5 class="home__search__subtitle mb-6 mt-2">
            帶你深入探索有趣又獨特的旅遊體驗行程
          </h5>
          <SearchInput />
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import SearchInput from "@/components/home/search/SearchInput.vue";

export default {
  name: "SearchBlock",
  components: { SearchInput },
};
</script>
<style lang="scss" scoped>
.searchblock {
  display: none;
}
.home__banner {
  position: relative;
  height: 334px;
  background: url("https://cdn.kkday.com/pc-web/assets/img/home_banner/1.jpg");
  background-position: 50%;
  background-size: cover;
  .home__overlap {
    background: rgba(51, 51, 51, 0.2);
    width: 100%;
    height: 100%;
    .home__search__content {
      width: 640px;
      .home__search__title {
        font-size: 2rem;
        font-weight: 700;
        color: white;
        line-height: 1.8;
        text-shadow: 0 5px 15px rgba(51, 51, 51, 10%);
      }
      .home__search__subtitle {
        font-size: 1rem;
        font-weight: 700;
        color: white;
        text-align: center;
        line-height: 1.4;
        text-shadow: 0 5px 15px rgba(51, 51, 51, 10%);
      }
    }
  }
}
</style>
