<template>
  <v-footer :height="height" class="pa-0">
    <div class="footer">
      <div class="footer__gray__bar">
        <v-container>
          <v-row>
            <v-col cols="12" class="py-0 pt-sm-3">
              <div class="footer__navbox d-flex align-center">
                <div class="footer__nvabox__item">服務條款</div>
                <div class="footer__nvabox__item">隱私權政策</div>
                <div class="footer__nvabox__item">客服中心</div>
              </div>
              <div>COPYRIGHT © 2021 海外頻道與一起旅行社共同營運.</div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="footer__darkgray__bar d-md-block">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="footer__contact">
                旅行社資訊: 一起旅行社股份有限公司 | 交觀甲字第7275號 |
                品保協會北1846號 | 統一編號53334842 | 負責人: 吳進昌 | 地址:
                106台北市大安區市民大道四段100號4樓
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-footer>
</template>
<script>
export default {
  name: "Footer",
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 85;
        case "sm":
          return 85;
        case "md":
          return 85;
        case "lg":
          return 85;
        case "xl":
          return 85;
        default:
          return null;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100%;
  .footer__gray__bar {
    width: 100%;
    height: 85px;
    background: #4e4e4e;
    color: white;
    font-size: 0.9rem;
    .footer__navbox {
      height: 40px;
      .footer__nvabox__item {
        margin-right: 12px;
      }
    }
  }
  .footer__darkgray__bar {
    width: 100%;
    height: 70px;
    background: #333333;
    display: none;
    .footer__contact {
      height: 100%;
      font-size: 0.9rem;
      color: white;
    }
  }
}
</style>
