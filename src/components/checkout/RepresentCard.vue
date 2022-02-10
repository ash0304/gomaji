<template>
  <div class="checkoutcard__representcard pa-3 pb-10">
    <div class="d-flex justify-space-between mb-2">
      <div class="text-h6 font-weight-black">旅客代表人</div>
      <div class="checkoutcard__resetbtn d-flex align-center">
        <svg-icon iconClass="reset" className="reset mr-2" />
        <div style="color: #d2750a">清空</div>
      </div>
    </div>
    <!-- 內卡片第一行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="pb-0">
        <v-select
          :items="['', '']"
          placeholder="選擇旅客代表人"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>
    <!-- 內卡片第二行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
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
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          出生日期 <span style="color: #ee7c76">*</span>
        </div>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date1"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date1"
              append-icon="mdi-calendar"
              readonly
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date1" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date1)">
              確認
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          性別 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['男', '女']"
          placeholder="請選擇"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>
    <!-- 內卡片第三行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          旅客護照名(英文) <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:Xiao Ming"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          旅客護照姓(英文) <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:Wang"></v-text-field>
      </v-col>
    </v-row>
    <!-- 內卡片第四行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          證件號碼(護照/身分證) <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field
          outlined
          dense
          placeholder="請輸入證件號碼"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          證件期效 <span style="color: #ee7c76">*</span>
        </div>
        <v-menu
          ref="menu"
          v-model="menu1"
          :close-on-content-click="false"
          :return-value.sync="date2"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date2"
              append-icon="mdi-calendar"
              readonly
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date2" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> 取消 </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date2)">
              確認
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <!-- 內卡片第五行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          本國名 <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:小明"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          本國姓 <span style="color: #ee7c76">*</span>
        </div>
        <v-text-field outlined dense placeholder="例:王"></v-text-field>
      </v-col>
    </v-row>
    <!-- 內卡片第六行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          旅客身高 <span style="color: #ee7c76">*</span>
        </div>
        <div class="checkoutcard__count__box d-flex">
          <div class="checkoutcard__count__input mr-2">
            <v-text-field outlined dense> </v-text-field>
          </div>
          <div class="checkoutcard__count__code">
            <v-select
              :items="['cm']"
              outlined
              dense
              placeholder="單位"
            ></v-select>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          旅客體重 <span style="color: #ee7c76">*</span>
        </div>
        <div class="checkoutcard__count__box d-flex">
          <div class="checkoutcard__count__input mr-2">
            <v-text-field outlined dense> </v-text-field>
          </div>
          <div class="checkoutcard__count__code">
            <v-select
              :items="['kg']"
              outlined
              dense
              placeholder="單位"
            ></v-select>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- 內卡片第七行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="8" class="py-0">
        <div class="text-body-2 mb-2">
          旅客鞋碼 <span style="color: #ee7c76">*</span>
        </div>
        <div class="checkoutcard__count__box d-flex">
          <div class="checkoutcard__count__input mr-2">
            <v-select
              :items="['成人男性', '成人女性']"
              placeholder="請選擇"
              value="成人男性"
              outlined
              dense
            ></v-select>
          </div>
          <div class="checkoutcard__count__code mr-2">
            <v-select
              :items="['cm']"
              outlined
              dense
              placeholder="單位"
            ></v-select>
          </div>
          <div class="checkoutcard__count__code">
            <v-select
              :items="['9']"
              outlined
              dense
              placeholder="鞋碼"
            ></v-select>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- hint -->
    <div class="checkountcard__hint text-caption mb-6">
      如腳掌長低於19CM,請選擇兒童鞋碼
    </div>
    <!-- 內卡片第七行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          眼鏡度數 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['500', '1000']"
          placeholder="請選擇眼鏡度數"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>
    <!-- 內卡片第八行 -->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">
          選擇餐食 <span style="color: #ee7c76">*</span>
        </div>
        <v-select
          :items="['早餐', '午餐']"
          placeholder="請選擇餐食"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="3" class="py-0">
        <div class="checkoutcard__addtraveler d-flex">
          <div class="mr-2">+</div>
          <div>新增常用旅客</div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "RepresentCard",
  data() {
    return {
      date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      menu1: false,
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep.v-text-field {
  font-size: 14px;
}

.checkoutcard__representcard {
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16);
  .checkoutcard__addtraveler {
    color: #ff8800;
    border: 1px solid #ff8800;
    border-radius: 2px;
    padding: 8px 16px;
  }
  .checkoutcard__resetbtn {
    cursor: pointer;
    .reset {
      width: 15px;
      height: 15px;
    }
    &:hover {
      .reset {
        animation: reset 1s infinite ease-in;
      }
    }
  }
}
.checkoutcard__count__box {
  width: 100%;
  .checkoutcard__count__code {
    width: 150px;
  }
  .checkoutcard__count__input {
    width: 100%;
  }
}

@keyframes reset {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
