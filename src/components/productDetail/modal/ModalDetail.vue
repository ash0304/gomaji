<template>
  <div class="modaldetail__block px-3">
    <!-- Hint -->
    <div
      class="
        modaldetail__hint
        d-flex
        align-center
        justify-space-around
        px-2
        py-3
      "
    >
      <div class="font-weight-black text-body-2">關於此方案</div>
      <div class="d-flex align-center">
        <svg-icon iconClass="orangeflash" className="orangeflash mr-1" />
        <div class="text-body-2">立即出票</div>
      </div>
      <div class="d-flex align-center">
        <svg-icon iconClass="moneyrecycle" className="moneyrecycle mr-1" />
        <div class="text-body-2">免費取消</div>
      </div>
    </div>
    <div class="modaldetail__choselabel font-weight-black my-3">
      請選擇使用日期
    </div>
    <!-- Calendar -->
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      color="warning"
      full-width
      locale="zh-tw"
      :day-format="(date) => date.split('-')[2]"
    >
    </v-date-picker>
    <div class="modaldetail__divider mt-2 mb-6"></div>
    <!-- TimePicker -->
    <div v-if="showTimePicker">
      <TimePicker />
    </div>
    <!-- Choose Block -->
    <div class="d-flex align-center justify-space-between mb-2 mt-4">
      <div class="modaldetail__chosetag text-caption">餐點</div>
      <div class="modaldetail__resetbox d-flex align-center justify-center">
        <svg-icon iconClass="reset" className="reset mr-1" />
        <div class="text-caption">全部重選</div>
      </div>
    </div>
    <div class="d-flex">
      <div class="modaldetail__tribtn text-body-2 mr-2 active">早餐</div>
      <div class="modaldetail__tribtn text-body-2 mr-2">下午茶</div>
    </div>
    <div class="modaldetail__chosetag text-caption mb-2 mt-4">專案選擇</div>
    <div class="d-flex">
      <div class="modaldetail__tribtn text-body-2 mr-2 active">一泊一食</div>
      <div class="modaldetail__tribtn text-body-2 mr-2">景點輕鬆遊</div>
    </div>
    <!-- Count block -->
    <div class="modaldetail__chosetag text-caption mb-2 mt-4">選擇數量</div>
    <div
      v-for="(item, index) in headcountList"
      :key="index"
      class="d-flex align-center justify-space-between my-2"
    >
      <div class="d-flex flex-column">
        <div class="d-flex">
          <div class="text-body-2 font-weight-black">{{ item.title }}</div>
          <div class="text-caption modaldetail__sup">({{ item.label }})</div>
        </div>
        <div class="d-flex">
          <div class="text-body-2 font-weight-black mr-1">
            TWD {{ item.price }}/每組
          </div>
          <div class="text-caption modaldetail__delprice">
            {{ item.deletePrice }}
          </div>
        </div>
      </div>
      <div class="d-flex align-center">
        <svg-icon
          iconClass="reduce"
          className="reduce mx-2"
          :class="{ zero: item.count === 0 }"
          @click="reduceHandler(item)"
        />
        <div class="mx-2">{{ item.count }}</div>
        <svg-icon
          iconClass="increase"
          className="increase mx-2"
          @click="increaseHandler(item)"
        />
      </div>
    </div>
    <!-- divider -->
    <div class="modaldetail__divider mt-2 mb-6"></div>
    <!-- Total -->
    <div class="d-flex align-center justify-space-between">
      <div class="modaldetail__totallabel text-body-2">總金額</div>
      <div class="d-flex align-center">
        <div class="text-body-2 mr-2">TWD</div>
        <div class="modaldetail__total text-body-1 font-weight-black">720</div>
      </div>
    </div>
    <div class="modaldetail__footer d-flex">
      <div class="modaldetail__dialoghint text-caption">
        此步驟尚未進入扣款流程
      </div>
      <div class="modaldetail__addcartbtn mx-1">加入購物車</div>
      <div class="modaldetail__buybtn mx-1">立即訂購</div>
    </div>
  </div>
