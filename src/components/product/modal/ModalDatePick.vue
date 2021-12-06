<template>
  <v-date-picker
    v-model="dates"
    no-title
    scrollable
    color="warning"
    full-width
    range
  >
    <v-spacer></v-spacer>
    <!-- <v-btn text color="primary" @click="modal = false"> Cancel </v-btn> -->
    <v-btn color="warning" @click="saveHandler"> 套用 </v-btn>
  </v-date-picker>
</template>
<script>
export default {
  name: "ModalDatePick",
  data() {
    return {
      dates: ["", ""],
    };
  },
  methods: {
    saveHandler() {
      console.log("save");
    },
  },
};
</script>
<style lang="scss" scoped></style>
