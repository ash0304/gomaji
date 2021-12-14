<template>
  <div class="reviewdetail__block pa-3">
    <div class="reviewdetail__divider"></div>
    <div v-for="n in 5" :key="n" class="reviewdetail__reviewitem py-12">
      <div class="reviewdetail__headerbox d-flex align-center mb-2">
        <div class="reviewdetail__avatar mr-3"></div>
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
      <div class="reviewdetail__bodybox ml-0 ml-lg-15">
        <div class="text-body-2 font-weight-black">充實愉快的午後景點</div>
        <div class="text-body-2 mb-2">
          場館不大但魚類豐富又多元，餵魚秀表演很精采有趣，增長許多知識，值得待小孩子來玩。
        </div>
        <div class="reviewdetail__shot">
          <img src="../../../assets/productDetail/evaluation-pic.png" />
        </div>
        <div class="reviewdetail__date text-body-2">於 2021/11/23 評價</div>
      </div>
    </div>
    <v-pagination
      v-model="page"
      color="orange"
      class="d-block mt-2"
      :length="4"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  name: "ReviewDetail",
  data() {
    return {
      page: 1,
    };
  },
};
</script>
<style lang="scss" scoped>
.reviewdetail__block {
  position: relative;
  .reviewdetail__divider {
    opacity: 0.5;
    border: 1px solid #707070;
  }
  .reviewdetail__reviewitem {
    border-bottom: 2px solid rgba(44, 44, 44, 0.5);
    .reviewdetail__headerbox {
      .reviewdetail__avatar {
        width: 50px;
        height: 50px;
        background: url("../../../assets/productDetail/user-icon.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    .reviewdetail__bodybox {
      padding: 4px 12px;
      background: #f5f5f5;
      border-radius: 6px;
      .reviewdetail__date {
        color: #6d6c6c;
      }
    }
  }
}
</style>
