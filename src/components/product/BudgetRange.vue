<template>
  <div class="budgetrange__block py-3 px-4">
    <div class="my-4">{{ `${budget.val[0]} ~ ${budget.val[1]}` }}</div>
    <v-range-slider
      v-model="budget.val"
      :color="budget.color"
      :ripple="false"
      max="208959"
      min="1"
      :track-color="'#f5f5f5'"
      :thumb-color="'grey'"
      class="budgetrange__slider"
    ></v-range-slider>
  </div>
</template>
<script>
export default {
  name: "BudgetRange",
  data() {
    return {
      budget: {
        val: [1, 208959],
        color: "#ff8800",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.budgetrange__block {
  background: #fff;
  border-radius: 6px;
}

::v-deep .v-slider__thumb {
  width: 20px;
  height: 20px;
  border-color: #707070 !important;
  border: 1px solid #707070 !important;
  background-color: #ffffff !important;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>
