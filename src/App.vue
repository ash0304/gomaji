<template>
  <v-app>
    <!-- header -->
    <Header />
    <!-- main -->
    <v-main>
      <router-view />
      <!-- footer -->
      <Footer />
    </v-main>
    <!-- Cookie Check -->
    <CookieCheck />
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieCheck from "@/components/home/CookieCheck";

export default {
  name: "App",
  components: { Header, Footer, CookieCheck },
  data() {
    return {};
  },
};
</script>
