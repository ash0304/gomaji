<template>
  <v-row class="d-none d-md-block">
    <v-col cols="12" class="full__banner pa-0"></v-col>
  </v-row>
</template>
<script>
export default {
  name: "FullPromoteBlock",
};
</script>
<style lang="scss" scoped>
.full__banner {
  position: relative;
  height: 334px;
  background: url("../../assets/home/fullBanner.png");
  background-position: 50%;
  background-size: cover;
}
</style>
