<template>
  <v-container fluid id="history__page">
    <v-container>
      <v-row>
        <v-col cols="12" class="mt-12">
          <HistoryCard />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import HistoryCard from "@/components/history/HistoryCard";

export default {
  name: "History",
  components: { HistoryCard },
};
</script>
<style lang="scss" scoped>
#history__page {
  background: #f5f5f5;
}
</style>
