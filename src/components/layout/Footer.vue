<template>
  <v-footer :height="height" class="pa-0">
    <div class="footer">
      <div class="footer__white__bar d-md-block">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="footer__recommand">
                <h3>美國熱門城市</h3>
                <div class="footer__hotcity">
                  <div v-for="n in 18" :key="n" class="footer__hotcity__item">
                    關島
                  </div>
                </div>
                <h3>國內旅遊懶人包</h3>
                <div class="footer__hotspot">
                  <div v-for="n in 18" :key="n" class="footer__hotspot__item">
                    台北景點
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="footer__gray__bar">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="footer__navbox">
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
          return 535;
        case "lg":
          return 465;
        case "xl":
          return 465;
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
  .footer__white__bar {
    width: 100%;
    height: auto;
    background: white;
    display: none;
    .footer__recommand {
      .footer__hotcity {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 0px;
        .footer__hotcity__item {
          font-size: 0.9rem;
          width: auto;
          height: 30px;
          padding: 5px 15px;
          margin: 8px;
          border-right: 1px solid #6d6c6c;
          color: #6d6c6c;
          cursor: pointer;
        }
      }
      .footer__hotspot {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 0px;
        .footer__hotspot__item {
          font-size: 0.9rem;
          width: auto;
          height: 30px;
          padding: 5px 15px;
          margin: 8px;
          border-right: 1px solid #6d6c6c;
          color: #6d6c6c;
          cursor: pointer;
        }
      }
    }
  }
  .footer__gray__bar {
    width: 100%;
    height: 85px;
    background: #4e4e4e;
    color: white;
    font-size: 0.9rem;
    .footer__navbox {
      display: flex;
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
