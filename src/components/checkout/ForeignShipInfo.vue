<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="3" class="py-0 mt-3">
        <v-select
          :items="['1', '2']"
          outlined
          dense
          placeholder="請選擇寄送資料"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          收件人名<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:小明"> </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          收件人姓<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:王"> </v-text-field>
      </v-col>
    </v-row>
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
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
        <div class="text-body-2 mb-2">
          寄送飯店名稱<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="請輸入寄送飯店名稱">
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
        <div class="text-body-2 mb-2">
          飯店電話<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="請輸入飯店電話">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
        <div class="text-body-2 mb-2">飯店地址</div>
        <v-textarea
          v-model="textarea"
          outlined
          dense
          counter
          maxlength="80"
          single-line
          placeholder="請輸入寄送飯店地址"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          訂房人英文名(同護照)<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:Xiao Ming"> </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          訂房人英文姓(同護照)<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:Wang"> </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          訂房人名<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:小明"> </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          訂房人姓<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:王"> </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          訂房網站<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="請輸入訂房網站">
        </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          訂房編號<span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="請輸入訂房編號">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          入住日期 <span style="color: #ee7c76">*</span>
        </div>
        <v-menu
          ref="menu"
          v-model="menu5"
          :close-on-content-click="false"
          :return-value.sync="date6"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date6"
              append-icon="mdi-calendar"
              readonly
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date6" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date6)">
              確認
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          退房日期 <span style="color: #ee7c76">*</span>
        </div>
        <v-menu
          ref="menu"
          v-model="menu6"
          :close-on-content-click="false"
          :return-value.sync="date7"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date7"
              append-icon="mdi-calendar"
              readonly
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date7" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date7)">
              確認
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "ForeignShipInfo",
  data() {
    return {
      textarea: "",
      date6: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date7: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu5: false,
      menu6: false,
    };
  },
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
