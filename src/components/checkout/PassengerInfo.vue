<template>
  <div>
    <div class="mb-2 text-body-2">乘客數量</div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">成人(18 - 99歲)</div>
        <v-select :items="['1', '2']" value="1" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">孩童(6 - 17歲)</div>
        <v-select :items="['0', '2']" value="0" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">嬰幼兒(0 - 5歲)</div>
        <v-select :items="['0', '2']" value="0" outlined dense></v-select>
      </v-col>
    </v-row>
    <div class="mb-2 text-body-2">行李數量</div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">手提行李(20吋以下)</div>
        <v-select :items="['1', '2']" value="1" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">托運行李(21吋以上)</div>
        <v-select :items="['0', '2']" value="0" outlined dense></v-select>
      </v-col>
    </v-row>
    <div class="mb-2 text-body-2">兒童座椅數量</div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">店家提供</div>
        <v-select :items="['1', '2']" value="0" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">自備座椅</div>
        <v-select :items="['0', '2']" value="0" outlined dense></v-select>
      </v-col>
    </v-row>
    <div class="mb-2 text-body-2">嬰兒座椅數量</div>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">店家提供</div>
        <v-select :items="['1', '2']" value="0" outlined dense></v-select>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4" class="py-0">
        <div class="text-body-2 mb-2">自備座椅</div>
        <v-select :items="['0', '2']" value="0" outlined dense></v-select>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "PassenagerInfo",
};
</script>
<style lang="scss" scoped></style>
