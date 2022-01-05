<template>
  <div class="edit__page py-8 px-3 px-lg-10 mb-10">
    <div class="text-h6 font-weight-black mb-3">編輯常用旅客代表人</div>
    <!-- tabs -->
    <v-tabs v-model="tab" color="#ff8800">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <!-- tab items -->
    <v-tabs-items v-model="tab">
      <v-tab-item :key="'基本資料'">
        <div class="py-6 px-3">
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">
                本國名<span style="color: #ee7c76">*</span>
              </div>
              <v-text-field outlined dense placeholder="例:小明">
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">
                本國姓<span style="color: #ee7c76">*</span>
              </div>
              <v-text-field outlined dense placeholder="例:王"> </v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">
                性別<span style="color: #ee7c76">*</span>
              </div>
              <v-select
                :items="['男', '女']"
                outlined
                dense
                placeholder="請選擇"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">英文名(同護照)</div>
              <v-text-field outlined dense placeholder="請輸入英文名(同護照)">
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">英文姓(同護照)</div>
              <v-text-field outlined dense placeholder="請輸入英文姓(同護照)">
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">護照號碼</div>
              <v-text-field outlined dense placeholder="請輸入護照號碼">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">出生日期</div>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    append-icon="mdi-calendar"
                    readonly
                    outlined
                    dense
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    取消
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    確認
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">國家/地區</div>
              <v-select
                :items="['', '']"
                placeholder="請選擇國家"
                outlined
                dense
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
              <div class="text-body-2 mb-2">
                收件人電話 <span style="color: #ee7c76">*</span>
              </div>
              <div class="edit__tel__box d-flex">
                <div class="edit__tel__code">
                  <v-select
                    :items="['+886']"
                    value="+886"
                    outlined
                    dense
                  ></v-select>
                </div>
                <div class="edit__tel__input">
                  <v-text-field outlined dense placeholder="請輸入電話號碼">
                  </v-text-field>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="8" class="py-0">
              <div class="text-body-2 mb-2">
                email <span style="color: #ee7c76">*</span>
              </div>
              <v-text-field
                outlined
                dense
                placeholder="請輸入email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
              <div class="d-flex justify-end">
                <div class="edit__savebtn">儲存</div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
      <v-tab-item :key="'常用旅客'">
        <div class="py-6 px-0 px-lg-3">
          <!-- 新增按鈕 -->
          <div
            v-if="!isAdd"
            class="edit__addbtn d-flex align-center mb-3"
            @click="addHander"
          >
            <svg-icon iconClass="yplus" className="yplus" />
            <div class="ml-1">新增常用旅客</div>
          </div>
          <!-- 新增常用旅客 -->
          <div v-if="isAdd" class="edit__passenger__item">
            <div
              class="
                edit__passenger__head
                d-flex
                align-center
                justify-space-between
                pa-3
              "
            >
              <div class="d-flex align-center" style="color: #444444">
                <div class="edit__passenger__icon"></div>
                <div class="text-body-1 font-weight-black ml-2">
                  新增常用旅客
                </div>
              </div>
            </div>
            <div class="edit__passenger__body expand">
              <div class="px-3 py-8">
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      本國名<span style="color: #ee7c76">*</span>
                    </div>
                    <v-text-field outlined dense placeholder="例:小明">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      本國姓<span style="color: #ee7c76">*</span>
                    </div>
                    <v-text-field outlined dense placeholder="例:王">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      性別<span style="color: #ee7c76">*</span>
                    </div>
                    <v-select
                      :items="['男', '女']"
                      outlined
                      dense
                      placeholder="請選擇"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">英文名(同護照)</div>
                    <v-text-field
                      outlined
                      dense
                      placeholder="請輸入英文名(同護照)"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">英文姓(同護照)</div>
                    <v-text-field
                      outlined
                      dense
                      placeholder="請輸入英文姓(同護照)"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">護照號碼</div>
                    <v-text-field outlined dense placeholder="請輸入護照號碼">
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">出生日期</div>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          append-icon="mdi-calendar"
                          readonly
                          outlined
                          dense
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          取消
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          確認
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">國家/地區</div>
                    <v-select
                      :items="['', '']"
                      placeholder="請選擇國家"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      收件人電話 <span style="color: #ee7c76">*</span>
                    </div>
                    <div class="edit__tel__box d-flex">
                      <div class="edit__tel__code">
                        <v-select
                          :items="['+886']"
                          value="+886"
                          outlined
                          dense
                        ></v-select>
                      </div>
                      <div class="edit__tel__input">
                        <v-text-field
                          outlined
                          dense
                          placeholder="請輸入電話號碼"
                        >
                        </v-text-field>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="8" class="py-0">
                    <div class="text-body-2 mb-2">
                      email <span style="color: #ee7c76">*</span>
                    </div>
                    <v-text-field
                      outlined
                      dense
                      placeholder="請輸入email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
                    <div class="d-flex justify-end">
                      <div class="edit__cancel mx-2" @click="addedHander">
                        取消
                      </div>
                      <div class="edit__savebtn mx-2" @click="addedHander">
                        增加
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
          <!-- 已新增旅客列表 -->
          <div
            v-for="(item, index) in passengerItem"
            :key="index"
            class="edit__passenger__item my-2"
          >
            <div
              class="
                edit__passenger__head
                d-flex
                align-center
                justify-space-between
                pa-3
              "
            >
              <div class="d-flex align-center" style="color: #444444">
                <div
                  class="edit__passenger__iconname"
                  :class="`color__${index}`"
                >
                  {{ item.name.substr(0, 1) }}
                </div>
                <div class="text-body-1 font-weight-black ml-2">
                  {{ item.name }}
                </div>
              </div>
              <div class="d-flex" style="color: #6d6c6c">
                <div
                  class="edit__editbtn d-flex mx-2"
                  @click="expandHandler(item)"
                >
                  <svg-icon iconClass="edit" className="edit" />
                  <div class="text-body-2 ml-1">編輯</div>
                </div>
                <div class="edit__deletebtn d-flex mx-2">
                  <svg-icon iconClass="trash" className="trash" />
                  <div class="text-body-2 ml-1">刪除</div>
                </div>
              </div>
            </div>
            <div
              class="edit__passenger__body"
              :class="{ expand: item.isExpand }"
            >
              <div class="px-3 py-8">
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      本國名<span style="color: #ee7c76">*</span>
                    </div>
                    <v-text-field outlined dense placeholder="例:小明">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      本國姓<span style="color: #ee7c76">*</span>
                    </div>
                    <v-text-field outlined dense placeholder="例:王">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      性別<span style="color: #ee7c76">*</span>
                    </div>
                    <v-select
                      :items="['男', '女']"
                      outlined
                      dense
                      placeholder="請選擇"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">英文名(同護照)</div>
                    <v-text-field
                      outlined
                      dense
                      placeholder="請輸入英文名(同護照)"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">英文姓(同護照)</div>
                    <v-text-field
                      outlined
                      dense
                      placeholder="請輸入英文姓(同護照)"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">護照號碼</div>
                    <v-text-field outlined dense placeholder="請輸入護照號碼">
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">出生日期</div>
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          append-icon="mdi-calendar"
                          readonly
                          outlined
                          dense
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          取消
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          確認
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">國家/地區</div>
                    <v-select
                      :items="['', '']"
                      placeholder="請選擇國家"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
                    <div class="text-body-2 mb-2">
                      收件人電話 <span style="color: #ee7c76">*</span>
                    </div>
                    <div class="edit__tel__box d-flex">
                      <div class="edit__tel__code">
                        <v-select
                          :items="['+886']"
                          value="+886"
                          outlined
                          dense
                        ></v-select>
                      </div>
                      <div class="edit__tel__input">
                        <v-text-field
                          outlined
                          dense
                          placeholder="請輸入電話號碼"
                        >
                        </v-text-field>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="12" md="12" lg="8" class="py-0">
                    <div class="text-body-2 mb-2">
                      email <span style="color: #ee7c76">*</span>
                    </div>
                    <v-text-field
                      outlined
                      dense
                      placeholder="請輸入email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12" lg="12" class="py-0">
                    <div class="d-flex justify-end">
                      <div class="edit__cancel mx-2" @click="saveHandler(item)">
                        取消
                      </div>
                      <div
                        class="edit__savebtn mx-2"
                        @click="saveHandler(item)"
                      >
                        儲存
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  name: "EditCard",
  data() {
    return {
      tab: null,
      items: ["基本資料", "常用旅客"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      isAdd: false,
      isExpand: false,
      passengerItem: [
        {
          id: 0,
          name: "Amy Chen",
          isExpand: false,
        },
        {
          id: 1,
          name: "小明 王",
          isExpand: false,
        },
        {
          id: 2,
          name: "Ted Lin",
          isExpand: false,
        },
      ],
    };
  },
  methods: {
    test() {
      console.log("123");
    },
    addHander() {
      this.isAdd = true;
    },
    addedHander() {
      this.isAdd = false;
    },
    expandHandler(item) {
      item.isExpand = true;
    },
    saveHandler(item) {
      item.isExpand = false;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .v-slide-group__wrapper {
  border-bottom: 1px solid #c3cace;
}

.edit__page {
  position: relative;
  width: 100%;
  margin: auto;
  background: #fff;
  border-radius: 5px;
  .edit__savebtn {
    background: #ff8800;
    color: #fff;
    border-radius: 2px;
    padding: 4px 4px;
    width: 101px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    cursor: pointer;
  }
  .edit__cancel {
    background: #afafaf;
    color: #fff;
    border-radius: 2px;
    padding: 4px 4px;
    width: 101px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    cursor: pointer;
  }
  .edit__addbtn {
    cursor: pointer;
    color: #ff8800;
  }
  .edit__passenger__item {
    .edit__passenger__head {
      height: 65px;
      border: 1px solid #c3cace;
      .edit__passenger__icon {
        width: 35px;
        height: 35px;
        background: url("../../assets/productDetail/user-icon.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .edit__passenger__iconname {
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: white;
        border-radius: 100%;
        &.color__0 {
          background: #ff8800;
        }
        &.color__1 {
          background: #62aaab;
        }
        &.color__2 {
          background: #ee7c76;
        }
      }
      .edit__editbtn {
        cursor: pointer;
      }
      .edit__deletebtn {
        cursor: pointer;
      }
    }
    .edit__passenger__body {
      border: 1px solid #c3cace;
      border-top: none;
      max-height: 0;
      overflow: hidden;
      transition: max-height 1s ease-in-out;
      &.expand {
        max-height: 1500px;
      }
    }
  }
}

.edit__tel__box {
  width: 100%;
  .edit__tel__code {
    width: 100px;
  }
  .edit__tel__input {
    width: 100%;
  }
}

@media screen and (min-width: 1264px) {
  .edit__page {
    width: 750px;
  }
}
</style>
