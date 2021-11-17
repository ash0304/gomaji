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
  </v-app>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return {};
  },
};
</script>
