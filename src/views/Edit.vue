<template>
  <v-container fluid id="edit__page">
    <v-container>
      <v-row>
        <v-col cols="12" class="mt-12">
          <div class="outer">
            <EditCard />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import EditCard from "@/components/edit/EditCard";

export default {
  name: "Edit",
  components: { EditCard },
};
</script>
<style lang="scss" scoped>
#edit__page {
  background: #f5f5f5;
  .outer {
    min-height: 702px;
  }
}
</style>
