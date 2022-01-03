<template>
  <div>
    <!-- 第一行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="3" class="pb-0">
        <div class="text-body-2 mb-2">
          國家/地區 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['', '']"
          placeholder="請選擇國家"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>
    <!-- 第二行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          收件人名 <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:小明"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          收件人姓 <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:王"></v-text-field>
      </v-col>
    </v-row>
    <!-- 第三行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          收件人電話 <span style="color: #ee7c76">*</span>
        </div>
        <div class="checkoutcard__tel__box d-flex">
          <div class="checkoutcard__tel__code">
            <v-select :items="['+886']" value="+886" outlined dense></v-select>
          </div>
          <div class="checkoutcard__tel__input">
            <v-text-field outlined dense placeholder="請輸入電話號碼">
            </v-text-field>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="5" class="py-0">
        <div class="text-body-2 mb-2">
          email <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="請輸入email"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "OrderInfo",
};
</script>
<style lang="scss" scoped>
.checkoutcard__tel__box {
  width: 100%;
  .checkoutcard__tel__code {
    width: 100px;
  }
  .checkoutcard__tel__input {
    width: 100%;
  }
}
</style>
