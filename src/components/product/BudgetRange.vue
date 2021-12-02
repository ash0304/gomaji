<template>
  <div class="budgetrange__block py-3 px-4">
    <div class="my-4">{{ `${budget.val[0]} ~ ${budget.val[1]}` }}</div>
    <v-range-slider
      v-model="budget.val"
      :color="budget.color"
      :ripple="false"
      max="208959"
      min="1"
      track-color="#f5f5f5"
    ></v-range-slider>
  </div>
</template>
<script>
export default {
  name: "BudgetRange",
  data() {
    return {
      budget: {
        label: "color",
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
</style>
