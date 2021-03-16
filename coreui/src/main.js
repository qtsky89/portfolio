import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store";
import axios from "axios";

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.prototype.$log = console.log.bind(console);

// axios setting
Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.timeout = 30000;

// vuex setting
Vue.prototype.$store = store;

// bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// django setting
let local = require("../vue.config.local.js");
store.commit("set", ["DJANGO", local.djangoHost]);

new Vue({
  el: "#app",
  router,
  store,
  icons,
  template: "<App/>",
  components: {
    App,
  },
});
