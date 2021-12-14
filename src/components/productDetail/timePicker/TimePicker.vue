<template>
  <div class="timepicker__block">
    <swiper class="timepicker" :options="swiperOption">
      <swiper-slide class="timepicker__item">
        <div class="timepicker__headitem">
          <div class="price__barbox mb-1 px-3"></div>
          <div class="text-body-2 mb-1 px-3">TWD</div>
          <v-divider />
          <div class="mt-1">
            <div class="text-body-2">當地時間</div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        v-for="(item, index) in timeList"
        :key="index"
        class="timepicker__item"
      >
        <div class="timepicker__itembox">
          <!-- bar -->
          <div class="price__barbox mb-1 px-3 d-flex justify-center align-end">
            <div class="price__bar"></div>
          </div>
          <!-- price -->
          <div class="text-body-2 mb-1 px-3">{{ item.price }}</div>
          <v-divider />
          <!-- time & activeTag -->
          <div class="mt-1">
            <div class="text-body-2">{{ item.time }}</div>
            <div class="time__midday text-body-2">{{ item.activeTag }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev">
      <v-icon slot="button-prev" large> mdi-chevron-left </v-icon>
    </div>
    <div class="swiper-button-next">
      <v-icon slot="button-next" large> mdi-chevron-right </v-icon>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "TimePicker",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      timeList: [
        {
          id: 0,
          price: 599,
          time: "00:00",
          activeTag: "早晨",
        },
        {
          id: 1,
          price: 599,
          time: "00:15",
          activeTag: "早晨",
        },
        {
          id: 2,
          price: 599,
          time: "00:30",
          activeTag: "早晨",
        },
        {
          id: 3,
          price: 599,
          time: "00:45",
          activeTag: "早晨",
        },
        {
          id: 4,
          price: 599,
          time: "01:00",
          activeTag: "早晨",
        },
        {
          id: 5,
          price: 599,
          time: "01:15",
          activeTag: "早晨",
        },
        {
          id: 6,
          price: 599,
          time: "01:30",
          activeTag: "早晨",
        },
        {
          id: 7,
          price: 599,
          time: "01:45",
          activeTag: "早晨",
        },
        {
          id: 8,
          price: 599,
          time: "02:00",
          activeTag: "早晨",
        },
      ],
      swiperOption: {
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>
<style lang="scss" scoped>
.timepicker__block {
  position: relative;
  width: 100%;
  .swiper-button-prev {
    position: absolute;
    background-image: none;
  }
  .swiper-button-next {
    position: absolute;
    background-image: none;
  }
  .timepicker {
    position: relative;
    width: 100%;
    .timepicker__item {
      width: 60px;
      text-align: center;
      color: #6d6c6c;
      .timepicker__itembox,
      .timepicker__headitem {
        .price__barbox {
          height: 50px;
          .price__bar {
            height: 80%;
            width: 8px;
            border-radius: 4px;
            background: #ff8800;
            opacity: 0.5;
          }
        }
        .time__midday {
          display: none;
        }
      }
      &.swiper-slide-active {
        .timepicker__itembox {
          color: #ff8800;
          .price__barbox {
            .price__bar {
              opacity: 1;
            }
          }
          .time__midday {
            display: block;
          }
        }
      }
    }
  }
}
</style>
