<template>
  <div class="datepick__block">
    <div class="datepick__icon py-3">
      <svg-icon iconClass="fire" className="fire" />
    </div>
    <div class="datepick__pickbox py-3 px-1">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="dates"
        width="500px"
      >
        <template v-slot:activator="{ on, attrs }">
          <input
            v-model="dateRangeText"
            type="text"
            label="Picker in dialog"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            class="datapick__input"
            placeholder="出發日期"
          />
        </template>
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
          <v-btn color="warning" @click="$refs.dialog.save(dates)">
            套用
          </v-btn>
        </v-date-picker>
      </v-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "DatePickBlock",
  data() {
    return {
      modal: false,
      dates: ["", ""],
    };
  },
  computed: {
    dateRangeText() {
      if (this.dates[0] && this.dates[1]) {
        return this.dates.join(" ~ ");
      } else {
        return "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.datepick__block {
  background: #fff;
  border-radius: 6px;
  width: 100%;
  display: flex;
  .datepick__icon {
    width: 15%;
    border-right: 5px solid #f5f5f5;
  }
  .datepick__pickbox {
    width: 85%;
    text-align: center;
    font-weight: bold;
    .datapick__input {
      padding-left: 4px;
      font-size: 1rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
