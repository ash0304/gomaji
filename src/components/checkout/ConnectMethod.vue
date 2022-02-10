<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="3" class="py-0">
        <div class="text-body-2 mb-2"></div>
        <v-text-field outlined dense placeholder="請輸入旅遊期間聯絡方式">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          聯絡人名<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:Xiao Ming"> </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          聯絡人姓<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:Wang"> </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          旅遊期間聯絡電話<span style="color: #ee7c76">*</span>
        </div>
        <v-radio-group v-model="row2" row mandatory>
          <v-radio label="有" value="radio-1"></v-radio>
          <v-radio label="沒有" value="radio-2"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          聯絡電話<span style="color: #ee7c76">*</span>
        </div>
        <div class="checkoutcard__tel__box d-flex">
          <div class="checkoutcard__tel__code mr-2">
            <v-select :items="['+886']" value="+886" outlined dense></v-select>
          </div>
          <div class="checkoutcard__tel__input">
            <v-text-field outlined dense placeholder="請輸入電話號碼">
            </v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          APP聯絡方式<span style="color: #ee7c76">*</span>
        </div>
        <v-radio-group v-model="row3" row mandatory>
          <v-radio label="有" value="radio-1"></v-radio>
          <v-radio label="沒有" value="radio-2"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
        <div class="text-body-2 mb-2">
          聯絡APP<span style="color: #ee7c76">*</span>
        </div>
        <div class="checkoutcard__time__box d-flex">
          <div class="checkoutcard__time__code mr-2">
            <v-select
              :items="['wechat', 'line']"
              outlined
              dense
              placeholder="請選擇"
            ></v-select>
          </div>
          <div class="checkoutcard__time__input">
            <v-text-field outlined dense placeholder="APP帳號"> </v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ConnectMethod",
  data() {
    return {
      textarea: "",
      row2: null,
      row3: null,
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep.v-text-field {
  font-size: 14px;
}
::v-deep label {
  font-size: 14px;
}
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
