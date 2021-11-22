<template>
  <v-row>
    <v-col class="dropdown__block">
      <v-container class="pa-0">
        <v-row>
          <v-col cols="12" class="pa-0 d-lg-block dropdown__slide">
            <!-- slide for view greater than lg -->
            <v-slide-group show-arrows center-active>
              <v-slide-item v-for="n in 12" :key="n">
                <v-menu
                  offset-y
                  open-on-hover
                  :nudge-top="-10"
                  close-delay="100"
                  content-class="dropdown__menu"
                >
                  <template v-slot:activator="{ on }">
                    <div dark v-on="on" class="dropdown__item">更多選項</div>
                  </template>
                  <v-list>
                    <v-list-item v-for="n in 6" :key="n" link>
                      <v-list-item-title>{{
                        `更多選項 ${n}`
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-slide-item>
            </v-slide-group>
          </v-col>
          <v-col cols="12 pb-2 pt-3 dropdown__hamburger__container d-lg-none">
            <!-- dropdown for view lesser than lg -->
            <div class="dropdown__hamburger__box d-flex justify-space-between">
              <v-menu offset-y :nudge-width="100">
                <template v-slot:activator="{ on, attrs }">
                  <div
                    class="
                      dropdown__hamburger
                      d-flex
                      flex-column
                      align-center
                      justify-space-around
                    "
                    v-bind="attrs"
                    v-on="on"
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </template>
                <v-list>
                  <v-list-item v-for="n in 9" :key="n">
                    <v-list-item-title>更多選項</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <div class="dropdown__blank">&nbsp;</div>
              <div class="dropdown__blank">&nbsp;</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "DropdownBlock",
};
</script>
<style lang="scss" scoped>
.dropdown__block {
  background: #f5f5f5;
  .dropdown__slide {
    display: none;
    .dropdown__item {
      position: relative;
      margin: 0 10px;
      padding: 12px 17px 12px 15px;
      &::after {
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        width: 1px;
        height: 50%;
        background: #707070;
      }
      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 2px;
        background: #ff8800;
        display: none;
      }
      &:hover {
        cursor: pointer;
        color: #ff8800;
        &::before {
          display: block;
        }
      }
    }
  }
  .dropdown__hamburger__container {
    display: block;
    .dropdown__hamburger__box {
      .dropdown__hamburger {
        width: 20px;
        height: 20px;
        div {
          width: 20px;
          height: 3px;
          background: #333;
        }
      }
      .dropdown__blank {
        width: 54px;
      }
    }
  }
}

.dropdown__menu {
  border-radius: 6px;
  contain: initial;
  overflow: visible;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 15px;
    transform: translateY(-100%);
    width: 10px;
    height: 13px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid #fff;
  }
}
</style>
