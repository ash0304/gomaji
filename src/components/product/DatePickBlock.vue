<template>
  <div class="datepick__block">
    <div class="datepick__icon py-3">
      <svg-icon iconClass="schedule" className="schedule ml-1" />
    </div>
    <div class="datepick__pickbox py-3 px-1">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="dates"
        width="500px"
      >
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="datepick__input">
            {{ dateRangeText ? dateRangeText : "出發日期" }}
          </div>
        </template>
        <v-date-picker
          v-model="dates"
          no-title
          scrollable
          color="warning"
          full-width
          range
          locale="zh-tw"
          :show-current="false"
          :day-format="(date) => date.split('-')[2]"
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
      text-align: center;
      color: #333333;
      font-weight: bold;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
