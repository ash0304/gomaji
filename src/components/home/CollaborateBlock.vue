<template>
  <v-row>
    <v-col class="collaborate__block">
      <v-container class="py-0">
        <v-row>
          <v-col cols="12">
            <div class="collaborate__title">與一起旅行社共同營運。</div>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "CollaborateBlock",
};
</script>
<style lang="scss" scoped>
.collaborate__block {
  background: #444;
  display: flex;
  align-items: center;
  .collaborate__title {
    color: white;
  }
}
</style>
