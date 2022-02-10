<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          接送日期 <span style="color: #ee7c76">*</span>
        </div>
        <v-menu
          ref="menu"
          v-model="menu3"
          :close-on-content-click="false"
          :return-value.sync="date4"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date4"
              append-icon="mdi-calendar"
              class="checkoutcard__time__input"
              readonly
              outlined
              dense
              placeholder="請選擇接送日期"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date4" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date4)">
              確認
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2 d-none d-lg-block">
          接送時間 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['', '']"
          outlined
          dense
          placeholder="請選擇接送時間"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="8" class="py-0">
        <div class="text-body-2 mb-2">上車地點</div>
        <v-textarea
          v-model="textarea"
          outlined
          dense
          counter
          maxlength="80"
          single-line
          placeholder="請輸入上車地點和地址供司機參考"
        ></v-textarea>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "PickupInfo",
  data() {
    return {
      textarea: "",
      date4: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu3: false,
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep.v-text-field {
  font-size: 14px;
}
.checkoutcard__time__box {
  width: 100%;
  .checkoutcard__time__code {
    width: 200px;
  }
  .checkoutcard__time__input {
    width: 100%;
  }
}
</style>
