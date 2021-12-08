<template>
  <v-container fluid id="productdetail__page" class="pa-0">
    <div v-if="showTab" class="test__toolbar">TAB</div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="test__block">
            <div class="middle__block"></div>
            <div class="middle__block"></div>
            <div class="middle__block"></div>
            <div id="here">
              <h1>Target</h1>
            </div>
            <div class="middle__block"></div>
            <div class="middle__block"></div>
            <div class="middle__block"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      showTab: false,
    };
  },
  mounted() {
    document.addEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      const here = document.getElementById("here");

      if (window.scrollY >= here.offsetTop + here.offsetHeight) {
        this.showTab = true;
      } else {
        this.showTab = false;
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollHandler);
  },
};
</script>
<style lang="scss" scoped>
.test__toolbar {
  position: fixed;
  height: 50px;
  background: pink;
  width: 100%;
  z-index: 100;
}
#productdetail__page {
  background: #f5f5f5;
  .test__block {
    position: relative;
    #here {
      height: 420px;
      background: goldenrod;
      border-radius: 6px;
    }
    .middle__block {
      height: 400px;
      background: blueviolet;
      border-radius: 6px;
      margin: 8px auto;
    }
  }
}
</style>
