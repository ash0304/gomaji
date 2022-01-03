<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6" class="py-0 mt-3">
        <v-textarea
          v-model="textarea"
          outlined
          dense
          counter
          maxlength="80"
          single-line
          placeholder="請輸入備註事項"
        ></v-textarea>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "OrderMemo",
  data() {
    return {
      textarea: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>
