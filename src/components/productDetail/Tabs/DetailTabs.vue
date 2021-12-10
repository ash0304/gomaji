<template>
  <v-col cols="12" class="pa-2">
    <!-- <div class="detailtabs__box d-flex flex-nowrap pb-2">
      <div
        v-for="item in tabList"
        :key="item.id"
        class="detailtabs__item mr-5"
        @click="scrollToTarget(item.target)"
      >
        {{ item.name }}
      </div>
    </div> -->
    <carousel
      id="detailtabs__carousel"
      :responsive="responsiveObj"
      :dots="false"
      :nav="false"
      @drag="dragHandler"
    >
      <div
        v-for="item in tabList"
        :key="item.id"
        class="detailtabs__item mr-5"
        :class="{ current: currentPosition === item.id }"
        @click="scrollToTarget(item)"
      >
        {{ item.name }}
      </div>
    </carousel>
  </v-col>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "DetailTabs",
  components: { carousel },
  data() {
    return {
      currentPosition: 0,
      isDragging: false,
      responsiveObj: {
        0: { items: 6, dots: false, autoWidth: true },
        600: { items: 6, dots: false, autoWidth: true },
        960: { items: 6, dots: false, autoWidth: true },
        1264: { items: 6, dots: false, autoWidth: true },
      },
      tabList: [
        {
          id: 0,
          name: "選擇方案",
          target: "planblocks",
          headertarget: "h2__planblocks",
        },
        {
          id: 1,
          name: "商品說明",
          target: "productinstruction",
          headertarget: "h2__productinstruction",
        },
        {
          id: 2,
          name: "購買注意事項",
          target: "purchasenotice",
          headertarget: "h2__purchasenotice",
        },
        {
          id: 3,
          name: "使用說明",
          target: "usedescription",
          headertarget: "h2__usedescription",
        },
        {
          id: 4,
          name: "取消政策",
          target: "cancelpolicy",
          headertarget: "h2__cancelpolicy",
        },
        {
          id: 5,
          name: "體驗地點",
          target: "experiencelocation",
          headertarget: "h2__experiencelocation",
        },
        {
          id: 6,
          name: "旅客評價",
          target: "passengerreviews",
          headertarget: "h2__passengerreviews",
        },
      ],
    };
  },
  mounted() {
    document.addEventListener("scroll", this.tabsHandler);
  },
  methods: {
    tabsHandler() {
      const WebScrollTop = document.documentElement.scrollTop;
      this.tabList.forEach((item) => {
        let refElement = document.getElementById(item.target);
        if (
          refElement.offsetTop - 300 <= WebScrollTop &&
          refElement.offsetTop + refElement.getBoundingClientRect().height >
            WebScrollTop
        ) {
          this.currentPosition = item.id;
        }
      });
    },
    scrollToTarget(item) {
      const targetView = document.getElementById(item.headertarget);
      targetView.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    dragHandler() {
      this.isDragging = true;
      setTimeout(() => {
        this.isDragging = false;
      }, 50);
    },
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.tabsHandler);
  },
};
</script>
<style lang="scss" scoped>
/* .detailtabs__box {
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
} */
#detailtabs__carousel {
  position: relative;
  .detailtabs__item {
    position: relative;
    flex: 0 0 auto;
    padding: 4px 0px;
    cursor: pointer;
    &.current {
      color: #ff8800;
      border-bottom: 3px solid #ff8800;
    }
  }
}
</style>
