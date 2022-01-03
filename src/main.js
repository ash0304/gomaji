import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueTelInputVuetify, {
  vuetify,
});

// css
import "@/styles/index.scss";

// svg組件
import "@/icons";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
