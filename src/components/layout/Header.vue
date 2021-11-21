<template>
  <nav>
    <v-app-bar
      app
      fixed
      :height="height"
      style="z-index: 100"
      :extension-height="extensionHeight"
    >
      <div class="header">
        <div class="header__channel__bar d-lg-none">
          <v-container>
            <v-row>
              <v-col cols="12">
                <div class="header__channel__box">
                  <v-menu offset-y :nudge-width="100">
                    <template v-slot:activator="{ on, attrs }">
                      <div
                        class="header__channel__div"
                        v-bind="attrs"
                        v-on="on"
                      >
                        頻道
                      </div>
                    </template>
                    <v-list>
                      <v-list-item v-for="n in 9" :key="n">
                        <v-list-item-title>更多選項</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <div>海外頻道</div>
                  <div class="header__channel__blank">&nbsp;</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="header__info__bar d-lg-block">
          <v-container>
            <v-row>
              <v-col cols="12">
                <div class="d-flex header__info__box">
                  <div class="header__info__left">
                    <div class="header__info__item">
                      <svg-icon iconClass="phone" className="icon" />
                      <div>APP下載</div>
                    </div>
                    <div class="header__info__item">
                      <svg-icon iconClass="mail" className="icon" />
                      <div>電子報</div>
                    </div>
                    <div class="header__info__item">
                      <svg-icon iconClass="fb" className="icon" />
                      <div>粉絲團</div>
                    </div>
                  </div>

                  <div class="header__info__right">
                    <div class="header__info__item">
                      <svg-icon iconClass="info" className="icon" />
                      <div>關於</div>
                    </div>
                    <div class="header__info__item">
                      <svg-icon iconClass="hire" className="icon" />
                      <div>徵才</div>
                    </div>
                    <div class="header__info__item">
                      <svg-icon iconClass="heart" className="icon" />
                      <div>公益</div>
                    </div>
                    <div class="header__info__item">
                      <svg-icon iconClass="custom" className="icon" />
                      <div>客服</div>
                    </div>
                    <div class="header__info__item">
                      <svg-icon iconClass="cart" className="icon" />
                      <div>購物車</div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="header__bar">
          <v-container class="py-2 py-md-3">
            <v-row>
              <v-col cols="12">
                <div class="header__box">
                  <div class="header__left">
                    <div class="logo__box d-lg-block">
                      <svg-icon iconClass="Logo" className="Logo" />
                    </div>
                    <div class="logo__box__notext d-lg-none">
                      <svg-icon iconClass="LogoNoText" className="LogoNoText" />
                    </div>
                  </div>
                  <!-- Search Icon -->
                  <div
                    class="
                      header__search
                      d-flex d-lg-none
                      align-center
                      justify-center
                    "
                    @click="searchHandler"
                  >
                    <svg-icon iconClass="search" className="search" />
                  </div>
                  <div class="header__right d-lg-flex">
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="rs" className="navicon" />
                      </div>
                      <div class="header__navName">美食餐廳</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="rs" className="navicon" />
                      </div>
                      <div class="header__navName">美食餐廳</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="rs" className="navicon" />
                      </div>
                      <div class="header__navName">美食餐廳</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="beauty" className="navicon" />
                      </div>
                      <div class="header__navName">美容舒壓</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="travel" className="navicon" />
                      </div>
                      <div class="header__navName">旅遊住宿</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="home" className="navicon" />
                      </div>
                      <div class="header__navName">宅配美食</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="fiveTimes" className="navicon" />
                      </div>
                      <div class="header__navName">五倍券專區</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="massage" className="navicon" />
                      </div>
                      <div class="header__navName">按摩</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="hotspring" className="navicon" />
                      </div>
                      <div class="header__navName">泡湯休息</div>
                    </div>
                    <div class="header__navItem">
                      <div class="header__navicon">
                        <svg-icon iconClass="shipping" className="navicon" />
                      </div>
                      <div class="header__navName">宅配購物+</div>
                    </div>
                    <div class="header__divline"></div>
                    <div class="header__policy">
                      <div>服務條款</div>
                      <div>隱私權政策</div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <template v-slot:extension>
        <div
          class="collaborate__bar"
          :class="{ 'd-none': extensionHeight !== 30 }"
        >
          <v-container>
            <v-row>
              <v-col cols="12" class="py-0 px-0 px-md-3">
                <div>與一起旅行社共同營運。</div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </template>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      scrollY: 0,
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 95;
        case "sm":
          return 95;
        case "md":
          return 100;
        case "lg":
          return 150;
        case "xl":
          return 150;
        default:
          return null;
      }
    },
    extensionHeight() {
      if (
        this.scrollY !== 0 &&
        this.$vuetify.breakpoint.name !== "lg" &&
        this.$vuetify.breakpoint.name !== "xl"
      ) {
        return 0;
      } else {
        return 30;
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      this.scrollY = window.scrollY;
    },
    searchHandler() {
      this.$emit("showModal", true);
    },
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>
<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  padding: 0px;
}
.header {
  width: 100%;
  .header__channel__bar {
    display: flex;
    .header__channel__box {
      display: flex;
      justify-content: space-between;
      .header__channel__div {
        padding: 0 10px;
        border-radius: 6px;
        border: 1px solid #afafaf;
      }
      .header__channel__blank {
        width: 54px;
      }
    }
  }
  .header__info__bar {
    display: none;
    width: 100%;
    background: white;
    height: 100%;
    font-size: 0.8rem;
    .header__info__box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header__info__left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .header__info__item {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin-right: 16px;
          .icon {
            margin-right: 4px;
            width: 20px;
            height: 20px;
          }
        }
      }
      .header__info__right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .header__info__item {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin-right: 16px;
          .icon {
            margin-right: 4px;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  .header__bar {
    width: 100%;
    height: auto;
    background: #ff8800;
    display: flex;
    align-items: center;
    .header__box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header__left {
        width: 15%;
        .logo__box {
          display: none;
          .Logo {
            cursor: pointer;
            width: 150px;
            height: 80px;
          }
        }
        .logo__box__notext {
          display: block;
          .LogoNoText {
            cursor: pointer;
            width: 105px;
            height: 28px;
          }
        }
      }
      .header__search {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      .header__right {
        position: relative;
        display: none;
        .header__navItem {
          width: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .header__navicon {
            .navicon {
              width: 45px;
              height: 45px;
            }
          }
          .header__navName {
            color: white;
          }
        }
        .header__divline {
          position: relative;
          width: 1px;
          height: 36px;
          background: white;
          transform: translateY(50%);
          margin: 0 10px;
        }
        .header__policy {
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
      }
    }
  }
}

::v-deep .v-toolbar__extension {
  background: #ff8800;
  color: white;
  padding: 0 16px;
}

.collaborate__bar {
  width: 100%;
  height: auto;
  background: #ff8800;
  color: white;
  font-size: 1rem;
  font-weight: 900;
}

@media screen and (max-width: 1264px) {
  .collaborate__bar {
    font-size: 0.8rem;
  }
}
</style>
