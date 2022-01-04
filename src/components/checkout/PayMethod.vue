<template>
  <div>
    <v-radio-group v-model="radios">
      <v-radio value="ATM">
        <template v-slot:label>
          <div style="color: #333333">
            ATM付款
            <span style="color: #afafaf; font-size: 14px">含網路銀行匯款</span
            ><span style="color: #ee7c76; font-size: 14px">(折扣77元)</span>
          </div>
        </template>
      </v-radio>
      <div class="checkoutcard__divide my-3"></div>
      <v-radio value="Credit">
        <template v-slot:label>
          <div>
            <div class="d-flex align-center">
              <div>信用卡線上一次付清</div>
              <svg-icon iconClass="visa" className="visa ml-2" />
              <svg-icon iconClass="mastercard" className="mastercard ml-2" />
              <svg-icon iconClass="jcb" className="jcb ml-2" />
            </div>
          </div>
        </template>
      </v-radio>
      <div class="mt-3 pl-8">
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
            <div class="text-body-2 mb-2">
              信用卡號碼 <span style="color: #ee7c76">*</span>
            </div>
            <v-text-field
              outlined
              dense
              placeholder="oooo oooo oooo oooo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
            <div class="text-body-2 mb-2">
              有效期限 <span style="color: #ee7c76">*</span>
            </div>
            <v-text-field outlined dense placeholder="MM/YY"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
            <div class="text-body-2 mb-2">
              背面末3碼 <span style="color: #ee7c76">*</span>
            </div>
            <v-text-field outlined dense placeholder="CVC/CVV"></v-text-field>
          </v-col>
        </v-row>
      </div>
    </v-radio-group>
  </div>
</template>
<script>
export default {
  name: "PayMethod",
  data() {
    return {
      radios: "Credit",
    };
  },
};
</script>
<style lang="scss" scoped>
.checkoutcard__divide {
  border: 0.5px solid #aeaeae;
}
.visa {
  width: 50px;
  height: 16px;
}
.mastercard {
  width: 27px;
  height: 16px;
}
.jcb {
  width: 23px;
  height: 16px;
}
</style>
