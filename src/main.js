import Vue from "vue";
import App from "./App.vue";
import { DropdownsInstaller } from "@progress/kendo-dropdowns-vue-wrapper";
Vue.use(DropdownsInstaller);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
