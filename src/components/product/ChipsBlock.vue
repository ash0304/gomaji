<template>
  <div class="chips__block pa-5 my-4 d-none d-lg-block">
    <div>
      <span class="chips__result__number font-weight-black mr-1">{{
        number
      }}</span>
      <span class="font-weight-black">項體驗行程</span>
    </div>
    <v-chip-group active-class="warning--text" column class="py-3">
      <v-chip v-for="tag in tags" :key="tag" close outlined>
        {{ tag }}
      </v-chip>
      <v-chip close> 清除所有 </v-chip>
    </v-chip-group>
    <v-divider></v-divider>
    <div
      class="d-flex flex-wrap flex-start align-center py-3 font-weight-black"
    >
      <div>排序:</div>
      <div class="d-flex justify-space-around align-center mx-1 my-1">
        <div class="ml-0 mr-2">|</div>
        <svg-icon iconClass="money" className="icon" />
        <div class="mx-1">價格排序</div>
      </div>
      <div class="d-flex justify-space-around align-center mx-1 my-1">
        <div class="ml-0 mr-2">|</div>
        <svg-icon iconClass="bstar" className="icon" />
        <div class="mx-1">評價排序</div>
      </div>
      <div class="d-flex justify-space-around align-center mx-1 my-1">
        <div class="ml-0 mr-2">|</div>
        <svg-icon iconClass="bstar" className="icon" />
        <div class="mx-1">更多排序</div>
      </div>
      <div class="d-flex justify-space-around align-center mx-1 my-1">
        <div class="ml-0 mr-2">|</div>
        <svg-icon iconClass="bstar" className="icon" />
        <div class="mx-1">更多排序</div>
      </div>
      <div class="d-flex justify-space-around align-center mx-1 my-1">
        <div class="ml-0 mr-2">|</div>
        <svg-icon iconClass="bstar" className="icon" />
        <div class="mx-1">更多排序</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChipsBlock",
  data() {
    return {
      number: 3914,
      tags: [
        "戶外休閒1",
        "戶外休閒2",
        "戶外休閒3",
        "戶外休閒4",
        "戶外休閒5",
        "戶外休閒6",
        "戶外休閒7",
        "戶外休閒8",
        "戶外休閒9",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.chips__block {
  background: #fff;
  border-radius: 6px;
  .chips__result__number {
    color: #ff8800;
  }
}
</style>
