<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          航班類型 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['ABC456', 'ABC123']"
          outlined
          dense
          placeholder="請選擇航班類型"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          出發機場 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['桃園', '台北']"
          outlined
          dense
          placeholder="請選擇出發機場"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          航廈 <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          航空公司 <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense> </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          航班編號 <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense> </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          航班出發時間 <span style="color: #ee7c76">*</span>
        </div>
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :return-value.sync="date3"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date3"
              append-icon="mdi-calendar"
              class="checkoutcard__time__input"
              readonly
              outlined
              dense
              placeholder="航班出發日期"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date3" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date3)">
              確認
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2 d-none d-lg-block">&nbsp;</div>
        <div class="checkoutcard__time__box d-flex">
          <div class="checkoutcard__time__code d-flex">
            <v-select
              :items="['10']"
              outlined
              dense
              placeholder="--"
            ></v-select>
            <div class="mx-2 pt-2">時</div>
          </div>
          <div class="checkoutcard__time__code d-flex">
            <v-select
              :items="['55']"
              outlined
              dense
              placeholder="--"
            ></v-select>
            <div class="mx-2 pt-2">分</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "FlightInfo",
  data() {
    return {
      date3: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      textarea: "",
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep.v-text-field {
  font-size: 14px;
}
</style>