</template>
<script>
import TimePicker from "@/components/productDetail/timePicker/TimePicker";

export default {
  name: "ModalDetail",
  components: { TimePicker },
  created() {
    // swiper 在彈窗需要重新update，這邊使用v-if在開啟彈窗時去重置
    this.$nextTick(() => {
      this.showTimePicker = true;
    });
  },
  data() {
    return {
      date: "",
      showTimePicker: false,
      headcountList: [
        {
          id: 0,
          title: "成人",
          label: "7歲以上",
          count: 0,
          price: 720,
          deletePrice: "TWD 810",
        },
        {
          id: 1,
          title: "兒童",
          label: "3-7歲",
          count: 0,
          price: 150,
          deletePrice: "",
        },
        {
          id: 2,
          title: "嬰幼兒",
          label: "0-3歲",
          count: 0,
          price: 150,
          deletePrice: "",
        },
      ],
    };
  },
  methods: {
    increaseHandler(item) {
      item.count++;
    },
    reduceHandler(item) {
      if (item.count === 0) return;
      item.count--;
    },
  },
};
</script>
<style lang="scss" scoped>
.modaldetail__block {
  position: relative;
  padding-bottom: 100px;
  .modaldetail__hint {
    border-radius: 6px;
    background: #f5f5f5;
    .orangeflash {
      width: 14px;
      height: 14px;
    }
    .moneyrecycle {
      width: 14px;
      height: 14px;
    }
  }
  .modaldetail__choselabel {
    width: 100%;
    text-align: center;
  }
  .modaldetail__chosetag {
    color: #555555;
  }
  .modaldetail__resetbox {
    cursor: pointer;
    color: #d2750a;
    .reset {
      width: 14px;
      height: 14px;
    }
    &:hover {
      .reset {
        animation: reset 1s infinite ease-in;
      }
    }
  }
  .modaldetail__tribtn {
    position: relative;
    padding: 8px 16px;
    border-radius: 2px;
    border: 2px solid #eaeaea;
    color: #555555;
    cursor: pointer;
    &.active {
      color: #fff;
      background: #ff8800;
      &::before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-color: transparent white;
        border-width: 0 10px 10px 0;
        border-style: solid;
        right: 2px;
        top: 2px;
      }
    }
    &:hover {
      color: #fff;
      background: #ff8800;
      &::before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-color: transparent white;
        border-width: 0 10px 10px 0;
        border-style: solid;
        right: 2px;
        top: 2px;
      }
    }
  }
  .modaldetail__sup {
    color: #999999;
  }
  .modaldetail__delprice {
    color: #999999;
    text-decoration: line-through;
  }
  .reduce {
    width: 28px;
    height: 28px;
    cursor: pointer;
    &.zero {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .increase {
    cursor: pointer;
    width: 28px;
    height: 28px;
  }
  .modaldetail__divider {
    opacity: 0.5;
    width: 100%;
    border: 1px solid #707070;
  }
  .modaldetail__totallabel {
    color: #555555;
  }
  .modaldetail__total {
    color: #ff2d55;
  }
  .modaldetail__footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    background: #fff;
    .modaldetail__addcartbtn {
      width: 100%;
      height: 40px;
      padding: 8px 12px;
      color: white;
      background: #ff8800;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
    }
    .modaldetail__buybtn {
      width: 100%;
      height: 40px;
      padding: 8px 12px;
      color: white;
      background: #ff2d55;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
    }
    .modaldetail__dialoghint {
      position: absolute;
      width: 100%;
      height: 30px;
      color: #fff;
      background: #ffb300;
      padding: 4px 8px;
      text-align: center;
      left: 0;
      bottom: 60px;
      &::before {
        position: absolute;
        content: "";
        border-color: #ffb300 transparent transparent;
        border-style: solid solid solid;
        border-width: 10px 10px 10px 10px;
        bottom: -20px;
        right: 25%;
      }
    }
  }
}

@keyframes reset {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
