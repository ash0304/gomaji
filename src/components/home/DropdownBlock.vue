<template>
  <v-row>
    <v-col class="dropdown__block">
      <v-container class="pa-0">
        <v-row>
          <v-col cols="12" class="pa-0">
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
