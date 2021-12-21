<template>
  <v-container class="px-0 d-none d-lg-block">
    <v-row>
      <v-col cols="6" class="pr-0 pr-lg-3">
        <div class="search__product__box">
          <input
            type="text"
            class="search__product__input"
            placeholder="輸入目的地、景點、體驗行程或活動名稱..."
          />
          <svg-icon iconClass="whitesearch" className="whitesearch" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "SearchProductInput",
};
</script>
<style lang="scss" scoped>
.search__product__box {
  position: relative;
  .search__product__input {
    width: 100%;
    height: 45px;
    background: #f5f5f5;
    padding: 5px 60px 5px 15px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid rgb(229, 229, 229);
    outline: none;
  }
  .whitesearch {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
::placeholder {
  color: #afafaf;
}
</style>
