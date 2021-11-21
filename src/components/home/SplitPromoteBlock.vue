<template>
  <v-container class="px-0 py-0 py-md-8">
    <v-row>
      <v-col cols="12">
        <h3>廣告排位2</h3>
        <div class="split__container">
          <!-- Normal set  show view lower than md(960px) -->
          <div class="split__normal d-md-flex">
            <div class="split__left"></div>
            <div class="split__right">
              <div class="split__top"></div>
              <div class="split__bottom"></div>
            </div>
          </div>
          <!-- Carousel component show view lower than md(960px) -->
          <carousel
            id="split__promote"
            class="d-md-none"
            :margin="5"
            :responsive="responsiveObj"
            :dots="false"
            :nav="false"
          >
            <div
              v-for="item in splitList"
              :key="item.id"
              class="split__carousel__item"
              :style="styleObj(item)"
            ></div>
          </carousel>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import carousel from "vue-owl-carousel";

export default {
  name: "SplitPromoteBlock",
  components: { carousel },
  data() {
    return {
      // owl carousel control setting
      responsiveObj: {
        0: { items: 1 },
        600: { items: 2 },
        960: { items: 3 },
        1264: { items: 6 },
        1904: { items: 6 },
      },
      // fake data list
      splitList: [
        {
          id: 0,
          url: require("@/assets/home/split01.png"),
        },
        {
          id: 1,
          url: require("@/assets/home/split02.png"),
        },
        {
          id: 2,
          url: require("@/assets/home/split03.png"),
        },
      ],
    };
  },
  methods: {
    styleObj(item) {
      return {
        background: `url(${item.url}) no-repeat`,
        "background-size": "contain",
        "background-position": "50%",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.split__container {
  display: flex;
  padding: 14px 5px;
  /* carousel */
  #split__promote {
    display: block;
    width: 100%;
    height: 158px;
    .split__carousel__item {
      overflow: hidden;
      width: 100%;
      height: 158px;
      border-radius: 6px;
    }
  }
  /* normal */
  .split__normal {
    display: none;
    width: 100%;
    height: 365px;
  }

  .split__left {
    width: 60%;
    padding: 5px;
    background: url("../../assets/home/split01.png") no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }
  .split__right {
    padding: 5px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .split__top {
      height: 50%;
      background: url("../../assets/home/split02.png") no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
    .split__bottom {
      height: 50%;
      background: url("../../assets/home/split03.png") no-repeat;
      background-size: 100% 100%;
      background-position: center center;
    }
  }
}

@media screen and (max-width: 1264px) {
  .split__container {
    .split__normal {
      height: 266px;
    }
  }
}

/* @media screen and (max-width: 600px) {
  .split__container {
    #split__promote {
      height: 158px;
      .split__carousel__item {
        height: 158px;
      }
    }
  }
} */
</style>
