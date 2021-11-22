<template>
  <div>
    <v-list>
      <v-list-group v-for="item in items" :key="item.title" no-action>
        <template v-slot:activator>
          <!-- custom -->
          <v-checkbox></v-checkbox>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-checkbox></v-checkbox>
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "LocationSearch",
  data() {
    return {
      items: [
        {
          items: [
            { title: "台北" },
            { title: "台南" },
            { title: "新北市" },
            { title: "宜蘭" },
            { title: "新竹" },
            { title: "台中" },
            { title: "高雄" },
          ],
          title: "台灣",
        },
        {
          items: [
            { title: "東京" },
            { title: "大阪" },
            { title: "北海道" },
            { title: "沖繩" },
            { title: "京都" },
            { title: "九州" },
            { title: "名古屋" },
          ],
          title: "日本",
        },
        {
          items: [
            { title: "首爾" },
            { title: "濟州島" },
            { title: "京畿道" },
            { title: "釜山" },
            { title: "江原道" },
            { title: "大邱" },
            { title: "仁川" },
          ],
          title: "韓國",
        },
        {
          items: [
            { title: "曼谷" },
            { title: "芭達雅" },
            { title: "普吉島" },
            { title: "青邁" },
            { title: "華欣" },
            { title: "春武里府" },
            { title: "清萊" },
          ],
          title: "泰國",
        },
        {
          items: [
            { title: "紐約" },
            { title: "舊金山" },
            { title: "拉斯維加斯" },
            { title: "洛杉磯" },
            { title: "奧蘭多" },
            { title: "聖地牙哥" },
            { title: "華盛頓特區" },
          ],
          title: "美國",
        },
        {
          items: [
            { title: "羅馬" },
            { title: "佛羅倫斯" },
            { title: "威尼斯" },
            { title: "米蘭" },
            { title: "那不勒斯" },
            { title: "杜林" },
            { title: "普利亞" },
          ],
          title: "義大利",
        },
        {
          items: [
            { title: "巴塞隆納" },
            { title: "馬德里" },
            { title: "格拉納達" },
            { title: "馬拉加" },
            { title: "賽維亞" },
            { title: "柯爾多瓦" },
            { title: "畢爾包" },
          ],
          title: "西班牙",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
