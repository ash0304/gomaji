<template>
  <div>
    <div class="text-h6 font-weight-black">受買人</div>
    <div class="pl-6">
      <v-radio-group v-model="radios">
        <v-radio value="ATM">
          <template v-slot:label>
            <div>個人</div>
          </template>
        </v-radio>
        <v-radio value="Credit">
          <template v-slot:label>
            <div>公司行號</div>
          </template>
        </v-radio>
        <div class="mt-6 pl-8">
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
              <v-text-field
                outlined
                dense
                placeholder="請輸入公司統一便號"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
              <v-text-field
                outlined
                dense
                placeholder="請輸入公司抬頭"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
              <div class="text-body-2">
                *收據僅提供電子，無紙本造成不便，請見諒。
              </div>
            </v-col>
          </v-row>
        </div>
      </v-radio-group>
    </div>
    <div>
      <!-- 外組一 -->
      <v-radio-group v-model="radios1">
        <v-radio value="Ele">
          <template v-slot:label>
            <div>電子發票</div>
          </template>
        </v-radio>
        <div class="pl-6">
          <!-- 內組二 -->
          <v-radio-group v-model="radios3">
            <v-radio value="Member">
              <template v-slot:label>
                <div>會員載具</div>
              </template>
            </v-radio>
            <div class="mt-3"></div>
            <v-radio value="Phone">
              <template v-slot:label>
                <div>手機條碼載具</div>
              </template>
            </v-radio>
            <div class="mt-3 pl-8">
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
                  <v-text-field
                    outlined
                    dense
                    placeholder="請輸入手機條碼載具"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <v-radio value="Nature">
              <template v-slot:label>
                <div>自然人憑證載具</div>
              </template>
            </v-radio>
            <div class="mt-3 pl-8">
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
                  <v-text-field
                    outlined
                    dense
                    placeholder="請輸入自然人憑證載具"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <v-radio value="Email">
              <template v-slot:label>
                <div>發票寄送至Email</div>
              </template>
            </v-radio>
            <div class="mt-3 pl-8">
              <v-row>
                <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
                  <div class="d-flex flex-colum flex-lg-row align-start">
                    <v-text-field
                      outlined
                      dense
                      placeholder="請輸入發票寄送至Email"
                    ></v-text-field>
                    <div class="pt-2 pl-1">
                      <v-radio value="Same">
                        <template v-slot:label>
                          <div class="text-body-2 text-no-wrap">同上</div>
                        </template>
                      </v-radio>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-radio-group>
        </div>
        <v-radio value="Give">
          <template v-slot:label>
            <div>捐贈發票</div>
          </template>
        </v-radio>
        <div class="mt-6 pl-8">
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">受捐單位</div>
              <v-select
                :items="['ABC456', 'ABC123']"
                outlined
                dense
                placeholder="請選擇受捐單位"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" class="py-0">
              <div class="text-body-2 mb-2">其他單位代號</div>
              <v-text-field
                outlined
                dense
                placeholder="請輸入其他單位代號"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-radio-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "BillInfo",
  data() {
    return {
      radios: "Credit",
      radios1: "Ele",
      radios2: "Member",
      radios3: "Member",
    };
  },
};
</script>
<style lang="scss" scoped></style>
