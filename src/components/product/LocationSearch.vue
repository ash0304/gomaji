<template>
  <div class="location__block py-3">
    <div class="location__inputbox mb-3">
      <svg-icon iconClass="phone" className="search" />
      <input type="text" placeholder="搜尋目的地" class="location__input" />
    </div>
    <!-- 第一層 -->
    <v-list>
      <!-- 做顯示更多功能隔的template -->
      <template v-for="(item, index) in items">
        <v-list-group
          v-if="index < limitLength"
          :key="index"
          no-action
          :color="'#ff8800'"
        >
          <template v-slot:activator>
            <!-- checkbox 註: 設置indeterminate屬性可以出現未完成圖標 -->
            <!-- 加click.stop 確保勾選時不會展開會縮放 -->
            <v-checkbox
              :color="'#ff8800'"
              class="location__checkbox"
              :ripple="false"
              @click.stop=""
              :indeterminate="item.indeterminate"
              v-model="item.checkValue"
            ></v-checkbox>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <!-- 第二層 (需要區別還有沒有第三層) -->
          <v-list class="pl-4">
            <!-- 判斷第三層存在&長度是否大於0 -->
            <template
              v-if="item.items[index].items && item.items[index].items.length"
            >
              <v-list-group
                v-for="child in item.items"
                :key="child.title"
                :color="'#ff8800'"
                class="location__cityitem"
              >
                <!-- custom -->
                <template v-slot:activator>
                  <v-checkbox
                    :color="'#ff8800'"
                    class="location__checkbox"
                    :ripple="false"
                    v-model="child.checkValue"
                    @click.stop=""
                  ></v-checkbox>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="child.title"
                      class="location__cityname"
                    ></v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list class="pl-4">
                  <v-list-item
                    v-for="children in child.items"
                    :key="children.title"
                    :color="'#ff8800'"
                  >
                    <v-checkbox
                      :color="'#ff8800'"
                      class="location__checkbox"
                      :ripple="false"
                      :value="children.checkValue"
                    ></v-checkbox>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="children.title"
                        class="location__distancename"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-list-group>
            </template>
            <!-- 沒有第三層用非收合型組漸 -->
            <template v-else>
              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                :color="'#ff8800'"
              >
                <v-checkbox
                  :color="'#ff8800'"
                  class="location__checkbox"
                  :ripple="false"
                  :value="child.checkValue"
                ></v-checkbox>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="child.title"
                    class="location__cityname"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-list-group>
      </template>
    </v-list>
    <div class="location__more" v-if="!showMore" @click="showMoreHandler">
      <div class="location__morebtn">查看更多目的地</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocationSearch",
  data() {
    return {
      showMore: false,
      limitLength: 3,
      items: [
        {
          items: [
            {
              items: [
                { title: "北投區", checkValue: false },
                { title: "內湖區", checkValue: false },
                { title: "信義區", checkValue: false },
              ],
              title: "台北",
              belong: "台灣",
              checkValue: false,
            },
            {
              items: [
                { title: "北投區", checkValue: false },
                { title: "內湖區", checkValue: false },
                { title: "信義區", checkValue: false },
              ],
              title: "台南",
              belong: "台灣",
              checkValue: false,
            },
            {
              items: [
                { title: "北投區", checkValue: false },
                { title: "內湖區", checkValue: false },
                { title: "信義區", checkValue: false },
              ],
              title: "新北市",
              belong: "台灣",
              checkValue: false,
            },
            {
              items: [
                { title: "北投區", checkValue: false },
                { title: "內湖區", checkValue: false },
                { title: "信義區", checkValue: false },
              ],
              title: "宜蘭",
              belong: "台灣",
              checkValue: false,
            },
            {
              items: [
                { title: "北投區", checkValue: false },
                { title: "內湖區", checkValue: false },
                { title: "信義區", checkValue: false },
              ],
              title: "新竹",
              belong: "台灣",
              checkValue: false,
            },
            {
              items: [
                { title: "北投區", checkValue: false },
                { title: "內湖區", checkValue: false },
                { title: "信義區", checkValue: false },
              ],
              title: "台中",
              belong: "台灣",
              checkValue: false,
            },
            {
              items: [
                { title: "北投區", checkValue: false },
                { title: "內湖區", checkValue: false },
                { title: "信義區", checkValue: false },
              ],
              title: "高雄",
              belong: "台灣",
              checkValue: false,
            },
          ],
          title: "台灣",
          checkValue: false,
          indeterminate: false,
        },
        {
          items: [
            { title: "東京", checkValue: false },
            { title: "大阪", checkValue: false },
            { title: "北海道", checkValue: false },
            { title: "沖繩", checkValue: false },
            { title: "京都", checkValue: false },
            { title: "九州", checkValue: false },
            { title: "名古屋", checkValue: false },
          ],
          title: "日本",
          checkValue: false,
          indeterminate: false,
        },
        {
          items: [
            { title: "首爾", checkValue: false },
            { title: "濟州島", checkValue: false },
            { title: "京畿道", checkValue: false },
            { title: "釜山", checkValue: false },
            { title: "江原道", checkValue: false },
            { title: "大邱", checkValue: false },
            { title: "仁川", checkValue: false },
          ],
          title: "韓國",
          checkValue: false,
          indeterminate: false,
        },
        {
          items: [
            { title: "曼谷", checkValue: false },
            { title: "芭達雅", checkValue: false },
            { title: "普吉島", checkValue: false },
            { title: "青邁", checkValue: false },
            { title: "華欣", checkValue: false },
            { title: "春武里府", checkValue: false },
            { title: "清萊", checkValue: false },
          ],
          title: "泰國",
          checkValue: false,
          indeterminate: false,
        },
        {
          items: [
            { title: "紐約", checkValue: false },
            { title: "舊金山", checkValue: false },
            { title: "拉斯維加斯", checkValue: false },
            { title: "洛杉磯", checkValue: false },
            { title: "奧蘭多", checkValue: false },
            { title: "聖地牙哥", checkValue: false },
            { title: "華盛頓特區", checkValue: false },
          ],
          title: "美國",
          checkValue: false,
          indeterminate: false,
        },
        {
          items: [
            { title: "羅馬", checkValue: false },
            { title: "佛羅倫斯", checkValue: false },
            { title: "威尼斯", checkValue: false },
            { title: "米蘭", checkValue: false },
            { title: "那不勒斯", checkValue: false },
            { title: "杜林", checkValue: false },
            { title: "普利亞", checkValue: false },
          ],
          title: "義大利",
          checkValue: false,
          indeterminate: false,
        },
        {
          items: [
            { title: "巴塞隆納", checkValue: false },
            { title: "馬德里", checkValue: false },
            { title: "格拉納達", checkValue: false },
            { title: "馬拉加", checkValue: false },
            { title: "賽維亞", checkValue: false },
            { title: "柯爾多瓦", checkValue: false },
            { title: "畢爾包", checkValue: false },
          ],
          title: "西班牙",
          checkValue: false,
          indeterminate: false,
        },
      ],
    };
  },
  methods: {
    showMoreHandler() {
      this.showMore = true;
      this.limitLength = this.items.length;
    },
    // handlerChange(e, item) {
    //   console.log(item.parent);
    //   item.items.forEach((child) => {
    //     child.checkValue = e ? true : false;
    //   });
    // },
    // handlerSubChange(e, item) {
    //   const filterItem = this.items.filter((i) => i.title === item.belong);
    //   let checker = (arr) => arr.every((v) => v.checkValue === true);
    //   filterItem[0].indeterminate = checker(filterItem[0].items) ? false : true;
    //   item.items.forEach((child) => {
    //     child.checkValue = e ? true : false;
    //   });
    // },
  },
};
</script>
<style lang="scss" scoped>
.location__block {
  background: #fff;
  border-radius: 6px;
  .location__inputbox {
    position: relative;
    padding: 0px 16px;
    .location__input {
      border: 1px solid #eaeaea;
      border-radius: 4px;
      height: 40px;
      width: 100%;
      font-size: 0.9rem;
      padding: 10px 14px 10px 38px;
      &:focus {
        outline: none;
      }
    }
    .search {
      position: absolute;
      width: 20px;
      height: 20px;
      left: 25px;
      top: 10px;
    }
  }
  .location__checkbox {
    height: 30px;
    position: relative;
    top: -8px;
  }
  ::v-deep .theme--light.v-input.v-input--indeterminate {
    color: #ff8800;
  }
  .location__cityitem {
    border-bottom: 1px solid #eee;
    &:hover {
      background: #f5f5f5;
      cursor: default;
    }
  }
  .location__more {
    padding: 0px 16px;
    .location__morebtn {
      border: 1px solid #ff8800;
      border-radius: 4px;
      color: #ff8800;
      padding: 8px 20px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
