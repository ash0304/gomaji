<template>
  <v-col cols="12" class="experienceLocation__page py-10">
    <h2 id="experiencelocation" class="experienceLocation__title pl-3">
      體驗地點
    </h2>
    <v-col cols="12">
      <v-col cols="12" lg="7">
        <div class="experienceLocation__contentbox text-body-2 mt-5">
          <div class="experienceLocation__info">
            <div class="mb-1 font-weight-black">地點名稱: 澎湖水族館</div>
            <div>地址: 台灣澎湖縣白沙鄉崎頭村58號</div>
          </div>
          <div class="experienceLocation__map"></div>
        </div>
      </v-col>
      <v-col cols="12" lg="5"> </v-col>
    </v-col>
  </v-col>
</template>
<script>
export default {
  name: "ExperienceLocation",
};
</script>
<style lang="scss" scoped>
.experienceLocation__page {
  position: relative;
  .experienceLocation__title {
    border-left: 3px solid #ff8800;
  }
  .experienceLocation__contentbox {
    width: 100%;
    border: 1px solid #afafaf;
    border-radius: 6px;
    .experienceLocation__info {
      border-bottom: 1px solid #afafaf;
      padding: 20px 16px;
    }
    .experienceLocation__map {
      height: 400px;
      padding: 20px 16px;
    }
  }
}
</style>
