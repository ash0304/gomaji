<template>
  <v-col cols="12" class="passengerReviews__page py-10">
    <h2 id="h2__passengerreviews" class="passengerReviews__title pl-3">
      旅客評價
    </h2>
    <v-col cols="12">
      <v-col cols="12" lg="7">
        <div
          class="
            passengerReviews__sum
            d-flex
            justify-space-between
            align-center
          "
        >
          <div class="passengerReviews__left d-flex align-center">
            <div class="passengerReviews__reviewpoint mr-2">4.5</div>
            <div>
              <div class="d-flex mb-4">
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="halfstar" className="halfstar" />
              </div>
              <div>75 則旅客評價</div>
            </div>
          </div>
          <div class="passengerReviews__right d-none d-lg-block">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="
                    d-flex
                    align-center
                    justify-center
                    passengerReviews__filterbtn
                  "
                  v-bind="attrs"
                  v-on="on"
                >
                  <div class="text-body-2 mr-1">最高分至最低分</div>
                  <svg-icon iconClass="downarrow" className="downarrow" />
                </div>
              </template>
              <v-list>
                <v-list-item v-for="n in 5" :key="n">
                  <v-list-item-title>{{ `更多排序 ${n}` }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="divide__line mt-12"></div>
        <!-- 查看更多 -->
        <div class="d-block d-lg-none">
          <v-dialog
            v-model="isReviews"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <div
                class="
                  passengerReviews__morerbox
                  d-flex
                  justify-end
                  align-center
                  mt-1
                "
                v-bind="attrs"
                v-on="on"
              >
                <div class="passengerReviews__morereview">更多評價</div>
                <i class="arrow right"></i>
              </div>
            </template>
            <v-card>
              <ReviewHead @close="closeHandler" />
              <ReviewDetail />
            </v-card>
          </v-dialog>
        </div>

        <!-- 評價項目 -->
        <div v-for="n in 5" :key="n" class="passengerReviews__reviewitem py-12">
          <div class="passengerReviews__headerbox d-flex align-center mb-2">
            <div class="passengerReviews__avatar mr-3"></div>
            <div>
              <div class="text-body-2 mb-1">chiayun</div>
              <div class="d-flex">
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="star" className="star" />
                <svg-icon iconClass="halfstar" className="halfstar" />
                <div class="text-body-2 ml-2">2021/11/19．家人</div>
              </div>
            </div>
          </div>
          <div class="passengerReviews__bodybox ml-0 ml-lg-15">
            <div class="text-body-2 font-weight-black">充實愉快的午後景點</div>
            <div class="text-body-2 mb-2">
              場館不大但魚類豐富又多元，餵魚秀表演很精采有趣，增長許多知識，值得待小孩子來玩。
            </div>
            <div class="passengerReviews__shot">
              <img src="../../assets/productDetail/evaluation-pic.png" />
            </div>
            <div class="passengerReviews__date text-body-2">
              於 2021/11/23 評價
            </div>
          </div>
        </div>
        <v-pagination
          v-model="page"
          color="orange"
          class="d-none d-lg-block mt-2"
          :length="4"
        ></v-pagination>
      </v-col>
      <!-- 排版用 -->
      <v-col cols="12" lg="5"> </v-col>
    </v-col>
  </v-col>
</template>
<script>
import ReviewHead from "@/components/productDetail/modal/ReviewHead";
import ReviewDetail from "@/components/productDetail/modal/ReviewDetail";

export default {
  name: "PassengerReviews",
  components: { ReviewHead, ReviewDetail },
  data() {
    return {
      page: 1,
      isReviews: false,
    };
  },
  methods: {
    closeHandler(value) {
      this.isReviews = value.status;
    },
  },
};
</script>
<style lang="scss" scoped>
.passengerReviews__page {
  position: relative;
  .passengerReviews__title {
    border-left: 3px solid #ff8800;
  }
  .passengerReviews__sum {
    .passengerReviews__left {
      .passengerReviews__reviewpoint {
        width: 56px;
        height: 56px;
        line-height: 36px;
        text-align: center;
        font-weight: bold;
        font-size: 24px;
        color: white;
        padding: 10px;
        border-radius: 6px;
        background: linear-gradient(to bottom, #f80, #ff2d55);
      }
    }
    .passengerReviews__right {
      .passengerReviews__filterbtn {
        width: auto;
        background: #fff;
        padding: 12px 9px;
        border: 0.5px solid #afafaf;
        border-radius: 6px;
      }
    }
  }
  .divide__line {
    border: solid 1px #707070;
    opacity: 0.5;
  }
  .passengerReviews__morerbox {
    cursor: pointer;
    .passengerReviews__morereview {
      color: #d2750a;
    }
    .arrow {
      width: 10px;
      height: 10px;
      border: solid #d2750a;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
      &.right {
        transform: rotate(-45deg);
      }
    }
  }
  .passengerReviews__reviewitem {
    border-bottom: 2px solid rgba(44, 44, 44, 0.5);
    .passengerReviews__headerbox {
      .passengerReviews__avatar {
        width: 50px;
        height: 50px;
        background: url("../../assets/productDetail/user-icon.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    .passengerReviews__bodybox {
      padding: 4px 12px;
      background: #f5f5f5;
      border-radius: 6px;
      .passengerReviews__date {
        color: #6d6c6c;
      }
    }
  }
}
</style>
