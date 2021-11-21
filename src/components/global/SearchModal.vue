<template>
  <v-container class="py-0" fluid>
    <v-row
      class="searchmodal"
      style="z-index: 105"
      :class="{ show: showSearch }"
    >
      <v-col>
        <div class="searchmodal__header py-3 px-0">
          <div class="searchmodal__back" @click="closeHandler">
            <svg-icon iconClass="arrow" className="arrow" />
          </div>
          <div class="searchmodal__title">搜尋</div>
          <div class="searchmodal__blank">&nbsp;</div>
        </div>
        <div class="searchmodal__searchblock">
          <SearchInput />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SearchInput from "../home/search/SearchInput.vue";

export default {
  name: "SearchModal",
  components: { SearchInput },
  props: {
    showSearch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      effectShow: false,
    };
  },
  watch: {
    showSearch() {
      if (this.showSearch === true) {
        setTimeout(() => {
          this.effectShow = true;
        }, 0);
      }
    },
  },
  methods: {
    closeHandler() {
      this.effectShow = false;
      this.$emit("closeModal", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.searchmodal {
  position: fixed;
  top: 0;
  width: 100%;
  height: 102%;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transform: translateX(1500px);
  transition: all 0.3s ease-in-out;
  &.show {
    transform: translateX(0px);
    pointer-events: unset;
    opacity: 1;
  }
  .searchmodal__header {
    display: flex;
    justify-content: space-between;
    .searchmodal__back {
      width: 54px;
      cursor: pointer;
    }
    .searchmodal__blank {
      width: 54px;
    }
  }
  .searchmodal__searchblock {
    width: 100%;
    height: 50px;
  }
}
</style>
