<template>
  <div class="productinfo__container">
    <div class="productinfo__name text-h5 mb-9">
      澎湖水族館門票 | 單人門票&雙人優惠套票 | 電子票券
    </div>
    <div class="productinfo__location d-flex align-center justify-start">
      <svg-icon iconClass="location" className="location" />
      <div class="text-body-2 ml-2">台中 苗栗</div>
    </div>
    <div class="d-flex d-lg-none align-end">
      <div class="text-caption mx-1">TWD</div>
      <div class="productinfo__price font-weight-black mx-1">300</div>
      <div class="text-caption mx-1">起</div>
    </div>
    <div class="d-flex align-center d-lg-none mt-1">
      <svg-icon iconClass="star" className="star" />
      <svg-icon iconClass="star" className="star" />
      <svg-icon iconClass="star" className="star" />
      <svg-icon iconClass="star" className="star" />
      <svg-icon iconClass="halfstar" className="halfstar" />
      <div class="text-body-2 ml-2">(75)</div>
      <svg-icon iconClass="fire" className="fire ml-3 mt-1" />
      <div class="text-caption ml-1 pt-1">500+個已訂購</div>
    </div>
    <!-- 優惠Mobile顯示 -->
    <div class="productinfo__promote d-block d-lg-none mt-3"></div>
    <div class="divide__line my-6"></div>
    <div
      class="
        productinfo__hint
        d-flex
        flex-column flex-lg-row
        align-lg-center
        justify-lg-start
      "
    >
      <!-- Mobile 顯示 -->
      <div class="d-flex my-1">
        <svg-icon
          iconClass="orangeflash"
          className="d-block d-lg-none orangeflash "
        />
        <div class="d-block d-lg-none text-body-2 ml-1 mr-3">立即出票</div>
      </div>
      <div class="d-flex my-1">
        <svg-icon iconClass="moneyrecycle" className="moneyrecycle" />
        <div class="text-body-2 ml-1 mr-3">免費取消 !</div>
      </div>
      <div class="d-flex my-1">
        <svg-icon iconClass="phone" className="phone" />
        <div class="text-body-2 ml-1 mr-3">現場請出示 QR code</div>
      </div>
    </div>
    <div class="divide__line my-6"></div>
    <div class="productinfo__hinttext text-body-2">
      今年夏天最夯的新景點！2019全新翻修，重新開幕！好拍、好玩、好涼、好精彩的水族館奇幻之旅，來澎湖絕對不能錯過的景點！
      <br />
      • 立即下訂！掃描QR CODE即刻入館，快速便利！
      <br />
      • 館內設施與體驗活動，內容精彩有趣，適合闔家大小一同出遊玩樂！
      <br />
      • 全台唯一寵物友善水族館
      <br />
      • 館內設有禮品部與咖啡廳
      <br />
      •【華信帶你飛】搭華信玩離島更優惠，現在手刀訂機票！
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductInfo",
};
</script>
<style lang="scss" scoped>
.productinfo__container {
  position: relative;
  .productinfo__name {
    font-weight: bold;
  }
  .productinfo__location {
    color: #6d6c6c;
    .location {
      width: 12px;
      height: 14px;
    }
  }
  .productinfo__price {
    color: #ff2d55;
  }
  .star {
    width: 13px;
    height: 13px;
  }
  .halfstar {
    width: 13px;
    height: 13px;
  }
  .productinfo__promote {
    border-radius: 6px;
    background: url("../../assets/productDetail/promote.png") no-repeat;
    background-size: cover;
    background-position: center;
    width: 360px;
    height: 90px;
  }
  .divide__line {
    width: 100%;
    opacity: 0.5;
    height: 0;
    border: 0.5px solid #707070;
  }
  .productinfo__hinttext {
    color: #333;
  }
}
</style>
