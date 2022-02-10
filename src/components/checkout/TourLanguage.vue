<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="3" class="pb-0">
        <div class="text-body-2 mb-2">
          行程導覽語言 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['中文', '英文']"
          outlined
          dense
          placeholder="請選擇語言"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "TourLanguage",
};
</script>
<style lang="scss" scoped>
::v-deep.v-text-field {
  font-size: 14px;
}
</style>
