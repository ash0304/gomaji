<template>
  <v-col cols="12" class="pa-0">
    <div class="detailtabs__box d-flex flex-nowrap pb-2">
      <div
        v-for="item in tabList"
        :key="item.id"
        class="detailtabs__item mr-5"
        @click="scrollToTarget(item.target)"
      >
        {{ item.name }}
      </div>
    </div>
  </v-col>
</template>
<script>
export default {
  name: "DetailTabs",
  data() {
    return {
      tabList: [
        {
          id: 0,
          name: "選擇方案",
          target: "planblocks",
        },
        {
          id: 1,
          name: "商品說明",
          target: "productinstruction",
        },
        {
          id: 2,
          name: "購買注意事項",
          target: "purchasenotice",
        },
        {
          id: 3,
          name: "使用說明",
          target: "usedescription",
        },
        {
          id: 4,
          name: "取消政策",
          target: "cancelpolicy",
        },
        {
          id: 5,
          name: "體驗地點",
          target: "experiencelocation",
        },
        {
          id: 6,
          name: "旅客評價",
          target: "passengerreviews",
        },
      ],
    };
  },
  methods: {
    scrollToTarget(target) {
      const targetView = document.getElementById(target);
      targetView.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.detailtabs__box {
  overflow-x: auto;
  .detailtabs__item {
    position: relative;
    flex: 0 0 auto;
    padding: 4px 0px;
    cursor: pointer;
    &.active {
      color: #ff8800;
      border-bottom: 3px solid #ff8800;
    }
  }
}
</style>
