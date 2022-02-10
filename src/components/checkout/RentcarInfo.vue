<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0 mt-3">
        <div class="text-body-2 mb-2">
          取車地點 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['', '']"
          outlined
          dense
          placeholder="請選擇取車地點"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          取車日期及時間 <span style="color: #ee7c76">*</span>
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
              placeholder="航班出發日期"
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
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          是否需要免費Wifi機 <span style="color: #ee7c76">*</span>
        </div>
        <v-radio-group v-model="row" row mandatory>
          <v-radio label="需要" value="radio-1"></v-radio>
          <v-radio label="不需要" value="radio-2"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          是否需要免費GPS <span style="color: #ee7c76">*</span>
        </div>
        <v-radio-group v-model="row1" row mandatory>
          <v-radio label="需要" value="radio-1"></v-radio>
          <v-radio label="不需要" value="radio-2"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          還車地點 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['', '']"
          outlined
          dense
          placeholder="請選擇環車地點"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          還車日期及時間 <span style="color: #ee7c76">*</span>
        </div>
        <v-menu
          ref="menu"
          v-model="menu4"
          :close-on-content-click="false"
          :return-value.sync="date5"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date5"
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
          <v-date-picker v-model="date5" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date5)">
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
  name: "RentcarInfo",
  data() {
    return {
      row: null,
      row1: null,
      date4: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date5: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu3: false,
      menu4: false,
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
