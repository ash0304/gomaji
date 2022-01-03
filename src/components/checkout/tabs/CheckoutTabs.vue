<template>
  <v-col cols="12" class="pa-2">
    <carousel
      id="checkouttabs__carousel"
      :responsive="responsiveObj"
      :dots="false"
      :nav="false"
      @drag="dragHandler"
    >
      <div
        v-for="item in tabList"
        :key="item.id"
        class="checkouttabs__item mr-5"
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
  name: "CheckoutTabs",
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
          name: "訂購人資料",
          target: "orderinfo",
          headertarget: "h_orderinfo",
        },
        {
          id: 1,
          name: "WIFI分享器",
          target: "caseA",
          headertarget: "h_caseA",
        },
        {
          id: 2,
          name: "全旅包車自由行",
          target: "caseB",
          headertarget: "h_caseB",
        },
        {
          id: 3,
          name: "折價券折抵",
          target: "discount",
          headertarget: "h_discount",
        },
        {
          id: 4,
          name: "GOMAJI POINTS 折抵",
          target: "points",
          headertarget: "h_points",
        },
        {
          id: 5,
          name: "付款方式",
          target: "paymethod",
          headertarget: "h_paymethod",
        },
        {
          id: 6,
          name: "付款明細",
          target: "paydetail",
          headertarget: "h_paydetail",
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
#checkouttabs__carousel {
  position: relative;
  width: 100%;
  margin: auto;
  .checkouttabs__item {
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

@media screen and (min-width: 1264px) {
  #checkouttabs__carousel {
    width: 750px;
  }
}
</style>
