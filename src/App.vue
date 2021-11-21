<template>
  <v-app>
    <!-- header -->
    <Header @showModal="openCatcher" />
    <!-- main -->
    <v-main>
      <router-view />
      <!-- footer -->
      <Footer />
    </v-main>
    <!-- Cookie Check -->
    <CookieCheck />
    <!-- Search Modal -->
    <SearchModal :showSearch="showSearch" @closeModal="closeCatcher" />
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieCheck from "@/components/global/CookieCheck";
import SearchModal from "@/components/global/SearchModal";

export default {
  name: "App",
  components: { Header, Footer, CookieCheck, SearchModal },
  data() {
    return {
      showSearch: false,
    };
  },
  methods: {
    openCatcher(value) {
      this.showSearch = value;
    },
    closeCatcher(value) {
      this.showSearch = value;
    },
  },
};
</script>
