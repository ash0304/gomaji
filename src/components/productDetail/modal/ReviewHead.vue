<template>
  <div class="modal__header d-flex align-center justify-space-between pa-4">
    <div @click="emitClose" class="close__btn">
      <i class="arrow left"></i>
    </div>
    <div class="title"></div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div
          class="d-flex align-center justify-center sort__btn"
          v-bind="attrs"
          v-on="on"
        >
          <div class="text-body-2 mr-2">最高分至最低分</div>
          <i class="arrow down"></i>
        </div>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n">
          <v-list-item-title>{{ `更多排序 ${n}` }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "ReviewHead",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    emitClose() {
      const obj = {
        status: false,
      };
      this.$emit("close", obj);
    },
  },
};
</script>
<style lang="scss" scoped>
.close__btn {
  cursor: pointer;
  .arrow {
    width: 15px;
    height: 15px;
    border: solid #999999;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    &.left {
      transform: rotate(135deg);
    }
  }
}
.sort__btn {
  border: 1px solid #afafaf;
  border-radius: 6px;
  padding: 8px 12px;
  .arrow {
    width: 8px;
    height: 8px;
    border: solid #afafaf;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    &.down {
      transform: rotate(45deg);
    }
  }
}
</style>
